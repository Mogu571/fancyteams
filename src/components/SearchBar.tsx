"use client";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "480px",
        width: "100%",
      }}
    >
      {/* Search icon */}
      <svg
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "18px",
          height: "18px",
          color: "var(--muted)",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        placeholder="搜索工具名称、特性..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px 12px 46px",
          fontSize: "15px",
          borderRadius: "14px",
          border: "1px solid var(--card-border)",
          background: "var(--search-bg)",
          color: "var(--foreground)",
          outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-light)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--card-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "none",
            background: "var(--tag-bg)",
            color: "var(--muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
