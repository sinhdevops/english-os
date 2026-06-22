import { LEVELS } from "@english-os/constants";
import { CheckCircle2 } from "lucide-react";

export function RoadmapView() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 space-y-6">
      <h1 className="text-3xl font-bold text-brand-text text-center">Lộ trình học</h1>
      <p className="text-center text-brand-muted">Từ con số 0 đến IELTS 7.0 — từng bước một.</p>
      <div className="relative mt-12">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-white/5" />
        <div className="space-y-6">
          {LEVELS.map((level, i) => (
            <div key={level.slug} className="flex items-start gap-6 relative">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary/30 bg-brand-card z-10">
                <span className="text-xs font-bold text-brand-primary">{i + 1}</span>
              </div>
              <div className="glass-card flex-1 rounded-2xl p-4">
                <p className="font-semibold text-brand-text">{level.name}</p>
                <p className="text-xs text-brand-muted mt-0.5">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
