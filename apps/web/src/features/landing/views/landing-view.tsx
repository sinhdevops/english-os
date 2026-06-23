"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  Headphones,
  LineChart,
  Mic,
  PenLine,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const trustChips = [
  { icon: Clock3, title: "15 phút/ngày", desc: "Dễ duy trì" },
  { icon: Headphones, title: "4 kỹ năng", desc: "Học song song" },
  { icon: BookOpen, title: "1.000+ từ vựng", desc: "Có ôn tập thông minh" },
  { icon: Brain, title: "SRS thông minh", desc: "Ôn đúng lúc, nhớ lâu" },
];

const problems = [
  { icon: Sparkles, text: "Không biết bắt đầu từ đâu", color: "text-orange-500" },
  { icon: ShieldCheck, text: "Học từ vựng rời rạc", color: "text-blue-500" },
  { icon: Headphones, text: "Nghe không kịp, khó hiểu", color: "text-cyan-500" },
  { icon: Mic, text: "Sợ nói sai, không dám nói", color: "text-amber-500" },
  { icon: PenLine, text: "Viết câu lủng củng", color: "text-sky-500" },
  { icon: Brain, text: "Học IELTS nhưng mất gốc ngữ pháp", color: "text-violet-500" },
];

const skills = [
  {
    icon: Headphones,
    title: "Listening Core",
    level: "A0 -> B2",
    desc: "Nghe từ câu ngắn, hội thoại đời sống đến bài nghe IELTS.",
    progress: 65,
    color: "#2563EB",
    bg: "bg-blue-50",
    items: ["Nghe chậm", "Shadowing", "Quiz sau nghe", "Từ vựng trong bài"],
  },
  {
    icon: Mic,
    title: "Speaking Room",
    level: "A1 -> IELTS Speaking",
    desc: "Luyện phản xạ, phát âm và trả lời theo chủ đề thực tế.",
    progress: 48,
    color: "#06B6D4",
    bg: "bg-cyan-50",
    items: ["Câu hỏi mẫu", "Câu trả lời gợi ý", "Ghi âm luyện nói", "Mẫu câu thay thế"],
  },
  {
    icon: BookOpen,
    title: "Reading & Vocab",
    level: "A0 -> Academic",
    desc: "Đọc bài theo chủ đề, học từ vựng theo ngữ cảnh và ôn bằng SRS.",
    progress: 70,
    color: "#10B981",
    bg: "bg-emerald-50",
    items: ["Flashcard", "Collocation", "Example sentence", "Review thông minh"],
  },
  {
    icon: PenLine,
    title: "Writing Lab",
    level: "Sentence -> Essay",
    desc: "Luyện viết từ câu đơn đến đoạn và IELTS Task 1/2.",
    progress: 55,
    color: "#8B5CF6",
    bg: "bg-violet-50",
    items: ["Sửa lỗi câu", "Cấu trúc bài mẫu", "Từ nối", "Idea bank"],
  },
];

const roadmap = [
  { icon: Headphones, step: "1", title: "Foundation", desc: "Phát âm, từ vựng nền, ngữ pháp cơ bản.", level: "A0 -> A1", color: "#2563EB" },
  { icon: Headphones, step: "2", title: "Daily English", desc: "Nghe nói tình huống thực tế hằng ngày.", level: "A1 -> A2", color: "#06B6D4" },
  { icon: Brain, step: "3", title: "Core Skills", desc: "Đọc hiểu, viết câu, nghe hiểu, nói phản xạ.", level: "A2 -> B1", color: "#10B981" },
  { icon: Target, step: "4", title: "IELTS Builder", desc: "Làm quen format IELTS 4 kỹ năng.", level: "B1 -> B2", color: "#F59E0B" },
  { icon: Trophy, step: "5", title: "IELTS 7.0 Sprint", desc: "Luyện đề, phân tích lỗi, cải thiện chiến thuật.", level: "B2 -> IELTS 7.0", color: "#8B5CF6" },
];

