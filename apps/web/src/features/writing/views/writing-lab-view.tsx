"use client";

import { CheckCircle2, PenLine, Send, Sparkles, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWritingDraft } from "@/features/writing/hooks/use-writing-draft";

const DEMO_TASK_ID = "demo-task-id";
const hints = ["My name is ...", "I live in ...", "I work as ...", "My hobby is ...", "I am learning English to ..."];

export function WritingLabView() {
  const { content, setContent, wordCount, isSubmitting, submitted, submit } = useWritingDraft(DEMO_TASK_ID);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="rounded-[28px] border border-[#FEF3C7] bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-[#F59E0B]">
          <Sparkles className="size-3.5 fill-current" />
          Writing Lab
        </div>
        <h1 className="mt-3 text-3xl font-black text-[#0F172A]">Viết rõ ý, đúng cấu trúc, dễ sửa</h1>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[#64748B]">
          Bắt đầu từ câu đơn giản. Theo dõi số từ, dùng gợi ý và nộp bài để lưu lại quá trình luyện viết.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-[#F59E0B]">
              <PenLine className="size-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#64748B]">Đề bài</p>
              <p className="font-black text-[#0F172A]">5 câu giới thiệu bản thân</p>
            </div>
          </div>
          <p className="rounded-2xl bg-[#F8FAFC] p-4 text-sm font-medium leading-7 text-[#334155]">
            Write 5 sentences about yourself. Tell us your name, where you live, your job, your hobby, and your English learning goal.
          </p>

          <div className="mt-5">
            <p className="mb-3 text-sm font-black text-[#0F172A]">Gợi ý câu mẫu</p>
            <div className="space-y-2">
              {hints.map((hint) => (
                <div key={hint} className="flex items-center gap-2 rounded-2xl bg-blue-50 p-3 text-sm font-semibold text-[#2563EB]">
                  <CheckCircle2 className="size-4" />
                  {hint}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-[520px] flex-col rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-black text-[#64748B]">
              <Type className="size-4" />
              {wordCount} từ
            </div>
            {submitted ? <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-[#10B981]">Đã lưu</span> : null}
          </div>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Viết bài ở đây..."
            disabled={submitted}
            className="min-h-80 flex-1 resize-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-sm font-medium leading-7 text-[#0F172A] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-blue-200 focus:bg-white"
          />
          <Button onClick={() => submit()} disabled={isSubmitting || submitted} className="mt-4 h-12 w-full rounded-2xl bg-[#2563EB] font-extrabold hover:bg-[#1D4ED8]">
            <Send className="mr-2 size-4" />
            {isSubmitting ? "Đang lưu..." : submitted ? "Đã nộp" : "Nộp bài"}
          </Button>
        </section>
      </div>
    </div>
  );
}
