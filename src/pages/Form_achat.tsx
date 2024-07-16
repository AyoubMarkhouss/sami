import Navbarmenu from "./components/Navbarmenu";
import Footer from "./components/Footer";
import Head from "next/head";

import React, { useRef } from "react";
import Barleyleft from "./components/SVG/Barleyleft";
import Barleyright from "./components/SVG/Barleyright";
export default function Contact() {
  const form = useRef(null);
  return (
    <>
      <Head>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver - Formulaire d'achat</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />

      <div className="py-28 flex flex-col justify-center items-center mx-3">
        <div className=" md:flex items-center justify-center">
          <Barleyleft className="hidden md:flex w-20" />
          <h1 className="text-slate-50 text-center text-4xl md:text-6xl font-extrabold">
            Formulaire d&apos;achat
          </h1>
          <Barleyright className="hidden md:flex w-20" />
          <hr className="flex sm:hidden w-full my-6 border-gray-300" />
        </div>
        <div className="mt-8 lg:w-1/2 mx-6 m-5 z-30 w-full">
          <div className="w-full p-3 md:px-8 md:py-10 mx-auto overflow-hidden bg-slate-50 rounded-[36px]  lg:max-w-xl ">
            <div className="mt-3">
              <form className="text-darkbg" ref={form}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="">
                    <label className="text-xl">Nom complet</label>
                    <input
                      className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                      name="full_name"
                      id="full_name"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label className="text-xl">Téléphone</label>
                    <input
                      className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                      name="phone"
                      id="phone"
                      type="tel"
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="text-xl">E-mail</label>
                  <input
                    className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                    name="user_email"
                    id="email"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="text-xl">Produits :</label>
                  {/* <input
                    className="mt-1 block w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-orange"
                    name="user_email"
                    id="email"
                    type="email"
                    required
                  /> */}
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="flex gap-x-2">
                      <label>Produit 1</label>
                      <input type="checkbox" />
                    </div>
                    <div className="flex gap-x-2">
                      <label>Produit 2</label>
                      <input type="checkbox" />
                    </div>
                    <div className="flex gap-x-2">
                      <label>Produit 3</label>
                      <input type="checkbox" />
                    </div>
                    <div className="flex gap-x-2">
                      <label>Produit 4</label>
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="text-xl">Message</label>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
