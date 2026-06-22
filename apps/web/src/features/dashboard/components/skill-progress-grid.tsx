import type { SkillProgress } from "@english-os/types";
import { SKILL_META } from "@english-os/constants";

type Props = { skills: SkillProgress[] };

export function SkillProgressGrid({ skills }: Props) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <h2 className="font-semibold text-brand-text mb-4">Kỹ năng</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((s) => {
          const meta = SKILL_META[s.skill];
          return (
            <div key={s.skill} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-brand-muted">{meta.labelVi}</span>
                <span className="text-xs font-medium" style={{ color: meta.color }}>{s.score}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${s.score}%`, backgroundColor: meta.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
