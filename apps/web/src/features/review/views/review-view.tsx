"use client";

import { useReviewQueue } from "@/features/review/hooks/use-review-queue";
import { ReviewCard } from "@/features/review/components/review-card";
import { ReviewComplete } from "@/features/review/components/review-complete";
import { Skeleton } from "@/components/ui/skeleton";

export function ReviewView() {
  const { items, currentIndex, isLoading, isDone, rate } = useReviewQueue();

  if (isLoading) return <Skeleton className="h-96 rounded-2xl" />;
  if (isDone) return <ReviewComplete total={items.length} />;

  const current = items[currentIndex];
  if (!current) return null;

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-brand-text">Ôn tập</h1>
        <span className="text-sm text-brand-muted">{currentIndex + 1}/{items.length}</span>
      </div>
      <ReviewCard item={current} onRate={rate} />
    </div>
  );
}
