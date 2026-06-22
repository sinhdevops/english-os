"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Step = { id: string; type: string; order: number; title: string | null; content: unknown };
type Lesson = { id: string; slug?: string; title: string; steps: Step[] };

export function useLessonPlayer(lesson: Lesson) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const router = useRouter();

  const steps = lesson.steps.slice().sort((a, b) => a.order - b.order);
  const totalSteps = steps.length;
  const currentStep = steps[currentIndex] ?? null;

  const goNext = useCallback(async () => {
    if (currentIndex < totalSteps - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }

    setIsCompleting(true);
    try {
      const res = await fetch(`/api/lessons/${lesson.id}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: 100 }),
      });
      const json = await res.json();
      if (json.error) throw new Error(json.error.message);

      toast.success("Bài học hoàn thành!");
      router.back();
    } catch {
      toast.error("Có lỗi xảy ra, thử lại nhé.");
    } finally {
      setIsCompleting(false);
    }
  }, [currentIndex, totalSteps, lesson.id, router]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  return {
    currentStep,
    currentIndex,
    totalSteps,
    goNext,
    goPrev,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalSteps - 1,
    isCompleting,
  };
}
