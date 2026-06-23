"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  Clock3,
  Laptop,
  LineChart,
  Play,
  Rocket,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const levels = [
  {
    title: "Zero - Bắt đầu từ con số 0",
    desc: "Mất gốc hoàn toàn - xây nền tảng phát âm, từ vựng, ngữ pháp và phản xạ cơ bản.",
    time: "4 tuần",
    lessons: "32 bài học",
    badge: "Nên bắt đầu",
  },
  {
    title: "A1 - Giao tiếp cơ bản",
    desc: "Nền móng giao tiếp - nói được câu đơn, giới thiệu bản thân, hỏi đáp hằng ngày.",
    time: "4 tuần",
    lessons: "40 bài học",
  },
  {
    title: "A2 - Sử dụng trong đời sống",
    desc: "Giao tiếp đơn giản hơn - kể chuyện quá khứ, nói kế hoạch, mô tả thói quen.",
    time: "4 tuần",
    lessons: "40 bài học",
  },
  {
    title: "B1 - Tiến tới trung cấp",
    desc: "Tiền IELTS - diễn đạt ý kiến, viết đoạn có cấu trúc, nghe hội thoại 2-3 phút.",
    time: "6 tuần",
    lessons: "60 bài học",
  },
  {
    title: "B2 - Tăng tốc bứt phá",
    desc: "IELTS Foundation 5.5-6.5 - làm được đề IELTS, viết Task 1 và Task 2 đúng cấu trúc.",
    time: "8 tuần",
    lessons: "80 bài học",
  },
  {
    title: "IELTS 7.0 - Vững vàng đạt mục tiêu",
    desc: "IELTS 7.0-8.0 - lập luận sâu, dùng collocation chính xác, nghe được paraphrase.",
    time: "8 tuần",
    lessons: "80 bài học",
  },
  {
    title: "IELTS 9.0 - Chinh phục đỉnh cao",
    desc: "IELTS 8.5-9.0 - làm chủ bài thi, viết band 8-9, nói fluency cao, nghe tốc độ tự nhiên.",
    time: "8 tuần",
    lessons: "80 bài học",
  },
];

const stats = [
  { icon: Trophy, value: "7", label: "cấp độ" },
  { icon: BookOpenCheck, value: "320+", label: "bài học" },
  { icon: Target, value: "4", label: "kỹ năng" },
  { icon: LineChart, value: "Theo dõi", label: "tiến độ" },
];

const chips = [
  { icon: BookOpenCheck, text: "Lộ trình cá nhân hóa" },
  { icon: Clock3, text: "Theo dõi tiến độ" },
  { icon: Laptop, text: "Học mọi lúc, mọi nơi" },
];

