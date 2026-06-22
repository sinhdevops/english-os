import { prisma } from "@english-os/db";

export const progressRepository = {
  getStreak(profileId: string) {
    return prisma.streak.findUnique({ where: { profileId } });
  },

  upsertStreak(profileId: string, data: { currentStreak: number; longestStreak: number; lastActivityAt: Date }) {
    return prisma.streak.upsert({
      where: { profileId },
      create: { profileId, ...data },
      update: data,
    });
  },

  countCompletedLessons(profileId: string) {
    return prisma.userLessonProgress.count({
      where: { profileId, status: "COMPLETED" },
    });
  },

  getRecentActivity(profileId: string, limit = 10) {
    return prisma.userLessonProgress.findMany({
      where: { profileId, status: "COMPLETED" },
      orderBy: { completedAt: "desc" },
      take: limit,
      include: { lesson: { include: { topic: true } } },
    });
  },

  getSkillProgressByProfile(profileId: string) {
    return prisma.userAnswer.findMany({
      where: { profileId },
      include: { question: { select: { skill: true } } },
    });
  },
};
