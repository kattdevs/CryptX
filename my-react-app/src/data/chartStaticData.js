// Wave: starts ~$550, peaks ~$700 at Mar, dips to $560 at May (dot), dips to $430 at Jul, rises steeply to $750 at Nov
export const btcLinePath =
  "M0,108 C30,88 60,48 90,52 C115,56 128,90 155,94 C178,98 192,118 215,124 C238,130 255,60 320,22";

export const btcDot = { x: 155, y: 94, label: "$25,240" };

export const btcXLabels = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

// Y axis: $800 top to 0 bottom — 5 evenly spaced labels
export const btcYLabels = [
  { label: "$800", y: 18  },
  { label: "$600", y: 52  },
  { label: "$400", y: 86  },
  { label: "$200", y: 120 },
  { label: "0",    y: 154 },
];

export const metricCards = [
  { id: "BTC", bg: "#f59e0b", label: "Bitcoin - BTC",  value: "$40,291", change: "+0.25%", up: true  },
  { id: "ETH", bg: "#8b5cf6", label: "Ethereum - ETH", value: "$18,291", change: "+0.25%", up: true  },
  { id: "LTC", bg: "#3b82f6", label: "Litecoin - ITL", value: "$8,291",  change: "+0.25%", up: true  },
  { id: "ADA", bg: "#22c55e", label: "Cardano - ADA",  value: "$3,291",  change: "-2.05%", up: false },
];
