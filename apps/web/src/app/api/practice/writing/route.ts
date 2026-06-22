import { NextResponse } from "next/server";
import { submitWritingSchema } from "@english-os/validators";
import { prisma } from "@english-os/db";
import { getServerSession } from "@/server/auth/get-server-session";
import { AppError } from "@/server/errors/app-error";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  try {
    const body = await req.json();
    const input = submitWritingSchema.parse(body);

    const task = await prisma.writingTask.findUnique({ where: { id: input.writingTaskId } });
    if (!task) throw AppError.notFound("Writing task");

    const wordCount = input.content.trim().split(/\s+/).filter(Boolean).length;

    const submission = await prisma.writingSubmission.create({
      data: {
        profileId: session.profile.id,
        writingTaskId: input.writingTaskId,
        content: input.content,
        wordCount,
        selfScore: input.selfScore,
      },
    });

    return NextResponse.json({ data: submission, error: null }, { status: 201 });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
