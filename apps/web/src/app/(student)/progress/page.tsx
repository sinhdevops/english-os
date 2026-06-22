import type { Metadata } from "next";
import { ProgressView } from "@/features/progress/views/progress-view";

export const metadata: Metadata = { title: "Tiến bộ của bạn" };

export default function ProgressPage() {
  return <ProgressView />;
}
