import React, { useState } from "react";
import page from "../../assets/img/page.png";

const product = [
  {
    id: 1,
    name: "Dasturlash",
    surName: "Frontend",
    img: "https://media.proglib.io/posts/2019/11/03/c236c35c960c7016e0d785b0558026c4.png",
  },
  {
    id: 2,
    name: "Dasturlash",
    surName: "Backend",
    img: "https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg",
  },
  {
    id: 3,
    name: "Dasturlash",
    surName: "Android",
    img: "https://cdnstatic.rg.ru/uploads/images/2023/11/21/2023-10-23t105128z_115259364_mt1sipa0007109zu_rtrmadp_3_sipa-usajpg_645.jpg",
  },
];
function Monitoring() {
  const [items, setItems] = useState(product);
  return (
    <div className="">
      <div className="p-[10px] text-[20px] font-[500] bg-white ">
        <h1>Bosh sahifa</h1>
      </div>
      <div className="w-full pt-[20px] flex justify-center items-center flex-col gap-6">
        <div className="w-[90%] p-[10px] bg-white flex justify-center items-start flex-col rounded-xl">
          <div className="w-[90%] p-[10px] bg-white flex xl:flex-row md:flex-row flex-col justify-between items-start gap-3">
            <h3 className="text-[20px] font-[500]">Songi korilgan</h3>
            <div className="text-[18px] font-[500] ">
              <h3 className="flex gap-3 xl:flex-row md:flex-row  flex-col">
                Kompyuter savodxonligi... <h3>Kompyuter savodxonligi...</h3>
              </h3>
            </div>
          </div>
          <div className="div w-[95%] bg-gray-200 mx-auto rounded-xl p-[15px]">
            <div className="flex gap-3 xl:flex-row md:flex-row flex-col items-center">
              <img src={page} alt="" className="w-[300px] h-[200px]" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h2 className="text-[20px] font-[600]">Kompyuter nimalardan iborat?</h2>
                <li>Kursi: Kompyuter savodxonligi kursi</li>
                <li>Moduli: Kompyuter savodxonligi darslari</li>
                <li>Kursi: Kompyuter savodxonligi kursi</li>
              </div>
            </div>
            <div className="line mt-[30px] flex flex-col gap-2">
              <p>10% videodars yakunlangan</p>
              <div className="h-[3px] bg-slate-500">
                <div className="w-[10%] bg-orange-400 h-[3px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[90%] p-[20px] flex flex-col gap-5 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-bold ">Sizga tavsiya qilamiz</h3>
            <h3 className="text-[16px] font-[500] text-orange-500 cursor-pointer">Barcha kurslarni korish</h3>
          </div>
          <div className="flex xl:justify-between justify-center  xl:flex-row flex-wrap items-center gap-5">
            {items.map((product) => (
              <div key={product.id}>
                <div className="flex flex-col justify-center gap-3">
                  <img src={product.img} alt="" className="w-[250px] rounded-xl h-[200px] object-cover" />
                  <h1 className="text-[20px] font-[500]">{product.name}</h1>
                  <h2 className="text-[18px] font-[600] text-orange-400">{product.surName}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
