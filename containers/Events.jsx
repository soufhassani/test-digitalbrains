import EventCard from "../components/EventCard";
import { motion as m } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

  const [position, setPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    // console.log(sliderRef.current.scrollWidth);
    // console.log(sliderRef.current.offsetWidth);
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
    <section className="section__padding w-full overflow-hidden">
      <div className=" mb-[49px]">
        <h1 className="titles">événements tendance</h1>
      </div>
      <m.div
        ref={sliderRef}
        className="cursor-[grab]"
        whileTap={{ cursor: "grabbing" }}
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className=" flex flex-row flex-nowrap "
        >
          {cards.map((card, index) => (
            <m.div className="relative h-[40vh] w-[45vw] rounded-[5px] flex-none">
              <m.div
                initial={{ scale: 0.9 }}
                animate={{
                  left: `${(index - position) * 2}vw`,
                  scale: index === position ? 1 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute w-full h-full  mx-auto  rounded-[5px] shadow-2sm "
              >
                <EventCard
                  key={index}
                  title={card.title}
                  imgSrc={card.imgSrc}
                  date={card.date}
                />
              </m.div>
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
