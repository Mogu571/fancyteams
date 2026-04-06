"use client";

export default function Logo({ src, size = 48 }: { src: string; size?: number }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0, transform: "rotate(-5deg)" }}>
      <div style={{
        width: "100%", height: "100%", borderRadius: size > 30 ? 8 : 6,
        overflow: "hidden", border: "0.5px solid var(--border)",
        background: "var(--bg-card)",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src} alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
    </div>
  );
}
