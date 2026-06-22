export const LEVEL_TIERS = {
  ZERO: "ZERO",
  FOUNDATION: "FOUNDATION",
  IELTS: "IELTS",
} as const;

export type LevelTier = (typeof LEVEL_TIERS)[keyof typeof LEVEL_TIERS];

export const LEVELS = [
  { order: 1, name: "Zero", slug: "zero", tier: LEVEL_TIERS.ZERO, description: "Mất gốc hoàn toàn — bắt đầu từ con số 0. Học chữ, âm, từ đơn, câu đơn giản nhất." },
  { order: 2, name: "A1", slug: "a1", tier: LEVEL_TIERS.FOUNDATION, description: "Nền móng giao tiếp — nói được câu đơn, giới thiệu bản thân, kể routine hằng ngày." },
  { order: 3, name: "A2", slug: "a2", tier: LEVEL_TIERS.FOUNDATION, description: "Giao tiếp cơ bản — kể chuyện quá khứ, nói kế hoạch, so sánh đơn giản." },
  { order: 4, name: "B1", slug: "b1", tier: LEVEL_TIERS.FOUNDATION, description: "Tiền IELTS — diễn đạt ý kiến, viết đoạn có cấu trúc, nghe hội thoại 2–3 phút." },
  { order: 5, name: "B2", slug: "b2", tier: LEVEL_TIERS.FOUNDATION, description: "IELTS Foundation 5.5–6.5 — làm được đề IELTS, viết Task 1 và Task 2 đúng cấu trúc." },
  { order: 6, name: "IELTS 7.0", slug: "ielts-7", tier: LEVEL_TIERS.IELTS, description: "IELTS 7.0–8.0 — lập luận sâu, dùng collocation chính xác, nghe được paraphrase và distractor." },
  { order: 7, name: "IELTS 9.0", slug: "ielts-9", tier: LEVEL_TIERS.IELTS, description: "IELTS 8.5–9.0 — làm chủ bài thi, viết band 8–9, nói fluency cao, nghe được tốc độ tự nhiên." },
] as const;
