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

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <BackgroundGradients />
      <Header />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <FeaturesGrid />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <ValueProposition />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <TechnicalExcellence />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <UseCases />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-10" />
      <FAQ />
      <div className="w-11/12 mx-auto h-px bg-white/10 my-6 md:my-20" />
      <CTA />
      <Footer />
    </>
  );
}
