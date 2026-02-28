import Header from "./Header"
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import LiveMarket from "../ui/LiveMarket";
import TransactionTable from "../ui/TransactionTable";
import { metricCards } from "../../data/chartStaticData";

export default function MainContent() {
    return(
        <main className="flex flex-col flex-1  min-h-screen bg-[#f5f6fa]" style={{ marginLeft: "144px"}}>
            <Header />

            <div className="p-5 flex flex-col gap-5">

                {/*Top row:2*2 metric cards + BTC chart */}
                <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr 1fr"}}>

                    {/*2*2 Metric card grid*/}
                    <div className="grid grid-cols-2 gap-4" style={{gridColumn:"span 2"}}>
                        {metricCards.map((card) => (
                            /*Each card recieves all its display props via spread*/
                            <MetricCard key={card.label} {...card} />
                        ))}
                        </div>

                        {/*BTC Price Chart fills the 3rd column*/}
                            <ChartVisual />
                            </div>

                        {/*Bottom row: Live Market + Transactions */}
                        <div className="grid grid-cols-2 gap-4">
                            <LiveMarket />
                            <TransactionTable />
                            </div>

                        </div>
                    </main>                    

    );
}