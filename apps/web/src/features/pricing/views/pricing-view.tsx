import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Free",
    price: "0",
    description: "Bắt đầu học miễn phí",
    features: ["10 topic cơ bản", "Ghi âm speaking", "Spaced repetition", "20 bản ghi âm"],
    cta: "Bắt đầu miễn phí",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "99.000₫",
    description: "Học không giới hạn",
    features: ["Tất cả topic", "Không giới hạn ghi âm", "IELTS practice", "Lộ trình cá nhân hóa", "Ưu tiên hỗ trợ"],
    cta: "Nâng cấp Pro",
    highlighted: true,
  },
];

export function PricingView() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-text">Gói học</h1>
        <p className="text-brand-muted mt-2">Chọn gói phù hợp với mục tiêu của bạn</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <div key={plan.name} className={`glass-card rounded-2xl p-6 space-y-6 ${plan.highlighted ? "border-brand-primary/30" : ""}`}>
            <div>
              <p className="text-sm text-brand-muted">{plan.name}</p>
              <p className="text-3xl font-bold text-brand-text mt-1">{plan.price}<span className="text-sm text-brand-muted">/tháng</span></p>
              <p className="text-xs text-brand-muted mt-1">{plan.description}</p>
            </div>
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-brand-text">
                  <Check className="size-4 text-green-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
