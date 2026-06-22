import type { Metadata } from "next";
import { AdminTopicsView } from "@/features/admin/topics/views/admin-topics-view";

export const metadata: Metadata = { title: "Admin — Topics" };

export default function AdminTopicsPage() {
  return <AdminTopicsView />;
}
