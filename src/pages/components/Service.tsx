import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaTractor } from "react-icons/fa";
import Barleyleft from "./SVG/Barleyleft";
import Barleyright from "./SVG/Barleyright";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : ""}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="px-4 relative bg-blue/20 md:rounded-xl py-16 mx-auto sm:max-w-xl z-20 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="max-w-xl  mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <motion.p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-lightbrown uppercase rounded-full bg-teal-accent-400">
            Notre Service
          </motion.p>
        </div>

        <motion.h2 className="max-w-xl flex items-center justify-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-50 sm:text-4xl md:mx-auto">
          <Barleyleft className="hidden md:flex w-20" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <Barleyright className="hidden md:flex w-20" />
        </motion.h2>
      </motion.div>
      <motion.div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <motion.div className="flex flex-col justify-center">
          {content.map((k) => {
            return (
              <div key={k.label} className="flex ">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                    <FaTractor />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-lightbrown text-xl font-semibold leading-5">
                    {k.label}
                  </h6>
                  <p className="text-sm text-slate-50">{k.description}</p>
                  <hr className="w-full my-6 border-gray-300" />
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div className="z-50 gap-5">
          <Image
            className="object-cover w-full h-full col-span-2 rounded shadow-lg"
            src="/bg.jpg"
            alt=""
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;

const content = [
  {
    label: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    label: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    label: "Lorem ipsum ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
