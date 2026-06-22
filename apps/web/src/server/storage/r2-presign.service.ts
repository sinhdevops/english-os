import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";
import type { AudioPresignInput } from "@english-os/validators";
import type { AudioPresignResult } from "@english-os/types";

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export const r2PresignService = {
  async createUploadUrl(userId: string, input: AudioPresignInput): Promise<AudioPresignResult> {
    const ext = input.fileName.split(".").pop() ?? "webm";
    const objectKey = `audio/users/${userId}/${input.purpose}/${nanoid()}.${ext}`;

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: objectKey,
      ContentType: input.contentType,
      ContentLength: input.fileSize,
    });

    const uploadUrl = await getSignedUrl(r2, command, { expiresIn: 300 }); // 5 min

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    return { uploadUrl, objectKey, expiresAt };
  },

  getPublicUrl(objectKey: string): string {
    return `${process.env.R2_PUBLIC_URL}/${objectKey}`;
  },
};
