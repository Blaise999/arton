// pages/program-overview.tsx
import Head from "next/head";

type Pillar = {
  title: string;
  description: string;
  bg: string;
  icon: string;
};

type ProgramCard = {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
};

const pillars: Pillar[] = [
  {
    title: "Cost",
    description: "The investment you are willing to make.",
    bg: "hsl(26, 59%, 76%)",
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/08/PO-icon-cost.png",
  },
  {
    title: "Speed",
    description: "Time to citizenship, which includes time to residency.",
    bg: "rgb(192, 193, 195)",
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/08/PO-speed-icon.png",
  },
  {
    title: "Mobility",
    description:
      "The number of countries you may visit visa-free or visa-on-arrival.",
    bg: "rgb(218, 156, 95)",
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/08/PO-mobility-icon.png",
  },
  {
    title: "Quality of Life",
    description: "Based on the Quality of Life Index.",
    bg: "rgb(61, 61, 61)",
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/08/PO-quality-icon.png",
  },
  {
    title: "Simplicity",
    description: "Some programs are simpler than others.",
    bg: "rgb(132, 132, 134)",
    icon: "https://www.artoncapital.com/wp-content/uploads/2013/08/PO-simplicity-icon.png",
  },
];

const programCards: ProgramCard[] = [
  {
    title: "Antigua & Barbuda",
    href:
      "https://www.artonscapitalholdings.com/global-citizen-programs/antigua-and-barbuda/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Antigua-Barbuda.png",
    imgAlt: "Citizenship by Investment Program for Antigua & Barbuda",
  },
  {
    title: "Quebec, Canada",
    href:
      "https://www.artonscapitalholdings.com/global-citizen-programs/canada-quebec/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Canada-cover.jpg",
    imgAlt: "Citizenship by Investment Program for Quebec, Canada",
  },
  {
    title: "Dominica",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/dominica/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Dominica.png",
    imgAlt: "Citizenship by Investment Program for Dominica",
  },
  {
    title: "Greece",
    href:
      "https://www.artonscapitalholdings.com/global-citizen-programs/greece-golden-visa-program/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2023/03/Arton-Greece-Brochure-Cover.jpg",
    imgAlt: "Citizenship by Investment Program for Greece",
  },
  {
    title: "Grenada",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/grenada/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Grenada.png",
    imgAlt: "Citizenship by Investment Program for Grenada",
  },
  {
    title: "Spain",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/spain/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Spain-brochure-cover.jpg",
    imgAlt: "Citizenship by Investment Program for Spain",
  },
  {
    title: "Hungary",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/hungary/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2023/04/Arton_Brochure_Hungary_cover.jpg",
    imgAlt: "Citizenship by Investment Program for Hungary",
  },
  {
    title: "Latvia",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/latvia/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Latvia-cover.jpg",
    imgAlt: "Citizenship by Investment Program for Latvia",
  },
  {
    title: "Malta",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/malta/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2025/01/Arton_Brochure_Malta_RCBI-2025-01-P1-2.jpg",
    imgAlt: "Citizenship by Investment Program for Malta",
  },
  {
    title: "Portugal",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/portugal/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2016/06/Arton_Brochure_Portugal_cover.jpg",
    imgAlt: "Citizenship by Investment Program for Portugal",
  },
  {
    title: "Saint Lucia",
    href:
      "https://www.artonscapitalholdings.com/global-citizen-programs/saint-lucia/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/Arton_Saint-Lucia.png",
    imgAlt: "Citizenship by Investment Program for Saint Lucia",
  },
  {
    title: "St. Kitts & Nevis",
    href:
      "https://www.artonscapitalholdings.com/global-citizen-programs/st-kitts-nevis/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-StKitts.png",
    imgAlt: "Citizenship by Investment Program for St. Kitts & Nevis",
  },
];

