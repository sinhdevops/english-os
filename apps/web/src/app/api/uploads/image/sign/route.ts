import { NextResponse } from "next/server";
import { cloudinaryService } from "@/server/storage/cloudinary.service";
import { getServerSession } from "@/server/auth/get-server-session";

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  const signature = cloudinaryService.generateUploadSignature({ folder: "english-os/topics" });
  return NextResponse.json({ data: signature, error: null });
}
