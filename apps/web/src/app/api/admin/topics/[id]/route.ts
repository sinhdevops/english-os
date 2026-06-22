import { NextResponse } from "next/server";
import { updateTopicSchema } from "@english-os/validators";
import { topicService } from "@/server/services/topic.service";
import { requireAdmin } from "@/server/auth/require-admin";
import { AppError } from "@/server/errors/app-error";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Params) {
  await requireAdmin();
  const { id } = await params;

  try {
    const body = await req.json();
    const input = updateTopicSchema.parse(body);
    const topic = await topicService.update(id, input);

    return NextResponse.json({ data: topic, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  await requireAdmin();
  const { id } = await params;

  try {
    await topicService.delete(id);
    return NextResponse.json({ data: { id }, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
