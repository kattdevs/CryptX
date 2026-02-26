import Sidebar from "./components/layout/Sidebar";
import MainContent from "./components/layout/MainContent";

 export default function App() {
  return (
    /*Full-height flex row*/
    <div className="flex min-h-screen bg-gray-50 font-sans">

      {/*Left Sidebar*/}
      <Sidebar />

      {/*Scrollable main content column*/}
       <MainContent /> 
      </div>
  );
}
