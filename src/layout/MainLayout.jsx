import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black max-w-7xl px-3 py-1 mx-auto">
      <Navbar></Navbar>
      <Outlet className="min-h-[calc(100vh-232px)]"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
