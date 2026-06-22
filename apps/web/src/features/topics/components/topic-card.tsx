import Link from "next/link";
import Image from "next/image";
import type { TopicSummary } from "@english-os/types";
import { BookOpen, ArrowRight } from "lucide-react";

type Props = { topic: TopicSummary };

export function TopicCard({ topic }: Props) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="glass-card gradient-border group flex flex-col rounded-2xl p-5 transition-all duration-200 hover:bg-white/5"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
        {topic.thumbnailUrl ? (
          <Image src={topic.thumbnailUrl} alt={topic.title} width={48} height={48} className="rounded-xl object-cover" />
        ) : (
          <BookOpen className="size-6 text-brand-primary" />
        )}
      </div>

      <div className="mb-1 text-xs font-medium text-brand-muted">{topic.levelName}</div>
      <h3 className="font-semibold text-brand-text group-hover:text-brand-primary transition-colors">
        {topic.title}
      </h3>
      {topic.description && (
        <p className="mt-1 text-xs text-brand-muted line-clamp-2">{topic.description}</p>
      )}

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-brand-muted">{topic.lessonCount} bài học</span>
        {topic.progress > 0 ? (
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-16 rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-brand-primary"
                style={{ width: `${topic.progress}%` }}
              />
            </div>
            <span className="text-xs text-brand-primary">{topic.progress}%</span>
          </div>
        ) : (
          <ArrowRight className="size-4 text-brand-muted group-hover:text-brand-primary transition-colors" />
        )}
      </div>
    </Link>
  );
}
