"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SimulationType } from "@/lib/types";
import { startSimulation } from "@/lib/simulation-actions";
import { PlayCircle } from "lucide-react";

export function StartSimulationButton({ type }: { type: SimulationType }) {
  const router = useRouter();

  async function handleStart() {
    const id = await startSimulation(type);
    if (id) router.push(`/simulados/${id}/prova`);
  }

  return (
    <Button onClick={handleStart}>
      <PlayCircle className="size-4" />
      Iniciar
    </Button>
  );
}
