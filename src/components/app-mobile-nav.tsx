"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/nav-items";
import { DynamicIcon } from "@/components/dynamic-icon";
import { cn } from "@/lib/utils";

export function AppMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur md:hidden">
      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
              active ? "text-primary" : "text-muted-foreground"
            )}
          >
            <DynamicIcon name={item.icon} className="size-5" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
