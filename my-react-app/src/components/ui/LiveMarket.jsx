/**Live market panel in the bottom-left of the dashboard */
import {liveMarket} from "../../data/transactionData";
import SparkLine from "./SparkLine";

/** a coin name to Tailwind icon background */
const coinStyle = {
    Ethereum: {bg:"bg-purple-100", text:"text-purple-600", symbol:""},
    Bitcoin: {bg:"bg-yellow-100", text:"text-yellow-600", symbol:""},
    Litecoin: {bg:"bg-blue-100", text:"text-blue-600", symbol:""},
    Cardano: {bg:"bg-green-100", text:"text-green-600", symbol:""},
};

export default function LiveMarket() {
    return(
        <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Live Market</h3>
            <div className="flex flex-col gap-3">
                {liveMarket.map((item) => {
                    const style = coinStyle[item.name] ?? { bg:"bg-gray-100", text: "text-gray-600", symbol:"?"};

                    return (
                        <div key={`${item.name}-${item.pair}`} className="flex items-center gap-3">

                         {/*Coin icon circle*/}  
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${style.bg} ${style.text}`}>
                            {style.symbol}
                            </div>

                            {/*Coin name + trending pair*/}
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-gray-800">{item.name}</p>
                                <p className="text-xs text-gray-400">{item.pair}</p>
                            </div>

                            {/*24h Change*/}
                            <div className="text-right min-w-[70px]">
                                <p className="text-xs text-gray-400">Price</p>
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