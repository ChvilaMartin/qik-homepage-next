import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import StavbaTeaser from "./components/StavbaTeaser";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Projektová Dokumentace | QIK",
  description:
    "Projektová dokumentace. QIK zrychlí tvorbu technických zpráv, kontrolu souladu s vyhláškami a přípravu výstupů.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Projektová Dokumentace | QIK",
    description:
      "Projektová dokumentace. QIK zrychlí tvorbu technických zpráv, kontrolu souladu s vyhláškami a přípravu výstupů.",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <StavbaTeaser />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
