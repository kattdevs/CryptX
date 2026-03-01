/**
 * LiveMarket.jsx
 * --------------
 * Bottom-left panel. Renders liveMarket[] array from transactionData.js.
 * Each row: bordered circle icon | name + pair | Change col | Price col | Sparkline
 */

import { liveMarket } from "../../data/transactionData";
import SparkLine from "./SparkLine";

// Coin circle style map — bg fill, border color, text color, symbol
const COIN = {
  Ethereum: { bg: "#f5f3ff", border: "#c4b5fd", color: "#7c3aed", symbol: "Ξ" },
  Bitcoin:  { bg: "#fffbeb", border: "#fcd34d", color: "#d97706", symbol: "₿" },
  Litecoin: { bg: "#eff6ff", border: "#93c5fd", color: "#2563eb", symbol: "Ł" },
  Cardano:  { bg: "#f0fdf4", border: "#86efac", color: "#16a34a", symbol: "₳" },
};

function CoinCircle({ name }) {
  const c = COIN[name] ?? { bg: "#f3f4f6", border: "#e5e7eb", color: "#6b7280", symbol: "?" };
  return (
    <div style={{
      width: 38, height: 38,
      borderRadius: "50%",
      backgroundColor: c.bg,
      border: `1.5px solid ${c.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: c.color,
      fontSize: 15,
      fontWeight: 700,
      fontFamily: "serif",
      flexShrink: 0,
    }}>
      {c.symbol}
    </div>
  );
}

export default function LiveMarket() {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: "18px 20px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    }}>
      {/* Panel title */}
      <p style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 16px 0" }}>
        Live Market
      </p>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {liveMarket.map((item) => (
          <div key={item.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>

            {/* Coin circle */}
            <CoinCircle name={item.name} />

            {/* Name + pair */}
            <div style={{ minWidth: 90, flex: 1 }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "#111827", margin: 0 }}>{item.name}</p>
              <p style={{ fontSize: 10.5, color: "#9ca3af", margin: 0 }}>{item.pair}</p>
            </div>

            {/* Change */}
            <div style={{ minWidth: 64 }}>
              <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>Change</p>
              <p style={{
                fontSize: 12,
                fontWeight: 600,
                color: item.up ? "#22c55e" : "#ef4444",
                margin: 0,
              }}>
                {item.change}
              </p>
            </div>

            {/* Price */}
            <div style={{ minWidth: 84 }}>
              <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>Price</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#374151", margin: 0 }}>{item.price}</p>
            </div>

            {/* Sparkline */}
            <SparkLine path={item.path} color={item.color} />
          </div>
        ))}
      </div>
    </div>
  );
}