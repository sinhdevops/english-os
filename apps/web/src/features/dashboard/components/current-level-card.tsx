import type { LevelData } from "@english-os/types";
import { Trophy } from "lucide-react";

type Props = { level: LevelData };

export function CurrentLevelCard({ level }: Props) {
  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-[#F59E0B]">
          <Trophy className="size-6" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#64748B]">Trình độ hiện tại</p>
          <p className="text-xl font-black text-[#0F172A]">{level.name}</p>
        </div>
      </div>
      <div className="flex justify-between text-xs font-bold">
        <span className="text-[#64748B]">Tiến độ lên level tiếp theo</span>
        <span className="text-[#2563EB]">{level.progressToNext}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#E2E8F0]">
        <div className="h-full rounded-full bg-[#2563EB] transition-all duration-700" style={{ width: `${level.progressToNext}%` }} />
      </div>
    </div>
  );
}
