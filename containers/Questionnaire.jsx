import Image from "next/image";

const Questionnaire = () => {
  return (
    <section className="section__padding">
      <h2 className="titles">The Place to be</h2>
      <div className="relative h-[300px] rounded-[5px] mt-[49px] max-w-[375px] w-full mx-auto shadow-2sm">
        <div className="z-0 relative w-full h-full">
          <Image
            src="/faq.jpg"
            fill
            objectFit="cover"
            className="rounded-[5px] z-0"
          />
          <div className=" absolute right-[23px] top-[21px] w-[94px] h-[40px] bg-white/70 rounded-full flex">
            <p className="font-roboto font-bold text-[16px] text-[#303189] leading-[16px] tracking-[-0.02em] m-auto">
              100 points
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end bg-gradient-to-t from-black via-transparent to-transparent w-full h-full z-50 absolute top-0 left-0 rounded-[5px]">
          <h3 className="font-roboto font-[700] text-[25px] text-white text-center leading-[29px] uppercase">
            Anfaplace mall
          </h3>
          <p className="font-roboto font-normal text-[16px] text-center text-white leading-[19px] cursor-pointer">
            www.anfaplacemall.ma
          </p>
          <div className="w-full py-4 flex justify-center items-center">
            <button
              type="button"
              className="w-[146px] h-[40px] bg-white rounded-full font-roboto font-[500] text-[18px] text-[#303189] leading-[21px] "
            >
              Je participe
            </button>
          </div>
          <div className="flex justify-center items-center gap-[18px] py-[13px]">
            <span className="w-[30px] h-[2px] bg-white cursor-pointer"></span>
            <span className="relative w-[30px] h-[2px] bg-[#808080] cursor-pointer"></span>
            <span className="w-[30px] h-[2px] bg-[#808080] cursor-pointer"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
