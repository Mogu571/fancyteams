"use client";

import Link from "next/link";
import { Tool, Job } from "@/data/tools";
import JobCarouselView from "./JobCarouselView";

export default function CompanyDetail({
  tool,
  jobs,
}: {
  tool: Tool | null;
  jobs: Job[];
}) {
  if (!tool) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 16, color: "var(--fg-muted)" }}>企业不存在</p>
          <Link href="/" style={{ fontSize: 13, color: "var(--link)" }}>← 返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      {/* Sticky top bar */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "0.5px solid var(--border)",
      }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", padding: "0 24px",
          height: 52, display: "flex", alignItems: "center", gap: 16,
        }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "var(--fg-muted)", textDecoration: "none",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            返回
          </Link>
          <span style={{ color: "var(--border)", fontSize: 14 }}>·</span>
          <span style={{ fontSize: 13, color: "var(--fg-secondary)", fontWeight: 500 }}>{tool.name}</span>
        </div>
      </header>

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* ── Section 1: 企业介绍 ── */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 28 }}>
            <div style={{ width: 72, height: 72, flexShrink: 0, transform: "rotate(-4deg)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.logo} alt={tool.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 32, fontWeight: 700, color: "var(--fg)", margin: "0 0 6px" }}>{tool.name}</h1>
              <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "0 0 12px" }}>
                {tool.year} · {tool.loc} · {tool.price}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tool.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: 6,
                    border: "1px solid var(--border)", color: "var(--fg-secondary)",
                    background: "var(--bg-card)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--fg-secondary)", margin: "0 0 24px" }}>
            {tool.long}
          </p>

          <a
            href={`https://${tool.site}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 10,
              background: "var(--fg)", color: "var(--bg)",
              fontSize: 13, fontWeight: 500, textDecoration: "none",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            访问官网 {tool.site}
          </a>
        </section>

        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 0 72px" }} />

        {/* ── Section 2: 产品介绍 ── */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--fg-muted)", textTransform: "uppercase", margin: "0 0 16px" }}>核心产品</p>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--fg)", margin: "0 0 24px" }}>{tool.product.name}</h2>
          <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", marginBottom: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tool.product.image} alt={tool.product.name} style={{ display: "block", width: "100%", height: "auto" }} />
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--fg-secondary)", margin: 0 }}>
            {tool.product.desc}
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 0 72px" }} />

        {/* ── Section 3: 开放岗位（轮播） ── */}
        <section style={{ marginBottom: 72 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--fg-muted)", textTransform: "uppercase", margin: "0 0 16px" }}>开放岗位</p>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--fg)", margin: "0 0 8px" }}>
            {jobs.length} 个职位正在招募
          </h2>
          <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: "0 0 32px" }}>点击侧边卡片或滚动鼠标切换浏览</p>
          <JobCarouselView jobs={jobs} />
        </section>

        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", margin: "0 0 72px" }} />

        {/* ── Section 4: 团队成员 ── */}
        <section>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "var(--fg-muted)", textTransform: "uppercase", margin: "0 0 16px" }}>团队成员</p>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: "var(--fg)", margin: "0 0 32px" }}>认识这群人</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {tool.employees.map((emp) => (
              <div key={emp.name} style={{
                background: "var(--bg-card)", borderRadius: 14, border: "1px solid var(--border)",
                padding: "24px 16px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
                gap: 12,
              }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--border)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={emp.avatar} alt={emp.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--fg)", margin: "0 0 6px" }}>{emp.name}</p>
                  <p style={{ fontSize: 11, color: "var(--fg-muted)", lineHeight: 1.5, margin: 0 }}>{emp.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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
