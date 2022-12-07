import { BsFillBagFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

const NavLinks = () => {
  const [items, setItems] = useState({
    activeItem: null,
    links: [
      {
        icon: <BsFillBagFill size={10.72} className="mr-[8.28px]" />,
        text: "Magasins",
      },
      {
        icon: <GiKnifeFork size={13.13} className="mr-[6.2px]" />,
        text: "Restauration",
      },
      {
        icon: <AiFillInfoCircle size={12} className="mr-[3.27px]" />,
        text: "Informations",
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
    if (items.links[index] === items.activeItem) return "links active";
    else return "links inactive";
  };

  return (
    <div className="pt-[15px]">
      <nav className="flex w-full h-[45px] rounded-full bg-[#fafafa] shadow-1sm transition-all	">
        {items.links.map((link, index) => (
          <div
            key={link.id}
            className={toggleActiveClass(index)}
            onClick={() => toggleActiveObject(index)}
          >
            {link.icon}
            <p>{link.text}</p>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
