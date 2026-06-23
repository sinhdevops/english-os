"use client";

import { Mic, MicOff, RotateCcw, Send, Sparkles, Volume2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useAudioRecorder } from "@/features/speaking/hooks/use-audio-recorder";

export function SpeakingRoomView() {
  const { state, duration, audioUrl, error, start, stop, reset, uploadToR2 } = useAudioRecorder();

  const isRecording = state === "recording";
  const hasStopped = state === "stopped";
  const isUploading = state === "uploading";
  const formatDuration = (secs: number) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

  const handleSubmit = async () => {
    const key = await uploadToR2("demo-task-id");
    if (key) toast.success("Đã lưu bài speaking!");
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="rounded-[28px] border border-[#DBEAFE] bg-gradient-to-br from-white to-cyan-50 p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1 text-xs font-black text-[#06B6D4]">
              <Sparkles className="size-3.5 fill-current" />
              Speaking Room
            </div>
            <h1 className="mt-3 text-3xl font-black text-[#0F172A]">Luyện nói ngắn, phản xạ nhanh</h1>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[#64748B]">
              Ghi âm câu trả lời, nghe lại và nộp bài để lưu lịch sử luyện nói của bạn.
            </p>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
            <p className="text-sm font-bold text-[#64748B]">Thời lượng đề xuất</p>
            <p className="text-2xl font-black text-[#0F172A]">60 giây</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="rounded-[24px] bg-[#F8FAFC] p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-black text-[#2563EB]">
              <Volume2 className="size-4" />
              Đề bài
            </div>
            <p className="text-2xl font-black leading-9 text-[#0F172A]">Introduce yourself in 60 seconds.</p>
            <div className="mt-5 grid gap-3">
              {["Tên và nơi sống", "Công việc hoặc việc học", "Sở thích", "Mục tiêu học tiếng Anh"].map((hint) => (
                <div key={hint} className="rounded-2xl bg-white p-3 text-sm font-semibold text-[#334155]">{hint}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className={`grid size-28 place-items-center rounded-full transition-all ${isRecording ? "bg-red-50 text-red-500 ring-8 ring-red-100" : "bg-cyan-50 text-[#06B6D4]"}`}>
              {isRecording ? <MicOff className="size-11" /> : <Mic className="size-11" />}
            </div>
            <p className="mt-5 font-mono text-4xl font-black text-[#0F172A]">{formatDuration(duration)}</p>
            <p className="mt-1 text-sm font-medium text-[#64748B]">{isRecording ? "Đang ghi âm..." : hasStopped ? "Đã ghi âm xong" : "Sẵn sàng luyện nói"}</p>
            {error ? <p className="mt-3 text-sm font-bold text-red-500">{error}</p> : null}
          </div>

          {audioUrl ? <audio controls src={audioUrl} className="mt-5 w-full" /> : null}

          <div className="mt-6 grid gap-3">
            {state === "idle" ? (
              <Button onClick={start} className="h-12 rounded-2xl bg-[#2563EB] font-extrabold hover:bg-[#1D4ED8]">
                <Mic className="mr-2 size-4" />
                Bắt đầu ghi âm
              </Button>
            ) : null}
            {isRecording ? (
              <Button onClick={stop} variant="destructive" className="h-12 rounded-2xl font-extrabold">
                <MicOff className="mr-2 size-4" />
                Dừng lại
              </Button>
            ) : null}
            {hasStopped ? (
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={reset} className="h-12 rounded-2xl border-[#E2E8F0] font-extrabold">
                  <RotateCcw className="mr-2 size-4" />
                  Ghi lại
                </Button>
                <Button onClick={handleSubmit} disabled={isUploading} className="h-12 rounded-2xl bg-[#2563EB] font-extrabold hover:bg-[#1D4ED8]">
                  <Send className="mr-2 size-4" />
                  {isUploading ? "Đang lưu..." : "Nộp bài"}
                </Button>
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
