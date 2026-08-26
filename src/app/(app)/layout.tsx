import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { AppMobileNav } from "@/components/app-mobile-nav";
import { DailyLoveNote } from "@/components/daily-love-note";

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <main className="flex-1 px-4 py-6 pb-20 md:px-6 md:pb-6">{children}</main>
      </div>
      <AppMobileNav />
      <DailyLoveNote />
    </div>
  );
}
