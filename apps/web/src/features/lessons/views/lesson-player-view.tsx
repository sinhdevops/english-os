"use client";

import { useLessonPlayer } from "@/features/lessons/hooks/use-lesson-player";
import { LessonStepRenderer } from "@/features/lessons/components/lesson-step-renderer";
import { LessonProgressBar } from "@/features/lessons/components/lesson-progress-bar";
import { LessonNavigation } from "@/features/lessons/components/lesson-navigation";

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
    <div className="max-w-2xl mx-auto space-y-6">
      <LessonProgressBar current={currentIndex + 1} total={totalSteps} title={lesson.title} />

      <div className="glass-card rounded-2xl p-6 min-h-80">
        {currentStep && (
          <LessonStepRenderer step={currentStep} />
        )}
      </div>

      <LessonNavigation
        onPrev={goPrev}
        onNext={goNext}
        isFirst={isFirst}
        isLast={isLast}
        isLoading={isCompleting}
      />
    </div>
  );
}
