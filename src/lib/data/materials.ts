import { StudyMaterial } from "@/lib/types";

/**
 * Materiais de estudo reais, com links verificados em pesquisa (agosto/2026).
 * Cada material aponta para uma fonte oficial (legislação, MEC/CNE, Inep).
 * Nenhuma URL foi inventada — todas foram confirmadas via busca antes do cadastro.
 */
export const materials: StudyMaterial[] = [
  {
    id: "mat-ldb",
    topicId: "top-fgd-08",
    type: "pdf",
    title: "Lei nº 9.394/1996 — Lei de Diretrizes e Bases da Educação Nacional (LDB)",
    url: "http://www.planalto.gov.br/ccivil_03/leis/l9394.htm",
    sourceLabel: "Presidência da República — planalto.gov.br",
  },
  {
    id: "mat-dcn-pedagogia",
    topicId: "top-ped-16",
    type: "pdf",
    title: "Resolução CNE/CP nº 1/2006 — Diretrizes Curriculares Nacionais para o Curso de Pedagogia",
    url: "https://portal.mec.gov.br/cne/arquivos/pdf/rcp01_06.pdf",
    sourceLabel: "MEC/CNE",
  },
  {
    id: "mat-dcn-formacao-professores",
    topicId: "top-fgd-14",
    type: "pdf",
    title: "Resolução CNE/CP nº 4/2024 — DCN para a Formação Inicial de Professores da Educação Básica (vigente)",
    url: "https://mecnormas.mec.gov.br/pesquisa/detalhar/5042",
    sourceLabel: "MEC/CNE — base oficial da matriz da PND (Art. 4º da Portaria 331/2025)",
  },
  {
    id: "mat-bncc",
    topicId: "top-ped-09",
    type: "pdf",
    title: "Base Nacional Comum Curricular (BNCC) — Educação Infantil e Ensino Fundamental",
    url: "https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf",
    sourceLabel: "MEC",
  },
  {
    id: "mat-bncc-infantil",
    topicId: "top-ped-18",
    type: "pdf",
    title: "BNCC — Capítulo de Educação Infantil (campos de experiência)",
    url: "https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf",
    sourceLabel: "MEC",
  },
  {
    id: "mat-eca",
    topicId: "top-fgd-21",
    type: "pdf",
    title: "Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente (ECA)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm",
    sourceLabel: "Presidência da República — planalto.gov.br",
  },
  {
    id: "mat-matriz-oficial",
    topicId: "top-ped-05",
    type: "pdf",
    title: "Portarias Inep nº 315 a 332/2025 — Matrizes de Referência do Enade Licenciaturas e da PND",
    url: "https://anec.org.br/wp-content/uploads/2025/05/Matrizes-de-Referencia-para-o-ENADE-das-Licenciaturas-e-Prova-Nacional-Docente-PND-1.pdf",
    sourceLabel: "Diário Oficial da União, 28/05/2025 (republicado por ANEC)",
  },
  {
    id: "mat-guia-tecnico",
    topicId: "top-fgd-15",
    type: "pdf",
    title: "Guia de Apoio Técnico — Prova Nacional Docente 2026",
    url: "https://www.gov.br/mec/pt-br/mais-professores/documentos/guiaapoiotecnicoPND2026.pdf",
    sourceLabel: "MEC — Programa Mais Professores para o Brasil",
  },
  {
    id: "mat-inep-pnd",
    topicId: "top-fgd-08",
    type: "article",
    title: "Página oficial da Prova Nacional Docente — legislação, provas e gabaritos",
    url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/prova-nacional-docente",
    sourceLabel: "Inep",
  },
];

export const getMaterialsByTopic = (topicId: string) =>
  materials.filter((m) => m.topicId === topicId);
