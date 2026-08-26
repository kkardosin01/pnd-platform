import Link from "next/link";
import { subjects, getTopicsBySubject } from "@/lib/data/subjects";
import { DynamicIcon } from "@/components/dynamic-icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getUserProgressMap, getTopicProgress } from "@/lib/progress-data";
import { statusBadgeClasses, statusLabels, subjectColorClasses } from "@/lib/progress";
import { CheckCircle2 } from "lucide-react";

const areaLabels = {
  formacao_geral: "Formação Geral Docente",
  pedagogia_especifico: "Componente Específico de Pedagogia",
} as const;

export default async function MapaPage() {
  const progressMap = await getUserProgressMap();
  const areas: (keyof typeof areaLabels)[] = ["formacao_geral", "pedagogia_especifico"];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Mapa da PND</h1>
        <p className="text-sm text-muted-foreground">
          Todos os 44 objetos de conhecimento das Portarias Inep nº 315/2025 e nº 331/2025,
          organizados por matéria. Clique em um tópico para estudar.
        </p>
      </div>

      {areas.map((area) => (
        <section key={area} className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {areaLabels[area]}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {subjects
              .filter((s) => s.area === area)
              .map((subject) => {
                const subjectTopics = getTopicsBySubject(subject.id);
                const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;
                const masteredCount = subjectTopics.filter(
                  (t) => getTopicProgress(progressMap, t.id)?.status === "dominado"
                ).length;

                return (
                  <Card key={subject.id} className="p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`flex size-9 items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                          <DynamicIcon name={subject.icon} className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{subject.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {subjectTopics.length} tópicos
                          </p>
                        </div>
                      </div>
                      {masteredCount > 0 && (
                        <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="size-3.5" />
                          {masteredCount}/{subjectTopics.length}
                        </span>
                      )}
                    </div>

                    <ul className="flex flex-col gap-1.5">
                      {subjectTopics.map((topic) => {
                        const progress = getTopicProgress(progressMap, topic.id);
                        const status = progress?.status ?? "nao_iniciado";
                        return (
                          <li key={topic.id}>
                            <Link
                              href={`/estudar/${subject.id}/${topic.id}`}
                              className="flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-accent/50"
                            >
                              <span className="min-w-0 flex-1 truncate">{topic.name}</span>
                              <Badge className={`shrink-0 text-[10px] ${statusBadgeClasses[status]}`}>
                                {statusLabels[status]}
                              </Badge>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Card>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
