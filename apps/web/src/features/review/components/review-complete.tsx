import Link from "next/link";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReviewComplete({ total }: { total: number }) {
  return (
    <div className="mx-auto flex min-h-[520px] max-w-xl flex-col items-center justify-center rounded-[28px] border border-emerald-100 bg-emerald-50 p-8 text-center">
      <div className="grid size-20 place-items-center rounded-full bg-white text-[#10B981] shadow-sm">
        <CheckCircle2 className="size-11" />
      </div>
      <h2 className="mt-6 text-3xl font-black text-[#0F172A]">Ôn tập xong rồi!</h2>
      <p className="mt-3 max-w-md text-sm font-medium leading-7 text-[#64748B]">
        Bạn đã ôn {total} từ hôm nay. Hệ thống sẽ tự xếp lịch ôn tiếp theo bằng SRS.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="h-12 rounded-2xl bg-[#2563EB] px-6 font-extrabold hover:bg-[#1D4ED8]">
          <Link href="/dashboard">Về tổng quan</Link>
        </Button>
        <Button asChild variant="outline" className="h-12 rounded-2xl border-[#E2E8F0] bg-white px-6 font-extrabold">
          <Link href="/topics">
            <RotateCcw className="mr-2 size-4" />
            Học tiếp
          </Link>
        </Button>
      </div>
    </div>
  );
}
