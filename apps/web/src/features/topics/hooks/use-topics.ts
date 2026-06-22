"use client";

import { useState, useEffect, useMemo } from "react";
import type { TopicSummary, ApiResponse } from "@english-os/types";

type Filter = { level: string };

export function useTopics() {
  const [topics, setTopics] = useState<TopicSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>({ level: "all" });

  useEffect(() => {
    fetch("/api/topics")
      .then((r) => r.json())
      .then((json: ApiResponse<TopicSummary[]>) => {
        if (json.data) setTopics(json.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (filter.level === "all") return topics;
    return topics.filter((t) => t.levelSlug === filter.level);
  }, [topics, filter.level]);

  return { topics: filtered, isLoading, filter, setFilter };
}
