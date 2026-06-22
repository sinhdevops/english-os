"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import type { ApiResponse } from "@english-os/types";

export function useWritingDraft(writingTaskId: string) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  const submit = useCallback(async (selfScore?: number) => {
    if (!content.trim()) {
      toast.error("Hãy viết nội dung trước khi nộp bài.");
      return;
    }
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/practice/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ writingTaskId, content, selfScore }),
      });
      const json: ApiResponse<unknown> = await res.json();
      if (json.error) throw new Error(json.error.message);

      toast.success("Bài viết đã được lưu!");
      setSubmitted(true);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Lưu thất bại.");
    } finally {
      setIsSubmitting(false);
    }
  }, [content, writingTaskId]);

  return { content, setContent, wordCount, isSubmitting, submitted, submit };
}
