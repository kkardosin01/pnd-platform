import { getPriorityTopics } from "@/lib/progress-data";
import { UserProgress } from "@/lib/types";

const weekdayLabels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

export interface ScheduleDay {
  day: string;
  minutes: number;
  topics: ReturnType<typeof getPriorityTopics>;
}

/**
 * Gera um cronograma semanal simples: distribui as horas disponíveis da
 * semana em 7 dias e encaixa os tópicos prioritários (piores/menos
 * estudados primeiro) em round-robin pelos dias.
 */
export function buildWeeklySchedule(
  progressMap: Map<string, UserProgress>,
  weeklyAvailabilityHours: number
): ScheduleDay[] {
  const priorityTopics = getPriorityTopics(progressMap, 14);
  const minutesPerDay = Math.round((weeklyAvailabilityHours * 60) / 7);

  return weekdayLabels.map((day, i) => ({
    day,
    minutes: minutesPerDay,
    topics: priorityTopics.filter((_, idx) => idx % 7 === i).slice(0, 2),
  }));
}
