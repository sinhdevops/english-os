"use client";

import { LessonNavigation } from "@/features/lessons/components/lesson-navigation";
import { LessonProgressBar } from "@/features/lessons/components/lesson-progress-bar";
import { LessonStepRenderer } from "@/features/lessons/components/lesson-step-renderer";
import { useLessonPlayer } from "@/features/lessons/hooks/use-lesson-player";

type Props = {
  lesson: {
    id: string;
    title: string;
    steps: Array<{ id: string; type: string; order: number; title: string | null; content: unknown }>;
  };
};

export function LessonPlayerView({ lesson }: Props) {
  const { currentStep, currentIndex, totalSteps, goNext, goPrev, isFirst, isLast, isCompleting } = useLessonPlayer(lesson);

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <LessonProgressBar current={currentIndex + 1} total={totalSteps} title={lesson.title} />

      <div className="min-h-[460px] rounded-[28px] border border-[#E2E8F0] bg-white p-5 shadow-sm sm:p-8">
        {currentStep ? <LessonStepRenderer step={currentStep} /> : null}
      </div>

      <LessonNavigation onPrev={goPrev} onNext={goNext} isFirst={isFirst} isLast={isLast} isLoading={isCompleting} />
    </div>
  );
}
