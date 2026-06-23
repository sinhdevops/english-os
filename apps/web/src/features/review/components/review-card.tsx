"use client";

import { useState } from "react";
import type { ReviewItemData } from "@english-os/types";
import { Button } from "@/components/ui/button";

type Props = { item: ReviewItemData; onRate: (id: string, quality: number) => void };

const ratingButtons = [
  { label: "Quên", helper: "Ôn lại sớm", quality: 0, className: "bg-red-50 text-red-600 hover:bg-red-100" },
  { label: "Khó", helper: "Cần nhắc lại", quality: 2, className: "bg-orange-50 text-orange-600 hover:bg-orange-100" },
  { label: "OK", helper: "Nhớ tạm", quality: 3, className: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
  { label: "Dễ", helper: "Để lâu hơn", quality: 5, className: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" },
];

export function ReviewCard({ item, onRate }: Props) {
  const [revealed, setReveal] = useState(false);
  const { vocabularyItem: vocab } = item;

  return (
    <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <div className="flex min-h-72 flex-col items-center justify-center rounded-[24px] bg-[#F8FAFC] p-6 text-center">
        <p className="text-sm font-black uppercase tracking-wide text-[#2563EB]">Từ cần ôn</p>
        <p className="mt-4 text-5xl font-black tracking-normal text-[#0F172A]">{vocab.word}</p>

        {revealed ? (
          <div className="mt-6 max-w-lg space-y-3">
            <p className="text-lg font-bold leading-7 text-[#334155]">{vocab.definition}</p>
            {vocab.exampleSentence ? <p className="rounded-2xl bg-white p-4 text-sm italic leading-6 text-[#64748B]">"{vocab.exampleSentence}"</p> : null}
          </div>
        ) : (
          <Button className="mt-8 h-12 rounded-2xl bg-[#2563EB] px-6 font-extrabold hover:bg-[#1D4ED8]" onClick={() => setReveal(true)}>
            Hiện nghĩa
          </Button>
        )}
      </div>

      {revealed ? (
        <div className="mt-6">
          <p className="mb-3 text-center text-sm font-bold text-[#64748B]">Bạn nhớ từ này như thế nào?</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ratingButtons.map((button) => (
              <button
                key={button.quality}
                onClick={() => {
                  setReveal(false);
                  onRate(item.id, button.quality);
                }}
                className={`rounded-2xl px-3 py-4 text-center transition-colors ${button.className}`}
              >
                <span className="block text-base font-black">{button.label}</span>
                <span className="mt-1 block text-xs font-semibold opacity-80">{button.helper}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
