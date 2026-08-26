-- Corrige tabelas que ficaram com RLS habilitado (via trigger automático da
-- Supabase) mas sem nenhuma policy, o que bloqueava leitura/escrita nelas.

alter table public.competencies enable row level security;
alter table public.skills enable row level security;
alter table public.simulation_questions enable row level security;

-- Conteúdo público (mesmo padrão de knowledge_objects/subjects/etc.)
create policy "conteudo_leitura_publica" on public.competencies for select using (true);
create policy "conteudo_leitura_publica" on public.skills for select using (true);

-- Perguntas de um simulado só são visíveis/editáveis pelo dono do simulado.
create policy "simulation_questions_owner" on public.simulation_questions for all using (
  exists (
    select 1 from public.simulations
    where simulations.id = simulation_questions.simulation_id
      and simulations.user_id = auth.uid()
  )
) with check (
  exists (
    select 1 from public.simulations
    where simulations.id = simulation_questions.simulation_id
      and simulations.user_id = auth.uid()
  )
);
