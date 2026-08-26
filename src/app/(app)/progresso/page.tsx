import { subjects } from "@/lib/data/subjects";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DynamicIcon } from "@/components/dynamic-icon";
import { getUserProgressMap, getOverallStats, getSubjectStats } from "@/lib/progress-data";
import { statusLabels, subjectColorClasses } from "@/lib/progress";
import { TopicStatus } from "@/lib/types";

const areaLabels = {
  formacao_geral: "Formação Geral Docente",
  pedagogia_especifico: "Componente Específico de Pedagogia",
} as const;

const statusOrder: TopicStatus[] = ["dominado", "em_andamento", "revisar", "nao_iniciado"];

export default async function ProgressoPage() {
  const progressMap = await getUserProgressMap();
  const overall = getOverallStats(progressMap);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Progresso e estatísticas</h1>
        <p className="text-sm text-muted-foreground">
          Sua evolução em relação aos 44 objetos de conhecimento oficiais da PND.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {statusOrder.map((status) => (
          <Card key={status} className="p-4 text-center">
            <p className="text-2xl font-semibold">{overall.counts[status]}</p>
            <p className="text-xs text-muted-foreground">{statusLabels[status]}</p>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Progresso geral</CardTitle>
          <CardDescription>
            {overall.counts.dominado} de {overall.totalTopics} tópicos dominados · acerto médio de{" "}
            {Math.round(overall.avgAccuracy * 100)}%
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={overall.percentComplete * 100} />
        </CardContent>
      </Card>

      {(["formacao_geral", "pedagogia_especifico"] as const).map((area) => (
        <div key={area} className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {areaLabels[area]}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {subjects
              .filter((s) => s.area === area)
              .map((subject) => {
                const stats = getSubjectStats(progressMap, subject.id);
                const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;
                return (
                  <Card key={subject.id} className="p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <span className={`flex size-8 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                        <DynamicIcon name={subject.icon} className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{subject.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {stats.dominado}/{stats.total} dominados · {Math.round(stats.avgAccuracy * 100)}% de acerto
                        </p>
                      </div>
                    </div>
                    <Progress value={stats.percentComplete * 100} />
                  </Card>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
