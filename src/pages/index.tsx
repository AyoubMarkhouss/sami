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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbarmenu />
      <Hero />
      <About/> 
      <Service />
      <Activity />
      <Carousel />
      <Contact />
      <Footer />
    </>
  );
}
