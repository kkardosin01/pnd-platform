"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { questions } from "@/lib/data/questions";
import { subjects, topics } from "@/lib/data/subjects";
import { clearWrongQuestion } from "@/lib/attempts";
import { subjectColorClasses } from "@/lib/progress";
import { QuestionAttempt } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";
import { CheckCircle2, PlayCircle, XCircle, BookX } from "lucide-react";

export function ErrorNotebook({ attempts }: { attempts: QuestionAttempt[] }) {
  const attemptsByQuestion = useMemo(
    () => new Map(attempts.map((a) => [a.questionId, a])),
    [attempts]
  );
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());

  const wrongEntries = questions
    .map((question) => ({ question, attempt: attemptsByQuestion.get(question.id) }))
    .filter(
      (entry): entry is { question: (typeof questions)[number]; attempt: NonNullable<typeof entry.attempt> } =>
        !!entry.attempt && !entry.attempt.isCorrect && !reviewed.has(entry.question.id)
    );

  if (wrongEntries.length === 0) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 size-8 text-emerald-600" />
        <h2 className="text-lg font-semibold">Nenhum erro pendente</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Continue praticando para popular seu caderno de erros quando errar uma questão.
        </p>
        <Link href="/questoes" className={cn(buttonVariants(), "mt-4")}>
          Ir para o banco de questões
        </Link>
      </Card>
    );
  }

  const grouped = new Map<string, typeof wrongEntries>();
  for (const entry of wrongEntries) {
    const topic = topics.find((t) => t.id === entry.question.topicId);
    const subjectId = topic?.subjectId ?? "outro";
    grouped.set(subjectId, [...(grouped.get(subjectId) ?? []), entry]);
  }

  function handleReviewed(questionId: string, correctOptionId: string) {
    clearWrongQuestion(questionId, correctOptionId);
    setReviewed((prev) => new Set(prev).add(questionId));
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <BookX className="size-4" />
        {wrongEntries.length} questão(ões) para revisar
      </div>

      {[...grouped.entries()].map(([subjectId, entries]) => {
        const subject = subjects.find((s) => s.id === subjectId);
        const colors = subjectColorClasses[subject?.color ?? "slate"] ?? subjectColorClasses.slate;
        return (
          <div key={subjectId} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              {subject && (
                <span className={cn("flex size-7 items-center justify-center rounded-md", colors.bg, colors.text)}>
                  <DynamicIcon name={subject.icon} className="size-3.5" />
                </span>
              )}
              <h2 className="text-sm font-semibold">{subject?.name ?? "Outro"}</h2>
            </div>

            {entries.map(({ question, attempt }) => {
              const correctOption = question.options.find((o) => o.isCorrect);
              const selectedOption = question.options.find((o) => o.id === attempt.selectedOptionId);
              return (
                <Card key={question.id} className="p-5">
                  <p className="text-sm leading-relaxed">{question.statement}</p>

                  <div className="mt-3 flex flex-col gap-2 text-sm">
                    <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-2.5 dark:border-red-900 dark:bg-red-950/40">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-red-600" />
                      <span>{selectedOption?.text ?? "Sem resposta registrada"}</span>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 dark:border-emerald-900 dark:bg-emerald-950/40">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      <span>{correctOption?.text}</span>
                    </div>
                  </div>

                  {correctOption?.explanation && (
                    <p className="mt-3 text-xs text-muted-foreground">{correctOption.explanation}</p>
                  )}

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <Badge variant="outline">Competência: {question.competencyRef}</Badge>
                    <div className="flex gap-2">
                      <Link
                        href={`/questoes/praticar?topico=${question.topicId}`}
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                      >
                        <PlayCircle className="size-3.5" />
                        Praticar de novo
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => correctOption && handleReviewed(question.id, correctOption.id)}
                      >
                        <CheckCircle2 className="size-3.5" />
                        Marcar como revisado
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
