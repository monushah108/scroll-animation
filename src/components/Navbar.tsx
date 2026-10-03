"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="text-sm font-medium tracking-[0.25em] text-white uppercase hover:text-zinc-300 transition-colors"
        >
          ITZFIZZ
        </a>

        {/* Minimal Navigation Links */}
        <nav className="hidden sm:flex items-center gap-8 text-xs tracking-widest uppercase text-zinc-400">
          <a href="#overview" className="hover:text-white transition-colors">
            Overview
          </a>
          <a href="#showcase" className="hover:text-white transition-colors">
            Motion
          </a>
          <a href="#specs" className="hover:text-white transition-colors">
            Specifications
          </a>
        </nav>

        {/* Minimal Action */}
        <div className="flex items-center">
          <a
            href="#showcase"
            className="text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
}
