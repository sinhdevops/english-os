"use client";

import { useDashboardData } from "@/features/dashboard/hooks/use-dashboard-data";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { TodayMissionCard } from "@/features/dashboard/components/today-mission-card";
import { SkillProgressGrid } from "@/features/dashboard/components/skill-progress-grid";
import { CurrentLevelCard } from "@/features/dashboard/components/current-level-card";
import { StreakCard } from "@/features/dashboard/components/streak-card";
import { WeakPointsCard } from "@/features/dashboard/components/weak-points-card";
import { RecentActivityCard } from "@/features/dashboard/components/recent-activity-card";
import { DashboardSkeleton } from "@/features/dashboard/components/dashboard-skeleton";

export function DashboardView() {
  const { data, isLoading } = useDashboardData();

  if (isLoading) return <DashboardSkeleton />;
  if (!data) return null;

  return (
    <div className="space-y-6">
      <DashboardHeader profile={data.profile} streak={data.streak} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <TodayMissionCard missions={data.todayMissions} />
          <SkillProgressGrid skills={data.skillProgress} />
          <RecentActivityCard activities={data.recentActivity} />
        </div>
        <div className="space-y-6">
          <CurrentLevelCard level={data.currentLevel} />
          <StreakCard streak={data.streak} />
          <WeakPointsCard weakPoints={data.weakPoints} />
        </div>
      </div>
    </div>
  );
}
