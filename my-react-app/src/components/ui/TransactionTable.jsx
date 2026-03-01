import { transactions } from "../../data/transactionData";

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

function ArrowBadge({ up }) {
  return (
    <div style={{
      width: 24, height: 24,
      borderRadius: "50%",
      backgroundColor: up ? "#dcfce7" : "#fee2e2",
      color: up ? "#16a34a" : "#ef4444",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      flexShrink: 0,
    }}>
      {up ? "↑" : "↓"}
    </div>
  );
}

export default function TransactionTable() {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: "18px 20px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    }}>
      {/* Panel title */}
      <p style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: "0 0 16px 0" }}>
        Transactions
      </p>

      {/* Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {transactions.map((tx, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>

            {/* Coin circle */}
            <CoinCircle name={tx.name} />

            {/* Name + type */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "#111827", margin: 0 }}>{tx.name}</p>
              <p style={{ fontSize: 10.5, color: "#9ca3af", margin: 0 }}>{tx.type}</p>
            </div>

            {/* Amount + time */}
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: "#111827", margin: 0 }}>{tx.amount}</p>
              <p style={{ fontSize: 10.5, color: "#9ca3af", margin: 0 }}>{tx.time}</p>
            </div>

            {/* Arrow badge */}
            <ArrowBadge up={tx.up} />
          </div>
        ))}
      </div>
    </div>
  );
}