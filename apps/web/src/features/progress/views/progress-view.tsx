import { SkillProgressGrid } from "@/features/dashboard/components/skill-progress-grid";
import { SKILL_META } from "@english-os/constants";

export function ProgressView() {
  const mockSkills = Object.keys(SKILL_META).map((skill) => ({
    skill: skill as never,
    score: 0,
    lessonsCompleted: 0,
    totalLessons: 0,
  }));

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-text">Tiến bộ của bạn</h1>
        <p className="text-brand-muted text-sm mt-1">Theo dõi sự phát triển theo từng kỹ năng</p>
      </div>
      <SkillProgressGrid skills={mockSkills} />
    </div>
  );
}
