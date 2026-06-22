import { NextResponse } from "next/server";
import { progressService } from "@/server/services/progress.service";
import { getServerSession } from "@/server/auth/get-server-session";

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ data: null, error: { code: "UNAUTHORIZED", message: "Not authenticated" } }, { status: 401 });
  }

  const data = await progressService.getDashboardData(session.profile.id);
  return NextResponse.json({ data, error: null });
}
