import Image from "next/image";
import Link from "next/link";
import type { TopicSummary } from "@english-os/types";
import { ArrowRight, BookOpen, CheckCircle2, Layers3 } from "lucide-react";

type Props = { topic: TopicSummary };

export function TopicCard({ topic }: Props) {
  return (
    <Link href={`/topics/${topic.slug}`} className="group flex min-h-64 flex-col overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]">
      <div className="relative h-28 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
        {topic.thumbnailUrl ? (
          <Image src={topic.thumbnailUrl} alt={topic.title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="size-12 text-[#2563EB]" />
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#2563EB] shadow-sm">
          {topic.levelName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black leading-6 text-[#0F172A] transition-colors group-hover:text-[#2563EB]">{topic.title}</h3>
        {topic.description ? <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-[#64748B]">{topic.description}</p> : null}

        <div className="mt-auto pt-5">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#64748B]">
              <Layers3 className="size-4" />
              {topic.lessonCount} bài học
            </span>
            {topic.progress > 0 ? (
              <span className="inline-flex items-center gap-1 font-black text-[#10B981]">
                <CheckCircle2 className="size-4" />
                {topic.progress}%
              </span>
            ) : (
              <ArrowRight className="size-5 text-[#94A3B8] transition-colors group-hover:text-[#2563EB]" />
            )}
          </div>
          <div className="h-2 rounded-full bg-[#E2E8F0]">
            <div className="h-full rounded-full bg-[#2563EB]" style={{ width: `${topic.progress}%` }} />
          </div>
        </div>
      </div>
    </Link>
  );
}
