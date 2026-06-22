"use client";

import { useState } from "react";
import type { ReviewItemData } from "@english-os/types";
import { Button } from "@/components/ui/button";

type Props = { item: ReviewItemData; onRate: (id: string, quality: number) => void };

export function ReviewCard({ item, onRate }: Props) {
  const [revealed, setReveal] = useState(false);
  const { vocabularyItem: vocab } = item;

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6 min-h-64 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
        <p className="text-3xl font-bold text-brand-text">{vocab.word}</p>

        {revealed ? (
          <div className="space-y-2 animate-fade-in">
            <p className="text-brand-muted">{vocab.definition}</p>
            {vocab.exampleSentence && (
              <p className="text-sm text-brand-primary/80 italic">"{vocab.exampleSentence}"</p>
            )}
          </div>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setReveal(true)}>
            Hiện nghĩa
          </Button>
        )}
      </div>

      {revealed && (
        <div className="animate-slide-up">
          <p className="text-xs text-center text-brand-muted mb-3">Bạn nhớ từ này như thế nào?</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Quên", quality: 0, color: "bg-red-500/20 text-red-400 hover:bg-red-500/30" },
              { label: "Khó", quality: 2, color: "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30" },
              { label: "OK", quality: 3, color: "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30" },
              { label: "Dễ", quality: 5, color: "bg-green-500/20 text-green-400 hover:bg-green-500/30" },
            ].map((btn) => (
              <button
                key={btn.quality}
                onClick={() => { setReveal(false); onRate(item.id, btn.quality); }}
                className={`rounded-xl py-2 text-xs font-medium transition-colors ${btn.color}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
