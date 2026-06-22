import type { LevelData } from "@english-os/types";
import { Trophy } from "lucide-react";

type Props = { level: LevelData };

export function CurrentLevelCard({ level }: Props) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex size-10 items-center justify-center rounded-xl bg-brand-gold/10">
          <Trophy className="size-5 text-brand-gold" />
        </div>
        <div>
          <p className="text-xs text-brand-muted">Trình độ hiện tại</p>
          <p className="font-bold text-brand-text">{level.name}</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-brand-muted">Tiến độ lên level tiếp</span>
          <span className="text-brand-primary">{level.progressToNext}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-brand-primary transition-all duration-700"
            style={{ width: `${level.progressToNext}%` }}
          />
        </div>
      </div>
    </div>
  );
}
