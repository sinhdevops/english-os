import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReviewComplete({ total }: { total: number }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 space-y-4 text-center">
      <CheckCircle2 className="size-16 text-green-400" />
      <h2 className="text-xl font-bold text-brand-text">Ôn tập xong rồi!</h2>
      <p className="text-brand-muted">Bạn đã ôn {total} từ hôm nay 🎉</p>
      <Button asChild><Link href="/dashboard">Về Dashboard</Link></Button>
    </div>
  );
}
