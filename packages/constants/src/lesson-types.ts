export const LESSON_STEP_TYPES = {
  VOCABULARY: "VOCABULARY",
  GRAMMAR: "GRAMMAR",
  LISTENING: "LISTENING",
  SPEAKING: "SPEAKING",
  WRITING: "WRITING",
  QUESTION: "QUESTION",
  MISSION: "MISSION",
} as const;

export type LessonStepType = (typeof LESSON_STEP_TYPES)[keyof typeof LESSON_STEP_TYPES];

export const PROGRESS_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
} as const;

export type ProgressStatus = (typeof PROGRESS_STATUS)[keyof typeof PROGRESS_STATUS];

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const AUDIO_LIMITS = {
  MAX_FILE_SIZE_BYTES: 10 * 1024 * 1024, // 10MB
  MAX_DURATION_SECONDS: 300, // 5 minutes
  ALLOWED_MIME_TYPES: ["audio/webm", "audio/mpeg", "audio/mp3", "audio/wav", "audio/mp4", "audio/x-m4a"],
  FREE_USER_MAX_SUBMISSIONS: 20,
  PAID_USER_MAX_SUBMISSIONS: 200,
} as const;

export const IMAGE_LIMITS = {
  MAX_FILE_SIZE_BYTES: 5 * 1024 * 1024, // 5MB
  ALLOWED_MIME_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
} as const;
