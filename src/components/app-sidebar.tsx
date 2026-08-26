"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/nav-items";
import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-3 py-5 md:flex">
      <Link href="/dashboard" className="mb-8 flex items-center gap-2 px-2">
        <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap className="size-4.5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold">Prep PND</p>
          <p className="text-[11px] text-muted-foreground">Pedagogia</p>
        </div>
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <DynamicIcon name={item.icon} className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
