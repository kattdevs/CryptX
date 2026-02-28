import {transactions} from "../../data/transactionData";

/*Coin icon styles mapped by name*/ 
const coinStyle ={
    Ethereum: {bg:"#ede9fe", color:"#7c3aed", symbol:"Ξ"},
    Bitcoin: {bg:"#fff7ed", color:"#ea580c", symbol:"₿"},
    Litecoin: {bg:"#dbeafe", color:"#2563eb", symbol:"Ł"},
    Cardano: {bg:"#dbcfe7", color:"#16a34a", symbol:"₳"},
};

export default function TransactionTable() {
    return(
        <div className="bg-white rounded-2xl p-4"
        style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.7)"}}>
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Transactions</h3>

            <div className="flex flex-col gap-3">
                {transactions.map((tx, i) => {
                    const s= coinStyle[tx.name] ?? {bg: "#f3f4f6", color: "#6b7280", symbol:"?"};
                    return (
                        <div key={i} className="flex items-center gap-3">

                            {/*Coin icon*/}
                            <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                            style={{ backgroundColor: s.bg, color: s.color}}
                            >
                                {s.symbol}
                                </div>

                                {/*Name + type*/}
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-gray-800">{tx.name}</p>
                                    <p className="text-xs text-gray-400">{tx.type}</p>
                                    </div>

                                    {/*Direction arrow*/}
                                    <div 
                                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
                                    style={{
                                        backgroundColor: tx.arrowUp ? "#dcfce7" : "#fee2e2",
                                        color: tx.arrowUp ? "#16a34a" : "#ef4444",
                                    }}
                                    >
                                        {tx.arrowUp ? "↑" : "↓"}
                                        </div>
                                        </div>
                    );
                })}
                </div>
                </div>
    );
}