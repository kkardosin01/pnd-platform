-- ============================================================================
-- Plataforma de Preparação para a PND — schema inicial
-- Baseado na matriz oficial das Portarias Inep nº 315/2025 (Formação Geral
-- Docente) e nº 331/2025 (componente específico de Pedagogia).
-- ============================================================================

create extension if not exists "pgcrypto";

-- ── Perfil do usuário ────────────────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  exam_date date not null,
  weekly_availability_hours numeric(4, 1) not null default 10,
  semester int,
  study_method_pref text,
  created_at timestamptz not null default now()
);

-- ── Matriz oficial ───────────────────────────────────────────────────────
create type knowledge_area as enum ('formacao_geral', 'pedagogia_especifico');

create table if not exists public.knowledge_objects (
  id text primary key,                    -- ex: 'fgd-01', 'ped-16'
  area knowledge_area not null,
  official_code text not null,            -- ex: 'FGD-V', 'PED-XVI'
  title text not null,
  source_portaria text not null
);

create table if not exists public.competencies (
  id uuid primary key default gen_random_uuid(),
  area knowledge_area not null,
  description text not null
);

create table if not exists public.skills (
  id uuid primary key default gen_random_uuid(),
  competency_id uuid not null references public.competencies (id) on delete cascade,
  description text not null
);

-- ── Estrutura didática ───────────────────────────────────────────────────
create table if not exists public.subjects (
  id text primary key,
  name text not null,
  icon text not null,
  color text not null,
  area knowledge_area not null
);

create table if not exists public.topics (
  id text primary key,
  subject_id text not null references public.subjects (id) on delete cascade,
  knowledge_object_id text not null references public.knowledge_objects (id),
  name text not null,
  "order" int not null default 1
);

create table if not exists public.subtopics (
  id uuid primary key default gen_random_uuid(),
  topic_id text not null references public.topics (id) on delete cascade,
  name text not null,
  "order" int not null default 1
);

create table if not exists public.study_materials (
  id text primary key,
  topic_id text not null references public.topics (id) on delete cascade,
  type text not null check (type in ('pdf', 'video', 'article', 'book')),
  title text not null,
  url text not null,
  source_label text not null
);

-- ── Banco de questões ────────────────────────────────────────────────────
create type question_origin as enum (
  'PND_2025_OFICIAL',
  'ENADE_LICENCIATURAS_2025_OFICIAL',
  'ENADE_PEDAGOGIA_HISTORICO_REFERENCIA',
  'IA_INEDITA'
);
create type difficulty_level as enum ('facil', 'media', 'dificil');

create table if not exists public.questions (
  id text primary key,
  topic_id text not null references public.topics (id),
  statement text not null,
  difficulty difficulty_level not null,
  origin question_origin not null,
  origin_year int,
  origin_link text,
  competency_ref text,
  created_at timestamptz not null default now()
);

create table if not exists public.question_options (
  id text primary key,
  question_id text not null references public.questions (id) on delete cascade,
  text text not null,
  is_correct boolean not null default false,
  explanation text
);

create table if not exists public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  question_id text not null references public.questions (id),
  selected_option_id text not null references public.question_options (id),
  is_correct boolean not null,
  time_spent_seconds int not null default 0,
  session_id uuid,
  attempted_at timestamptz not null default now()
);
create index if not exists idx_attempts_user_question on public.question_attempts (user_id, question_id);
create index if not exists idx_attempts_user_date on public.question_attempts (user_id, attempted_at desc);

-- ── Simulados ────────────────────────────────────────────────────────────
create type simulation_type as enum ('mini', 'rapido', 'medio', 'personalizado', 'inteligente', 'completo');

create table if not exists public.simulations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  type simulation_type not null,
  config jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  duration_seconds int not null default 0
);

create table if not exists public.simulation_questions (
  id uuid primary key default gen_random_uuid(),
  simulation_id uuid not null references public.simulations (id) on delete cascade,
  question_id text not null references public.questions (id),
  "order" int not null
);

create table if not exists public.simulation_results (
  simulation_id uuid primary key references public.simulations (id) on delete cascade,
  score_objective numeric(6, 3),
  score_discursive numeric(6, 3),
  score_general numeric(6, 3),
  performance_by_area jsonb not null default '{}'::jsonb
);

-- ── Flashcards (Fase 7) ──────────────────────────────────────────────────
create table if not exists public.flashcards (
  id uuid primary key default gen_random_uuid(),
  topic_id text not null references public.topics (id),
  type text not null check (type in ('conceito', 'autor', 'legislacao', 'data', 'teoria', 'pegadinha')),
  front text not null,
  back text not null
);

create table if not exists public.flashcard_reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  flashcard_id uuid not null references public.flashcards (id) on delete cascade,
  review_stage int not null default 1,          -- 1, 7, 15, 30 (dias)
  ease_factor numeric(4, 2) not null default 2.5,
  next_review_at timestamptz not null default now(),
  last_result text check (last_result in ('acertou', 'errou'))
);
create index if not exists idx_flashcard_reviews_due on public.flashcard_reviews (user_id, next_review_at);

