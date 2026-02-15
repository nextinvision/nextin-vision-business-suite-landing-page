import BackgroundGradients from "@/components/layout/Background";
import Header from "@/components/layout/Header";
import ValueProposition from "@/components/sections/ValueProposition";
import TechnicalExcellence from "@/components/sections/TechnicalExcellence";
import UseCases from "@/components/sections/UseCases";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import StickyNavbar from "@/components/layout/StickyNavbar";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import SocialProof from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <BackgroundGradients />
      <div className="w-full overflow-x-hidden">
        <section className="flex flex-col gap-16 md:gap-24 pb-24 md:pb-32">
          <Header />
          <SocialProof />
          <ValueProposition />
          <FeaturesGrid />
          <TechnicalExcellence />
          <UseCases />
          <Benefits />
          <HowItWorks />
          <Integrations />
          <Pricing />
          <Testimonials />
          <FAQ />
        </section>
      </div>
      <Footer />
    </>
  );
}
