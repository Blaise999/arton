// app/tools/arton-index/page.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";

type PillarKey = "cost" | "speed" | "mobility" | "life" | "simplicity";

type PillarScores = Record<PillarKey, number>;

type CountryChange = "up" | "down" | "same";

interface Country {
  code: string;
  name: string;
  shortLabel: string;
  description: string;
  scores: PillarScores;
  change: CountryChange;
  flagSrc: string;
  flagAlt: string;
}

const PILLAR_META: Record<
  PillarKey,
  { label: string; weight: number; color: string }
> = {
  cost: {
    label: "Cost",
    weight: 30,
    color: "#E6BD9D",
  },
  speed: {
    label: "Speed",
    weight: 20,
    color: "#C0C1C3",
  },
  mobility: {
    label: "Global mobility",
    weight: 20,
    color: "#DA9C5F",
  },
  life: {
    label: "Quality of life",
    weight: 10,
    color: "#848486",
  },
  simplicity: {
    label: "Simplicity",
    weight: 20,
    color: "#3D3D3D",
  },
};

const COUNTRIES: Country[] = [
  {
    code: "AG",
    name: "Antigua & Barbuda",
    shortLabel: "Antigua & Barbuda",
    description:
      "The program ranks first among the Caribbean group and is among the top performers overall. It gets the highest score for Speed and relatively high marks for Simplicity, with the strongest mobility among Caribbean peers.",
    scores: {
      cost: 75,
      speed: 90,
      mobility: 80,
      life: 60,
      simplicity: 88,
    },
    change: "up",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-antigua-icon.png",
    flagAlt: "flag of Antigua & Barbuda",
  },
  {
    code: "BG",
    name: "Bulgaria",
    shortLabel: "Bulgaria",
    description:
      "Bulgaria ranks among the most attractive programs. Its residence-to-citizenship option scores high marks on Cost and Simplicity. Speed is moderate in the regular track but greatly improved by the fast-track option introduced in 2013.",
    scores: {
      cost: 80,
      speed: 65,
      mobility: 80,
      life: 75,
      simplicity: 85,
    },
    change: "down",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2014/07/PC-bulgaria-icon.png",
    flagAlt: "flag of Bulgaria",
  },
  {
    code: "CA",
    name: "Quebec, Canada",
    shortLabel: "Quebec, Canada",
    description:
      "Quebec scores high mainly thanks to excellent quality of life and increased global mobility. It remains one of the most desirable migration destinations for investors and their families.",
    scores: {
      cost: 65,
      speed: 50,
      mobility: 90,
      life: 95,
      simplicity: 60,
    },
    change: "up",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/10/PC-canada-icon.png",
    flagAlt: "flag of Quebec",
  },
  {
    code: "CY",
    name: "Cyprus",
    shortLabel: "Cyprus",
    description:
      "The Cyprus Investment Programme allows qualified investors to obtain citizenship approval in just a few months, making it one of the fastest European programs, with very strong mobility.",
    scores: {
      cost: 30,
      speed: 95,
      mobility: 90,
      life: 85,
      simplicity: 70,
    },
    change: "down",
    flagSrc: "https://www.artoncapital.com/wp-content/uploads/2014/02/Cyprus.png",
    flagAlt: "flag of Cyprus",
  },
  {
    code: "DM",
    name: "Dominica",
    shortLabel: "Dominica",
    description:
      "Dominica is a top-scorer in Simplicity and cost-effectiveness among the Caribbean programs. It has lower mobility than some peers but remains one of the most competitive options in terms of total outlay.",
    scores: {
      cost: 90,
      speed: 85,
      mobility: 60,
      life: 55,
      simplicity: 95,
    },
    change: "up",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-dominica-icon.png",
    flagAlt: "flag of Dominica",
  },
  {
    code: "GD",
    name: "Grenada",
    shortLabel: "Grenada",
    description:
      "Grenada’s score is balanced thanks to excellent Speed and Simplicity. Real estate options are competitively priced and attract a growing number of investors, though Global Mobility remains mid-range compared to some peers.",
    scores: {
      cost: 80,
      speed: 90,
      mobility: 65,
      life: 60,
      simplicity: 90,
    },
    change: "up",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-grenada-icon.png",
    flagAlt: "flag of Grenada",
  },
  {
    code: "MT",
    name: "Malta",
    shortLabel: "Malta",
    description:
      "Malta ranks among the global top performers, excelling in Global Mobility and Quality of Life. While investment thresholds are higher, its citizenship route is renowned for prestige, robust due diligence and a streamlined process.",
    scores: {
      cost: 60,
      speed: 75,
      mobility: 95,
      life: 95,
      simplicity: 90,
    },
    change: "down",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2025/01/PC-malta-icon.png",
    flagAlt: "flag of Malta",
  },
  {
    code: "ME",
    name: "Montenegro",
    shortLabel: "Montenegro",
    description:
      "Montenegro gains investor attention due to its strategic position and growing economy. It earns points for simplicity and speed, with improving quality of life as the country integrates more closely with the EU.",
    scores: {
      cost: 70,
      speed: 85,
      mobility: 75,
      life: 70,
      simplicity: 85,
    },
    change: "down",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2018/07/arton-icons-montenegro.png",
    flagAlt: "flag of Montenegro",
  },
  {
    code: "PT",
    name: "Portugal",
    shortLabel: "Portugal",
    description:
      "Portugal’s program combines strong global mobility with excellent quality of life. It offers a balanced proposition for investors seeking EU residence with a clear path to citizenship over time.",
    scores: {
      cost: 70,
      speed: 60,
      mobility: 85,
      life: 90,
      simplicity: 65,
    },
    change: "up",
    flagSrc: "https://www.artoncapital.com/wp-content/uploads/2016/06/PT.png",
    flagAlt: "flag of Portugal",
  },
  {
    code: "LC",
    name: "Saint Lucia",
    shortLabel: "Saint Lucia",
    description:
      "Saint Lucia offers a modern, well-structured citizenship by investment program. It draws on regional best practices, providing competitive costs, solid mobility and a straightforward process.",
    scores: {
      cost: 85,
      speed: 80,
      mobility: 70,
      life: 60,
      simplicity: 85,
    },
    change: "up",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/PC_Saint_Lucia_icon.png",
    flagAlt: "flag of Saint Lucia",
  },
  {
    code: "KN",
    name: "St. Kitts & Nevis",
    shortLabel: "St. Kitts & Nevis",
    description:
      "St. Kitts & Nevis has one of the most established programs in the industry. It scores particularly well on simplicity, backed by decades of market experience.",
    scores: {
      cost: 80,
      speed: 80,
      mobility: 75,
      life: 65,
      simplicity: 90,
    },
    change: "down",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-stKitts-icon.png",
    flagAlt: "flag of St. Kitts & Nevis",
  },
  {
    code: "GB",
    name: "United Kingdom",
    shortLabel: "UK",
    description:
      "The U.K. enjoys high scores in Global Mobility and Quality of Life, but these are offset by higher cost, longer timelines and more demanding physical residence requirements.",
    scores: {
      cost: 40,
      speed: 35,
      mobility: 95,
      life: 90,
      simplicity: 30,
    },
    change: "up",
    flagSrc: "https://www.artoncapital.com/wp-content/uploads/2013/09/UK-icon.png",
    flagAlt: "flag of UK",
  },
  {
    code: "US",
    name: "United States of America",
    shortLabel: "USA",
    description:
      "The U.S. ranks highly for mobility and quality of life, making it a powerful destination for investors. Longer processes and added complexity weigh on cost, speed and simplicity.",
    scores: {
      cost: 45,
      speed: 40,
      mobility: 95,
      life: 95,
      simplicity: 35,
    },
    change: "down",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-USA-icon.png",
    flagAlt: "flag of USA",
  },
];

