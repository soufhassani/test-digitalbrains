import Image from "next/image";

function Brands() {
  const brands = [
    "/time-road-ai.jpg",
    "/swatch-logo.jpg",
    "/beauty-succes-logo.jpg",
    "/courir-logo.jpg",
  ];

  return (
    <section className="section__padding">
      <h2 className="titles">Nos Marques</h2>
      <div className="flex justify-center items-center flex-wrap gap-x-6 w-full h-full pt-[49px]">
        {brands.map((brandLogo, index) => (
          <div className="relative min-w-[100px] max-w-[200px] min-h-[100px] flex-1 basis-6/12 ">
            <Image key={index} src={brandLogo} fill objectFit="contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
