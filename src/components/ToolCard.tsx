"use client";

import { Tool } from "@/data/tools";

export default function ToolCard({
  tool,
  index,
}: {
  tool: Tool;
  index: number;
}) {
  return (
    <a
      href={`https://${tool.website}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`animate-fade-in-up stagger-${index + 1}`}
      style={{
        display: "block",
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
        borderRadius: "16px",
        padding: "1.5rem",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 40px -12px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = tool.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--card-border)";
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: tool.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 600,
            fontSize: "18px",
            flexShrink: 0,
          }}
        >
          {tool.name[0]}
        </div>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "17px",
              lineHeight: 1.3,
            }}
          >
            {tool.name}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              marginTop: "1px",
            }}
          >
            {tool.website}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--muted)",
          margin: "0 0 16px",
        }}
      >
        {tool.description}
      </p>

      {/* Features */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "16px",
        }}
      >
        {tool.features.slice(0, 4).map((f) => (
          <span
            key={f}
            style={{
              fontSize: "12px",
              padding: "3px 10px",
              borderRadius: "999px",
              background: "var(--tag-bg)",
              color: "var(--tag-text)",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "12px",
          borderTop: "1px solid var(--card-border)",
          fontSize: "13px",
          color: "var(--muted)",
        }}
      >
        <span>{tool.founded} · {tool.headquarters}</span>
        <span
          style={{
            fontWeight: 500,
            color: "var(--accent)",
          }}
        >
          {tool.pricing}
        </span>
      </div>

      {/* Highlight */}
      <div
        style={{
          marginTop: "12px",
          padding: "10px 14px",
          borderRadius: "10px",
          background: "var(--accent-light)",
          fontSize: "13px",
          color: "var(--accent)",
          lineHeight: 1.5,
        }}
      >
        {tool.highlights}
      </div>
    </a>
  );
}
