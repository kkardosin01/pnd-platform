import { SimuladoRelatorio } from "@/components/simulado-relatorio";
import { getSimulationResult } from "@/lib/simulation-actions";

export default async function RelatorioPage(props: PageProps<"/simulados/[id]/relatorio">) {
  const { id } = await props.params;
  const result = await getSimulationResult(id);
  return <SimuladoRelatorio result={result} />;
}
