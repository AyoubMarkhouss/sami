import { Button } from "@nextui-org/react";
import React, { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Barleyleft from "./SVG/Barleyleft";
import Barleyright from "./SVG/Barleyright";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:pb-0 lg:pt-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : ""}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="max-w-xl md:mx-auto text-center lg:max-w-2xl md:mb-12"
        >
          <motion.h2 className="max-w-xl flex items-center justify-center font-sans text-4xl font-bold leading-none tracking-tight text-slate-50 sm:text-4xl md:mx-auto">
            <Barleyleft className="hidden md:flex w-20" />
            Nos produits
            <Barleyright className="hidden md:flex w-20" />
          </motion.h2>
        </motion.div>
        {/* <div
      ref={ref}
      className="grid gap-8 lg:grid-cols-3 xl:px-14 sm:mx-auto lg:max-w-full"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
      >
        <Image
          width={1500}
          height={1500}
          src="/bg.jpg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            ></Link>
          </p>
          <Link
            href="/lombricompost"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Lombricompost
          </Link>
          <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <div className="flex items-end justify-end">
            <Link href="/lombricompost">
              <Button className="bg-lightbrown">
                <span className="text-black">En savoir plus</span>
                <MdOutlineKeyboardArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
      >
        <Image
          width={1500}
          height={1500}
          src="/bg.jpg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            ></Link>
          </p>
          <Link
            href="/"
            aria-label="Category"
            title="Simple is better"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Valorisation de biodechets
          </Link>
          <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <div className="flex items-end justify-end">
            <Link href="/Valorisation_de_biodechets">
              <Button className="bg-lightbrown">
                <span className="text-black">En savoir plus</span>
                <MdOutlineKeyboardArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
      >
        <Image
          width={1500}
          height={1500}
          src="/bg.jpg"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <Link
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            ></Link>
          </p>
          <Link
            href="/"
            aria-label="Category"
            title="Film It!"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Distributeurs
          </Link>
          <p className="mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit sed quia
            consequuntur magni voluptatem doloremque.
          </p>
          <div className="flex items-end justify-end">
            <Link href="/Distributeurs">
              <Button className="bg-lightbrown">
                <span className="text-black">En savoir plus</span>
                <MdOutlineKeyboardArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div> */}
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="mx-10 lg:mx-20 lg:mb-20 mb-10"
      >
        <Slider {...settings}>
          <div className="px-2 md:px-5">
            <div className="overflow-hidden py-5 md:py-2 bg-slate-50 transition-shadow duration-300  rounded shadow-sm">
              <Image
                width={1500}
                height={1500}
                src="/prod.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 text-center">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  ></Link>
                </p>
                <Link
                  href="/Produits/Prod1"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-5 text-center text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Lorem ipsum
                </Link>
                {/* <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p> */}
                <div className="flex justify-center items-center">
                  <Link href="/Produits/Prod1">
                    <Button className="bg-lightbrown">
                      <span className="text-black">En savoir plus</span>
                      <MdOutlineKeyboardArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 md:px-5">
            <div className="overflow-hidden py-5 md:py-2 bg-slate-50 transition-shadow duration-300  rounded shadow-sm">
              <Image
                width={1500}
                height={1500}
                src="/prod.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 text-center">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  ></Link>
                </p>
                <Link
                  href="/Produits/Prod1"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-5 text-center text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Lorem ipsum
                </Link>
                {/* <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p> */}
                <div className="flex justify-center items-center">
                  <Link href="/Produits/Prod1">
                    <Button className="bg-lightbrown">
                      <span className="text-black">En savoir plus</span>
                      <MdOutlineKeyboardArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 md:px-5">
            <div className="overflow-hidden py-5 md:py-2 bg-slate-50 transition-shadow duration-300  rounded shadow-sm">
              <Image
                width={1500}
                height={1500}
                src="/prod.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 text-center">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  ></Link>
                </p>
                <Link
                  href="/Produits/Prod1"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-5 text-center text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Lorem ipsum
                </Link>
                {/* <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p> */}
                <div className="flex justify-center items-center">
                  <Link href="/Produits/Prod1">
                    <Button className="bg-lightbrown">
                      <span className="text-black">En savoir plus</span>
                      <MdOutlineKeyboardArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 md:px-5">
            <div className="overflow-hidden py-5 md:py-2 bg-slate-50 transition-shadow duration-300  rounded shadow-sm">
              <Image
                width={1500}
                height={1500}
                src="/prod.png"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 text-center">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <Link
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  ></Link>
                </p>
                <Link
                  href="/Produits/Prod1"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-5 text-center text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Lorem ipsum
                </Link>
                {/* <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p> */}
                <div className="flex justify-center items-center">
                  <Link href="/Produits/Prod1">
                    <Button className="bg-lightbrown">
                      <span className="text-black">En savoir plus</span>
                      <MdOutlineKeyboardArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default Products;
