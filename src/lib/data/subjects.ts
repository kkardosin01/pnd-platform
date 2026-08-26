import { Subject, Topic } from "@/lib/types";

/**
 * Agrupamento didático dos 44 objetos de conhecimento oficiais em "matérias".
 * O agrupamento é uma decisão editorial (para fins de estudo), mas cada tópico
 * dentro de uma matéria aponta 1:1 para um objeto de conhecimento oficial real
 * (ver knowledge-objects.ts) — nenhum tópico é inventado fora da matriz.
 */
export const subjects: Subject[] = [
  // Formação Geral Docente
  { id: "sub-fundamentos", name: "Fundamentos da Educação", icon: "BookOpen", color: "violet", area: "formacao_geral" },
  { id: "sub-teorias-didatica", name: "Teorias Pedagógicas e Didática", icon: "GraduationCap", color: "blue", area: "formacao_geral" },
  { id: "sub-legislacao", name: "Legislação e Políticas Públicas", icon: "Scale", color: "amber", area: "formacao_geral" },
  { id: "sub-pesquisa-tec", name: "Pesquisa e Tecnologias Educacionais", icon: "FlaskConical", color: "cyan", area: "formacao_geral" },
  { id: "sub-inclusao-fgd", name: "Inclusão, Diversidade e Direitos Humanos", icon: "Users", color: "rose", area: "formacao_geral" },
  { id: "sub-docencia", name: "Docência e Comunidade Escolar", icon: "School", color: "emerald", area: "formacao_geral" },

  // Componente específico de Pedagogia
  { id: "sub-alfabetizacao", name: "Alfabetização e Letramento", icon: "PenLine", color: "red", area: "pedagogia_especifico" },
  { id: "sub-educ-infantil", name: "Educação Infantil", icon: "Baby", color: "orange", area: "pedagogia_especifico" },
  { id: "sub-didatica-ped", name: "Didática e Currículo em Pedagogia", icon: "NotebookPen", color: "yellow", area: "pedagogia_especifico" },
  { id: "sub-desenvolvimento", name: "Desenvolvimento Humano e Aprendizagem", icon: "Brain", color: "indigo", area: "pedagogia_especifico" },
  { id: "sub-inclusao-ped", name: "Educação Especial e Inclusiva", icon: "HeartHandshake", color: "pink", area: "pedagogia_especifico" },
  { id: "sub-gestao", name: "Gestão e Organização Escolar", icon: "ClipboardList", color: "slate", area: "pedagogia_especifico" },
  { id: "sub-avaliacao", name: "Avaliação da Aprendizagem", icon: "CheckSquare", color: "teal", area: "pedagogia_especifico" },
  { id: "sub-trabalho-corpo", name: "Corpo, Ludicidade e Trabalho Docente", icon: "Activity", color: "lime", area: "pedagogia_especifico" },
];

