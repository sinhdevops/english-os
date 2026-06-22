"use client";

import { Mic, MicOff, RotateCcw, Send } from "lucide-react";
import { useAudioRecorder } from "@/features/speaking/hooks/use-audio-recorder";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SpeakingRoomView() {
  const { state, duration, audioUrl, error, start, stop, reset, uploadToR2 } = useAudioRecorder();

  const isRecording = state === "recording";
  const hasStopped = state === "stopped";
  const isUploading = state === "uploading";

  const formatDuration = (secs: number) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

  const handleSubmit = async () => {
    const key = await uploadToR2("demo-task-id"); // sẽ được replace khi có task thật
    if (key) toast.success("Đã lưu bài speaking!");
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-text">Speaking Room</h1>
        <p className="text-brand-muted text-sm mt-1">Ghi âm và luyện nói tiếng Anh</p>
      </div>

      <div className="glass-card rounded-2xl p-6 space-y-6">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-xs text-brand-muted mb-1">Đề bài</p>
          <p className="text-brand-text">Introduce yourself in 60 seconds.</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className={`flex size-20 items-center justify-center rounded-full transition-all duration-300 ${
            isRecording ? "bg-red-500/20 ring-4 ring-red-500/30 animate-pulse" : "bg-brand-primary/10"
          }`}>
            {isRecording ? <MicOff className="size-8 text-red-400" /> : <Mic className="size-8 text-brand-primary" />}
          </div>

          {(isRecording || hasStopped) && (
            <span className="font-mono text-xl text-brand-text">{formatDuration(duration)}</span>
          )}

          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>

        {audioUrl && (
          <audio controls src={audioUrl} className="w-full" />
        )}

        <div className="flex gap-3 justify-center">
          {state === "idle" && (
            <Button onClick={start} size="lg">
              <Mic className="size-4 mr-2" />
              Bắt đầu ghi âm
            </Button>
          )}
          {isRecording && (
            <Button onClick={stop} variant="destructive" size="lg">
              <MicOff className="size-4 mr-2" />
              Dừng lại
            </Button>
          )}
          {hasStopped && (
            <>
              <Button variant="ghost" onClick={reset}>
                <RotateCcw className="size-4 mr-1" />
                Ghi lại
              </Button>
              <Button onClick={handleSubmit} disabled={isUploading}>
                <Send className="size-4 mr-1" />
                {isUploading ? "Đang lưu..." : "Nộp bài"}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
