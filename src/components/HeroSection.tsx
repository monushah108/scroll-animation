"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const STATS = [
  { value: "99%", label: "Performance", detail: "Optimized Vitals" },
  { value: "24/7", label: "Uptime", detail: "High Availability" },
  { value: "10x", label: "Speed", detail: "Turbopack Engine" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fluid, slow, expensive animation timeline
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // Headline reveals smoothly with subtle upward translation
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1.4 }
        );
      }

      // Subtitle paragraph
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=1.0"
        );
      }

      // Main product visual
      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.6 },
          "-=1.0"
        );
      }

      // 3 simple stats fade in with slight stagger
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");
        tl.fromTo(
          statItems,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 },
          "-=1.1"
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-32 pb-16 px-6 sm:px-12 bg-zinc-950 text-zinc-100 select-none"
    >
      {/* Top Header Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Category Pill */}
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-500 mb-6">
          Architectural Form &bull; Kinetic Systems
        </span>

        {/* Headline: Clean, letter-spaced, elegant font weight */}
        <h1
          ref={headlineRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.35em] text-white uppercase font-sans will-change-transform"
        >
          W E L C O M E &nbsp; I T Z F I Z Z
        </h1>

        {/* Minimal Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 max-w-xl text-sm sm:text-base text-zinc-400 font-light leading-relaxed tracking-wide will-change-transform"
        >
          A study in reduction, form, and fluid mechanics. Engineered with Next.js App Router and GSAP ScrollTrigger.
        </p>
      </div>

      {/* Visual Element: Clean studio product design on flat dark background */}
      <div
        ref={visualRef}
        className="relative w-full max-w-3xl my-6 flex items-center justify-center will-change-transform"
      >
        <div className="relative w-full aspect-[16/9] max-h-[380px]">
          <Image
            src="/images/product.jpg"
            alt="Minimalist Industrial Concept Object"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Metrics / Stats: Clean 3-column minimal grid with subtle borders */}
      <div
        ref={statsRef}
        className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 border-t border-b border-zinc-800/80 py-6"
      >
        {STATS.map((stat, idx) => (
          <div
            key={idx}
            className="stat-item flex flex-col items-center text-center py-4 sm:py-2 px-6 will-change-transform"
          >
            <span className="text-3xl sm:text-4xl font-light tracking-tight text-white font-sans">
              {stat.value}
            </span>
            <span className="mt-1 text-xs tracking-widest uppercase text-zinc-300 font-medium">
              {stat.label}
            </span>
            <span className="mt-0.5 text-[11px] tracking-wider text-zinc-500 font-light">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
