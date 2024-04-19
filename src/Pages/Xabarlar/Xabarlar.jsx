import React from "react";
import rasm from "../../assets/img/logo.png";

function Xabarlar() {
  return (
    <div>
      <div className="p-[10px] text-[20px] font-[500] bg-white ">
        <h1>Videolar</h1>
      </div>
      <div className="w-full p-[30px] flex justify-center">
        <div className="w-[99%] bg-white rounded-xl p-[10px] flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[20px] font-[600]">Songgi korilgan videolar</h3>
            <h3 className="text-[20px] font-[600] cursor-pointer text-orange-500">Barcha videolarni korish</h3>
          </div>
          <div className="flex xl:justify-between justify-center xl:flex-row gap-3 flex-wrap items-center">
            <div className="xl:w-[200px] w-[300px]  rounded-xl gap-2  bg-gray-100 p-[10px] flex flex-col ">
              <img src={rasm} alt="" className="xl:w-[200px] w-[300px] xl:h-[150px] h-[200px] rounded-xl object-cover" />
              <h3 className="text-[20px] font-[600] ">Kompyuter nimalardan iborat?</h3>
              <li>Kursi: Kompyuter savodxonli kursi</li>
              <li>Moduli: Kompyuter savodxonli darsi</li>
              <li>Mavzu: Kompyuter </li>
              <p>10% qismi korilgan</p>
              <div className="h-[3px] bg-slate-400">
                <div className="h-[3px] w-[10%] bg-orange-500"></div>
              </div>
            </div>
            <div className="xl:w-[200px] w-[300px]  rounded-xl gap-2  bg-gray-100 p-[10px] flex flex-col ">
              <img src={rasm} alt="" className="xl:w-[200px] w-[300px] xl:h-[150px] h-[200px] rounded-xl object-cover" />
              <h3 className="text-[20px] font-[600] ">Vazifalar paneli</h3>
              <li>Kursi: Kompyuter savodxonli kursi</li>
              <li>Moduli: Kompyuter savodxonli darsi</li>
              <li>Mavzu: Kompyuter </li>
              <p className="mt-[30px]">3% qismi korilgan</p>
              <div className="h-[3px] bg-slate-400">
                <div className="h-[3px] w-[3%] bg-orange-500"></div>
              </div>
            </div>
            <div className="xl:w-[200px] w-[300px]  rounded-xl gap-2  bg-gray-100 p-[10px] flex flex-col ">
              <img src={rasm} alt="" className="xl:w-[200px] w-[300px] xl:h-[150px] h-[200px] rounded-xl object-cover" />
              <h3 className="text-[20px] font-[600] ">Muammolar</h3>
              <li>Kursi: Kompyuter savodxonli kursi</li>
              <li>Moduli: Kompyuter savodxonli darsi</li>
              <li>Mavzu: Kompyuter </li>
              <p className="mt-[30px]">100% qismi korilgan</p>
              <div className="h-[3px] bg-slate-400">
                <div className="h-[3px] w-[100%] bg-orange-500"></div>
              </div>
            </div>
            <div className="xl:w-[200px] w-[300px]  rounded-xl gap-2  bg-gray-100 p-[10px] flex flex-col ">
              <img src={rasm} alt="" className="xl:w-[200px] w-[300px] xl:h-[150px] h-[200px] rounded-xl object-cover" />
              <h3 className="text-[20px] font-[600] ">Chrome brauzerlar | Disk</h3>
              <li>Kursi: Kompyuter savodxonli kursi</li>
              <li>Moduli: Kompyuter savodxonli darsi</li>
              <li>Mavzu: Kompyuter </li>
              <p>14% qismi korilgan</p>
              <div className="h-[3px] bg-slate-400">
                <div className="h-[3px] w-[14%] bg-orange-500"></div>
              </div>
            </div>
            <div className="xl:w-[200px] w-[300px]  rounded-xl gap-2  bg-gray-100 p-[10px] flex flex-col ">
              <img src={rasm} alt="" className="xl:w-[200px] w-[300px] xl:h-[150px] h-[200px] rounded-xl object-cover" />
              <h3 className="text-[20px] font-[600] ">Kirish</h3>
              <li>Kursi: Kompyuter savodxonli kursi</li>
              <li>Moduli: Kompyuter savodxonli darsi</li>
              <li>Mavzu: Kompyuter </li>
              <p className="mt-[30px]">100% qismi korilgan</p>
              <div className="h-[3px] bg-slate-400">
                <div className="h-[3px] w-[100%] bg-orange-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xabarlar;
