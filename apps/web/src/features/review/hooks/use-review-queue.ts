"use client";

import { useState, useEffect, useCallback } from "react";
import type { ReviewItemData, ApiResponse } from "@english-os/types";

export function useReviewQueue() {
  const [items, setItems] = useState<ReviewItemData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/review")
      .then((r) => r.json())
      .then((json: ApiResponse<ReviewItemData[]>) => {
        if (json.data) setItems(json.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const rate = useCallback(async (reviewItemId: string, quality: number) => {
    await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviewItemId, quality }),
    });
    setCurrentIndex((i) => i + 1);
  }, []);

  return {
    items,
    currentIndex,
    isLoading,
    isDone: !isLoading && currentIndex >= items.length,
    rate,
  };
}
