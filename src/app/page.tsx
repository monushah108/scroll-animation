import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollShowcase from "@/components/ScrollShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030305] text-white overflow-x-hidden">
      {/* Floating Global Navbar */}
      <Navbar />

      {/* Hero Section (Above the fold - Layout, Headline, Metrics, 3D Supercar, Initial GSAP Load Reveal) */}
      <HeroSection />

      {/* Core Scroll-Based Animation Section (GSAP ScrollTrigger Scrubbing with 3D Supercar) */}
      <ScrollShowcase />

      {/* Architectural Features & Interactive Mode Demonstrator */}
      <FeaturesSection />

      {/* Site Footer */}
      <Footer />
    </main>
  );
}
