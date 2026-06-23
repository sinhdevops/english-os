import type { StreakData } from "@english-os/types";
import { Flame, Zap } from "lucide-react";

type Props = { streak: StreakData };

export function StreakCard({ streak }: Props) {
  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-black text-[#0F172A]">Streak học tập</h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-orange-50 p-4">
          <Flame className="size-7 fill-[#F59E0B] text-[#F59E0B]" />
          <p className="mt-3 text-3xl font-black text-[#0F172A]">{streak.currentStreak}</p>
          <p className="text-xs font-bold text-[#64748B]">ngày liên tiếp</p>
        </div>
        <div className="rounded-2xl bg-blue-50 p-4">
          <Zap className="size-7 fill-[#2563EB] text-[#2563EB]" />
          <p className="mt-3 text-3xl font-black text-[#0F172A]">{streak.longestStreak}</p>
          <p className="text-xs font-bold text-[#64748B]">kỷ lục</p>
        </div>
      </div>
    </div>
  );
}
