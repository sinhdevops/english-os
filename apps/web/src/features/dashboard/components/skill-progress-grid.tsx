import type { SkillProgress } from "@english-os/types";
import { SKILL_META } from "@english-os/constants";

type Props = { skills: SkillProgress[] };

export function SkillProgressGrid({ skills }: Props) {
  return (
    <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-[#0F172A]">Tiến độ 4 kỹ năng</h2>
          <p className="mt-1 text-sm font-medium text-[#64748B]">Học song song để không lệch kỹ năng.</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => {
          const meta = SKILL_META[skill.skill];
          return (
            <div key={skill.skill} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-[#0F172A]">{meta.labelVi}</p>
                  <p className="text-xs font-medium text-[#64748B]">
                    {skill.lessonsCompleted}/{skill.totalLessons} bài học
                  </p>
                </div>
                <span className="text-lg font-black" style={{ color: meta.color }}>{skill.score}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#E2E8F0]">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${skill.score}%`, backgroundColor: meta.color }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
