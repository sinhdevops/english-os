import type { Metadata } from "next";
import { RoadmapView } from "@/features/roadmap/views/roadmap-view";

export const metadata: Metadata = { title: "Lộ trình học" };

export default function RoadmapPage() {
  return <RoadmapView />;
}
