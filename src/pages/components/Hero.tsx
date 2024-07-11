import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link as ScrolliLink } from "react-scroll";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="h-screen flex justify-center items-center">
      <Image
        alt="bg"
        src="/bg2.webp"
        width={2200}
        height={2200}
        className="absolute object-cover h-full opacity-65 -mt-28 sm:-mt-0 "
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : ""}
        transition={{ duration: 0.5 }}
        className="relative z-30 gap-5 flex flex-col justify-center items-center max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl text-slate-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h1>
        <p className="text-gray-100">
          Lorem ipsum, dolor sit amet consecte enetur labore dicta suscipi
          tenetur labore dicta suscipit?
        </p>

        <Button className="w-40 h-14 text-xl">
          <ScrolliLink
            smooth={true}
            spy={true}
            duration={1500}
            offset={0}
            to="about"
            className="flex items-center gap-x-2"
          >
            Découvrir
            <MdOutlineKeyboardDoubleArrowRight />
          </ScrolliLink>
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
