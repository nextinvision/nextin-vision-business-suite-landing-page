import BackgroundGradients from "@/components/Background";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import TechnicalExcellence from "@/components/TechnicalExcellence";
import UseCases from "@/components/UseCases";
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/footer";
import StickyNavbar from "@/components/StickyNavbar";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <BackgroundGradients />
      <div className="w-full overflow-x-hidden">
        <section className="flex flex-col gap-12 md:gap-16 pb-24">
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
