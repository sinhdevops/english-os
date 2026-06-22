"use client";

import { useState, useRef, useCallback } from "react";

type RecorderState = "idle" | "recording" | "stopped" | "uploading" | "done" | "error";

export function useAudioRecorder() {
  const [state, setState] = useState<RecorderState>("idle");
  const [duration, setDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

      chunksRef.current = [];
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrl(url);
        setState("stopped");
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorder.start(100);
      setState("recording");

      let secs = 0;
      timerRef.current = setInterval(() => {
        secs++;
        setDuration(secs);
      }, 1000);
    } catch {
      setError("Không thể truy cập microphone. Vui lòng cấp quyền.");
      setState("error");
    }
  }, []);

  const stop = useCallback(() => {
    mediaRecorderRef.current?.stop();
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    setDuration(0);
    setError(null);
    setState("idle");
  }, [audioUrl]);

  const uploadToR2 = useCallback(async (speakingTaskId: string): Promise<string | null> => {
    if (!audioBlob) return null;
    setState("uploading");

    try {
      const presignRes = await fetch("/api/uploads/audio/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: `recording.webm`,
          contentType: "audio/webm",
          fileSize: audioBlob.size,
          purpose: "speaking_submission",
        }),
      });
      const presignJson = await presignRes.json();
      if (presignJson.error) throw new Error(presignJson.error.message);

      const { uploadUrl, objectKey } = presignJson.data;

      await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": "audio/webm" },
        body: audioBlob,
      });

      const completeRes = await fetch("/api/uploads/audio/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objectKey,
          speakingTaskId,
          durationSeconds: duration,
          mimeType: "audio/webm",
          fileSizeBytes: audioBlob.size,
        }),
      });
      const completeJson = await completeRes.json();
      if (completeJson.error) throw new Error(completeJson.error.message);

      setState("done");
      return objectKey;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload thất bại");
      setState("error");
      return null;
    }
  }, [audioBlob, duration]);

  return { state, duration, audioUrl, error, start, stop, reset, uploadToR2 };
}
