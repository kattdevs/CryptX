import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";

const MainContent = () => {
    return (
        <main className="p-8 overflow-y-auto">
            {/*Metric Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <MetricCard
                title="Bitcoin - BTC"
                value="$40,291"
                change="+0.25%"
                color="bg-yellow-400"
                />
                <MetricCard
                title="Ethereum - ETH"
                value="$18,291"
                change="+0.25%"
                color="bg-indigo-500"
                />
                 <MetricCard
                title="Litecoin - LTC"
                value="$8,291"
                change="+0.25%"
                color="bg-blue-500"
                />
                 <MetricCard
                title="Cardano - ADA"
                value="$3,291"
                change="-2.05%"
                color="bg-green-500"
                />
            </div>

            {/*Chart = Trabsactions*/}
            <div className="grid grid-cols-1 lg:grid-cols gap-6">
                <div className="lg:col-span-2">
                    <ChartVisual />
                </div>
            <div>
                <TransactionTable />
                </div>
                </div>
        </main>
    );
};

export default MainContent;