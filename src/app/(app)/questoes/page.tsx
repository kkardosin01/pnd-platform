import Link from "next/link";
import { subjects, getTopicsBySubject } from "@/lib/data/subjects";
import { getQuestionsByTopic, questions } from "@/lib/data/questions";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { subjectColorClasses } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { PlayCircle, Sparkles } from "lucide-react";

export default function QuestoesPage() {
  const subjectsWithQuestions = subjects
    .map((subject) => {
      const subjectTopics = getTopicsBySubject(subject.id);
      const count = subjectTopics.reduce((sum, t) => sum + getQuestionsByTopic(t.id).length, 0);
      return { subject, count };
    })
    .filter((s) => s.count > 0);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Banco de questões</h1>
          <p className="text-sm text-muted-foreground">
            {questions.length} questões catalogadas com origem, competência e dificuldade.
          </p>
        </div>
        <Link href="/questoes/praticar?modo=inteligente" className={buttonVariants()}>
          <Sparkles className="size-4" />
          Questões inteligentes
        </Link>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">
        Todas as questões deste banco são rotuladas por origem. Questões marcadas{" "}
        <strong>PND_2025_OFICIAL</strong> são itens reais do caderno oficial da PND 2025 —
        Pedagogia, conferidos contra o gabarito definitivo do Inep. Questões marcadas{" "}
        <strong>CONCURSO_PUBLICO_OFICIAL</strong> são itens reais de concursos públicos para
        Pedagogo/Professor, conferidos contra os gabaritos oficiais das respectivas bancas.
        Questões marcadas <strong>IA_INEDITA</strong> foram criadas para treinamento com base na
        matriz oficial e não são itens oficiais do Inep.
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjectsWithQuestions.map(({ subject, count }) => {
          const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;
          return (
            <Card key={subject.id} className="p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className={`flex size-9 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                  <DynamicIcon name={subject.icon} className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{subject.name}</p>
                  <p className="text-xs text-muted-foreground">{count} questões</p>
                </div>
              </div>
              <Link
                href={`/questoes/praticar?materia=${subject.id}`}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                <PlayCircle className="size-4" />
                Praticar
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
