import type { ProfileData, StreakData } from "@english-os/types";
import { Flame, Sparkles } from "lucide-react";

type Props = { profile: ProfileData; streak: StreakData };

export function DashboardHeader({ profile, streak }: Props) {
  const firstName = profile.displayName?.split(" ")[0] ?? "bạn";

  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-black text-[#2563EB] shadow-sm">
          <Sparkles className="size-3.5 fill-current" />
          English OS Student
        </div>
        <h1 className="mt-3 text-3xl font-black tracking-normal text-[#0F172A]">
          Chào {firstName}, hôm nay mình lên trình nhé
        </h1>
        <p className="mt-2 text-sm font-medium text-[#64748B]">
          Tập trung vào một vài nhiệm vụ nhỏ, hệ thống sẽ tự theo dõi tiến độ cho bạn.
        </p>
      </div>
      {streak.currentStreak > 0 ? (
        <div className="inline-flex w-fit items-center gap-3 rounded-[20px] border border-orange-100 bg-white px-4 py-3 shadow-sm">
          <span className="grid size-11 place-items-center rounded-2xl bg-orange-50">
            <Flame className="size-6 fill-[#F59E0B] text-[#F59E0B]" />
          </span>
          <div>
            <p className="text-xl font-black text-[#0F172A]">{streak.currentStreak} ngày</p>
            <p className="text-xs font-bold text-[#64748B]">streak hiện tại</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
