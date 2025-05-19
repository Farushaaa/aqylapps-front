import AqylappsLogoBlack from "../../assets/images/AqylappsLogoBlack.svg";
import { navbarElements } from "../../constants/navbarElements";
// import {UseLangChange} from "../../store/UseLangChange.ts";

const Navbar = () => {
    // const language = UseLangChange((state)=>state.language);

  return (
    <div className="flex flex-row justify-between w-[90%] m-auto mt-5 p-2 items-center ">
      <div>
        <img src={AqylappsLogoBlack} alt="" />
      </div>
      <div className="flex flex-row justify-between mx-3 items-center gap-5">
        {navbarElements.map((el) => (
          <p className="cursor-pointer">{el.element_ru}</p>
        ))}
        <button className=" rounded-md px-2 py-2 ml-2 bg-[#220154] text-white">
          Подключить
        </button>
      </div>
    </div>
  );
};

export default Navbar;
