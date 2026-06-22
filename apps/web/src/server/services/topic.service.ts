import { topicRepository } from "@/server/repositories/topic.repository";
import { progressRepository } from "@/server/repositories/progress.repository";
import { AppError } from "@/server/errors/app-error";
import type { CreateTopicInput, UpdateTopicInput } from "@english-os/validators";

export const topicService = {
  async listPublished(profileId?: string) {
    const topics = await topicRepository.findPublished();

    return topics.map((t) => ({
      id: t.id,
      title: t.title,
      slug: t.slug,
      description: t.description,
      thumbnailUrl: t.thumbnailUrl,
      levelName: t.level.name,
      levelSlug: t.level.slug,
      lessonCount: t._count.lessons,
      progress: 0, // will be enriched when profileId added
    }));
  },

  async listAll() {
    const topics = await topicRepository.findAll();
    return topics.map((t) => ({
      id: t.id,
      title: t.title,
      slug: t.slug,
      description: t.description,
      thumbnailUrl: t.thumbnailUrl,
      levelName: t.level.name,
      levelSlug: t.level.slug,
      lessonCount: t._count.lessons,
      isPublished: t.isPublished,
      order: t.order,
    }));
  },

  async getById(id: string) {
    const topic = await topicRepository.findById(id);
    if (!topic) throw AppError.notFound("Topic");
    return topic;
  },

  async create(input: CreateTopicInput) {
    return topicRepository.create(input);
  },

  async update(id: string, input: UpdateTopicInput) {
    const existing = await topicRepository.findById(id);
    if (!existing) throw AppError.notFound("Topic");
    return topicRepository.update(id, input);
  },

  async delete(id: string) {
    const existing = await topicRepository.findById(id);
    if (!existing) throw AppError.notFound("Topic");
    return topicRepository.delete(id);
  },
};
