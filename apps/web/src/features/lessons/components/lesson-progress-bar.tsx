import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = { current: number; total: number; title: string };

export function LessonProgressBar({ current, total, title }: Props) {
  const router = useRouter();
  const pct = Math.round((current / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <button onClick={() => router.back()} className="text-brand-muted hover:text-brand-text transition-colors">
          <ArrowLeft className="size-5" />
        </button>
        <p className="text-sm font-medium text-brand-text flex-1">{title}</p>
        <span className="text-xs text-brand-muted">{current}/{total}</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-primary transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
