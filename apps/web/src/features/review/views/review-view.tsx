"use client";

import { RotateCcw, Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ReviewCard } from "@/features/review/components/review-card";
import { ReviewComplete } from "@/features/review/components/review-complete";
import { useReviewQueue } from "@/features/review/hooks/use-review-queue";

export function ReviewView() {
  const { items, currentIndex, isLoading, isDone, rate } = useReviewQueue();

  if (isLoading) return <Skeleton className="h-[520px] rounded-[28px]" />;
  if (isDone) return <ReviewComplete total={items.length} />;

  const current = items[currentIndex];
  if (!current) return null;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <section className="rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="grid size-14 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
            <RotateCcw className="size-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black text-[#2563EB]">
              <Sparkles className="size-3.5 fill-current" />
              Spaced Repetition
            </div>
            <h1 className="mt-3 text-3xl font-black text-[#0F172A]">Ôn tập từ sắp quên</h1>
            <p className="mt-2 text-sm font-medium text-[#64748B]">Đánh giá mức độ nhớ để hệ thống xếp lịch ôn tiếp theo.</p>
          </div>
        </div>
        <div className="mt-5 h-2 rounded-full bg-[#E2E8F0]">
          <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${Math.round(((currentIndex + 1) / Math.max(1, items.length)) * 100)}%` }} />
        </div>
        <p className="mt-2 text-right text-sm font-bold text-[#64748B]">{currentIndex + 1}/{items.length}</p>
      </section>
      <ReviewCard item={current} onRate={rate} />
    </div>
  );
}
