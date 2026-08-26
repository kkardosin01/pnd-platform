import { Question } from "@/lib/types";
import { pndBatch1 } from "./pnd-2025-batch1";
import { pndBatch2 } from "./pnd-2025-batch2";
import { concursoAocpIfma } from "./concurso-aocp-ifma";
import { concursoFgvSmesp } from "./concurso-fgv-smesp";
import { concursoVunespSantoAndre } from "./concurso-vunesp-santoandre";
import { concursoTopicosLacuna } from "./concurso-topicos-lacuna";

/**
 * Banco de questões — MVP.
 *
 * IMPORTANTE SOBRE A ORIGEM:
 * O array `ineditasQuestions` abaixo contém questões rotuladas como
 * "IA_INEDITA": foram escritas especificamente para este projeto, no estilo
 * de situação-problema/estudo de caso usado pela PND, e ancoradas nos
 * objetos de conhecimento oficiais das Portarias Inep nº 315/2025 (Formação
 * Geral Docente) e nº 331/2025 (Pedagogia). Elas NÃO são questões oficiais
 * do Inep.
 *
 * As 78 questões válidas da PND 2025 — Pedagogia (Tipo 1), extraídas do
 * caderno oficial de prova e conferidas item a item contra o gabarito
 * definitivo do Inep (2 questões anuladas na prova oficial — 45 e 52 — não
 * foram incluídas), estão em `pnd-2025-batch1.ts` e `pnd-2025-batch2.ts`,
 * com origin: "PND_2025_OFICIAL" e originLink apontando para a página
 * oficial de provas e gabaritos do Inep.
 *
 * Questões reais de concursos públicos (Pedagogo/Professor), extraídas dos
 * cadernos oficiais de prova e conferidas item a item contra os gabaritos
 * oficiais definitivos, com origin: "CONCURSO_PUBLICO_OFICIAL":
 * - 20 questões — Concurso IFMA (Edital nº 01/2023, banca AOCP, cargo
 *   Pedagogo, Tipo 01) em `concurso-aocp-ifma.ts`.
 * - 29 questões — Concurso SME-SP (Edital nº 01/2022, banca FGV, cargo
 *   Professor de Educação Infantil e Ensino Fundamental I, Tipo 1) em
 *   `concurso-fgv-smesp.ts`.
 * - 20 questões — Concurso Prefeitura de Santo André (Edital nº 01/2023,
 *   banca VUNESP, cargo Professor de Educação Infantil e Ensino
 *   Fundamental) em `concurso-vunesp-santoandre.ts`.
 * - 20 questões avulsas de bancas variadas (FGV, CEBRASPE, SELECON, FUMARC,
 *   UFMT, FUNDATEC, Instituto Access, ADM&TEC, IBFC) em
 *   `concurso-topicos-lacuna.ts`. Ao contrário dos arquivos acima, este é
 *   agrupado por lacuna de cobertura: reúne questões dos tópicos da taxonomia
 *   que não tinham nenhuma questão no banco, o que deixava a prática
 *   inteligente sem material para tópicos prioritários.
 */

const inedita = "Questão inédita criada para treinamento, baseada nas competências e habilidades previstas na matriz de referência.";

