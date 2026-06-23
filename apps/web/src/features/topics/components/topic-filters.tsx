"use client";

import { LEVELS } from "@english-os/constants";

type Filter = { level: string };
type Props = { filter: Filter; onFilterChange: (filter: Filter) => void };

export function TopicFilters({ filter, onFilterChange }: Props) {
  const levelOptions = [{ slug: "all", name: "Tất cả" }, ...LEVELS.map((level) => ({ slug: level.slug, name: level.name }))];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {levelOptions.map((level) => {
        const active = filter.level === level.slug;
        return (
          <button
            key={level.slug}
            onClick={() => onFilterChange({ ...filter, level: level.slug })}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition-all ${
              active
                ? "bg-[#2563EB] text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)]"
                : "border border-[#E2E8F0] bg-white text-[#64748B] hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
            }`}
          >
            {level.name}
          </button>
        );
      })}
    </div>
  );
}
