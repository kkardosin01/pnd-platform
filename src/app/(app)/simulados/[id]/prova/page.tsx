import { SimuladoRunner } from "@/components/simulado-runner";
import { getSimulation } from "@/lib/simulation-actions";

export default async function ProvaPage(props: PageProps<"/simulados/[id]/prova">) {
  const { id } = await props.params;
  const simulation = await getSimulation(id);
  return <SimuladoRunner simulation={simulation} />;
}
