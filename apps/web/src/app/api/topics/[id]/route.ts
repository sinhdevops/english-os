import { NextResponse } from "next/server";
import { topicService } from "@/server/services/topic.service";
import { AppError } from "@/server/errors/app-error";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;

  try {
    const topic = await topicService.getById(id);
    return NextResponse.json({ data: topic, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
