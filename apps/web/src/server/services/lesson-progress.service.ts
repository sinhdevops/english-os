import { lessonRepository } from "@/server/repositories/lesson.repository";
import { progressRepository } from "@/server/repositories/progress.repository";
import { AppError } from "@/server/errors/app-error";
import type { CompleteLessonInput } from "@english-os/validators";

export const lessonProgressService = {
  async complete(profileId: string, input: CompleteLessonInput) {
    const lesson = await lessonRepository.findById(input.lessonId);
    if (!lesson) throw AppError.notFound("Lesson");

    const progress = await lessonRepository.upsertProgress(profileId, input.lessonId, {
      status: "COMPLETED",
      score: input.score,
      completedAt: new Date(),
    });

    await updateStreak(profileId);

    return progress;
  },
};

async function updateStreak(profileId: string) {
  const streak = await progressRepository.getStreak(profileId);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (!streak) {
    await progressRepository.upsertStreak(profileId, {
      currentStreak: 1,
      longestStreak: 1,
      lastActivityAt: now,
    });
    return;
  }

  const lastActivity = streak.lastActivityAt ? new Date(streak.lastActivityAt) : null;
  const lastDay = lastActivity
    ? new Date(lastActivity.getFullYear(), lastActivity.getMonth(), lastActivity.getDate())
    : null;

  const diffMs = lastDay ? today.getTime() - lastDay.getTime() : Infinity;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  let newCurrent = streak.currentStreak;
  if (diffDays === 0) return; // already counted today
  if (diffDays === 1) newCurrent += 1;
  else newCurrent = 1; // streak broken

  const newLongest = Math.max(newCurrent, streak.longestStreak);

  await progressRepository.upsertStreak(profileId, {
    currentStreak: newCurrent,
    longestStreak: newLongest,
    lastActivityAt: now,
  });
}
