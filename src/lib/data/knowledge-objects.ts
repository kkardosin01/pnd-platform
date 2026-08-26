import { KnowledgeObject } from "@/lib/types";

/**
 * Objetos de conhecimento oficiais da PND.
 *
 * Fonte: Portaria Inep nº 315, de 26/05/2025 (Formação Geral Docente, Art. 6º)
 *        Portaria Inep nº 331, de 26/05/2025 (Componente específico de Pedagogia, Art. 7º)
 * Publicadas no Diário Oficial da União em 28/05/2025, Seção 1, p. 21-30.
 *
 * Texto extraído integralmente do PDF oficial — nenhum item foi criado ou reinterpretado.
 */
export const knowledgeObjects: KnowledgeObject[] = [
  // ── Formação Geral Docente (24 objetos — Art. 6º, Portaria 315/2025) ──
  { id: "fgd-01", area: "formacao_geral", officialCode: "FGD-I", title: "Filosofia da educação", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-02", area: "formacao_geral", officialCode: "FGD-II", title: "História da educação", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-03", area: "formacao_geral", officialCode: "FGD-III", title: "Sociologia da educação", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-04", area: "formacao_geral", officialCode: "FGD-IV", title: "Psicologia da educação", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-05", area: "formacao_geral", officialCode: "FGD-V", title: "Teorias pedagógicas", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-06", area: "formacao_geral", officialCode: "FGD-VI", title: "Didática e metodologias de ensino", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-07", area: "formacao_geral", officialCode: "FGD-VII", title: "Teorias e práticas de currículo", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-08", area: "formacao_geral", officialCode: "FGD-VIII", title: "Políticas públicas, organização, financiamento e avaliação da educação brasileira", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-09", area: "formacao_geral", officialCode: "FGD-IX", title: "Metodologia de pesquisa em educação e ensino", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-10", area: "formacao_geral", officialCode: "FGD-X", title: "Tecnologias da comunicação e informação nas práticas educativas", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-11", area: "formacao_geral", officialCode: "FGD-XI", title: "Letramento científico", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-12", area: "formacao_geral", officialCode: "FGD-XII", title: "Educação especial e inclusiva", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-13", area: "formacao_geral", officialCode: "FGD-XIII", title: "Libras, cultura e identidade surda", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-14", area: "formacao_geral", officialCode: "FGD-XIV", title: "Identidade e especificidades do trabalho docente", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-15", area: "formacao_geral", officialCode: "FGD-XV", title: "Planejamento e avaliação do ensino e da aprendizagem", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-16", area: "formacao_geral", officialCode: "FGD-XVI", title: "Práticas educativas para o processo de aprendizagem de crianças, adolescentes, jovens e adultos", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-17", area: "formacao_geral", officialCode: "FGD-XVII", title: "Planejamento, organização e gestão democrática educacional em espaço escolar e não escolar", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-18", area: "formacao_geral", officialCode: "FGD-XVIII", title: "Implementação e avaliação de currículos, programas educacionais e projetos político-pedagógicos", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-19", area: "formacao_geral", officialCode: "FGD-XIX", title: "Práticas de articulação entre escola, família, comunidade e movimentos sociais", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-20", area: "formacao_geral", officialCode: "FGD-XX", title: "Histórias e culturas africanas, afro-brasileiras e indígenas", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-21", area: "formacao_geral", officialCode: "FGD-XXI", title: "Educação, inclusão e direitos humanos", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-22", area: "formacao_geral", officialCode: "FGD-XXII", title: "Educação socioambiental", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-23", area: "formacao_geral", officialCode: "FGD-XXIII", title: "Educação para as relações de gênero e sexualidade", sourcePortaria: "Portaria Inep nº 315/2025" },
  { id: "fgd-24", area: "formacao_geral", officialCode: "FGD-XXIV", title: "Educação para as relações étnico-raciais", sourcePortaria: "Portaria Inep nº 315/2025" },

  // ── Componente específico de Pedagogia (20 objetos — Art. 7º, Portaria 331/2025) ──
  { id: "ped-01", area: "pedagogia_especifico", officialCode: "PED-I", title: "Antropologia da educação", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-02", area: "pedagogia_especifico", officialCode: "PED-II", title: "Trabalho e educação", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-03", area: "pedagogia_especifico", officialCode: "PED-III", title: "Fundamentos metodológicos específicos do ensino de língua portuguesa, matemática, ciências, geografia, história, artes e educação física", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-04", area: "pedagogia_especifico", officialCode: "PED-IV", title: "Corpo, movimento e ludicidade", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-05", area: "pedagogia_especifico", officialCode: "PED-V", title: "Alfabetização e letramento", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-06", area: "pedagogia_especifico", officialCode: "PED-VI", title: "Letramento literário", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-07", area: "pedagogia_especifico", officialCode: "PED-VII", title: "Políticas de educação infantil", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-08", area: "pedagogia_especifico", officialCode: "PED-VIII", title: "Criança e infância (conceitos e características)", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-09", area: "pedagogia_especifico", officialCode: "PED-IX", title: "Ensino, currículo e práticas interdisciplinares", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-10", area: "pedagogia_especifico", officialCode: "PED-X", title: "Atuação de pedagogos em espaços não escolares", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-11", area: "pedagogia_especifico", officialCode: "PED-XI", title: "Concepções de aprendizagem e de desenvolvimento da criança na educação infantil e nos anos iniciais", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-12", area: "pedagogia_especifico", officialCode: "PED-XII", title: "Concepções de aprendizagem e desenvolvimento de adolescentes, de jovens, de adultos e de idosos", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-13", area: "pedagogia_especifico", officialCode: "PED-XIII", title: "Práticas educativas para o processo de aprendizagem de crianças, de jovens, de adultos e de idosos", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-14", area: "pedagogia_especifico", officialCode: "PED-XIV", title: "Práticas de atendimento educacional especializado", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-15", area: "pedagogia_especifico", officialCode: "PED-XV", title: "Educação do/no campo e movimentos sociais", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-16", area: "pedagogia_especifico", officialCode: "PED-XVI", title: "Pedagogia como ciência da prática educativa", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-17", area: "pedagogia_especifico", officialCode: "PED-XVII", title: "Relação de ensino e aprendizagem e as dificuldades no processo de escolarização", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-18", area: "pedagogia_especifico", officialCode: "PED-XVIII", title: "Práticas de ensino na educação infantil", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-19", area: "pedagogia_especifico", officialCode: "PED-XIX", title: "Políticas e práticas de avaliação", sourcePortaria: "Portaria Inep nº 331/2025" },
  { id: "ped-20", area: "pedagogia_especifico", officialCode: "PED-XX", title: "Organização, planejamento e gestão da educação", sourcePortaria: "Portaria Inep nº 331/2025" },
];

export const getKnowledgeObjectsByArea = (area: KnowledgeObject["area"]) =>
  knowledgeObjects.filter((k) => k.area === area);
