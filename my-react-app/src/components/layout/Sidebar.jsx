
import { useState } from "react";

const NAV = [
  { label: "Overview",     icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg> },
  { label: "Chart",        icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg> },
  { label: "Transactions", icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h2M13 15h4"/></svg> },
  { label: "Wallet",       icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 3l-4 4-4-4"/><circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/></svg> },
  { label: "Mail Box",     icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 8l10 7 10-7"/></svg> },
  { label: "Setting",      icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> },
  { label: "Logout",       icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> },
];

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width="30" height="19" viewBox="0 0 50 30" fill="none">
      <path d="M25 15C25 15 20 5 11 5C5 5 1 9 1 15C1 21 5 25 11 25C20 25 25 15 25 15Z" fill="#6366f1"/>
      <path d="M25 15C25 15 30 25 39 25C45 25 49 21 49 15C49 9 45 5 39 5C30 5 25 15 25 15Z" fill="#6366f1" opacity="0.45"/>
    </svg>
    <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>CryptX</span>
  </div>
);

const NavList = ({ onClose }) => (
  <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {NAV.map(({ label, icon }) => {
      const active = label === "Overview";
      return (
        <button key={label} onClick={onClose} style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "9px 8px", borderRadius: 10,
          fontSize: 12.5, fontWeight: active ? 600 : 400,
          color: active ? "#4f46e5" : "#9ca3af",
          backgroundColor: active ? "#eef2ff" : "transparent",
          border: "none", width: "100%", textAlign: "left", cursor: "pointer",
        }}>
          {icon}
          {label}
          {active && <span style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", backgroundColor: "#6366f1", flexShrink: 0 }} />}
        </button>
      );
    })}
  </nav>
);

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Sticky sidebar — stays in document flow, scrolls with page then sticks */
        .sidebar {
          width: 148px;
          min-width: 148px;
          min-height: 100vh;
          height: 100vh;
          background: #fff;
          box-shadow: 2px 0 12px rgba(0,0,0,0.06);
          padding: 24px 12px;
          position: sticky;
          top: 0;
          align-self: flex-start;
          z-index: 50;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .hamburger {
          display: none;
          position: fixed;
          top: 12px; left: 12px;
          z-index: 100;
          background: #fff;
          border: none;
          border-radius: 10px;
          padding: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          cursor: pointer;
          align-items: center;
          justify-content: center;
        }

        .drawer-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 60;
        }

        .drawer {
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: 200px;
          background: #fff;
          z-index: 70;
          padding: 24px 14px;
          box-shadow: 4px 0 20px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          gap: 28px;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
        }
        .drawer.open { transform: translateX(0); }

        /* Mobile — hide sidebar, show hamburger */
        @media (max-width: 767px) {
          .sidebar { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      {/* Desktop sticky sidebar — stays in flow so no overlap */}
      <aside className="sidebar">
        <div style={{ marginBottom: 32, paddingLeft: 4 }}><Logo /></div>
        <NavList onClose={() => {}} />
      </aside>

      {/* Mobile hamburger button */}
      <button className="hamburger" onClick={() => setOpen(true)}>
        <svg width="20" height="20" fill="none" stroke="#374151" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      {/* Mobile drawer */}
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)} />}
      <div className={`drawer ${open ? "open" : ""}`}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo />
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <NavList onClose={() => setOpen(false)} />
      </div>
    </>
  );
}