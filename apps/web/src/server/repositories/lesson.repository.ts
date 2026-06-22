import { prisma } from "@english-os/db";

export const lessonRepository = {
  findBySlug(slug: string) {
    return prisma.lesson.findUnique({ where: { slug } });
  },

  findById(id: string) {
    return prisma.lesson.findUnique({ where: { id } });
  },

  findBySlugWithSteps(slug: string) {
    return prisma.lesson.findUnique({
      where: { slug, isPublished: true },
      include: {
        steps: {
          orderBy: { order: "asc" },
          include: {
            vocabularyItems: true,
            grammarPoints: true,
            questions: { include: { options: true } },
          },
        },
        speakingTasks: true,
        writingTasks: true,
      },
    });
  },

  findProgressForProfile(lessonId: string, profileId: string) {
    return prisma.userLessonProgress.findUnique({
      where: { profileId_lessonId: { profileId, lessonId } },
    });
  },

  upsertProgress(profileId: string, lessonId: string, data: { status?: string; score?: number; completedAt?: Date }) {
    return prisma.userLessonProgress.upsert({
      where: { profileId_lessonId: { profileId, lessonId } },
      create: { profileId, lessonId, ...data } as never,
      update: data as never,
    });
  },
};
