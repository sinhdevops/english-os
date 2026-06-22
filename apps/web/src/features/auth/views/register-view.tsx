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
  displayName: z.string().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof schema>;

export function RegisterView() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: { data: { displayName: data.displayName } },
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Tài khoản đã được tạo! Kiểm tra email để xác nhận.");
    router.push("/login");
  };

  return (
    <div className="glass-card w-full max-w-sm rounded-2xl p-8 space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold text-brand-text">Tạo tài khoản</h1>
        <p className="text-sm text-brand-muted">Bắt đầu hành trình IELTS 7.0</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="displayName">Tên của bạn</Label>
          <Input id="displayName" {...register("displayName")} placeholder="Nguyễn Văn A" />
          {errors.displayName && <p className="text-xs text-red-400">{errors.displayName.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" type="password" {...register("password")} placeholder="Tối thiểu 8 ký tự" />
          {errors.password && <p className="text-xs text-red-400">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Đang tạo..." : "Tạo tài khoản"}
        </Button>
      </form>
      <p className="text-center text-xs text-brand-muted">
        Đã có tài khoản?{" "}
        <Link href="/login" className="text-brand-primary hover:underline">Đăng nhập</Link>
      </p>
    </div>
  );
}
