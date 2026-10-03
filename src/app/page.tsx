import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollShowcase from "@/components/ScrollShowcase";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      {/* Minimal Top Navigation */}
      <Navbar />

      {/* Hero Section (Letter-spaced Headline, 3 Simple Stats, Minimal Product Visual) */}
      <HeroSection />

      {/* Scroll-Based Visual Animation with GSAP ScrollTrigger */}
      <ScrollShowcase />

      {/* Specifications & Technical Restraint */}
      <SpecsSection />

      {/* Minimalist Clean Footer */}
      <Footer />
    </main>
  );
}
