import type { ProfileData, StreakData } from "@english-os/types";
import { Flame } from "lucide-react";

type Props = { profile: ProfileData; streak: StreakData };

export function DashboardHeader({ profile, streak }: Props) {
  const firstName = profile.displayName?.split(" ")[0] ?? "bạn";

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-brand-text">
          Chào buổi sáng, {firstName} 👋
        </h1>
        <p className="text-brand-muted text-sm mt-1">
          Hôm nay bạn sẽ học gì?
        </p>
      </div>
      {streak.currentStreak > 0 && (
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-brand-card px-4 py-2">
          <Flame className="size-5 text-orange-400" />
          <span className="text-brand-text font-semibold">{streak.currentStreak} ngày</span>
        </div>
      )}
    </div>
  );
}
