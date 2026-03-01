import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";

export default function App() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#f5f6fa",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
    }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}