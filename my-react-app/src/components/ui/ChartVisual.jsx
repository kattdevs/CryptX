import { btcLinePath, btcDot, btcXLabels, btcYLabels } from "../../data/chartStaticData";

export default function ChartVisual() {
  const W = 340, H = 180;

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
    }}>
      <p style={{ fontSize: "15px", fontWeight: 700, color: "#1f2937", margin: "0 0 12px 0" }}>
        BTC Prices
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "200px" }}>

        {/* Y-axis labels */}
        {btcYLabels.map((val, i) => (
          <text key={val} x="2" y={12 + i * 32} fontSize="9" fill="#9ca3af">${val}</text>
        ))}

        {/* Vertical highlight bar */}
        <rect
          x={btcDot.x - 10} y={btcDot.y + 6}
          width={20} height={H - btcDot.y - 24}
          fill="#e8e8ff" rx="4"
        />

        {/* Price line */}
        <path
          d={btcLinePath}
          fill="none"
          stroke="#6366f1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Active dot */}
        <circle cx={btcDot.x} cy={btcDot.y} r="5" fill="#6366f1" />

        {/* Tooltip */}
        <rect x={btcDot.x - 26} y={btcDot.y - 24} width={52} height={18} rx="5" fill="#6366f1" />
        <text x={btcDot.x} y={btcDot.y - 11} textAnchor="middle" fontSize="7.5" fill="white" fontWeight="bold">
          {btcDot.label}
        </text>

        {/* X-axis baseline */}
        <line x1="28" y1={H - 14} x2={W - 8} y2={H - 14} stroke="#e5e7eb" strokeWidth="1" />

        {/* X-axis labels */}
        {btcXLabels.map((month, i) => (
          <text key={month} x={32 + i * 56} y={H - 3} fontSize="9" fill="#9ca3af">{month}</text>
        ))}

      </svg>
    </div>
  );
}