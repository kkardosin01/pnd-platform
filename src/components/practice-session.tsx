"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Question } from "@/lib/types";
import { getTopicLabel } from "@/lib/data/subjects";
import { recordAttempt } from "@/lib/attempts";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";

const difficultyLabels = { facil: "Fácil", media: "Média", dificil: "Difícil" } as const;
const originLabels = {
  PND_2025_OFICIAL: "PND 2025 (oficial)",
  ENADE_LICENCIATURAS_2025_OFICIAL: "Enade Licenciaturas 2025 (oficial)",
  ENADE_PEDAGOGIA_HISTORICO_REFERENCIA: "Enade Pedagogia (histórico, referência)",
  CONCURSO_PUBLICO_OFICIAL: "Concurso público (oficial)",
  IA_INEDITA: "Inédita — treinamento",
} as const;

export function PracticeSession({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const question = questions[index];
  const isLast = index === questions.length - 1;
  const finished = index >= questions.length;

  const correctCount = useMemo(
    () => Object.values(answers).filter(Boolean).length,
    [answers]
  );

  if (questions.length === 0) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <p className="font-medium">Nenhuma questão encontrada para este filtro.</p>
        <Link href="/questoes" className={cn(buttonVariants(), "mt-4")}>Voltar ao banco de questões</Link>
      </Card>
    );
  }

  if (finished) {
    const total = questions.length;
    const pct = Math.round((correctCount / total) * 100);
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <Trophy className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-lg font-semibold">Sessão concluída</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Você acertou {correctCount} de {total} questões ({pct}%).
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setIndex(0);
              setSelected(null);
              setAnswers({});
            }}
          >
            <RotateCcw className="size-4" />
            Praticar novamente
          </Button>
          <Link href="/dashboard" className={buttonVariants()}>Voltar ao painel</Link>
        </div>
      </Card>
    );
  }

  const correctOption = question.options.find((o) => o.isCorrect);

  function handleSelect(optionId: string) {
    if (selected) return;
    const isCorrect = optionId === correctOption?.id;
    setSelected(optionId);
    setAnswers((prev) => ({ ...prev, [question.id]: isCorrect }));
    recordAttempt({ questionId: question.id, selectedOptionId: optionId, isCorrect });
  }

  function handleNext() {
    setSelected(null);
    setIndex((i) => i + 1);
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <Progress value={((index + (selected ? 1 : 0)) / questions.length) * 100} className="flex-1" />
        <span className="shrink-0 text-xs text-muted-foreground">
          {index + 1}/{questions.length}
        </span>
      </div>

      <Card className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{getTopicLabel(question.topicId)}</Badge>
          <Badge variant="outline">{difficultyLabels[question.difficulty]}</Badge>
          <Badge variant="outline">{originLabels[question.origin]}</Badge>
        </div>

        <p className="text-sm leading-relaxed">{question.statement}</p>

        <div className="mt-5 flex flex-col gap-2">
          {question.options.map((option) => {
            const isSelected = selected === option.id;
            const showCorrect = selected && option.isCorrect;
            const showWrong = selected && isSelected && !option.isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={!!selected}
                className={cn(
                  "flex items-start gap-2.5 rounded-lg border p-3 text-left text-sm transition-colors",
                  !selected && "border-border hover:border-primary/40 hover:bg-accent/40",
                  showCorrect && "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40",
                  showWrong && "border-red-400 bg-red-50 dark:bg-red-950/40",
                  selected && !showCorrect && !showWrong && "border-border opacity-60"
                )}
              >
                {showCorrect && <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />}
                {showWrong && <XCircle className="mt-0.5 size-4 shrink-0 text-red-600" />}
                <span>{option.text}</span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-4 rounded-lg bg-muted p-3 text-sm">
            <p className="font-medium">
              {selected === correctOption?.id ? "Correto." : "Não foi dessa vez."}
            </p>
            {correctOption?.explanation && (
              <p className="mt-1 text-muted-foreground">{correctOption.explanation}</p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
              Competência avaliada: {question.competencyRef}
            </p>
          </div>
        )}

        {selected && (
          <Button className="mt-4 w-full" onClick={handleNext}>
            {isLast ? "Ver resultado" : "Próxima questão"}
            <ArrowRight className="size-4" />
          </Button>
        )}
      </Card>
    </div>
  );
}
