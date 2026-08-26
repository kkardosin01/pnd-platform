import Link from "next/link";
import { notFound } from "next/navigation";
import { subjects, topics } from "@/lib/data/subjects";
import { knowledgeObjects } from "@/lib/data/knowledge-objects";
import { getMaterialsByTopic } from "@/lib/data/materials";
import { getQuestionsByTopic } from "@/lib/data/questions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";
import { getUserProgressMap, getTopicProgress } from "@/lib/progress-data";
import { statusBadgeClasses, statusLabels, subjectColorClasses } from "@/lib/progress";
import { ChevronRight, ExternalLink, FileText, PlayCircle, Video, BookMarked } from "lucide-react";

const materialIcons = { pdf: FileText, video: Video, article: ExternalLink, book: BookMarked } as const;

export default async function EstudarTopicoPage(
  props: PageProps<"/estudar/[materia]/[topico]">
) {
  const { materia, topico } = await props.params;

  const subject = subjects.find((s) => s.id === materia);
  const topic = topics.find((t) => t.id === topico && t.subjectId === materia);
  if (!subject || !topic) notFound();

  const knowledgeObject = knowledgeObjects.find((k) => k.id === topic.knowledgeObjectId);
  const material = getMaterialsByTopic(topic.id);
  const questions = getQuestionsByTopic(topic.id);
  const progressMap = await getUserProgressMap();
  const progress = getTopicProgress(progressMap, topic.id);
  const status = progress?.status ?? "nao_iniciado";
  const colors = subjectColorClasses[subject.color] ?? subjectColorClasses.slate;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/mapa" className="hover:text-foreground">Mapa da PND</Link>
        <ChevronRight className="size-3.5" />
        <span>{subject.name}</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
            <DynamicIcon name={subject.icon} className="size-5" />
          </span>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{topic.name}</h1>
            <p className="text-sm text-muted-foreground">{subject.name}</p>
          </div>
        </div>
        <Badge className={statusBadgeClasses[status]}>{statusLabels[status]}</Badge>
      </div>

      {/* Objeto de conhecimento oficial */}
      {knowledgeObject && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Objeto de conhecimento oficial</CardTitle>
            <CardDescription>
              Código {knowledgeObject.officialCode} — {knowledgeObject.sourcePortaria}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{knowledgeObject.title}</p>
          </CardContent>
        </Card>
      )}

      {/* Materiais de estudo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Materiais de estudo</CardTitle>
          <CardDescription>Fontes oficiais verificadas — legislação, MEC/CNE e Inep.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {material.length > 0 ? (
            material.map((m) => {
              const Icon = materialIcons[m.type];
              return (
                <a
                  key={m.id}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-border p-3 text-sm transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <Icon className="size-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{m.title}</span>
                      <span className="block text-xs text-muted-foreground">{m.sourceLabel}</span>
                    </span>
                  </span>
                  <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" />
                </a>
              );
            })
          ) : (
            <p className="text-sm text-muted-foreground">
              Ainda não há material específico cadastrado para este tópico. Consulte a{" "}
              <a
                href="https://anec.org.br/wp-content/uploads/2025/05/Matrizes-de-Referencia-para-o-ENADE-das-Licenciaturas-e-Prova-Nacional-Docente-PND-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2"
              >
                matriz oficial de referência (Portarias Inep 315 e 331/2025)
              </a>
              .
            </p>
          )}
        </CardContent>
      </Card>

      {/* Praticar */}
      <Card className="flex flex-row items-center justify-between p-5">
        <div>
          <p className="font-medium">Praticar questões deste tópico</p>
          <p className="text-sm text-muted-foreground">
            {questions.length} questão{questions.length !== 1 ? "ões" : ""} disponíve
            {questions.length !== 1 ? "is" : "l"} no banco.
          </p>
        </div>
        {questions.length === 0 ? (
          <span className={cn(buttonVariants(), "pointer-events-none opacity-50")} aria-disabled="true">
            <PlayCircle className="size-4" />
            Praticar
          </span>
        ) : (
          <Link href={`/questoes/praticar?topico=${topic.id}`} className={buttonVariants()}>
            <PlayCircle className="size-4" />
            Praticar
          </Link>
        )}
      </Card>
    </div>
  );
}
