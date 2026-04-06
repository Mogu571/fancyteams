"use client";

import { useState, useCallback } from "react";
import { Tool } from "@/data/tools";
import LinkIcon from "./LinkIcon";

export default function GalleryView({ tools }: { tools: Tool[] }) {
  const [pos, setPos] = useState(0);
  const [anim, setAnim] = useState(false);

  const go = useCallback((d: number) => {
    if (anim) return;
    const n = pos + d;
    if (n < 0 || n >= tools.length) return;
    setAnim(true);
    setPos(n);
    setTimeout(() => setAnim(false), 700);
  }, [anim, pos, tools.length]);

  return (
    <div style={{ background: "var(--bg)", borderRadius: 16, overflow: "hidden", padding: "0 0 28px" }}>
      <div style={{ padding: "16px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "var(--fg)", fontSize: 14, fontWeight: 500 }}>Gallery Walk</span>
        <span style={{ color: "var(--fg-muted)", fontSize: 12 }}>{pos + 1} / {tools.length}</span>
      </div>

      <div style={{
        position: "relative", height: 540,
        perspective: 1800, perspectiveOrigin: "50% 46%",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
          background: "linear-gradient(to top, rgba(0,0,0,0.012), transparent)",
          pointerEvents: "none",
        }} />

        {tools.map((t, i) => {
          const depth = i - pos;
          if (depth < -0.5 || depth > 7) return null;

          const isL = i % 2 === 0;
          const sc = Math.max(0.05, 1 - depth * 0.14);
          const zT = -depth * 210;
          const yOff = -6 - depth * 22;
          const xPct = (isL ? -38 : 38) * sc;
          const rotY = (isL ? 30 : -30) * Math.max(0.2, 1 - depth * 0.12);
          const op = depth < 0 ? 0 : Math.max(0, 1 - depth * 0.14);
          const isF = depth >= 0 && depth < 1;
          const blur = depth > 4 ? Math.min((depth - 4) * 1.5, 4) : 0;

          return (
            <div key={t.id} style={{
              position: "absolute", left: `calc(50% + ${xPct}%)`, top: "50%", width: 255,
              transformStyle: "preserve-3d",
              transform: `translate(-50%,-50%) translate3d(0px,${yOff}px,${zT}px) rotateY(${rotY}deg) scale(${sc})`,
              opacity: op,
              zIndex: Math.round((7 - depth) * 10),
              transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              pointerEvents: isF ? "auto" : "none",
              filter: blur > 0 ? `blur(${blur}px)` : "none",
            }}>
              <div style={{
                background: "var(--bg-card)", borderRadius: 12,
                border: isF ? "1px solid var(--border-hover)" : "1px solid var(--border)",
                overflow: "hidden",
                boxShadow: isF
                  ? `0 10px 36px rgba(0,0,0,0.07), ${isL ? 6 : -6}px 4px 18px rgba(0,0,0,0.03)`
                  : "0 4px 14px rgba(0,0,0,0.03)",
                transition: "box-shadow 0.7s, border-color 0.7s",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://picsum.photos/seed/${t.id}-gal/540/320`} alt={t.name}
                  style={{ width: "100%", height: 105, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "10px 13px 13px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                    <div style={{ width: 26, height: 26, flexShrink: 0, transform: "rotate(-5deg)" }}>
                      <div style={{ width: "100%", height: "100%", borderRadius: 6, overflow: "hidden", border: "0.5px solid var(--border)" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--fg)" }}>{t.name}</span>
                  </div>
                  <p style={{
                    fontSize: 11, color: "var(--fg-secondary)", lineHeight: 1.55, margin: 0,
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>{t.desc}</p>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    fontSize: 10, color: "var(--fg-muted)",
                    paddingTop: 7, marginTop: 7, borderTop: "1px solid var(--border)",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <LinkIcon size={10} />
                      <span>{t.site}</span>
                    </div>
                    <span style={{ fontWeight: 500, color: "var(--fg-secondary)" }}>{t.price}</span>
                  </div>
                </div>
              </div>

              {isF && (
                <div style={{ textAlign: "center", marginTop: 10, animation: "gFade 0.45s ease-out" }}>
                  <div style={{
                    display: "inline-block", padding: "3px 12px",
                    background: "var(--bg-card)", borderRadius: 8,
                    border: "1px solid var(--border)",
                    fontSize: 10, color: "var(--fg-muted)",
                  }}>{t.year} · {t.loc}</div>
                  <div style={{ display: "flex", gap: 3, justifyContent: "center", marginTop: 5, flexWrap: "wrap" }}>
                    {t.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={{
                        fontSize: 9, padding: "2px 7px", borderRadius: 5,
                        background: "var(--bg-card)", color: "var(--fg-muted)",
                        border: "1px solid var(--border)",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
        <button onClick={() => go(-1)} disabled={pos <= 0} style={{
          padding: "8px 20px", borderRadius: 10,
          border: "1px solid var(--border)", background: "var(--bg-card)",
          color: pos <= 0 ? "var(--border-hover)" : "var(--fg-secondary)",
          fontSize: 13, cursor: pos <= 0 ? "default" : "pointer",
          opacity: pos <= 0 ? 0.5 : 1, transition: "all 0.2s",
        }}>&#8592; Back</button>
        <div style={{ display: "flex", gap: 5 }}>
          {tools.map((_, i) => (
            <div key={i}
              onClick={() => { if (!anim) { setAnim(true); setPos(i); setTimeout(() => setAnim(false), 700); } }}
              style={{
                width: pos === i ? 20 : 6, height: 6, borderRadius: 3,
                background: pos === i ? "var(--fg)" : "var(--border-hover)",
                transition: "all 0.4s", cursor: "pointer",
              }}
            />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={pos >= tools.length - 1} style={{
          padding: "8px 20px", borderRadius: 10,
          border: pos >= tools.length - 1 ? "1px solid var(--border)" : "none",
          background: pos >= tools.length - 1 ? "var(--bg-card)" : "var(--fg)",
          color: pos >= tools.length - 1 ? "var(--border-hover)" : "var(--bg)",
          fontSize: 13, fontWeight: 500,
          cursor: pos >= tools.length - 1 ? "default" : "pointer",
          opacity: pos >= tools.length - 1 ? 0.5 : 1, transition: "all 0.2s",
        }}>Forward &#8594;</button>
      </div>
    </div>
  );
}
