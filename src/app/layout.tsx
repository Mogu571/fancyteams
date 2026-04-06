import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FancyTeams",
  description: "精选全球优质笔记应用与协作平台，包括 Notion、Obsidian、Coda 等，帮你找到最适合的生产力工具。",
  keywords: "笔记工具, Notion, Obsidian, 知识管理, 生产力工具, 协作平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
