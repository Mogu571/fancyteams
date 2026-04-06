export default function Hero({ count }: { count: number }) {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "5rem 2rem 3rem",
        background: "linear-gradient(180deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 100%)",
      }}
    >
      <div className="animate-fade-in-up">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 16px",
            borderRadius: "999px",
            background: "var(--accent-light)",
            color: "var(--accent)",
            fontSize: "13px",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          收录 {count} 款工具
        </div>
      </div>

      <h1
        className="animate-fade-in-up stagger-2"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          margin: "0 0 1rem",
          maxWidth: "680px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        发现最好的
        <br />
        <span style={{ color: "var(--accent)" }}>笔记与知识管理</span>工具
      </h1>

      <p
        className="animate-fade-in-up stagger-3"
        style={{
          fontSize: "17px",
          lineHeight: 1.7,
          color: "var(--muted)",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        精选全球优质笔记应用与协作平台，帮你找到最适合的生产力工具
      </p>
    </section>
  );
}
