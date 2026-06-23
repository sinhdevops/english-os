import Link from "next/link";
import { SKILL_META } from "@english-os/constants";
import { ArrowRight, BarChart3, CalendarDays, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillProgressGrid } from "@/features/dashboard/components/skill-progress-grid";

export function ProgressView() {
  const mockSkills = Object.keys(SKILL_META).map((skill) => ({
    skill: skill as never,
    score: 0,
    lessonsCompleted: 0,
    totalLessons: 0,
  }));

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-6 text-white shadow-[0_18px_45px_rgba(37,99,235,0.2)]">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-black">
              <TrendingUp className="size-3.5" />
              Theo dõi tiến độ
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl">Biết mình đang mạnh ở đâu, yếu ở đâu</h1>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-blue-50">
              English OS gom dữ liệu học, ôn tập và luyện kỹ năng để bạn nhìn thấy tiến bộ mỗi ngày.
            </p>
          </div>
          <Button asChild className="h-12 rounded-2xl bg-white px-6 font-extrabold text-[#2563EB] hover:bg-blue-50">
            <Link href="/topics">
              Học bài tiếp theo
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: Target, title: "Mục tiêu", value: "IELTS 7.0", desc: "Lộ trình dài hạn" },
          { icon: CalendarDays, title: "Thói quen", value: "15 phút", desc: "Mỗi ngày" },
          { icon: BarChart3, title: "Kỹ năng", value: "4", desc: "Nghe - Nói - Đọc - Viết" },
        ].map((item) => (
          <div key={item.title} className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
            <item.icon className="size-7 text-[#2563EB]" />
            <p className="mt-4 text-sm font-bold text-[#64748B]">{item.title}</p>
            <p className="text-3xl font-black text-[#0F172A]">{item.value}</p>
            <p className="text-sm font-medium text-[#64748B]">{item.desc}</p>
          </div>
        ))}
      </div>

      <SkillProgressGrid skills={mockSkills} />
    </div>
  );
}
