import Link from "next/link";
import type { TopicDetail } from "@english-os/types";
import { PROGRESS_STATUS } from "@english-os/constants";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Lock, PlayCircle } from "lucide-react";

type Props = { topic: TopicDetail };

export function TopicDetailView({ topic }: Props) {
  const completed = topic.lessons.filter((lesson) => lesson.status === PROGRESS_STATUS.COMPLETED).length;
  const percent = Math.round((completed / Math.max(1, topic.lessons.length)) * 100);

  return (
    <div className="space-y-6">
      <Link href="/topics" className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-extrabold text-[#64748B] shadow-sm transition-colors hover:text-[#2563EB]">
        <ArrowLeft className="size-4" />
        Quay lại chủ đề
      </Link>

      <section className="rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-[#2563EB] to-[#06B6D4] p-6 text-white shadow-[0_18px_45px_rgba(37,99,235,0.2)]">
        <div className="grid gap-6 lg:grid-cols-[1fr_260px] lg:items-end">
          <div>
            <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-black">{topic.levelName}</p>
            <h1 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl">{topic.title}</h1>
            {topic.description ? <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-blue-50">{topic.description}</p> : null}
          </div>
          <div className="rounded-[24px] bg-white/15 p-4">
            <div className="flex items-center justify-between text-sm font-bold text-blue-50">
              <span>Tiến độ topic</span>
              <span>{percent}%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white" style={{ width: `${percent}%` }} />
            </div>
            <p className="mt-3 text-sm font-bold">{completed}/{topic.lessons.length} bài đã hoàn thành</p>
          </div>
        </div>
      </section>

      <section className="rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-[#0F172A]">Danh sách bài học</h2>
            <p className="mt-1 text-sm font-medium text-[#64748B]">Học theo thứ tự để hệ thống mở khóa đúng lộ trình.</p>
          </div>
        </div>
        <div className="space-y-3">
          {topic.lessons.map((lesson, index) => {
            const isDone = lesson.status === PROGRESS_STATUS.COMPLETED;
            const isInProgress = lesson.status === PROGRESS_STATUS.IN_PROGRESS;
            const isLocked = index > 0 && topic.lessons[index - 1]?.status !== PROGRESS_STATUS.COMPLETED;
            const Icon = isDone ? CheckCircle2 : isLocked ? Lock : isInProgress ? PlayCircle : Circle;

            return (
              <Link
                key={lesson.id}
                href={isLocked ? "#" : `/lessons/${lesson.slug}`}
                aria-disabled={isLocked}
                className={`group flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                  isLocked
                    ? "cursor-not-allowed border-[#E2E8F0] bg-[#F8FAFC] opacity-60"
                    : "border-[#E2E8F0] bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)]"
                }`}
              >
                <div className={`grid size-12 shrink-0 place-items-center rounded-2xl ${isDone ? "bg-emerald-50 text-[#10B981]" : isLocked ? "bg-slate-100 text-[#94A3B8]" : "bg-blue-50 text-[#2563EB]"}`}>
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-[#0F172A]">
                    {lesson.order}. {lesson.title}
                  </p>
                  {lesson.description ? <p className="mt-1 truncate text-sm font-medium text-[#64748B]">{lesson.description}</p> : null}
                </div>
                {isInProgress ? <span className="hidden rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-[#2563EB] sm:inline">Đang học</span> : null}
                {!isLocked ? <ArrowRight className="size-5 text-[#94A3B8] transition-colors group-hover:text-[#2563EB]" /> : null}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
