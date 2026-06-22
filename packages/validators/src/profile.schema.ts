import { z } from "zod";

export const updateProfileSchema = z.object({
  displayName: z.string().min(2).max(60).optional(),
  avatarUrl: z.string().url().optional(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
