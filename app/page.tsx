import BackgroundGradients from "@/components/Background";
import Header from "@/components/Header";
import ValueProposition from "@/components/ValueProposition";
import { FeaturesStickyScroll } from "@/components/FeaturesStickyScroll";
import BlurText from "@/components/BlurText";
import StickyNavbar from "@/components/StickyNavbar";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <BackgroundGradients />
      <Header />
      <ValueProposition />
      <div className="w-full flex justify-center mt-20 mb-2">
        <BlurText
          text="Powerful Features for Modern Businesses"
          className="text-3xl md:text-5xl font-bold text-white text-center font-heading justify-center"
          delay={50}
        />
      </div>

      <FeaturesStickyScroll />

    </>
  );
}
