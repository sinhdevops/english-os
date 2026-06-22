"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

export function LoginView() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      toast.error(error.message);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="glass-card w-full max-w-sm rounded-2xl p-8 space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold text-brand-text">Đăng nhập</h1>
        <p className="text-sm text-brand-muted">English OS</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" type="password" {...register("password")} placeholder="••••••••" />
          {errors.password && <p className="text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </form>
      <p className="text-center text-xs text-brand-muted">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="text-brand-primary hover:underline">Tạo tài khoản</Link>
      </p>
    </div>
  );
}
