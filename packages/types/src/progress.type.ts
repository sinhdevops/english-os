import type { SkillType } from "@english-os/constants";

export type SkillProgress = {
  skill: SkillType;
  score: number; // 0-100
  lessonsCompleted: number;
  totalLessons: number;
};

export type DashboardData = {
  profile: ProfileData;
  todayMissions: TodayMission[];
  skillProgress: SkillProgress[];
  currentLevel: LevelData;
  weakPoints: WeakPoint[];
  recentActivity: RecentActivity[];
  streak: StreakData;
  continueLesson: ContinueLessonData | null;
};

export type ProfileData = {
  id: string;
  displayName: string | null;
  email: string;
  avatarUrl: string | null;
  role: string;
};

export type TodayMission = {
  id: string;
  type: "vocabulary" | "listening" | "speaking" | "writing" | "review";
  title: string;
  description: string;
  isCompleted: boolean;
  estimatedMinutes: number;
};

export type LevelData = {
  id: string;
  name: string;
  slug: string;
  tier: string;
  progressToNext: number; // 0-100
};

export type WeakPoint = {
  skill: SkillType;
  description: string;
  suggestedAction: string;
};

export type RecentActivity = {
  id: string;
  type: string;
  description: string;
  completedAt: string;
  score: number | null;
};

export type StreakData = {
  currentStreak: number;
  longestStreak: number;
  lastActivityAt: string | null;
};

export type ContinueLessonData = {
  lessonId: string;
  lessonTitle: string;
  topicTitle: string;
  topicSlug: string;
  progressPercent: number;
};

export type ReviewItemData = {
  id: string;
  vocabularyItem: {
    id: string;
    word: string;
    definition: string;
    exampleSentence: string | null;
    imageUrl: string | null;
  };
  nextReviewAt: string;
  repetitions: number;
};
