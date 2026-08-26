import { createClient } from "@/lib/supabase/server";
import { questions } from "@/lib/data/questions";
import { topics, subjects } from "@/lib/data/subjects";
import { knowledgeObjects } from "@/lib/data/knowledge-objects";
import { TopicStatus, UserProgress } from "@/lib/types";

// Progresso real do usuário, calculado a partir de `question_attempts`
// (Supabase) — server-only, não pode ser importado por Client Components.

const topicIdByQuestionId = new Map(questions.map((q) => [q.id, q.topicId]));

function computeStatus(accuracy: number, attemptCount: number): TopicStatus {
  if (attemptCount === 0) return "nao_iniciado";
  if (attemptCount >= 3 && accuracy >= 0.8) return "dominado";
  if (accuracy < 0.6) return "revisar";
  return "em_andamento";
}

/** Mapa topicId -> progresso do usuário autenticado, com todos os 44 tópicos
 * pré-preenchidos (mesmo os ainda não estudados). */
export async function getUserProgressMap(): Promise<Map<string, UserProgress>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const map = new Map<string, UserProgress>();
  for (const t of topics) {
    map.set(t.id, { userId: user?.id ?? "", topicId: t.id, status: "nao_iniciado", accuracyRate: 0 });
  }
  if (!user) return map;

  const { data: attempts } = await supabase
    .from("question_attempts")
    .select("question_id, is_correct, attempted_at")
    .eq("user_id", user.id);

  const byTopic = new Map<string, { correct: number; total: number; lastAt: string }>();
  for (const a of attempts ?? []) {
    const topicId = topicIdByQuestionId.get(a.question_id);
    if (!topicId) continue;
    const entry = byTopic.get(topicId) ?? { correct: 0, total: 0, lastAt: a.attempted_at };
    entry.total++;
    if (a.is_correct) entry.correct++;
    if (a.attempted_at > entry.lastAt) entry.lastAt = a.attempted_at;
    byTopic.set(topicId, entry);
  }

  for (const [topicId, entry] of byTopic) {
    const accuracy = entry.total > 0 ? entry.correct / entry.total : 0;
    map.set(topicId, {
      userId: user.id,
      topicId,
      status: computeStatus(accuracy, entry.total),
      accuracyRate: accuracy,
      lastStudiedAt: entry.lastAt,
    });
  }

  return map;
}

export function getTopicProgress(progressMap: Map<string, UserProgress>, topicId: string) {
  return progressMap.get(topicId);
}

export function getSubjectStats(progressMap: Map<string, UserProgress>, subjectId: string) {
  const subjectTopics = topics.filter((t) => t.subjectId === subjectId);
  const withProgress = subjectTopics.map((t) => ({ topic: t, progress: progressMap.get(t.id) }));
  const dominado = withProgress.filter((t) => t.progress?.status === "dominado").length;
  const studied = withProgress.filter((t) => t.progress && t.progress.accuracyRate > 0);
  const avgAccuracy =
    studied.length > 0
      ? studied.reduce((sum, t) => sum + (t.progress?.accuracyRate ?? 0), 0) / studied.length
      : 0;

  return {
    total: subjectTopics.length,
    dominado,
    avgAccuracy,
    percentComplete: subjectTopics.length > 0 ? dominado / subjectTopics.length : 0,
  };
}

export function getOverallStats(progressMap: Map<string, UserProgress>) {
  const counts: Record<TopicStatus, number> = {
    nao_iniciado: 0,
    em_andamento: 0,
    revisar: 0,
    dominado: 0,
  };
  for (const p of progressMap.values()) counts[p.status]++;

  const studied = [...progressMap.values()].filter((p) => p.accuracyRate > 0);
  const avgAccuracy =
    studied.length > 0 ? studied.reduce((s, p) => s + p.accuracyRate, 0) / studied.length : 0;

  return {
    totalTopics: topics.length,
    counts,
    avgAccuracy,
    percentComplete: counts.dominado / topics.length,
  };
}

/** Tópicos prioritários para hoje: primeiro "revisar" (pior desempenho primeiro),
 * depois "em_andamento", depois "não iniciado" — nunca "dominado". */
export function getPriorityTopics(progressMap: Map<string, UserProgress>, limit = 5) {
  const order: Record<TopicStatus, number> = {
    revisar: 0,
    em_andamento: 1,
    nao_iniciado: 2,
    dominado: 3,
  };

  return [...progressMap.values()]
    .filter((p) => p.status !== "dominado")
    .sort((a, b) => {
      const orderDiff = order[a.status] - order[b.status];
      if (orderDiff !== 0) return orderDiff;
      return a.accuracyRate - b.accuracyRate;
    })
    .slice(0, limit)
    .map((p) => {
      const topic = topics.find((t) => t.id === p.topicId)!;
      const subject = subjects.find((s) => s.id === topic.subjectId)!;
      const knowledgeObject = knowledgeObjects.find((k) => k.id === topic.knowledgeObjectId);
      return { progress: p, topic, subject, knowledgeObject };
    });
}
