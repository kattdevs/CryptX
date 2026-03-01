/**
 * MetricCard.jsx
 * --------------
 * Displays one crypto coin stat.
 * Props: id (coin key), bg (hex), label, value, change, up (bool)
 *
 * Coin icons are inline SVGs matched to the Figma designs:
 *   BTC → bold B with serifs on orange
 *   ETH → Ethereum diamond on purple  
 *   LTC → L-strike on blue
 *   ADA → starburst dots on green
 */

const ICONS = {
  BTC: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M15.5 11.5c.8-.5 1.3-1.4 1.3-2.4C16.8 7.2 15.3 6 13 6H8v12h5.5c2.5 0 4.2-1.4 4.2-3.5 0-1.4-.7-2.4-2.2-3zM10 8h2.8c1 0 1.7.5 1.7 1.5S13.8 11 12.8 11H10V8zm3.2 8H10v-3h3.2c1.1 0 1.8.6 1.8 1.5s-.7 1.5-1.8 1.5z"/>
    </svg>
  ),
  ETH: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M12 2L5.5 12.5 12 16l6.5-3.5L12 2zm0 3.8 4.2 6.4L12 14.2l-4.2-2L12 5.8zM5.5 14l6.5 8 6.5-8-6.5 3.5L5.5 14z"/>
    </svg>
  ),
  LTC: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M9 5h2.2v6.2L9 12v1.8h2.2V19h7.6v-2h-5.4v-3.2h4.2v-1.8h-4.2v-1.8l2.2-.8V8.4l-2.2.8V5H9zM7 12.8l1.8-.7v1.7H7v-1z"/>
    </svg>
  ),
  ADA: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="2"/>
      <circle cx="12" cy="4.5" r="1.3"/>
      <circle cx="12" cy="19.5" r="1.3"/>
      <circle cx="19.5" cy="12" r="1.3"/>
      <circle cx="4.5"  cy="12" r="1.3"/>
      <circle cx="17.2" cy="6.8"  r="1.1"/>
      <circle cx="6.8"  cy="17.2" r="1.1"/>
      <circle cx="17.2" cy="17.2" r="1.1"/>
      <circle cx="6.8"  cy="6.8"  r="1.1"/>
    </svg>
  ),
};

export default function MetricCard({ id, bg, label, value, change, up }) {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: "18px 20px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      {/* Top row: icon left, change badge right */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Rounded-square coin icon */}
        <div style={{
          width: 46,
          height: 46,
          borderRadius: 13,
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          {ICONS[id]}
        </div>

        {/* Change badge */}
        <span style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontSize: 11.5,
          fontWeight: 600,
          color: up ? "#22c55e" : "#f97316",
        }}>
          {up
            ? <svg width="9" height="9" viewBox="0 0 10 10" fill="#22c55e"><path d="M5 1 9 9H1z"/></svg>
            : <svg width="9" height="9" viewBox="0 0 10 10" fill="#f97316"><path d="M5 9 1 1h8z"/></svg>
          }
          {change}
        </span>
      </div>

      {/* Price value */}
      <p style={{ fontSize: 26, fontWeight: 700, color: "#111827", margin: 0, lineHeight: 1.1 }}>{value}</p>

      {/* Coin label */}
      <p style={{ fontSize: 11.5, color: "#9ca3af", margin: 0 }}>{label}</p>
    </div>
  );
}