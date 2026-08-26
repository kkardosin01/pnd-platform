"use server";

import { createClient } from "@/lib/supabase/server";
import { QuestionAttempt } from "@/lib/types";

/**
 * Histórico de tentativas de questões (práticas avulsas + simulados),
 * usado pelo Caderno de Erros e por futuras análises de desempenho.
 * Persistido na tabela `question_attempts` do Supabase.
 */
export async function recordAttempt(input: {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("question_attempts").insert({
    user_id: user.id,
    question_id: input.questionId,
    selected_option_id: input.selectedOptionId,
    is_correct: input.isCorrect,
    time_spent_seconds: input.timeSpentSeconds ?? 0,
  });
}

export async function clearWrongQuestion(questionId: string, correctOptionId: string) {
  await recordAttempt({ questionId, selectedOptionId: correctOptionId, isCorrect: true });
}

/** Tentativa mais recente de cada questão do usuário autenticado. */
export async function getLatestAttemptsByQuestion(): Promise<QuestionAttempt[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from("question_attempts")
    .select("id, user_id, question_id, selected_option_id, is_correct, time_spent_seconds, attempted_at")
    .eq("user_id", user.id)
    .order("attempted_at", { ascending: false });

  const seen = new Set<string>();
  const latest: QuestionAttempt[] = [];
  for (const row of data ?? []) {
    if (seen.has(row.question_id)) continue;
    seen.add(row.question_id);
    latest.push({
      id: row.id,
      userId: row.user_id,
      questionId: row.question_id,
      selectedOptionId: row.selected_option_id,
      isCorrect: row.is_correct,
      timeSpentSeconds: row.time_spent_seconds,
      attemptedAt: row.attempted_at,
    });
  }
  return latest;
}
