import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { prisma } from "@english-os/db";

export type ServerSession = {
  supabaseUserId: string;
  email: string;
  profile: {
    id: string;
    userId: string;
    email: string;
    displayName: string | null;
    avatarUrl: string | null;
    role: string;
    currentLevelId: string | null;
  };
};

export async function getServerSession(): Promise<ServerSession | null> {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: () => {},
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    select: {
      id: true,
      userId: true,
      email: true,
      displayName: true,
      avatarUrl: true,
      role: true,
      currentLevelId: true,
    },
  });

  if (!profile) return null;

  return {
    supabaseUserId: user.id,
    email: user.email ?? profile.email,
    profile,
  };
}
