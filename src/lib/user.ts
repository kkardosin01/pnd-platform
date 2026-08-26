import { createClient } from "@/lib/supabase/server";
import { UserProfile } from "@/lib/types";

/**
 * Perfil do usuário autenticado, lido da tabela `profiles` no Supabase.
 * A rota já é protegida pelo proxy (ver src/proxy.ts), então em condições
 * normais sempre há um usuário autenticado aqui.
 */
export async function getCurrentUserProfile(): Promise<UserProfile> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { id: "", name: "Estudante", examDate: "", weeklyAvailabilityHours: 10, semester: 1 };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, exam_date, weekly_availability_hours, semester")
    .eq("id", user.id)
    .single();

  return {
    id: user.id,
    name: profile?.name ?? "Estudante",
    examDate: profile?.exam_date ?? "",
    weeklyAvailabilityHours: profile?.weekly_availability_hours ?? 10,
    semester: profile?.semester ?? 1,
  };
}
