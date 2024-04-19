import React, { useState } from "react";

const Product2 = [
  {
    id: "1",
    name: "React js",
    surName: "Frontend Darslari",
    category: "Dasturlash",
    img: "data:image/png;base64,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",
  },
  {
    id: "2",
    name: "Python",
    category: "Dasturlash",
    surName: "Backend Darslari",
    img: "https://img-b.udemycdn.com/course/750x422/919038_3ae1_13.jpg",
  },
  {
    id: "3",
    name: "AUTODESK",
    surName: "3D MAX Darslari",
    category: "3D Max",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdWSnKYOBT7eHsXhmh2M1Bpvdk3g3u9Y5Hg&usqp=CAU",
  },
  {
    id: "4",
    name: "Power point",
    surName: "Savodxonlik",
    category: "Savodxonlik",
    img: "https://www.aiseesoft.com/images/powerpoint-to-video-dvd-converter/make-a-powerpoint.jpg",
  },
  {
    id: "5",
    name: "Kotlin",
    category: "Dasturlash",
    surName: "Kotlin Darslari",
    img: "data:image/png;base64,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",
  },
  {
    id: "6",
    name: "Photoshop",
    category: "Dizayn",
    surName: "Grafik Dizayn",
    img: "https://thumbs.dreamstime.com/z/vinnytsia-ukraine-april-adobe-photoshop-logo-vector-icon-isolated-white-background-adobe-photoshop-logo-vector-icon-isolated-215484951.jpg",
  },
  {
    id: "7",
    name: "Word",
    category: "Savodxonlik",
    surName: "Savodxonlik",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/microsoft-word-now-and-then-260729887-16x9_0.jpg?VersionId=A7SIGsCjBX7cPf57wmx8T8M.6Oc_6sZ8",
  },
  {
    id: "8",
    name: "Excel",
    category: "Savodxonlik",
    surName: "Savodxonlik",
    img: "https://assets-global.website-files.com/62db4aab7889390b30116fbb/6577ba52ca4c394d886459fe_excel.png",
  },
  {
    id: "9",
    name: "Android",
    category: "Dasturlash",
    surName: "Android Darslari",
    img: "https://cdnstatic.rg.ru/uploads/images/2023/11/21/2023-10-23t105128z_115259364_mt1sipa0007109zu_rtrmadp_3_sipa-usajpg_645.jpg",
  },
];

function Login() {
  const [items, setItems] = useState(Product2);

  const filterItem = (category) => {
    const updatedItems = Product2.filter((curElem) => {
      return curElem.category === category;
    });

    setItems(updatedItems);
  };

  return (
    <div>
      <div className="w-[100%] bg-[#fff] h-[50px] mt-[1px]">
        <h1 className="text-[18px] ml-[35px] pt-[10px]">Barcha kurslar</h1>
      </div>
      <div>
        <div className="fil w-[95%] h-full xl:ml-[30px] mt-[40px] bg-[#fff]">
          <h1 className="font-bold xl:text-[20px] xl:ml-[25px] xl:mt-[25px]  ml-[15px] mt-[25px]">Barcha kurslar</h1>
          <div className="course-filter-group ml-[30px] mt-[20px]">
            <ul className="lab-ul  xl:w-[890px] xl:flex  flex flex-wrap gap-5 ">
              <li className="cursor-pointer w-[120px] h-[40px] pt-[8px] xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] bg-[#e6e6e6] rounded-full hover:bg-[#BB8D5B] hover:text-[#fff]" onClick={() => setItems(Product2)}>
                Barchasi
              </li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] bg-[#e6e6e6] rounded-full hover:bg-[#BB8D5B] hover:text-[#fff]" onClick={() => filterItem("Savodxonlik")}>
                Savodxonlik
              </li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] bg-[#e6e6e6] rounded-full hover:bg-[#BB8D5B] hover:text-[#fff]" onClick={() => filterItem("Dizayn")}>
                Dizayn
              </li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] bg-[#e6e6e6] rounded-full hover:bg-[#BB8D5B] hover:text-[#fff]" onClick={() => filterItem("3D Max")}>
                3D Max
              </li>
              <li className=" cursor-pointer  w-[120px] h-[40px] pt-[8px]  xl:w-[155px] xl:h-[50px] text-center xl:pt-[12px] bg-[#e6e6e6] rounded-full hover:bg-[#BB8D5B] hover:text-[#fff]" onClick={() => filterItem("Dasturlash")}>
                Dasturlash
              </li>
            </ul>
          </div>
          <div className="kurs w-[100%]  rounded-xl flex flex-wrap ">
            {items.map((product) => (
              <div key={product.id} className="xl:w-[32%]  p-4 md:w-[50%]">
                <div className="bg-[#e6e6e6] rounded-lg h-[350px]">
                  <div className="image w-[80%] flex">
                    <img src={product.img} alt="" className="h-[200px] w-[300px] ml-[45px] mt-[25px] object-cover rounded-xl" />
                  </div>
                  <h1 className="text-[#fff] text-[18px] w-[150px] h-[40px] rounded-md cursor-pointer bg-[#04A674] text-center pt-[5px] mt-[10px] ml-[45px]">{product.name}</h1>
                  <h1 className="text-[#000] text-[20px] font-bold mt-[10px] ml-[45px]">{product.surName}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
