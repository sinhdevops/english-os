export type ImageUploadSignature = {
  signature: string;
  timestamp: number;
  cloudName: string;
  apiKey: string;
  folder: string;
};

export type AudioPresignResult = {
  uploadUrl: string;
  objectKey: string;
  expiresAt: string;
};

export type AudioUploadPurpose = "speaking_submission" | "lesson_audio";
