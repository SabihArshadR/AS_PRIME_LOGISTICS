"use client";

import React, { useEffect, useState } from "react";

// ── Logo carousel data ────────────────────────────────────────────────────────
const logos = [
  { src: "/1.png", alt: "HeavyHaulers.com" },
  { src: "/2.png", alt: "Nationwide Forklift" },
  { src: "/3.png", alt: "Hawaii Transport Services" },
  { src: "/4.png", alt: "Tractor Transport" },
  { src: "/5.png", alt: "Total Car Shipping" },
  { src: "/6.png", alt: "HeavyHaulers.com" },
  { src: "/7.png", alt: "Nationwide Forklift" },
  { src: "/8.png", alt: "Hawaii Transport Services" },
  { src: "/9.png", alt: "Tractor Transport" },
  { src: "/10.png", alt: "Total Car Shipping" },
  { src: "/11.png", alt: "HeavyHaulers.com" },
  { src: "/12.png", alt: "Nationwide Forklift" },
];

// ── Quote + LinkedIn Banner ───────────────────────────────────────────────────
function OrangeBanner() {
  return (
    <div
      className="relative w-full flex overflow-hidden flex-col md:flex-row"
      style={{ minHeight: 160 }}
    >
      {/* Left half – quote */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center px-8 py-10"
        style={{ minHeight: 260 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/b1.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#CA542D]/80" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <span
            className="text-white/90 text-5xl leading-none mb-2 font-serif"
            aria-hidden="true"
          >
            ❝
          </span>

          <p className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
            Success is your duty, obligation, responsibility.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px md:h-auto md:w-px bg-white/20 flex-shrink-0" />

      {/* Right half – LinkedIn */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center px-8 py-10"
        style={{ minHeight: 260 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/b2.jpg')" }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[#CA542D]/80" aria-hidden="true" />

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex flex-col items-center text-center group"
        >
          <div className="mb-3 w-10 h-10 bg-white/20 group-hover:bg-white/30 transition-colors rounded flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.869 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z" />
            </svg>
          </div>

          <p className="text-white text-sm font-bold tracking-[0.2em] uppercase group-hover:underline">
            Connect with us on LinkedIn
          </p>
        </a>
      </div>
    </div>
  );
}

// ── Logo Carousel ─────────────────────────────────────────────────────────────
function LogoCarousel() {
  const [offset, setOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Mobile = 1 logo, Desktop = 4 logos
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxOffset = Math.max(0, logos.length - visibleCount);

  const prev = () => setOffset((o) => Math.max(0, o - 1));

  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  const visible = logos.slice(offset, offset + visibleCount);

  return (
    <div className="bg-gray-100 border-t border-gray-200 w-full py-6 px-4 flex items-center gap-4">
      {/* Prev arrow */}
      <button
        onClick={prev}
        disabled={offset === 0}
        aria-label="Previous logos"
        className="text-gray-400 hover:text-orange-500 disabled:opacity-30 transition-colors flex-shrink-0 text-2xl px-2"
      >
        ‹
      </button>

      {/* Logos */}
      <div className="flex flex-1 items-center justify-center md:justify-around gap-6">
        {visible.map((logo, i) => (
          <div
            key={offset + i}
            className="flex items-center justify-center h-16 flex-1"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 max-w-[160px] object-contain hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Next arrow */}
      <button
        onClick={next}
        disabled={offset >= maxOffset}
        aria-label="Next logos"
        className="text-gray-400 hover:text-orange-500 disabled:opacity-30 transition-colors flex-shrink-0 text-2xl px-2"
      >
        ›
      </button>
    </div>
  );
}

// ── Combined export ───────────────────────────────────────────────────────────
export default function QuoteBannerWithLogos() {
  return (
    <div className="w-full">
      <OrangeBanner />
      <LogoCarousel />
    </div>
  );
}