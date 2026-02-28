import {btcLinepath, btcDot, btcXLabels, btcYLabels } from "../../data/chartStaticData";

export default function ChartVisual() {
    const W = 320, H = 160;
    return (
        <div className="bg-white rounded-2xl p-4 h-full"
        style={{boxShadow: "0 1px 4px rgba(0,0,0,0.7)"}}>
            <p className="text-sm font-semibold text-gray-800 mb-2">BTC Prices</p>
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{height: "130px"}}>
                {/*Y-axis labels */}
                {btcYLabels.map((val, i) => (
                    <text key={val} x="0" y={8+i*28} fontSize="8" fill="#9ca3af">{val}</text>
                ))}
                {/*Vertical highlight bar */}
                <rect 
                x={btcDot.x -10} y={btcDot.y}
                width={20} height={H - btcDot.y}
                fill="#e8e8ff" rx="4"
                />
                {/*Price line*/}
                <path
                d={btcLinepath}
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                {/*Active Dot*/}
                <circle cx={btcDot.x} cy={btcDot.y} r="5" fill="#6366f1"/>
                {/*Tooltip pill*/}
                <rect x={btcDot.x - 22} y={btcDot.y -22} width={44} height={16} rx="4" fill="#6366f1" />
                <text x={btcDot.x} y={btcDot.y -11} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">
                    {btcDot.label}
                </text>
                {/*X-axis labels*/}
                {btcXLabels.map((month, i) => (
                    <text key={month} x={20 + i * 56} y={H - 2} fontSize="8" fill="#9ca3af">{month}</text>
                ))}
                </svg>
            </div>
    );
}