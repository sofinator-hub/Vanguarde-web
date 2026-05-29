import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HairSection from "./components/HairSection";
import SpaSection from "./components/SpaSection";
import TreatmentsSection from "./components/TreatmentsSection";
import PromoBanner from "./components/Promobanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08080A] text-[#F8EFEA] overflow-hidden">
      <Navbar />
      <Hero />
      <PromoBanner />
      <HairSection />
      <SpaSection />
      <TreatmentsSection />
      <Footer />
    </main>
  );
}