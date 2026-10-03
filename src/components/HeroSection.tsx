"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Gauge, Zap, ShieldCheck, Activity, ChevronDown } from "lucide-react";

interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  accent: string;
}

const METRICS: MetricItem[] = [
  {
    id: "perf",
    value: "99%",
    label: "Performance",
    sublabel: "Core Web Vitals",
    icon: <Gauge className="w-5 h-5 text-cyan-400" />,
    accent: "border-cyan-500/30 group-hover:border-cyan-400 text-cyan-400",
  },
  {
    id: "uptime",
    value: "24/7",
    label: "Uptime",
    sublabel: "High Availability",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    accent: "border-emerald-500/30 group-hover:border-emerald-400 text-emerald-400",
  },
  {
    id: "speed",
    value: "10x",
    label: "Speed",
    sublabel: "Next.js Turbo Engine",
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    accent: "border-amber-500/30 group-hover:border-amber-400 text-amber-400",
  },
  {
    id: "latency",
    value: "<0.02s",
    label: "Latency",
    sublabel: "Global Edge Nodes",
    icon: <Activity className="w-5 h-5 text-fuchsia-400" />,
    accent: "border-fuchsia-500/30 group-hover:border-fuchsia-400 text-fuchsia-400",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const carWrapperRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Stylized text broken down into two distinct words for aesthetic grouping
  const word1 = "WELCOME";
  const word2 = "ITZFIZZ";

  useGSAP(
    () => {
      // 1. Initial State resets
      const letters = headlineLettersRef.current.filter(Boolean);

      // Create master entrance timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Subtle badge reveal
      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 }
        );
      }

      // Headline characters reveal using mask / upward translation
      if (letters.length > 0) {
        tl.fromTo(
          letters,
          {
            y: "120%",
            opacity: 0,
            rotateX: 45,
          },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.5"
        );
      }

      // Subtitle paragraph fade + translate
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        );
      }

      // 3D Car prominent entrance
      if (carWrapperRef.current) {
        tl.fromTo(
          carWrapperRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.88,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      // Stats cards staggered reveal
      if (statsContainerRef.current) {
        const statCards = statsContainerRef.current.querySelectorAll(".stat-card");
        tl.fromTo(
          statCards,
          {
            opacity: 0,
            y: 40,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "back.out(1.4)",
          },
          "-=0.8"
        );
      }

      // Scroll Down indicator bounce & pulse
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );

        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          ease: "power1.inOut",
        });
      }
    },
    { scope: containerRef }
  );

  let letterIndex = 0;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-10 px-4 sm:px-6 md:px-8 bg-[#030305] overflow-hidden select-none"
    >
      {/* Background Ambience & Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Atmospheric Glowing Neon Nebulas */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/15 via-blue-600/10 to-fuchsia-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-fuchsia-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Hero Header Area */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-2">
        {/* Release Pill Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-5 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono tracking-wider uppercase text-cyan-300 font-semibold">
            Next-Gen Aerodynamic Physics Engine
          </span>
        </div>

        {/* Headline: "W E L C O M E  I T Z F I Z Z" */}
        <h1
          aria-label="W E L C O M E   I T Z F I Z Z"
          className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-mono tracking-[0.25em] sm:tracking-[0.35em] text-slate-100 uppercase"
        >
          {/* Word 1: WELCOME */}
          <span className="inline-flex overflow-hidden py-1">
            {word1.split("").map((char) => {
              const currentIdx = letterIndex++;
              return (
                <span
                  key={`w1-${char}-${currentIdx}`}
                  className="inline-block overflow-hidden"
                >
                  <span
                    ref={(el) => {
                      headlineLettersRef.current[currentIdx] = el;
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 will-change-transform drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]"
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>

          {/* Word 2: ITZFIZZ */}
          <span className="inline-flex overflow-hidden py-1">
            {word2.split("").map((char) => {
              const currentIdx = letterIndex++;
              return (
                <span
                  key={`w2-${char}-${currentIdx}`}
                  className="inline-block overflow-hidden"
                >
                  <span
                    ref={(el) => {
                      headlineLettersRef.current[currentIdx] = el;
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 glow-cyan will-change-transform drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p
          ref={subtitleRef}
          className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-slate-400 font-sans tracking-wide font-normal leading-relaxed"
        >
          Hyper-optimized interactive architecture seamlessly synchronized with GSAP ScrollTrigger. Engineered for maximum velocity, fluid kinetic curves, and 120 FPS render fidelity.
        </p>
      </div>

      {/* Prominent Visual Element: 3D Supercar Showcase */}
      <div
        ref={carWrapperRef}
        className="relative z-10 w-full max-w-4xl mx-auto my-4 sm:my-6 flex flex-col items-center justify-center will-change-transform"
      >
        {/* Glow Spotlight Behind Car */}
        <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-purple-600/25 blur-3xl -z-10 rounded-full opacity-80" />

        {/* Car Container with subtle floating hover */}
        <div className="relative w-full max-w-[850px] aspect-[16/9] flex items-center justify-center">
          <Image
            src="/images/supercar.jpg"
            alt="3D Cyberpunk Aerodynamic Supercar ITZFIZZ Edition"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 850px"
            priority
            className="object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.4)] transition-transform duration-700 hover:scale-[1.02]"
          />

          {/* Holographic Target HUD Overlays on the Car */}
          <div className="absolute top-[25%] left-[16%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>CARBON CHASSIS // AETHER-7</span>
          </div>

          <div className="absolute bottom-[28%] right-[14%] hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-fuchsia-500/40 text-[10px] font-mono text-fuchsia-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
            <span>VECTOR THRUST: ACTIVE</span>
          </div>
        </div>

        {/* Reflected Base Platform Shadow */}
        <div className="w-[75%] h-5 bg-cyan-400/15 rounded-[100%] blur-md -mt-4 sm:-mt-6 mx-auto" />
      </div>

      {/* Metrics / Impact Stats Section (3 to 4 items in flex/grid layout) */}
      <div
        ref={statsContainerRef}
        className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2"
      >
        {METRICS.map((metric) => (
          <div
            key={metric.id}
            className={`stat-card group relative p-3.5 sm:p-4 rounded-xl bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(6,182,212,0.2)] will-change-transform`}
          >
            {/* Top row: Icon & Status indicator */}
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 group-hover:border-cyan-500/40 transition-colors">
                {metric.icon}
              </div>
              <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400/80 group-hover:animate-ping" />
            </div>

            {/* Metric Value */}
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight group-hover:text-cyan-300 transition-colors">
              {metric.value}
            </div>

            {/* Metric Label */}
            <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
              {metric.label}
            </div>

            {/* Sublabel */}
            <div className="text-[10px] sm:text-xs text-slate-500 font-mono mt-0.5">
              {metric.sublabel}
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div
        ref={scrollIndicatorRef}
        className="relative z-10 mt-6 flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest text-slate-500 uppercase cursor-pointer"
        onClick={() => {
          const el = document.getElementById("scroll-experience");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-cyan-400/80">Scroll to Accelerate</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </div>
    </section>
  );
}
