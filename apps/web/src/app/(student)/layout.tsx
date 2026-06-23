import { StudentMobileNav } from "@/components/layout/student-mobile-nav";
import { StudentNav } from "@/components/layout/student-nav";
import { StudentSidebar } from "@/components/layout/student-sidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0F172A]">
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[280px] md:block">
        <StudentSidebar />
      </div>
      <div className="min-h-screen md:pl-[280px]">
        <StudentNav />
        <main className="mx-auto min-h-[calc(100vh-72px)] w-full max-w-[1180px] px-4 pb-24 pt-5 sm:px-6 md:pb-10 md:pt-8">
          {children}
        </main>
      </div>
      <StudentMobileNav />
    </div>
  );
}
