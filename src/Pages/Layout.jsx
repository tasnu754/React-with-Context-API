import { HomeCardsContextProvider } from "../Components/Context/HomeCardsContext";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <HomeCardsContextProvider>
      <div className="bg-slate-100 min-h-[100vh]">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </HomeCardsContextProvider>
  );
};

export default Layout;
