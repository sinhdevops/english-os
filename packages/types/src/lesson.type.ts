import type { LessonStepType, ProgressStatus, SkillType } from "@english-os/constants";

export type TopicSummary = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  thumbnailUrl: string | null;
  levelName: string;
  levelSlug: string;
  lessonCount: number;
  progress: number; // 0-100
};

export type TopicDetail = TopicSummary & {
  lessons: LessonSummary[];
};

export type LessonSummary = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  order: number;
  status: ProgressStatus;
  skills: SkillType[];
};

export type LessonDetail = LessonSummary & {
  steps: LessonStepData[];
};

export type LessonStepData = {
  id: string;
  type: LessonStepType;
  order: number;
  title: string | null;
  content: LessonStepContent;
};

export type VocabularyStepContent = {
  items: VocabularyItemData[];
};

export type GrammarStepContent = {
  title: string;
  explanation: string;
  examples: string[];
  structure: string | null;
};

export type ListeningStepContent = {
  audioUrl: string;
  transcript: string | null;
  questions: QuestionData[];
};

export type SpeakingStepContent = {
  taskId: string;
  prompt: string;
  durationSeconds: number;
  hints: string[];
};

export type WritingStepContent = {
  taskId: string;
  prompt: string;
  wordCountMin: number | null;
  wordCountMax: number | null;
  hints: string[];
};

export type QuestionStepContent = {
  questions: QuestionData[];
};

export type MissionStepContent = {
  title: string;
  description: string;
  instructions: string[];
};

export type LessonStepContent =
  | VocabularyStepContent
  | GrammarStepContent
  | ListeningStepContent
  | SpeakingStepContent
  | WritingStepContent
  | QuestionStepContent
  | MissionStepContent;

export type VocabularyItemData = {
  id: string;
  word: string;
  pronunciation: string | null;
  definition: string;
  exampleSentence: string | null;
  collocations: string[];
  imageUrl: string | null;
  audioUrl: string | null;
};

export type QuestionData = {
  id: string;
  prompt: string;
  skill: SkillType;
  options: QuestionOptionData[];
};

export type QuestionOptionData = {
  id: string;
  text: string;
};
