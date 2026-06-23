import type { RecentActivity } from "@english-os/types";
import { Clock3, Star } from "lucide-react";

type Props = { activities: RecentActivity[] };

export function RecentActivityCard({ activities }: Props) {
  if (activities.length === 0) return null;

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-black text-[#0F172A]">Hoạt động gần đây</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[#2563EB] ring-1 ring-[#E2E8F0]">
              <Clock3 className="size-4" />
            </div>
            <p className="min-w-0 flex-1 text-sm font-semibold text-[#334155]">{activity.description}</p>
            {activity.score !== null ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-black text-[#2563EB]">
                <Star className="size-3 fill-current" />
                {activity.score}đ
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
