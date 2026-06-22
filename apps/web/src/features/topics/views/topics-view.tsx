"use client";

import { useTopics } from "@/features/topics/hooks/use-topics";
import { TopicCard } from "@/features/topics/components/topic-card";
import { TopicFilters } from "@/features/topics/components/topic-filters";
import { Skeleton } from "@/components/ui/skeleton";

export function TopicsView() {
  const { topics, isLoading, filter, setFilter } = useTopics();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-text">Topics</h1>
        <p className="text-brand-muted text-sm mt-1">Chọn topic để bắt đầu luyện tập</p>
      </div>
      <TopicFilters filter={filter} onFilterChange={setFilter} />
      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-52 rounded-2xl" />)}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => <TopicCard key={t.id} topic={t} />)}
        </div>
      )}
    </div>
  );
}
