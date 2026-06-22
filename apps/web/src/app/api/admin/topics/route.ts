import { NextResponse } from "next/server";
import { createTopicSchema } from "@english-os/validators";
import { topicService } from "@/server/services/topic.service";
import { requireAdmin } from "@/server/auth/require-admin";
import { AppError } from "@/server/errors/app-error";

export async function GET() {
  await requireAdmin();

  const topics = await topicService.listAll();
  return NextResponse.json({ data: topics, error: null });
}

export async function POST(req: Request) {
  await requireAdmin();

  try {
    const body = await req.json();
    const input = createTopicSchema.parse(body);
    const topic = await topicService.create(input);

    return NextResponse.json({ data: topic, error: null }, { status: 201 });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
