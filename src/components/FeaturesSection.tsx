"use client";

import React, { useState } from "react";
import { Cpu, Zap, Layers, RefreshCw, Gauge, Shield, Sparkles } from "lucide-react";

interface Mode {
  id: string;
  name: string;
  speed: string;
  handling: string;
  boost: string;
  color: string;
  accentClass: string;
}

const MODES: Mode[] = [
  {
    id: "stealth",
    name: "STEALTH ZERO",
    speed: "240 KM/H",
    handling: "94%",
    boost: "ECO 45%",
    color: "#06b6d4",
    accentClass: "border-cyan-500/50 text-cyan-400 shadow-cyan-500/20",
  },
  {
    id: "apex",
    name: "APEX TRACK",
    speed: "340 KM/H",
    handling: "99%",
    boost: "MAX 85%",
    color: "#a855f7",
    accentClass: "border-fuchsia-500/50 text-fuchsia-400 shadow-fuchsia-500/20",
  },
  {
    id: "hyper",
    name: "HYPER OVERCLOCK",
    speed: "420 KM/H",
    handling: "98%",
    boost: "OVERBOOST 100%",
    color: "#f59e0b",
    accentClass: "border-amber-500/50 text-amber-400 shadow-amber-500/20",
  },
];

export default function FeaturesSection() {
  const [selectedMode, setSelectedMode] = useState<Mode>(MODES[1]);

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 md:px-8 bg-[#030305] border-t border-slate-900 overflow-hidden">
      {/* Background Grid & Lighting */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURAL BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white uppercase">
            Engineered for Pure Performance
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Every animation sequence is orchestrated through hardware-accelerated CSS transforms, bypassing layout calculations for consistent 120 FPS rendering.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="group relative p-6 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.25)]">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-mono text-white mb-2">
              Zero Layout Reflows
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              By constraining all GSAP tweens strictly to <code className="text-cyan-300 font-mono">transform: translate3d(), scale(), rotate()</code>, mutations bypass browser reflow pipelines.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400">
              <span>COMPOSITOR THREAD</span>
              <span>120 FPS LOCK</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-6 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(168,85,247,0.25)]">
            <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-5 group-hover:scale-110 transition-transform">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-mono text-white mb-2">
              Bidirectional Scrubbing
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              ScrollTrigger binds the timeline directly to the viewport scroll position with dampening <code className="text-fuchsia-300 font-mono">scrub: 1</code>, enabling pristine rewind accuracy.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-fuchsia-400">
              <span>SMOOTH DAMPENING</span>
              <span>100% REVERSIBLE</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-6 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(245,158,11,0.25)]">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-mono text-white mb-2">
              Next.js & useGSAP Memory Safety
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Built on React 19 and Next.js App Router using the official <code className="text-amber-300 font-mono">@gsap/react</code> scoped hook to guarantee automatic lifecycle garbage collection.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-amber-400">
              <span>AUTO SCOPE CLEANUP</span>
              <span>ZERO MEMORY LEAKS</span>
            </div>
          </div>
        </div>

        {/* Interactive Dynamic Telemetry Mode Selector Demo */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>INTERACTIVE SIMULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                Vehicle Performance Profiles
              </h3>
            </div>

            {/* Mode Toggle Buttons */}
            <div className="flex flex-wrap gap-2">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                    selectedMode.id === mode.id
                      ? `${mode.accentClass} bg-slate-900 font-bold shadow-lg`
                      : "border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 bg-slate-950"
                  }`}
                >
                  {mode.name}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Mode Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                TOP VELOCITY
              </span>
              <span className="text-2xl font-black font-mono text-white">
                {selectedMode.speed}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                CORNERING GRIP
              </span>
              <span className="text-2xl font-black font-mono text-white">
                {selectedMode.handling}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-1">
                DYNAMIC BOOST
              </span>
              <span className="text-2xl font-black font-mono text-white">
                {selectedMode.boost}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
