"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-14 px-6 sm:px-12 bg-zinc-950 text-zinc-400 border-t border-zinc-900 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-4">
          <span className="font-medium tracking-[0.2em] text-white uppercase">
            ITZFIZZ
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500 font-light">
            Minimalist Interactive Landing Experience
          </span>
        </div>

        <div className="flex items-center gap-6 text-zinc-500">
          <button
            onClick={scrollToTop}
            className="hover:text-zinc-200 transition-colors uppercase tracking-widest text-[11px] font-mono"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