export function RoadmapView() {
  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0F172A]">
      <section className="relative overflow-hidden border-b border-[#DCEBFF] bg-[linear-gradient(180deg,#F9FCFF_0%,#EEF6FF_100%)] pt-[72px]">
        <div className="absolute left-[-90px] top-40 hidden size-80 rounded-full bg-blue-100/70 lg:block" />
        <div className="absolute right-14 top-24 hidden h-72 w-56 lg:block">
          <div className="absolute bottom-0 right-0 h-44 w-64 rounded-t-[90px] bg-blue-100" />
          <div className="absolute bottom-0 right-16 h-36 w-44 rotate-45 rounded-3xl bg-blue-200/80" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-0 flex flex-col items-center"
          >
            <Rocket className="size-20 fill-[#2563EB] text-[#2563EB]" />
            <div className="h-28 w-14 rounded-b-full bg-gradient-to-b from-blue-300/60 to-transparent blur-sm" />
          </motion.div>
        </div>

        <div className="relative mx-auto grid max-w-[1180px] gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div className="fade-up-section">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-white px-4 py-2 text-sm font-extrabold text-[#0F172A] shadow-[0_8px_24px_rgba(37,99,235,0.12)]">
              <Rocket className="size-4 fill-[#F59E0B] text-[#F59E0B]" />
              Từ mất gốc đến IELTS 9.0
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-[56px]">
              Lộ trình học tiếng Anh rõ ràng, dễ theo, <span className="text-[#2563EB]">dễ lên trình</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#64748B]">
              Lộ trình 7 cấp độ được thiết kế từ Zero đến IELTS 9.0, bám sát chuẩn quốc tế, giúp bạn xây nền tảng vững chắc và chinh phục mọi mục tiêu.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-xl bg-[#2563EB] px-7 font-extrabold shadow-[0_12px_30px_rgba(37,99,235,0.25)] hover:bg-[#1D4ED8]">
                <Link href="/register">
                  <BarChart3 className="mr-2 size-4" />
                  Kiểm tra trình độ
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-xl border-[#CBD5E1] bg-white px-7 font-extrabold text-[#2563EB] shadow-sm hover:bg-blue-50">
                <Link href="/register">
                  <Play className="mr-2 size-4 fill-current" />
                  Bắt đầu từ Zero
                </Link>
              </Button>
            </div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-[#475569] sm:grid-cols-3">
              {chips.map((chip) => (
                <div key={chip.text} className="flex items-center gap-2">
                  <chip.icon className="size-4 text-[#2563EB]" />
                  {chip.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="fade-up-section rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-[0_24px_70px_rgba(37,99,235,0.16)]">
            <div className="grid gap-3 rounded-2xl border border-[#E2E8F0] p-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="flex items-center gap-3 sm:border-r sm:border-[#E2E8F0] sm:last:border-r-0">
                  <div className="grid size-11 shrink-0 place-items-center rounded-full bg-blue-50 text-[#2563EB]">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-[#2563EB]">{item.value}</p>
                    <p className="text-xs font-semibold text-[#64748B]">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-[#E2E8F0] p-5">
              <div className="flex items-center justify-between">
                <p className="font-black">Tiến độ của bạn</p>
                <p className="text-xs font-semibold text-[#64748B]">Cấp độ hiện tại: A2</p>
              </div>
              <div className="mt-7 grid grid-cols-7 items-start gap-2">
                {["Zero", "A1", "A2", "B1", "B2", "IELTS 7.0", "IELTS 9.0"].map((label, index) => {
                  const done = index < 2;
                  const active = index === 2;
                  return (
                    <div key={label} className="relative text-center">
                      {index > 0 ? <div className="absolute left-[-50%] top-4 h-0.5 w-full bg-[#E2E8F0]" /> : null}
                      <div className={`relative z-10 mx-auto grid size-8 place-items-center rounded-full text-xs font-black ${done || active ? "bg-[#2563EB] text-white" : "border border-[#CBD5E1] bg-white text-[#64748B]"}`}>
                        {done ? <Check className="size-4" /> : active ? "3" : index + 1}
                      </div>
                      <p className={`mt-3 text-xs font-bold ${active ? "text-[#0F172A]" : "text-[#64748B]"}`}>{label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-2 flex-1 rounded-full bg-[#E2E8F0]">
                  <div className="h-full w-[42%] rounded-full bg-[#2563EB]" />
                </div>
                <span className="text-sm font-bold text-[#64748B]">42% hoàn thành</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-6 sm:px-6">
        <div className="mb-5 text-center">
          <div className="flex items-center justify-center gap-4 text-[#2563EB]">
            <span className="h-px w-28 bg-gradient-to-r from-transparent to-[#93C5FD]" />
            <Sparkles className="size-5 fill-current" />
            <h2 className="text-3xl font-black text-[#0F172A]">Lộ trình học</h2>
            <Sparkles className="size-5 fill-current" />
            <span className="h-px w-28 bg-gradient-to-l from-transparent to-[#93C5FD]" />
          </div>
          <p className="mt-2 text-sm font-medium text-[#64748B]">Từ con số 0 đến IELTS 9.0 - từng bước một, vững chắc mỗi ngày.</p>
        </div>

        <div className="mx-auto max-w-[900px]">
          <div className="relative pl-14">
            <div className="absolute left-[27px] top-4 h-[calc(100%-2rem)] w-0.5 bg-[#BFDBFE]" />
            <div className="space-y-3">
              {levels.map((level, index) => (
                <motion.div key={level.title} className="relative">
                  <div className="absolute -left-14 top-3 grid size-9 place-items-center rounded-full bg-[#2563EB] text-sm font-black text-white shadow-[0_8px_20px_rgba(37,99,235,0.24)]">
                    {index + 1}
                  </div>
                  <div className={`grid items-center gap-4 rounded-xl border bg-white px-4 py-3 shadow-[0_8px_26px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.12)] sm:grid-cols-[1fr_auto_34px] ${index === 0 ? "border-[#2563EB] ring-1 ring-[#2563EB]" : "border-[#E2E8F0]"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-black text-[#0F172A]">{level.title}</h3>
                        {level.badge ? <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 text-[10px] font-black uppercase text-[#F59E0B]">{level.badge}</span> : null}
                      </div>
                      <p className="mt-1 text-sm font-medium leading-6 text-[#64748B]">{level.desc}</p>
                    </div>
                    <div className="text-sm font-semibold text-[#64748B]">
                      {level.time}
                      <span className="mx-2">-</span>
                      {level.lessons}
                    </div>
                    <Button asChild size="icon" variant="ghost" className="size-9 rounded-full bg-blue-50 text-[#2563EB] hover:bg-blue-100">
                      <Link href="/register" aria-label={`Bắt đầu ${level.title}`}>
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0_14px_40px_rgba(37,99,235,0.08)] sm:grid-cols-[80px_1fr_auto]">
            <div className="grid size-16 place-items-center rounded-full bg-blue-50 text-[#2563EB]">
              <Target className="size-9" />
            </div>
            <div>
              <h3 className="text-xl font-black">Không biết bắt đầu từ đâu?</h3>
              <p className="mt-1 text-sm font-medium text-[#64748B]">Làm bài kiểm tra trình độ để chúng tôi gợi ý lộ trình phù hợp nhất cho bạn.</p>
            </div>
            <Button asChild className="h-12 rounded-xl bg-[#2563EB] px-7 font-extrabold hover:bg-[#1D4ED8]">
              <Link href="/register">
                Kiểm tra trình độ miễn phí
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
