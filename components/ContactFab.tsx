// components/ContactFab.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="fixed right-5 bottom-5 z-50">
      <div className="relative flex flex-col items-end gap-3">
        {/* Hidden icons slide out */}
        <a
          href="https://wa.me/+13436414504"
          target="_blank"
          rel="noreferrer"
          className={`transition-all duration-300 ${
            open ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-4 opacity-0 pointer-events-none"
          } bg-white rounded-full p-3 shadow-lg border border-black/10`}
          title="Whatsapp"
        >
          <WhatsappIcon />
        </a>

        <a
          href="https://www.artoncapitals.com/contact-us/"
          className={`transition-all duration-300 ${
            open ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-4 opacity-0 pointer-events-none"
          } bg-white rounded-full p-3 shadow-lg border border-black/10`}
          title="Email"
        >
          <EmailIcon />
        </a>

        {/* Main FAB */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen((v) => !v);
          }}
          className="bg-[#cc9966] hover:bg-[#b88452] text-white rounded-full p-4 shadow-xl border border-black/10 transition"
          aria-label="Contact options"
        >
          <CallIcon />
        </button>
      </div>
    </div>
  );
}

/* ====== SVG ICONS (exact paths preserved) ====== */

function CallIcon() {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g id="icomoon-ignore"></g>
      <path d="M23.407 30.394c-2.431 0-8.341-3.109-13.303-9.783-4.641-6.242-6.898-10.751-6.898-13.785 0-2.389 1.65-3.529 2.536-4.142l0.219-0.153c0.979-0.7 2.502-0.927 3.086-0.927 1.024 0 1.455 0.599 1.716 1.121 0.222 0.442 2.061 4.39 2.247 4.881 0.286 0.755 0.192 1.855-0.692 2.488l-0.155 0.108c-0.439 0.304-1.255 0.869-1.368 1.557-0.055 0.334 0.057 0.684 0.342 1.068 1.423 1.918 5.968 7.55 6.787 8.314 0.642 0.6 1.455 0.685 2.009 0.218 0.573-0.483 0.828-0.768 0.83-0.772l0.059-0.057c0.048-0.041 0.496-0.396 1.228-0.396 0.528 0 1.065 0.182 1.596 0.541 1.378 0.931 4.487 3.011 4.487 3.011l0.050 0.038c0.398 0.341 0.973 1.323 0.302 2.601-0.695 1.327-2.85 4.066-5.079 4.066zM9.046 2.672c-0.505 0-1.746 0.213-2.466 0.728l-0.232 0.162c-0.827 0.572-2.076 1.435-2.076 3.265 0 2.797 2.188 7.098 6.687 13.149 4.914 6.609 10.532 9.353 12.447 9.353 1.629 0 3.497-2.276 4.135-3.494 0.392-0.748 0.071-1.17-0.040-1.284-0.36-0.241-3.164-2.117-4.453-2.988-0.351-0.238-0.688-0.358-0.999-0.358-0.283 0-0.469 0.1-0.532 0.14-0.104 0.111-0.39 0.405-0.899 0.833-0.951 0.801-2.398 0.704-3.424-0.254-0.923-0.862-5.585-6.666-6.916-8.459-0.46-0.62-0.641-1.252-0.538-1.877 0.187-1.133 1.245-1.866 1.813-2.26l0.142-0.099c0.508-0.363 0.4-1.020 0.316-1.242-0.157-0.414-1.973-4.322-2.203-4.781-0.188-0.376-0.336-0.533-0.764-0.533z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <style>{`.cls-1,.cls-2{fill:none;stroke:#000000;stroke-linejoin:round;stroke-width:2px;}.cls-2{stroke-linecap:round;}`}</style>
      </defs>
      <g data-name="Layer 2" id="Layer_2">
        <rect className="cls-1" height="42.33" rx="4.61" ry="4.61" width="62" x="1" y="10.67" />
        <polyline className="cls-2" points="5 16 32 32 59 16" />
        <line className="cls-2" x1="24.91" x2="5" y1="27.8" y2="44" />
        <line className="cls-2" x1="39.09" x2="59" y1="27.8" y2="45" />
      </g>
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <style>{`.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"
      />
    </svg>
  );
}
