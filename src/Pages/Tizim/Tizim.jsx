import React from "react";

function Tizim() {
  return (
    <div>
      <div className="p-[10px] text-[20px] font-[500] bg-white ">
        <h1>Sertifikatlar</h1>
      </div>
      <div className="w-full p-[30px]">
        <div className="w-[99%] bg-white flex flex-col gap-6 p-[20px]">
          <h1 className="text-[26px] font-[600]">Mening sertifikatlarim</h1>
          <div className="xl:w-[70%] w-[100%] bg-gray-100 rounded-xl p-[30px] flex flex-col justify-center items-center">
            <h3 className="text-[20px] text-orange-500  font-[600]">Korilgan videolar 6%</h3>
            <h3 className="text-[20px] text-orange-500  font-[600]">Bajarilgan vazifalar 0%</h3>
            <p>Kurs videolarining 100% ini va uyga vazifalarining kamida 60% qismini yakunlash kerak</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tizim;
