import { FlashcardDeck } from "@/components/flashcard-deck";
import { buildPracticeQueue } from "@/lib/practice";

export default async function FlashcardsPraticarPage(props: PageProps<"/flashcards/praticar">) {
  const searchParams = await props.searchParams;

  const topico = typeof searchParams.topico === "string" ? searchParams.topico : undefined;
  const materia = typeof searchParams.materia === "string" ? searchParams.materia : undefined;

  const queue = await buildPracticeQueue({ topico, materia });

  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-xl font-semibold tracking-tight">Baralho de flashcards</h1>
        <p className="text-sm text-muted-foreground">
          Tente responder de cabeça antes de virar a carta.
        </p>
      </div>
      <FlashcardDeck questions={queue} />
    </div>
  );
}
