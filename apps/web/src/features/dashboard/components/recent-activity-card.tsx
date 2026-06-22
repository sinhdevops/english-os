import type { RecentActivity } from "@english-os/types";
import { Clock } from "lucide-react";

type Props = { activities: RecentActivity[] };

export function RecentActivityCard({ activities }: Props) {
  if (activities.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-5">
      <h2 className="font-semibold text-brand-text mb-4">Hoạt động gần đây</h2>
      <div className="space-y-3">
        {activities.map((a) => (
          <div key={a.id} className="flex items-center gap-3">
            <Clock className="size-4 text-brand-muted shrink-0" />
            <p className="text-sm text-brand-text flex-1">{a.description}</p>
            {a.score !== null && (
              <span className="text-xs font-medium text-brand-primary">{a.score}đ</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
