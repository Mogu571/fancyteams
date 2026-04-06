"use client";

import { Tool } from "@/data/tools";
import Logo from "./Logo";
import LinkIcon from "./LinkIcon";

export default function MasonryView({ tools }: { tools: Tool[] }) {
  const cols: { t: Tool; i: number }[][] = [[], [], []];
  tools.forEach((t, i) => cols[i % 3].push({ t, i }));

  return (
    <div style={{ display: "flex", gap: 0 }}>
      {cols.map((col, ci) => (
        <div key={ci} style={{ flex: 1, minWidth: 0 }}>
          {col.map(({ t, i }) => (
            <div key={t.id} style={{
              padding: 8,
              animation: `fadeInUp 0.4s ${ci * 0.06 + i * 0.04}s both ease-out`,
            }}>
              {i % 3 === 0 ? (
                <article style={{
                  overflow: "hidden", borderRadius: 12,
                  border: "1px solid var(--border)", background: "var(--bg-card)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://picsum.photos/seed/${t.id}/600/380`}
                    alt={t.name}
                    style={{ display: "block", width: "100%", height: "auto" }}
                  />
                  <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 12, color: "var(--fg-muted)", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg)", margin: 0 }}>{t.long}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <LinkIcon size={14} />
                      <span style={{
                        fontSize: 12, color: "var(--fg-muted)",
                        textDecoration: "underline", textDecorationColor: "var(--border)",
                        textUnderlineOffset: 2,
                      }}>{t.site}</span>
                    </div>
                  </div>
                </article>
              ) : (
                <article style={{
                  overflow: "hidden", borderRadius: 12,
                  border: "1px solid var(--border)", background: "var(--bg-card)",
                  padding: 12, display: "flex", flexDirection: "column", gap: 8,
                }}>
                  <Logo src={t.logo} />
                  <p style={{ fontSize: 12, color: "var(--fg-secondary)", margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--fg)", margin: 0 }}>{t.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {t.tags.slice(0, 3).map((tag) => (
                      <span key={tag} style={{ fontSize: 11, color: "var(--fg-muted)" }}>#{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--fg-muted)", margin: 0 }}>{t.year} · {t.loc}</p>
                </article>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
