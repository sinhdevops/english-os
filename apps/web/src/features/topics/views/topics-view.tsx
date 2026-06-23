"use client";

import { BookOpenCheck, Search, Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { TopicCard } from "@/features/topics/components/topic-card";
import { TopicFilters } from "@/features/topics/components/topic-filters";
import { useTopics } from "@/features/topics/hooks/use-topics";

export function TopicsView() {
  const { topics, isLoading, filter, setFilter } = useTopics();

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-[#2563EB]">
              <Sparkles className="size-3.5 fill-current" />
              Học theo chủ đề thực tế
            </div>
            <h1 className="mt-3 text-3xl font-black tracking-normal text-[#0F172A]">Chọn chủ đề để bắt đầu học</h1>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[#64748B]">
              Mỗi topic gồm bài nghe, từ vựng, quiz và nhiệm vụ nhỏ. Chọn đúng level để học nhẹ nhưng vẫn tiến bộ.
            </p>
          </div>
          <div className="flex h-12 min-w-0 items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 shadow-sm lg:w-80">
            <Search className="size-5 text-[#94A3B8]" />
            <span className="text-sm font-medium text-[#94A3B8]">Tìm topic theo chủ đề...</span>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-4 rounded-[24px] border border-[#E2E8F0] bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="size-5 text-[#2563EB]" />
          <p className="font-black text-[#0F172A]">Level của bạn</p>
        </div>
        <TopicFilters filter={filter} onFilterChange={setFilter} />
      </div>

      {isLoading ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-64 rounded-[24px]" />
          ))}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
}
