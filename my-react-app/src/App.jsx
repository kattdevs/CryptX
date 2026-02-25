import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="flex h-screen bg-[#f5f56fa]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
       <MainContent /> 
      </div>
    </div>
  );
}

export default App;
