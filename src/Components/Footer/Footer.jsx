import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="sidebar border xl:block hidden w-[200px] h-[89vh] text-[14px] pl-[20px] bg-white flex justify-between gap-[40vh]">
      <div className="">
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
      <div className=" h-[30px] mt-64">
        <NavLink to="/" className="text-[#000] flex items-center h-[40px]font-bold ">
          <i className="bx bx-log-in text-[20px]"></i>
          <h1 className="text-[red] ml-[5px]">Chiqish</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
