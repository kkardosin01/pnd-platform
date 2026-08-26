-- Adiciona a origem "concurso público" ao enum de origem de questões, para
-- suportar questões reais extraídas de provas de concursos públicos
-- (professor/pedagogo) com conteúdo relacionado à matriz da PND.
alter type question_origin add value if not exists 'CONCURSO_PUBLICO_OFICIAL';
