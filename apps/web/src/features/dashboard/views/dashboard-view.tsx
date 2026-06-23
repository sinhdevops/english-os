"use client";

import Link from "next/link";
import { ArrowRight, BookOpenCheck, Clock3, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CurrentLevelCard } from "@/features/dashboard/components/current-level-card";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { DashboardSkeleton } from "@/features/dashboard/components/dashboard-skeleton";
import { RecentActivityCard } from "@/features/dashboard/components/recent-activity-card";
import { SkillProgressGrid } from "@/features/dashboard/components/skill-progress-grid";
import { StreakCard } from "@/features/dashboard/components/streak-card";
import { TodayMissionCard } from "@/features/dashboard/components/today-mission-card";
import { WeakPointsCard } from "@/features/dashboard/components/weak-points-card";
import { useDashboardData } from "@/features/dashboard/hooks/use-dashboard-data";

export function DashboardView() {
  const { data, isLoading, error } = useDashboardData();

  if (isLoading) return <DashboardSkeleton />;
  if (error) {
    return (
      <div className="rounded-[24px] border border-red-100 bg-red-50 p-6 text-red-700">
        <p className="font-black">Không tải được dashboard</p>
        <p className="mt-1 text-sm font-medium">{error}</p>
      </div>
    );
  }
  if (!data) return null;

  const completed = data.todayMissions.filter((mission) => mission.isCompleted).length;
  const totalMinutes = data.todayMissions.reduce((sum, mission) => sum + mission.estimatedMinutes, 0);

  return (
    <div className="space-y-6">
      <DashboardHeader profile={data.profile} streak={data.streak} />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[24px] border border-[#DBEAFE] bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-5 text-white shadow-[0_18px_45px_rgba(37,99,235,0.2)] md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-black">
                <Sparkles className="size-3.5 fill-current" />
                Kế hoạch hôm nay
              </div>
              <h2 className="mt-4 text-2xl font-black">Hoàn thành {data.todayMissions.length} nhiệm vụ nhỏ</h2>
              <p className="mt-2 max-w-xl text-sm font-medium leading-7 text-blue-50">
                Học ngắn nhưng đều: hoàn thành listening, vocabulary hoặc review để giữ nhịp tiến bộ.
              </p>
            </div>
            <div className="hidden rounded-2xl bg-white/15 p-4 text-center sm:block">
              <p className="text-3xl font-black">{completed}/{data.todayMissions.length}</p>
              <p className="text-xs font-bold text-blue-50">đã xong</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-2xl bg-white px-5 font-extrabold text-[#2563EB] hover:bg-blue-50">
              <Link href={data.continueLesson ? `/topics/${data.continueLesson.topicSlug}` : "/topics"}>
                <BookOpenCheck className="mr-2 size-4" />
                Tiếp tục học
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-2xl border-white/30 bg-white/10 px-5 font-extrabold text-white hover:bg-white/15 hover:text-white">
              <Link href="/review">
                <RotateCcw className="mr-2 size-4" />
                Ôn tập ngay
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-[#F59E0B]">
              <Clock3 className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#64748B]">Thời lượng hôm nay</p>
              <p className="text-3xl font-black text-[#0F172A]">{totalMinutes}<span className="text-base"> phút</span></p>
            </div>
          </div>
          <div className="mt-5 h-2 rounded-full bg-[#E2E8F0]">
            <div className="h-full rounded-full bg-[#F59E0B]" style={{ width: `${Math.min(100, (completed / Math.max(1, data.todayMissions.length)) * 100)}%` }} />
          </div>
          <Link href="/topics" className="mt-4 inline-flex items-center text-sm font-black text-[#2563EB]">
            Xem chủ đề học <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <TodayMissionCard missions={data.todayMissions} />
          <SkillProgressGrid skills={data.skillProgress} />
          <RecentActivityCard activities={data.recentActivity} />
        </div>
        <div className="space-y-6">
          <CurrentLevelCard level={data.currentLevel} />
          <StreakCard streak={data.streak} />
          <WeakPointsCard weakPoints={data.weakPoints} />
        </div>
      </section>
    </div>
  );
}
