import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const columns = [
  {
    title: "Sản phẩm",
    links: ["Lộ trình học", "Listening", "Speaking", "Vocabulary", "Writing", "Mock Test"],
  },
  {
    title: "Tài nguyên",
    links: ["Blog học tiếng Anh", "Từ vựng theo chủ đề", "Ngữ pháp căn bản", "IELTS Tips", "Ebook miễn phí"],
  },
  {
    title: "Hỗ trợ",
    links: ["Liên hệ", "FAQ", "Hướng dẫn sử dụng", "Trung tâm trợ giúp"],
  },
  {
    title: "Pháp lý",
    links: ["Chính sách bảo mật", "Điều khoản sử dụng", "Chính sách hoàn tiền"],
  },
];

export function MarketingFooter() {
  return (
    <footer className="bg-[#06265C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-9 sm:px-6 lg:grid-cols-[1.2fr_2.3fr_1.4fr]">
        <div>
          <Link href="/" className="inline-flex rounded-2xl bg-white px-3 py-2" aria-label="Lên Trình">
            <Image
              src="/images/logo-2.png"
              alt="Lên Trình"
              width={158}
              height={52}
              className="h-11 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm font-medium leading-7 text-blue-100">
            Học tiếng Anh mỗi ngày theo lộ trình rõ ràng, dễ hiểu, dễ duy trì.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, BookOpen].map((Icon, index) => (
              <span key={index} className="grid size-9 place-items-center rounded-full bg-white/10 text-blue-100">
                <Icon className="size-4" />
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-black">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-sm font-medium text-blue-100 transition-colors hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-white/10 lg:border-l lg:pl-8">
          <h3 className="font-black">Nhận tài liệu học miễn phí</h3>
          <p className="mt-4 text-sm font-medium leading-7 text-blue-100">
            Đăng ký email để nhận tips học và tài liệu miễn phí mỗi tuần.
          </p>
          <form className="mt-5 flex rounded-2xl bg-white p-1.5">
            <Input className="h-11 border-0 bg-transparent text-[#0F172A] shadow-none focus-visible:ring-0" placeholder="Nhập email của bạn" type="email" />
            <Button type="submit" size="icon" className="size-11 shrink-0 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8]" aria-label="Đăng ký nhận tài liệu">
              <ArrowRight className="size-5" />
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs font-medium text-blue-100">
        © {new Date().getFullYear()} English OS. All rights reserved.
      </div>
    </footer>
  );
}
