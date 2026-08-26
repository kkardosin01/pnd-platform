"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Question } from "@/lib/types";
import { getTopicLabel } from "@/lib/data/subjects";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { RotateCcw, ThumbsDown, ThumbsUp, Trophy, HelpCircle } from "lucide-react";

export function FlashcardDeck({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const cards = useMemo(() => questions, [questions]);
  const finished = index >= cards.length;

  const knewCount = Object.values(results).filter(Boolean).length;

  if (cards.length === 0) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <p className="font-medium">Nenhuma questão encontrada para este filtro.</p>
        <Link href="/flashcards" className={cn(buttonVariants(), "mt-4")}>Voltar aos flashcards</Link>
      </Card>
    );
  }

  if (finished) {
    const total = cards.length;
    const pct = Math.round((knewCount / total) * 100);
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <Trophy className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-lg font-semibold">Baralho concluído</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Você sabia {knewCount} de {total} cartas ({pct}%).
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              setIndex(0);
              setRevealed(false);
              setResults({});
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

  const question = cards[index];
  const correctOption = question.options.find((o) => o.isCorrect);

  function handleAnswer(knew: boolean) {
    setResults((prev) => ({ ...prev, [question.id]: knew }));
    setRevealed(false);
    setIndex((i) => i + 1);
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4">
      <div className="flex items-center gap-3">
        <Progress value={(index / cards.length) * 100} className="flex-1" />
        <span className="shrink-0 text-xs text-muted-foreground">
          {index + 1}/{cards.length}
        </span>
      </div>

      <Card
        className={cn(
          "flex min-h-64 flex-col justify-center gap-4 p-6 text-center transition-colors",
          revealed && "bg-accent/40"
        )}
      >
        <Badge variant="outline" className="mx-auto">{getTopicLabel(question.topicId)}</Badge>

        {!revealed ? (
          <p className="text-sm leading-relaxed">{question.statement}</p>
        ) : (
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-medium">{correctOption?.text}</p>
            {correctOption?.explanation && (
              <p className="text-muted-foreground">{correctOption.explanation}</p>
            )}
          </div>
        )}

        {!revealed && (
          <Button variant="outline" className="mx-auto" onClick={() => setRevealed(true)}>
            <HelpCircle className="size-4" />
            Ver resposta
          </Button>
        )}
      </Card>

      {revealed && (
        <div className="flex justify-center gap-3">
          <Button variant="outline" onClick={() => handleAnswer(false)}>
            <ThumbsDown className="size-4" />
            Não sabia
          </Button>
          <Button onClick={() => handleAnswer(true)}>
            <ThumbsUp className="size-4" />
            Sabia
          </Button>
        </div>
      )}
    </div>
  );
}
