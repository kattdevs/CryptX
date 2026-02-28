/**Live market panel in the bottom-left of the dashboard */
import {liveMarket} from "../../data/transactionData";
import SparkLine from "./SparkLine";

/** coin icon styles mapped by name*/
const coinStyle = {
   Ethereum: {bg:"#ede9fe", color:"#7c3aed", symbol:"Ξ"},
   Bitcoin: {bg:"#fef9c3", color:"#d97706", symbol:"₿"},
   Litecoin: {bg:"#dbeafe", color:"#2563eb", symbol:"Ł"},
   Cardano: {bg:"#dcfce7", color:"#16a34a", symbol:"₳"},
};

export default function LiveMarket() {
    return(
        <div className="bg-white rounded-2xl p-4" style={{boxShadow:"0 1px 4px rgba(0,0,0,0.7)"}}>
            <h3 className=" text-sm font-semibold text-gray-800 mb-3">Live Market</h3>
            <div className="flex flex-col gap-3">
                {liveMarket.map((item) => {
                    const style = coinStyle[item.name] ?? { bg: "#f3f4f6", color:"#6b7280", symbol:"?"};

                    return (
                        <div key={`${item.name}-${item.pair}`} className="flex items-center gap-3">

                         {/*Coin icon*/}  
                         <div className="-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                            style={{backgroundColor: s.bg, color: s.color}}
                            >
                            {s.symbol}
                            </div>

                            {/*Coin name + trending pair*/}
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                                <p className="text-xs text-gray-400">{item.pair}</p>
                            </div>

                            {/*24h Change*/}
                            <div className="text-right" style={{minWidth: "60px"}}>
                                <p className="text-xs text-gray-400">Change</p>
                                <p className={`text-xs font-semibold ${item.up ? "text-green-500" : "text-red-500"}`}>{item.change}</p>
                                </div>

                                {/*Price*/}
                                <div className="text-right" style={{midWidth:"80px"}}>
                                    <p className="text-xs text-gray-400">rice</p>
                                    <p className="text-xs font-semibold text-gray-700">{item.price}</p>
                                    </div>

                                {/*SparkLine mini-chart*/}
                                <SparkLine path={item.path} color={item.color} />
                                </div>
                                );
                })}
                </div>
                </div>
    );
}