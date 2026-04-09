"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Job } from "@/data/tools";

const typeColor: Record<string, string> = {
  "全职": "#2563eb",
  "远程": "#16a34a",
  "兼职": "#d97706",
};

export default function JobGalleryView({ jobs: initialJobs }: { jobs: Job[] }) {
  const [order, setOrder] = useState<Job[]>(initialJobs);
  const [pos, setPos] = useState(0);
  const [anim, setAnim] = useState(false);
  const hallRef = useRef<HTMLDivElement>(null);

  const go = useCallback((d: number) => {
    if (anim) return;
    const n = pos + d;
    if (n < 0 || n >= order.length) return;
    setAnim(true);
    setPos(n);
    setTimeout(() => setAnim(false), 700);
  }, [anim, pos, order.length]);

  useEffect(() => {
    const el = hallRef.current;
    if (!el) return;
    let cooldown = false;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cooldown) return;
      if (Math.abs(e.deltaY) < 10) return;
      cooldown = true;
      if (e.deltaY > 0) go(1);
      else go(-1);
      setTimeout(() => { cooldown = false; }, 500);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  const shuffle = () => {
    const shuffled = [...order];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setOrder(shuffled);
    setPos(0);
  };

  const col = typeColor[order[pos]?.type] ?? "var(--fg-secondary)";

  return (
    <div style={{ background: "var(--bg)", borderRadius: 16, overflow: "hidden", padding: "0 0 28px" }}>
      {/* Header */}
      <div style={{ padding: "16px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ color: "var(--fg)", fontSize: 14, fontWeight: 500 }}>Jobs Hall</span>
          <button onClick={shuffle} style={{
            padding: "4px 12px", borderRadius: 8,
            border: "1px solid var(--border)", background: "var(--bg-card)",
            color: "var(--fg-secondary)", fontSize: 12, cursor: "pointer",
            transition: "all 0.2s", display: "flex", alignItems: "center", gap: 4,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.color = "var(--fg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-secondary)"; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3h5v5" /><path d="M4 20 21 3" />
              <path d="M21 16v5h-5" /><path d="M15 15l6 6" />
              <path d="M4 4l5 5" />
            </svg>
            Shuffle
          </button>
        </div>
        <span style={{ color: "var(--fg-muted)", fontSize: 12 }}>{pos + 1} / {order.length}</span>
      </div>

      <div style={{ textAlign: "center", padding: "8px 0 0", fontSize: 11, color: "var(--fg-muted)" }}>
        scroll to navigate
      </div>

      {/* 3D Hall */}
      <div ref={hallRef} style={{
        position: "relative", height: 560,
        perspective: 1800, perspectiveOrigin: "50% 46%",
        overflow: "hidden", cursor: "ns-resize",
      }}>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 160,
          background: "linear-gradient(to top, rgba(0,0,0,0.012), transparent)",
          pointerEvents: "none",
        }} />

        {order.map((j, i) => {
          const depth = i - pos;
          if (depth < -0.5 || depth > 7) return null;

          const isL = i % 2 === 0;
          const isF = depth >= 0 && depth < 1;

          const sc = Math.max(0.05, 1 - depth * 0.14);
          const zT = -depth * 210;
          const yOff = -6 - depth * 22;
          const xPct = (isL ? -38 : 38) * sc;
          const rotYVal = (isL ? 30 : -30) * Math.max(0.2, 1 - depth * 0.12);

          const op = depth < 0 ? 0 : Math.max(0, 1 - depth * 0.14);
          const blur = depth > 4 ? Math.min((depth - 4) * 1.5, 4) : 0;
          const tc = typeColor[j.type] ?? "var(--fg-secondary)";

          return (
            <div key={j.id} style={{
              position: "absolute", left: `calc(50% + ${xPct}%)`, top: "50%", width: 255,
              transformStyle: "preserve-3d",
              transform: `translate(-50%,-50%) translate3d(0px,${yOff}px,${zT}px) rotateY(${rotYVal}deg) scale(${sc})`,
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
                {/* Top accent bar */}
                <div style={{ height: 4, background: tc, opacity: 0.8 }} />

                <div style={{ padding: "12px 13px 14px" }}>
                  {/* Company row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                    <div style={{ width: 24, height: 24, flexShrink: 0, borderRadius: 6, overflow: "hidden", border: "0.5px solid var(--border)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={j.toolLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    </div>
                    <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>{j.toolName}</span>
                    <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 500, color: tc,
                      padding: "1px 7px", borderRadius: 4, border: `1px solid ${tc}`, opacity: 0.9,
                    }}>{j.type}</span>
                  </div>

                  {/* Job title */}
                  <p style={{ fontSize: 16, fontWeight: 600, color: "var(--fg)", margin: "0 0 4px", lineHeight: 1.3 }}>{j.title}</p>
                  <p style={{ fontSize: 11, color: "var(--fg-muted)", margin: "0 0 10px" }}>{j.dept} · {j.loc}</p>

                  {/* Description */}
                  <p style={{
                    fontSize: 11, color: "var(--fg-secondary)", lineHeight: 1.6, margin: "0 0 10px",
                    display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>{j.desc}</p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 10 }}>
                    {j.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: 10, padding: "2px 7px", borderRadius: 5,
                        background: "var(--bg)", color: "var(--fg-muted)",
                        border: "1px solid var(--border)",
                      }}>{tag}</span>
                    ))}
                  </div>

                  {/* Salary */}
                  <div style={{
                    paddingTop: 9, borderTop: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <span style={{ fontSize: 10, color: "var(--fg-muted)" }}>薪资范围</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--fg)" }}>{j.salary}</span>
                  </div>
                </div>
              </div>

              {isF && (
                <div style={{ textAlign: "center", marginTop: 10, animation: "gFade 0.45s ease-out" }}>
                  <div style={{
                    display: "inline-block", padding: "3px 14px",
                    background: col, borderRadius: 8,
                    fontSize: 11, color: "#fff", fontWeight: 500,
                    cursor: "pointer",
                  }}>立即申请 →</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
        <button onClick={() => go(-1)} disabled={pos <= 0} style={{
          padding: "8px 20px", borderRadius: 10,
          border: "1px solid var(--border)", background: "var(--bg-card)",
          color: pos <= 0 ? "var(--border-hover)" : "var(--fg-secondary)",
          fontSize: 13, cursor: pos <= 0 ? "default" : "pointer",
          opacity: pos <= 0 ? 0.5 : 1, transition: "all 0.2s",
        }}>&#8592; Back</button>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", maxWidth: 320, justifyContent: "center" }}>
          {order.map((_, i) => (
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
        <button onClick={() => go(1)} disabled={pos >= order.length - 1} style={{
          padding: "8px 20px", borderRadius: 10,
          border: pos >= order.length - 1 ? "1px solid var(--border)" : "none",
          background: pos >= order.length - 1 ? "var(--bg-card)" : "var(--fg)",
          color: pos >= order.length - 1 ? "var(--border-hover)" : "var(--bg)",
          fontSize: 13, fontWeight: 500,
          cursor: pos >= order.length - 1 ? "default" : "pointer",
          opacity: pos >= order.length - 1 ? 0.5 : 1, transition: "all 0.2s",
        }}>Forward &#8594;</button>
      </div>
    </div>
  );
}
