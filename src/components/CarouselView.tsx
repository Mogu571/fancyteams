"use client";

import { useState } from "react";
import { Tool } from "@/data/tools";
import Logo from "./Logo";

export default function CarouselView({ tools }: { tools: Tool[] }) {
  const [a, setA] = useState(Math.floor(tools.length / 2));

  return (
    <div>
      <div style={{
        position: "relative", height: 480,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        {tools.map((t, i) => {
          const off = i - a;
          const abs = Math.abs(off);
          if (abs > 3) return null;
          const isC = off === 0;

          return (
            <div key={t.id} onClick={() => !isC && setA(i)} style={{
              position: "absolute", width: isC ? 380 : 220, height: isC ? 440 : 280, left: "50%",
              transform: `translateX(calc(-50% + ${off * (isC ? 310 : 250)}px)) scale(${isC ? 1 : 0.88 - abs * 0.03})`,
              opacity: abs > 2 ? 0 : abs > 1 ? 0.3 : abs > 0 ? 0.6 : 1,
              zIndex: 10 - abs,
              transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
              cursor: isC ? "default" : "pointer",
            }}>
              <div style={{
                height: "100%", display: "flex", flexDirection: "column",
                overflow: "hidden", borderRadius: 12,
                border: "1px solid var(--border)", background: "var(--bg-card)",
                boxShadow: isC ? "0 8px 40px rgba(0,0,0,0.06)" : "none",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/seed/${t.id}-cv/600/380`}
                  alt={t.name}
                  style={{ width: "100%", height: isC ? 200 : 140, objectFit: "cover", display: "block", flexShrink: 0 }}
                />
                <div style={{ padding: isC ? "16px 16px 20px" : "12px", flex: 1, display: "flex", flexDirection: "column", gap: isC ? 8 : 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Logo src={t.logo} size={isC ? 40 : 28} />
                    <div>
                      <p style={{ fontSize: isC ? 14 : 12, fontWeight: 500, color: "var(--fg)", margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: 12, color: "var(--fg-muted)", margin: 0 }}>{t.site}</p>
                    </div>
                  </div>
                  {isC && (
                    <div style={{ animation: "fadeInUp 0.3s ease-out" }}>
                      <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg)", margin: "4px 0 8px" }}>{t.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {t.tags.map((tag) => (
                          <span key={tag} style={{
                            fontSize: 11, padding: "2px 8px", borderRadius: 6,
                            border: "1px solid var(--border)", color: "var(--fg-secondary)",
                          }}>{tag}</span>
                        ))}
                      </div>
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border)",
                        fontSize: 12, color: "var(--fg-muted)",
                      }}>
                        <span>{t.year} · {t.loc}</span>
                        <span style={{ fontWeight: 500, color: "var(--fg)" }}>{t.price}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 16 }}>
        <button
          onClick={() => setA((p) => (p - 1 + tools.length) % tools.length)}
          style={{
            width: 40, height: 40, borderRadius: "50%",
            border: "1px solid var(--border)", background: "var(--bg-card)",
            fontSize: 18, cursor: "pointer", color: "var(--fg-secondary)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >&#8592;</button>
        <div style={{ display: "flex", gap: 6 }}>
          {tools.map((_, i) => (
            <div key={i} onClick={() => setA(i)} style={{
              width: i === a ? 22 : 6, height: 6, borderRadius: 3,
              background: i === a ? "var(--fg)" : "var(--border-hover)",
              transition: "all 0.35s", cursor: "pointer",
            }} />
          ))}
        </div>
        <button
          onClick={() => setA((p) => (p + 1) % tools.length)}
          style={{
            width: 40, height: 40, borderRadius: "50%",
            border: "1px solid var(--border)", background: "var(--bg-card)",
            fontSize: 18, cursor: "pointer", color: "var(--fg-secondary)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >&#8594;</button>
      </div>
    </div>
  );
}
