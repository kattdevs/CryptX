export default function Header() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 24px",
      backgroundColor: "#f5f6fa",
      position: "sticky",
      top: 0,
      zIndex: 40,
    }}>

      {/* Search bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: "9px 14px",
        width: 240,
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      }}>
        <svg width="13" height="13" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          placeholder="Search type of keywords"
          readOnly
          style={{
            fontSize: 12,
            color: "#9ca3af",
            background: "transparent",
            border: "none",
            outline: "none",
            width: "100%",
            fontFamily: "inherit",
          }}
        />
      </div>

      {/* Right cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>

        {/* Bell */}
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", alignItems: "center" }}>
          <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>

        {/* Help circle */}
        <button style={{
          background: "none",
          border: "1.5px solid #d1d5db",
          borderRadius: "50%",
          width: 26, height: 26,
          fontSize: 12,
          fontWeight: 600,
          color: "#9ca3af",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "inherit",
        }}>?</button>

        {/* Avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a78bfa, #6366f1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
          }}>L</div>
          <div>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: "#111827", margin: 0, lineHeight: 1.4 }}>Laurice</p>
            <p style={{ fontSize: 11, color: "#9ca3af", margin: 0, lineHeight: 1.4 }}>@laurice22</p>
          </div>
          {/* Dropdown caret */}
          <svg width="12" height="12" fill="none" stroke="#9ca3af" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
