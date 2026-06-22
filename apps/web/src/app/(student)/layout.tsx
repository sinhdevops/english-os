import { StudentNav } from "@/components/layout/student-nav";
import { StudentSidebar } from "@/components/layout/student-sidebar";
import { StudentMobileNav } from "@/components/layout/student-mobile-nav";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      <StudentSidebar />
      <div className="flex flex-1 flex-col">
        <StudentNav />
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8">{children}</main>
      </div>
      <StudentMobileNav />
    </div>
  );
}
