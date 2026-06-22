import { progressRepository } from "@/server/repositories/progress.repository";
import { reviewRepository } from "@/server/repositories/review.repository";
import { prisma } from "@english-os/db";
import { SKILL_META } from "@english-os/constants";
import type { DashboardData } from "@english-os/types";

export const progressService = {
  async getDashboardData(profileId: string): Promise<DashboardData> {
    const [profile, streak, recentActivity, dueCount] = await Promise.all([
      prisma.profile.findUniqueOrThrow({
        where: { id: profileId },
        include: { currentLevel: true },
      }),
      progressRepository.getStreak(profileId),
      progressRepository.getRecentActivity(profileId, 5),
      reviewRepository.countDue(profileId),
    ]);

    const skillProgress = Object.keys(SKILL_META).map((skill) => ({
      skill: skill as never,
      score: 0,
      lessonsCompleted: 0,
      totalLessons: 0,
    }));

    const continueLesson = recentActivity.length > 0
      ? null
      : null;

    return {
      profile: {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.email,
        avatarUrl: profile.avatarUrl,
        role: profile.role,
      },
      todayMissions: [
        { id: "vocab", type: "vocabulary", title: "Học 10 từ mới", description: "Ôn lại từ vựng hôm nay", isCompleted: false, estimatedMinutes: 5 },
        { id: "review", type: "review", title: `Ôn ${dueCount} từ cũ`, description: "Spaced repetition review", isCompleted: false, estimatedMinutes: 10 },
        { id: "speaking", type: "speaking", title: "Speaking 1 phút", description: "Luyện nói tự nhiên", isCompleted: false, estimatedMinutes: 5 },
        { id: "writing", type: "writing", title: "Viết 5 câu", description: "Luyện viết tiếng Anh", isCompleted: false, estimatedMinutes: 10 },
      ],
      skillProgress,
      currentLevel: {
        id: profile.currentLevel?.id ?? "",
        name: profile.currentLevel?.name ?? "Zero",
        slug: profile.currentLevel?.slug ?? "zero",
        tier: profile.currentLevel?.tier ?? "ZERO",
        progressToNext: 0,
      },
      weakPoints: [],
      recentActivity: recentActivity.map((a) => ({
        id: a.id,
        type: "lesson",
        description: `Hoàn thành: ${a.lesson.title}`,
        completedAt: a.completedAt?.toISOString() ?? new Date().toISOString(),
        score: a.score,
      })),
      streak: {
        currentStreak: streak?.currentStreak ?? 0,
        longestStreak: streak?.longestStreak ?? 0,
        lastActivityAt: streak?.lastActivityAt?.toISOString() ?? null,
      },
      continueLesson,
    };
  },
};
