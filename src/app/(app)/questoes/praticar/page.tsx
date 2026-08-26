import { PracticeSession } from "@/components/practice-session";
import { buildPracticeQueue } from "@/lib/practice";

export default async function PraticarPage(props: PageProps<"/questoes/praticar">) {
  const searchParams = await props.searchParams;

  const topico = typeof searchParams.topico === "string" ? searchParams.topico : undefined;
  const materia = typeof searchParams.materia === "string" ? searchParams.materia : undefined;
  const modo = typeof searchParams.modo === "string" ? searchParams.modo : undefined;

  const queue = await buildPracticeQueue({ topico, materia, modo });

  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight">Sessão de questões</h1>
        <p className="text-sm text-muted-foreground">
          Responda e receba a correção imediata, com a explicação de cada questão.
        </p>
      </div>
      <PracticeSession questions={queue} />
    </div>
  );
}
