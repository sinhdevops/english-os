import { NextResponse } from "next/server";
import { completeLessonSchema } from "@english-os/validators";
import { lessonProgressService } from "@/server/services/lesson-progress.service";
import { getServerSession } from "@/server/auth/get-server-session";
import { AppError } from "@/server/errors/app-error";

type Params = { params: Promise<{ id: string }> };

export async function POST(req: Request, { params }: Params) {
  const { id: lessonId } = await params;
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  try {
    const body = await req.json();
    const input = completeLessonSchema.parse({ ...body, lessonId });
    const result = await lessonProgressService.complete(session.profile.id, input);

    return NextResponse.json({ data: result, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
