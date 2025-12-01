import BackgroundGradients from "@/components/Background";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import TechnicalExcellence from "@/components/TechnicalExcellence";
import UseCases from "@/components/UseCases";
import FeaturesGrid from "@/components/FeaturesGrid";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
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
      <Header />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <SocialProof />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <ValueProposition />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <FeaturesGrid />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <TechnicalExcellence />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <UseCases />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <Benefits />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <HowItWorks />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <Integrations />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <Pricing />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <Testimonials />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <FAQ />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-20" />
      <CTA />
      <Footer />
    </>
  );
}
