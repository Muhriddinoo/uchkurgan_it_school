import React, { useState } from "react";
import logo from "../../assets/img/logo1.png";
import { NavLink } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between items-center ">
      <button onClick={toggleDropdown} className="bg-gray-300 px-4 py-2 rounded top-0 left-0 focus:outline-none">
        <i className="bx bx-menu text-[30px] absolute top-8 left-4"></i>
      </button>
      <img src={logo} alt="" className="w-[100px] rounded-3xl mr-[30px] mt-2 mb-2" />
      {isOpen && (
        <div className="absolute left-0 top-0  w-36 h-screen bg-white rounded shadow-md z-10 flex flex-col gap-3">
          <div className="flex gap-4">
            <i className="bx bx-menu text-[30px] absolute top-0 left-0" onClick={toggleDropdown}></i>
            <div className="sidebar border w-[200px] h-[89vh] text-[14px] pl-[20px] bg-white grid justify-between gap-[40vh]">
              <div className="mt-[30px]">
                <NavLink to="/kirish" className="text-[#000] flex items-center h-[40px] font-bold hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
                  <i className="bx bx-home-alt text-[20px]"></i>
                  <h1 className="ml-[5px]">Bosh sahifa</h1>
                </NavLink>
                <NavLink to="/ma'lumot" className="text-[#000] flex items-center h-[40px] font-bold hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
                  <i className="bx bx-code-block text-[20px]"></i>
                  <h1 className="ml-[5px]">Mening kurslarim</h1>
                </NavLink>
                <NavLink to="/login" className="text-[#000] flex items-center h-[40px] font-bold hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
                  <i className="bx bxs-credit-card-front text-[20px]"></i>
                  <h1 className="ml-[5px]">Barcha kurslar</h1>
                </NavLink>
                <NavLink to="/xabarlar" className="text-[#000] flex items-center h-[40px] font-bold hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
                  <i className="bx bxs-videos text-[20px]"></i>
                  <h1 className="ml-[5px]">Videolar</h1>
                </NavLink>
                <NavLink to="/tizim" className="text-[#000] flex items-center h-[40px] font-bold hover:bg-[#ffb62f33] hover:text-[#ffbc3e]">
                  <i className="bx bx-certification text-[20px]"></i>
                  <h1 className="ml-[5px]">Sertifikatlarim</h1>
                </NavLink>
              </div>
              <div className=" h-[30px]">
                <NavLink to="/" className="text-[#000] flex items-center h-[40px]font-bold ">
                  <i className="bx bx-log-in text-[20px]"></i>
                  <h1 className="text-[red] ml-[5px]">Chiqish</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
