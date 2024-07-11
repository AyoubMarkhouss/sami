import Navbarmenu from "./components/Navbarmenu";
import Footer from "./components/Footer";
import Index from "./components/Contact/Index";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <meta name="description" content="Contact" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver - Contact</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />
      <Index />
      <Footer />
    </>
  );
}
