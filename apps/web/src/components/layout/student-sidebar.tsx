"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Mic,
  PenLine,
  RotateCcw,
  TrendingUp,
  Map,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/topics", icon: BookOpen, label: "Topics" },
  { href: "/learning-path", icon: Map, label: "Lộ trình" },
  { href: "/practice/speaking", icon: Mic, label: "Speaking" },
  { href: "/practice/writing", icon: PenLine, label: "Writing" },
  { href: "/review", icon: RotateCcw, label: "Ôn tập" },
  { href: "/progress", icon: TrendingUp, label: "Tiến bộ" },
];

export function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border/40 md:flex flex-col py-6 bg-card/30 backdrop-blur-sm transition-colors duration-300">
      <div className="px-6 mb-8">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-foreground">
          <div className="size-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-black text-sm">
            E
          </div>
          <span>English <span className="text-primary font-black">OS</span></span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 relative group",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              <item.icon className={cn("size-4 shrink-0 transition-transform duration-200 group-hover:scale-110", isActive ? "text-primary" : "text-muted-foreground")} />
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute right-0 top-1/4 bottom-1/4 w-1 rounded-l-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
