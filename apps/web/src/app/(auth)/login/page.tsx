import type { Metadata } from "next";
import { LoginView } from "@/features/auth/views/login-view";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Đăng nhập" };

export default function LoginPage() {
  return <LoginView />;
}
