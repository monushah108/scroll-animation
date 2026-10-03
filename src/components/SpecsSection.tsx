"use client";

import React from "react";

const SPECIFICATIONS = [
  { label: "Rendering Pipeline", value: "Next.js 16 App Router (Turbopack)" },
  { label: "Animation Engine", value: "GSAP 3.12 Core + @gsap/react" },
  { label: "Scroll Binding", value: "ScrollTrigger (Bi-directional Scrub)" },
  { label: "Motion Primitives", value: "Pure CSS Transforms (Hardware Composited)" },
  { label: "Reflow Impact", value: "Zero (No Geometry Recomputations)" },
  { label: "Styling Architecture", value: "Tailwind CSS (Pure Monochromatic)" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="relative w-full py-28 px-6 sm:px-12 bg-zinc-950 text-zinc-100 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-zinc-500 block mb-2">
            Technical Audit
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-white">
            Architectural Specifications
          </h2>
          <p className="mt-2 text-sm text-zinc-400 font-light leading-relaxed">
            Engineered with absolute restraint. Motion is utilized strictly for contextual clarity and tactile depth.
          </p>
        </div>

        {/* Minimal Specs List */}
        <div className="divide-y divide-zinc-900 border-t border-b border-zinc-900">
          {SPECIFICATIONS.map((spec, index) => (
            <div
              key={index}
              className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
            >
              <span className="text-zinc-400 font-normal font-sans">
                {spec.label}
              </span>
              <span className="text-zinc-100 font-mono text-xs sm:text-sm font-light">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
