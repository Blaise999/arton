"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

// ⬇️ Hero slider (ACCESS / FREEDOM / SECURITY / OPPORTUNITY / FUTURE)
import { HeroSlider } from "@/components/hero-slider";

/* -------------------------------------------------------------------------- */
/*                               News slider data                             */
/* -------------------------------------------------------------------------- */

type NewsItem = {
  date: string;
  title: string;
  href: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2025-11-14",
    title:
      "Portugal’s Socialist Party has sent the recently approved Nationality Law amendments directly to the Court for preventive…",
    href: "https://artoncapitals.com/industry-news/portugals-nationality-law-moves-to-the-constitutional-court/",
  },
  {
    date: "2025-11-12",
    title:
      "Bulgaria’s Residency by Investment Program enters its strongest chapter yet.",
    href: "https://artoncapitals.com/industry-news/one-investment-schengen-today-euro-tomorrow/",
  },
  {
    date: "2025-11-06",
    title:
      "Arton Capital and Dubai Sotheby’s International Realty launch strategic alliance.",
    href: "https://artoncapitals.com/industry-news/press-releases/arton-capital-and-dubai-sothebys-international-realty-launch-strategic-alliance-to-redefine-global-living-for-hnwis/",
  },
  {
    date: "2025-11-03",
    title: "Botswana’s Vision Transcends Geography",
    href: "https://artoncapitals.com/industry-news/botswanas-impact-citizenship-program-attracts-1000-investors-in-first-month/",
  },
  {
    date: "2025-10-29",
    title: "Portugal’s Nationality Law Is Evolving",
    href: "https://artoncapitals.com/industry-news/portugals-nationality-law/",
  },
  {
    date: "2025-10-23",
    title: "Borders Never Meant To Be Closed Forever",
    href: "https://artoncapitals.com/industry-news/uk-visa-requirement-for-botswana-nationals/",
  },
  {
    date: "2025-10-21",
    title: "EES for Dual Nationals",
    href: "https://artoncapitals.com/industry-news/ees-for-dual-nationals/",
  },
  {
    date: "2025-10-13",
    title: "Is the EU Becoming Harder to Reach?",
    href: "https://artoncapitals.com/industry-news/visa-suspension-mechanism/",
  },
  {
    date: "2025-10-07",
    title: "H-1B Just Got Expensive",
    href: "https://artoncapitals.com/industry-news/h-1b-just-got-expensive/",
  },
  {
    date: "2025-09-26",
    title: "Botswana to launch Impact Citizenship Programme",
    href: "https://artoncapitals.com/industry-news/botswana-to-launch-impact-citizenship-programme/",
  },
  {
    date: "2025-09-25",
    title: "Trump's Gold Card is 80% Reduced",
    href: "https://artoncapitals.com/industry-news/trumps-gold-card-original-price-cut-platinum-card-introduced/",
  },
];

/* -------------------------------------------------------------------------- */
/*                                News slider UI                              */
/* -------------------------------------------------------------------------- */

