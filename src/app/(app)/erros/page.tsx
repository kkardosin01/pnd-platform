import { ErrorNotebook } from "@/components/error-notebook";
import { getLatestAttemptsByQuestion } from "@/lib/attempts";

export default async function ErrosPage() {
  const attempts = await getLatestAttemptsByQuestion();

  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight">Caderno de erros</h1>
        <p className="text-sm text-muted-foreground">
          Questões que você errou na última tentativa, agrupadas por matéria.
        </p>
      </div>
      <ErrorNotebook attempts={attempts} />
    </div>
  );
}
