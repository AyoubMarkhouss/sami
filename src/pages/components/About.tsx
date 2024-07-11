import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div
      id="about"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
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
        className="grid gap-10 lg:grid-cols-3"
      >
        <div className="lg:pr-10 md:col-span-2">
          <h5 className="mb-4 text-4xl text-center font-extrabold leading-none text-lightbrown">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="text-lg text-gray-200 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae explicabo.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem totam
            rem aperiam, eaque ipsa quae explicabo.Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae explicabo, Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae explicabo,
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo.
          </p>
        </div>
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1">
          <img
            className="object-cover w-96 h-full sm:h-full"
            src="/logo.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
