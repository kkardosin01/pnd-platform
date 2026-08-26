import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { PerformanceChart } from "@/components/performance-chart";
import { cn } from "@/lib/utils";
import { getCurrentUserProfile } from "@/lib/user";
import { subjects } from "@/lib/data/subjects";
import { getUserProgressMap, getOverallStats, getPriorityTopics, getSubjectStats } from "@/lib/progress-data";
import { getDaysUntilExam, statusBadgeClasses, statusLabels, subjectColorClasses } from "@/lib/progress";
import { ArrowRight, Flame, Target, TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const [user, progressMap] = await Promise.all([getCurrentUserProfile(), getUserProgressMap()]);
  const daysLeft = getDaysUntilExam(user.examDate);
  const overall = getOverallStats(progressMap);
  const priorityTopics = getPriorityTopics(progressMap, 4);

  const chartData = subjects.map((s) => ({
    name: s.name.length > 18 ? s.name.slice(0, 16) + "…" : s.name,
    accuracy: Math.round(getSubjectStats(progressMap, s.id).avgAccuracy * 100),
  }));

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Painel de estudos</h1>
        <p className="text-sm text-muted-foreground">
          Seu plano de hoje, priorizado pelo que mais impacta seu desempenho na PND.
        </p>
      </div>

      {/* Cards de estatística rápida */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-violet-100 text-primary dark:bg-violet-950">
              <Flame className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold leading-none">{daysLeft}</p>
              <p className="text-xs text-muted-foreground">dias até a prova</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
              <Target className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold leading-none">
                {Math.round(overall.percentComplete * 100)}%
              </p>
              <p className="text-xs text-muted-foreground">
                {overall.counts.dominado} de {overall.totalTopics} tópicos dominados
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 pt-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <TrendingUp className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold leading-none">
                {Math.round(overall.avgAccuracy * 100)}%
              </p>
              <p className="text-xs text-muted-foreground">taxa de acerto média</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* O que estudar hoje */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>O que estudar hoje</CardTitle>
            <CardDescription>
              Priorizado por tópicos marcados para revisão e áreas com menor taxa de acerto.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {priorityTopics.map(({ topic, subject, progress }) => {
              const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;
              return (
                <Link
                  key={topic.id}
                  href={`/estudar/${subject.id}/${topic.id}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border p-3 transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                      <DynamicIcon name={subject.icon} className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{topic.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{subject.name}</p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Badge className={statusBadgeClasses[progress.status]}>
                      {statusLabels[progress.status]}
                    </Badge>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
            <Link
              href="/mapa"
              className={cn(buttonVariants({ variant: "ghost" }), "mt-1 justify-start px-3")}
            >
              Ver mapa completo da PND <ArrowRight className="size-3.5" />
            </Link>
          </CardContent>
        </Card>

        {/* Desempenho por matéria */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Desempenho por matéria</CardTitle>
            <CardDescription>Taxa de acerto nas questões respondidas.</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceChart data={chartData} />
          </CardContent>
        </Card>
      </div>

      {/* Atalhos */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="flex flex-row items-center justify-between p-5">
          <div>
            <p className="font-medium">Praticar questões inteligentes</p>
            <p className="text-sm text-muted-foreground">
              Recomendadas com base nos seus erros e pontos fracos.
            </p>
          </div>
          <Link href="/questoes/praticar?modo=inteligente" className={buttonVariants()}>Praticar</Link>
        </Card>
        <Card className="flex flex-row items-center justify-between p-5">
          <div>
            <p className="font-medium">Fazer um simulado</p>
            <p className="text-sm text-muted-foreground">
              Treine no formato e no tempo da prova oficial.
            </p>
          </div>
          <Link href="/simulados" className={buttonVariants({ variant: "secondary" })}>Ver simulados</Link>
        </Card>
      </div>
    </div>
  );
}
