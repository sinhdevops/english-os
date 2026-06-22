"use client";

import { useWritingDraft } from "@/features/writing/hooks/use-writing-draft";
import { Button } from "@/components/ui/button";
import { Send, Type } from "lucide-react";

const DEMO_TASK_ID = "demo-task-id";

export function WritingLabView() {
  const { content, setContent, wordCount, isSubmitting, submitted, submit } = useWritingDraft(DEMO_TASK_ID);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-text">Writing Lab</h1>
        <p className="text-brand-muted text-sm mt-1">Luyện viết tiếng Anh</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left: prompt + hints */}
        <div className="glass-card rounded-2xl p-5 space-y-4">
          <div>
            <p className="text-xs text-brand-muted mb-1">Đề bài</p>
            <p className="text-brand-text text-sm">
              Write 5 sentences about yourself. Tell us your name, where you live, your job, your hobby, and your English learning goal.
            </p>
          </div>
          <div>
            <p className="text-xs text-brand-muted mb-2">Gợi ý</p>
            <ul className="space-y-1.5">
              {["My name is ...", "I live in ...", "I work as ...", "My hobby is ...", "I am learning English to ..."].map((hint, i) => (
                <li key={i} className="text-xs text-brand-primary/80 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand-primary/50 shrink-0" />
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: editor */}
        <div className="glass-card rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Type className="size-4 text-brand-muted" />
              <span className="text-xs text-brand-muted">{wordCount} từ</span>
            </div>
            {submitted && <span className="text-xs text-green-400">✓ Đã lưu</span>}
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Viết bài ở đây..."
            disabled={submitted}
            className="flex-1 min-h-48 resize-none bg-transparent text-brand-text text-sm outline-none placeholder:text-brand-muted/50"
          />
          <Button onClick={() => submit()} disabled={isSubmitting || submitted} className="w-full">
            <Send className="size-4 mr-2" />
            {isSubmitting ? "Đang lưu..." : submitted ? "Đã nộp" : "Nộp bài"}
          </Button>
        </div>
      </div>
    </div>
  );
}
