import { Outlet } from "react-router-dom";
import "./Layout.css";
import Nav from "../Components/Footer/Nav";
import Footer from "../Components/Footer/Footer";
import Dropdown from "../Components/Menu/Menu";
// import SideBar from "../Components/Menu/Menu";

const Layout = () => {
  return (
    <div className="layout">
      <div className="xl:hidden md:block sm:block lg:block">
        <Dropdown />
      </div>
      <div className="xl:block hidden">
        <Nav />
      </div>

      <main className="bg-[#eee] flex">
        <Footer />
        <div className="w-full ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
