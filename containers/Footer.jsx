import { IoMdHome } from "react-icons/io";
import { FaCar, FaUserAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

function Footer() {
  const [items, setItems] = useState({
    activeItem: null,
    links: [
      {
        icon: <IoMdHome size={20} fill="#303189" />,
        text: "Magasins",
      },
      {
        icon: <FaCar size={20} fill="#303189" />,
        text: "",
      },
      {
        icon: <FaUserAlt size={20} fill="#303189" />,
        text: "",
      },
    ],
  });

  useEffect(() => {
    setItems({ ...items, activeItem: items.links[0] });
  }, []);

  const toggleActiveObject = (index) => {
    setItems({ ...items, activeItem: items.links[index] });
    console.log(items.activeItem);
  };

  const toggleActiveClass = (index) => {
    if (items.links[index] === items.activeItem) {
      return "footer-links footer-active";
    } else {
      return "footer-links";
    }
  };

  return (
    <footer className=" sticky bottom-0 left-0 z-[99] flex justify-between items-center h-[67.5px] shadow-3sm rounded-t-full px-10 bg-white">
      {/* <div className="relative flex-1 flex justify-center items-center w-[104px] h-[37px]  shadow-3sm rounded-full before:bg-[#303189] before:opacity-[0.1] before:w-full before:h-full before:absolute before:rounded-full ">
        <IoMdHome size={20} fill="#303189" />
        {items.links[0].active ? (
          <p className="font-roboto font-normal text-[14px] text-[#303189] leading-[16.41px] ml-[9px]">
            Acceuil
          </p>
        ) : null}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <FaCar size={20} fill="#303189" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <FaUserAlt size={20} fill="#303189" />
      </div> */}

      {items.links.map((link, index) => (
        <div
          key={link.id}
          className={toggleActiveClass(index)}
          onClick={() => toggleActiveObject(index)}
        >
          {link.icon}
          <p className="font-roboto font-normal text-[14px] text-[#303189] leading-[16.41px] ml-[9px]">
            {link.text}
          </p>
        </div>
      ))}
    </footer>
  );
}

export default Footer;
