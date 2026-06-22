import { NextResponse } from "next/server";
import { reviewCompleteSchema } from "@english-os/validators";
import { reviewService } from "@/server/services/review.service";
import { getServerSession } from "@/server/auth/get-server-session";
import { AppError } from "@/server/errors/app-error";

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  const items = await reviewService.getDueItems(session.profile.id);
  return NextResponse.json({ data: items, error: null });
}

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  try {
    const body = await req.json();
    const input = reviewCompleteSchema.parse(body);
    const result = await reviewService.complete(session.profile.id, input);

    return NextResponse.json({ data: result, error: null });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ data: null, error: { code: error.code, message: error.message } }, { status: error.statusCode });
    }
    throw error;
  }
}
