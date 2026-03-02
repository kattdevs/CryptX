import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";

export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#f5f6fa",
      fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      position: "relative",
    }}>
      <Sidebar />
      <MainContent />
    </div>
  );
}