
import { liveMarket } from "../../data/transactionData";
import SparkLine from "./SparkLine";

// Circular coin icons with border matching Figma style
const CoinCircle = ({ name }) => {
  const styles = {
    Ethereum: { bg: "#f5f3ff", border: "#ddd6fe", color: "#7c3aed" },
    Bitcoin:  { bg: "#fffbeb", border: "#fde68a", color: "#d97706" },
    Litecoin: { bg: "#eff6ff", border: "#bfdbfe", color: "#2563eb" },
    Cardano:  { bg: "#f0fdf4", border: "#bbf7d0", color: "#16a34a" },
  };
  const s = styles[name] ?? { bg: "#f9fafb", border: "#e5e7eb", color: "#6b7280" };
  const symbols = { Ethereum: "Ξ", Bitcoin: "₿", Litecoin: "Ł", Cardano: "₳" };

  return (
    <div style={{
      width: "40px", height: "40px", borderRadius: "50%",
      backgroundColor: s.bg,
      border: `1.5px solid ${s.border}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: s.color, fontSize: "16px", fontWeight: 700,
      fontFamily: "serif", flexShrink: 0,
    }}>
      {symbols[name]}
    </div>
  );
};

export default function LiveMarket() {
  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    }}>
      <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1f2937", margin: "0 0 16px 0" }}>
        Live Market
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {liveMarket.map((item) => (
          <div key={`${item.name}-${item.pair}`} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CoinCircle name={item.name} />

            {/* Name + pair */}
            <div style={{ width: "90px" }}>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f2937", margin: 0 }}>{item.name}</p>
              <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>{item.pair}</p>
            </div>

            {/* Change */}
            <div style={{ width: "70px" }}>
              <p style={{ fontSize: "10px", color: "#9ca3af", margin: 0 }}>Change</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: item.up ? "#22c55e" : "#ef4444", margin: 0 }}>
                {item.change}
              </p>
            </div>

            {/* Price */}
            <div style={{ width: "85px" }}>
              <p style={{ fontSize: "10px", color: "#9ca3af", margin: 0 }}>Price</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#374151", margin: 0 }}>{item.price}</p>
            </div>

            {/* Sparkline */}
            <SparkLine path={item.path} color={item.color} />
          </div>
        ))}
      </div>
    </div>
  );
}