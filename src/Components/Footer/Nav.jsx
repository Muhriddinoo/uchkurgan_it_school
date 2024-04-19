import Footer from "./Footer";
import { useState } from "react";
import logo from "../../assets/img/uits.jpg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bar = document.getElementById("bar");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      console.log(bar);
      bar.classList.toggle("hidden");
    }
  };
  return (
    <div className="logo bg-[#ffffff] h-[70px] flex justify-between items-center pr-5 border-b-gray-300 border-[1px]">
      <i className="bx bx-menu  absolute  text-[35px] hidden  md:ml-[15px]" onClick={handleMenuClick}></i>
      <div className="ml-[25px] flex items-center">
        <img src={logo} alt="" className="w-[50px] h-[50px]" />
        <h1 className="text-[16px] w-[105px] font-bold">UCHKURGAN IT SCHOOL</h1>
      </div>
      <div className="flex justify-between gap-3 items-center xl:ml-[10px]">
        <div className="flex">
          <i className="bx bx-bell text-[20px] text-[#868686]"></i>
          <div className="bg-red-500 rounded-full w-[5px] h-[5px]"></div>
        </div>
        <i className="bx bx-user-circle text-[40px] text-[#868686]"></i>
        <div className="">
          <h2 className="text-[14px] font-bold">Muhriddin Jamoldinov</h2>
          <p className="text-[#868686] text-[12px]">O'quvchi</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
