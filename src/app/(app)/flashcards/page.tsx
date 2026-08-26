import Link from "next/link";
import { subjects, getTopicsBySubject } from "@/lib/data/subjects";
import { getQuestionsByTopic, questions } from "@/lib/data/questions";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { subjectColorClasses } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Layers, Shuffle } from "lucide-react";

export default function FlashcardsPage() {
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
          <h1 className="text-2xl font-semibold tracking-tight">Flashcards</h1>
          <p className="text-sm text-muted-foreground">
            Revise conceitos rapidamente: veja a pergunta, tente responder de cabeça e confira.
          </p>
        </div>
        <Link href="/flashcards/praticar" className={buttonVariants()}>
          <Shuffle className="size-4" />
          Baralho geral
        </Link>
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
                  <p className="text-xs text-muted-foreground">{count} cartas</p>
                </div>
              </div>
              <Link
                href={`/flashcards/praticar?materia=${subject.id}`}
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                <Layers className="size-4" />
                Estudar
              </Link>
            </Card>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {questions.length} cartas disponíveis no total.
      </p>
    </div>
  );
}
