import { getCurrentUserProfile } from "@/lib/user";
import { getDaysUntilExam } from "@/lib/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CalendarClock } from "lucide-react";

export async function AppHeader() {
  const user = await getCurrentUserProfile();
  const daysLeft = getDaysUntilExam(user.examDate);
  const examDateLabel = user.examDate
    ? new Date(user.examDate + "T00:00:00").toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur md:px-6">
      <div>
        <p className="text-sm text-muted-foreground">Olá, {user.name} 👋</p>
        <p className="text-xs text-muted-foreground/70">{user.semester}º semestre de Pedagogia</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 sm:flex">
          <CalendarClock className="size-3.5 text-primary" />
          <span className="text-xs font-medium">
            {daysLeft > 0 ? (
              <>
                <span className="font-semibold text-primary">{daysLeft} dias</span> até a PND
              </>
            ) : (
              "PND é hoje!"
            )}
          </span>
          {examDateLabel && (
            <span className="hidden text-[11px] text-muted-foreground lg:inline">· {examDateLabel}</span>
          )}
        </div>

        <Avatar>
          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