const ineditasQuestions: Question[] = [
  {
    id: "q-001",
    topicId: "top-ped-05",
    statement:
      "Uma professora do 1º ano do Ensino Fundamental percebe que parte da turma já domina a relação grafema-fonema, mas ainda não consegue empregar a escrita em situações sociais de uso, como escrever um bilhete com finalidade real. Considerando a distinção entre alfabetização e letramento, a intervenção mais adequada é:",
    options: [
      { id: "q-001-a", text: "Intensificar exercícios de repetição silábica até a automatização completa antes de qualquer atividade de escrita espontânea.", isCorrect: false },
      { id: "q-001-b", text: "Propor situações reais de uso da escrita (bilhetes, listas, convites) articuladas ao trabalho sistemático com o sistema de escrita alfabética.", isCorrect: true, explanation: "Alfabetizar letrando: o domínio do sistema alfabético deve caminhar junto com práticas sociais de leitura e escrita, e não em etapas estanques." },
      { id: "q-001-c", text: "Suspender o ensino sistemático do sistema alfabético até que o letramento esteja consolidado.", isCorrect: false },
      { id: "q-001-d", text: "Focar exclusivamente em atividades de consciência fonológica oral, sem produção escrita.", isCorrect: false },
      { id: "q-001-e", text: "Avaliar a turma apenas por ditado, já que é o instrumento mais direto para medir a alfabetização.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Alfabetização e letramento (PED-V)",
  },
  {
    id: "q-002",
    topicId: "top-ped-05",
    statement:
      "Sobre a psicogênese da língua escrita (Emilia Ferreiro e Ana Teberosky), a hipótese silábico-alfabética caracteriza-se por:",
    options: [
      { id: "q-002-a", text: "A criança atribui uma letra para cada sílaba da palavra, sem relação sonora.", isCorrect: false },
      { id: "q-002-b", text: "A criança já compreende que a escrita representa o som da fala, mas ainda oscila entre grafar uma letra por sílaba e mais de uma letra por sílaba.", isCorrect: true, explanation: "É uma fase de transição entre a hipótese silábica e a alfabética, marcada por essa oscilação." },
      { id: "q-002-c", text: "A criança já escreve convencionalmente, respeitando todas as normas ortográficas.", isCorrect: false },
      { id: "q-002-d", text: "A criança não estabelece nenhuma relação entre quantidade de letras e tamanho do objeto nomeado.", isCorrect: false },
      { id: "q-002-e", text: "A criança usa exclusivamente letras do próprio nome para grafar qualquer palavra.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Alfabetização e letramento (PED-V)",
  },
  {
    id: "q-003",
    topicId: "top-ped-19",
    statement:
      "Ao final de uma sequência didática, um professor aplica uma prova somativa e, com base apenas nessa nota, decide se o aluno avança ou não de conteúdo, sem retomar os erros identificados. Essa prática está mais distante dos princípios de:",
    options: [
      { id: "q-003-a", text: "Avaliação classificatória.", isCorrect: false },
      { id: "q-003-b", text: "Avaliação formativa, que pressupõe usar os resultados para reorientar o ensino durante o processo.", isCorrect: true, explanation: "A avaliação formativa é processual e serve para ajustar a intervenção pedagógica, não apenas para classificar ao final." },
      { id: "q-003-c", text: "Avaliação somativa.", isCorrect: false },
      { id: "q-003-d", text: "Avaliação diagnóstica inicial.", isCorrect: false },
      { id: "q-003-e", text: "Avaliação em larga escala.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Políticas e práticas de avaliação (PED-XIX)",
  },
  {
    id: "q-004",
    topicId: "top-ped-19",
    statement:
      "Uma escola pública utiliza o resultado de uma avaliação em larga escala apenas para ranquear turmas e divulgar publicamente o desempenho de cada professor. Do ponto de vista das políticas de avaliação educacional, essa prática:",
    options: [
      { id: "q-004-a", text: "É recomendada, pois estimula a competição entre docentes.", isCorrect: false },
      { id: "q-004-b", text: "Corresponde ao uso pedagógico pretendido pelas avaliações em larga escala.", isCorrect: false },
      { id: "q-004-c", text: "Distorce a função da avaliação em larga escala, que deveria subsidiar diagnóstico e políticas de melhoria, não punir ou expor profissionais.", isCorrect: true, explanation: "Avaliações em larga escala têm finalidade diagnóstica e de gestão de políticas públicas, não de responsabilização punitiva individual." },
      { id: "q-004-d", text: "É indiferente do ponto de vista pedagógico.", isCorrect: false },
      { id: "q-004-e", text: "Substitui a necessidade de avaliação formativa em sala de aula.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Políticas públicas, organização, financiamento e avaliação (FGD-VIII)",
  },
  {
    id: "q-005",
    topicId: "top-ped-08",
    statement:
      "As Diretrizes Curriculares Nacionais para a Educação Infantil concebem a criança como:",
    options: [
      { id: "q-005-a", text: "Um adulto em miniatura, que deve ser preparado prioritariamente para o Ensino Fundamental.", isCorrect: false },
      { id: "q-005-b", text: "Sujeito histórico e de direitos que, nas interações, relações e práticas cotidianas, constrói sua identidade e conhecimento do mundo.", isCorrect: true, explanation: "Essa é a concepção de criança adotada nas DCNEI, base também da organização por eixos e campos de experiência na BNCC." },
      { id: "q-005-c", text: "Um receptáculo passivo de conteúdos transmitidos pelo professor.", isCorrect: false },
      { id: "q-005-d", text: "Um indivíduo cujo desenvolvimento independe do contexto social e cultural.", isCorrect: false },
      { id: "q-005-e", text: "Um aluno que deve ser avaliado por notas desde a Educação Infantil.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Criança e infância (PED-VIII)",
  },
  {
    id: "q-006",
    topicId: "top-ped-18",
    statement:
      "Na organização do trabalho pedagógico na Educação Infantil orientada pela BNCC, o planejamento por 'campos de experiência' tem como principal característica:",
    options: [
      { id: "q-006-a", text: "Organizar o currículo em disciplinas estanques, como no Ensino Fundamental.", isCorrect: false },
      { id: "q-006-b", text: "Priorizar exclusivamente atividades de alfabetização precoce.", isCorrect: false },
      { id: "q-006-c", text: "Articular as experiências das crianças a partir de eixos como corpo, gestos, movimentos; escuta, fala, pensamento e imaginação, entre outros, e não por matérias.", isCorrect: true, explanation: "Os campos de experiência substituem a lógica disciplinar por eixos que respeitam as formas de a criança pequena se relacionar com o mundo." },
      { id: "q-006-d", text: "Eliminar o brincar do planejamento pedagógico.", isCorrect: false },
      { id: "q-006-e", text: "Restringir a avaliação a provas escritas padronizadas.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Práticas de ensino na educação infantil (PED-XVIII)",
  },
  {
    id: "q-007",
    topicId: "top-fgd-06",
    statement:
      "Um professor planeja uma sequência de aulas em que apresenta um problema real da comunidade escolar e conduz os estudantes a levantar hipóteses, pesquisar e propor soluções, atuando como mediador do processo. Essa abordagia didática está mais alinhada a:",
    options: [
      { id: "q-007-a", text: "Pedagogia tradicional, centrada na transmissão de conteúdos pelo professor.", isCorrect: false },
      { id: "q-007-b", text: "Metodologias ativas de ensino, que colocam o estudante como protagonista da construção do conhecimento.", isCorrect: true, explanation: "A postura de mediador e a centralidade do estudante na resolução de problemas são marcas das metodologias ativas." },
      { id: "q-007-c", text: "Pedagogia diretiva behaviorista, baseada em estímulo-resposta.", isCorrect: false },
      { id: "q-007-d", text: "Ensino exclusivamente expositivo.", isCorrect: false },
      { id: "q-007-e", text: "Avaliação somativa como único critério de aprendizagem.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Didática e metodologias de ensino (FGD-VI)",
  },
  {
    id: "q-008",
    topicId: "top-fgd-12",
    statement:
      "Um aluno com deficiência intelectual está matriculado em uma turma comum do Ensino Fundamental e recebe atendimento educacional especializado (AEE) no contraturno. Essa organização corresponde ao modelo de:",
    options: [
      { id: "q-008-a", text: "Integração escolar, em que o aluno deve se adaptar sozinho à turma comum.", isCorrect: false },
      { id: "q-008-b", text: "Educação especial substitutiva, em turma exclusiva.", isCorrect: false },
      { id: "q-008-c", text: "Educação inclusiva, com AEE como serviço complementar e não substitutivo à escolarização em turma comum.", isCorrect: true, explanation: "A Política Nacional de Educação Especial na perspectiva inclusiva prevê o AEE como complementar/suplementar, ofertado no contraturno, sem substituir a escolarização comum." },
      { id: "q-008-d", text: "Homeschooling assistido.", isCorrect: false },
      { id: "q-008-e", text: "Ensino domiciliar obrigatório.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Educação especial e inclusiva (FGD-XII)",
  },
  {
    id: "q-009",
    topicId: "top-fgd-08",
    statement:
      "O Fundeb (Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação) tem como uma de suas principais finalidades:",
    options: [
      { id: "q-009-a", text: "Financiar exclusivamente o Ensino Superior público.", isCorrect: false },
      { id: "q-009-b", text: "Redistribuir recursos para a Educação Básica pública, incluindo a valorização dos profissionais da educação.", isCorrect: true, explanation: "O Fundeb, tornado permanente pela EC 108/2020, redistribui recursos entre estados e municípios para toda a Educação Básica, com percentual mínimo vinculado ao pagamento de profissionais." },
      { id: "q-009-c", text: "Substituir integralmente a responsabilidade dos municípios pela educação infantil.", isCorrect: false },
      { id: "q-009-d", text: "Financiar apenas a construção de prédios escolares.", isCorrect: false },
      { id: "q-009-e", text: "Custear exclusivamente material didático do setor privado.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Políticas públicas, organização, financiamento e avaliação (FGD-VIII)",
  },
  {
    id: "q-010",
    topicId: "top-ped-20",
    statement:
      "Na elaboração do Projeto Político-Pedagógico (PPP) de uma escola, a gestão democrática pressupõe que o documento seja construído:",
    options: [
      { id: "q-010-a", text: "Exclusivamente pela equipe diretiva, para depois ser comunicado aos demais.", isCorrect: false },
      { id: "q-010-b", text: "Apenas pela Secretaria de Educação, de forma padronizada para todas as escolas da rede.", isCorrect: false },
      { id: "q-010-c", text: "De forma coletiva e participativa, envolvendo professores, gestores, famílias e, quando possível, estudantes.", isCorrect: true, explanation: "A gestão democrática, princípio constitucional (Art. 206, VI, CF/88) e da LDB, exige participação coletiva na construção do PPP." },
      { id: "q-010-d", text: "Somente por especialistas externos contratados.", isCorrect: false },
      { id: "q-010-e", text: "De forma sigilosa, sem consulta à comunidade escolar.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Organização, planejamento e gestão da educação (PED-XX)",
  },
  {
    id: "q-011",
    topicId: "top-fgd-01",
    statement:
      "Paulo Freire, ao criticar a 'educação bancária', propõe em seu lugar uma educação:",
    options: [
      { id: "q-011-a", text: "Problematizadora e dialógica, em que educador e educando aprendem juntos a partir da realidade concreta.", isCorrect: true, explanation: "Em contraposição ao depósito de conteúdos (educação bancária), Freire defende o diálogo e a problematização da realidade." },
      { id: "q-011-b", text: "Centrada na memorização de conteúdos transmitidos verticalmente.", isCorrect: false },
      { id: "q-011-c", text: "Baseada exclusivamente em testes padronizados.", isCorrect: false },
      { id: "q-011-d", text: "Que dispensa a leitura crítica da realidade social.", isCorrect: false },
      { id: "q-011-e", text: "Que trata o educando como depósito passivo de informações.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Filosofia da educação (FGD-I)",
  },
  {
    id: "q-012",
    topicId: "top-fgd-04",
    statement:
      "Segundo a perspectiva sociointeracionista de Vigotski, a 'zona de desenvolvimento proximal' refere-se a:",
    options: [
      { id: "q-012-a", text: "O conjunto de habilidades que a criança já domina de forma totalmente independente.", isCorrect: false },
      { id: "q-012-b", text: "A distância entre o que a criança consegue fazer sozinha e o que consegue realizar com a mediação de um adulto ou par mais experiente.", isCorrect: true, explanation: "Essa é a definição central do conceito, que fundamenta a importância da mediação pedagógica intencional." },
      { id: "q-012-c", text: "O período em que a criança não é capaz de aprender nenhum conteúdo novo.", isCorrect: false },
      { id: "q-012-d", text: "Uma fase fixa do desenvolvimento biológico, independente da interação social.", isCorrect: false },
      { id: "q-012-e", text: "A idade cronológica exata em que a alfabetização deve ocorrer.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Psicologia da educação (FGD-IV)",
  },
  {
    id: "q-013",
    topicId: "top-ped-17",
    statement:
      "Um estudante apresenta dificuldades persistentes de aprendizagem na leitura, mesmo após intervenções pedagógicas variadas. Antes de encaminhá-lo para avaliação especializada como se tivesse um transtorno, a atuação pedagógica adequada do professor é:",
    options: [
      { id: "q-013-a", text: "Rotular imediatamente o aluno como portador de dislexia, sem investigação pedagógica prévia.", isCorrect: false },
      { id: "q-013-b", text: "Investigar sistematicamente as condições de ensino, o percurso pedagógico e realizar sondagens, documentando as intervenções realizadas antes de qualquer encaminhamento.", isCorrect: true, explanation: "A escola deve esgotar e documentar as possibilidades pedagógicas antes de patologizar dificuldades de aprendizagem, evitando diagnósticos precipitados." },
      { id: "q-013-c", text: "Reprovar automaticamente o aluno no final do ano.", isCorrect: false },
      { id: "q-013-d", text: "Ignorar a dificuldade, pois tende a desaparecer sozinha.", isCorrect: false },
      { id: "q-013-e", text: "Transferir a responsabilidade exclusivamente para a família.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Relação de ensino e aprendizagem e dificuldades no processo de escolarização (PED-XVII)",
  },
  {
    id: "q-014",
    topicId: "top-fgd-21",
    statement:
      "A Lei nº 8.069/1990 (Estatuto da Criança e do Adolescente), no que se refere ao direito à educação, estabelece que é dever do Estado assegurar, entre outros pontos:",
    options: [
      { id: "q-014-a", text: "Ensino fundamental apenas facultativo, a critério da família.", isCorrect: false },
      { id: "q-014-b", text: "Igualdade de condições para o acesso e permanência na escola, sem exigir contrapartida financeira das famílias.", isCorrect: true, explanation: "O ECA reforça, em consonância com a CF/88 e a LDB, o direito à educação pública, gratuita e igualitária no acesso e na permanência." },
      { id: "q-014-c", text: "Cobrança de taxas para matrícula em escolas públicas de Educação Básica.", isCorrect: false },
      { id: "q-014-d", text: "Prioridade de vagas exclusivamente para famílias de maior renda.", isCorrect: false },
      { id: "q-014-e", text: "Dispensa da obrigatoriedade escolar entre 4 e 17 anos.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Educação, inclusão e direitos humanos (FGD-XXI)",
  },
  {
    id: "q-015",
    topicId: "top-ped-16",
    statement:
      "Ao afirmar que a Pedagogia é a ciência da prática educativa, entende-se que seu objeto de estudo é:",
    options: [
      { id: "q-015-a", text: "Exclusivamente a técnica de ensino de conteúdos disciplinares específicos.", isCorrect: false },
      { id: "q-015-b", text: "A educação como fenômeno social e histórico em suas múltiplas dimensões, incluindo processos formais e não formais.", isCorrect: true, explanation: "A Pedagogia, como área do conhecimento, investiga a educação em sentido amplo — não apenas o ensino escolar de conteúdos." },
      { id: "q-015-c", text: "Somente a organização administrativa das escolas.", isCorrect: false },
      { id: "q-015-d", text: "Apenas a avaliação de larga escala.", isCorrect: false },
      { id: "q-015-e", text: "Exclusivamente a formação de professores para o Ensino Médio.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Pedagogia como ciência da prática educativa (PED-XVI)",
  },
  {
    id: "q-016",
    topicId: "top-fgd-15",
    statement:
      "No planejamento de uma unidade didática, a definição dos objetivos de aprendizagem antes da escolha das estratégias de ensino e dos instrumentos avaliativos tem como principal função:",
    options: [
      { id: "q-016-a", text: "Garantir coerência entre o que se pretende ensinar, como se ensina e como se avalia (alinhamento construtivo).", isCorrect: true, explanation: "O alinhamento entre objetivos, metodologia e avaliação evita que se avalie algo diferente do que foi efetivamente ensinado." },
      { id: "q-016-b", text: "Tornar o planejamento mais burocrático e menos flexível.", isCorrect: false },
      { id: "q-016-c", text: "Eliminar a necessidade de avaliação diagnóstica.", isCorrect: false },
      { id: "q-016-d", text: "Padronizar o ensino independentemente do contexto da turma.", isCorrect: false },
      { id: "q-016-e", text: "Substituir o Projeto Político-Pedagógico da escola.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Planejamento e avaliação do ensino e da aprendizagem (FGD-XV)",
  },
  {
    id: "q-017",
    topicId: "top-ped-12",
    statement:
      "Na Educação de Jovens e Adultos (EJA), o reconhecimento de que os estudantes trazem saberes construídos na experiência de vida e no trabalho implica que o planejamento pedagógico deve:",
    options: [
      { id: "q-017-a", text: "Reproduzir integralmente o currículo do ensino regular infantil, sem adaptações.", isCorrect: false },
      { id: "q-017-b", text: "Partir dos saberes prévios e da realidade sociocultural dos estudantes, articulando-os aos conteúdos escolares.", isCorrect: true, explanation: "A andragogia e as diretrizes da EJA reconhecem a experiência do adulto como ponto de partida do processo pedagógico." },
      { id: "q-017-c", text: "Ignorar a trajetória de vida dos estudantes por não ser 'conteúdo escolar'.", isCorrect: false },
      { id: "q-017-d", text: "Infantilizar a linguagem e os materiais didáticos utilizados.", isCorrect: false },
      { id: "q-017-e", text: "Excluir qualquer articulação entre escola e mundo do trabalho.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "IA_INEDITA",
    competencyRef: "Componente específico de Pedagogia — Aprendizagem e desenvolvimento de adolescentes, jovens, adultos e idosos (PED-XII)",
  },
  {
    id: "q-018",
    topicId: "top-fgd-19",
    statement:
      "A articulação entre escola, família e comunidade, prevista na legislação educacional brasileira, tem como um dos seus principais objetivos:",
    options: [
      { id: "q-018-a", text: "Transferir para a família a responsabilidade técnica pelo planejamento pedagógico da escola.", isCorrect: false },
      { id: "q-018-b", text: "Fortalecer a corresponsabilidade no processo educativo, sem substituir as atribuições próprias de cada instituição.", isCorrect: true, explanation: "A LDB prevê a colaboração entre escola e família, mas mantém a atribuição técnico-pedagógica como responsabilidade da instituição escolar." },
      { id: "q-018-c", text: "Eliminar o papel do Conselho Escolar.", isCorrect: false },
      { id: "q-018-d", text: "Restringir a participação da comunidade a eventos comemorativos.", isCorrect: false },
      { id: "q-018-e", text: "Centralizar todas as decisões pedagógicas exclusivamente na Secretaria de Educação.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "IA_INEDITA",
    competencyRef: "Formação Geral Docente — Articulação entre escola, família, comunidade e movimentos sociais (FGD-XIX)",
  },
];

export const questions: Question[] = [
  ...pndBatch1,
  ...pndBatch2,
  ...concursoAocpIfma,
  ...concursoFgvSmesp,
  ...concursoVunespSantoAndre,
  ...concursoTopicosLacuna,
  ...ineditasQuestions,
];

export const getQuestionsByTopic = (topicId: string) => questions.filter((q) => q.topicId === topicId);

export { inedita as ineditaLabel };
