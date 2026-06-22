"use client";

import { useState, useEffect } from "react";
import { fetchDashboardData } from "@/features/dashboard/api/dashboard.api";
import type { DashboardData } from "@english-os/types";

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchDashboardData()
      .then((d) => { if (!cancelled) setData(d); })
      .catch((e) => { if (!cancelled) setError(e.message); })
      .finally(() => { if (!cancelled) setIsLoading(false); });

    return () => { cancelled = true; };
  }, []);

  return { data, isLoading, error };
}