export const topics: Topic[] = [
  // Fundamentos da Educação
  { id: "top-fgd-01", subjectId: "sub-fundamentos", knowledgeObjectId: "fgd-01", name: "Filosofia da educação", order: 1 },
  { id: "top-fgd-02", subjectId: "sub-fundamentos", knowledgeObjectId: "fgd-02", name: "História da educação", order: 2 },
  { id: "top-fgd-03", subjectId: "sub-fundamentos", knowledgeObjectId: "fgd-03", name: "Sociologia da educação", order: 3 },
  { id: "top-fgd-04", subjectId: "sub-fundamentos", knowledgeObjectId: "fgd-04", name: "Psicologia da educação", order: 4 },

  // Teorias Pedagógicas e Didática
  { id: "top-fgd-05", subjectId: "sub-teorias-didatica", knowledgeObjectId: "fgd-05", name: "Teorias pedagógicas", order: 1 },
  { id: "top-fgd-06", subjectId: "sub-teorias-didatica", knowledgeObjectId: "fgd-06", name: "Didática e metodologias de ensino", order: 2 },
  { id: "top-fgd-07", subjectId: "sub-teorias-didatica", knowledgeObjectId: "fgd-07", name: "Teorias e práticas de currículo", order: 3 },

  // Legislação e Políticas Públicas
  { id: "top-fgd-08", subjectId: "sub-legislacao", knowledgeObjectId: "fgd-08", name: "Políticas públicas, organização, financiamento e avaliação da educação", order: 1 },
  { id: "top-fgd-17", subjectId: "sub-legislacao", knowledgeObjectId: "fgd-17", name: "Planejamento, organização e gestão democrática educacional", order: 2 },
  { id: "top-fgd-18", subjectId: "sub-legislacao", knowledgeObjectId: "fgd-18", name: "Implementação e avaliação de currículos e projetos político-pedagógicos", order: 3 },

  // Pesquisa e Tecnologias Educacionais
  { id: "top-fgd-09", subjectId: "sub-pesquisa-tec", knowledgeObjectId: "fgd-09", name: "Metodologia de pesquisa em educação e ensino", order: 1 },
  { id: "top-fgd-10", subjectId: "sub-pesquisa-tec", knowledgeObjectId: "fgd-10", name: "Tecnologias da comunicação e informação nas práticas educativas", order: 2 },
  { id: "top-fgd-11", subjectId: "sub-pesquisa-tec", knowledgeObjectId: "fgd-11", name: "Letramento científico", order: 3 },

  // Inclusão, Diversidade e Direitos Humanos (FGD)
  { id: "top-fgd-12", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-12", name: "Educação especial e inclusiva", order: 1 },
  { id: "top-fgd-13", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-13", name: "Libras, cultura e identidade surda", order: 2 },
  { id: "top-fgd-20", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-20", name: "Histórias e culturas africanas, afro-brasileiras e indígenas", order: 3 },
  { id: "top-fgd-21", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-21", name: "Educação, inclusão e direitos humanos", order: 4 },
  { id: "top-fgd-22", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-22", name: "Educação socioambiental", order: 5 },
  { id: "top-fgd-23", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-23", name: "Educação para as relações de gênero e sexualidade", order: 6 },
  { id: "top-fgd-24", subjectId: "sub-inclusao-fgd", knowledgeObjectId: "fgd-24", name: "Educação para as relações étnico-raciais", order: 7 },

  // Docência e Comunidade Escolar
  { id: "top-fgd-14", subjectId: "sub-docencia", knowledgeObjectId: "fgd-14", name: "Identidade e especificidades do trabalho docente", order: 1 },
  { id: "top-fgd-15", subjectId: "sub-docencia", knowledgeObjectId: "fgd-15", name: "Planejamento e avaliação do ensino e da aprendizagem", order: 2 },
  { id: "top-fgd-16", subjectId: "sub-docencia", knowledgeObjectId: "fgd-16", name: "Práticas educativas para crianças, adolescentes, jovens e adultos", order: 3 },
  { id: "top-fgd-19", subjectId: "sub-docencia", knowledgeObjectId: "fgd-19", name: "Articulação entre escola, família, comunidade e movimentos sociais", order: 4 },

  // Alfabetização e Letramento
  { id: "top-ped-05", subjectId: "sub-alfabetizacao", knowledgeObjectId: "ped-05", name: "Alfabetização e letramento", order: 1 },
  { id: "top-ped-06", subjectId: "sub-alfabetizacao", knowledgeObjectId: "ped-06", name: "Letramento literário", order: 2 },

  // Educação Infantil
  { id: "top-ped-07", subjectId: "sub-educ-infantil", knowledgeObjectId: "ped-07", name: "Políticas de educação infantil", order: 1 },
  { id: "top-ped-08", subjectId: "sub-educ-infantil", knowledgeObjectId: "ped-08", name: "Criança e infância (conceitos e características)", order: 2 },
  { id: "top-ped-11", subjectId: "sub-educ-infantil", knowledgeObjectId: "ped-11", name: "Aprendizagem e desenvolvimento na educação infantil e anos iniciais", order: 3 },
  { id: "top-ped-18", subjectId: "sub-educ-infantil", knowledgeObjectId: "ped-18", name: "Práticas de ensino na educação infantil", order: 4 },

  // Didática e Currículo em Pedagogia
  { id: "top-ped-03", subjectId: "sub-didatica-ped", knowledgeObjectId: "ped-03", name: "Fundamentos metodológicos do ensino (Port., Mat., Ciências, Geo., História, Artes, Ed. Física)", order: 1 },
  { id: "top-ped-09", subjectId: "sub-didatica-ped", knowledgeObjectId: "ped-09", name: "Ensino, currículo e práticas interdisciplinares", order: 2 },
  { id: "top-ped-16", subjectId: "sub-didatica-ped", knowledgeObjectId: "ped-16", name: "Pedagogia como ciência da prática educativa", order: 3 },
  { id: "top-ped-17", subjectId: "sub-didatica-ped", knowledgeObjectId: "ped-17", name: "Relação ensino-aprendizagem e dificuldades de escolarização", order: 4 },

  // Desenvolvimento Humano e Aprendizagem
  { id: "top-ped-12", subjectId: "sub-desenvolvimento", knowledgeObjectId: "ped-12", name: "Aprendizagem e desenvolvimento de adolescentes, jovens, adultos e idosos", order: 1 },
  { id: "top-ped-13", subjectId: "sub-desenvolvimento", knowledgeObjectId: "ped-13", name: "Práticas educativas para crianças, jovens, adultos e idosos", order: 2 },

  // Educação Especial e Inclusiva (Pedagogia)
  { id: "top-ped-14", subjectId: "sub-inclusao-ped", knowledgeObjectId: "ped-14", name: "Práticas de atendimento educacional especializado", order: 1 },

  // Gestão e Organização Escolar
  { id: "top-ped-10", subjectId: "sub-gestao", knowledgeObjectId: "ped-10", name: "Atuação de pedagogos em espaços não escolares", order: 1 },
  { id: "top-ped-15", subjectId: "sub-gestao", knowledgeObjectId: "ped-15", name: "Educação do/no campo e movimentos sociais", order: 2 },
  { id: "top-ped-20", subjectId: "sub-gestao", knowledgeObjectId: "ped-20", name: "Organização, planejamento e gestão da educação", order: 3 },

  // Avaliação da Aprendizagem
  { id: "top-ped-19", subjectId: "sub-avaliacao", knowledgeObjectId: "ped-19", name: "Políticas e práticas de avaliação", order: 1 },

  // Corpo, Ludicidade e Trabalho Docente
  { id: "top-ped-01", subjectId: "sub-trabalho-corpo", knowledgeObjectId: "ped-01", name: "Antropologia da educação", order: 1 },
  { id: "top-ped-02", subjectId: "sub-trabalho-corpo", knowledgeObjectId: "ped-02", name: "Trabalho e educação", order: 2 },
  { id: "top-ped-04", subjectId: "sub-trabalho-corpo", knowledgeObjectId: "ped-04", name: "Corpo, movimento e ludicidade", order: 3 },
];

export const getTopicsBySubject = (subjectId: string) =>
  topics.filter((t) => t.subjectId === subjectId).sort((a, b) => a.order - b.order);

export const getTopicLabel = (topicId: string) => topics.find((t) => t.id === topicId)?.name ?? topicId;
