import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StartSimulationButton } from "@/components/start-simulation-button";
import { simulationConfig } from "@/lib/simulation";
import { questions } from "@/lib/data/questions";
import { SimulationType } from "@/lib/types";

const order: SimulationType[] = ["mini", "rapido", "medio", "personalizado", "inteligente", "completo"];

export default function SimuladosPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Simulados</h1>
        <p className="text-sm text-muted-foreground">
          Treine no modo prova: sem correção imediata, com tempo cronometrado por questão.
        </p>
      </div>

      <div className="rounded-lg border border-border bg-secondary/40 p-3 text-xs text-muted-foreground">
        O banco de questões atual tem {questions.length} itens (todos rotulados{" "}
        <strong>IA_INEDITA</strong>). Os simulados abaixo usam amostras desse banco — a contagem
        oficial da PND (81 itens objetivos + 1 discursiva) será refletida assim que os cadernos
        oficiais forem incorporados.
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {order.map((type) => {
          const config = simulationConfig[type];
          const count = Math.min(config.questionCount, questions.length);
          return (
            <Card key={type}>
              <CardHeader>
                <CardTitle className="text-base">{config.label}</CardTitle>
                <CardDescription>{config.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{count} questões</span>
                <StartSimulationButton type={type} />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
