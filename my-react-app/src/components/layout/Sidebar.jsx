// commit: update Sidebar with SVG outline icons and larger infinity-style logo

// SVG icon paths for each nav item (outline style matching Figma)
const icons = {
  Overview:     <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  Chart:        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l5 3"/></svg>,
  Transactions: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"/></svg>,
  Wallet:       <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M2 10h20"/></svg>,
  
  Setting:      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></svg>,
  Logout:       <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

const navItems = [
  { label: "Overview",     active: true  },
  { label: "Chart",        active: false },
  { label: "Transactions", active: false },
  { label: "Wallet",       active: false },
  { label: "Mail Box",     active: false },
  { label: "Setting",      active: false },
  { label: "Logout",       active: false },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: "200px",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      boxShadow: "2px 0 8px rgba(0,0,0,0.06)",
      padding: "24px 16px",
      position: "fixed",
      left: 0, top: 0, bottom: 0,
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px", paddingLeft: "4px" }}>
        {/* Infinity loop SVG logo */}
        <svg width="32" height="20" viewBox="0 0 40 24" fill="none">
          <path d="M20 12 C20 12 15 4 8 4 C3 4 0 8 0 12 C0 16 3 20 8 20 C15 20 20 12 20 12 Z" fill="#6366f1" opacity="0.9"/>
          <path d="M20 12 C20 12 25 20 32 20 C37 20 40 16 40 12 C40 8 37 4 32 4 C25 4 20 12 20 12 Z" fill="#6366f1" opacity="0.5"/>
        </svg>
        <span style={{ fontWeight: 700, fontSize: "16px", color: "#1f2937", letterSpacing: "-0.3px" }}>CryptX</span>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {navItems.map((item) => (
          <button key={item.label} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "9px 10px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: item.active ? 600 : 400,
            color: item.active ? "#4f46e5" : "#9ca3af",
            backgroundColor: item.active ? "#eef2ff" : "transparent",
            border: "none",
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
          }}>
            {icons[item.label]}
            {item.label}
            {item.active && (
              <span style={{
                marginLeft: "auto",
                width: "7px", height: "7px",
                borderRadius: "50%",
                backgroundColor: "#6366f1",
                flexShrink: 0,
              }} />
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
