import uits from "../../assets/img/uits.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-[100%] h-[100vh] bg-[#f3f3f3] pt-[50px]">
      <div className="xl:w-[550px] xl:h-[430px] bg-[#fff] ml-[700px] mt-[200px]">
        <img
          src={uits}
          alt=""
          className="xl:w-[120px] xl:h-[120px] ml-[220px] mt-[20px]"
        />
        <h3 className="text-[35px] text-[#000] font-bold text-center">
          IT PARK
        </h3>
        <p className="text-[#000]  text-center text-[30px]">
          UITS axborot tizimi
        </p>

        <input
          type="text"
          placeholder="Talaba ID"
          className="w-[90%] h-[35px] border-[1px] border-[#aaa] ml-[25px] mt-[20px] pl-[15px]"
        />
        <i className="bx bxs-envelope relative ml-[-25px] text-[20px]"></i>
        <br />
        <input
          type="text"
          placeholder="Parol"
          className="w-[90%] h-[35px] border-[1px] border-[#aaa] ml-[25px] mt-[20px] pl-[15px]"
        />
        <i className="bx bxs-lock-alt relative ml-[-25px] text-[20px]"></i>

        <hr className="mt-[25px]" />
        <div className="bt flex justify-between w-[90%] ml-[25px] h-[75px] items-center">
          <div className="btn flex gap-2">
            <input type="checkbox" className="w-[20px] h-[20px]" />{" "}
            <legend>Eslab qolish</legend>
          </div>
          <button className="w-[235px] h-[35px] bg-[#2828d3] text-[#fff]">
            Kirish
          </button>
          <Link
            to="/kirish"
            className="w-[235px] h-[35px] bg-[#2828d3] text-[#fff] text-center pt-[5px]"
          >
            <span>Kirish</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