function computeIndex(scores: PillarScores): number {
  const cost = scores.cost;
  const speed = scores.speed;
  const mobility = scores.mobility;
  const life = scores.life;
  const simplicity = scores.simplicity;

  const value =
    cost * 0.3 +
    speed * 0.2 +
    mobility * 0.2 +
    life * 0.1 +
    simplicity * 0.2;

  return Math.round(value);
}

function changeIcon(change: CountryChange): string {
  if (change === "up") return "▲";
  if (change === "down") return "▼";
  return "–";
}

interface RadialChartProps {
  scores: PillarScores;
  countryName: string;
  indexScore: number;
}

function RadialPillarsChart({
  scores,
  countryName,
  indexScore,
}: RadialChartProps) {
  const size = 320;
  const center = size / 2;
  const strokeWidth = 18;

  const ringOrder: PillarKey[] = [
    "simplicity",
    "life",
    "mobility",
    "speed",
    "cost",
  ];

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-md mx-auto drop-shadow-sm"
    >
      {ringOrder.map((key, idx) => {
        const meta = PILLAR_META[key];
        const value = scores[key];
        const radius = 140 - idx * (strokeWidth + 6);
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - value / 100);

        return (
          <g key={key}>
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="#E9E9E9"
              strokeWidth={strokeWidth}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={meta.color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${center} ${center})`}
            />
          </g>
        );
      })}

      {/* Index score in the middle */}
      <text
        x={center}
        y={center - 4}
        textAnchor="middle"
        style={{ fontSize: 32, fontWeight: 700, fill: "#333333" }}
      >
        {indexScore}
      </text>
      <text
        x={center}
        y={center + 16}
        textAnchor="middle"
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fill: "#777777",
        }}
      >
        Arton Index score
      </text>
      <text
        x={center}
        y={center + 34}
        textAnchor="middle"
        style={{ fontSize: 11, fill: "#999999" }}
      >
        {countryName}
      </text>
    </svg>
  );
}

interface PillarCardProps {
  title: string;
  caption: string;
  bg: string;
  icon: string;
}

function PillarCard({ title, caption, bg, icon }: PillarCardProps) {
  return (
    <div
      className="rounded-lg shadow-sm border border-[#e5e3df] overflow-hidden text-white flex flex-col justify-between"
      style={{ backgroundColor: bg }}
    >
      <div className="p-4 flex-1 flex flex-col items-center text-center gap-3">
        <h3 className="uppercase tracking-[0.2em] text-xs font-semibold">
          {title}
        </h3>
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        <p className="text-[0.75rem] leading-relaxed opacity-90">{caption}</p>
      </div>
    </div>
  );
}

interface ToolCardProps {
  title: string;
  href: string;
  description: string;
}

function ToolCard({ title, href, description }: ToolCardProps) {
  return (
    <div className="bg-white border border-[#e2e0de] rounded-lg shadow-sm p-5 text-center flex flex-col items-center gap-3">
      <Link
        href={href}
        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#cc9966] text-white text-xs font-semibold tracking-[0.18em] uppercase"
      >
        {title}
      </Link>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ArtonIndexClient() {
  const [selectedCode, setSelectedCode] = useState<string>("DM");

  // Read ?country=... from the URL on the client only
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const candidate = params.get("country")?.toUpperCase();
    if (candidate && COUNTRIES.some((c) => c.code === candidate)) {
      setSelectedCode(candidate);
    }
  }, []);

  const handleSelectCountry = (code: string) => {
    setSelectedCode(code);

    // Keep URL in sync with selection (client only)
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("country", code);
      window.history.replaceState(null, "", url.toString());
    }
  };

  const selectedCountry = useMemo(
    () => COUNTRIES.find((c) => c.code === selectedCode) ?? COUNTRIES[0],
    [selectedCode]
  );

  const selectedIndex = computeIndex(selectedCountry.scores);

  return (
    <main className="bg-[#f6f5f3] text-[#333333]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#22252b] via-[#252932] to-[#2d3038] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs tracking-[0.22em] uppercase text-white/70 mb-2">
            Tools
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Arton <span className="font-bold">Index</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl">
            Industry benchmark of Global Citizen Programs.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
            <Link
              href="/tools/arton-index"
              className="px-4 py-2 rounded-full bg-[#cc9966] text-white font-medium shadow-sm"
            >
              Arton Index
            </Link>
            <Link
              href="/tools/program-check"
              className="px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Program Check
            </Link>
            <Link
              href="/tools/program-cost"
              className="px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Program Cost
            </Link>
            <Link
              href="/tools/program-map"
              className="px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Program Map
            </Link>
            <Link
              href="/tools/program-match"
              className="px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition"
            >
              Program Match
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-[#565656] mb-3">
              WHY BENCHMARKING IS IMPORTANT
            </h2>
            <p className="text-sm text-[#808080] italic leading-relaxed">
              At Arton we are in constant contact with high net worth
              individuals, and we are privileged to see how their needs and
              considerations evolve. These relationships help us streamline and
              focus on what is important to our clients. It is a challenge to
              simplify complexity, but this is what we excel at. We empower our
              clients to find the right fit with ease. Now you have all the
              tools in your hands.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-wide text-[#565656] mb-3">
              COMPOSITE INDEX
            </h2>
            <p className="text-sm text-[#808080] italic leading-relaxed">
              Although mobility remains important, it is no longer the only
              driver for a second residence or citizenship. Each Global Citizen
              program offers a unique set of benefits. We have distilled these
              benefits into five key pillars – the benchmarks against which you
              can evaluate each program based on your needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Five pillars */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#777] mb-4">
          THE FIVE PILLARS OF THE ARTON INDEX
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <PillarCard
            title="cost"
            caption="The investment you are willing to make."
            bg="#f1caa1"
            icon="https://www.artoncapital.com/wp-content/uploads/2013/08/PO-icon-cost.png"
          />
          <PillarCard
            title="speed"
            caption="Time to citizenship, including time to residence."
            bg="#c0c1c3"
            icon="https://www.artoncapital.com/wp-content/uploads/2013/08/PO-speed-icon.png"
          />
          <PillarCard
            title="mobility"
            caption="Number of countries you may visit visa-free or visa-on-arrival."
            bg="#da9c5f"
            icon="https://www.artoncapital.com/wp-content/uploads/2013/08/PO-mobility-icon.png"
          />
          <PillarCard
            title="quality of life"
            caption="Based on external Quality of Life indices."
            bg="#848486"
            icon="https://www.artoncapital.com/wp-content/uploads/2013/08/PO-quality-icon.png"
          />
          <PillarCard
            title="simplicity"
            caption="Some programs are simpler and more straightforward than others."
            bg="#3d3d3d"
            icon="https://www.artoncapital.com/wp-content/uploads/2013/08/PO-simplicity-icon.png"
          />
        </div>
      </section>

      {/* Selector + chart */}
      <section className="bg-white/80 border-y border-[#e2e0de]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            2023 Arton Index scores are:
          </h2>

          {/* Country selector */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm mb-6">
            {COUNTRIES.map((c, idx) => (
              <div key={c.code} className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleSelectCountry(c.code)}
                  className={`px-2 md:px-3 py-1 rounded-full transition ${
                    selectedCode === c.code
                      ? "bg-[#cc9966] text-white font-semibold"
                      : "text-[#555] hover:bg-[#f2ece4]"
                  }`}
                >
                  {c.shortLabel}
                </button>
                {idx < COUNTRIES.length - 1 && (
                  <span className="mx-1 text-[#aaa]">|</span>
                )}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 items-center">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm border border-[#e3e1de] p-5 text-sm leading-relaxed">
              <h3 className="font-semibold text-base mb-2">
                {selectedCountry.name}
              </h3>
              <p className="text-[#555] mb-4">{selectedCountry.description}</p>
              <p className="text-xs text-[#999]">
                Arton Index score:{" "}
                <span className="font-semibold text-[#333]">
                  {selectedIndex}
                </span>
              </p>
            </div>

            {/* Chart */}
            <div>
              <RadialPillarsChart
                scores={selectedCountry.scores}
                countryName={selectedCountry.shortLabel}
                indexScore={selectedIndex}
              />
              <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs">
                {(
                  Object.keys(PILLAR_META) as Array<keyof typeof PILLAR_META>
                ).map((key) => (
                  <div className="flex items-center gap-2" key={key}>
                    <span
                      className="inline-block w-4 h-2 rounded-full"
                      style={{
                        backgroundColor: PILLAR_META[key].color,
                      }}
                    />
                    <span className="text-[#555]">
                      {PILLAR_META[key].label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table + content */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="overflow-x-auto border border-[#e1dedb] rounded-lg bg-white shadow-sm">
          <table className="min-w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-[#f4f1ec] text-[0.65rem] md:text-xs uppercase tracking-[0.12em] text-[#777]">
                <th className="px-3 py-3 text-left w-[23%]"></th>
                {(
                  Object.keys(PILLAR_META) as Array<keyof typeof PILLAR_META>
                ).map((key) => (
                  <th key={key} className="px-3 py-3 text-center w-[10%]">
                    <div>{PILLAR_META[key].label}</div>
                  </th>
                ))}
                <th className="px-3 py-3 text-center w-[10%]">
                  <div>Arton Index score</div>
                </th>
                <th className="px-3 py-3 text-center w-[7%]">
                  <div>Change</div>
                </th>
              </tr>
              <tr className="bg-[#f9f7f3] text-[0.65rem] md:text-xs text-[#999]">
                <th className="px-3 py-2 text-left"></th>
                {(
                  Object.keys(PILLAR_META) as Array<keyof typeof PILLAR_META>
                ).map((key) => (
                  <th key={key} className="px-3 py-2 text-center">
                    ({PILLAR_META[key].weight})
                  </th>
                ))}
                <th className="px-3 py-2 text-center">(100)</th>
                <th className="px-3 py-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {COUNTRIES.map((c) => {
                const indexScore = computeIndex(c.scores);
                const isSelected = c.code === selectedCode;

                return (
                  <tr
                    key={c.code}
                    className={`border-t border-[#eee] ${
                      isSelected ? "bg-[#fff8f0]" : "bg-white"
                    }`}
                  >
                    <td className="px-3 py-3 text-left whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={c.flagSrc}
                          alt={c.flagAlt}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-xs md:text-sm text-[#333]">
                          {c.name}
                        </span>
                      </div>
                    </td>
                    {(
                      Object.keys(PILLAR_META) as Array<
                        keyof typeof PILLAR_META
                      >
                    ).map((key) => (
                      <td
                        key={key}
                        className="px-3 py-3 text-center text-[#444]"
                      >
                        {Math.round(c.scores[key])}
                      </td>
                    ))}
                    <td className="px-3 py-3 text-center font-semibold text-[#333]">
                      {indexScore}
                    </td>
                    <td className="px-3 py-3 text-center text-xs">
                      <span
                        className={
                          c.change === "up"
                            ? "text-emerald-600"
                            : c.change === "down"
                            ? "text-rose-600"
                            : "text-[#999]"
                        }
                      >
                        {changeIcon(c.change)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[#888]">
          Arton Index figures are reviewed periodically and updated when
          material changes occur.
        </p>

        {/* Narrative text */}
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-[#555]">
          <div>
            <h3 className="font-semibold text-base mb-2">Overview</h3>
            <p>
              The Arton Index is a comparative tool measuring programs for
              residence and citizenship from the perspective of the investor. It
              is built around indicators grouped into five categories: Cost,
              Speed, Global Mobility, Quality of Life and Simplicity. These
              reflect the key factors high net worth individuals consider when
              choosing the program that best fits their needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Key findings</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Caribbean programs such as Dominica and Grenada perform strongly
                thanks to highly competitive costs and improved global mobility.
              </li>
              <li>
                Bulgaria and Malta remain among Europe’s most compelling
              offerings from the investor perspective.
              </li>
              <li>
                The U.K. and the USA rank lower on the index principally due to
                duration and complexity, but they still remain among the most
                attractive final destinations for investors and their families.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Methodology</h3>
            <p>
              The index measures how appealing global residence and citizenship
              programs are to high net worth individuals. Each of the five
              pillars has a specific weight in the composite score:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Cost (30%)</strong> – required investment, government
                fees and financing costs for a representative family profile.
              </li>
              <li>
                <strong>Speed (20%)</strong> – duration of the application
                process and total time required to qualify for citizenship.
              </li>
              <li>
                <strong>Global Mobility (20%)</strong> – visa-free or
                visa-on-arrival access to key financial centers and the total
                number of destinations reachable.
              </li>
              <li>
                <strong>Quality of Life (10%)</strong> – based on external
                indices that rank countries on factors such as safety,
                infrastructure, health and education.
              </li>
              <li>
                <strong>Simplicity (20%)</strong> – complexity of procedures,
                documentation, residence requirements and program stability.
              </li>
            </ul>
            <p className="mt-3">
              Scores are normalized on a 0–100 scale so that programs can be
              compared on a like-for-like basis, whether they are
              residence-to-citizenship pathways or direct citizenship programs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">
              The five pillars in detail
            </h3>

            <h4 className="font-semibold mt-2">Cost</h4>
            <p>
              Cost is often the first filter for most investors. It captures not
              only the main investment route, but also government fees and
              financing or contribution options applicable to a typical family.
              Programs that deliver strong benefits at lower capital outlay
              achieve higher scores.
            </p>

            <h4 className="font-semibold mt-3">Speed</h4>
            <p>
              Speed reflects how quickly investors and their families can obtain
              residence and ultimately citizenship. Legislated processing times,
              fast-track routes and practical experience with processing
              backlogs all influence this pillar.
            </p>

            <h4 className="font-semibold mt-3">Global Mobility</h4>
            <p>
              Global Mobility assesses the power of a passport. It looks at
              visa-free or visa-on-arrival access to key financial centers and
              socio-cultural hubs, as well as the overall number of destinations
              that become accessible through the program.
            </p>

            <h4 className="font-semibold mt-3">Quality of Life</h4>
            <p>
              Quality of Life is based on external indices that track economic
              strength, political stability, security, education, healthcare,
              environment and infrastructure. Investors often weigh this pillar
              heavily when they plan where their family will live, study and
              work.
            </p>

            <h4 className="font-semibold mt-3">Simplicity</h4>
            <p>
              Simplicity measures how straightforward it is to navigate a given
              program. Clear rules, streamlined documentation, predictable
              timelines and stable policy frameworks generate higher scores.
              Complex programs with frequent changes or heavy residence
              requirements score lower.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Background</h3>
            <p>
              Each year, thousands of families choose to invest in their future
              through residence and citizenship by investment programs. As more
              countries enter the space and existing programs evolve, investors
              need a structured way to compare options. The Arton Index provides
              that benchmark, enabling a transparent and investor-centric view
              of how each program performs.
            </p>
            <p className="mt-2">
              For industry stakeholders, the index highlights where programs are
              competitive, where they lag and how legislative or policy changes
              may affect their positioning. For investors, it offers a clear
              snapshot of the trade-offs across cost, speed, mobility, quality
              of life and simplicity.
            </p>
          </div>
        </div>

        {/* Other tools */}
        <div className="mt-10 grid md:grid-cols-4 gap-6 text-sm">
          <ToolCard
            title="Program Check"
            href="/tools/program-check"
            description="Compare different programs side by side and examine their features."
          />
          <ToolCard
            title="Program Cost"
            href="/tools/program-cost"
            description="Estimate the total cost of each program tailored to your family."
          />
          <ToolCard
            title="Program Map"
            href="/tools/program-map"
            description="Visualize the global mobility each passport can unlock."
          />
          <ToolCard
            title="Program Match"
            href="/tools/program-match"
            description="Find the program that best matches your goals and priorities."
          />
        </div>
      </section>
    </main>
  );
}
