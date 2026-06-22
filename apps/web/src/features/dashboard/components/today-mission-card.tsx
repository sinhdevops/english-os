import type { TodayMission } from "@english-os/types";
import { CheckCircle2, Circle, BookOpen, Mic, Headphones, PenLine, RotateCcw } from "lucide-react";

const MISSION_ICONS: Record<TodayMission["type"], React.ComponentType<{ className?: string }>> = {
  vocabulary: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenLine,
  review: RotateCcw,
};

type Props = { missions: TodayMission[] };

export function TodayMissionCard({ missions }: Props) {
  const completed = missions.filter((m) => m.isCompleted).length;

  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-brand-text">Nhiệm vụ hôm nay</h2>
        <span className="text-xs text-brand-muted">{completed}/{missions.length} hoàn thành</span>
      </div>
      <div className="space-y-3">
        {missions.map((mission) => {
          const Icon = MISSION_ICONS[mission.type];
          return (
            <div key={mission.id} className="flex items-center gap-3">
              {mission.isCompleted
                ? <CheckCircle2 className="size-5 text-green-400 shrink-0" />
                : <Circle className="size-5 text-brand-muted shrink-0" />
              }
              <Icon className="size-4 text-brand-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${mission.isCompleted ? "text-brand-muted line-through" : "text-brand-text"}`}>
                  {mission.title}
                </p>
                <p className="text-xs text-brand-muted truncate">{mission.description}</p>
              </div>
              <span className="text-xs text-brand-muted shrink-0">{mission.estimatedMinutes}m</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
