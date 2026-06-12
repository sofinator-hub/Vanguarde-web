import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import PromoBanner from "./components/Promobanner";

const HairSection = dynamic(
  () => import("./components/HairSection")
);

const SpaSection = dynamic(
  () => import("./components/SpaSection")
);

const TreatmentsSection = dynamic(
  () => import("./components/TreatmentsSection")
);

const Footer = dynamic(
  () => import("./components/Footer")
);

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