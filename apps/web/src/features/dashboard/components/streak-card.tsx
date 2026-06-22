import type { StreakData } from "@english-os/types";
import { Flame, Zap } from "lucide-react";

type Props = { streak: StreakData };

export function StreakCard({ streak }: Props) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="font-semibold text-brand-text mb-4">Streak học tập</h3>
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <Flame className="size-8 text-orange-400" />
          <div>
            <p className="text-2xl font-bold text-brand-text">{streak.currentStreak}</p>
            <p className="text-xs text-brand-muted">ngày liên tiếp</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="size-8 text-brand-gold" />
          <div>
            <p className="text-2xl font-bold text-brand-text">{streak.longestStreak}</p>
            <p className="text-xs text-brand-muted">kỷ lục</p>
          </div>
        </div>
      </div>
    </div>
  );
}
