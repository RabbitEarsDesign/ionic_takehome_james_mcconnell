// our-domain.com/
// COMPONENTS
import Header from "../components/layout/header/Header";
import Features from "../components/features/Features";
import CTA from "../components/cta/CTA";
import Footer from "../components/layout/footer/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
