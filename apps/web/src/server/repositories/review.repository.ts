import { prisma } from "@english-os/db";

export const reviewRepository = {
  getDueItems(profileId: string, limit = 20) {
    return prisma.reviewItem.findMany({
      where: {
        profileId,
        isArchived: false,
        nextReviewAt: { lte: new Date() },
      },
      include: {
        vocabularyItem: {
          select: { id: true, word: true, definition: true, exampleSentence: true, imageUrl: true },
        },
      },
      orderBy: { nextReviewAt: "asc" },
      take: limit,
    });
  },

  findById(id: string, profileId: string) {
    return prisma.reviewItem.findFirst({
      where: { id, profileId },
    });
  },

  update(id: string, data: { nextReviewAt: Date; interval: number; easeFactor: number; repetitions: number }) {
    return prisma.reviewItem.update({ where: { id }, data });
  },

  countDue(profileId: string) {
    return prisma.reviewItem.count({
      where: {
        profileId,
        isArchived: false,
        nextReviewAt: { lte: new Date() },
      },
    });
  },

  createForVocabularyItem(profileId: string, vocabularyItemId: string) {
    return prisma.reviewItem.create({
      data: {
        profileId,
        vocabularyItemId,
        nextReviewAt: new Date(),
        interval: 1,
        easeFactor: 2.5,
        repetitions: 0,
      },
    });
  },
};
