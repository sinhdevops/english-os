import Link from "next/link";
import type { TopicDetail } from "@english-os/types";
import { PROGRESS_STATUS } from "@english-os/constants";
import { CheckCircle2, Circle, Lock, ArrowLeft } from "lucide-react";

type Props = { topic: TopicDetail };

export function TopicDetailView({ topic }: Props) {
  return (
    <div className="space-y-6 max-w-2xl">
      <Link href="/topics" className="flex items-center gap-2 text-brand-muted hover:text-brand-text text-sm transition-colors">
        <ArrowLeft className="size-4" />
        Quay lại
      </Link>

      <div>
        <p className="text-xs text-brand-muted mb-1">{topic.levelName}</p>
        <h1 className="text-2xl font-bold text-brand-text">{topic.title}</h1>
        {topic.description && <p className="text-brand-muted mt-2">{topic.description}</p>}
      </div>

      <div className="space-y-3">
        {topic.lessons.map((lesson, idx) => {
          const isDone = lesson.status === PROGRESS_STATUS.COMPLETED;
          const isInProgress = lesson.status === PROGRESS_STATUS.IN_PROGRESS;
          const isLocked = idx > 0 && topic.lessons[idx - 1]?.status !== PROGRESS_STATUS.COMPLETED;

          return (
            <Link
              key={lesson.id}
              href={isLocked ? "#" : `/lessons/${lesson.slug}`}
              aria-disabled={isLocked}
              className={`glass-card flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 ${
                isLocked
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-white/5"
              }`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                {isDone ? (
                  <CheckCircle2 className="size-5 text-green-400" />
                ) : isLocked ? (
                  <Lock className="size-5 text-brand-muted" />
                ) : (
                  <Circle className="size-5 text-brand-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm ${isDone ? "text-brand-muted" : "text-brand-text"}`}>
                  {lesson.order}. {lesson.title}
                </p>
                {lesson.description && (
                  <p className="text-xs text-brand-muted truncate mt-0.5">{lesson.description}</p>
                )}
              </div>
              {isInProgress && (
                <span className="text-xs font-medium text-brand-primary shrink-0">Đang học</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
