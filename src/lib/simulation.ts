import { SimulationType, Question } from "@/lib/types";
import { questions } from "@/lib/data/questions";

export const simulationConfig: Record<
  SimulationType,
  { label: string; description: string; questionCount: number; secondsPerQuestion: number }
> = {
  mini: { label: "Mini simulado", description: "Aquecimento rápido, poucos minutos.", questionCount: 5, secondsPerQuestion: 90 },
  rapido: { label: "Simulado rápido", description: "Sessão curta para o dia a dia.", questionCount: 10, secondsPerQuestion: 90 },
  medio: { label: "Simulado médio", description: "Cobertura mais ampla das áreas.", questionCount: 15, secondsPerQuestion: 110 },
  personalizado: { label: "Personalizado", description: "Foco nas suas áreas prioritárias.", questionCount: 12, secondsPerQuestion: 110 },
  inteligente: { label: "Inteligente", description: "Selecionado pelo algoritmo com base nos seus erros.", questionCount: 12, secondsPerQuestion: 110 },
  completo: { label: "Simulado completo", description: "Todas as questões disponíveis no banco, no formato da prova.", questionCount: questions.length, secondsPerQuestion: 130 },
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pickSimulationQuestions(type: SimulationType): Question[] {
  const config = simulationConfig[type];
  const count = Math.min(config.questionCount, questions.length);
  return shuffle(questions).slice(0, count);
}
