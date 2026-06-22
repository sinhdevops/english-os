"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Mic,
  RotateCcw,
  Map,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_NAV_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Home" },
  { href: "/topics", icon: BookOpen, label: "Học tập" },
  { href: "/learning-path", icon: Map, label: "Lộ trình" },
  { href: "/practice/speaking", icon: Mic, label: "Luyện Nói" },
  { href: "/review", icon: RotateCcw, label: "Ôn tập" },
];

export function StudentMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 h-16 md:hidden border-t border-border/40 bg-background/85 backdrop-blur-lg flex items-center justify-around px-4 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.05)] transition-all duration-300">
      {MOBILE_NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex flex-col items-center justify-center flex-1 h-full py-1 text-center group"
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-xl p-1.5 transition-all duration-200",
                isActive
                  ? "bg-primary/10 text-primary scale-110"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="size-5" />
            </div>
            <span
              className={cn(
                "text-[10px] mt-0.5 transition-colors duration-200",
                isActive ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </span>
            {isActive && (
              <span className="absolute bottom-1.5 size-1 rounded-full bg-primary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
