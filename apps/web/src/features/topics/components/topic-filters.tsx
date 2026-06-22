"use client";

import { LEVELS } from "@english-os/constants";

type Filter = { level: string };
type Props = { filter: Filter; onFilterChange: (f: Filter) => void };

export function TopicFilters({ filter, onFilterChange }: Props) {
  const levelOptions = [{ slug: "all", name: "Tất cả" }, ...LEVELS.map((l) => ({ slug: l.slug, name: l.name }))];

  return (
    <div className="flex flex-wrap gap-2">
      {levelOptions.map((l) => (
        <button
          key={l.slug}
          onClick={() => onFilterChange({ ...filter, level: l.slug })}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
            filter.level === l.slug
              ? "bg-brand-primary text-white"
              : "bg-white/5 text-brand-muted hover:bg-white/10 hover:text-brand-text"
          }`}
        >
          {l.name}
        </button>
      ))}
    </div>
  );
}
