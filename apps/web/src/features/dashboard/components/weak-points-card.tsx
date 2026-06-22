import type { WeakPoint } from "@english-os/types";
import { AlertTriangle } from "lucide-react";

type Props = { weakPoints: WeakPoint[] };

export function WeakPointsCard({ weakPoints }: Props) {
  if (weakPoints.length === 0) return null;

  return (
    <div className="glass-card rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="size-4 text-yellow-400" />
        <h3 className="font-semibold text-brand-text">Cần cải thiện</h3>
      </div>
      <div className="space-y-3">
        {weakPoints.map((wp, i) => (
          <div key={i} className="text-sm">
            <p className="text-brand-text">{wp.description}</p>
            <p className="text-brand-primary text-xs mt-0.5">{wp.suggestedAction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
