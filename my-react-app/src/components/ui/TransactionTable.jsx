import {transactions} from "../../data/transactionData"

const TransactionTable = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-6">Transactions</h2>

            <div className="space-y-4">
                {transactions.map((tx) => (
                    <div key={tx.id} className="flex justify-between">
                        <div>
                            <p className="font-medium">{tx.name}</p>
                            <p className="text-sm text-gray-400">{tx.time}</p>
                            </div>
                            <p className="font-semibold">{tx.amount}</p>
                            </div>
                ))}   
            </div>
        </div>
    );
};

export default TransactionTable;