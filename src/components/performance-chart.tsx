"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function PerformanceChart({
  data,
}: {
  data: { name: string; accuracy: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 11 }}
          interval={0}
          angle={-25}
          textAnchor="end"
          height={60}
        />
        <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
        <Tooltip
          formatter={(value) => [`${value}%`, "Acerto"]}
          contentStyle={{ borderRadius: 8, fontSize: 12, border: "1px solid var(--border)" }}
        />
        <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} fill="var(--color-chart-1)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
