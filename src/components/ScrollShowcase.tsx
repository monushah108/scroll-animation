"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Gauge,
  Compass,
  Cpu,
  Layers,
  Wind,
  Shield,
  Activity,
  Flame,
} from "lucide-react";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const movingCarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // HUD and Stage refs
  const hudStage1Ref = useRef<HTMLDivElement>(null);
  const hudStage2Ref = useRef<HTMLDivElement>(null);
  const hudStage3Ref = useRef<HTMLDivElement>(null);
  const speedDisplayRef = useRef<HTMLSpanElement>(null);
  const gForceDisplayRef = useRef<HTMLSpanElement>(null);

  const [scrollPercent, setScrollPercent] = useState(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !movingCarRef.current) return;

      // Master Timeline linked strictly to scroll scrub
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth dampening scrub (scrub: 1 gives silky motion)
          onUpdate: (self) => {
            const progress = Math.round(self.progress * 100);
            setScrollPercent(progress);

            // Dynamic velocity calculation for telemetry HUD
            if (speedDisplayRef.current) {
              const speed = Math.round(120 + self.progress * 280);
              speedDisplayRef.current.innerText = `${speed} KM/H`;
            }
            if (gForceDisplayRef.current) {
              const gforce = (1.1 + self.progress * 3.4).toFixed(1);
              gForceDisplayRef.current.innerText = `${gforce} G`;
            }
          },
        },
      });

      // -------------------------------------------------------------
      // STAGE 1: Acceleration & Right Lateral Drift (0% -> 35% scroll)
      // Car translates right, scales up, tilts slightly in perspective
      // -------------------------------------------------------------
      scrollTl.to(
        movingCarRef.current,
        {
          x: "24vw",
          y: "-6vh",
          scale: 1.25,
          rotate: 4,
          ease: "none",
          duration: 1,
        },
        0
      );

      // HUD 1: Reveal & Fade
      if (hudStage1Ref.current) {
        scrollTl
          .fromTo(
            hudStage1Ref.current,
            { opacity: 0, x: -60, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "none" },
            0.1
          )
          .to(
            hudStage1Ref.current,
            { opacity: 0, x: -40, scale: 0.95, duration: 0.4, ease: "none" },
            0.7
          );
      }

      // -------------------------------------------------------------
      // STAGE 2: Counter-Steer & Left Lateral Apex Drift (35% -> 70% scroll)
      // Car drifts sharply across the screen to the left, scaling up
      // -------------------------------------------------------------
      scrollTl.to(
        movingCarRef.current,
        {
          x: "-24vw",
          y: "8vh",
          scale: 1.45,
          rotate: -5,
          ease: "none",
          duration: 1,
        },
        1
      );

      // HUD 2: Reveal & Fade
      if (hudStage2Ref.current) {
        scrollTl
          .fromTo(
            hudStage2Ref.current,
            { opacity: 0, x: 60, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "none" },
            1.1
          )
          .to(
            hudStage2Ref.current,
            { opacity: 0, x: 40, scale: 0.95, duration: 0.4, ease: "none" },
            1.7
          );
      }

      // -------------------------------------------------------------
      // STAGE 3: Hyper-Drive Warp & Full Center Launch (70% -> 100% scroll)
      // Car centers directly, scales significantly closer to screen
      // -------------------------------------------------------------
      scrollTl.to(
        movingCarRef.current,
        {
          x: "0vw",
          y: "0vh",
          scale: 1.7,
          rotate: 0,
          ease: "none",
          duration: 1,
        },
        2
      );

      // HUD 3: Apex Power Surge Reveal
      if (hudStage3Ref.current) {
        scrollTl.fromTo(
          hudStage3Ref.current,
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "none" },
          2.1
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="scroll-experience"
      ref={sectionRef}
      className="relative w-full h-[300vh] bg-[#030305]"
    >
      {/* Pinned Viewport Container */}
      <div
        ref={pinWrapperRef}
        className="sticky top-0 h-screen w-full flex flex-col justify-between items-center overflow-hidden px-4 sm:px-8 py-8 select-none"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {/* Ambient Neon Lights synced with trajectory */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[300px] bg-fuchsia-600/10 blur-[130px] rounded-full pointer-events-none" />

        {/* ----------------- TOP TELEMETRY HUD BAR ----------------- */}
        <div className="relative z-30 w-full max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-[#090b14]/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          {/* Scroll Progress Readout */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                SCROLL KINETIC PROGRESS
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-black font-mono text-white">
                  {scrollPercent}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold">%</span>
              </div>
            </div>

            {/* Visual mini progress track */}
            <div className="hidden sm:block w-32 h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-75"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
          </div>

          {/* Center Title Tag */}
          <div className="hidden md:flex flex-col items-center">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              GSAP SCROLLTRIGGER SCRUB INTERACTION
            </span>
            <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              PURE CSS 3D TRANSFORMS // ZERO REFLOW
            </span>
          </div>

          {/* Right Live Gauges */}
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-right">
            <div>
              <span className="text-[10px] uppercase text-slate-400 block">
                TELEMETRY SPEED
              </span>
              <span
                ref={speedDisplayRef}
                className="text-sm sm:text-lg font-black text-cyan-300"
              >
                120 KM/H
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 block">
                CORNERING LOAD
              </span>
              <span
                ref={gForceDisplayRef}
                className="text-sm sm:text-lg font-black text-fuchsia-400"
              >
                1.1 G
              </span>
            </div>
          </div>
        </div>

        {/* ----------------- MAIN ANIMATED VISUAL CANVAS ----------------- */}
        <div className="relative z-20 w-full flex-1 flex items-center justify-center">
          {/* STAGE 1 CALLOUT (Appears when car moves Right) */}
          <div
            ref={hudStage1Ref}
            className="absolute left-6 sm:left-14 top-1/4 max-w-xs sm:max-w-sm p-4 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.25)] pointer-events-none opacity-0 will-change-transform z-30"
          >
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Wind className="w-4 h-4 text-cyan-400" />
              <span>STAGE 01 // DOWNFORCE DYNAMICS</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-1">
              Active Air-Brake & Spoiler Angle
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              As you scroll down, GSAP recalculates vertex matrices in real-time. Notice the smooth rotation tilt along the aerodynamic plane.
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-300 border-t border-slate-800 pt-2">
              <span>DOWNFORCE: +450 KG</span>
              <span className="text-cyan-400 font-semibold">SCRUB: 1.0</span>
            </div>
          </div>

          {/* STAGE 2 CALLOUT (Appears when car drifts Left) */}
          <div
            ref={hudStage2Ref}
            className="absolute right-6 sm:right-14 top-1/3 max-w-xs sm:max-w-sm p-4 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-fuchsia-500/40 shadow-[0_0_30px_rgba(168,85,247,0.25)] pointer-events-none opacity-0 will-change-transform z-30"
          >
            <div className="flex items-center gap-2 mb-2 text-fuchsia-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Flame className="w-4 h-4 text-fuchsia-400" />
              <span>STAGE 02 // VECTOR TORQUE APEX</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-1">
              Counter-Steer Lateral Drift
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Independent quad-motor torque distribution stabilizes inertia across high-G trajectories. Scroll upwards to rewind the curve seamlessly.
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-300 border-t border-slate-800 pt-2">
              <span>TORQUE BIAS: 35/65</span>
              <span className="text-fuchsia-400 font-semibold">100% REVERSIBLE</span>
            </div>
          </div>

          {/* STAGE 3 CALLOUT (Appears when car zooms toward the viewer) */}
          <div
            ref={hudStage3Ref}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 max-w-md w-[90%] p-4 rounded-xl bg-slate-950/90 backdrop-blur-2xl border border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.35)] pointer-events-none opacity-0 will-change-transform z-30 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 mb-2">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>TERMINAL VELOCITY REACHED</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-fuchsia-400 font-mono uppercase tracking-wider">
              100% GPU TRANSFORM ACCELERATED
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Zero layout shifts. Silky 120 FPS timeline control powered by GSAP ScrollTrigger and Next.js.
            </p>
          </div>

          {/* ---------------- THE MAIN SCROLL-ANIMATED OBJECT ---------------- */}
          <div
            ref={movingCarRef}
            className="relative w-[300px] sm:w-[500px] md:w-[680px] lg:w-[800px] aspect-[16/9] will-change-transform cursor-pointer"
          >
            {/* Dynamic Halo Glow behind the moving car */}
            <div
              className="absolute -inset-4 sm:-inset-10 rounded-full blur-3xl -z-10 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, rgba(6, 182, 212, ${
                  0.25 + (scrollPercent / 100) * 0.4
                }) 0%, rgba(168, 85, 247, ${
                  0.15 + (scrollPercent / 100) * 0.35
                }) 60%, transparent 80%)`,
              }}
            />

            {/* High-res 3D Supercar Asset */}
            <Image
              src="/images/supercar.jpg"
              alt="3D Supercar Scroll Motion Object"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
              priority
              className="object-contain drop-shadow-[0_25px_60px_rgba(6,182,212,0.45)] select-none pointer-events-none"
            />

            {/* Glowing Ground Reflection Disk */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-cyan-400/20 blur-lg rounded-[100%]" />
          </div>
        </div>

        {/* ----------------- BOTTOM STATUS FOOTER ----------------- */}
        <div className="relative z-30 w-full max-w-4xl mx-auto flex items-center justify-between text-[11px] font-mono text-slate-400 px-4 py-2 rounded-xl bg-slate-950/60 backdrop-blur-md border border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300">GSAP useGSAP() Hook Active</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-500">
            <span>Scroll Down to Progress</span>
            <span>•</span>
            <span>Scroll Up to Reverse</span>
          </div>

          <div className="text-cyan-400 font-semibold">
            {scrollPercent < 35
              ? "PHASE 1: ACCELERATE"
              : scrollPercent < 70
              ? "PHASE 2: VECTOR APEX"
              : "PHASE 3: HYPER SPEED"}
          </div>
        </div>
      </div>
    </section>
  );
}
