"use client";

type TabMode = "companies" | "jobs";

const labels: Record<TabMode, string> = {
  companies: "Teams",
  jobs: "Jobs",
};

export default function Header({
  tab, setTab,
}: {
  tab: TabMode;
  setTab: (t: TabMode) => void;
}) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "color-mix(in srgb, var(--bg) 85%, transparent)",
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      borderBottom: "0.5px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 24px",
        height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontWeight: 600, fontSize: 16, color: "var(--fg)" }}>FancyTeams</span>
        <div style={{
          display: "flex", gap: 2, background: "var(--border)",
          borderRadius: 10, padding: 3,
        }}>
          {(Object.keys(labels) as TabMode[]).map((k) => (
            <button key={k} onClick={() => setTab(k)} style={{
              padding: "5px 20px", borderRadius: 8, border: "none",
              background: tab === k ? "var(--bg-card)" : "transparent",
              color: tab === k ? "var(--fg)" : "var(--fg-muted)",
              fontWeight: tab === k ? 500 : 400,
              fontSize: 13, cursor: "pointer", transition: "all 0.2s",
              boxShadow: tab === k ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
            }}>
              {labels[k]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
