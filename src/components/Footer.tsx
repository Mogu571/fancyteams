export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--card-border)",
        padding: "2.5rem 2rem",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "14px", color: "var(--muted)", margin: 0 }}>
        用 Next.js + Tailwind CSS 构建 · 部署在 GitHub Pages
      </p>
      <p
        style={{
          fontSize: "13px",
          color: "var(--muted)",
          margin: "8px 0 0",
          opacity: 0.6,
        }}
      >
        数据仅供参考，请以各产品官网为准
      </p>
    </footer>
  );
}
