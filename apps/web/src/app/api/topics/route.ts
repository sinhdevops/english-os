import { NextResponse } from "next/server";
import { topicService } from "@/server/services/topic.service";
import { getServerSession } from "@/server/auth/get-server-session";

export async function GET() {
  const session = await getServerSession();
  const topics = await topicService.listPublished(session?.profile?.id);

  return NextResponse.json({ data: topics, error: null });
}
