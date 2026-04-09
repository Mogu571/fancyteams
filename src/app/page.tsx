"use client";

import { useState } from "react";
import { tools, jobs } from "@/data/tools";
import Header from "@/components/Header";
import MasonryView from "@/components/MasonryView";
import JobGalleryView from "@/components/JobGalleryView";

type TabMode = "companies" | "jobs";

export default function Home() {
  const [tab, setTab] = useState<TabMode>("companies");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header tab={tab} setTab={setTab} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px 8px" }}>
        {tab === "companies" ? (
          <>
            <h1 style={{ fontSize: 24, fontWeight: 500, color: "var(--fg)", margin: "0 0 8px" }}>
              👋 Bonjour! 现在创造未来
            </h1>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-secondary)", margin: 0 }}>
              「小而美」前沿技术团队图鉴 | 你是想卖一辈子糖水，还是加入他们改变世界？
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 24, fontWeight: 500, color: "var(--fg)", margin: "0 0 8px" }}>
              🚀 加入改变世界的团队
            </h1>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg-secondary)", margin: 0 }}>
              {jobs.length} 个开放岗位 · 来自 {tools.length} 家顶尖团队 | 滚动或点击浏览全部
            </p>
          </>
        )}
      </div>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "8px 16px 60px" }}>
        {tab === "companies" && <MasonryView tools={tools} />}
        {tab === "jobs" && <JobGalleryView jobs={jobs} />}
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
