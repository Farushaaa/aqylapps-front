import AqylappsLogoBlack from "../../assets/images/AqylappsLogoBlack.jpg";
import { navbarElements } from "../../constants/navbarElements";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-[90%] m-auto  border mt-5 p-2 items-center ">
      <div>
        <img src={AqylappsLogoBlack} alt="" />
      </div>
      <div className="flex flex-row justify-between mx-3 items-center">
        {navbarElements.map((el) => (
          <p className="mr-3">{el.element_ru}</p>
        ))}
        <button className="border rounded-md px-2 py-2 ml-2 bg-[#220154] text-white">
          Подключить
        </button>
      </div>
    </div>
  );
};

export default Navbar;
