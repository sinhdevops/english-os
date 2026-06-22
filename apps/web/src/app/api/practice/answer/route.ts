import { NextResponse } from "next/server";
import { submitAnswerSchema } from "@english-os/validators";
import { practiceService } from "@/server/services/practice.service";
import { getServerSession } from "@/server/auth/get-server-session";
import { AppError } from "@/server/errors/app-error";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  try {
    const body = await req.json();
    const input = submitAnswerSchema.parse(body);
    const result = await practiceService.submitAnswer(session.profile.id, input);

    return NextResponse.json({ data: result, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
