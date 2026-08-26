"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "@/lib/data/questions";
import { submitSimulation, SimulationRunData } from "@/lib/simulation-actions";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Clock, Flag } from "lucide-react";

export function SimuladoRunner({ simulation }: { simulation: SimulationRunData | null }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState<number | null>(simulation?.durationSeconds ?? null);
  const [submitting, setSubmitting] = useState(false);
  const answersRef = useRef(answers);
  answersRef.current = answers;

  const simQuestions = useMemo(
    () =>
      simulation
        ? simulation.questionIds.map((qid) => questions.find((q) => q.id === qid)!).filter(Boolean)
        : [],
    [simulation]
  );

  useEffect(() => {
    if (!simulation || simQuestions.length === 0 || secondsLeft === null) return;
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s === null || s <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simulation, simQuestions.length]);

  async function handleSubmit() {
    if (!simulation || submitting) return;
    setSubmitting(true);
    await submitSimulation(simulation.id, answersRef.current);
    router.push(`/simulados/${simulation.id}/relatorio`);
  }

  if (!simulation || simQuestions.length === 0) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <p className="font-medium">Simulado não encontrado.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Ele pode ter expirado ou o link está incorreto.
        </p>
        <Link href="/simulados" className={cn(buttonVariants(), "mt-4")}>Voltar aos simulados</Link>
      </Card>
    );
  }

  const question = simQuestions[index];
  const minutes = Math.floor((secondsLeft ?? 0) / 60);
  const seconds = String((secondsLeft ?? 0) % 60).padStart(2, "0");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">
          Questão {index + 1} de {simQuestions.length}
        </p>
        <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium tabular-nums">
          <Clock className="size-3.5" />
          {minutes}:{seconds}
        </div>
      </div>

      {/* Navegação por bolinhas */}
      <div className="flex flex-wrap gap-1.5">
        {simQuestions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setIndex(i)}
            className={cn(
              "flex size-7 items-center justify-center rounded-md border text-xs font-medium",
              i === index && "border-primary bg-primary text-primary-foreground",
              i !== index && answers[q.id] && "border-emerald-300 bg-emerald-50 text-emerald-700 dark:bg-emerald-950",
              i !== index && !answers[q.id] && "border-border text-muted-foreground"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Card className="p-6">
        <p className="text-sm leading-relaxed">{question.statement}</p>

        <div className="mt-5 flex flex-col gap-2">
          {question.options.map((option) => {
            const isSelected = answers[question.id] === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: option.id }))}
                className={cn(
                  "rounded-lg border p-3 text-left text-sm transition-colors",
                  isSelected
                    ? "border-primary bg-accent/60"
                    : "border-border hover:border-primary/40 hover:bg-accent/30"
                )}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          Anterior
        </Button>
        {index < simQuestions.length - 1 ? (
          <Button onClick={() => setIndex((i) => i + 1)}>Próxima</Button>
        ) : (
          <Button onClick={handleSubmit} disabled={submitting}>
            <Flag className="size-4" />
            Finalizar simulado
          </Button>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {Object.keys(answers).length} de {simQuestions.length} questões respondidas
      </p>
    </div>
  );
}
