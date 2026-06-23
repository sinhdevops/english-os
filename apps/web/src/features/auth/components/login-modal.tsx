"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginModalProps = {
  children: React.ReactNode;
};

export function LoginModal({ children }: LoginModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabaseUrl || !supabaseAnonKey) {
      toast.error("Thiếu cấu hình Supabase để đăng nhập.");
      return;
    }

    setIsSubmitting(true);
    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setIsSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Đăng nhập thành công");
    setOpen(false);
    router.push("/dashboard");
    router.refresh();
  };

  const onGoogleLogin = async () => {
    if (!supabaseUrl || !supabaseAnonKey) {
      toast.error("Thiếu cấu hình Supabase để đăng nhập Google.");
      return;
    }

    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) toast.error(error.message);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[480px] px-9 py-8 sm:px-10">
        <DialogHeader className="items-center">
          <Image
            src="/images/logo-2.png"
            alt="Lên Trình"
            width={156}
            height={48}
            className="mb-1 h-11 w-auto object-contain"
          />
          <DialogTitle className="text-[28px] text-[#0F172A]">Đăng nhập</DialogTitle>
          <DialogDescription>Tiếp tục hành trình học tiếng Anh của bạn</DialogDescription>
        </DialogHeader>

        <div className="mt-3 space-y-5">
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full rounded-lg border-[#E2E8F0] bg-white text-[15px] font-extrabold text-[#0F172A] hover:bg-[#F8FAFC]"
            onClick={onGoogleLogin}
          >
            <FcGoogle className="mr-3 size-5" />
            Tiếp tục với Google
          </Button>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E2E8F0]" />
            <span className="text-sm font-medium text-[#64748B]">hoặc đăng nhập bằng email</span>
            <div className="h-px flex-1 bg-[#E2E8F0]" />
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-sm font-extrabold text-[#0F172A]">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#94A3B8]" />
                <Input
                  id="login-email"
                  type="email"
                  autoComplete={remember ? "email" : "off"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Nhập email của bạn"
                  required
                  className="h-12 rounded-lg border-[#E2E8F0] bg-white pl-12 text-[#0F172A] shadow-sm placeholder:text-[#94A3B8] focus-visible:ring-[#2563EB]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-sm font-extrabold text-[#0F172A]">
                Mật khẩu
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#94A3B8]" />
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={remember ? "current-password" : "off"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Nhập mật khẩu của bạn"
                  required
                  className="h-12 rounded-lg border-[#E2E8F0] bg-white pl-12 pr-12 text-[#0F172A] shadow-sm placeholder:text-[#94A3B8] focus-visible:ring-[#2563EB]"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full text-[#64748B] transition-colors hover:text-[#2563EB]"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#475569]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="size-4 rounded border-[#CBD5E1] accent-[#2563EB]"
                />
                Ghi nhớ đăng nhập
              </label>
              <Link href="/forgot-password" className="text-sm font-extrabold text-[#2563EB] hover:underline">
                Quên mật khẩu?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-lg bg-[#2563EB] text-base font-extrabold shadow-[0_12px_28px_rgba(37,99,235,0.24)] hover:bg-[#1D4ED8]"
            >
              {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>
          </form>

          <p className="text-center text-sm font-semibold text-[#64748B]">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="font-extrabold text-[#2563EB] hover:underline" onClick={() => setOpen(false)}>
              Tạo tài khoản
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
