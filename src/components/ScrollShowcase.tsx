"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const note1Ref = useRef<HTMLDivElement>(null);
  const note2Ref = useRef<HTMLDivElement>(null);
  const note3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !objectRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth, luxurious scrubbing
        },
      });

      // Natural, restrained, elegant object motion
      // Stage 1: Slight elevation and subtle scale up
      tl.to(
        objectRef.current,
        {
          scale: 1.18,
          x: "8vw",
          rotate: -2,
          ease: "none",
          duration: 1,
        },
        0
      );

      if (note1Ref.current) {
        tl.fromTo(
          note1Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "none" },
          0.1
        ).to(note1Ref.current, { opacity: 0, y: -10, duration: 0.4, ease: "none" }, 0.7);
      }

      // Stage 2: Glides gracefully across to the other quadrant
      tl.to(
        objectRef.current,
        {
          scale: 1.28,
          x: "-8vw",
          rotate: 1.5,
          ease: "none",
          duration: 1,
        },
        1
      );

      if (note2Ref.current) {
        tl.fromTo(
          note2Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "none" },
          1.1
        ).to(note2Ref.current, { opacity: 0, y: -10, duration: 0.4, ease: "none" }, 1.7);
      }

      // Stage 3: Smooth return to center with final resting scale
      tl.to(
        objectRef.current,
        {
          scale: 1.35,
          x: "0vw",
          rotate: 0,
          ease: "none",
          duration: 1,
        },
        2
      );

      if (note3Ref.current) {
        tl.fromTo(
          note3Ref.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "none" },
          2.1
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative w-full h-[250vh] bg-zinc-950 text-zinc-100"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-6 sm:px-12 py-12 overflow-hidden select-none">
        {/* Top Minimal Status Header */}
        <div className="w-full max-w-5xl flex items-center justify-between border-b border-zinc-900 pb-4 text-xs font-mono tracking-widest uppercase text-zinc-500">
          <span>Kinetic Inspection</span>
          <span className="hidden sm:inline">Scroll-Linked Motion Scrub</span>
          <span>Axis Control</span>
        </div>

        {/* Center Presentation Stage */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          {/* Minimal Annotation 1 */}
          <div
            ref={note1Ref}
            className="absolute left-6 sm:left-16 top-1/4 max-w-xs opacity-0 will-change-transform pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
              01 / Materiality
            </span>
            <h2 className="text-base font-medium text-white tracking-wide">
              Anodized Titanium
            </h2>
            <p className="mt-1 text-xs text-zinc-400 font-light leading-relaxed">
              Precision milled chassis with subtle surface bead-blasting and micro-chamfered edges.
            </p>
          </div>

          {/* Minimal Annotation 2 */}
          <div
            ref={note2Ref}
            className="absolute right-6 sm:right-16 top-1/3 max-w-xs opacity-0 will-change-transform pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
              02 / Architecture
            </span>
            <h2 className="text-base font-medium text-white tracking-wide">
              Sculpted Void Geometry
            </h2>
            <p className="mt-1 text-xs text-zinc-400 font-light leading-relaxed">
              Aerodynamic passage designed to minimize acoustic turbulence while maintaining structural rigidity.
            </p>
          </div>

          {/* Minimal Annotation 3 */}
          <div
            ref={note3Ref}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center max-w-sm opacity-0 will-change-transform pointer-events-none"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-1">
              03 / Synchronization
            </span>
            <h2 className="text-base font-medium text-white tracking-wide">
              Sub-pixel Timeline Precision
            </h2>
            <p className="mt-1 text-xs text-zinc-400 font-light leading-relaxed">
              Every transformation is bound to the scroll delta, rendering fluidly across forward and reverse gestures.
            </p>
          </div>

          {/* The Visual Object Tied to ScrollTrigger */}
          <div
            ref={objectRef}
            className="relative w-[320px] sm:w-[520px] md:w-[680px] aspect-[16/9] will-change-transform pointer-events-none"
          >
            <Image
              src="/images/product.jpg"
              alt="Industrial Precision Object"
              fill
              sizes="(max-width: 768px) 90vw, 680px"
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Status Line */}
        <div className="w-full max-w-5xl flex items-center justify-between border-t border-zinc-900 pt-4 text-xs font-mono tracking-widest text-zinc-500 uppercase">
          <span>Scroll to translate</span>
          <span className="hidden sm:inline">100% Transform Compositor</span>
          <span>Reverse on upward scroll</span>
        </div>
      </div>
    </section>
  );
}
