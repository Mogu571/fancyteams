"use client";

import { useState, useMemo } from "react";
import { tools } from "@/data/tools";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";

const categoryMap: Record<string, string[]> = {
  all: [],
  note: ["note"],
  workspace: ["workspace"],
  knowledge: ["knowledge"],
  writing: ["writing"],
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return tools.filter((t) => {
      const catMatch =
        category === "all" || categoryMap[category]?.includes(t.category);
      const q = search.toLowerCase();
      const searchMatch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.features.some((f) => f.toLowerCase().includes(q)) ||
        t.highlights.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [search, category]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Hero count={tools.length} />

      <main
        style={{
          flex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 2rem 4rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <CategoryFilter active={category} onChange={setCategory} />
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div style={{ fontSize: "14px", color: "var(--muted)" }}>
            共 {filtered.length} 款工具
            {category !== "all" && " · 已筛选"}
            {search && ` · 搜索: "${search}"`}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
            {filtered.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.3 }}>
              🔍
            </div>
            <p style={{ fontSize: "16px", color: "var(--muted)" }}>没有找到匹配的工具</p>
            <button
              onClick={() => { setSearch(""); setCategory("all"); }}
              style={{
                marginTop: "12px", padding: "8px 20px", borderRadius: "10px",
                border: "1px solid var(--card-border)", background: "transparent",
                color: "var(--accent)", cursor: "pointer", fontSize: "14px",
              }}
            >
              清除筛选
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
