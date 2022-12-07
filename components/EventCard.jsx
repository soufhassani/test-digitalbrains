import Image from "next/image";

const EventCard = ({ title, date, imgSrc }) => {
  return (
    <>
      <Image
        src={imgSrc}
        fill
        objectFit="cover"
        className="object-right rounded-[5px] z-0"
      />
      <div className="flex flex-col z-10 absolute top-0 left-0 w-full h-full justify-end pl-3 pb-3">
        <h3 className="font-roboto font-black text-[18px] text-white leading-[21px] tracking-[0.02em] uppercase ">
          {title}
        </h3>
        <h5 className="font-roboto font-normal text-[14px] text-white leading-[16px] tracking-[0.02em]">
          {date}
        </h5>
      </div>
    </>
  );
};

export default EventCard;
