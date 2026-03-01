import { transactions } from "../../data/transactionData";

const CoinCircle = ({ name }) => {
  const styles = {
    Ethereum: { bg: "#f5f3ff", border: "#ddd6fe", color: "#7c3aed", symbol: "Ξ" },
    Bitcoin:  { bg: "#fffbeb", border: "#fde68a", color: "#d97706", symbol: "₿" },
    Litecoin: { bg: "#eff6ff", border: "#bfdbfe", color: "#2563eb", symbol: "Ł" },
    Cardano:  { bg: "#f0fdf4", border: "#bbf7d0", color: "#16a34a", symbol: "₳" },
  };
  const s = styles[name] ?? { bg: "#f9fafb", border: "#e5e7eb", color: "#6b7280", symbol: "?" };

  return (
    <div style={{
      width: "40px", height: "40px", borderRadius: "50%",
      backgroundColor: s.bg,
      border: `1.5px solid ${s.border}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: s.color, fontSize: "16px", fontWeight: 700,
      fontFamily: "serif", flexShrink: 0,
    }}>
      {s.symbol}
    </div>
  );
};

export default function TransactionTable() {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    }}>
      <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1f2937", margin: "0 0 16px 0" }}>
        Transactions
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {transactions.map((tx, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CoinCircle name={tx.name} />

            {/* Name + type */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f2937", margin: 0 }}>{tx.name}</p>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>{tx.type}</p>
            </div>

            {/* Amount + time */}
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f2937", margin: 0 }}>{tx.amount}</p>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>{tx.time}</p>
            </div>

            {/* Arrow */}
            <div style={{
              width: "24px", height: "24px", borderRadius: "50%",
              backgroundColor: tx.arrowUp ? "#dcfce7" : "#fee2e2",
              color: tx.arrowUp ? "#16a34a" : "#ef4444",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px", flexShrink: 0,
            }}>
              {tx.arrowUp ? "↑" : "↓"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}