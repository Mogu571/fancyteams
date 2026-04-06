"use client";

import { useState } from "react";
import { tools } from "@/data/tools";
import Header from "@/components/Header";
import MasonryView from "@/components/MasonryView";
import CarouselView from "@/components/CarouselView";
import GalleryView from "@/components/GalleryView";

type ViewMode = "masonry" | "carousel" | "gallery";

export default function Home() {
  const [view, setView] = useState<ViewMode>("masonry");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header view={view} setView={setView} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px 8px" }}>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "var(--fg)", margin: "0 0 8px" }}>
          👋 FancyTeams
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-secondary)", margin: 0 }}>
          探索优秀的笔记与知识管理团队 · 精选 {tools.length} 款工具
        </p>
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "8px 16px 60px" }}>
        {view === "masonry" && <MasonryView tools={tools} />}
        {view === "carousel" && <CarouselView tools={tools} />}
        {view === "gallery" && <GalleryView tools={tools} />}
      </main>

      <footer style={{
        borderTop: "0.5px solid var(--border)",
        padding: "24px", textAlign: "center",
        fontSize: 12, color: "var(--fg-muted)",
      }}>
        FancyTeams · Built with Next.js
      </footer>
    </div>
  );
}
