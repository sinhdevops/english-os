"use client";

import Link from "next/link";
import { ArrowRight, Headphones, Mic, BookOpen, PenLine, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Headphones, title: "Listening", desc: "Học qua các file nghe thực tế, bản tin, bài hội thoại thông dụng.", color: "text-blue-500 bg-blue-500/10" },
  { icon: Mic, title: "Speaking Room", desc: "Luyện phát âm chuẩn xác, phản xạ hội thoại với hệ thống ghi âm.", color: "text-cyan-500 bg-cyan-500/10" },
  { icon: BookOpen, title: "Reading & Vocab", desc: "Tích hợp Spaced Repetition (ôn tập ngắt quãng) ghi nhớ từ vựng vĩnh viễn.", color: "text-emerald-500 bg-emerald-500/10" },
  { icon: PenLine, title: "Writing Lab", desc: "Luyện viết đoạn văn, bài luận theo chuẩn format thi quốc tế.", color: "text-violet-500 bg-violet-500/10" },
];

export function LandingView() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-30 dark:opacity-20 z-0">
        <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/25 blur-[150px]" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-6"
        >
          <Sparkles className="size-3.5" />
          🇬🇧 English Operating System
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl leading-tight"
        >
          Từ mất gốc đến{" "}
          <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
            IELTS 7.0
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed"
        >
          Học theo chủ đề thực tiễn. Luyện toàn diện Nghe - Nói - Đọc - Viết mỗi ngày với công nghệ ôn tập thông minh Spaced Repetition.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-xl px-8 font-semibold shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto">
            <Link href="/register" className="flex items-center justify-center gap-2">
              Bắt đầu miễn phí
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-xl px-8 font-semibold hover:bg-secondary transition-all w-full sm:w-auto">
            <Link href="/roadmap">Xem lộ trình học</Link>
          </Button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative mx-auto max-w-5xl px-6 py-16 z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-start text-left border border-border/40 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-xl mb-4 ${feat.color} group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social proof/Stats */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center border-t border-border/30 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-3xl font-black text-primary">50+</h4>
            <p className="text-sm text-muted-foreground mt-1">Chủ đề thực tế</p>
          </div>
          <div>
            <h4 className="text-3xl font-black text-accent">1,000+</h4>
            <p className="text-sm text-muted-foreground mt-1">Từ vựng & Mẫu câu</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-3xl font-black text-amber-500 flex items-center justify-center gap-1">
              <Flame className="size-6 fill-amber-500" /> SM-2
            </h4>
            <p className="text-sm text-muted-foreground mt-1">Ôn tập ngắt quãng thông minh</p>
          </div>
        </div>
      </section>
    </div>
  );
}
