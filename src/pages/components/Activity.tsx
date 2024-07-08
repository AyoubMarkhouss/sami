import { Button } from "@nextui-org/react";
import React, { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Barleyleft from "./SVG/Barleyleft";
import Barleyright from "./SVG/Barleyright";

const Activity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative px-4 py-16 mx-auto md:mx-14 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="max-w-xl  mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-lightbrown uppercase rounded-full bg-teal-accent-400">
            Notre Service
          </p>
        </div>

        <motion.h2 className="max-w-xl flex items-center justify-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-50 sm:text-4xl md:mx-auto">
          <Barleyleft className="hidden md:flex w-20" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <Barleyright className="hidden md:flex w-20" />
        </motion.h2>
      </motion.div>
      <div
        ref={ref}
        className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
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
              href="/"
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
              <Button className="bg-lightbrown text-sm">
                <Link href="/lombricompost">En savoir plus</Link>

                <MdOutlineKeyboardArrowRight />
              </Button>
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
              <Button className="bg-lightbrown text-sm">
                <Link href="/Valorisation_de_biodechets">En savoir plus</Link>
                <MdOutlineKeyboardArrowRight />
              </Button>
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
              <Button className="bg-lightbrown text-sm">
                <Link href="/Distributeurs">En savoir plus</Link>
                <MdOutlineKeyboardArrowRight />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activity;
