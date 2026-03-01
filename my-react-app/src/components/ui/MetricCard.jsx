// Coin SVG icons matching the Figma rounded-square style
const CoinIcon = ({ name, bg }) => {
  const icons = {
    "₿": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.5 9.5c.5-1.5-.5-3-3-3.5V3h-2v3h-1.5V3h-2v3H6v2h1.5v8H6v2h3.5v3h2v-3H13v3h2v-3c3 0 5-1 5-3.5 0-1.5-.8-2.5-2.5-3zm-7-1h3c1 0 1.5.5 1.5 1.5S14.5 11 13.5 11h-3V8.5zm3.5 7h-3.5V13H14c1 0 1.5.5 1.5 1.5S15 15.5 14 15.5z"/>
      </svg>
    ),
    "Ξ": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2L4 12l8 4 8-4-8-10zm0 3.5L17.5 12 12 14.5 6.5 12 12 5.5zM4 13.5l8 4.5 8-4.5V15l-8 4.5L4 15v-1.5z"/>
      </svg>
    ),
    "Ł": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15H8v-2h2V8H8V6h5v9h2v2h-2z"/>
      </svg>
    ),
    "₳": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3l5 12h-2.5l-1-2.5h-3L9.5 17H7L12 5zm1.5 7.5h-3l1.5-4 1.5 4z"/>
      </svg>
    ),
  };

  return (
    <div style={{
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      backgroundColor: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {icons[name] || <span style={{ color: "white", fontSize: "20px", fontWeight: 700 }}>{name}</span>}
    </div>
  );
};

export default function MetricCard({ icon, bg, label, value, change, up }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}>
      {/* Icon + change */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <CoinIcon name={icon} bg={bg} />
        <span style={{
          fontSize: "12px",
          fontWeight: 600,
          color: up ? "#22c55e" : "#ef4444",
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}>
          {up
            ? <svg width="10" height="10" viewBox="0 0 10 10" fill="#22c55e"><path d="M5 2l4 6H1l4-6z"/></svg>
            : <svg width="10" height="10" viewBox="0 0 10 10" fill="#ef4444"><path d="M5 8L1 2h8L5 8z"/></svg>
          }
          {change}
        </span>
      </div>

      {/* Value */}
      <p style={{ fontSize: "26px", fontWeight: 700, color: "#1f2937", margin: 0 }}>{value}</p>

      {/* Label */}
      <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>{label}</p>
    </div>
  );
}
