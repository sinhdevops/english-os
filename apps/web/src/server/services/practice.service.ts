import { prisma } from "@english-os/db";
import { reviewRepository } from "@/server/repositories/review.repository";
import { AppError } from "@/server/errors/app-error";
import type { SubmitAnswerInput } from "@english-os/validators";

export const practiceService = {
  async submitAnswer(profileId: string, input: SubmitAnswerInput) {
    const question = await prisma.question.findUnique({
      where: { id: input.questionId },
      include: { options: true },
    });
    if (!question) throw AppError.notFound("Question");

    let isCorrect: boolean | null = null;

    if (input.selectedOptionId) {
      const option = question.options.find((o) => o.id === input.selectedOptionId);
      if (!option) throw AppError.validation("Invalid option");
      isCorrect = option.isCorrect;
    }

    const answer = await prisma.userAnswer.create({
      data: {
        profileId,
        questionId: input.questionId,
        selectedOptionId: input.selectedOptionId,
        textAnswer: input.textAnswer,
        isCorrect,
      },
    });

    return {
      answerId: answer.id,
      isCorrect,
      explanation: input.selectedOptionId
        ? question.options.find((o) => o.id === input.selectedOptionId)?.explanation ?? null
        : null,
      correctOptionId: question.options.find((o) => o.isCorrect)?.id ?? null,
    };
  },
};
