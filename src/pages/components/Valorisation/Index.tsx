import Image from "next/image";
import React, { useRef } from "react";
import Barleyleft from "../SVG/Barleyleft";
import Barleyright from "../SVG/Barleyright";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="mx-5 md:mx-20 my-28">
      <div className="py-10 md:flex justify-center items-center">
        <Barleyleft className="hidden md:flex w-20" />
        <h1 className="text-slate-50 text-center text-2xl md:text-6xl font-bold">
          Valorisation de biodechets
        </h1>
        <Barleyright className="hidden md:flex w-20" />
        <hr className="flex sm:hidden w-full my-6 border-gray-300" />
      </div>
      <div className="grid grid-cols-3 items-center gap-x-3">
        <div className="col-span-3 md:col-span-2 text-lg text-slate-50 md:pr-10 text-justify">
          <p>
            EPIVER, perpétue et combine le savoir-faire et la technique dans le
            tri sélectif sur site et la valorisation des déchets, ainsi que de
            la Société Lombricole du Sud-Est, créée en 1985, experte en
            compostage et lombricompostage des biodéchets.
          </p>
          <br />
          <p>
            Forte de plus de 30 ans d&apos;expérience, EPIVER s&apos;est
            distinguée en employant des techniques innovantes et en offrant des
            solutions de proximité, simples, efficaces, économiques et durables.
            La gestion des déchets organiques est un domaine complexe
            nécessitant des compétences techniques spécifiques. Notre mission
            inclut également le conseil et l&apos;accompagnement des
            collectivités et des entreprises dans leurs projets de tri, de
            collecte et de valorisation de leurs déchets, et plus
            particulièrement de leurs biodéchets.
          </p>
          <br />
        </div>
        <div className="flex justify-center items-center col-span-3 md:col-span-1 pt-5 md:pt-0">
          <Image
            alt=""
            src="/valo.png"
            width={2500}
            height={2500}
            className="w-52 md:w-full"
          />
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : ""}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 items-center gap-x-3 pt-10"
      >
        <div className="hidden md:flex justify-center items-center col-span-3 md:col-span-1 pt-5 md:pt-0">
          <Image
            alt=""
            src="/recicle.png"
            width={2500}
            height={2500}
            className="w-52 md:w-full"
          />
        </div>
        <div className="col-span-3 md:col-span-2 text-lg text-slate-50 md:pl-10 text-justify">
          <p>
            • En l&apos;absence de tri et d&apos;un ramassage adapté, les
            biodéchets sont collectés avec les ordures ménagères et ne
            bénéficient pas d&apos;un traitement approprié.
            <br /> • Parallèlement, nos sols s&apos;appauvrissent, et des
            apports organiques seraient nécessaires pour enrichir efficacement
            les terres agricoles.Notre force repose sur :<br />• Une écoute
            attentive et le maintien de relations privilégiées avec nos
            interlocuteurs,
            <br />• La mise en place de solutions locales adaptées,
            <br />• Une expertise solide grâce à la formation continue et à une
            veille réglementaire et technique constante,
            <br />• Une réactivité dans nos interventions et recommandations.
          </p>
          <br />
          <p>
            EPIVER, en s&apos;appuyant sur une expertise éprouvée et une
            approche innovante, s&apos;engage à transformer la gestion des
            biodéchets et à enrichir durablement les sols agricoles.
          </p>
        </div>
        <div className="md:hidden flex justify-center items-center col-span-3 md:col-span-1 pt-5 md:pt-0">
          <Image
            alt=""
            src="/recicle.png"
            width={2500}
            height={2500}
            className="w-52 md:w-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
