"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function MarketingNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-foreground">
          <div className="size-6.5 rounded bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-black text-xs">
            E
          </div>
          <span>English <span className="text-primary font-black">OS</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/roadmap" className="hover:text-foreground transition-colors font-medium">Lộ trình</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors font-medium">Gói học</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="rounded-xl font-medium">
            <Link href="/login">Đăng nhập</Link>
          </Button>
          <Button asChild size="sm" className="rounded-xl font-semibold shadow-sm hover:shadow transition-all duration-200">
            <Link href="/register">Bắt đầu</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
