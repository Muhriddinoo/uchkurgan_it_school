import React, { useState } from "react";
import rasm from "../../assets/img/page.png";

const product = [
  {
    id: 4,
    name: "Kompyuter savodxonlik",
    surName: "Word",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/microsoft-word-now-and-then-260729887-16x9_0.jpg?VersionId=A7SIGsCjBX7cPf57wmx8T8M.6Oc_6sZ8",
  },
  {
    id: 5,
    name: "Kompyuter savodxonlik",
    surName: "Excel",
    img: "https://assets-global.website-files.com/62db4aab7889390b30116fbb/6577ba52ca4c394d886459fe_excel.png",
  },
  {
    id: 6,
    name: "Kompyuter savodxonlik",
    surName: "Power point",
    img: "https://www.aiseesoft.com/images/powerpoint-to-video-dvd-converter/make-a-powerpoint.jpg",
  },
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

function Admin() {
  const [items, setItems] = useState(product);

  return (
    <div>
      <div className="p-[10px] text-[20px] font-[500] bg-white ">
        <h1>Mening kurslarim</h1>
      </div>
      <div className="w-full p-[20px] flex justify-center flex-col gap-6 ">
        <div className="w-[99%] bg-white flex p-[10px] xl:flex-row flex-col rounded-xl justify-between items-center">
          <div className="flex items-center gap-2 xl:flex-row flex-col">
            <img src={rasm} alt="" className="w-[300px] h-[200px] object-cover rounded-xl" />
            <div className="flex flex-col gap-2">
              <h3 className="text-[20px] font-[600] w-[250px]  ">Kompyuter savodxonligi kursi</h3>
              <p>4% videodarslar yakunlangan</p>
              <div className="h-[3px] bg-slate-600 ">
                <div className="h-[3px] w-[10%] bg-orange-500"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-[20px] relative right-9 items-start xl:flex-row flex-col gap-3">
            <div className="flex flex-col gap-3">
              <i className="bx bx-tv flex items-center gap-1 text-[20px] font-[500]">Darslar soni:</i>
              <h3 className="font-bold text-orange-500">29 ta</h3>
            </div>
            <div className="flex flex-col gap-3">
              <i className="bx bx-stopwatch flex items-center gap-1 justify-center text-[20px] font-[500]">Kurs davomiyligi:</i>
              <h3 className="font-bold text-orange-500">5 soat 30 daqiqa</h3>
            </div>
            <button className="w-[120px] border h-[35px] rounded-xl bg-orange-400 font-[600] text-white">Batafsil</button>
          </div>
        </div>
        <div className="bg-white w-[99%] p-[20px] flex flex-col gap-5 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] font-bold">Sizga tavsiya qilamiz</h3>
            <h3 className="text-[16px] font-[500] text-orange-500 cursor-pointer">Barcha kurslarni korish</h3>
          </div>
          <div className="flex justify-between flex-wrap gap-3">
            {items.map((product) => (
              <div key={product.id}>
                <div className="flex flex-col justify-center gap-3">
                  <img src={product.img} alt="" className="w-[300px] rounded-xl h-[200px] object-cover" />
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

export default Admin;