const flow = [
  { icon: BookOpen, text: "Học bài mới theo chủ đề" },
  { icon: Headphones, text: "Luyện nghe hoặc nói" },
  { icon: CheckCircle2, text: "Làm quiz nhanh" },
  { icon: RotateCcw, text: "Ôn lại từ vựng bằng SRS" },
  { icon: LineChart, text: "Xem tiến độ và lỗi cần sửa" },
];

const stats = [
  { value: "50+", label: "Chủ đề thực tế", desc: "Gần gũi cuộc sống" },
  { value: "1.000+", label: "Từ vựng và mẫu câu", desc: "Có ví dụ và phát âm" },
  { value: "4", label: "Kỹ năng học song song", desc: "Nghe - Nói - Đọc - Viết" },
  { value: "15 phút/ngày", label: "Đủ để tạo thói quen", desc: "và thấy tiến bộ mỗi ngày" },
];

const todayPlan = [
  { icon: Headphones, title: "Listening", desc: "12 phút - Bài nghe hội thoại", progress: 75, color: "#2563EB" },
  { icon: Mic, title: "Speaking", desc: "8 câu - Luyện nói phản xạ", progress: 60, color: "#10B981" },
  { icon: BookOpen, title: "Vocabulary", desc: "20 từ - Ôn tập bằng flashcard", progress: 60, color: "#8B5CF6" },
  { icon: PenLine, title: "Writing", desc: "1 đoạn - Viết câu chủ đề", progress: 40, color: "#F59E0B" },
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`fade-up-section mx-auto w-full max-w-7xl px-5 sm:px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-[28px] border border-[#E2E8F0] bg-white p-3 shadow-[0_24px_70px_rgba(37,99,235,0.16)] sm:p-4"
    >
      <div className="absolute -right-7 -top-7 h-28 w-28 bg-[radial-gradient(circle,#BFDBFE_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-80" />
      <div className="relative grid gap-3 lg:grid-cols-[1fr_164px]">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-extrabold text-[#0F172A]">Hôm nay bạn sẽ học</h3>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#2563EB]">68%</span>
          </div>
          <div className="space-y-3">
            {todayPlan.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: `${item.color}14`, color: item.color }}>
                  <item.icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-sm font-extrabold text-[#0F172A]">{item.title}</p>
                    <button className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#DBEAFE] text-[#2563EB]" aria-label={`Bắt đầu ${item.title}`}>
                      <Play className="size-4 fill-current" />
                    </button>
                  </div>
                  <p className="truncate text-xs font-medium text-[#64748B]">{item.desc}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]">
                      <div className="h-full rounded-full" style={{ width: `${item.progress}%`, backgroundColor: item.color }} />
                    </div>
                    <span className="text-xs font-bold text-[#64748B]">{item.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <div className="mb-2 flex items-center justify-between text-sm font-extrabold text-[#0F172A]">
              <span>Tiến độ hôm nay</span>
              <span className="text-[#2563EB]">68%</span>
            </div>
            <div className="h-2 rounded-full bg-[#E2E8F0]">
              <div className="h-full w-[68%] rounded-full bg-[#2563EB]" />
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-blue-50 to-white p-4">
            <p className="text-xs font-extrabold text-[#0F172A]">Level hiện tại</p>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <p className="text-3xl font-black text-[#0F172A]">A1</p>
                <p className="text-xs font-semibold text-[#2563EB]">Elementary</p>
              </div>
              <BarChart3 className="size-10 text-[#2563EB]" />
            </div>
          </div>
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4">
            <p className="text-xs font-extrabold text-[#2563EB]">Mục tiêu</p>
            <p className="mt-2 text-2xl font-black text-[#0F172A]">IELTS 7.0</p>
            <p className="text-xs font-semibold text-[#64748B]">180 ngày còn lại</p>
          </div>
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4">
            <p className="text-xs font-extrabold text-[#0F172A]">Streak</p>
            <p className="mt-2 flex items-center gap-2 text-lg font-black text-[#0F172A]">
              <Flame className="size-5 fill-[#F59E0B] text-[#F59E0B]" /> 7 ngày
            </p>
            <p className="text-xs font-semibold text-[#64748B]">Học liên tục</p>
          </div>
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-4 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-[#0F172A]">Từ cần ôn lại</p>
                <p className="mt-2 text-2xl font-black text-[#0F172A]">18 từ</p>
                <p className="text-xs font-semibold text-[#64748B]">Sắp quên</p>
              </div>
              <div className="grid size-14 place-items-center rounded-full border-[6px] border-blue-100 border-t-[#2563EB] text-xs font-black text-[#2563EB]">
                60%
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LandingView() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7FAFF] text-[#0F172A]">
      <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-8 pt-28 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:pb-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_70%)]" />
        <motion.div className="fade-up-section">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-[#2563EB]">
            <Sparkles className="size-4" />
            English OS cho người Việt mất gốc
          </div>
          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.05] tracking-normal text-[#0F172A] sm:text-5xl lg:text-[64px]">
            Từ mất gốc đến <span className="text-[#2563EB]">IELTS 7.0.</span>
            <span className="block text-[0.58em] font-extrabold leading-tight sm:text-[0.48em]">Có lộ trình. Có tiến bộ mỗi ngày.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[#64748B] sm:text-lg">
            English OS giúp bạn học Listening, Speaking, Reading, Writing theo chủ đề thực tế, có ôn tập ngắt quãng và theo dõi tiến độ rõ ràng.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-2xl bg-[#2563EB] px-7 font-extrabold shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition-all hover:bg-[#1D4ED8] hover:shadow-[0_16px_36px_rgba(37,99,235,0.34)] sm:w-auto">
              <Link href="/register">
                Kiểm tra trình độ miễn phí
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-2xl border-[#CBD5E1] bg-white px-7 font-extrabold text-[#0F172A] hover:bg-blue-50 sm:w-auto">
              <Link href="/roadmap">Xem lộ trình học</Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustChips.map((chip) => (
              <div key={chip.title} className="flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-sm">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2563EB]">
                  <chip.icon className="size-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0F172A]">{chip.title}</p>
                  <p className="text-[11px] font-semibold text-[#64748B]">{chip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div className="fade-up-section [animation-delay:120ms]">
          <DashboardMockup />
        </motion.div>
      </section>

      <Section className="py-4">
        <div className="rounded-[24px] border border-[#E2E8F0] bg-white/80 p-6 text-center shadow-[0_16px_50px_rgba(37,99,235,0.08)] sm:p-8">
          <h2 className="text-2xl font-black sm:text-3xl">Bạn học tiếng Anh mãi chưa lên vì?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {problems.map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-left lg:block lg:text-center">
                <div className={`mx-auto grid size-11 shrink-0 place-items-center rounded-2xl border border-[#E2E8F0] bg-white ${item.color}`}>
                  <item.icon className="size-5" />
                </div>
                <p className="mt-0 text-sm font-extrabold leading-5 text-[#0F172A] lg:mt-3">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base font-extrabold text-[#2563EB]">
            English OS chia nhỏ toàn bộ quá trình học thành từng nhiệm vụ mỗi ngày. Học đúng - đủ - đều, bạn sẽ thấy tiến bộ rõ ràng!
          </p>
        </div>
      </Section>

      <Section className="py-6" id="skills">
        <h2 className="text-center text-3xl font-black">Hệ thống 4 kỹ năng</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              whileHover={{ y: -6 }}
              className="fade-up-section rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-[0_10px_34px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_18px_44px_rgba(37,99,235,0.12)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`grid size-14 shrink-0 place-items-center rounded-3xl ${skill.bg}`} style={{ color: skill.color }}>
                  <skill.icon className="size-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black">{skill.title}</h3>
                  <p className="text-sm font-extrabold" style={{ color: skill.color }}>{skill.level}</p>
                </div>
              </div>
              <p className="mt-4 min-h-16 text-sm font-medium leading-6 text-[#334155]">{skill.desc}</p>
              <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#64748B]">
                <span>Tiến độ của bạn</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#E2E8F0]">
                <div className="h-full rounded-full" style={{ width: `${skill.progress}%`, backgroundColor: skill.color }} />
              </div>
              <ul className="mt-4 space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#334155]">
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-5 h-11 w-full rounded-xl border-[#DBEAFE] bg-white font-extrabold text-[#2563EB] hover:bg-blue-50">
                <Link href="/register">
                  Bắt đầu học <ArrowRight className="ml-auto size-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-6">
        <h2 className="text-center text-3xl font-black">Lộ trình từ mất gốc đến IELTS 7.0</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {roadmap.map((item) => (
            <div key={item.title} className="relative rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-sm md:border-0 md:bg-transparent md:shadow-none">
              <div className="mx-auto grid size-16 place-items-center rounded-full border bg-white" style={{ borderColor: `${item.color}66`, color: item.color }}>
                <item.icon className="size-7" />
              </div>
              <div className="mt-4 flex items-center gap-2 md:justify-center">
                <span className="grid size-6 place-items-center rounded-full text-xs font-black text-white" style={{ backgroundColor: item.color }}>{item.step}</span>
                <h3 className="font-black">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm font-medium leading-6 text-[#334155] md:text-center">{item.desc}</p>
              <p className="mt-2 text-sm font-black md:text-center" style={{ color: item.color }}>{item.level}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-6">
        <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <h2 className="text-center text-3xl font-black">Quy trình học mỗi ngày chỉ 20-30 phút</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item.text} className="relative flex items-center gap-4 rounded-2xl bg-[#F8FAFC] p-4 md:block md:bg-transparent md:text-center">
                <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue-50 text-[#2563EB]">
                  <item.icon className="size-7" />
                </div>
                <p className="mt-0 text-sm font-extrabold leading-5 md:mt-3">{index + 1}. {item.text}</p>
                {index < flow.length - 1 ? <ChevronRight className="absolute right-[-18px] top-7 hidden size-7 text-[#CBD5E1] md:block" /> : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-4">
        <div className="grid gap-4 rounded-[24px] border border-[#D7E8FF] bg-blue-50 p-6 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="md:border-r md:border-blue-200 last:md:border-r-0">
              <p className="text-3xl font-black text-[#2563EB]">{stat.value}</p>
              <p className="mt-1 text-sm font-extrabold text-[#0F172A]">{stat.label}</p>
              <p className="text-sm font-medium text-[#64748B]">{stat.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid items-center gap-6 overflow-hidden rounded-[24px] bg-[#063B91] p-6 text-white shadow-[0_20px_54px_rgba(3,47,118,0.25)] md:grid-cols-[170px_1fr_auto] md:p-8">
          <div className="relative mx-auto grid size-28 place-items-center rounded-full bg-white/10">
            <Zap className="size-16 fill-white text-white" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black">Sẵn sàng bắt đầu hành trình của bạn?</h2>
            <p className="mt-2 max-w-2xl font-medium leading-7 text-blue-100">
              Kiểm tra trình độ miễn phí để nhận lộ trình học cá nhân hóa phù hợp với mục tiêu IELTS 7.0 của bạn.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Button asChild className="h-12 rounded-2xl bg-white px-6 font-extrabold text-[#2563EB] hover:bg-blue-50">
              <Link href="/register">Kiểm tra trình độ miễn phí</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-2xl border-white/35 bg-transparent px-6 font-extrabold text-white hover:bg-white/10 hover:text-white">
              <Link href="/roadmap">Xem lộ trình học</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
