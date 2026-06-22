import { prisma } from "@english-os/db";
import type { CreateTopicInput, UpdateTopicInput } from "@english-os/validators";

export const topicRepository = {
  findAll() {
    return prisma.topic.findMany({
      include: { level: true, _count: { select: { lessons: true } } },
      orderBy: [{ level: { order: "asc" } }, { order: "asc" }],
    });
  },

  findPublished() {
    return prisma.topic.findMany({
      where: { isPublished: true },
      include: { level: true, _count: { select: { lessons: true } } },
      orderBy: [{ level: { order: "asc" } }, { order: "asc" }],
    });
  },

  findById(id: string) {
    return prisma.topic.findUnique({
      where: { id },
      include: { level: true, _count: { select: { lessons: true } } },
    });
  },

  findBySlug(slug: string) {
    return prisma.topic.findUnique({
      where: { slug },
      include: { level: true, _count: { select: { lessons: true } } },
    });
  },

  findBySlugWithLessons(slug: string, profileId?: string) {
    return prisma.topic.findUnique({
      where: { slug, isPublished: true },
      include: {
        level: true,
        lessons: {
          where: { isPublished: true },
          orderBy: { order: "asc" },
          include: profileId
            ? { userProgress: { where: { profileId }, select: { status: true, score: true } } }
            : undefined,
        },
      },
    });
  },

  create(data: CreateTopicInput) {
    return prisma.topic.create({ data });
  },

  update(id: string, data: UpdateTopicInput) {
    return prisma.topic.update({ where: { id }, data });
  },

  delete(id: string) {
    return prisma.topic.delete({ where: { id } });
  },
};
