import { prisma } from "@english-os/db";
import { AppError } from "@/server/errors/app-error";
import { AUDIO_LIMITS } from "@english-os/constants";
import type { CompleteSpeakingSubmissionInput } from "@english-os/validators";

export const speakingService = {
  async saveSubmission(profileId: string, input: CompleteSpeakingSubmissionInput) {
    const task = await prisma.speakingTask.findUnique({ where: { id: input.speakingTaskId } });
    if (!task) throw AppError.notFound("Speaking task");

    const existingCount = await prisma.speakingSubmission.count({ where: { profileId } });
    if (existingCount >= AUDIO_LIMITS.FREE_USER_MAX_SUBMISSIONS) {
      // cleanup oldest if over limit
      const oldest = await prisma.speakingSubmission.findFirst({
        where: { profileId },
        orderBy: { createdAt: "asc" },
      });
      if (oldest) {
        await prisma.speakingSubmission.delete({ where: { id: oldest.id } });
      }
    }

    return prisma.speakingSubmission.create({
      data: {
        profileId,
        speakingTaskId: input.speakingTaskId,
        audioKey: input.objectKey,
        durationSeconds: input.durationSeconds,
        mimeType: input.mimeType,
        fileSizeBytes: input.fileSizeBytes,
        selfScore: input.selfScore,
      },
    });
  },
};
