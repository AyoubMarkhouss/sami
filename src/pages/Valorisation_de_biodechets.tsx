import Navbarmenu from "./components/Navbarmenu";

import Footer from "./components/Footer";
import Index from "./components/Valorisation/Index";
import Head from "next/head";

export default function ValorisationDeBiodechets() {
  return (
    <>
      <Head>
        <meta name="description" content="Valorisation de biodechets" />
        <link rel="icon" href="/logo.png" />
        <title>Epiver - Valorisation de biodechets</title>
        <meta property="og:image" content="/logo.png" />
      </Head>
      <Navbarmenu />
      <Index />
      <Footer />
    </>
  );
}
