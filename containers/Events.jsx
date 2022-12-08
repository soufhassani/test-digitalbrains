import EventCard from "../components/EventCard";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import useWindowSize from "../hooks/useWindowSize";

const Events = () => {
  const cards = [
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
    {
      imgSrc: "/eventImage.jpg",
      title: "Lorem ipsum",
      date: "20 Oct - 25 Nov",
    },
  ];

  const WindowSize = useWindowSize();
  const [position, setPosition] = useState(WindowSize <= 450 ? 1 : 3);

  const handleSwipe = (dir) => {
    console.log(dir);
    if (dir === "Right") {
      if (position < cards.length - 1) {
        setPosition(position + 1);
      }
    }
    if (dir === "Left") {
      if (position > 0) {
        setPosition(position - 1);
      }
    }
  };

  const conditionLeft = (index) => {
    if (WindowSize <= 450) return `${(index - position) * 55 + 21}vw`;
    if (WindowSize > 450) return `${(index - position) * 225 + 120}px`;
  };

  return (
    <section className="section__padding w-full  overflow-hidden">
      <div className=" mb-[49px]">
        <h1 className="titles">événements tendance</h1>
      </div>
      <div className=" min-h-[250px] h-[250px] relative max-w-[400px] mx-auto md:h-[300px] ">
        <div
          spaceBetween={50}
          slidesPerView={1.5}
          onSwiper={handleSwipe}
          className=" h-[250px] flex flex-row flex-nowrap  md:h-[300px] "
        >
          {cards.map((card, index) => (
            <m.div
              className={`absolute h-[250px]   ${
                WindowSize >= 450 ? "w-[225px]" : "w-[55vw]"
              } rounded-[5px] shadow-2sm  flex-none md:w-[225px] md:h-[300px] ${
                index !== position && "opacity-[0.4]"
              }`}
              initial={{ scale: 1 }}
              animate={{
                left: conditionLeft(index),
                scale: index === position ? 1 : 0.8,
              }}
              transition={{ type: "Inertia", stiffness: 260, damping: 20 }}
            >
              <EventCard
                key={index}
                title={card.title}
                imgSrc={card.imgSrc}
                date={card.date}
              />
            </m.div>
          ))}
        </div>
        <div
          className={`group z-40 w-[87px] h-full flex justify-start items-center absolute top-0 left-[-10px] scale-[0.8] pl-1  rounded-[5px] ${
            position === 0 && "hidden"
          }`}
          onClick={() => handleSwipe("Left")}
        >
          <BiLeftArrowAlt
            className={` h-9 w-9 cursor-pointer opacity-1 transition hover:scale-125 group-hover:opacity-100 `}
          />
        </div>
        <div
          className={`group z-40 w-[87px] h-full flex justify-end items-center absolute top-0  right-[-10px] pr-1 scale-[0.8] rounded-[5px] ${
            position === cards.length - 1 && "hidden"
          }`}
          onClick={() => handleSwipe("Right")}
        >
          <BiRightArrowAlt
            className={`h-9 w-9 cursor-pointer opacity-1 transition hover:scale-125 group-hover:opacity-100`}
          />
        </div>
      </div>
      <div className="w-full pt-[35px] flex justify-center items-center">
        <button type="button" className="button">
          Voir tous les événements
        </button>
      </div>
    </section>
  );
};

export default Events;
