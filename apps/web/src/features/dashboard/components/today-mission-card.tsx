import type { TodayMission } from "@english-os/types";
import { BookOpen, CheckCircle2, Circle, Headphones, Mic, PenLine, RotateCcw } from "lucide-react";

const MISSION_ICONS: Record<TodayMission["type"], React.ComponentType<{ className?: string }>> = {
  vocabulary: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenLine,
  review: RotateCcw,
};

const MISSION_COLORS: Record<TodayMission["type"], string> = {
  vocabulary: "#10B981",
  listening: "#2563EB",
  speaking: "#06B6D4",
  writing: "#8B5CF6",
  review: "#F59E0B",
};

type Props = { missions: TodayMission[] };

export function TodayMissionCard({ missions }: Props) {
  const completed = missions.filter((mission) => mission.isCompleted).length;
  const percent = Math.round((completed / Math.max(1, missions.length)) * 100);

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-[#0F172A]">Nhiệm vụ hôm nay</h2>
          <p className="mt-1 text-sm font-medium text-[#64748B]">Các bước nhỏ để duy trì tiến bộ.</p>
        </div>
        <div className="rounded-2xl bg-blue-50 px-3 py-2 text-right">
          <p className="text-lg font-black text-[#2563EB]">{completed}/{missions.length}</p>
          <p className="text-[11px] font-bold text-[#64748B]">hoàn thành</p>
        </div>
      </div>

      <div className="mb-5 h-2 rounded-full bg-[#E2E8F0]">
        <div className="h-full rounded-full bg-[#2563EB] transition-all duration-700" style={{ width: `${percent}%` }} />
      </div>

      <div className="space-y-3">
        {missions.map((mission) => {
          const Icon = MISSION_ICONS[mission.type];
          const color = MISSION_COLORS[mission.type];
          return (
            <div key={mission.id} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white" style={{ color }}>
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`truncate text-sm font-black ${mission.isCompleted ? "text-[#94A3B8] line-through" : "text-[#0F172A]"}`}>{mission.title}</p>
                <p className="truncate text-xs font-medium text-[#64748B]">{mission.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden text-xs font-bold text-[#64748B] sm:inline">{mission.estimatedMinutes} phút</span>
                {mission.isCompleted ? <CheckCircle2 className="size-5 text-[#10B981]" /> : <Circle className="size-5 text-[#CBD5E1]" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
