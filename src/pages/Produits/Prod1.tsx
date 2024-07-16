import Navbarmenu from "../components/Navbarmenu";
import Footer from "../components/Footer";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

export default function Contact() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
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
    <>
      <Head>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver - Contact</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />
      <div className="py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex sm:hidden flex-col gap-3 mx-5">
            <h1 className="text-slate-50 text-5xl font-semibold">
              Lorem impsum
            </h1>
            <hr />
          </div>

          <div className="mx-10 lg:mx-14 ">
            <Slider {...settings}>
              <div className="overflow-hidden py-5 md:py-2 lg:h-[30rem]  transition-shadow duration-300  rounded shadow-sm">
                <Image
                  width={1500}
                  height={1500}
                  src="/prod.png"
                  className=" w-full h-full"
                  alt=""
                />
              </div>
              <div className="overflow-hidden py-5 md:py-2 lg:h-[30rem]  transition-shadow duration-300  rounded shadow-sm">
                <Image
                  width={1500}
                  height={1500}
                  src="/prod.png"
                  className=" w-full h-full"
                  alt=""
                />
              </div>
              <div className="overflow-hidden py-5 md:py-2 lg:h-[30rem]  transition-shadow duration-300  rounded shadow-sm">
                <Image
                  width={1500}
                  height={1500}
                  src="/prod.png"
                  className=" w-full h-full"
                  alt=""
                />
              </div>
              <div className="overflow-hidden py-5 md:py-2 lg:h-[30rem]  transition-shadow duration-300  rounded shadow-sm">
                <Image
                  width={1500}
                  height={1500}
                  src="/prod.png"
                  className=" w-full h-full"
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="flex flex-col gap-5 max-w-xl mx-5 md:mx-0">
            <div className="hidden sm:flex flex-col gap-5">
              <h1 className="text-slate-50 text-5xl font-semibold">
                Lorem impsum
              </h1>
              <hr />
            </div>

            <p className="text-slate-50 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nesciunt dignissimos tempore saepe quod voluptatibus ullam ipsa
              aliquam iste dolorum sunt cum, esse ea mollitia, deserunt nostrum
              illum? Quisquam, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Culpa nesciunt dignissimos tempore saepe quod
              voluptatibus ullam ipsa aliquam iste dolorum .
            </p>

            <p className="text-slate-50 text-justify">
              • Augmente la rétention en eau du sol, l&apos;aère et le
              réchauffe, ce qui améliore sa résistance à l&apos;érosion. <br />•
              Favorise un développement racinaire plus régulier et étendu.{" "}
              <br />• Augmente la capacité du sol à filtrer et à assimiler les
              éléments nutritifs.
              <br />• Apporte les éléments organiques et les microorganismes
              essentiels à la plante ainsi qu&apos;à la faune et à la flore du
              sol.
            </p>
            <Link href="/Form_achat">
            <Button className="bg-lightbrown w-full h-14">
              <span className="text-black text-lg">Demander le produit</span>
              <FaCartShopping />
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
