"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Users, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/topics", icon: BookOpen, label: "Topics" },
  { href: "/admin/lessons", icon: BookMarked, label: "Lessons" },
  { href: "/admin/users", icon: Users, label: "Users" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-52 shrink-0 border-r border-white/5 md:flex flex-col py-6">
      <div className="px-6 mb-8 text-lg font-bold text-brand-text">
        English <span className="text-red-400">Admin</span>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-brand-primary/10 text-brand-primary font-medium"
                  : "text-brand-muted hover:bg-white/5 hover:text-brand-text"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
