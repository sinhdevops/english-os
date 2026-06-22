import { AdminSidebar } from "@/components/layout/admin-sidebar";
import { AdminNav } from "@/components/layout/admin-nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-brand-bg">
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminNav />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
