import { v2 as cloudinary } from "cloudinary";
import type { ImageUploadSignature } from "@english-os/types";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const cloudinaryService = {
  generateUploadSignature({ folder = "english-os" }: { folder?: string }): ImageUploadSignature {
    const timestamp = Math.round(Date.now() / 1000);
    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder },
      process.env.CLOUDINARY_API_SECRET!
    );

    return {
      signature,
      timestamp,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
      apiKey: process.env.CLOUDINARY_API_KEY!,
      folder,
    };
  },

  buildUrl(publicId: string, options?: Record<string, unknown>): string {
    return cloudinary.url(publicId, { secure: true, ...options });
  },

  async deleteByPublicId(publicId: string) {
    return cloudinary.uploader.destroy(publicId);
  },
};
