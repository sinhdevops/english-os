"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Headphones,
  LayoutDashboard,
  Mic,
  PenLine,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Tổng quan", desc: "Việc cần học hôm nay" },
  { href: "/topics", icon: BookOpen, label: "Chủ đề học", desc: "Bài học theo level" },
  { href: "/practice/speaking", icon: Mic, label: "Speaking Room", desc: "Ghi âm và phản xạ" },
  { href: "/practice/writing", icon: PenLine, label: "Writing Lab", desc: "Luyện viết có gợi ý" },
  { href: "/review", icon: RotateCcw, label: "Ôn tập SRS", desc: "Từ sắp quên" },
  { href: "/progress", icon: TrendingUp, label: "Tiến độ", desc: "Điểm mạnh/yếu" },
];

const quickStats = [
  { icon: Target, label: "IELTS 7.0", value: "Mục tiêu" },
  { icon: Headphones, label: "4 kỹ năng", value: "Song song" },
  { icon: BarChart3, label: "15 phút", value: "Mỗi ngày" },
];

export function StudentSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col border-r border-[#E2E8F0] bg-white px-5 py-6 shadow-[8px_0_30px_rgba(15,23,42,0.03)]">
      <Link href="/dashboard" className="mb-7 flex items-center">
        <Image src="/images/logo-2.png" alt="Lên Trình" width={156} height={48} className="h-11 w-auto object-contain" priority />
      </Link>

      <div className="mb-5 rounded-[24px] border border-[#DBEAFE] bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        <div className="flex items-center gap-2 text-sm font-black text-[#2563EB]">
          <Sparkles className="size-4 fill-current" />
          Lộ trình hôm nay
        </div>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#334155]">
          Hoàn thành 2 nhiệm vụ nhỏ để giữ streak và mở khóa bài tiếp theo.
        </p>
        <Link href="/dashboard" className="mt-4 inline-flex rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)]">
          Vào học ngay
        </Link>
      </div>

      <nav className="flex-1 space-y-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all",
                isActive
                  ? "bg-[#2563EB] text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)]"
                  : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]"
              )}
            >
              <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl transition-colors", isActive ? "bg-white/15" : "bg-white text-[#2563EB] ring-1 ring-[#E2E8F0] group-hover:ring-blue-200")}>
                <item.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-black">{item.label}</span>
                <span className={cn("block truncate text-xs font-medium", isActive ? "text-blue-100" : "text-[#94A3B8]")}>{item.desc}</span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-5 grid gap-2">
        {quickStats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <stat.icon className="size-4 text-[#2563EB]" />
            <div>
              <p className="text-sm font-black text-[#0F172A]">{stat.label}</p>
              <p className="text-xs font-semibold text-[#64748B]">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
