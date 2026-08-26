import Link from "next/link";
import { simulationConfig } from "@/lib/simulation";
import { SimulationResultData } from "@/lib/simulation-actions";
import { questions } from "@/lib/data/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export function SimuladoRelatorio({ result }: { result: SimulationResultData | null }) {
  if (!result) {
    return (
      <Card className="mx-auto max-w-lg p-8 text-center">
        <p className="font-medium">Relatório não encontrado.</p>
        <Link href="/simulados" className={cn(buttonVariants(), "mt-4")}>Voltar aos simulados</Link>
      </Card>
    );
  }

  const answeredWrong = Object.entries(result.answers)
    .map(([questionId, optionId]) => {
      const question = questions.find((q) => q.id === questionId);
      const option = question?.options.find((o) => o.id === optionId);
      return { question, option };
    })
    .filter((entry) => entry.question && entry.option && !entry.option.isCorrect);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">{simulationConfig[result.type].label}</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight">{result.scorePercent}%</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {result.correctCount} de {result.totalCount} questões corretas
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Desempenho por tópico</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {Object.entries(result.performanceByTopic).map(([topicId, stats]) => (
            <div key={topicId}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{stats.topicName}</span>
                <span className="text-muted-foreground">
                  {stats.correct}/{stats.total}
                </span>
              </div>
              <Progress value={(stats.correct / stats.total) * 100} />
            </div>
          ))}
        </CardContent>
      </Card>

      {answeredWrong.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revisão dos erros</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {answeredWrong.map(({ question }) => {
              if (!question) return null;
              const correct = question.options.find((o) => o.isCorrect);
              return (
                <div key={question.id} className="rounded-lg border border-border p-3">
                  <p className="flex items-start gap-2 text-sm">
                    <XCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                    {question.statement}
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    {correct?.text}
                  </p>
                  {correct?.explanation && (
                    <p className="mt-1 pl-6 text-xs text-muted-foreground">{correct.explanation}</p>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      <div className="flex justify-center gap-3">
        <Link href="/simulados" className={buttonVariants({ variant: "outline" })}>
          <RotateCcw className="size-4" />
          Fazer outro simulado
        </Link>
        <Link href="/dashboard" className={buttonVariants()}>Voltar ao painel</Link>
      </div>
    </div>
  );
}
