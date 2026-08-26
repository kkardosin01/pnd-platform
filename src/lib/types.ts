// Tipos do domínio — espelham o schema definido em supabase/migrations/0001_init.sql

export type KnowledgeArea = "formacao_geral" | "pedagogia_especifico";

export interface KnowledgeObject {
  id: string;
  area: KnowledgeArea;
  officialCode: string; // ex: "FGD-V", "PED-XVI"
  title: string; // texto oficial do objeto de conhecimento
  sourcePortaria: string; // ex: "Portaria Inep nº 315/2025"
}

export type TopicStatus = "nao_iniciado" | "em_andamento" | "revisar" | "dominado";

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string; // usado nas badges de área prioritária
  area: KnowledgeArea;
}

export interface Topic {
  id: string;
  subjectId: string;
  knowledgeObjectId: string;
  name: string;
  order: number;
}

export interface StudyMaterial {
  id: string;
  topicId: string;
  type: "pdf" | "video" | "article" | "book";
  title: string;
  url: string;
  sourceLabel: string;
}

export type QuestionOrigin =
  | "PND_2025_OFICIAL"
  | "ENADE_LICENCIATURAS_2025_OFICIAL"
  | "ENADE_PEDAGOGIA_HISTORICO_REFERENCIA"
  | "CONCURSO_PUBLICO_OFICIAL"
  | "IA_INEDITA";

export type Difficulty = "facil" | "media" | "dificil";

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface Question {
  id: string;
  topicId: string;
  statement: string;
  options: QuestionOption[];
  difficulty: Difficulty;
  origin: QuestionOrigin;
  originYear?: number;
  originLink?: string;
  competencyRef: string; // referência textual da competência avaliada
}

export interface QuestionAttempt {
  id: string;
  userId: string;
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpentSeconds: number;
  attemptedAt: string;
}

export type SimulationType =
  | "mini"
  | "rapido"
  | "medio"
  | "personalizado"
  | "inteligente"
  | "completo";

export interface Simulation {
  id: string;
  userId: string;
  type: SimulationType;
  questionIds: string[];
  startedAt: string;
  finishedAt?: string;
  durationSeconds: number;
}

export interface SimulationResult {
  simulationId: string;
  scoreObjective: number;
  scoreDiscursive?: number;
  scoreGeneral: number;
  performanceByArea: Record<string, { correct: number; total: number }>;
}

export interface UserProgress {
  userId: string;
  topicId: string;
  status: TopicStatus;
  accuracyRate: number; // 0-1
  lastStudiedAt?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  examDate: string; // ISO date
  weeklyAvailabilityHours: number;
  semester: number;
}
