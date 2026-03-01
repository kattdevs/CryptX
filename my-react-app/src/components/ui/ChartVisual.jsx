/**
 * ChartVisual.jsx
 * ---------------
 * SVG BTC price chart. No external libraries.
 * - Wave line starts ~$550 Jan, peaks ~$700 Mar, dips May (dot + tooltip),
 *   dips Jul, rises steeply to ~$750 Nov.
 * - Vertical lavender highlight bar below dot.
 * - Y-axis: $800→0, X-axis: Jan→Nov.
 * - Horizontal baseline rule at y=0.
 */

import { btcLinePath, btcDot, btcXLabels, btcYLabels } from "../../data/chartStaticData";

export default function ChartVisual() {
  const W = 340;
  const H = 200;

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: 16,
      padding: "18px 16px 12px 16px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      {/* Title */}
      <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>
        BTC Prices
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", flex: 1, minHeight: 170 }}
        aria-label="BTC price line chart"
      >
        {/* Y-axis labels  */}
        {btcYLabels.map(({ label, y }) => (
          <text key={label} x="2" y={y} fontSize="9" fill="#9ca3af" dominantBaseline="middle">
            {label}
          </text>
        ))}

        {/* Baseline at y=0 */}
        <line
          x1="36" y1={btcYLabels[4].y}
          x2={W - 6} y2={btcYLabels[4].y}
          stroke="#e5e7eb" strokeWidth="1"
        />

        {/* Vertical highlight bar under dot */}
        <rect
          x={btcDot.x - 10}
          y={btcDot.y + 6}
          width={20}
          height={btcYLabels[4].y - btcDot.y - 6}
          fill="#e8e8ff"
          rx="4"
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
        <circle cx={btcDot.x} cy={btcDot.y} r="5" fill="#6366f1"/>

        {/*Tooltip*/}
        <rect
          x={btcDot.x - 28}
          y={btcDot.y - 30}
          width={56}
          height={20}
          rx="6"
          fill="#6366f1"
        />
        <text
          x={btcDot.x}
          y={btcDot.y - 16}
          textAnchor="middle"
          fontSize="8"
          fill="white"
          fontWeight="700"
        >
          {btcDot.label}
        </text>

        {/* X-axis labels*/}
        {btcXLabels.map((month, i) => (
          <text
            key={month}
            x={40 + i * 56}
            y={H - 4}
            fontSize="9"
            fill="#9ca3af"
            textAnchor="middle"
          >
            {month}
          </text>
        ))}
      </svg>
    </div>
  );
}