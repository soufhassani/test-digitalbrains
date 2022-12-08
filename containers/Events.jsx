import EventCard from "../components/EventCard";
import { motion as m } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  const [width, setWidth] = useState(0);
  const sliderRef = useRef();
  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
    <section className="section__padding w-full px-5 ">
      <div className=" mb-[49px]">
        <h1 className="titles">événements tendance</h1>
      </div>
      <m.div
        ref={sliderRef}
        className="cursor-[grab] overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className=" flex flex-row flex-nowrap gap-5"
        >
          {cards.map((card, index) => (
            <m.div
              className={`relative h-[40vh] w-[45vw] mx-auto rounded-[5px] flex-none shadow-2sm md:w-[230px] lg:w-[400px] `}
            >
              <EventCard
                key={index}
                title={card.title}
                imgSrc={card.imgSrc}
                date={card.date}
              />
            </m.div>
          ))}
        </m.div>
      </m.div>
      <div className="w-full pt-[35px] flex justify-center items-center">
        <button type="button" className="button">
          Voir tous les événements
        </button>
      </div>
    </section>
  );
};

export default Events;
