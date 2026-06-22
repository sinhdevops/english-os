import { z } from "zod";

export const reviewCompleteSchema = z.object({
  reviewItemId: z.string().cuid(),
  quality: z.number().int().min(0).max(5),
});

export type ReviewCompleteInput = z.infer<typeof reviewCompleteSchema>;
