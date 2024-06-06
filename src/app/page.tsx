import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import CenteredCTA from "@/components/centercta"
import FeatureSection from "@/components/cta"
import FooterCTA from "@/components/footercta"
import Accordion from "@/components/accordition"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div>
       <Navbar />
      <Hero/>
      <CenteredCTA />
      <FeatureSection />
      <FooterCTA />
      <Accordion />
      <Footer />
    </div>
  );
}
