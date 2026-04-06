import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FancyTeams",
  description: "探索优秀的笔记与知识管理团队",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
