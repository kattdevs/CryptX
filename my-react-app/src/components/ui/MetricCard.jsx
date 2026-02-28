export default function MetricCard ({icon, bg, label, value, change, up}) {
    return (
        <div className="bg-white rounded-2xl p-4 flex flex-col gap-2"
        style={{ boxShadow:"0 1px 4px rgba(0,0,0,0.7)" }}>
            {/*Icon + change row*/}
            <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
            style={{backgroundColor:bg}}
            >
                {/*icon*/}
                </div>
                <span className={`text-xs font-semibold ${up ? "text-green-500" : "text-red-500"}`}>
                {up ? "▲" : "▼" } {change}
                </span>
                </div>

               {/*Price*/}
                <p className="text-2xl font-bold text-gray-800">{value}</p>

                {/*Coin lable*/}
                <p className="text-xs text-gray-400">{lable}</p>
                </div>
    );
}