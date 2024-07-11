import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);
  return (
    <div className="relative h-[70vh] my-10">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container h-[70vh] ">
          {/* <div className="embla__slide">
            <Image
              alt=""
              width={2200}
              height={2200}
              src="/bg.jpg"
              className="top-0 w-full object-cover md:bg-cover md:w-screen h-full"
            />
          </div> */}
          <div className="embla__slide">
            <Image
              alt=""
              width={2200}
              height={2200}
              src="/bg2.webp"
              className="top-0 w-full object-cover md:bg-cover md:w-screen h-full"
            />
          </div>
          <div className="embla__slide">
            <Image
              alt=""
              width={2200}
              height={2200}
              src="/bg.jpg"
              className="top-0 w-full object-cover md:bg-cover md:w-screen h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-5 left-5 md:top-10  md:left-10 max-w-2xl">
        <h1 className="md:text-5xl text-3xl z-50 font-extrabold text-slate-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
      </div>
    </div>
  );
};

export default Carousel;
