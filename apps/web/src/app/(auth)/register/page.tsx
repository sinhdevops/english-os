import type { Metadata } from "next";
import { RegisterView } from "@/features/auth/views/register-view";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Tạo tài khoản" };

export default function RegisterPage() {
  return <RegisterView />;
}
