import { z } from "zod";
import { AUDIO_LIMITS } from "@english-os/constants";

export const audioPresignSchema = z.object({
  fileName: z.string().min(1).max(200),
  contentType: z.string().refine(
    (v) => AUDIO_LIMITS.ALLOWED_MIME_TYPES.includes(v as never),
    { message: `Allowed types: ${AUDIO_LIMITS.ALLOWED_MIME_TYPES.join(", ")}` }
  ),
  fileSize: z.number().int().positive().max(AUDIO_LIMITS.MAX_FILE_SIZE_BYTES),
  purpose: z.enum(["speaking_submission", "lesson_audio"]),
});

export const audioUploadCompleteSchema = z.object({
  objectKey: z.string().min(1).max(500),
  speakingTaskId: z.string().cuid().optional(),
  durationSeconds: z.number().int().min(1).max(300).optional(),
  mimeType: z.string().max(50).optional(),
  fileSizeBytes: z.number().int().positive().optional(),
});

export const imageSignatureSchema = z.object({
  folder: z.string().min(1).max(100).optional(),
});

export type AudioPresignInput = z.infer<typeof audioPresignSchema>;
export type AudioUploadCompleteInput = z.infer<typeof audioUploadCompleteSchema>;
export type ImageSignatureInput = z.infer<typeof imageSignatureSchema>;
