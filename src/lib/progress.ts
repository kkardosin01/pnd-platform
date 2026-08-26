import { TopicStatus } from "@/lib/types";

// Constantes e helpers puros, sem dependência do Supabase — seguros para
// uso tanto em Server Components quanto em Client Components.
// Para dados reais de progresso do usuário, ver `src/lib/progress-data.ts`.

export function getDaysUntilExam(examDateISO: string) {
  if (!examDateISO) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const examDate = new Date(examDateISO + "T00:00:00");
  const diffMs = examDate.getTime() - today.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export const statusLabels: Record<TopicStatus, string> = {
  nao_iniciado: "Não iniciado",
  em_andamento: "Em andamento",
  revisar: "Revisar",
  dominado: "Dominado",
};

export const statusBadgeClasses: Record<TopicStatus, string> = {
  nao_iniciado: "bg-muted text-muted-foreground border-transparent",
  em_andamento: "bg-blue-100 text-blue-700 border-transparent dark:bg-blue-950 dark:text-blue-300",
  revisar: "bg-amber-100 text-amber-700 border-transparent dark:bg-amber-950 dark:text-amber-300",
  dominado: "bg-emerald-100 text-emerald-700 border-transparent dark:bg-emerald-950 dark:text-emerald-300",
};

/** Mapeia o campo `color` das matérias (definido em data/subjects.ts) para
 * classes Tailwind estáticas — necessário porque o JIT não resolve nomes
 * de classe montados dinamicamente. */
export const subjectColorClasses: Record<string, { bg: string; text: string; ring: string }> = {
  violet: { bg: "bg-violet-100 dark:bg-violet-950", text: "text-violet-700 dark:text-violet-300", ring: "ring-violet-200 dark:ring-violet-900" },
  blue: { bg: "bg-blue-100 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300", ring: "ring-blue-200 dark:ring-blue-900" },
  amber: { bg: "bg-amber-100 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300", ring: "ring-amber-200 dark:ring-amber-900" },
  cyan: { bg: "bg-cyan-100 dark:bg-cyan-950", text: "text-cyan-700 dark:text-cyan-300", ring: "ring-cyan-200 dark:ring-cyan-900" },
  rose: { bg: "bg-rose-100 dark:bg-rose-950", text: "text-rose-700 dark:text-rose-300", ring: "ring-rose-200 dark:ring-rose-900" },
  emerald: { bg: "bg-emerald-100 dark:bg-emerald-950", text: "text-emerald-700 dark:text-emerald-300", ring: "ring-emerald-200 dark:ring-emerald-900" },
  red: { bg: "bg-red-100 dark:bg-red-950", text: "text-red-700 dark:text-red-300", ring: "ring-red-200 dark:ring-red-900" },
  orange: { bg: "bg-orange-100 dark:bg-orange-950", text: "text-orange-700 dark:text-orange-300", ring: "ring-orange-200 dark:ring-orange-900" },
  yellow: { bg: "bg-yellow-100 dark:bg-yellow-950", text: "text-yellow-700 dark:text-yellow-300", ring: "ring-yellow-200 dark:ring-yellow-900" },
  indigo: { bg: "bg-indigo-100 dark:bg-indigo-950", text: "text-indigo-700 dark:text-indigo-300", ring: "ring-indigo-200 dark:ring-indigo-900" },
  pink: { bg: "bg-pink-100 dark:bg-pink-950", text: "text-pink-700 dark:text-pink-300", ring: "ring-pink-200 dark:ring-pink-900" },
  slate: { bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-700 dark:text-slate-300", ring: "ring-slate-200 dark:ring-slate-700" },
  teal: { bg: "bg-teal-100 dark:bg-teal-950", text: "text-teal-700 dark:text-teal-300", ring: "ring-teal-200 dark:ring-teal-900" },
  lime: { bg: "bg-lime-100 dark:bg-lime-950", text: "text-lime-700 dark:text-lime-300", ring: "ring-lime-200 dark:ring-lime-900" },
};
