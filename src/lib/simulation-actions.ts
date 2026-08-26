"use server";

import { createClient } from "@/lib/supabase/server";
import { questions } from "@/lib/data/questions";
import { topics } from "@/lib/data/subjects";
import { recordAttempt } from "@/lib/attempts";
import { simulationConfig, pickSimulationQuestions } from "@/lib/simulation";
import { SimulationType } from "@/lib/types";

/** Cria um novo simulado (linha em `simulations` + `simulation_questions`) e
 * retorna o id, ou null se o usuário não estiver autenticado. */
export async function startSimulation(type: SimulationType): Promise<string | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const config = simulationConfig[type];
  const picked = pickSimulationQuestions(type);

  const { data: simulation, error } = await supabase
    .from("simulations")
    .insert({
      user_id: user.id,
      type,
      duration_seconds: picked.length * config.secondsPerQuestion,
    })
    .select("id")
    .single();

  if (error || !simulation) return null;

  await supabase.from("simulation_questions").insert(
    picked.map((q, i) => ({ simulation_id: simulation.id, question_id: q.id, order: i }))
  );

  return simulation.id;
}

export interface SimulationRunData {
  id: string;
  type: SimulationType;
  questionIds: string[];
  durationSeconds: number;
}

/** Carrega um simulado (para a tela de prova): tipo, duração e ordem das questões. */
export async function getSimulation(id: string): Promise<SimulationRunData | null> {
  const supabase = await createClient();

  const { data: sim } = await supabase
    .from("simulations")
    .select("id, type, duration_seconds")
    .eq("id", id)
    .single();
  if (!sim) return null;

  const { data: simQuestions } = await supabase
    .from("simulation_questions")
    .select("question_id, order")
    .eq("simulation_id", id)
    .order("order", { ascending: true });

  return {
    id: sim.id,
    type: sim.type,
    questionIds: (simQuestions ?? []).map((q) => q.question_id),
    durationSeconds: sim.duration_seconds,
  };
}

/** Finaliza um simulado: calcula o placar, registra as tentativas
 * individuais (`question_attempts`) e grava o resultado agregado. */
export async function submitSimulation(
  simulationId: string,
  answers: Record<string, string>
): Promise<void> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const { data: simQuestions } = await supabase
    .from("simulation_questions")
    .select("question_id")
    .eq("simulation_id", simulationId)
    .order("order", { ascending: true });

  const questionIds = (simQuestions ?? []).map((q) => q.question_id);
  const simQuestionsData = questionIds.map((qid) => questions.find((q) => q.id === qid)!).filter(Boolean);

  let correct = 0;
  const performanceByTopic: Record<string, { correct: number; total: number; topicName: string }> = {};

  for (const q of simQuestionsData) {
    const selected = answers[q.id];
    const isCorrect = q.options.find((o) => o.id === selected)?.isCorrect ?? false;
    if (isCorrect) correct++;

    const topicName = topics.find((t) => t.id === q.topicId)?.name ?? q.topicId;
    const entry = performanceByTopic[q.topicId] ?? { correct: 0, total: 0, topicName };
    entry.total++;
    if (isCorrect) entry.correct++;
    performanceByTopic[q.topicId] = entry;

    if (selected) {
      await recordAttempt({ questionId: q.id, selectedOptionId: selected, isCorrect });
    }
  }

  const finishedAt = new Date().toISOString();
  const scorePercent = simQuestionsData.length > 0 ? Math.round((correct / simQuestionsData.length) * 100) : 0;

  await supabase.from("simulations").update({ finished_at: finishedAt }).eq("id", simulationId);

  await supabase.from("simulation_results").upsert({
    simulation_id: simulationId,
    score_objective: scorePercent,
    score_general: scorePercent,
    performance_by_area: {
      answers,
      correctCount: correct,
      totalCount: simQuestionsData.length,
      performanceByTopic,
      finishedAt,
    },
  });
}

export interface SimulationResultData {
  simulationId: string;
  type: SimulationType;
  answers: Record<string, string>;
  scorePercent: number;
  correctCount: number;
  totalCount: number;
  performanceByTopic: Record<string, { correct: number; total: number; topicName: string }>;
  finishedAt: string;
}

/** Carrega o resultado de um simulado já finalizado, para a tela de relatório. */
export async function getSimulationResult(id: string): Promise<SimulationResultData | null> {
  const supabase = await createClient();

  const { data: sim } = await supabase.from("simulations").select("id, type").eq("id", id).single();
  if (!sim) return null;

  const { data: result } = await supabase
    .from("simulation_results")
    .select("performance_by_area")
    .eq("simulation_id", id)
    .single();
  if (!result) return null;

  const perf = result.performance_by_area as {
    answers: Record<string, string>;
    correctCount: number;
    totalCount: number;
    performanceByTopic: Record<string, { correct: number; total: number; topicName: string }>;
    finishedAt: string;
  };

  return {
    simulationId: id,
    type: sim.type,
    answers: perf.answers,
    scorePercent: perf.totalCount > 0 ? Math.round((perf.correctCount / perf.totalCount) * 100) : 0,
    correctCount: perf.correctCount,
    totalCount: perf.totalCount,
    performanceByTopic: perf.performanceByTopic,
    finishedAt: perf.finishedAt,
  };
}
