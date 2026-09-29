import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExportWorldwide } from "@/components/ExportWorldwide";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToBuy } from "@/components/HowToBuy";
import { Inventory } from "@/components/Inventory";
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Inventory />
        <ExportWorldwide />
        <HowToBuy />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
