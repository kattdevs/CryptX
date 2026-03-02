import Header from "./Header";
import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import LiveMarket from "../ui/LiveMarket";
import TransactionTable from "../ui/TransactionTable";
import { metricCards } from "../../data/chartStaticData";

export default function MainContent() {
  return (
    <>
      {/* Responsive styles */}
      <style>{`
        .main-content {
          margin-left: 148px;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f5f6fa;
        }
        .dashboard-padding {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        /* Top row: metric cards (2/3) + chart (1/3) */
        .top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 14px;
          align-items: stretch;
        }
        .metric-grid {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .chart-col {
          grid-column: span 1;
        }
        /* Bottom row: live market + transactions */
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* Tablet — hide sidebar, adjust margin */
        @media (max-width: 1023px) {
          .main-content { margin-left: 148px; }
          .top-grid { grid-template-columns: 1fr 1fr; }
          .metric-grid { grid-column: span 2; }
          .chart-col { grid-column: span 2; }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .main-content { margin-left: 0; }
          .top-grid { grid-template-columns: 1fr; }
          .metric-grid { grid-column: span 1; grid-template-columns: 1fr 1fr; }
          .chart-col { grid-column: span 1; }
          .bottom-grid { grid-template-columns: 1fr; }
          .dashboard-padding { padding: 12px; }
        }
      `}</style>

      <main className="main-content">
        <Header />
        <div className="dashboard-padding">

          {/* Top row  */}
          <div className="top-grid">

            {/* 2×2 metric cards */}
            <div className="metric-grid">
              {metricCards.map((card) => (
                <MetricCard key={card.id} {...card} />
              ))}
            </div>

            {/* BTC chart */}
            <div className="chart-col">
              <ChartVisual />
            </div>
          </div>

          {/* Bottom row  */}
          <div className="bottom-grid">
            <LiveMarket />
            <TransactionTable />
          </div>

        </div>
      </main>
    </>
  );
}