import Navbarmenu from "./components/Navbarmenu";

import Footer from "./components/Footer";
import Index from "./components/Lombricompost/Index";
import Head from "next/head";

export default function Lembricompost() {
  return (
    <>
      <Head>
        <meta name="description" content="Lombricompost" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver - Lombricompost</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />
      <Index />
      <Footer />
    </>
  );
}
