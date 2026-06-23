"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, LogOut, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const pageTitles: Array<{ match: string; title: string; subtitle: string }> = [
  { match: "/dashboard", title: "Hôm nay học gì?", subtitle: "Giữ nhịp 15 phút và hoàn thành nhiệm vụ nhỏ." },
  { match: "/topics", title: "Chủ đề học", subtitle: "Chọn bài phù hợp level và mục tiêu của bạn." },
  { match: "/lessons", title: "Bài học", subtitle: "Tập trung từng bước, không cần vội." },
  { match: "/practice/speaking", title: "Speaking Room", subtitle: "Luyện phản xạ nói bằng ghi âm ngắn." },
  { match: "/practice/writing", title: "Writing Lab", subtitle: "Viết câu rõ ý, đúng cấu trúc, có gợi ý." },
  { match: "/review", title: "Ôn tập SRS", subtitle: "Ôn đúng lúc trước khi quên." },
  { match: "/progress", title: "Tiến độ học", subtitle: "Theo dõi điểm mạnh, điểm yếu và streak." },
];

export function StudentNav() {
  const router = useRouter();
  const pathname = usePathname();
  const current = pageTitles.find((item) => pathname.startsWith(item.match)) ?? {
    title: "Không gian học",
    subtitle: "Chọn bài học, luyện tập hoặc ôn lại kiến thức.",
  };

  const signOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-[#F7FAFF]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/dashboard" className="flex shrink-0 md:hidden">
            <Image src="/images/logo-1.png" alt="Lên Trình" width={40} height={40} className="size-10 rounded-xl object-cover" />
          </Link>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-black text-[#0F172A] sm:text-xl">{current.title}</h1>
            <p className="hidden truncate text-sm font-medium text-[#64748B] sm:block">{current.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden h-10 w-64 items-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white px-3 text-[#94A3B8] shadow-sm lg:flex">
            <Search className="size-4" />
            <span className="text-sm font-medium">Tìm bài học, topic...</span>
          </div>
          <button className="grid size-10 place-items-center rounded-2xl border border-[#E2E8F0] bg-white text-[#64748B] shadow-sm transition-colors hover:text-[#2563EB]" aria-label="Thông báo">
            <Bell className="size-4" />
          </button>
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={signOut} className="h-10 rounded-2xl border-[#E2E8F0] bg-white px-3 font-extrabold text-[#0F172A] shadow-sm hover:border-red-200 hover:bg-red-50 hover:text-red-600">
            <LogOut className="size-4 sm:mr-2" />
            <span className="hidden sm:inline">Đăng xuất</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
