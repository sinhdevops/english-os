"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, LayoutDashboard, Mic, RotateCcw, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_NAV_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Hôm nay" },
  { href: "/topics", icon: BookOpen, label: "Bài học" },
  { href: "/practice/speaking", icon: Mic, label: "Nói" },
  { href: "/review", icon: RotateCcw, label: "Ôn tập" },
  { href: "/progress", icon: TrendingUp, label: "Tiến độ" },
];

export function StudentMobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 flex h-16 items-center justify-around rounded-[24px] border border-[#E2E8F0] bg-white/95 px-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden">
      {MOBILE_NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link key={item.href} href={item.href} className="flex h-full flex-1 flex-col items-center justify-center gap-1 text-center">
            <span className={cn("grid size-8 place-items-center rounded-2xl transition-all", isActive ? "bg-[#2563EB] text-white shadow-[0_8px_18px_rgba(37,99,235,0.24)]" : "text-[#94A3B8]")}>
              <item.icon className="size-4" />
            </span>
            <span className={cn("text-[11px] font-extrabold", isActive ? "text-[#2563EB]" : "text-[#64748B]")}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
