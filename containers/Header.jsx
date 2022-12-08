import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import NavLinks from "../components/NavLinks";

function Header() {
  return (
    <header className="pt-[16px] pb-[24px] px-5">
      <div className="flex flex-row justify-between items-center pb-[15px] ">
        <div className="flex-1">
          <BsThreeDotsVertical
            fill="#303189"
            size={30}
            className="cursor-pointer"
          />
        </div>
        <div className="flex-[2] ">
          <h1 className="font-normal font-[Inter] text-center text-[#707070] text-[30px] cursor-pointer">
            LOGO
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-end ">
          <VscSearch size={20} fill="#303189" className="mr-6 cursor-pointer" />
          <Image src="/Qr1.png" width={29} height={29} />
        </div>
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
