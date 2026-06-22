import type { Metadata } from "next";
import { ReviewView } from "@/features/review/views/review-view";

export const metadata: Metadata = { title: "Review" };

export default function ReviewPage() {
  return <ReviewView />;
}
