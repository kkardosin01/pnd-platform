import Link from "next/link";
import { buildWeeklySchedule } from "@/lib/schedule";
import { getUserProgressMap } from "@/lib/progress-data";
import { getDaysUntilExam, statusBadgeClasses, statusLabels, subjectColorClasses } from "@/lib/progress";
import { getCurrentUserProfile } from "@/lib/user";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock, PlayCircle } from "lucide-react";

export default async function CronogramaPage() {
  const [user, progressMap] = await Promise.all([getCurrentUserProfile(), getUserProgressMap()]);
  const schedule = buildWeeklySchedule(progressMap, user.weeklyAvailabilityHours);
  const daysUntilExam = getDaysUntilExam(user.examDate);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Cronograma inteligente</h1>
        <p className="text-sm text-muted-foreground">
          Plano semanal gerado a partir do seu desempenho, priorizando tópicos a revisar.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="flex items-center gap-3 p-4">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CalendarDays className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">{daysUntilExam} dias até a prova</p>
            <p className="text-xs text-muted-foreground">Prova em {new Date(user.examDate + "T00:00:00").toLocaleDateString("pt-BR")}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3 p-4">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Clock className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold">{user.weeklyAvailabilityHours}h disponíveis por semana</p>
            <p className="text-xs text-muted-foreground">Distribuídas entre os 7 dias abaixo</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {schedule.map(({ day, minutes, topics }) => (
          <Card key={day} className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{day}</p>
              <span className="text-xs text-muted-foreground">{minutes} min</span>
            </div>

            {topics.length === 0 ? (
              <p className="text-xs text-muted-foreground">Sem tópicos prioritários — dia livre ou de revisão geral.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {topics.map(({ topic, subject, progress }) => {
                  const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;
                  return (
                    <div key={topic.id} className="rounded-lg border border-border p-3">
                      <div className="flex items-center gap-2">
                        <span className={cn("flex size-6 items-center justify-center rounded-md", colors.bg, colors.text)}>
                          <DynamicIcon name={subject.icon} className="size-3" />
                        </span>
                        <p className="text-xs font-medium">{subject.name}</p>
                      </div>
                      <p className="mt-1.5 text-sm">{topic.name}</p>
                      {progress && (
                        <Badge className={cn("mt-2", statusBadgeClasses[progress.status])}>
                          {statusLabels[progress.status]}
                        </Badge>
                      )}
                      <Link
                        href={`/questoes/praticar?topico=${topic.id}`}
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-2 w-full")}
                      >
                        <PlayCircle className="size-3.5" />
                        Praticar
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
