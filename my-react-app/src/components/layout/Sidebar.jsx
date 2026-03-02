const NAV = [
  {
    label: "Overview",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
  },
  {
    label: "Chart",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3.5 2"/>
      </svg>
    ),
  },
  {
    label: "Transactions",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20M7 15h2M13 15h4"/>
      </svg>
    ),
  },
  {
    label: "Wallet",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M16 3l-4 4-4-4"/>
        <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Mail Box",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 8l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "Setting",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    label: "Logout",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <aside style={{
        width: 148,
        minHeight: "100vh",
        backgroundColor: "#fff",
        boxShadow: "2px 0 12px rgba(0,0,0,0.06)",
        padding: "24px 12px",
        position: "fixed",
        left: 0, top: 0, bottom: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
      }}>

        {/* Logo ── infinity loop + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, paddingLeft: 4 }}>
          <svg width="30" height="19" viewBox="0 0 50 30" fill="none">
            {/* Left loop */}
            <path
              d="M25 15 C25 15 20 5 11 5 C5 5 1 9 1 15 C1 21 5 25 11 25 C20 25 25 15 25 15 Z"
              fill="#6366f1"
            />
            {/* Right loop — lighter */}
            <path
              d="M25 15 C25 15 30 25 39 25 C45 25 49 21 49 15 C49 9 45 5 39 5 C30 5 25 15 25 15 Z"
              fill="#6366f1"
              opacity="0.45"
            />
          </svg>
          <span style={{ fontWeight: 700, fontSize: 15, color: "#111827", letterSpacing: "-0.3px" }}>
            CryptX
          </span>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map(({ label, icon }) => {
            const active = label === "Overview";
            return (
              <button
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 8px",
                  borderRadius: 10,
                  fontSize: 12.5,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#4f46e5" : "#9ca3af",
                  backgroundColor: active ? "#eef2ff" : "transparent",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                {icon}
                {label}
                {active && (
                  <span style={{
                    marginLeft: "auto",
                    width: 7, height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#6366f1",
                    flexShrink: 0,
                  }} />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/*Mobile overlay backdrop (shown when open — future enhancement) */}
    </>
  );
}