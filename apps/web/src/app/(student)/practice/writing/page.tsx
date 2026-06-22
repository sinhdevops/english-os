import type { Metadata } from "next";
import { WritingLabView } from "@/features/writing/views/writing-lab-view";

export const metadata: Metadata = { title: "Writing Lab" };

export default function WritingLabPage() {
  return <WritingLabView />;
}
