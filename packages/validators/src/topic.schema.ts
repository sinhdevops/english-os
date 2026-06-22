import { z } from "zod";

export const createTopicSchema = z.object({
  title: z.string().min(2).max(120),
  slug: z.string().min(2).max(120).regex(/^[a-z0-9-]+$/),
  description: z.string().max(500).optional(),
  thumbnailUrl: z.string().url().optional(),
  levelId: z.string().cuid(),
  order: z.number().int().positive(),
});

export const updateTopicSchema = createTopicSchema.partial().extend({
  isPublished: z.boolean().optional(),
});

export type CreateTopicInput = z.infer<typeof createTopicSchema>;
export type UpdateTopicInput = z.infer<typeof updateTopicSchema>;
