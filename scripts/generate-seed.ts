// Gera supabase/seed.sql a partir dos dados TypeScript (fonte única da verdade).
// Uso: npx tsx scripts/generate-seed.ts

import { writeFileSync } from "fs";
import { knowledgeObjects } from "../src/lib/data/knowledge-objects";
import { subjects, topics } from "../src/lib/data/subjects";
import { materials } from "../src/lib/data/materials";
import { questions } from "../src/lib/data/questions";

const esc = (s: string) => `'${s.replace(/'/g, "''")}'`;
const nullable = (s?: string | number | null) => (s === undefined || s === null ? "null" : typeof s === "number" ? String(s) : esc(String(s)));

let sql = `-- Gerado automaticamente por scripts/generate-seed.ts — não editar manualmente.\n\n`;

sql += `-- Objetos de conhecimento (matriz oficial)\n`;
for (const k of knowledgeObjects) {
  sql += `insert into public.knowledge_objects (id, area, official_code, title, source_portaria) values (${esc(k.id)}, ${esc(k.area)}, ${esc(k.officialCode)}, ${esc(k.title)}, ${esc(k.sourcePortaria)}) on conflict (id) do nothing;\n`;
}

sql += `\n-- Matérias\n`;
for (const s of subjects) {
  sql += `insert into public.subjects (id, name, icon, color, area) values (${esc(s.id)}, ${esc(s.name)}, ${esc(s.icon)}, ${esc(s.color)}, ${esc(s.area)}) on conflict (id) do nothing;\n`;
}

sql += `\n-- Tópicos\n`;
for (const t of topics) {
  sql += `insert into public.topics (id, subject_id, knowledge_object_id, name, "order") values (${esc(t.id)}, ${esc(t.subjectId)}, ${esc(t.knowledgeObjectId)}, ${esc(t.name)}, ${t.order}) on conflict (id) do nothing;\n`;
}

sql += `\n-- Materiais de estudo\n`;
for (const m of materials) {
  sql += `insert into public.study_materials (id, topic_id, type, title, url, source_label) values (${esc(m.id)}, ${esc(m.topicId)}, ${esc(m.type)}, ${esc(m.title)}, ${esc(m.url)}, ${esc(m.sourceLabel)}) on conflict (id) do nothing;\n`;
}

sql += `\n-- Questões\n`;
for (const q of questions) {
  sql += `insert into public.questions (id, topic_id, statement, difficulty, origin, origin_year, origin_link, competency_ref) values (${esc(q.id)}, ${esc(q.topicId)}, ${esc(q.statement)}, ${esc(q.difficulty)}, ${esc(q.origin)}, ${nullable(q.originYear)}, ${nullable(q.originLink)}, ${esc(q.competencyRef)}) on conflict (id) do nothing;\n`;
  for (const o of q.options) {
    sql += `insert into public.question_options (id, question_id, text, is_correct, explanation) values (${esc(o.id)}, ${esc(q.id)}, ${esc(o.text)}, ${o.isCorrect}, ${nullable(o.explanation)}) on conflict (id) do nothing;\n`;
  }
}

writeFileSync(new URL("../supabase/seed.sql", import.meta.url), sql);
console.log(`seed.sql gerado com ${knowledgeObjects.length} objetos de conhecimento, ${subjects.length} matérias, ${topics.length} tópicos, ${materials.length} materiais, ${questions.length} questões.`);