function NewsSlider() {
  const [groupIndex, setGroupIndex] = useState(0);
  const itemsPerGroup = 3;

  const groups: NewsItem[][] = [];
  for (let i = 0; i < NEWS_ITEMS.length; i += itemsPerGroup) {
    groups.push(NEWS_ITEMS.slice(i, i + itemsPerGroup));
  }

  const totalGroups = groups.length;

  const prev = () => {
    setGroupIndex((prevIdx) => (prevIdx === 0 ? totalGroups - 1 : prevIdx - 1));
  };

  const next = () => {
    setGroupIndex((prevIdx) =>
      prevIdx === totalGroups - 1 ? 0 : prevIdx + 1,
    );
  };

  return (
    <section className="border-t border-[#1a1a1a] bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-6">
        {/* Left arrow */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous news"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/70 transition hover:border-white hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Sliding track */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${groupIndex * 100}%)` }}
          >
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="flex w-full flex-none flex-col gap-5 md:flex-row md:gap-16"
              >
                {group.map((item) => (
                  <article key={item.href} className="flex-1">
                    {/* Date ribbon */}
                    <div className="mb-2 inline-flex items-center">
                      <div className="flex items-stretch">
                        <span className="bg-[#d39a5a] px-2.5 py-1 text-[0.65rem] italic leading-none text-white">
                          {item.date}
                        </span>
                        <span className="h-0 w-0 border-b-[12px] border-l-[9px] border-t-[12px] border-b-transparent border-t-transparent border-l-[#d39a5a]" />
                      </div>
                    </div>

                    {/* Headline – now plain text, NOT clickable */}
                    <h3 className="max-w-xs text-[0.8rem] text-neutral-200 md:max-w-sm md:text-sm">
                      {item.title}
                    </h3>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* See more link (still works, now on artoncapitals.com) */}
        <div className="hidden text-xs font-medium text-[#d3a163] md:block">
          <Link
            href="https://artoncapitals.com/industry-news/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            See more
          </Link>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={next}
          aria-label="Next news"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/70 transition hover:border-white hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Become a Global Citizen strip                       */
/* -------------------------------------------------------------------------- */

function GlobalCitizenSection() {
  return (
    <section className="relative bg-[url('/Pics/sky.jpg')] bg-cover bg-center">
      {/* very light overlay to keep contrast but still look like the screenshot */}
      <div className="absolute inset-0 bg-black/20" />
      {/* smaller vertical padding */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-10 text-center md:py-14">
        <h2 className="text-[1.25rem] md:text-[1.7rem] lg:text-[1.9rem] font-semibold tracking-[0.32em] uppercase text-white">
          BECOME A GLOBAL CITIZEN®
        </h2>

        <div className="mt-5 space-y-1 text-white">
          <p className="text-[0.9rem] md:text-[1.02rem] lg:text-[1.08rem] font-serif italic leading-relaxed">
            Discover the power of a second citizenship.
          </p>
          <p className="text-[0.9rem] md:text-[1.02rem] lg:text-[1.08rem] font-serif italic leading-relaxed">
            Live the life you were destined to live.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*          HIGH NET WORTH / CERTIFIED PARTNERS / GOVERNMENT AGENCIES         */
/* -------------------------------------------------------------------------- */

function AudienceStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pb-20 md:pt-12">
        {/* thin top line like in the screenshot */}
        <div className="mb-10 h-px w-full bg-slate-200" />

        <div className="grid gap-12 md:grid-cols-3 md:gap-14">
          {/* HIGH NET WORTH INVESTORS */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-[0.95rem] md:text-[1.05rem] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              HIGH NET WORTH INVESTORS
            </h3>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-slate-500">
              Arton empowers high net worth individuals and families to become
              global citizens by investing in a second residence or citizenship
              and helps transform their dreams into reality through highly
              personalized products and services.
            </p>

            <small className="mt-6 block text-[0.9rem] text-[#c7833a]">
              <Link
                href="/high-net-worth-investors"
                className="inline-block space-y-0.5"
              >
                <span className="block italic">Become a Global Citizen.</span>
                <span className="block italic">Realize your potential.</span>
              </Link>
            </small>
          </div>

          {/* CERTIFIED PARTNERS */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-[0.95rem] md:text-[1.05rem] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              CERTIFIED PARTNERS
            </h3>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-slate-500">
              Arton endows its Certified Partner network with tools, services
              and training to deliver the best possible experience to clients
              seeking to invest in second residence or citizenship. Arton&apos;s
              partners are able to advise clients on virtually any matter in any
              jurisdiction around the world.
            </p>

            <small className="mt-6 block text-[0.9rem] text-[#c7833a]">
              <Link
                href="/certified-partners"
                className="inline-block space-y-0.5"
              >
                <span className="block italic">
                  Become a Certified Partner.
                </span>
                <span className="block italic">Discover the benefits.</span>
              </Link>
            </small>
          </div>

          {/* GOVERNMENT AGENCIES */}
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-[0.95rem] md:text-[1.05rem] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              GOVERNMENT AGENCIES
            </h3>
            <p className="mt-5 text-[0.9rem] leading-relaxed text-slate-500">
              Arton enables government agencies as trusted partners in
              designing, developing, implementing and running investor programs
              for residence and citizenship to help boost foreign investments in
              their countries.
            </p>

            <small className="mt-6 block text-[0.9rem] text-[#c7833a]">
              <Link
                href="/government-agencies"
                className="inline-block space-y-0.5"
              >
                <span className="block italic">
                  Become a Sovereign Partner.
                </span>
                <span className="block italic">
                  Boost your country’s foreign investments.
                </span>
              </Link>
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*           Global Citizen Programs tile: internal hover mini-slider          */
/* -------------------------------------------------------------------------- */

type Program = {
  icon: string;
  name: string;
  subtitle: string;
  href: string;
};

const PROGRAMS: Program[] = [
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2025/10/arton-icons-sao-100x100.png",
    name: "São Tomé and Príncipe",
    subtitle: "Citizenship by Investment Program",
    href: "https://artoncapitals.com/global-citizen-programs/sao-tome-principe-citizenship-by-investment/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-antigua-icon.png",
    name: "Antigua & Barbuda",
    subtitle: "Citizenship by Investment Program",
    href: "https://artoncapitals.com/global-citizen-programs/antigua-and-barbuda/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-dominica-icon.png",
    name: "Dominica",
    subtitle: "Economic Citizenship Program",
    href: "https://artoncapitals.com/global-citizen-programs/dominica/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2025/10/arton-icons-greece.png",
    name: "Greece",
    subtitle: "Golden Visa Program",
    href: "https://artoncapitals.com/global-citizen-programs/greece-golden-visa-program/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-grenada-icon.png",
    name: "Grenada",
    subtitle: "Citizenship by Investment Program",
    href: "https://artoncapitals.com/global-citizen-programs/grenada/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/10/PC-hungary-icon.png",
    name: "Hungary",
    subtitle: "Investor Residence Program",
    href: "https://artoncapitals.com/global-citizen-programs/hungary/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2025/06/PC-latvia-icon.png",
    name: "Latvia",
    subtitle: "Residency by Investment Program",
    href: "https://artoncapitals.com/global-citizen-programs/latvia/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2025/01/PC-malta-icon.png",
    name: "Malta",
    subtitle: "Permanent Residency by Investment",
    href: "https://artoncapitals.com/global-citizen-programs/malta/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2016/06/PT-100x100.png",
    name: "Portugal",
    subtitle: "Golden Residence Permit",
    href: "https://artoncapitals.com/global-citizen-programs/portugal/",
  },
  {
    icon:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/PC_Saint_Lucia_icon-100x100.png",
    name: "Saint Lucia",
    subtitle: "",
    href: "https://artoncapitals.com/global-citizen-programs/saint-lucia/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-stKitts-icon.png",
    name: "St. Kitts & Nevis",
    subtitle: "Citizenship by Investment Program",
    href: "https://artoncapitals.com/global-citizen-programs/st-kitts-nevis/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2025/06/PC-spain-icon.png",
    name: "Spain",
    subtitle: "Residency Program",
    href: "https://artoncapitals.com/global-citizen-programs/spain/",
  },
  {
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-USA-icon.png",
    name: "USA EB-5",
    subtitle: "Immigrant Investor Program",
    href: "https://artoncapitals.com/global-citizen-programs/usa-eb-5/",
  },
];

function GlobalProgramsTile() {
  const [index, setIndex] = useState(0);
  const current = PROGRAMS[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? PROGRAMS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === PROGRAMS.length - 1 ? 0 : i + 1));

  return (
    <div className="portfolio-item less-padding">
      <div className="relative group h-[260px] md:h-[340px] lg:h-[380px] overflow-hidden bg-black">
        {/* Background image */}
        <img
          src="https://www.artoncapital.com/wp-content/uploads/2013/12/Global-Citizen-Programs.jpg"
          alt="Global Citizen Programs"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Default bottom bar (hidden on hover) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/75 py-4 text-center transition-opacity duration-300 group-hover:opacity-0">
          <span className="px-4 text-[0.9rem] font-semibold tracking-[0.18em] text-white md:text-[1.05rem]">
            GLOBAL CITIZEN PROGRAMS
          </span>
        </div>

        {/* Hover overlay with mini-slider */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex w-full max-w-xs items-center justify-between gap-3 px-4">
            {/* Left arrow */}
            <button
              type="button"
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Current program */}
            <div className="flex-1 text-center text-white">
              {current.icon && (
                <img
                  src={current.icon}
                  alt={current.name}
                  className="mx-auto mb-2 h-12 w-12 rounded-full bg-white/5 object-contain p-1"
                />
              )}
              <h3 className="text-[0.9rem] font-semibold uppercase tracking-[0.16em]">
                <Link href={current.href} className="hover:underline">
                  {current.name}
                </Link>
              </h3>
              {current.subtitle && (
                <p className="mt-1 text-[0.75rem] text-neutral-200">
                  {current.subtitle}
                </p>
              )}
              <Link
                href={current.href}
                className="mt-3 inline-block text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#f4b26a] hover:text-[#ffd19a]"
              >
                Discover More
              </Link>
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white/80 hover:border-white hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*             Three tiles row: Programs / Forum / Above + Beyond             */
/* -------------------------------------------------------------------------- */

function GlobalExperiencesRow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left: Global Citizen Programs with internal slider */}
          <div className="one-third column home-middle-block">
            <GlobalProgramsTile />
          </div>

          {/* Middle: Global Citizen Forum */}
          <div className="one-third column custom-users home-slides-middle">
            <div className="portfolio-item less-padding">
              <div className="image relative h-[260px] md:h-[340px] lg:h-[380px] overflow-hidden">
                <img
                  src="https://www.artoncapital.com/wp-content/uploads/2013/12/Global-Citizen-Forum.jpg"
                  alt="GLOBAL CITIZEN FORUM"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 py-4 text-center">
                  <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.18em] text-white md:text-[1.05rem]">
                    <Link
                      href="https://www.globalcitizenforum.org"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      GLOBAL CITIZEN FORUM
                    </Link>
                  </h2>
                  <span className="mt-1 inline-block h-px w-10 bg-white/70" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Above+Beyond */}
          <div className="one-third column custom-users home-slides-middle">
            <div className="portfolio-item less-padding">
              <div className="image relative h-[260px] md:h-[340px] lg:h-[380px] overflow-hidden">
                <img
                  src="https://www.artoncapital.com/wp-content/uploads/2023/04/Arton-Air-AboveBeyond.png"
                  alt="Above+Beyond"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/75 py-4 text-center">
                  <h2 className="text-[0.9rem] font-semibold uppercase tracking-[0.18em] text-white md:text-[1.05rem]">
                    <Link
                      href="https://artoncapitals.com/industry-news/artonair-takes-flight-the-future-of-global-citizenship-and-seamless-travel/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      ABOVE+BEYOND
                    </Link>
                  </h2>
                  <span className="mt-1 inline-block h-px w-10 bg-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Video strip (3 videos)                          */
/* -------------------------------------------------------------------------- */

type VideoItem = {
  id: string;
  thumbnail: string;
  alt: string;
  videoUrl: string;
  label: string;
};

const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "youtube1",
    thumbnail:
      "https://www.artoncapital.com/wp-content/uploads/2017/10/AC-Video-Cover.jpg",
    alt: "Arton Capital Video introduction",
    videoUrl:
      "https://www.youtube-nocookie.com/embed/3OctYEin2O0?rel=0&showinfo=0&autoplay=1",
    label: "Click to watch Arton Capital Video introduction",
  },
  {
    id: "youtube2",
    thumbnail:
      "https://www.artoncapital.com/wp-content/uploads/2022/02/Global-Citizen-Forum-2021-01.jpg",
    alt: "Global Citizen Forum",
    videoUrl:
      "https://www.youtube-nocookie.com/embed/kxr1v9LG8z0?rel=0&showinfo=0&autoplay=1",
    label: "Click to watch video from Global Citizen Forum",
  },
  {
    id: "youtube3",
    thumbnail:
      "https://www.artoncapital.com/wp-content/uploads/2020/03/video_cover_AC_4.png",
    alt: "Arton Capital Video The Big Picture",
    videoUrl:
      "https://www.youtube.com/embed/1kFbTNnfOFU?rel=0&showinfo=0&autoplay=1",
    label: "Click to watch video 'The Big Picture'",
  },
];

function VideoTile({ item }: { item: VideoItem }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="one-third column custom-users home-slides-middle">
      <div className="portfolio-item less-padding youtube-video">
        <div
          className="image videoWrapperHome relative overflow-hidden rounded-sm bg-black"
          id={item.id}
        >
          <div className="relative h-0 pb-[56.25%]">
            {!playing ? (
              <>
                <img
                  alt={item.alt}
                  src={item.thumbnail}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <button
                  type="button"
                  aria-label={item.label}
                  title={item.label}
                  onClick={() => setPlaying(true)}
                  className="video-play-button absolute inset-0 flex items-center justify-center"
                >
                  <div className="el__video__play-button h-20 w-20 rounded-full border-4 border-white/80 bg-black/40 backdrop-blur-sm transition hover:bg-black/70" />
                </button>
              </>
            ) : (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={item.videoUrl}
                title={item.alt}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoRow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* top separator (sep20) */}
        <div className="my-10 h-px w-full bg-slate-200" aria-hidden="true" />
        <div className="grid gap-6 md:grid-cols-3">
          {VIDEO_ITEMS.map((item) => (
            <VideoTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Magazine strip (6 latest issues)                     */
/* -------------------------------------------------------------------------- */

type MagazineIssue = {
  id: string;
  cover: string;
  alt: string;
  label: string;
  href: string;
};

const MAGAZINE_ISSUES: MagazineIssue[] = [
  {
    id: "issue-76",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/GCM-issue-76.jpg",
    alt: "Global Citizen Magazine Issue 76",
    label: "Issue 76",
    href:
      "https://issuu.com/global-citizen/docs/global_citizen_76_6ed2f3c103ade9",
  },
  {
    id: "issue-75",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2025/06/GCM-issue-75.jpg",
    alt: "Global Citizen Magazine Issue 75",
    label: "Issue 75",
    href: "https://issuu.com/global-citizen/docs/global_citizen_75",
  },
  {
    id: "issue-74",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2025/04/gcm-74_cover.jpg",
    alt: "Global Citizen Magazine Issue 74",
    label: "Issue 74",
    href: "https://issuu.com/global-citizen/docs/global_citizen_74",
  },
  {
    id: "fe-2024",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2024/12/GCM-issue-forum2024.jpg",
    alt: "Global Citizen Magazine FE 2024",
    label: "FE 2024",
    href:
      "https://issuu.com/global-citizen/docs/gc_forum_edition_digital_file",
  },
  {
    id: "issue-72",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2025/04/gcm-72_cover.jpg",
    alt: "Global Citizen Magazine Issue 72",
    label: "Issue 72",
    href: "https://issuu.com/global-citizen/docs/global_citizen_72_",
  },
  {
    id: "issue-71",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2024/11/GCM-issue-71.jpg",
    alt: "Global Citizen Magazine Issue 71",
    label: "Issue 71",
    href: "https://issuu.com/global-citizen/docs/global_citizen_71_",
  },
];

function MagazineRow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        {/* separator (sep20) */}
        <div className="my-10 h-px w-full bg-slate-200" aria-hidden="true" />

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {MAGAZINE_ISSUES.map((issue) => (
            <div
              key={issue.id}
              className="one-sixth column custom-gcmagazin home-slides-middle"
            >
              <div className="gcmagazin-item less-padding portfolio-item">
                <div className="image relative h-[240px] overflow-hidden bg-black">
                  <img
                    src={issue.cover}
                    alt={issue.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                  <div className="text programblock-text absolute inset-x-0 bottom-0 bg-black/70 py-2 text-center">
                    <div className="inner">
                      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        <Link
                          href={issue.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline"
                        >
                          {issue.label}
                        </Link>
                      </h2>
                      <span className="mt-1 inline-block h-px w-8 bg-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        Contact bubble (call / email / wa)                  */
/* -------------------------------------------------------------------------- */

function ContactWidget() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleCallClick = () => {
    if (!open) {
      // first click just opens the other icons (same idea as original script)
      setOpen(true);
    } else {
      // second click actually triggers the call
      window.location.href = "tel:+13436414504";
    }
  };

  return (
    <div
      ref={containerRef}
      className="contact-container fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* when open, show email + whatsapp above the main icon */}
      {open && (
        <>
          <a
            href="https://artoncapitals.com/contact-us/"
            title="Email"
            className="contact-icon flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            <Mail className="h-5 w-5" />
          </a>

          <a
            href="https://artoncapitals.com/contact-us/"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp"
            className="contact-icon flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#33df73]"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </>
      )}

      {/* main golden call bubble */}
      <button
        type="button"
        onClick={handleCallClick}
        title="Call us"
        className="contact-icon main-icon flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a163] text-white shadow-xl transition hover:bg-[#e4af71]"
      >
        <Phone className="h-7 w-7" />
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Home page                                 */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <main className="bg-slate-50">
      {/* Full-width top slider */}
      <HeroSlider />

      {/* Industry news slider (right under hero, Arton-style) */}
      <NewsSlider />

      {/* White spacer between news & global citizen strip */}
      <div className="h-6 w-full bg-white" aria-hidden="true" />

      {/* Become a Global Citizen strip */}
      <GlobalCitizenSection />

      {/* HIGH NET WORTH / CERTIFIED PARTNERS / GOVERNMENTS */}
      <AudienceStrip />

      {/* Programs / Forum / Above+Beyond */}
      <GlobalExperiencesRow />

      {/* 3 home videos */}
      <VideoRow />

      {/* Global Citizen Magazine issues */}
      <MagazineRow />

      {/* Floating contact bubble (call / email / WhatsApp) */}
      <ContactWidget />
    </main>
  );
}
