"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LoginModal } from "@/features/auth/components/login-modal";

const links = [
  { href: "/roadmap", label: "Lộ trình" },
  { href: "/#skills", label: "Kỹ năng" },
  { href: "/topics", label: "Từ vựng" },
  { href: "/practice/writing", label: "Mock Test" },
  { href: "/pricing", label: "Gói học" },
];

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Lên Trình" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-2.png"
            alt="Lên Trình"
            width={148}
            height={46}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-extrabold text-[#0F172A] transition-colors hover:text-[#2563EB]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LoginModal>
            <Button type="button" variant="ghost" size="sm" className="rounded-xl px-4 font-extrabold text-[#0F172A] hover:bg-blue-50 hover:text-[#2563EB]">
              Đăng nhập
            </Button>
          </LoginModal>
          <Button asChild size="sm" className="h-10 rounded-xl bg-[#2563EB] px-5 font-extrabold shadow-[0_8px_22px_rgba(37,99,235,0.22)] hover:bg-[#1D4ED8] hover:shadow-[0_12px_28px_rgba(37,99,235,0.3)]">
            <Link href="/register">Học miễn phí</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] md:hidden"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#E2E8F0] bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-2">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="rounded-xl px-3 py-3 text-sm font-extrabold text-[#0F172A] hover:bg-blue-50" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <LoginModal>
                <Button type="button" variant="outline" className="h-11 rounded-xl border-[#E2E8F0] font-extrabold" onClick={() => setOpen(false)}>
                  Đăng nhập
                </Button>
              </LoginModal>
              <Button asChild className="h-11 rounded-xl bg-[#2563EB] font-extrabold hover:bg-[#1D4ED8]">
                <Link href="/register" onClick={() => setOpen(false)}>Học miễn phí</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
