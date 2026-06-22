import type { DashboardData, ApiResponse } from "@english-os/types";

export async function fetchDashboardData(): Promise<DashboardData> {
  const res = await fetch("/api/progress", { cache: "no-store" });
  const json: ApiResponse<DashboardData> = await res.json();

  if (json.error || !json.data) {
    throw new Error(json.error?.message ?? "Failed to load dashboard");
  }

  return json.data;
}
