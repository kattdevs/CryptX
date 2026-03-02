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
          flex:1;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          min-width: 0;
          background-color: #f5f6fa;
          overflow-x: hidden;
        }
        .dashboard-padding {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          width:100%;
          box-sizing:border-box;
        }
        /* Top row: metric cards (2/3) + chart (1/3) */
        .top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 14px;
          align-items: stretch;
        }
        .metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        
        /* Bottom row: live market + transactions */
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* Tablet 768-1023px: chart drops below cards */
        @media (max-width: 1023px) {
          .top-grid { 
          grid-template-columns: 1fr; 
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .dash-body{
          padding:12px;
          padding-top:56px;
      }
            .top-grid{
            grid-template-columns: 1fr;
      }
            .metric-grid {
            grid-template-columns:1fr 1fr;
      }
            .bottom-grid{
            grid-template-columns:1fr
      }
        }
         @media (max-width: 479px) {
            .metric-grid {
            grid-template-columns:1fr;
      }
        }
        `}</style>

      <main className="main-content">
        <Header />
        <div className="dash-body">

          {/* Top row  */}
          <div className="top-grid">

            {/* 2×2 metric cards */}
            <div className="metric-grid">
              {metricCards.map((card) => (
                <MetricCard key={card.id} {...card} />
              ))}
              </div>

            {/* BTC chart */}
              <ChartVisual />
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