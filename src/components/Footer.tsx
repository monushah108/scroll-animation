"use client";

import React from "react";
import { ArrowUp, Sparkles, Terminal, Github, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full py-12 px-4 sm:px-6 md:px-8 bg-[#020204] border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-black font-mono tracking-widest text-white">
              ITZFIZZ
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-400 border border-cyan-500/30">
              CORE v2.5
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            High-performance interactive motion interface built with Next.js App Router, Tailwind CSS, and GSAP ScrollTrigger.
          </p>
        </div>

        {/* Center: Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
          <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            Next.js App Router
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/40 text-cyan-300">
            GSAP &amp; @gsap/react
          </span>
          <span className="px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/40 text-purple-300">
            ScrollTrigger Scrub
          </span>
        </div>

        {/* Right: Back to Top Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all duration-300 shadow-md"
          >
            <span>TOP OF ENGINE</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-cyan-400" />
          </button>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-2">
        <div>&copy; {new Date().getFullYear()} ITZFIZZ. Crafted for ultimate visual performance.</div>
        <div className="flex items-center gap-2 text-cyan-500/70">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>GPU HARDWARE ACCELERATED</span>
        </div>
      </div>
    </footer>
  );
}
