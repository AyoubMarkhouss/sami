import Image from "next/image";
import React from "react";
import Barley from "../SVG/Barleyright";
import Barleyleft from "../SVG/Barleyleft";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../Products";

const Index = () => {
  return (
    <>
      <div className="mx-5 md:mx-20 mt-28">
        <div className="py-10 md:flex items-center justify-center">
          <Barleyleft className="hidden md:flex w-20" />
          <h1 className="text-slate-50 text-center text-4xl md:text-6xl font-extrabold">
            Lombricompost
          </h1>
          <Barley className="hidden md:flex w-20" />
          <hr className="flex sm:hidden w-full my-6 border-gray-300" />
        </div>
        <div className="grid grid-cols-3 items-center gap-x-3">
          <div className="col-span-3 md:col-span-2 text-lg text-slate-50 md:pr-10 text-justify">
            <p>
              Epiver® est un lombricompost riche en matières agronomiques issues
              de la valorisation de fumiers équins et ovins par les lombrics.
              Inodore et stable, Epiver® favorise la germination et la
              croissance des cultures, y compris les plantes d&apos;ornement.
              Epiver® peut être utilisé comme amendement de sol, que ce soit
              pour votre potager, vos parterres de fleurs, sous vos arbres
              fruitiers, ou encore dans vos jardinières et plantes
              d&apos;intérieur.
            </p>
            <br />
            <p>
              Les propriétés exceptionnelles du lombricompost sont
              principalement dues à la formation des complexes argilo-humiques.
              L&apos;utilisation du lombricompost présente de nombreux avantages
              :
            </p>
            <br />
            <p>
              Le lombricompost Epiver® améliore les qualités physico-chimiques
              et biologiques du sol, il : <br />• Augmente la rétention en eau
              du sol, l&apos;aère et le réchauffe, ce qui améliore sa résistance
              à l&apos;érosion. <br />• Favorise un développement racinaire plus
              régulier et étendu. <br />• Augmente la capacité du sol à filtrer
              et à assimiler les éléments nutritifs.
              <br />
              • Apporte les éléments organiques et les microorganismes
              essentiels à la plante ainsi qu&apos;à la faune et à la flore du
              sol. <br />• Prévient l&apos;acidification du sol ou corrige son
              acidité grâce à un effet tampon. <br />• Contient des
              phytohormones pour une croissance optimale des plantes. <br />•
              Améliore la structure du sol en augmentant les agrégats,
              facilitant ainsi la pénétration des racines et l&apos;exploitation
              du sol. <br />• Facilite le travail du sol. <br />
              Réduit considérablement l&apos;impact du gel, de l&apos;érosion et
              diminue la dessiccation par ventilation. <br />• Limite le
              développement des organismes pathogènes grâce à sa forte activité
              microbienne, par compétition directe ou indirecte.
            </p>
            <br />
            <p>
              Le lombricompost Epiver® est un fertilisant naturel utilisable en
              agriculture biologique (CEE 2092/91) qui s&apos;adapte à tout type
              de sol et à toutes les cultures. Apporté à un sol existant pour
              améliorer ses qualités physiques, chimiques et biologiques ou
              utilisé pour la constitution d&apos;un substrat de culture (terre,
              sable, tourbe, etc.), le lombricompost Epiver® est un produit
              tamisé, facile à utiliser et mécanisable pour l&apos;épandage.
            </p>
          </div>
          <div className="flex justify-center items-center col-span-3 md:col-span-1 pt-5 md:pt-0">
            <Image
              alt=""
              src="/ab.png"
              width={2500}
              height={2500}
              className="w-52 md:w-full"
            />
          </div>
        </div>
      </div>
      <div className="pb-20">
        <Products />
      </div>
    </>
  );
};

export default Index;
