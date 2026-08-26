import { Question } from "@/lib/types";

/**
 * Questões do Concurso Público IFMA (Instituto Federal de Educação, Ciência
 * e Tecnologia do Maranhão), Edital nº 01/2023, banca AOCP, cargo Pedagogo,
 * Tipo 01 (Prova PEDAGOGO).
 *
 * Foram selecionadas apenas as questões da seção "Conhecimento Específico"
 * (pedagogia/educação), questões 31 a 50 do caderno original — ficando fora
 * as questões de Língua Portuguesa, Raciocínio Lógico, Informática e
 * legislação/ética geral do servidor público que não tratam de conteúdo
 * pedagógico. Transcrição conferida item a item contra o gabarito oficial
 * definitivo (cargo 407-PEDAGOGO, Tipo 1).
 */

export const concursoAocpIfma: Question[] = [
  {
    id: "q-cp-aocp-01",
    topicId: "top-fgd-21",
    statement:
      "O Estatuto da Criança e do Adolescente (Lei nº 8.069/1990) define quem são os sujeitos de direitos que merecem a proteção integral por parte da sociedade e do Estado. Nas disposições preliminares da legislação indicada, qual é a idade certa para considerar uma pessoa como criança ou adolescente?",
    options: [
      { id: "q-cp-aocp-01-a", text: "Até 12 anos incompletos para crianças e entre 12 e 18 anos para adolescentes.", isCorrect: true },
      { id: "q-cp-aocp-01-b", text: "10 anos para crianças e 21 anos para adolescentes.", isCorrect: false },
      { id: "q-cp-aocp-01-c", text: "12 anos completos para crianças e 18 anos para adolescentes.", isCorrect: false },
      { id: "q-cp-aocp-01-d", text: "Até 16 anos para crianças e adolescentes.", isCorrect: false },
      { id: "q-cp-aocp-01-e", text: "8 anos para crianças e a partir de 11 anos para adolescente.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Educação, inclusão e direitos humanos (FGD-XXI)",
  },
  {
    id: "q-cp-aocp-02",
    topicId: "top-fgd-08",
    statement:
      "A Lei de Diretrizes e Bases da Educação Nacional (LDB) – Lei nº 9.394/1996 define a composição dos níveis escolares que fazem parte do sistema nacional de ensino. Quais são os níveis da educação escolar nacional?",
    options: [
      { id: "q-cp-aocp-02-a", text: "A educação básica é composta pelo ensino fundamental e ensino médio.", isCorrect: false },
      { id: "q-cp-aocp-02-b", text: "A educação escolar é composta por dois níveis: educação básica (formada pela educação infantil, ensino fundamental e médio) e educação superior.", isCorrect: true },
      { id: "q-cp-aocp-02-c", text: "O ensino fundamental é a primeira etapa da educação básica, seguida pelo ensino médio.", isCorrect: false },
      { id: "q-cp-aocp-02-d", text: "A educação básica tem duração mínima de 5 anos e máxima de 9 anos.", isCorrect: false },
      { id: "q-cp-aocp-02-e", text: "A educação de jovens e adultos (EJA) é uma modalidade de ensino destinada a não concluir os estudos na idade regular.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Políticas públicas, organização, financiamento e avaliação da educação (FGD-VIII)",
  },
  {
    id: "q-cp-aocp-03",
    topicId: "top-fgd-07",
    statement:
      "Os estudos acadêmicos que abordam as concepções curriculares apontam para a ideia de que o currículo é uma forma de reprodução das relações de poder na sociedade. Em relação às concepções curriculares e às relações de poder, assinale a alternativa INCORRETA.",
    options: [
      { id: "q-cp-aocp-03-a", text: "A concepção humanista-liberal defende uma educação crítica e transformadora, visando à formação de cidadãos conscientes e engajados na transformação social.", isCorrect: false },
      { id: "q-cp-aocp-03-b", text: "A concepção tecnicista objetiva uma educação voltada para o desenvolvimento de habilidades e de competências para o mercado de trabalho.", isCorrect: false },
      { id: "q-cp-aocp-03-c", text: "A concepção crítico-reprodutivista tem como objetivo uma educação que busca a transformação social; no entanto, na prática, acaba por reproduzir as desigualdades sociais, pois a escola não é neutra e, por conseguinte, reflete as mesmas relações de poder da sociedade.", isCorrect: false },
      { id: "q-cp-aocp-03-d", text: "A concepção tradicional defende uma educação voltada para a transmissão de conteúdos considerados importantes para a formação do indivíduo.", isCorrect: false },
      { id: "q-cp-aocp-03-e", text: "As concepções curriculares não estão vinculadas às relações de poder, elas abordam a relação entre conteúdo e forma, portanto tratam de aspectos didáticos do processo de ensino.", isCorrect: true },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Teorias e práticas de currículo (FGD-VII)",
  },
  {
    id: "q-cp-aocp-04",
    topicId: "top-ped-09",
    statement:
      "A pedagoga de uma escola pública na cidade de São Paulo, responsável por orientar o plano de trabalho docente, detectou que a maioria dos professores construía o seu planejamento de forma restrita, abordando somente os conteúdos específicos da disciplina que ministrava. Quando questionou os professores, percebeu que eles tinham dificuldade de compreender a importância da abordagem interdisciplinar. A respeito da organização do currículo e da interdisciplinaridade, assinale a alternativa correta.",
    options: [
      { id: "q-cp-aocp-04-a", text: "A abordagem interdisciplinar propõe a integração dos conteúdos das diferentes disciplinas, promovendo uma visão mais ampla e conectada do conhecimento, além de estimular a criatividade e o pensamento crítico dos alunos, podendo ser uma alternativa à organização disciplinar tradicional.", isCorrect: true },
      { id: "q-cp-aocp-04-b", text: "A organização disciplinar tradicional do currículo é a forma de garantir a aprendizagem dos conteúdos específicos de cada disciplina.", isCorrect: false },
      { id: "q-cp-aocp-04-c", text: "Uma organização interdisciplinar do currículo é limitada e impede a profundidade da aprendizagem dos conteúdos específicos de cada disciplina.", isCorrect: false },
      { id: "q-cp-aocp-04-d", text: "Uma abordagem interdisciplinar não é eficaz para promover a aprendizagem dos conteúdos específicos de cada disciplina.", isCorrect: false },
      { id: "q-cp-aocp-04-e", text: "A organização do currículo com base na interdisciplinaridade é exclusiva para escolas de ensino médio e superior.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Ensino, currículo e práticas interdisciplinares (PED-IX)",
  },
  {
    id: "q-cp-aocp-05",
    topicId: "top-fgd-08",
    statement:
      "O Decreto nº 5.154/2004 estabelece bases para a Educação Profissional e Tecnológica em consonância com a lei complementar LDB nº 9.394/1996. Qual é a finalidade do Decreto de 2004 em relação à educação profissional?",
    options: [
      { id: "q-cp-aocp-05-a", text: "Ampliar a oferta de cursos técnicos em instituições públicas.", isCorrect: true },
      { id: "q-cp-aocp-05-b", text: "Limitar o acesso aos cursos técnicos em instituições privadas.", isCorrect: false },
      { id: "q-cp-aocp-05-c", text: "Reduzir a carga horária dos cursos técnicos em instituições públicas.", isCorrect: false },
      { id: "q-cp-aocp-05-d", text: "Extinguir os cursos técnicos em instituições públicas.", isCorrect: false },
      { id: "q-cp-aocp-05-e", text: "O decreto estabeleceu parâmetros para a oferta da educação profissional, a qual deve ser feita exclusivamente por instituições de ensino superior.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Políticas públicas, organização, financiamento e avaliação da educação (FGD-VIII)",
  },
  {
    id: "q-cp-aocp-06",
    topicId: "top-ped-20",
    statement:
      "A escola Aliança atende alunos do ensino fundamental e médio. Nessa escola, as reuniões pedagógicas, que deveriam organizar e estruturar o planejamento pedagógico, não cumprem esse objetivo. Os professores reclamam que não sabem exatamente quais são os objetivos de aprendizagem e as habilidades que devem ser trabalhadas em cada série, que não há um cronograma de conteúdos e atividades a serem realizadas ao longo do ano letivo e que não há uma coordenação pedagógica para acompanhar o desempenho dos alunos e dos professores. A partir da situação apresentada, qual é a importância da organização do ensino e do planejamento pedagógico?",
    options: [
      { id: "q-cp-aocp-06-a", text: "A organização do ensino não é elemento fundamental para a efetivação do processo de aprendizagem.", isCorrect: false },
      { id: "q-cp-aocp-06-b", text: "O planejamento auxilia os professores a se sentirem mais produtivos, mas não impacta diretamente o aprendizado dos alunos.", isCorrect: false },
      { id: "q-cp-aocp-06-c", text: "É essencial para garantir os objetivos de aprendizagem e a utilização eficiente dos métodos e instrumentos pedagógicos durante as atividades em sala de aula.", isCorrect: true },
      { id: "q-cp-aocp-06-d", text: "É útil, mas não é tão importante quanto a capacidade do professor em se adaptar às necessidades individuais dos alunos.", isCorrect: false },
      { id: "q-cp-aocp-06-e", text: "Pode ser útil, mas é menos importante do que a qualidade de material didático utilizado.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Organização, planejamento e gestão da educação (PED-XX)",
  },
  {
    id: "q-cp-aocp-07",
    topicId: "top-fgd-10",
    statement:
      "A Educação a Distância é uma modalidade de ensino que se popularizou como uma forma de acesso à educação. Essa modalidade de ensino necessita de um conjunto de técnicas e métodos, ou seja, de uma didática específica, para que se ensinem de forma clara e objetiva os conteúdos. Nessa modalidade, são utilizados amplamente os recursos tecnológicos. Qual é o impacto das tecnologias da comunicação e informação na didática da Educação a Distância?",
    options: [
      { id: "q-cp-aocp-07-a", text: "Facilitam o acesso aos conteúdos educacionais e promovem a interatividade entre os alunos e os professores.", isCorrect: true },
      { id: "q-cp-aocp-07-b", text: "Dificultam o engajamento dos alunos, tornando o processo de aprendizagem menos eficaz.", isCorrect: false },
      { id: "q-cp-aocp-07-c", text: "Substituem completamente a presença do professor, tornando-o dispensável no processo educativo.", isCorrect: false },
      { id: "q-cp-aocp-07-d", text: "Limitam a diversidade de recursos pedagógicos, restringindo a criatividade na elaboração das aulas.", isCorrect: false },
      { id: "q-cp-aocp-07-e", text: "São irrelevantes para a didática da Educação a Distância, pois o ensino remoto é mais eficiente sem o uso dessas tecnologias.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Tecnologias da comunicação e informação nas práticas educativas (FGD-X)",
  },
  {
    id: "q-cp-aocp-08",
    topicId: "top-ped-19",
    statement:
      "A escola ABC possui um currículo padronizado e rígido, no qual os professores não têm autonomia para adaptar as atividades de ensino às necessidades e interesses dos alunos. Além disso, os professores não recebem formação adequada para lidar com a diversidade cultural e socioeconômica dos alunos, o que pode gerar desigualdades no processo de aprendizagem. Nessa situação, é possível que os alunos não se sintam motivados a aprender e que a escola não consiga cumprir seu papel de formar cidadãos críticos e autônomos. A avaliação da aprendizagem é um dos elementos didáticos do processo de ensino e aprendizagem. Qual é a principal função da avaliação da aprendizagem?",
    options: [
      { id: "q-cp-aocp-08-a", text: "Identificar alunos que precisam ser reprovados para manter a qualidade do ensino.", isCorrect: false },
      { id: "q-cp-aocp-08-b", text: "Mensurar de forma quantitativa o conhecimento adquirido pelos alunos e compará-los entre si.", isCorrect: false },
      { id: "q-cp-aocp-08-c", text: "Verificar se os objetivos educacionais foram alcançados e, se não, buscar alternativas para atingi-los.", isCorrect: true },
      { id: "q-cp-aocp-08-d", text: "Avaliar o desempenho individual dos alunos, sem levar em consideração o contexto social e cultural.", isCorrect: false },
      { id: "q-cp-aocp-08-e", text: "Promover uma competição entre os alunos e estimular a busca por notas altas.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Políticas e práticas de avaliação (PED-XIX)",
  },
  {
    id: "q-cp-aocp-09",
    topicId: "top-fgd-06",
    statement:
      "O processo de ensino e aprendizagem na escola é conduzido pelos docentes, que são orientados pela equipe pedagógica. O processo de escolarização apresenta elementos didáticos fundamentais ao processo de ensino e aprendizagem. Esses elementos são responsáveis por orientar e direcionar a ação pedagógica, tornando-a mais eficaz e significativa. Quais são os elementos didáticos que orientam e direcionam a ação pedagógica e docente?",
    options: [
      { id: "q-cp-aocp-09-a", text: "Conteúdo; método; avaliação; material didático; professor.", isCorrect: true },
      { id: "q-cp-aocp-09-b", text: "Planejamento docente e avaliação da aprendizagem.", isCorrect: false },
      { id: "q-cp-aocp-09-c", text: "Projeto Político Pedagógico e currículo.", isCorrect: false },
      { id: "q-cp-aocp-09-d", text: "Conteúdo; currículo; avaliação da aprendizagem.", isCorrect: false },
      { id: "q-cp-aocp-09-e", text: "Planejamento docente; método; professor.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Didática e metodologias de ensino (FGD-VI)",
  },
  {
    id: "q-cp-aocp-10",
    topicId: "top-fgd-18",
    statement:
      "O ensino médio é a etapa final da educação básica. Em 2017, com a aprovação da Base Nacional Comum Curricular (BNCC), estabeleceram-se mudanças significativas nas Diretrizes Curriculares para o Ensino Médio, que impactaram a organização curricular e a oferta das disciplinas. Atualmente, o ensino médio passa por uma reforma denominada “Novo Ensino Médio (NEM)”. Qual é a principal mudança promovida por essa reforma em relação à organização curricular das disciplinas?",
    options: [
      { id: "q-cp-aocp-10-a", text: "A inclusão de disciplinas obrigatórias como língua estrangeira e filosofia.", isCorrect: false },
      { id: "q-cp-aocp-10-b", text: "Obrigatoriedade da oferta de disciplinas técnicas profissionalizantes.", isCorrect: false },
      { id: "q-cp-aocp-10-c", text: "A flexibilização curricular, permitindo que os alunos escolham as disciplinas de acordo com suas áreas de interesse, guiados pelos itinerários formativos.", isCorrect: true },
      { id: "q-cp-aocp-10-d", text: "Aumento do número de horas-aula por semana, visando a um maior aprofundamento do conteúdo.", isCorrect: false },
      { id: "q-cp-aocp-10-e", text: "As disciplinas são optativas, ofertadas dentro das áreas de conhecimento: linguagens, matemática, ciências da natureza e ciências humanas, e ficam disponíveis para que os alunos façam a escolha individual.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Implementação e avaliação de currículos e projetos político-pedagógicos (FGD-XVIII)",
  },
  {
    id: "q-cp-aocp-11",
    topicId: "top-fgd-12",
    statement:
      "O Decreto-Lei nº 5.296/2004 institui a Política Nacional para a Integração da Pessoa Portadora de Deficiência. Qual é o objetivo desse decreto?",
    options: [
      { id: "q-cp-aocp-11-a", text: "Assegurar a igualdade de oportunidades, a participação plena e efetiva e a inclusão social das pessoas com deficiência.", isCorrect: true },
      { id: "q-cp-aocp-11-b", text: "Excluir as pessoas com deficiência da sociedade, para não comprometer a sua produtividade e desenvolvimento.", isCorrect: false },
      { id: "q-cp-aocp-11-c", text: "Permitir que as pessoas com deficiência tenham direito a tratamentos médicos, independentemente das questões relativas à inclusão social.", isCorrect: false },
      { id: "q-cp-aocp-11-d", text: "Assegurar que as pessoas com deficiência tenham acesso exclusivo a programas sociais específicos implementados pelo governo federal.", isCorrect: false },
      { id: "q-cp-aocp-11-e", text: "Assegurar a inclusão das pessoas com deficiência em atividades esportivas de alto rendimento.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Educação especial e inclusiva (FGD-XII)",
  },
  {
    id: "q-cp-aocp-12",
    topicId: "top-fgd-17",
    statement:
      "A gestão escolar, no âmbito da escola pública participativa, é um modelo de gestão que envolve a comunidade escolar, incluindo professores, funcionários, pais e responsáveis e a comunidade em geral. Qual é a importância da gestão participativa no planejamento escolar?",
    options: [
      { id: "q-cp-aocp-12-a", text: "Na gestão participativa, o gestor centraliza o controle sobre as decisões escolares para evitar erros.", isCorrect: false },
      { id: "q-cp-aocp-12-b", text: "A gestão participativa é importante em escolas de pequeno porte, nas quais é mais fácil envolver toda a comunidade escolar nas decisões.", isCorrect: false },
      { id: "q-cp-aocp-12-c", text: "A gestão participativa é utilizada como mecanismo de auditoria em escolas que apresentam problemas de gestão, nas quais é necessário um envolvimento maior da comunidade para solucionar os problemas.", isCorrect: false },
      { id: "q-cp-aocp-12-d", text: "A gestão participativa é importante em todas as escolas, pois envolve toda a comunidade escolar no processo de tomada de decisão, o que pode resultar em uma escola mais democrática e eficiente.", isCorrect: true },
      { id: "q-cp-aocp-12-e", text: "A gestão participativa é importante no planejamento escolar, no entanto pode atrasar a tomada de decisão e o andamento das atividades escolares.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Planejamento, organização e gestão democrática educacional (FGD-XVII)",
  },
  {
    id: "q-cp-aocp-13",
    topicId: "top-fgd-04",
    statement:
      "Derivadas da psicologia, as teorias da aprendizagem são múltiplas. Em geral, indicam um conjunto de conceitos fundamentais para compreender o processo de ensino e aprendizagem e aprimorar as práticas pedagógicas que promovem o desenvolvimento dos alunos. Dentre as diversas teorias da aprendizagem, destacam-se as de Piaget, Vygotsky, Wallon e Ausubel. Qual(is) dessas teorias da aprendizagem enfatiza(m) a importância do ambiente social e cultural no processo de aprendizagem?",
    options: [
      { id: "q-cp-aocp-13-a", text: "Teoria de Jean Piaget (1896-1980).", isCorrect: false },
      { id: "q-cp-aocp-13-b", text: "Teoria de Lev Vygotsky (1896-1934).", isCorrect: false },
      { id: "q-cp-aocp-13-c", text: "Teoria de Henri Wallon (1879-1962).", isCorrect: false },
      { id: "q-cp-aocp-13-d", text: "Teoria de David Ausubel (1918-2008).", isCorrect: false },
      { id: "q-cp-aocp-13-e", text: "Teorias de Lev Vygotsky e David Ausubel.", isCorrect: true },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Psicologia da educação (FGD-IV)",
  },
  {
    id: "q-cp-aocp-14",
    topicId: "top-fgd-22",
    statement:
      "Imagine que você é um professor de uma escola de ensino médio e está preocupado com a falta de consciência ambiental entre os alunos. Muitos deles não têm noção dos efeitos das suas ações no meio ambiente e não se preocupam com a sustentabilidade. Além disso, a escola não possui um programa de educação ambiental garantido. A esse respeito, as Diretrizes Curriculares Nacionais para a Educação Ambiental, definidas pela Resolução nº 2/2012, visam",
    options: [
      { id: "q-cp-aocp-14-a", text: "divulgar as instituições que promovem atividades educativas para a formação de cidadãos com consciência ambiental.", isCorrect: false },
      { id: "q-cp-aocp-14-b", text: "excluir a educação ambiental do currículo escolar, colocando esse tema como conteúdo que deve ser abordado por instituições especializadas na área.", isCorrect: false },
      { id: "q-cp-aocp-14-c", text: "garantir a integração da educação ambiental somente nas séries iniciais do ensino fundamental.", isCorrect: false },
      { id: "q-cp-aocp-14-d", text: "estimular a reflexão crítica e propositiva da inserção da Educação Ambiental na formulação, execução e avaliação dos projetos institucionais e pedagógicos das instituições de ensino.", isCorrect: true },
      { id: "q-cp-aocp-14-e", text: "não contemplar uma abordagem interdisciplinar e contextualizada na educação ambiental, por compreender que essa temática não é de responsabilidade da escola.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Educação socioambiental (FGD-XXII)",
  },
  {
    id: "q-cp-aocp-15",
    topicId: "top-fgd-24",
    statement:
      "A Lei nº 10.639/2003 tornou obrigatório o ensino da história e cultura afro-brasileira e africana nas escolas. Na sequência, aprovou-se a Resolução CNE/CP nº 1/2004, que estabeleceu as diretrizes curriculares nacionais para a educação das relações étnico-raciais. Sobre os objetivos das diretrizes curriculares, assinale a alternativa correta.",
    options: [
      { id: "q-cp-aocp-15-a", text: "Promover a segregação e exclusão das pessoas negras da sociedade, enfatizando as diferenças culturais por meio do ensino.", isCorrect: false },
      { id: "q-cp-aocp-15-b", text: "Garantir o ensino da história da cultura local, restrita à região geográfica e aos aspectos específicos do local.", isCorrect: false },
      { id: "q-cp-aocp-15-c", text: "Estabelecer ações afirmativas para a inclusão de pessoas negras no mercado de trabalho.", isCorrect: false },
      { id: "q-cp-aocp-15-d", text: "Reconhecer e valorizar a identidade, a história e a cultura dos afro-brasileiros, bem como garantir o reconhecimento e a igualdade de valorização das raízes africanas da nação brasileira, ao lado das indígenas, europeias e asiáticas.", isCorrect: true },
      { id: "q-cp-aocp-15-e", text: "Valorizar a superioridade de uma cultura em detrimento de outras, o que será efetivado quando o ensino abordar todas as formas culturais.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Educação para as relações étnico-raciais (FGD-XXIV)",
  },
  {
    id: "q-cp-aocp-16",
    topicId: "top-ped-14",
    statement:
      "As Diretrizes Operacionais para o Atendimento Educacional Especializado na Educação Básica, modalidade Educação Especial, regulamentadas pela Resolução nº 4/2009 do Conselho Nacional de Educação (CNE), fornecem orientações para a organização, oferta e realização do Atendimento Educacional Especializado (AEE) para estudantes com deficiência, transtornos globais do desenvolvimento e altas habilidades/superdotação matriculados na Educação Básica. De acordo com essa legislação, quais são os recursos de acessibilidade?",
    options: [
      { id: "q-cp-aocp-16-a", text: "São recursos de acessibilidade aqueles que asseguram condições de acesso ao currículo dos alunos com deficiência ou mobilidade reduzida, promovendo a utilização dos materiais didáticos e pedagógicos, dos espaços, dos mobiliários e dos equipamentos, dos sistemas de comunicação e informação, dos transportes e dos demais serviços.", isCorrect: true },
      { id: "q-cp-aocp-16-b", text: "São considerados recursos de acessibilidade o planejamento pedagógico especializado e as salas de recursos multifuncionais.", isCorrect: false },
      { id: "q-cp-aocp-16-c", text: "Os recursos de acessibilidade serão definidos em reunião bimestral realizada pela equipe pedagógica das escolas e devem estar previstos no Projeto Político Pedagógico.", isCorrect: false },
      { id: "q-cp-aocp-16-d", text: "A acessibilidade diz respeito à escolha dos materiais pedagógicos adequados para promover o processo de ensino e aprendizagem.", isCorrect: false },
      { id: "q-cp-aocp-16-e", text: "São considerados recursos de acessibilidade o Plano de Desenvolvimento Individual (PDI) e o Projeto Político Pedagógico.", isCorrect: false },
    ],
    difficulty: "dificil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Práticas de atendimento educacional especializado (PED-XIV)",
  },
  {
    id: "q-cp-aocp-17",
    topicId: "top-fgd-20",
    statement:
      "A Resolução nº 8/2012 define as Diretrizes Curriculares Nacionais para a Educação Escolar Quilombola na Educação Básica. Dentre os aspectos abordados nessa resolução, encontramos aspectos relativos à organização da educação escolar quilombola. Sobre o calendário da educação escolar quilombola, assinale a alternativa correta.",
    options: [
      { id: "q-cp-aocp-17-a", text: "O calendário para a educação escolar quilombola deverá adequar-se às peculiaridades locais, inclusive climáticas, econômicas e socioculturais, a critério do respectivo sistema de ensino e do projeto político-pedagógico da escola, sem, com isso, reduzir o número de horas letivas previsto na LDB.", isCorrect: true },
      { id: "q-cp-aocp-17-b", text: "A educação escolar quilombola é uma modalidade de ensino que atende as populações quilombolas rurais. Para tanto, deve considerar as condições climáticas na elaboração e definição do calendário escolar.", isCorrect: false },
      { id: "q-cp-aocp-17-c", text: "O calendário escolar quilombola deve ser construído a partir das demandas das populações rurais, mediante a consulta às lideranças das comunidades quilombolas.", isCorrect: false },
      { id: "q-cp-aocp-17-d", text: "O calendário escolar para educação quilombola obedecerá à mesma organização estabelecida para as escolas regulares da educação básica no âmbito dos estados e municípios, em consonância com a Constituição Federal de 1988.", isCorrect: false },
      { id: "q-cp-aocp-17-e", text: "O calendário escolar para educação quilombola será definido pelas secretarias de educação no âmbito dos estados e repassado para seus respectivos municípios, que farão as adequações necessárias, após consulta às lideranças das comunidades quilombolas locais.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Histórias e culturas africanas, afro-brasileiras e indígenas (FGD-XX)",
  },
  {
    id: "q-cp-aocp-18",
    topicId: "top-fgd-14",
    statement:
      "No contexto acadêmico, a efetividade do trabalho pedagógico se expressa pelo tripé ensino, pesquisa e extensão. A pesquisa e a extensão são áreas de atuação docente, fundamentais para que o ensino seja de qualidade e esteja sempre atualizado. Imagine que, em uma universidade, o curso de Pedagogia possui um corpo docente altamente qualificado e engajado em pesquisas relevantes para a área da Educação. No entanto os estudantes do curso começam a reclamar que o conteúdo das disciplinas não está sendo aplicado de forma prática e contextualizada, o que limita sua capacidade de aplicar os conceitos em situações reais. Os professores do curso de Pedagogia, então, reconhecem que a pesquisa é importante para se manterem atualizados e informados sobre as tendências e teorias da Educação, mas entendem que o ensino e a extensão são igualmente importantes para garantir que os alunos possam aplicar essas teorias na prática. Com isso, os professores decidem incorporar mais atividades práticas e projetos de extensão em suas disciplinas, visando conectar a teoria à prática e proporcionar aos alunos a oportunidade de aplicar, em situações reais, o que aprenderam. Com essa abordagem, o curso de Pedagogia consegue promover a indissociabilidade entre o ensino, a pesquisa e a extensão. Qual é a importância da indissociabilidade entre ensino, pesquisa e extensão no trabalho pedagógico?",
    options: [
      { id: "q-cp-aocp-18-a", text: "A relação entre ensino, pesquisa e extensão no trabalho pedagógico não é fator determinante e deve ocorrer de forma espontânea.", isCorrect: false },
      { id: "q-cp-aocp-18-b", text: "A relação entre ensino, pesquisa e extensão no trabalho pedagógico é importante apenas nos níveis escolares superiores.", isCorrect: false },
      { id: "q-cp-aocp-18-c", text: "A indissociabilidade entre ensino, pesquisa e extensão no trabalho pedagógico é fundamental para uma formação crítica e reflexiva do estudante.", isCorrect: true },
      { id: "q-cp-aocp-18-d", text: "A relação entre ensino, pesquisa e extensão no trabalho pedagógico é importante apenas para a formação de professores.", isCorrect: false },
      { id: "q-cp-aocp-18-e", text: "A indissociabilidade entre ensino, pesquisa e extensão no trabalho pedagógico é importante apenas para a carreira acadêmica.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Identidade e especificidades do trabalho docente (FGD-XIV)",
  },
  {
    id: "q-cp-aocp-19",
    topicId: "top-fgd-21",
    statement:
      "Imagine uma escola pública, composta por uma comunidade heterogênea, onde há diversidade étnica, cultural e religiosa entre os alunos. Nessa escola, um grupo de alunos começa a intimidar, discriminar e fazer comentários ofensivos em relação a um aluno de origem africana. O aluno e seus familiares procuram a equipe pedagógica para relatar o ocorrido e observam que o estudante está se sentindo excluído e desvalorizado, e isso tem impactado o seu desempenho acadêmico. Os responsáveis pelo estudante solicitam providências e evocam aspectos contidos nas Diretrizes Nacionais para a Educação em Direitos Humanos. Nesse caso, como as Diretrizes Nacionais para a Educação em Direitos Humanos podem ser utilizadas na escola?",
    options: [
      { id: "q-cp-aocp-19-a", text: "As diretrizes devem ser utilizadas para elaborar projetos e ações de orientação junto à comunidade escolar, e promover a inclusão e a prática da educação em direitos humanos em todos os níveis de ensino.", isCorrect: true },
      { id: "q-cp-aocp-19-b", text: "As diretrizes devem ser utilizadas para implantar o ensino religioso nas escolas brasileiras.", isCorrect: false },
      { id: "q-cp-aocp-19-c", text: "As diretrizes devem ser utilizadas para orientar a implementação da Educação Especial nas escolas brasileiras.", isCorrect: false },
      { id: "q-cp-aocp-19-d", text: "As diretrizes devem ser utilizadas para desenvolver projetos e programas com ênfase na educação financeira.", isCorrect: false },
      { id: "q-cp-aocp-19-e", text: "As diretrizes devem ser utilizadas para promover os estudos étnico-raciais e de línguas estrangeiras nas escolas brasileiras.", isCorrect: false },
    ],
    difficulty: "facil",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Educação, inclusão e direitos humanos (FGD-XXI)",
  },
  {
    id: "q-cp-aocp-20",
    topicId: "top-ped-13",
    statement:
      "A Resolução nº 3/2010 define a Educação de Jovens e Adultos (EJA) como uma modalidade de ensino que deve ser oferecida àqueles que não puderam realizar os estudos na idade regular, contemplando o ensino fundamental e médio. Sobre o objetivo das Diretrizes Operacionais para EJA, assinale alternativa correta.",
    options: [
      { id: "q-cp-aocp-20-a", text: "Estabelecer as normas para a criação de novos cursos de iniciação para jovens e adultos.", isCorrect: false },
      { id: "q-cp-aocp-20-b", text: "Definir as competências dos professores que atuam na educação de jovens e adultos.", isCorrect: false },
      { id: "q-cp-aocp-20-c", text: "Orientar a organização e a oferta da educação de jovens e adultos, garantindo o acesso, a permanência e a conclusão com qualidade.", isCorrect: true },
      { id: "q-cp-aocp-20-d", text: "Criar programas de capacitação profissional para jovens e adultos em situação de vulnerabilidade social.", isCorrect: false },
      { id: "q-cp-aocp-20-e", text: "Produzir material didático para os alunos e organizar a formação continuada dos professores que atuam nessa modalidade de ensino.", isCorrect: false },
    ],
    difficulty: "media",
    origin: "CONCURSO_PUBLICO_OFICIAL",
    originYear: 2023,
    originLink: "https://www.aocp.com.br",
    competencyRef: "Concurso público — IFMA (AOCP, 2023), cargo Pedagogo — Práticas educativas para crianças, jovens, adultos e idosos (PED-XIII)",
  },
];
