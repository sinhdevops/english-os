import { z } from "zod";

export const submitAnswerSchema = z.object({
  questionId: z.string().cuid(),
  selectedOptionId: z.string().cuid().optional(),
  textAnswer: z.string().max(5000).optional(),
}).refine((v) => v.selectedOptionId || v.textAnswer, {
  message: "Either selectedOptionId or textAnswer must be provided",
});

export const createSpeakingTaskSchema = z.object({
  lessonId: z.string().cuid().optional(),
  prompt: z.string().min(5).max(1000),
  durationSeconds: z.number().int().min(10).max(300).default(60),
  hints: z.array(z.string().max(200)).max(10).default([]),
});

export const completeSpeakingSubmissionSchema = z.object({
  speakingTaskId: z.string().cuid(),
  objectKey: z.string().min(1).max(500),
  durationSeconds: z.number().int().min(1).max(300).optional(),
  mimeType: z.string().max(50).optional(),
  fileSizeBytes: z.number().int().positive().optional(),
  selfScore: z.number().int().min(0).max(10).optional(),
});

export const createWritingTaskSchema = z.object({
  lessonId: z.string().cuid().optional(),
  prompt: z.string().min(5).max(2000),
  wordCountMin: z.number().int().positive().optional(),
  wordCountMax: z.number().int().positive().optional(),
  hints: z.array(z.string().max(200)).max(10).default([]),
});

export const submitWritingSchema = z.object({
  writingTaskId: z.string().cuid(),
  content: z.string().min(1).max(10000),
  selfScore: z.number().int().min(0).max(10).optional(),
});

export type SubmitAnswerInput = z.infer<typeof submitAnswerSchema>;
export type CompleteSpeakingSubmissionInput = z.infer<typeof completeSpeakingSubmissionSchema>;
export type SubmitWritingInput = z.infer<typeof submitWritingSchema>;
export type CreateSpeakingTaskInput = z.infer<typeof createSpeakingTaskSchema>;
export type CreateWritingTaskInput = z.infer<typeof createWritingTaskSchema>;
