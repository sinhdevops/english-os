export const SKILLS = {
  LISTENING: "LISTENING",
  SPEAKING: "SPEAKING",
  READING: "READING",
  WRITING: "WRITING",
  VOCABULARY: "VOCABULARY",
  GRAMMAR: "GRAMMAR",
} as const;

export type SkillType = (typeof SKILLS)[keyof typeof SKILLS];

export const SKILL_META: Record<SkillType, { label: string; labelVi: string; color: string; icon: string }> = {
  LISTENING: { label: "Listening", labelVi: "Nghe", color: "#4F8CFF", icon: "headphones" },
  SPEAKING: { label: "Speaking", labelVi: "Nói", color: "#00D4FF", icon: "mic" },
  READING: { label: "Reading", labelVi: "Đọc", color: "#F5C76B", icon: "book-open" },
  WRITING: { label: "Writing", labelVi: "Viết", color: "#A78BFA", icon: "pen-line" },
  VOCABULARY: { label: "Vocabulary", labelVi: "Từ vựng", color: "#34D399", icon: "library" },
  GRAMMAR: { label: "Grammar", labelVi: "Ngữ pháp", color: "#FB923C", icon: "spell-check" },
};