export default function ProgramOverviewPage() {
  return (
    <>
      <Head>
        <title>Program Overview – Global Citizen Programs</title>
        <meta
          name="description"
          content="Review available options, obtain personalized advice, and evaluate global citizenship programs based on cost, speed, mobility, quality of life, and simplicity."
        />
        <link
          rel="canonical"
          href="https://www.artonscapitalholdings.com/program-overview"
        />
      </Head>

      <main className="bg-white text-slate-900">
        {/* HERO – centered text, yellow italic subtitle */}
        <section className="relative">
          <div className="relative">
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg"
              alt="Global Citizen Programs"
              className="w-full h-auto object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* text overlay (centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4">
                <h1 className="text-center text-3xl font-semibold tracking-[0.25em] text-white md:text-4xl">
                  GLOBAL CITIZEN PROGRAMS
                </h1>
                <p
                  className="mt-3 max-w-xl text-center text-sm italic md:text-base"
                  style={{ color: "#ffd966" }} // soft yellow, locked in
                >
                  Review available options. Obtain personalized advice. Make the
                  right choice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT WRAPPER */}
        <section className="bg-[#f7f5f2]">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 text-[15px] leading-relaxed">
            {/* JOIN THE GLOBAL CITIZEN COMMUNITY + PROGRAM EVALUATION */}
            <div className="mb-10 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-center text-xl font-semibold text-[#565656]">
                  JOIN THE GLOBAL CITIZEN COMMUNITY
                </h2>
                <p className="text-center text-sm italic text-[#808080]">
                  Members of the Global Citizen community are entitled to a
                  supreme level of choice in terms of mobility, standard of
                  living, education, locations for investment and business
                  operations, and much more. We create the safe path to this
                  freedom of choice, first and foremost, through our Global
                  Citizen programs, products and services that offer a unique
                  set of benefits and privileges.
                </p>
              </div>
              <div>
                <h2 className="mb-3 text-center text-xl font-semibold text-[#565656]">
                  PROGRAM EVALUATION
                </h2>
                <p className="text-center text-sm italic text-[#808080]">
                  Each Global Citizen program offers a host of unique benefits.
                  We have distilled these benefits into five key pillars. These
                  are the benchmarks against which each program can be evaluated
                  based on particular needs and goals. Applicants can compare
                  them against one another to find the right fit.
                </p>
              </div>
            </div>

            {/* FIVE PILLARS */}
            <div className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.25em] text-[#565656]">
              THE FIVE PROGRAM PILLARS ARE
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group overflow-hidden rounded-md text-center shadow-sm"
                  style={{ backgroundColor: pillar.bg }}
                >
                  <div className="flex h-full flex-col items-center justify-between px-4 py-6">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#3b3b3b]">
                      {pillar.title}
                    </h3>
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="mb-3 h-12 w-12"
                    />
                    <p className="text-xs text-[#3b3b3b]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DISCOVER OUR PROGRAMS STRIP */}
            <div className="mt-8 rounded-md bg-[#3d3d3d] px-4 py-4 text-sm text-white">
              <p>
                Discover our programs:{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/antigua-and-barbuda/"
                  className="underline"
                >
                  Antigua and Barbuda
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/dominica/"
                  className="underline"
                >
                  Dominica
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/greece/"
                  className="underline"
                >
                  Greece
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/grenada/"
                  className="underline"
                >
                  Grenada
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/hungary/"
                  className="underline"
                >
                  Hungary
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/portugal/"
                  className="underline"
                >
                  Portugal
                </a>
                ,{" "}
                <a
                  href="https://www.artonscapitalholdings.com/global-citizen-programs/st-kitts-nevis/"
                  className="underline"
                >
                  St. Kitts and Nevis
                </a>{" "}
                and more to come.
              </p>
            </div>

            {/* PROGRAM GRID */}
            <div className="mt-10">
              <div className="mb-4 text-center text-[13px] font-semibold uppercase tracking-[0.25em] text-[#565656]">
                FEATURED PROGRAMS
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {programCards.map((program) => (
                  <a
                    key={program.title}
                    href={program.href}
                    className="group relative block overflow-hidden rounded-md bg-white shadow-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={program.imgSrc}
                      alt={program.imgAlt}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="border border-white/70 px-4 py-1">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                          Discover Today
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 bg-white px-3 py-3">
                      <p className="text-center text-[13px] font-semibold text-[#565656]">
                        {program.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
