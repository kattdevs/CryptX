import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import LiveMarket from "../ui/LiveMarket";
import TransactionTable from "../ui/TransactionTable";
import { metricCards } from "../../data/chartStaticData";

export default function MainContent() {
    return(
        /*Outer wrapper*/
        <main className="md:ml-36 flex-1 flex flex-col min-h-screen bg-gray-50">

            {/*Top navigation bar*/}
            <Header />

            {/*Dashboard content with padding*/}
            <div className="p-5 flex-col gap-5">

                {/*Top section*/}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

                    {/*2*2 Metric card grid*/}
                    <div className="grid grid-cols-2 gap-4 col-span-2 lg:col-span-2">
                        {metricCards.map((card) => (
                            /*Each card recieves all its display props via spread*/
                            <MetricCard key={card.label} {...card} />
                        ))}
                        </div>

                        {/*BTC Price Chart*/}
                        <div className="col-span-2 lg:col-span-1">
                            <ChartVisual />
                            </div>

                        </div>

                        {/*Bottom section*/}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <LiveMarket />
                            <TransactionTable />
                            </div>

                        </div>
                    </main>                    

    );
}