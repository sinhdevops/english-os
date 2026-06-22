import { z } from "zod";
import { LESSON_STEP_TYPES } from "@english-os/constants";

export const createLessonSchema = z.object({
  title: z.string().min(2).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9-]+$/),
  description: z.string().max(500).optional(),
  topicId: z.string().cuid(),
  order: z.number().int().positive(),
});

export const updateLessonSchema = createLessonSchema.partial().extend({
  isPublished: z.boolean().optional(),
});

export const createLessonStepSchema = z.object({
  lessonId: z.string().cuid(),
  type: z.nativeEnum(LESSON_STEP_TYPES as Record<string, string>),
  order: z.number().int().positive(),
  title: z.string().max(200).optional(),
  content: z.record(z.unknown()),
});

export const completeLessonSchema = z.object({
  lessonId: z.string().cuid(),
  score: z.number().int().min(0).max(100).optional(),
});

export const createVocabularyItemSchema = z.object({
  lessonStepId: z.string().cuid().optional(),
  word: z.string().min(1).max(100),
  pronunciation: z.string().max(100).optional(),
  definition: z.string().min(1).max(500),
  exampleSentence: z.string().max(500).optional(),
  collocations: z.array(z.string().max(100)).max(10).default([]),
  imageUrl: z.string().url().optional(),
  audioUrl: z.string().url().optional(),
});

export type CreateLessonInput = z.infer<typeof createLessonSchema>;
export type UpdateLessonInput = z.infer<typeof updateLessonSchema>;
export type CreateLessonStepInput = z.infer<typeof createLessonStepSchema>;
export type CompleteLessonInput = z.infer<typeof completeLessonSchema>;
export type CreateVocabularyItemInput = z.infer<typeof createVocabularyItemSchema>;
