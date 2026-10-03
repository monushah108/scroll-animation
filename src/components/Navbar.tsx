"use client";

import React from "react";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-[#090b14]/70 backdrop-blur-xl border border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070913] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-fuchsia-400 font-mono">
              ITZFIZZ
            </span>
            <span className="text-[9px] uppercase tracking-widest text-cyan-400/80 -mt-1 font-mono">
              HYPER ENGINE v2.5
            </span>
          </div>
        </div>

        {/* Live System Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>GSAP ENGINE READY</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">120 FPS</span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#scroll-experience"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-100 rounded-xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Explore Motion</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </header>
  );
}
