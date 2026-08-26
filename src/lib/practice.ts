import { questions } from "@/lib/data/questions";
import { getTopicsBySubject } from "@/lib/data/subjects";
import { getUserProgressMap, getPriorityTopics } from "@/lib/progress-data";
import { Question } from "@/lib/types";

/** Monta a fila de questões de uma sessão de prática a partir dos filtros da URL. */
export async function buildPracticeQueue(params: {
  topico?: string;
  materia?: string;
  modo?: string;
}): Promise<Question[]> {
  if (params.topico) {
    return questions.filter((q) => q.topicId === params.topico);
  }

  if (params.materia) {
    const topicIds = new Set(getTopicsBySubject(params.materia).map((t) => t.id));
    return questions.filter((q) => topicIds.has(q.topicId));
  }

  if (params.modo === "inteligente") {
    const progressMap = await getUserProgressMap();
    const priorityTopicIds = new Set(getPriorityTopics(progressMap, 6).map((p) => p.topic.id));
    const prioritized = questions.filter((q) => priorityTopicIds.has(q.topicId));
    return prioritized.length > 0 ? prioritized : questions;
  }

  return questions;
}
