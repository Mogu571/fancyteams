"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Job } from "@/data/tools";

const typeColor: Record<string, string> = {
  "全职": "#2563eb",
  "远程": "#16a34a",
  "兼职": "#d97706",
};

export default function JobCarouselView({ jobs }: { jobs: Job[] }) {
  const [a, setA] = useState(Math.floor(jobs.length / 2));
  const [anim, setAnim] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const go = useCallback((d: number) => {
    if (anim) return;
    setAnim(true);
    setA((p) => (p + d + jobs.length) % jobs.length);
    setTimeout(() => setAnim(false), 500);
  }, [anim, jobs.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let cooldown = false;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (cooldown || Math.abs(e.deltaY) < 10) return;
      cooldown = true;
      if (e.deltaY > 0) go(1);
      else go(-1);
      setTimeout(() => { cooldown = false; }, 400);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [go]);

  return (
    <div>
      <div ref={carouselRef} style={{
        position: "relative", height: 380,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
        cursor: "ew-resize",
      }}>
        {jobs.map((j, i) => {
          const off = i - a;
          const abs = Math.abs(off);
          if (abs > 3) return null;
          const isC = off === 0;
          const tc = typeColor[j.type] ?? "var(--fg-secondary)";

          return (
            <div key={j.id} onClick={() => !isC && setA(i)} style={{
              position: "absolute", width: isC ? 340 : 200, left: "50%",
              transform: `translateX(calc(-50% + ${off * (isC ? 280 : 230)}px)) scale(${isC ? 1 : 0.88 - abs * 0.03})`,
              opacity: abs > 2 ? 0 : abs > 1 ? 0.3 : abs > 0 ? 0.6 : 1,
              zIndex: 10 - abs,
              transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
              cursor: isC ? "default" : "pointer",
            }}>
              <div style={{
                display: "flex", flexDirection: "column",
                overflow: "hidden", borderRadius: 12,
                border: "1px solid var(--border)", background: "var(--bg-card)",
                boxShadow: isC ? "0 8px 40px rgba(0,0,0,0.06)" : "none",
              }}>
                {/* Accent bar */}
                <div style={{ height: 3, background: tc, opacity: 0.85 }} />

                <div style={{ padding: isC ? "16px 18px 20px" : "12px 14px" }}>
                  {/* Type badge */}
                  <span style={{
                    display: "inline-block", fontSize: 10, fontWeight: 500,
                    color: tc, border: `1px solid ${tc}`, borderRadius: 4,
                    padding: "1px 7px", marginBottom: isC ? 10 : 6, opacity: 0.9,
                  }}>{j.type}</span>

                  {/* Title */}
                  <p style={{ fontSize: isC ? 17 : 13, fontWeight: 600, color: "var(--fg)", margin: "0 0 4px", lineHeight: 1.3 }}>{j.title}</p>
                  <p style={{ fontSize: isC ? 12 : 10, color: "var(--fg-muted)", margin: "0 0 10px" }}>{j.dept} · {j.loc}</p>

                  {isC && (
                    <div style={{ animation: "fadeInUp 0.3s ease-out" }}>
                      <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--fg-secondary)", margin: "0 0 12px" }}>{j.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
                        {j.tags.map((tag) => (
                          <span key={tag} style={{
                            fontSize: 11, padding: "2px 8px", borderRadius: 6,
                            border: "1px solid var(--border)", color: "var(--fg-secondary)",
                          }}>{tag}</span>
                        ))}
                      </div>
                      <div style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        paddingTop: 12, borderTop: "1px solid var(--border)",
                      }}>
                        <span style={{ fontSize: 11, color: "var(--fg-muted)" }}>薪资范围</span>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{j.salary}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 12 }}>
        <button onClick={() => go(-1)} style={{
          width: 36, height: 36, borderRadius: "50%",
          border: "1px solid var(--border)", background: "var(--bg-card)",
          fontSize: 16, cursor: "pointer", color: "var(--fg-secondary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>&#8592;</button>
        <div style={{ display: "flex", gap: 5 }}>
          {jobs.map((_, i) => (
            <div key={i} onClick={() => setA(i)} style={{
              width: i === a ? 18 : 5, height: 5, borderRadius: 3,
              background: i === a ? "var(--fg)" : "var(--border-hover)",
              transition: "all 0.35s", cursor: "pointer",
            }} />
          ))}
        </div>
        <button onClick={() => go(1)} style={{
          width: 36, height: 36, borderRadius: "50%",
          border: "1px solid var(--border)", background: "var(--bg-card)",
          fontSize: 16, cursor: "pointer", color: "var(--fg-secondary)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>&#8594;</button>
      </div>
    </div>
  );
}
