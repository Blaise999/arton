// components/site-header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * If a label is not in ROUTES, we fall back to slugify + section base path.
 * So you can add new items later without touching code much.
 */
const slugify = (label: string) =>
  label
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/&/g, "and")
    .replace(/®|™/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Base paths per top nav section (match your /app folder routing)
const SECTION_BASE: Record<string, string> = {
  "GLOBAL CITIZENSHIP": "/global-citizen",
  PROGRAMS: "/global-citizen-programs",
  TOOLS: "/tools",
  "ARTON CAPITAL": "/arton-capital",
  MEDIA: "/media",
  "CONTACT US": "/contact-us",
};

// Explicit routes for anything that doesn’t cleanly slugify
const ROUTES: Record<string, string> = {
  // Global Citizenship
  OVERVIEW: "/global-citizen",
  "RESIDENCY BY INVESTMENT": "/residency-by-investment",
  "CITIZENSHIP BY INVESTMENT": "/citizenship-by-investment",
  "FOR HIGH NET WORTH INVESTORS": "/high-net-worth-investors",
  "FOR CERTIFIED PARTNERS": "/certified-partners",
  "FOR GOVERNMENT AGENCIES": "/government-agencies",
  "DUAL CITIZENSHIP GUIDE": "/dual-citizenship",

  // Programs
  "ANTIGUA & BARBUDA": "/global-citizen-programs/antigua-and-barbuda",
  BULGARIA: "/global-citizen-programs/bulgaria",
  "QUEBEC, CANADA": "/global-citizen-programs/canada-quebec",
  CYPRUS: "/global-citizen-programs/cyprus",
  DOMINICA: "/global-citizen-programs/dominica",
  GREECE: "/global-citizen-programs/greece-golden-visa-program",
  GRENADA: "/global-citizen-programs/grenada",
  HUNGARY: "/global-citizen-programs/hungary",
  LATVIA: "/global-citizen-programs/latvia",
  MALTA: "/global-citizen-programs/malta",
  MONTENEGRO: "/global-citizen-programs/montenegro",
  PORTUGAL: "/global-citizen-programs/portugal",
  "SAINT LUCIA": "/global-citizen-programs/saint-lucia",
  "ST. KITTS & NEVIS": "/global-citizen-programs/st-kitts-nevis",
  "SÃO TOMÉ AND PRÍNCIPE":
    "/global-citizen-programs/sao-tome-principe-citizenship-by-investment",
  SPAIN: "/global-citizen-programs/spain",
  "UNITED KINGDOM": "/global-citizen-programs/united-kingdom",
  "USA EB-5": "/global-citizen-programs/usa-eb-5",

  // Tools
  "ARTON INDEX": "/tools/arton-index",
  "PROGRAM CHECK": "/tools/program-check",
  "PROGRAM COST": "/tools/program-cost",
  "PROGRAM MAP": "/tools/program-map",
  "PROGRAM MATCH": "/tools/program-match",
  "PASSPORTINDEX™": "/passport-index",

  // Arton Capital
  "ABOUT ARTON CAPITAL": "/arton-capital",
  "MISSION & VISION": "/arton-capital/mission-vision",
  "MEET THE TEAM": "/teams",
  "BOARD OF ADVISORS": "/arton-capital/board-of-advisors",
  "ARMAND ARTON’S QUEST": "https://www.armandarton.com/",
  "INTERNATIONAL PARTNERS": "/arton-capital/international-partners",
  "CORPORATE RESPONSIBILITY": "/arton-capital/corporate-responsibility",
  "ARTON GROUP TIMELINE": "/arton-group",
  "CAREERS AT ARTON": "/careers",

  // Media
  NEWSROOM: "/industry-news",
  "INDUSTRY DIGEST": "/industry-digest",
  "ARTON IN THE NEWS": "/arton-in-the-news",
  PUBLICATIONS: "/publications",
  EVENTS: "/events",
  VIDEOS: "/videos",
  "GLOBAL CITIZEN MAGAZINE": "/global-citizen-magazine",

  // Contact Us
  "GLOBAL OFFICE LOCATIONS": "/contact-us",
  "BECOME A GLOBAL CITIZEN®": "/become-a-global-citizen",
  "BECOME A CERTIFIED PARTNER": "/become-a-certified-partner",
  "GOVERNMENT ENQUIRIES": "/government-enquiries",
  "MEDIA ENQUIRIES": "/media-enquiries",
};

const resolveHref = (sectionLabel: string, childLabel: string) => {
  if (ROUTES[childLabel]) return ROUTES[childLabel];

  const base = SECTION_BASE[sectionLabel] ?? "";
  if (!base) return "/" + slugify(childLabel);

  // If "OVERVIEW" and not explicitly mapped, use base
  if (childLabel === "OVERVIEW") return base;

  return `${base}/${slugify(childLabel)}`;
};

type NavChild = { label: string; href: string };
type NavItem = { label: string; children: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "GLOBAL CITIZENSHIP",
    children: [
      "OVERVIEW",
      "RESIDENCY BY INVESTMENT",
      "CITIZENSHIP BY INVESTMENT",
      "FOR HIGH NET WORTH INVESTORS",
      "FOR CERTIFIED PARTNERS",
      "FOR GOVERNMENT AGENCIES",
      "DUAL CITIZENSHIP GUIDE",
    ].map((c) => ({
      label: c,
      href: resolveHref("GLOBAL CITIZENSHIP", c),
    })),
  },
  {
    label: "PROGRAMS",
    children: [
      "OVERVIEW",
      "ANTIGUA & BARBUDA",
      "BULGARIA",
      "QUEBEC, CANADA",
      "CYPRUS",
      "DOMINICA",
      "GREECE",
      "GRENADA",
      "HUNGARY",
      "LATVIA",
      "MALTA",
      "MONTENEGRO",
      "PORTUGAL",
      "SAINT LUCIA",
      "ST. KITTS & NEVIS",
      "SÃO TOMÉ AND PRÍNCIPE",
      "SPAIN",
      "UNITED KINGDOM",
      "USA EB-5",
    ].map((c) => ({
      label: c,
      href: resolveHref("PROGRAMS", c),
    })),
  },
  {
    label: "TOOLS",
    children: [
      "ARTON INDEX",
      "PROGRAM CHECK",
      "PROGRAM COST",
      "PROGRAM MAP",
      "PROGRAM MATCH",
      "PASSPORTINDEX™",
    ].map((c) => ({
      label: c,
      href: resolveHref("TOOLS", c),
    })),
  },
  {
    label: "ARTON CAPITAL",
    children: [
      "ABOUT ARTON CAPITAL",
      "MISSION & VISION",
      "MEET THE TEAM",
      "BOARD OF ADVISORS",
      "ARMAND ARTON’S QUEST",
      "INTERNATIONAL PARTNERS",
      "CORPORATE RESPONSIBILITY",
      "ARTON GROUP TIMELINE",
      "CAREERS AT ARTON",
    ].map((c) => ({
      label: c,
      href: resolveHref("ARTON CAPITAL", c),
    })),
  },
  {
    label: "MEDIA",
    children: [
      "NEWSROOM",
      "INDUSTRY DIGEST",
      "ARTON IN THE NEWS",
      "PUBLICATIONS",
      "EVENTS",
      "VIDEOS",
      "GLOBAL CITIZEN MAGAZINE",
    ].map((c) => ({
      label: c,
      href: resolveHref("MEDIA", c),
    })),
  },
  {
    label: "CONTACT US",
    children: [
      "GLOBAL OFFICE LOCATIONS",
      "BECOME A GLOBAL CITIZEN®",
      "BECOME A CERTIFIED PARTNER",
      "GOVERNMENT ENQUIRIES",
      "MEDIA ENQUIRIES",
    ].map((c) => ({
      label: c,
      href: resolveHref("CONTACT US", c),
    })),
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleMobile = () => setMobileOpen((o) => !o);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-black text-white ${
        mobileOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* TOP GOLD STRIP */}
      <div className="border-b border-black/60 bg-[#050b18]">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[#f3c27d]">
            EMPOWERING GLOBAL CITIZENSHIP
            <span className="align-top text-[0.55rem]">®</span>
          </span>
        </div>
      </div>

      {/* DESKTOP NAV + LOGO */}
      <div className="hidden bg-black md:block">
        <div className="relative mx-auto max-w-6xl px-8">
          <div
            className={`grid grid-cols-[1fr_auto_1fr] items-center ${
              isScrolled ? "h-14" : "h-16"
            }`}
          >
            {/* LEFT NAV */}
            {!isScrolled && (
              <ul className="mr-24 flex justify-end gap-9 text-[0.62rem] font-normal uppercase tracking-[0.26em] lg:mr-32 lg:gap-12">
                {NAV_ITEMS.slice(0, 3).map((item) => (
                  <li key={item.label} className="group relative">
                    <button
                      type="button"
                      className="py-2 text-white hover:text-[#f3c27d]"
                    >
                      {item.label}
                    </button>

                    {/* DROPDOWN */}
                    <div className="invisible absolute left-0 top-full mt-2 min-w-[260px] bg-black/95 px-0 py-2 text-left shadow-[0_18px_40px_rgba(0,0,0,0.9)] ring-1 ring-[#161616] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => {
                        const isExternal = child.href.startsWith("http");
                        return isExternal ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-5 py-[6px] text-[0.68rem] uppercase tracking-[0.18em] text-slate-300 hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-[6px] text-[0.68rem] uppercase tracking-[0.18em] text-slate-300 hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div />

            {/* RIGHT NAV */}
            {!isScrolled && (
              <ul className="ml-24 flex items-center justify-start gap-10 text-[0.62rem] font-normal uppercase tracking-[0.26em] lg:ml-32 lg:gap-12">
                {NAV_ITEMS.slice(3).map((item) => (
                  <li key={item.label} className="group relative">
                    <button
                      type="button"
                      className="py-2 text-white hover:text-[#f3c27d]"
                    >
                      {item.label}
                    </button>

                    {/* DROPDOWN */}
                    <div className="invisible absolute left-0 top-full mt-2 min-w-[260px] bg-black/95 px-0 py-2 text-left shadow-[0_18px_40px_rgba(0,0,0,0.9)] ring-1 ring-[#161616] opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      {item.children.map((child) => {
                        const isExternal = child.href.startsWith("http");
                        return isExternal ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block px-5 py-[6px] text-[0.68rem] uppercase tracking-[0.18em] text-slate-300 hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-[6px] text-[0.68rem] uppercase tracking-[0.18em] text-slate-300 hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                ))}

                {/* EN FLAG PILL */}
                <li>
                  <button className="flex h-7 items-center rounded-md bg-[#142131] px-3 text-[0.6rem] font-semibold tracking-[0.18em]">
                    EN
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* CENTER LOGO – slightly reduced sizes */}
          <Link
            href="/"
            className={`absolute left-1/2 top-full flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[radial-gradient(circle_at_30%_30%,#f7d9a4,#c88a3e)] ${
              isScrolled
                ? "h-[52px] w-[52px] shadow-[0_0_0_5px_#000,0_12px_24px_rgba(0,0,0,0.85)]"
                : "h-[80px] w-[80px] shadow-[0_0_0_6px_#000,0_18px_40px_rgba(0,0,0,0.95)]"
            }`}
          >
            <img
              src="/Pics/logo.png"
              alt="Logo"
              className="h-full w-full rounded-full object-contain"
            />
          </Link>
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="bg-black md:hidden">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Modern animated hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMobile}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur-sm"
          >
            <span
              className={`absolute block h-[1.5px] w-4 rounded-full bg-white transition-transform duration-200 ${
                mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute block h-[1.5px] w-4 rounded-full bg-white transition-opacity duration-150 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-[1.5px] w-4 rounded-full bg-white transition-transform duration-200 ${
                mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>

          <div className="h-9 w-9" />
          <div className="h-9 w-9" />

          {!isScrolled && (
            <Link
              href="/"
              className="absolute left-1/2 top-full flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[radial-gradient(circle_at_30%_30%,#f7d9a4,#c88a3e)] shadow-[0_0_0_6px_#000,0_18px_40px_rgba(0,0,0,0.95)]"
            >
              <img
                src="/Pics/logo.png"
                alt="Logo"
                className="h-full w-full rounded-full object-contain"
              />
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE OVERLAY MENU – refreshed look */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-b from-black via-black/95 to-[#050b18] text-white transition-opacity duration-200 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-200">
              Navigation
            </span>
            <button
              type="button"
              onClick={closeMobile}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5 text-sm"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto rounded-3xl border border-white/10 bg-white/5 px-2 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            {NAV_ITEMS.map((item, idx) => {
              const open = activeSection === idx;
              return (
                <div
                  key={item.label}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActiveSection(open ? null : idx)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-slate-100"
                  >
                    <span>{item.label}</span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[0.7rem] transition-transform duration-150 ${
                        open ? "rotate-90 bg-white/10" : ""
                      }`}
                    >
                      ›
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      open ? "max-h-72" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-1 pb-3 pl-4 pr-3 text-sm">
                      {item.children.map((child) => {
                        const isExternal = child.href.startsWith("http");
                        return (
                          <li key={child.label}>
                            {isExternal ? (
                              <a
                                href={child.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={closeMobile}
                                className="block rounded-md py-1.5 text-[0.78rem] text-slate-200 hover:bg-white/10 hover:text-[#f3c27d]"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                href={child.href}
                                onClick={closeMobile}
                                className="block rounded-md py-1.5 text-[0.78rem] text-slate-200 hover:bg-white/10 hover:text-[#f3c27d]"
                              >
                                {child.label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
