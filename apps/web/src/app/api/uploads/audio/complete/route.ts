import { NextResponse } from "next/server";
import { completeSpeakingSubmissionSchema } from "@english-os/validators";
import { speakingService } from "@/server/services/speaking.service";
import { getServerSession } from "@/server/auth/get-server-session";
import { AppError } from "@/server/errors/app-error";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  try {
    const body = await req.json();
    const input = completeSpeakingSubmissionSchema.parse(body);
    const submission = await speakingService.saveSubmission(session.profile.id, input);

    return NextResponse.json({ data: submission, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
