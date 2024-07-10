import Image from "next/image";
import { Inter } from "next/font/google";
import Navbarmenu from "./components/Navbarmenu";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Activity from "./components/Activity";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import About from "./components/About";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="lorem impsum" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />
      <Hero />
      <About />
      <Service />
      <Activity />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}