-- ── Discursiva (Fase 8) ──────────────────────────────────────────────────
create table if not exists public.essays (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  theme_area text not null,
  prompt_text text not null,
  user_response text not null,
  submitted_at timestamptz not null default now()
);

create table if not exists public.essay_feedback (
  essay_id uuid primary key references public.essays (id) on delete cascade,
  theme_adherence boolean not null,
  structure_score numeric(4, 2),
  argumentation_score numeric(4, 2),
  cohesion_score numeric(4, 2),
  grammar_score numeric(4, 2),
  strengths_text text,
  improvements_text text,
  generated_by text not null default 'ia'
);

-- ── Caderno de erros (Fase 7) ────────────────────────────────────────────
create table if not exists public.mistake_notebook (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  question_attempt_id uuid not null references public.question_attempts (id) on delete cascade,
  error_type text not null check (
    error_type in ('falta_conhecimento', 'falta_atencao', 'interpretacao', 'confusao_conceitos', 'legislacao', 'falta_tempo')
  ),
  note text,
  reviewed boolean not null default false,
  created_at timestamptz not null default now()
);

-- ── Cronograma e progresso ───────────────────────────────────────────────
create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  topic_id text references public.topics (id),
  type text not null check (type in ('teoria', 'questoes', 'revisao', 'simulado')),
  started_at timestamptz not null default now(),
  ended_at timestamptz
);

create table if not exists public.study_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  week_start_date date not null,
  plan jsonb not null,
  recalculated_at timestamptz not null default now(),
  unique (user_id, week_start_date)
);

create table if not exists public.user_progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  topic_id text not null references public.topics (id),
  status text not null default 'nao_iniciado' check (
    status in ('nao_iniciado', 'em_andamento', 'revisar', 'dominado')
  ),
  accuracy_rate numeric(5, 4) not null default 0,
  last_studied_at timestamptz,
  primary key (user_id, topic_id)
);

-- ── Gamificação ──────────────────────────────────────────────────────────
create table if not exists public.gamification (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  xp int not null default 0,
  level int not null default 1,
  current_streak_days int not null default 0,
  best_streak_days int not null default 0
);

create table if not exists public.achievements (
  id text primary key,
  code text not null unique,
  title text not null,
  criteria jsonb not null
);

create table if not exists public.user_achievements (
  user_id uuid not null references public.profiles (id) on delete cascade,
  achievement_id text not null references public.achievements (id),
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

-- ============================================================================
-- Row Level Security
-- ============================================================================
alter table public.profiles enable row level security;
alter table public.question_attempts enable row level security;
alter table public.simulations enable row level security;
alter table public.simulation_results enable row level security;
alter table public.flashcard_reviews enable row level security;
alter table public.essays enable row level security;
alter table public.essay_feedback enable row level security;
alter table public.mistake_notebook enable row level security;
alter table public.study_sessions enable row level security;
alter table public.study_plans enable row level security;
alter table public.user_progress enable row level security;
alter table public.gamification enable row level security;
alter table public.user_achievements enable row level security;

-- Conteúdo (matriz, questões, materiais) é público para leitura autenticada
alter table public.knowledge_objects enable row level security;
alter table public.subjects enable row level security;
alter table public.topics enable row level security;
alter table public.subtopics enable row level security;
alter table public.study_materials enable row level security;
alter table public.questions enable row level security;
alter table public.question_options enable row level security;
alter table public.flashcards enable row level security;
alter table public.achievements enable row level security;

create policy "conteudo_leitura_publica" on public.knowledge_objects for select using (true);
create policy "conteudo_leitura_publica" on public.subjects for select using (true);
create policy "conteudo_leitura_publica" on public.topics for select using (true);
create policy "conteudo_leitura_publica" on public.subtopics for select using (true);
create policy "conteudo_leitura_publica" on public.study_materials for select using (true);
create policy "conteudo_leitura_publica" on public.questions for select using (true);
create policy "conteudo_leitura_publica" on public.question_options for select using (true);
create policy "conteudo_leitura_publica" on public.flashcards for select using (true);
create policy "conteudo_leitura_publica" on public.achievements for select using (true);

-- Dados pessoais: só o próprio usuário lê/escreve
create policy "profile_owner" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "attempts_owner" on public.question_attempts for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "simulations_owner" on public.simulations for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "simulation_results_owner" on public.simulation_results for all using (
  exists (select 1 from public.simulations s where s.id = simulation_id and s.user_id = auth.uid())
);
create policy "flashcard_reviews_owner" on public.flashcard_reviews for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "essays_owner" on public.essays for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "essay_feedback_owner" on public.essay_feedback for all using (
  exists (select 1 from public.essays e where e.id = essay_id and e.user_id = auth.uid())
);
create policy "mistakes_owner" on public.mistake_notebook for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "sessions_owner" on public.study_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "plans_owner" on public.study_plans for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "progress_owner" on public.user_progress for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "gamification_owner" on public.gamification for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "user_achievements_owner" on public.user_achievements for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
