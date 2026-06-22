"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import Link from "next/link";

export function StudentNav() {
  const router = useRouter();

  const signOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/40 bg-background/80 backdrop-blur-md flex items-center justify-between md:justify-end px-6 transition-all duration-300">
      {/* Mobile Logo */}
      <Link href="/dashboard" className="flex md:hidden text-lg font-extrabold text-foreground tracking-tight">
        English <span className="text-primary ml-1">OS</span>
      </Link>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button variant="outline" size="sm" onClick={signOut} className="rounded-xl gap-2 font-medium hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all duration-200">
          <LogOut className="size-4" />
          <span className="hidden sm:inline">Đăng xuất</span>
        </Button>
      </div>
    </header>
  );
}
