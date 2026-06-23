import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  isLoading?: boolean;
};

export function LessonNavigation({ onPrev, onNext, isFirst, isLast, isLoading }: Props) {
  return (
    <div className="sticky bottom-20 z-20 flex items-center justify-between gap-3 rounded-[24px] border border-[#E2E8F0] bg-white/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl md:bottom-4">
      <Button variant="outline" onClick={onPrev} disabled={isFirst} className="h-12 rounded-2xl border-[#E2E8F0] px-5 font-extrabold">
        <ChevronLeft className="mr-1 size-4" />
        Trước
      </Button>
      <Button onClick={onNext} disabled={isLoading} className="h-12 rounded-2xl bg-[#2563EB] px-6 font-extrabold hover:bg-[#1D4ED8]">
        {isLast ? (
          <>
            <CheckCircle2 className="mr-2 size-4" />
            {isLoading ? "Đang lưu..." : "Hoàn thành"}
          </>
        ) : (
          <>
            Tiếp theo
            <ChevronRight className="ml-2 size-4" />
          </>
        )}
      </Button>
    </div>
  );
}
