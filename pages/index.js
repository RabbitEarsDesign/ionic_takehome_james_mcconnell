// our-domain.com/

import Head from "next/head";

// COMPONENTS
import Header from "../components/layout/header/Header";
import Features from "../components/features/Features";
import CTA from "../components/cta/CTA";
import Footer from "../components/layout/footer/Footer";

function LandingPage() {
  return (
    <>
      <Head>
        <title>Takehome || James McConnell</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Take home test || James McConnell" />
      </Head>
      <div>
        <Header />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
