import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
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
    <div className="flex items-center justify-between">
      <Button variant="ghost" size="sm" onClick={onPrev} disabled={isFirst}>
        <ChevronLeft className="size-4 mr-1" />
        Trước
      </Button>
      <Button onClick={onNext} disabled={isLoading} size="sm">
        {isLast ? (
          <>
            <CheckCircle2 className="size-4 mr-1" />
            {isLoading ? "Đang lưu..." : "Hoàn thành"}
          </>
        ) : (
          <>
            Tiếp theo
            <ChevronRight className="size-4 ml-1" />
          </>
        )}
      </Button>
    </div>
  );
}
