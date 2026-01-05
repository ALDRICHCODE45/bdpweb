import HeroSection from "./sections/HeroPage";
import AboutSection from "./sections/AboutSection";
import QuienesSomosSection from "./sections/QuienesSomosSection";
import IndustriesSection from "./sections/IndustriesSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <QuienesSomosSection />
      <IndustriesSection />
      <Footer />
    </>
  );
}
