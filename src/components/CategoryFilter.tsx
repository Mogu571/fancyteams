"use client";

import { categories } from "@/data/tools";

export default function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              border: isActive ? "1.5px solid var(--accent)" : "1px solid var(--card-border)",
              background: isActive ? "var(--accent-light)" : "transparent",
              color: isActive ? "var(--accent)" : "var(--muted)",
              fontWeight: isActive ? 600 : 400,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "var(--hover-bg)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
