import Link from "next/link";

import React, { useRef } from "react";

import Head from "next/head";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Contact: React.FC = () => {
  const form = useRef(null);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false });

  return (
    <>
      <div
        className="contact mx-auto max-w-screen-xl relative min-h-screen"
        id="contact"
      >
        <div className="container px-2 sm:px-6 md:px-8 lg:px-14 xl:px-36 mx-auto py-10">
          <div className="lg:flex lg:items-center lg:-mx-6 overflow-hidden">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 0.8 }}
              className="relative lg:w-1/2 lg:mx-6 m-6"
            >
              <h1 className="semibold z-30 text-4xl md:font-semibold text-white  lg:text-7xl ">
                Discutons !
              </h1>
              <div className="">
                <span className="inline-block w-36 md:w-52 h-1 bg-lightbrown rounded-full"></span>
                <span className="inline-block w-14 h-1 ml-1 bg-lightbrown rounded-full"></span>
                <span className="inline-block w-5 h-1 ml-1 bg-lightbrown rounded-full"></span>
              </div>
              <div className="flex flex-col gap-3 pt-3 text-slate-50">
                <h2 className="flex items-center gap-x-3">
                  <MdMail />
                  contact@epiver.com
                </h2>
                <h2 className="flex items-center gap-x-3">
                  <FaPhoneAlt />
                  +33 6 22 22 22 22
                </h2>
                <div className="flex items-center gap-x-3">
                  <FaLocationDot />

                  <h2>540 Rue Henri Dutilleux, Montreal, QC H3C 1L9</h2>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26588.6412516321!2d-7.69594778427538!3d33.59024854336483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3118fa69c5f%3A0x22a7e428b3c1eb2d!2sAin%20Diab%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1720175157113!5m2!1sen!2sma"
                    loading="eager"
                    className=" h-[300px] w-full "
                  ></iframe>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : ""}
              transition={{ duration: 0.8 }}
              className="mt-8 lg:w-1/2 lg:mx-6 m-5 z-30"
            >
              <div className="w-full p-3 md:px-8 md:py-10 mx-auto overflow-hidden bg-slate-50 rounded-[36px]  lg:max-w-xl ">
                <div className="mt-3">
                  <form className="text-darkbg" ref={form}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="">
                        <label>Nom complet</label>
                        <input
                          className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                          name="full_name"
                          id="full_name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label>Téléphone</label>
                        <input
                          className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                          name="phone"
                          id="phone"
                          type="tel"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>E-mail</label>
                      <input
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                        name="user_email"
                        id="email"
                        type="email"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Message</label>
                      <textarea
                        className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                        id="message"
                        name="message"
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <div className="mt-6 md:-mb-3 mb-2">
                      <button
                        className="w-full inline-flex justify-center rounded-md border border-transparent bg-lightbrown px-5 py-2.5 text-sm font-medium text-slate-50 hover:bg-lightviolet focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                        type="submit"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default Contact;
