"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = { current: number; total: number; title: string };

export function LessonProgressBar({ current, total, title }: Props) {
  const router = useRouter();
  const pct = Math.round((current / Math.max(1, total)) * 100);

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button onClick={() => router.back()} className="grid size-10 shrink-0 place-items-center rounded-2xl border border-[#E2E8F0] text-[#64748B] transition-colors hover:text-[#2563EB]" aria-label="Quay lại">
          <ArrowLeft className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-black text-[#0F172A]">{title}</p>
          <p className="text-xs font-semibold text-[#64748B]">Bước {current}/{total}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-black text-[#2563EB]">{pct}%</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-[#E2E8F0]">
        <div className="h-full rounded-full bg-[#2563EB] transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
