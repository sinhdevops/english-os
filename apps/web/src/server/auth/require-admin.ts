import { getServerSession } from "./get-server-session";
import { AppError } from "@/server/errors/app-error";

export async function requireAdmin() {
  const session = await getServerSession();

  if (!session) throw AppError.unauthorized();
  if (session.profile.role !== "ADMIN") throw AppError.forbidden("Admin access required");

  return session;
}
