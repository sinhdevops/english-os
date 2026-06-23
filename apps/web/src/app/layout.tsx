import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "@/styles/globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: { default: "English OS", template: "%s | English OS" },
  description: "Từ mất gốc đến IELTS 7.0 - hệ thống học tiếng Anh toàn diện theo topic thực chiến.",
  keywords: ["IELTS", "học tiếng Anh", "English", "speaking", "writing", "listening"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
