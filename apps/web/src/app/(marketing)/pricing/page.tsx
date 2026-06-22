import type { Metadata } from "next";
import { PricingView } from "@/features/pricing/views/pricing-view";

export const metadata: Metadata = { title: "Gói học" };

export default function PricingPage() {
  return <PricingView />;
}
