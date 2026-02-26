import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="flex min-h-screen bg-[#f5f56fa] overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Header />
       <MainContent /> 
      </div>
    </div>
  );
}

export default App;
