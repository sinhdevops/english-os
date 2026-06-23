import type { WeakPoint } from "@english-os/types";
import { AlertTriangle, ArrowRight } from "lucide-react";

type Props = { weakPoints: WeakPoint[] };

export function WeakPointsCard({ weakPoints }: Props) {
  if (weakPoints.length === 0) {
    return (
      <div className="rounded-[24px] border border-emerald-100 bg-emerald-50 p-5">
        <p className="font-black text-emerald-700">Đang học rất ổn</p>
        <p className="mt-1 text-sm font-medium text-emerald-700/80">Chưa có điểm yếu rõ ràng. Tiếp tục giữ nhịp học nhé.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <AlertTriangle className="size-5 text-[#F59E0B]" />
        <h3 className="text-lg font-black text-[#0F172A]">Cần cải thiện</h3>
      </div>
      <div className="space-y-3">
        {weakPoints.map((weakPoint, index) => (
          <div key={`${weakPoint.skill}-${index}`} className="rounded-2xl bg-amber-50 p-3">
            <p className="text-sm font-bold text-[#0F172A]">{weakPoint.description}</p>
            <p className="mt-1 flex items-center text-xs font-black text-[#2563EB]">
              {weakPoint.suggestedAction}
              <ArrowRight className="ml-1 size-3" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
