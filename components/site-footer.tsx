// components/site-footer.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "@app/src/i18n/LanguageContext";
import { LANG_LABELS, type SupportedLang } from "@app/src/i18n/dictionary";

/**
 * Same routing approach as SiteHeader:
 * - ROUTES for explicit slugs you already use in /app
 * - fallback slugify + section base for new items
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

const SECTION_BASE: Record<string, string> = {
  "GLOBAL CITIZENSHIP": "/global-citizen",
  PROGRAMS: "/global-citizen-programs",
  TOOLS: "/tools",
  "ARTON CAPITAL": "/arton-capital",
  MEDIA: "/media",
  "CONTACT US": "/contact-us",
};

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

  if (childLabel === "OVERVIEW") return base;

  return `${base}/${slugify(childLabel)}`;
};

type FooterItem = { label: string; href: string };

const FOOTER_SECTIONS: {
  title: string;
  sectionKey: string;
  items: FooterItem[];
}[] = [
  {
    title: "Global Citizenship",
    sectionKey: "GLOBAL CITIZENSHIP",
    items: [
      "OVERVIEW",
      "RESIDENCY BY INVESTMENT",
      "CITIZENSHIP BY INVESTMENT",
      "FOR HIGH NET WORTH INVESTORS",
      "FOR CERTIFIED PARTNERS",
      "FOR GOVERNMENT AGENCIES",
      "DUAL CITIZENSHIP GUIDE",
    ].map((label) => ({
      label:
        label === "FOR HIGH NET WORTH INVESTORS"
          ? "High Net Worth Investors"
          : label === "FOR CERTIFIED PARTNERS"
          ? "Certified Partners"
          : label === "FOR GOVERNMENT AGENCIES"
          ? "Government Agencies"
          : label === "DUAL CITIZENSHIP GUIDE"
          ? "Guide to Dual Citizenship"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("GLOBAL CITIZENSHIP", label),
    })),
  },
  {
    title: "Programs",
    sectionKey: "PROGRAMS",
    items: [
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
    ].map((label) => ({
      label:
        label === "OVERVIEW"
          ? "Overview"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("PROGRAMS", label),
    })),
  },
  {
    title: "Tools",
    sectionKey: "TOOLS",
    items: [
      "ARTON INDEX",
      "PROGRAM COST",
      "PROGRAM MATCH",
      "PROGRAM CHECK",
      "PROGRAM MAP",
      "PASSPORTINDEX™",
    ].map((label) => ({
      label:
        label === "PASSPORTINDEX™"
          ? "PassportIndex™"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("TOOLS", label),
    })),
  },
  {
    title: "Stay up to date",
    sectionKey: "MEDIA",
    items: [
      "NEWSROOM",
      "INDUSTRY DIGEST",
      "ARTON IN THE NEWS",
      "PUBLICATIONS",
      "EVENTS",
      "VIDEOS",
      "GLOBAL CITIZEN MAGAZINE",
    ].map((label) => ({
      label:
        label === "NEWSROOM"
          ? "Industry News"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("MEDIA", label),
    })),
  },
  {
    title: "Arton Capital",
    sectionKey: "ARTON CAPITAL",
    items: [
      "ABOUT ARTON CAPITAL",
      "MISSION & VISION",
      "MEET THE TEAM",
      "BOARD OF ADVISORS",
      "ARMAND ARTON’S QUEST",
      "INTERNATIONAL PARTNERS",
      "CORPORATE RESPONSIBILITY",
      "ARTON GROUP TIMELINE",
      "CAREERS AT ARTON",
    ].map((label) => ({
      label:
        label === "ABOUT ARTON CAPITAL"
          ? "About Arton"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("ARTON CAPITAL", label),
    })),
  },
  {
    title: "Contact Us",
    sectionKey: "CONTACT US",
    items: [
      "GLOBAL OFFICE LOCATIONS",
      "BECOME A GLOBAL CITIZEN®",
      "BECOME A CERTIFIED PARTNER",
      "GOVERNMENT ENQUIRIES",
      "MEDIA ENQUIRIES",
    ].map((label) => ({
      label:
        label === "BECOME A GLOBAL CITIZEN®"
          ? "Become a Global Citizen®"
          : label
              .toLowerCase()
              .replace(/\b\w/g, (m) => m.toUpperCase()),
      href: resolveHref("CONTACT US", label),
    })),
  },
];

// order of languages in the pill row
const LANGUAGE_ORDER: SupportedLang[] = ["en", "zh", "vi", "ru"];

export function SiteFooter() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-10">
        {/* Top CTA row */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              {t("footer_tagline_title") || (
                <>
                  Empowering Global Citizenship
                  <span className="align-top text-[0.6rem]">®</span>
                </>
              )}
            </p>
            <h3 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              {t("footer_tagline_body") ||
                "Mobility, security, opportunity — structured for generations."}
            </h3>
            <p className="max-w-xl text-sm text-slate-400">
              {t("footer_tagline_desc") ||
                "Artsoncapital helps investors, partners, and governments design compliant, investment-led residency and citizenship strategies in key jurisdictions worldwide."}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={resolveHref("CONTACT US", "BECOME A GLOBAL CITIZEN®")}
                className="inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-amber-400"
              >
                {t("footer_cta_global_citizen") || "Become a Global Citizen"}
                <span className="ml-1">®</span>
              </Link>

              <Link
                href={resolveHref("CONTACT US", "BECOME A CERTIFIED PARTNER")}
                className="inline-flex items-center rounded-full border border-amber-500/60 px-4 py-2 text-xs font-medium text-amber-300 hover:border-amber-400 hover:text-amber-200"
              >
                {t("footer_cta_certified_partner") ||
                  "Become a Certified Partner"}
              </Link>
            </div>
          </div>

          {/* Passport Index / app badges block */}
          <div className="space-y-3 md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {t("footer_passportindex_title") || "Passport Index"}
            </p>
            <p className="text-xs text-slate-400">
              {t("footer_passportindex_desc") ||
                "Track the world's passports, compare mobility, and explore how programs improve global access."}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={resolveHref("TOOLS", "PASSPORTINDEX™")}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-left text-[0.65rem] leading-tight text-slate-200 hover:border-slate-500"
              >
                <span className="block text-[0.55rem] uppercase tracking-[0.18em] text-slate-400">
                  {t("footer_passportindex_explore_label") || "Explore"}
                </span>
                <span className="block text-xs font-semibold">
                  {t("footer_passportindex_brand") || "PassportIndex™"}
                </span>
              </Link>

              <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-left text-[0.65rem] leading-tight text-slate-200 hover:border-slate-500">
                <span className="block text-[0.55rem] uppercase tracking-[0.18em] text-slate-400">
                  {t("footer_badge_appstore_label_top") || "Download on the"}
                </span>
                <span className="block text-xs font-semibold">
                  {t("footer_badge_appstore_label_bottom") || "App Store"}
                </span>
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-left text-[0.65rem] leading-tight text-slate-200 hover:border-slate-500">
                <span className="block text-[0.55rem] uppercase tracking-[0.18em] text-slate-400">
                  {t("footer_badge_playstore_label_top") || "Get it on"}
                </span>
                <span className="block text-xs font-semibold">
                  {t("footer_badge_playstore_label_bottom") || "Google Play"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="border-y border-slate-800 py-4 text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t("languages_heading") || "Languages"}
          </span>
          <div className="mt-2 flex flex-wrap gap-3 text-[0.7rem]">
            {LANGUAGE_ORDER.map((code) => {
              const active = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={[
                    "rounded-full px-3 py-1 border transition-colors",
                    active
                      ? "border-slate-700 bg-slate-900 text-slate-100"
                      : "border-slate-800 hover:border-slate-600 text-slate-300",
                  ].join(" ")}
                >
                  {LANG_LABELS[code]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main nav grid */}
        <div className="grid gap-8 text-sm text-slate-300 md:grid-cols-3 lg:grid-cols-6">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {section.title}
              </h4>

              <div className="flex flex-col gap-1 text-xs text-slate-400">
                {section.items.map((item) => {
                  const isExternal = item.href.startsWith("http");
                  return isExternal ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-100"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="hover:text-slate-100"
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* small extra line you had in Contact, now translatable */}
                {section.title === "Contact Us" && (
                  <span className="mt-2 text-[0.7rem] text-slate-500">
                    {t("footer_contact_tagline") ||
                      "Гражданство через Инвестиции"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="border-t border-slate-800 pt-4 text-[0.7rem] text-slate-500">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()}{" "}
              {t("footer_copyright_brand") || "Artsoncapital"}.{" "}
              {t("footer_copyright_rights") || "All rights reserved."}
            </span>
            <span className="text-slate-600">
              {/* space for extra legal / links later */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
