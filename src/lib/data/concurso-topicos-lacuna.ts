import { Question } from "@/lib/types";

/**
 * Questões de concursos públicos e provas oficiais reunidas para cobrir os tópicos
 * da taxonomia da PND que não tinham nenhuma questão no banco.
 *
 * Diferente dos demais arquivos de concurso, que agrupam questões por prova de origem,
 * este agrupa por lacuna de cobertura — as questões vêm de bancas e certames variados
 * (FGV, CEBRASPE, SELECON, FUMARC, UFMT, FUNDATEC, Instituto Access, ADM&TEC).
 * Cada item traz a banca, o órgão e o ano em `competencyRef`, e o gabarito foi
 * conferido contra o documento oficial da banca sempre que ele estava acessível.
 */
export const concursoTopicosLacuna: Question[] = [
  // ---------------------------------------------------------------------------
  // top-fgd-03 — Sociologia da educação
  // ---------------------------------------------------------------------------
  {
    id: "q-cp-soc-01",
    topicId: "top-fgd-03",
    statement:
      'Para alguns, a cultura escolar é idêntica à cultura da família, enquanto, para outros, representa uma aculturação. Essa é uma afirmação que encontramos no texto "Os Herdeiros", de Pierre Bourdieu e Jean-Claude Passeron.\n\nEm relação a essa questão de serem os integrantes da elite social os que herdam as vagas em instituições de ensino mais prestigiadas, mantendo assim a divisão de classes, assinale a afirmativa incorreta.',
    options: [
      { id: "q-cp-soc-01-a", text: "Os estudantes mais favorecidos devem ao meio de origem os hábitos, o treino e as atitudes que lhes são mais úteis nas tarefas escolares.", isCorrect: false },
      { id: "q-cp-soc-01-b", text: "A escola transforma as desigualdades sociais em igualdades escolares.", isCorrect: true },
      { id: "q-cp-soc-01-c", text: "O sistema educativo contribui, com sua própria lógica, para assegurar a perpetuação dos privilégios.", isCorrect: false },
      { id: "q-cp-soc-01-d", text: "O valor de um saber-fazer não existe sem o seu uso produtivo, o qual está ausente da escola.", isCorrect: false },
      { id: "q-cp-soc-01-e", text: "Nas práticas escolares os problemas são fictícios e têm em vista a avaliação. Esta separação material das práticas escolares e das práticas produtivas é efeito da divisão entre trabalho manual e trabalho intelectual.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2022,
    originLink: "https://conhecimento.fgv.br/sites/default/files/concursos/pedagogo_cns020_tipo_2.pdf",
    competencyRef:
      "Concurso público — SEAD-AP / Governo do Amapá (FGV, 2022), cargo Pedagogo — Sociologia da educação (FGD-III)",
  },
  {
    id: "q-cp-soc-02",
    topicId: "top-fgd-03",
    statement:
      'Segundo Bourdieu e Passeron (1992), o "capital cultural incorporado" é fruto de um processo educativo, desenvolvido na família e na escola, em um trabalho de assimilação, conquistado à custa de muito investimento, tempo, dinheiro e desembaraço pelos grupos privilegiados de uma sociedade hierarquizada.\n\nAssinale a opção que identifica um capital que não está descrito na abordagem teórica desses autores citados.',
    options: [
      { id: "q-cp-soc-02-a", text: "Capital Político, formado por posições políticas assumidas publicamente.", isCorrect: true },
      { id: "q-cp-soc-02-b", text: "Capital Simbólico, que se constitui por meio de prestígio, status e/ou honra.", isCorrect: false },
      { id: "q-cp-soc-02-c", text: "Capital Material, relacionado à renda, salários e imóveis.", isCorrect: false },
      { id: "q-cp-soc-02-d", text: "Capital Social, definido por relações sociais que podem ser capitalizadas.", isCorrect: false },
      { id: "q-cp-soc-02-e", text: "Capital Cultural, ligado à escolarização, saberes e conhecimentos reconhecidos por diplomas e títulos.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2022,
    originLink: "https://conhecimento.fgv.br/sites/default/files/concursos/pedagogo_cns020_tipo_2.pdf",
    competencyRef:
      "Concurso público — SEAD-AP / Governo do Amapá (FGV, 2022), cargo Pedagogo — Sociologia da educação (FGD-III)",
  },
  {
    id: "q-cp-soc-03",
    topicId: "top-fgd-03",
    statement:
      "Usou ideias teóricas e métodos objetivos e científicos para desenvolver os fundamentos da sociologia da educação. Este autor viu o ensino como uma tentativa das gerações adultas de influenciar aqueles que ainda não têm experiência em se desenvolver no mundo social. Portanto, a educação, longe de ser uma simples transmissão neutra de conhecimento, é um meio de perpetuar a própria existência da sociedade.\n\nTrata-se de",
    options: [
      { id: "q-cp-soc-03-a", text: "Karl Marx.", isCorrect: false },
      { id: "q-cp-soc-03-b", text: "Émile Durkheim.", isCorrect: true },
      { id: "q-cp-soc-03-c", text: "Pierre Bourdieu.", isCorrect: false },
      { id: "q-cp-soc-03-d", text: "Basil Bernstein.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/101720/instituto-access-2023-prefeitura-de-passos-mg-pedagogo-prova.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Passos-MG (Instituto Access, 2023), cargo Pedagogo — Sociologia da educação (FGD-III)",
  },
  {
    id: "q-cp-soc-04",
    topicId: "top-fgd-03",
    statement:
      '"O movimento pela Escola Nova fez a crítica dos métodos tradicionais da educação. O marxismo e o positivismo, a seu modo, também fizeram a crítica à educação enquanto pensamento autoritário. Os existencialistas e fenomenologistas, sob o impacto de duas guerras mundiais, perguntavam o que estava errado na educação para formar homens que chegavam a se odiar tanto. O otimismo pedagógico do começo do século não resistiu a tanta violência." (GADOTTI, 1997)\n\nSegundo o autor, a partir da segunda metade do século XX, a crítica à educação e à escola se acentuam, gerando uma tendência que ele classificou como pensamento pedagógico crítico. Sobre a referida tendência, assinale a afirmativa incorreta.',
    options: [
      { id: "q-cp-soc-04-a", text: "Entre os principais representantes do pensamento pedagógico crítico estão Louis Althusser e Pierre Bourdieu.", isCorrect: false },
      { id: "q-cp-soc-04-b", text: "Louis Althusser formulou a teoria da escola enquanto aparelho ideológico do Estado.", isCorrect: false },
      { id: "q-cp-soc-04-c", text: "A crítica radical à educação oriunda do pensamento pedagógico crítico não substituiu o otimismo com a educação.", isCorrect: true },
      { id: "q-cp-soc-04-d", text: "Pierre Bourdieu, junto de Jean Claude Passeron, formulou a teoria da escola enquanto violência simbólica.", isCorrect: false },
      { id: "q-cp-soc-04-e", text: "As teorias derivadas do pensamento pedagógico crítico são, frequentemente, chamadas de crítico-reprodutivistas.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink:
      "https://conhecimento.fgv.br/sites/default/files/concursos/cns351e3-pedagogo-suascns351e3-tipo-1_0.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Caraguatatuba-SP (FGV, 2023), cargo Pedagogo (SUAS) — Sociologia da educação (FGD-III)",
  },

  // ---------------------------------------------------------------------------
  // top-fgd-09 — Metodologia de pesquisa em educação e ensino
  // ---------------------------------------------------------------------------
  {
    id: "q-cp-pes-01",
    topicId: "top-fgd-09",
    statement: "Em relação ao papel do professor-pesquisador, assinale a afirmativa incorreta.",
    options: [
      { id: "q-cp-pes-01-a", text: "Ação-pesquisa-ação e pesquisa-ação são nomenclaturas que se referem ao mesmo conceito, cujo significado pode ser assim enunciado: a busca de formas de ações coletivas que objetivam a resolução de algum problema ou a transformação de uma dada realidade.", isCorrect: false },
      { id: "q-cp-pes-01-b", text: "A palavra ação, na expressão pesquisa-ação, serve para destacar o fato de que a ação dos professores na educação básica trouxe à tona a necessidade de se produzir conhecimento para esse nível de ensino.", isCorrect: false },
      { id: "q-cp-pes-01-c", text: "Houve, a priori, um projeto de pesquisa-ação que gerou os movimentos considerados pesquisa-ação.", isCorrect: true },
      { id: "q-cp-pes-01-d", text: "Tanto na Inglaterra quanto no Brasil, houve uma conjuntura oriunda dos professores dos ensino básico atentos às demandas de seus alunos que, no caso da Inglaterra, motivou o conceito de professor pesquisador e cedeu as categorias conceituais da pesquisa-ação quando esses professores foram estimulados a colaborar com os especialistas.", isCorrect: false },
      { id: "q-cp-pes-01-e", text: "No Brasil considerou-se que o movimento de professores apresentava características que se assemelhavam à metodologia da pesquisa-ação.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2024,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/106008/instituto-access-2024-ufape-pedagogo-prova.pdf",
    competencyRef:
      "Concurso público — UFAPE (Instituto Access, 2024), cargo Pedagogo — Metodologia de pesquisa em educação (FGD-IX)",
  },
  {
    id: "q-cp-pes-02",
    topicId: "top-fgd-09",
    statement:
      "Segundo Goldenberg (2011), a pesquisa não é controlável. Trata-se de um processo no qual é impossível prever as etapas. Ao pesquisar, o pesquisador está em estado de tensão, pois reconhece a parcialidade e a limitação do seu conhecimento. Ao produzir o projeto, desenha os caminhos a serem seguidos no desenvolvimento do trabalho de pesquisa, explicitando as etapas a serem alcançadas, os instrumentos e as estratégias que poderão ser usados.\n\nAlguns elementos são fundamentais na estrutura de um projeto de pesquisa, como a justificativa, que:",
    options: [
      { id: "q-cp-pes-02-a", text: "apresenta argumentos acerca da relevância da questão, levando em consideração os estudos anteriores sobre o tema, para assinalar suas eventuais limitações e destacar, assim, a necessidade de continuar a pesquisá-lo, e as contribuições, a relevância social e científica da questão de estudo", isCorrect: true },
      { id: "q-cp-pes-02-b", text: "destaca, expõe e discute os referenciais teóricos, ou seja, os instrumentos conceituais em que o projeto se apoia para conduzir o raciocínio, a explicação dos aspectos do real que se propôs a estudar, imprescindível para qualquer tipo de pesquisa, devendo ainda o aspecto do real ser consistente e atual", isCorrect: false },
      { id: "q-cp-pes-02-c", text: "é uma questão que descreve uma necessidade de estudo. Precisa ser clara, para que o leitor entenda a importância da questão. Pode ser originária de muitas fontes potenciais. Pode provir de uma experiência que os pesquisadores tiveram em suas vidas pessoais ou em seus locais de trabalho", isCorrect: false },
      { id: "q-cp-pes-02-d", text: "indica o que se pretende conhecer, medir ou provar no decorrer da pesquisa, ou seja, as metas que se deseja alcançar. Discrimina a intenção de todo o estudo de pesquisa e, por isso, deve ser apresentada de maneira clara e específica", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2024,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/109580/selecon-2024-cefet-rj-tecnico-em-assuntos-educacionais-prova.pdf",
    competencyRef:
      "Concurso público — CEFET/RJ (SELECON, 2024), cargo Técnico em Assuntos Educacionais — Metodologia de pesquisa em educação (FGD-IX)",
  },
  {
    id: "q-cp-pes-03",
    topicId: "top-fgd-09",
    statement:
      'Segundo Minayo (2010, p. 26), o ciclo da pesquisa qualitativa é dividido em três etapas. Uma delas "consiste em levar para a prática empírica a construção teórica elaborada na primeira etapa. Essa etapa combina instrumentos de observação, entrevistas ou outras modalidades de comunicação e interlocução com os pesquisadores, levantamento de material documental e outros".\n\nO trecho em destaque descreve a fase da pesquisa denominada:',
    options: [
      { id: "q-cp-pes-03-a", text: "divulgação dos resultados", isCorrect: false },
      { id: "q-cp-pes-03-b", text: "exploratória da pesquisa", isCorrect: false },
      { id: "q-cp-pes-03-c", text: "tratamento do material", isCorrect: false },
      { id: "q-cp-pes-03-d", text: "trabalho de campo", isCorrect: true },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2024,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/109580/selecon-2024-cefet-rj-tecnico-em-assuntos-educacionais-prova.pdf",
    competencyRef:
      "Concurso público — CEFET/RJ (SELECON, 2024), cargo Técnico em Assuntos Educacionais — Metodologia de pesquisa em educação (FGD-IX)",
  },
  {
    id: "q-cp-pes-04",
    topicId: "top-fgd-09",
    statement:
      "Conforme afirma Vasconcellos (2009), a tarefa do professor é extremamente importante e complexa, o que exige que ele esteja constantemente qualificado. O professor deve estar preparado para exercer a sua prática, considerando que ela é dinâmica e aberta, e não uma atividade mecânica e repetitiva.\n\nNesse sentido, ao refletir sobre a formação docente, o autor propõe ainda que:",
    options: [
      { id: "q-cp-pes-04-a", text: "a troca entre os docentes mais experientes com os professores em início de carreira não seja considerada importante, pois as ideias pedagógicas precisam ser superadas", isCorrect: false },
      { id: "q-cp-pes-04-b", text: "o professor seja também pesquisador e que a escola não seja vista apenas como um local de trabalho, mas, ao mesmo tempo, como espaço de formação", isCorrect: true },
      { id: "q-cp-pes-04-c", text: "a reunião pedagógica seja um espaço que pode ser substituído por cursos formativos, com temáticas que sejam pensadas por cada professor", isCorrect: false },
      { id: "q-cp-pes-04-d", text: "a qualificação do professor seja algo a priori, já que, ao sair de cursos bem avaliados, o docente não necessitará se manter em formação", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2024,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/109580/selecon-2024-cefet-rj-tecnico-em-assuntos-educacionais-prova.pdf",
    competencyRef:
      "Concurso público — CEFET/RJ (SELECON, 2024), cargo Técnico em Assuntos Educacionais — Metodologia de pesquisa em educação (FGD-IX)",
  },

  // ---------------------------------------------------------------------------
  // top-ped-01 — Antropologia da educação
  // ---------------------------------------------------------------------------
  {
    id: "q-cp-ant-01",
    topicId: "top-ped-01",
    statement:
      'Tendo por base um referencial histórico e cultural, defende-se certo deslocamento do conhecimento escolar, como perspectiva científica e universalizante, para dar centralidade a outros tipos de saberes, entre eles os comunitários, os do cotidiano, os da arte e das demais formas de linguagem e multiculturalidade.\n\n(J. S. Thiesen. "Currículo interdisciplinar: contradições, limites e possibilidades". Florianópolis: Perspectiva, v. 31, n.º 2, mai/ago, 2013, p. 591-614, com adaptações)\n\nUma matriz teórica que tenha a natureza defendida no texto precedente busca reescrever o conhecimento escolar usual, por considerar que',
    options: [
      { id: "q-cp-ant-01-a", text: "os conhecimentos reconhecidos socialmente precisam ser enquadrados nas respectivas disciplinas escolares.", isCorrect: false },
      { id: "q-cp-ant-01-b", text: "parte do conhecimento deve servir à visão de mundo hegemônica, por isso é importante que conste nos currículos escolares.", isCorrect: false },
      { id: "q-cp-ant-01-c", text: "a diversidade é elemento constitutivo do processo de ensino e de aprendizagem.", isCorrect: true },
      { id: "q-cp-ant-01-d", text: "a mutabilidade do conhecimento tem pouca relevância no processo de ensino e aprendizagem.", isCorrect: false },
      { id: "q-cp-ant-01-e", text: "a neutralidade curricular permite o desenvolvimento da intencionalidade educacional, por isso é requerida.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink: "https://cdn.cebraspe.org.br/concursos/IFF_18_TECNICO/arquivos/398_IFF007_PAG_4.PDF",
    competencyRef:
      "Concurso público — Instituto Federal Fluminense (CESPE/CEBRASPE, 2018), cargo Técnico em Assuntos Educacionais — Antropologia da educação (PED-I)",
  },
  {
    id: "q-cp-ant-02",
    topicId: "top-ped-01",
    statement: "Assinale a opção correta a respeito dos estudos a respeito de currículo.",
    options: [
      { id: "q-cp-ant-02-a", text: "Bobbitt desenvolveu uma perspectiva pós-crítica de currículo, enfocando a importância da identidade, da alteridade e da subjetividade.", isCorrect: false },
      { id: "q-cp-ant-02-b", text: "Na teoria pós-crítica, a discussão sobre o currículo enfoca a preocupação com a cultura e os elementos de gênero, raça, etnia e sexualidade.", isCorrect: true },
      { id: "q-cp-ant-02-c", text: "De acordo com o enfoque multiculturalista de currículo, a igualdade pode ser obtida a partir de um currículo hegemônico.", isCorrect: false },
      { id: "q-cp-ant-02-d", text: "As teorias pós-críticas do currículo, ao aceitarem os conhecimentos e os saberes dominantes, acabam por se concentrar em questões técnicas.", isCorrect: false },
      { id: "q-cp-ant-02-e", text: "Para a perspectiva tradicional, o currículo oculto ensina o conformismo e o individualismo.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink:
      "https://cdn.cebraspe.org.br/concursos/pref_camacari_ba_23/arquivos/891_PREF_CAMACARI_002_01.PDF",
    competencyRef:
      "Concurso público — Prefeitura de Camaçari-BA (CEBRASPE, 2023), cargo Coordenador Pedagógico — Antropologia da educação (PED-I)",
  },
  {
    id: "q-cp-ant-03",
    topicId: "top-ped-01",
    statement:
      "Em 2004, o Ministério da Educação divulgou as Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro-Brasileira e Africana. Em 2006, foi lançada a publicação Orientações e Ações para a Educação das Relações Étnico-Raciais, em que são sugeridas algumas atividades a ser desenvolvidas.\n\nAssinale a opção que apresenta determinação, sugestão ou orientação presente nesses documentos.",
    options: [
      { id: "q-cp-ant-03-a", text: "Recomenda-se a utilização de músicas e canções populares, literatura e poesias, com prioridade para aquelas que enaltecem a cultura negra, indígena e regional como, por exemplo, Kizomba, Menina Bonita do Laço de Fita, Os Escravos de Jô e As Borboletas, de Vinícius de Morais, tendo-se o cuidado de manter a originalidade da letra.", isCorrect: false },
      { id: "q-cp-ant-03-b", text: "É importante que a temática das relações étnico-raciais esteja contida nos projetos pedagógicos das instituições, com práticas localizadas em determinadas fases do ano para que não seja esquecida.", isCorrect: false },
      { id: "q-cp-ant-03-c", text: "Para ampliar a diversidade cultural presente nos currículos, as atividades devem mudar o foco etnocêntrico marcadamente de raiz europeia.", isCorrect: false },
      { id: "q-cp-ant-03-d", text: "O ensino de história e cultura africana se fará por diferentes meios, incluindo projetos; para tanto, os estabelecimentos de educação básica, em todos os níveis, precisam providenciar o registro da história não contada dos negros brasileiros.", isCorrect: true },
      { id: "q-cp-ant-03-e", text: "No ensino médio, sugere-se apresentar mais cartuns, quadrinhos, vídeos e revistas e apresentar com cuidado os autores clássicos, uma vez que, em muitos, há conotação discriminatória da questão racial.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink: "https://cdn.cebraspe.org.br/concursos/IFF_18_TECNICO/arquivos/398_IFF007_PAG_4.PDF",
    competencyRef:
      "Concurso público — Instituto Federal Fluminense (CESPE/CEBRASPE, 2018), cargo Técnico em Assuntos Educacionais — Antropologia da educação (PED-I)",
  },
  {
    id: "q-cp-ant-04",
    topicId: "top-ped-01",
    statement:
      "A educação da cultura visual pode ser aliada de métodos de ensino e dinâmicas didáticas que ampliam a experiência estética, produzindo outras formas de significação. Além de contextualizar e integrar saberes populares, diferentes formas de mídia e estilos culturais, ela possibilita que identidades sociais sejam valorizadas em suas múltiplas referências.\n\nConsiderando essa informação e a realidade multicultural que compõe o contexto social das artes brasileiras, assinale a opção correta.",
    options: [
      { id: "q-cp-ant-04-a", text: "As identidades sociais não são discursos significativos na produção simbólica da cultura popular.", isCorrect: false },
      { id: "q-cp-ant-04-b", text: "A história da arte é uma das narrativas possíveis para o ensino das artes, mas há outras, advindas das diferentes formas tradicionais de saberes e fazeres.", isCorrect: true },
      { id: "q-cp-ant-04-c", text: "As mídias sociais não representam formas simbólicas passíveis de análise estética ou elaboração didática.", isCorrect: false },
      { id: "q-cp-ant-04-d", text: "A cultura popular só pode ser introduzida em contextos escolares caso seja usada como um exemplo de mau uso de técnicas e materiais.", isCorrect: false },
      { id: "q-cp-ant-04-e", text: "A liberdade de expressão e a experimentação artística são estruturas incompatíveis com os conteúdos curriculares.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink:
      "https://cdn.cebraspe.org.br/concursos/pref_camacari_ba_23/arquivos/891_PREF_CAMACARI_035_01.PDF",
    competencyRef:
      "Concurso público — Prefeitura de Camaçari-BA (CEBRASPE, 2023), cargo Professor de Educação Artística — Antropologia da educação (PED-I)",
  },

  // ---------------------------------------------------------------------------
  // top-ped-10 — Atuação de pedagogos em espaços não escolares
  // ---------------------------------------------------------------------------
  {
    id: "q-cp-nes-01",
    topicId: "top-ped-10",
    statement:
      "A Educação tem sido cada vez mais considerada uma área-chave para enfrentar os problemas sociais da humanidade. Diante disso, o conceito de Educação tem sido ampliado e adjetivado: já não se restringe mais ao processo de ensino-aprendizagem no interior de unidades escolares formais e pode ser categorizado em educação formal, não formal e informal.\n\nPara Maria da Glória Gohn, a educação não formal é a categoria central de trabalho de um educador social, já que:",
    options: [
      { id: "q-cp-nes-01-a", text: "tem como método básico a vivência e a reprodução do conhecido, a reprodução da experiência segundo os modos e as formas como foi apreendida e codificada;", isCorrect: false },
      { id: "q-cp-nes-01-b", text: "os resultados acontecem a partir do desenvolvimento do senso comum nos indivíduos, senso este que orienta suas formas de pensar e agir espontaneamente;", isCorrect: false },
      { id: "q-cp-nes-01-c", text: "socializa os indivíduos, desenvolve hábitos, atitudes, comportamentos, modos de pensar e de se expressar no uso da linguagem, segundo valores e crenças de grupos que frequentam ou a que pertençam por herança, desde o nascimento;", isCorrect: false },
      { id: "q-cp-nes-01-d", text: "tem foco na aprendizagem de conteúdos historicamente sistematizados, normalizados por leis, dentre os quais destacam-se o de formar o indivíduo como um cidadão ativo, desenvolver habilidades e competências várias, fortalecer a criatividade, a percepção e a motricidade;", isCorrect: false },
      { id: "q-cp-nes-01-e", text: "possui metodologias concebidas a partir da problematização da vida cotidiana; os conteúdos emergem com base nos temas que se colocam como necessidades, carências, desafios, obstáculos ou ações empreendedoras a serem realizadas, e não são dados a priori, mas geralmente construídos no processo.", isCorrect: true },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/62261/fgv-2018-prefeitura-de-niteroi-rj-pedagogo-prova.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Niterói-RJ / SASDH (FGV, 2018), cargo Pedagogo — Atuação de pedagogos em espaços não escolares (PED-X)",
  },
  {
    id: "q-cp-nes-02",
    topicId: "top-ped-10",
    statement:
      "A pedagogia social é um componente da Pedagogia que se responsabiliza diretamente pela inclusão das crianças e jovens, em situação de vulnerabilidade social, no universo não escolar. Quanto mais a população de um país é entregue à própria sorte, maior se faz a necessidade de um fazer pedagógico voltado para a realidade das crianças e adolescentes expostos a todo o tipo de dificuldades oriundas de uma educação direcionada para um público com valores e necessidades bem diferentes.\n\nFalamos sobre uma pedagogia com ações voltadas ao desenvolvimento humano pleno, tomando como foco o processo educacional.\n\nEntão, é correto afirmar que a pedagogia social é uma pedagogia:",
    options: [
      { id: "q-cp-nes-02-a", text: "do passado;", isCorrect: false },
      { id: "q-cp-nes-02-b", text: "da inclusão;", isCorrect: true },
      { id: "q-cp-nes-02-c", text: "tradicional;", isCorrect: false },
      { id: "q-cp-nes-02-d", text: "experimental;", isCorrect: false },
      { id: "q-cp-nes-02-e", text: "consensual.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/62261/fgv-2018-prefeitura-de-niteroi-rj-pedagogo-prova.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Niterói-RJ / SASDH (FGV, 2018), cargo Pedagogo — Atuação de pedagogos em espaços não escolares (PED-X)",
  },
  {
    id: "q-cp-nes-03",
    topicId: "top-ped-10",
    statement:
      "É objetivo dos espaços socioeducativos no que se refere aos jovens em situação de conflito com a lei:",
    options: [
      { id: "q-cp-nes-03-a", text: "apresentar novas formas de convivência;", isCorrect: false },
      { id: "q-cp-nes-03-b", text: "o acolhimento por uma equipe psicossocial;", isCorrect: false },
      { id: "q-cp-nes-03-c", text: "reeducar, visando à cidadania;", isCorrect: true },
      { id: "q-cp-nes-03-d", text: "trabalhar, juntamente com as famílias, para sua recuperação;", isCorrect: false },
      { id: "q-cp-nes-03-e", text: "oferecer educação continuada com vistas à profissionalização.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/62261/fgv-2018-prefeitura-de-niteroi-rj-pedagogo-prova.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Niterói-RJ / SASDH (FGV, 2018), cargo Pedagogo — Atuação de pedagogos em espaços não escolares (PED-X)",
  },
  {
    id: "q-cp-nes-04",
    topicId: "top-ped-10",
    statement:
      "No campo dos sistemas de saúde, os debates acerca da educação e desenvolvimento dos recursos humanos levaram a contrastar os paradigmas das denominadas Educação Continuada e Educação Permanente (PNEPS, 2006, p. 44). Sendo assim, relacione os tipos de educação representados pelas letras A e B com as características elencadas logo abaixo.\n\nA. Educação Continuada\nB. Educação Permanente\n\nI. Representa uma continuidade do modelo escolar ou acadêmico, centralizada na atualização de conhecimentos, geralmente com enfoque disciplinar, em ambiente didático e baseado em técnicas de transmissão, com fins de atualização.\nII. Incorpora o ensino e o aprendizado à vida cotidiana das organizações e às práticas sociais e laborais, no contexto real em que ocorrem.\nIII. É uma estratégia descontínua de capacitação com rupturas no tempo: são cursos periódicos sem sequência constante.\nIV. Coloca as pessoas como atores reflexivos da prática e construtores do conhecimento e de alternativas de ação, ao invés de receptores.\n\nAssinale a alternativa que apresenta a relação correta entre tipo de educação e respectivas características.",
    options: [
      { id: "q-cp-nes-04-a", text: "I-A, II-B, III-A, IV-B", isCorrect: true },
      { id: "q-cp-nes-04-b", text: "I-B, II-B, III-A, IV-A", isCorrect: false },
      { id: "q-cp-nes-04-c", text: "I-A, II-A, III-B, IV-B", isCorrect: false },
      { id: "q-cp-nes-04-d", text: "I-B, II-A, III-B, IV-B", isCorrect: false },
      { id: "q-cp-nes-04-e", text: "I-B, II-A, III-B, IV-A", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2019,
    originLink: "https://fs.ibfc.org.br/arquivos/1924/3loGkpOio3_caderno_preliminar/pdf/IBFC_134.pdf",
    competencyRef:
      "Concurso público — EBSERH (IBFC, 2019), cargo Pedagogo — Atuação de pedagogos em espaços não escolares (PED-X)",
  },

  // ---------------------------------------------------------------------------
  // top-ped-15 — Educação do/no campo e movimentos sociais
  // ---------------------------------------------------------------------------
  {
    id: "q-cp-cam-01",
    topicId: "top-ped-15",
    statement:
      "Instituídas pela Resolução CNE/CEB nº 1/2002, as Diretrizes Operacionais para a Educação Básica nas Escolas do Campo são fundamentais para a estruturação do ensino rural. Sua aplicação deve ser articulada à Resolução CNE/CEB nº 2/2008, que atualiza as diretrizes nacionais e reforça os princípios de identidade e territorialidade das populações camponesas. Com base nesse conjunto normativo, analise as assertivas abaixo e assinale V, se verdadeiras, ou F, se falsas.\n\n( ) A identidade da escola do campo deve ser definida pela homogeneidade em relação às escolas urbanas.\n\n( ) As diretrizes preveem a adequação da escola às condições de vida, trabalho e cultura dos sujeitos do campo.\n\n( ) A proposta pedagógica deve considerar os saberes das comunidades, articulando-os ao conhecimento científico.\n\n( ) A Educação do Campo deve ocorrer prioritariamente por meio de modalidades não presenciais devido às distâncias territoriais.\n\n( ) A organização escolar deve respeitar a diversidade social, cultural, econômica e ambiental das populações.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    options: [
      { id: "q-cp-cam-01-a", text: "F – V – V – F – V.", isCorrect: true },
      { id: "q-cp-cam-01-b", text: "V – V – F – F – V.", isCorrect: false },
      { id: "q-cp-cam-01-c", text: "F – V – F – V – V.", isCorrect: false },
      { id: "q-cp-cam-01-d", text: "V – F – V – F – F.", isCorrect: false },
      { id: "q-cp-cam-01-e", text: "V – F – V – V – F.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2026,
    originLink: "https://questoes.grancursosonline.com.br/questoes-de-concursos/pedagogia-405487/4456696",
    competencyRef:
      "Concurso público — Instituto Federal Catarinense (FUNDATEC, 2026), cargo Professor de Pedagogia do Campo — Educação do campo e movimentos sociais (PED-XV)",
  },
  {
    id: "q-cp-cam-02",
    topicId: "top-ped-15",
    statement:
      '"A Educação do Campo, tratada como educação rural na legislação brasileira, incorpora os espaços da floresta, da pecuária, das minas e da agricultura, e se estende, também, aos espaços pesqueiros, caiçaras, ribeirinhos, quilombolas e extrativistas, entre outros." (Resolução SEE/MG nº 2.197/2012)\n\nA partir do texto, avalie as asserções a seguir e a relação proposta entre elas.\n\nI. As Escolas Estaduais do campo podem adotar a metodologia da Pedagogia da Alternância, nos anos finais do Ensino Fundamental, no Ensino Médio e na Modalidade de Jovens e Adultos.\n\nPORQUE\n\nII. A Educação do Campo, tratada como educação rural na legislação brasileira, incorpora os espaços da floresta, da pecuária, das minas e da agricultura, e se estende, também, aos espaços pesqueiros, caiçaras, ribeirinhos, quilombolas e extrativistas, entre outros.\n\nA respeito dessas asserções, é CORRETO afirmar:',
    options: [
      { id: "q-cp-cam-02-a", text: "I e II são proposições falsas.", isCorrect: false },
      { id: "q-cp-cam-02-b", text: "I e II são proposições verdadeiras, e II é uma justificativa correta de I.", isCorrect: true },
      { id: "q-cp-cam-02-c", text: "I e II são proposições verdadeiras, mas II não é uma justificativa correta de I.", isCorrect: false },
      { id: "q-cp-cam-02-d", text: "I é uma proposição falsa, e II é uma proposição verdadeira.", isCorrect: false },
      { id: "q-cp-cam-02-e", text: "I é uma proposição verdadeira, e II é uma proposição falsa.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2018,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/56847/fumarc-2018-see-mg-especialista-em-educacao-basica-prova.pdf",
    competencyRef:
      "Concurso público — SEE/MG (FUMARC, 2018), cargo Especialista em Educação Básica — Educação do campo e movimentos sociais (PED-XV)",
  },
  {
    id: "q-cp-cam-03",
    topicId: "top-ped-15",
    statement:
      "Analise as informações a seguir:\n\nI. A identidade da escola do campo é definida pela sua vinculação às questões inerentes à sua realidade, ancorando-se na temporalidade e saberes próprios dos estudantes, na memória coletiva que sinaliza futuros, na rede de ciência e tecnologia disponível na sociedade e nos movimentos sociais em defesa de projetos que associem as soluções exigidas por essas questões à qualidade social da vida coletiva no país.\n\nII. O projeto institucional das escolas do campo, expressão do trabalho compartilhado de todos os setores comprometidos com a universalização da educação escolar com qualidade social, será constituído num espaço público de investigação e articulação de experiências e estudos direcionados para o mundo do trabalho, bem como para o desenvolvimento social, economicamente justo e ecologicamente sustentável.\n\nMarque a alternativa CORRETA:",
    options: [
      { id: "q-cp-cam-03-a", text: "As duas afirmativas são verdadeiras.", isCorrect: true },
      { id: "q-cp-cam-03-b", text: "A afirmativa I é verdadeira, e a II é falsa.", isCorrect: false },
      { id: "q-cp-cam-03-c", text: "A afirmativa II é verdadeira, e a I é falsa.", isCorrect: false },
      { id: "q-cp-cam-03-d", text: "As duas afirmativas são falsas.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2024,
    originLink: "https://questoes.grancursosonline.com.br/questoes-de-concursos/pedagogia-405487/3209106",
    competencyRef:
      "Concurso público — Prefeitura de São Bento do Una-PE (ADM&TEC, 2024), cargo Pedagogo — Educação do campo e movimentos sociais (PED-XV)",
  },
  {
    id: "q-cp-cam-04",
    topicId: "top-ped-15",
    statement:
      'O Decreto nº 7.352, de 4 de novembro de 2010, dispõe sobre a política de educação do campo e o Programa Nacional de Educação na Reforma Agrária - PRONERA. O artigo 1º reza: "A política de educação do campo destina-se à ampliação e qualificação da oferta de educação básica e superior às populações do campo, e será desenvolvida pela União em regime de colaboração com os Estados, o Distrito Federal e os Municípios, de acordo com as diretrizes e metas estabelecidas no Plano Nacional de Educação e o disposto neste Decreto."\n\nSobre educação no campo, analise as afirmativas.\n\nI. Entende-se por populações do campo: os agricultores familiares, os extrativistas, os pescadores artesanais, os ribeirinhos, os assentados e acampados da reforma agrária, os trabalhadores assalariados rurais, os quilombolas, os caiçaras, os povos da floresta, os caboclos e outros que produzam suas condições materiais de existência a partir do trabalho no meio rural.\n\nII. Caberá à União criar e implementar mecanismos que garantam a manutenção e o desenvolvimento da educação do campo nas políticas públicas educacionais, com o objetivo de superar as defasagens históricas de acesso à educação escolar pelas populações do campo, visando garantir o fornecimento de energia elétrica, água potável e saneamento básico, bem como outras condições necessárias ao funcionamento das escolas do campo.\n\nIII. Os recursos didáticos, pedagógicos, tecnológicos, culturais e literários destinados à educação do campo deverão atender às especificidades e apresentar conteúdos relacionados aos conhecimentos das populações do campo, considerando os saberes próprios das comunidades, em diálogo com os saberes acadêmicos e a construção de propostas de educação no campo contextualizadas.\n\nEstão corretas as afirmativas',
    options: [
      { id: "q-cp-cam-04-a", text: "I, II e III.", isCorrect: true },
      { id: "q-cp-cam-04-b", text: "I e II, apenas.", isCorrect: false },
      { id: "q-cp-cam-04-c", text: "II e III, apenas.", isCorrect: false },
      { id: "q-cp-cam-04-d", text: "I e III, apenas.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink:
      "https://arquivos.qconcursos.com/prova/arquivo_prova/98168/ufmt-2023-prefeitura-de-rondonopolis-mt-docente-da-educacao-infantil-prova.pdf",
    competencyRef:
      "Concurso público — Prefeitura de Rondonópolis-MT (UFMT, 2023), cargo Docente da Educação Infantil — Educação do campo e movimentos sociais (PED-XV)",
  },
];
