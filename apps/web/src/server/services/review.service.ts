import { reviewRepository } from "@/server/repositories/review.repository";
import { AppError } from "@/server/errors/app-error";
import type { ReviewCompleteInput } from "@english-os/validators";

// SM-2 spaced repetition algorithm
function calculateNextReview(repetitions: number, easeFactor: number, quality: number) {
  let newEF = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  newEF = Math.max(1.3, newEF);

  let interval: number;
  let newRepetitions: number;

  if (quality < 3) {
    interval = 1;
    newRepetitions = 0;
  } else {
    newRepetitions = repetitions + 1;
    if (newRepetitions === 1) interval = 1;
    else if (newRepetitions === 2) interval = 6;
    else interval = Math.round(repetitions * easeFactor);
  }

  const nextReviewAt = new Date();
  nextReviewAt.setDate(nextReviewAt.getDate() + interval);

  return { interval, easeFactor: newEF, repetitions: newRepetitions, nextReviewAt };
}

export const reviewService = {
  async getDueItems(profileId: string) {
    return reviewRepository.getDueItems(profileId);
  },

  async complete(profileId: string, input: ReviewCompleteInput) {
    const item = await reviewRepository.findById(input.reviewItemId, profileId);
    if (!item) throw AppError.notFound("Review item");

    const next = calculateNextReview(item.repetitions, item.easeFactor, input.quality);
    const updated = await reviewRepository.update(item.id, next);

    return updated;
  },
};
