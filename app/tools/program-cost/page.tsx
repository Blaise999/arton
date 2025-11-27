// app/tools/program-cost/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PROGRAM_COSTS,
  ProgramCost,
} from "@/app/data/program-cost"; // <-- if your file is singular, change back
import { devToolsCatalogReport } from "@/app/data/tools-catalog-sync";

type Currency = "USD" | "EUR" | "CAD";

type AgeFieldKey =
  | "spouse"
  | "child1"
  | "child2"
  | "child3"
  | "child4"
  | "parent1"
  | "parent2";

interface AgeField {
  key: AgeFieldKey;
  label: string;
  subLabel?: string;
  max: number;
}

const AGE_FIELDS: AgeField[] = [
  { key: "spouse", label: "Spouse", max: 99 },
  { key: "child1", label: "1st Dependent", subLabel: "Child", max: 30 },
  { key: "child2", label: "2nd Dependent", subLabel: "Child", max: 30 },
  { key: "child3", label: "3rd Dependent", subLabel: "Child", max: 30 },
  { key: "child4", label: "4th Dependent", subLabel: "Child", max: 30 },
  { key: "parent1", label: "1st Dependent", subLabel: "Parent", max: 99 },
  { key: "parent2", label: "2nd Dependent", subLabel: "Parent", max: 99 },
];

type AgesState = Record<AgeFieldKey, string>;

const DEFAULT_AGES: AgesState = {
  spouse: "0",
  child1: "0",
  child2: "0",
  child3: "0",
  child4: "0",
  parent1: "0",
  parent2: "0",
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "US$",
  EUR: "€",
  CAD: "C$",
};

// very rough FX just so the toggle feels alive
const CURRENCY_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.9,
  CAD: 1.35,
};

// flat family-loaders so ages actually matter a bit
const SPOUSE_FEE_USD = 25_000;
const CHILD_FEE_USD = 15_000;
const PARENT_FEE_USD = 30_000;

function parseAge(value: string): number {
  const n = Number(value || "0");
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function formatMoney(amountUSD: number, currency: Currency): string {
  const rate = CURRENCY_RATES[currency] ?? 1;
  const converted = amountUSD * rate;
  const symbol = CURRENCY_SYMBOLS[currency] ?? "";
  return `${symbol} ${converted.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })}`;
}

/**
 * Map program code -> country page slug.
 * All totals + country names will link to these paths.
 */
function getProgramHref(code: ProgramCost["code"]): string {
  switch (code) {
    case "AG":
      return "/global-citizen-programs/antigua-and-barbuda";
    case "BG":
      return "/global-citizen-programs/bulgaria";
    case "CA":
      return "/global-citizen-programs/canada-quebec";
    case "CY":
      return "/global-citizen-programs/cyprus";
    case "DM":
      return "/global-citizen-programs/dominica";
    case "GR":
      // matches folder: greece-golden-visa-program
      return "/global-citizen-programs/greece-golden-visa-program";
    case "GD":
      return "/global-citizen-programs/grenada";
    case "HU":
      return "/global-citizen-programs/hungary";
    case "LV":
      return "/global-citizen-programs/latvia";
    case "MT":
      return "/global-citizen-programs/malta";
    case "ME": // Montenegro (if your ProgramCost uses ME)
      return "/global-citizen-programs/montenegro";
    case "PT":
      return "/global-citizen-programs/portugal";
    case "LC":
      return "/global-citizen-programs/saint-lucia";

    // If/when you add these pages, keep the slugs in sync:
    case "KN":
      return "/global-citizen-programs/st-kitts-nevis";
    case "ST":
      return "/global-citizen-programs/sao-tome-principe-citizenship-by-investment";
    case "ES":
      return "/global-citizen-programs/spain";
    case "TR":
      return "/global-citizen-programs/program-overview";
    case "US":
      return "/global-citizen-programs/usa-eb-5";

    default:
      return "#";
  }
}

// map<programCode, optionLabel>
type SelectedOptionsState = Record<string, string>;

function buildInitialSelectedOptions(): SelectedOptionsState {
  const entries = PROGRAM_COSTS.map((p) => [
    p.code,
    p.baselineOption.optionLabel,
  ]);
  return Object.fromEntries(entries);
}

export default function ProgramCostPage() {
  const [ages, setAges] = useState<AgesState>(DEFAULT_AGES);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [selectedOptions, setSelectedOptions] =
    useState<SelectedOptionsState>(() => buildInitialSelectedOptions());
  const [openSelectCode, setOpenSelectCode] = useState<string | null>(null);

  // ✅ Dev-only drift report (PROGRAM_COSTS / PROGRAMS / PROGRAM_MATCH)
  useEffect(() => {
    devToolsCatalogReport();
  }, []);

  const spousePresent = parseAge(ages.spouse) > 0;
  const childrenCount =
    (parseAge(ages.child1) > 0 ? 1 : 0) +
    (parseAge(ages.child2) > 0 ? 1 : 0) +
    (parseAge(ages.child3) > 0 ? 1 : 0) +
    (parseAge(ages.child4) > 0 ? 1 : 0);
  const parentsCount =
    (parseAge(ages.parent1) > 0 ? 1 : 0) +
    (parseAge(ages.parent2) > 0 ? 1 : 0);

  const handleAgeChange = (field: AgeField, raw: string) => {
    // keep only digits
    const cleaned = raw.replace(/[^\d]/g, "");
    const num = Number(cleaned || "0");
    const clamped = Math.min(Math.max(num, 0), field.max);
    setAges((prev) => ({
      ...prev,
      [field.key]: clamped.toString(),
    }));
  };

  const handleReset = () => {
    setAges(DEFAULT_AGES);
  };

  const familyExtraFeesUSD =
    (spousePresent ? SPOUSE_FEE_USD : 0) +
    childrenCount * CHILD_FEE_USD +
    parentsCount * PARENT_FEE_USD;

  return (
    <main className="bg-[#f5f2ec]">
      {/* Hero / title bar */}
      <section className="bg-gradient-to-b from-[#d7c2a2] to-[#c19a6b] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl tracking-[0.18em] uppercase font-semibold">
              Program <span className="font-bold">Cost</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-[15px] leading-relaxed text-[#fdf7ee] italic">
              Enter the ages of everyone accompanying you and our calculator
              will estimate the investment and fees required for each program.
            </p>

            {/* Tools tab group */}
            <div className="mt-8 inline-flex flex-wrap justify-center gap-2 border border-[#e6cfac]/60 bg-white/10 p-1">
              <ToolTab href="/tools/arton-index">Arton Index</ToolTab>
              <ToolTab href="/tools/program-check">Program Check</ToolTab>
              <ToolTab href="/tools/program-cost" active>
                Program Cost
              </ToolTab>
              <ToolTab href="/tools/program-map">Program Map</ToolTab>
              <ToolTab href="/tools/program-match">Program Match</ToolTab>
            </div>
          </div>
        </div>
      </section>

      {/* Main content card */}
      <section className="-mt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm border border-[#e3ded5]">
            {/* Age circles */}
            <div className="px-6 sm:px-10 pt-10 pb-6">
              <p className="text-[15px] font-medium text-[#333] mb-6">
                Please enter{" "}
                <span className="underline decoration-[#c89a5b]">ages</span>{" "}
                below:
              </p>
              <div className="flex flex-wrap gap-6 lg:gap-10">
                {AGE_FIELDS.map((field) => (
                  <div
                    key={field.key}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full border-2 border-[#c79a5a] flex items-center justify-center">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={ages[field.key]}
                        onChange={(e) =>
                          handleAgeChange(field, e.target.value)
                        }
                        className="w-10 bg-transparent text-center text-[17px] font-semibold text-[#333] outline-none"
                        placeholder="0"
                      />
                    </div>
                    <span className="mt-3 text-[13px] font-medium text-[#444]">
                      {field.label}
                    </span>
                    {field.subLabel && (
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#888]">
                        {field.subLabel}
                      </span>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleReset}
                  className="ml-auto mt-4 text-[12px] tracking-[0.18em] uppercase border border-[#c0b6a4] px-4 py-2 text-[#555] hover:bg-[#f4ece2] transition-colors"
                >
                  Reset
                </button>
              </div>

              <p className="mt-4 text-[13px] text-[#666] text-center">
                Leave “0” if a dependent is not accompanying you. For more
                complex family structures, please{" "}
                <Link
                  href="/contact-us"
                  className="underline text-[#b8864f] hover:text-[#d29b60]"
                >
                  contact us
                </Link>
                .
              </p>

              <h2 className="mt-8 text-center text-[13px] tracking-[0.2em] uppercase text-[#666]">
                Your estimated cost per program
              </h2>

              {/* Currency / investment controls */}
              <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-10">
                <div className="md:w-1/2">
                  <div className="flex border border-[#d4cec2]">
                    {(["USD", "EUR", "CAD"] as Currency[]).map((c) => (
                      <label
                        key={c}
                        className={`flex-1 text-center py-2 text-[12px] tracking-[0.16em] uppercase cursor-pointer ${
                          currency === c
                            ? "bg-[#333] text-white"
                            : "bg-white text-[#555]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="currency"
                          value={c}
                          checked={currency === c}
                          onChange={() => setCurrency(c)}
                          className="hidden"
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-[#777]">
                    Select preferred currency.
                  </p>
                </div>

                <div className="md:w-1/2">
                  <div className="flex border border-[#d4cec2]">
                    <label className="flex-1 text-center py-2 text-[12px] tracking-[0.16em] uppercase bg-[#333] text-white">
                      <input
                        type="radio"
                        name="investment"
                        value="full"
                        defaultChecked
                        className="hidden"
                      />
                      Full investment
                    </label>
                    <label
                      className="flex-1 text-center py-2 text-[12px] tracking-[0.16em] uppercase bg-[#f5f2ec] text-[#aaa] cursor-not-allowed"
                      title="Coming soon."
                    >
                      <input
                        type="radio"
                        name="investment"
                        value="financing"
                        disabled
                        className="hidden"
                      />
                      Financing option
                    </label>
                  </div>
                  <p className="mt-2 text-[11px] text-[#777]">
                    Select preferred investment option (when applicable).
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="border-t border-[#ebe5da] overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-[#f7f4ee]">
                  <tr className="text-[11px] tracking-[0.18em] uppercase text-[#777]">
                    <th className="px-4 py-3 text-left w-[35%]">
                      Program / Country
                    </th>
                    <th className="px-4 py-3 text-left">
                      Contribution type
                    </th>
                    <th className="px-4 py-3 text-right">
                      Contribution amount
                    </th>
                    <th className="px-4 py-3 text-right">
                      Application fees<sup>1</sup>
                    </th>
                    <th className="px-4 py-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {PROGRAM_COSTS.map((program) => {
                    const href = getProgramHref(program.code);

                    const options = [
                      program.baselineOption,
                      ...(program.alternateOptions ?? []),
                    ];

                    const selectedLabel =
                      selectedOptions[program.code] ??
                      program.baselineOption.optionLabel;

                    const selectedOption =
                      options.find(
                        (opt) => opt.optionLabel === selectedLabel
                      ) ?? program.baselineOption;

                    const hasNumericData =
                      selectedOption.contributionAmount != null &&
                      selectedOption.applicationFees != null &&
                      selectedOption.total != null;

                    const hasData = program.hasData && hasNumericData;

                    const contributionUSD =
                      selectedOption.contributionAmount ?? 0;
                    const baseApplicationUSD =
                      selectedOption.applicationFees ?? 0;

                    const applicationUSD = hasData
                      ? baseApplicationUSD + familyExtraFeesUSD
                      : 0;

                    // Base total from data; if missing, fall back to sum
                    const baseTotalUSD =
                      selectedOption.total ??
                      contributionUSD + baseApplicationUSD;

                    const totalUSD = hasData
                      ? baseTotalUSD + familyExtraFeesUSD
                      : 0;

                    const isOpen = openSelectCode === program.code;

                    return (
                      <tr
                        key={program.code}
                        className="border-t border-[#eee4d4] hover:bg-[#fdf9f4]"
                      >
                        {/* Program / country */}
                        <td className="px-4 py-3 align-top">
                          <Link
                            href={href}
                            className="inline-flex items-center gap-3"
                          >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#c9a26a] text-[11px] font-semibold uppercase text-[#8a5b2d]">
                              {program.code}
                            </span>
                            <span className="text-[13px] font-medium text-[#333]">
                              {program.label}
                            </span>
                          </Link>
                        </td>

                        {/* Contribution type dropdown */}
                        <td className="px-4 py-3 align-top text-[13px] text-[#555] relative">
                          {options.length === 1 ? (
                            hasData ? selectedOption.optionLabel : "--"
                          ) : (
                            <div className="inline-block relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenSelectCode(
                                    isOpen ? null : program.code
                                  )
                                }
                                className="min-w-[210px] flex items-center justify-between bg-white border border-[#d6cbb9] px-3 py-2 text-[13px] text-[#555] hover:border-[#c79a5a] cursor-pointer"
                              >
                                <span className="truncate">
                                  {selectedOption.optionLabel}
                                </span>
                                <span className="ml-3 text-[10px] text-[#a27a43]">
                                  ▾
                                </span>
                              </button>
                              {isOpen && (
                                <div className="absolute left-0 mt-1 z-20 bg-white border border-[#d6cbb9] shadow-[0_2px_8px_rgba(0,0,0,0.18)] min-w-[210px]">
                                  {options.map((opt) => {
                                    const active =
                                      opt.optionLabel ===
                                      selectedOption.optionLabel;
                                    return (
                                      <button
                                        key={opt.optionLabel}
                                        type="button"
                                        onClick={() => {
                                          setSelectedOptions((prev) => ({
                                            ...prev,
                                            [program.code]: opt.optionLabel,
                                          }));
                                          setOpenSelectCode(null);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-[13px] ${
                                          active
                                            ? "bg-[#c99b61] text-white"
                                            : "bg-white text-[#555] hover:bg-[#f5e6d2]"
                                        }`}
                                      >
                                        {opt.optionLabel}
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          )}
                        </td>

                        {/* Contribution amount */}
                        <td className="px-4 py-3 align-top text-[13px] text-right text-[#333]">
                          {hasData
                            ? formatMoney(contributionUSD, currency)
                            : "--"}
                        </td>

                        {/* Application fees */}
                        <td className="px-4 py-3 align-top text-[13px] text-right text-[#333]">
                          {hasData
                            ? formatMoney(applicationUSD, currency)
                            : "--"}
                        </td>

                        {/* Total (gold pill like Arton) */}
                        <td className="px-4 py-3 align-top text-[13px] text-right">
                          {hasData ? (
                            <Link
                              href={href}
                              className="inline-block min-w-[150px] px-4 py-2 bg-[#c99b61] text-white font-semibold text-right hover:bg-[#d2a971] transition-colors"
                            >
                              {formatMoney(totalUSD, currency)}
                            </Link>
                          ) : (
                            "--"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Disclaimer + tools row */}
            <div className="px-6 sm:px-10 pt-6 pb-10">
              <p className="text-[12px] leading-relaxed text-[#666] mb-6">
                <sup>1</sup> Application fees include government, due
                diligence and mandatory program fees, based on baseline
                figures where all dependants are set to age “0”.
                Additional family members are reflected through simplified
                extra-fee assumptions.
                <br />
                <br />
                <strong>Disclaimer:</strong> These estimates are provided
                for information purposes only. While every effort is made
                to keep them aligned with current program requirements, you
                should always confirm actual investment levels, government
                fees and professional fees before making any decision.
              </p>

              {/* tools strip (the 4 cards) */}
              <div className="mt-6 border-t border-[#e9e1d5] pt-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <ToolCard
                    href="/tools/arton-index"
                    badgeClass="arton-index"
                    title="Arton Index"
                    description="Discover how the industry benchmark ranks the different programs."
                  />
                  <ToolCard
                    href="/tools/program-check"
                    badgeClass="program-check"
                    title="Program Check"
                    description="Compare the different programs side by side and examine their features."
                  />
                  <ToolCard
                    href="/tools/program-map"
                    badgeClass="program-map"
                    title="Program Map"
                    description="See the power of global mobility for each passport."
                  />
                  <ToolCard
                    href="/tools/program-match"
                    badgeClass="program-match"
                    title="Program Match"
                    description="Find the program that best matches your goals."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type ToolTabProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

function ToolTab({ href, children, active }: ToolTabProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase border border-transparent ${
        active
          ? "bg-white text-[#333] font-semibold"
          : "bg-transparent text-[#f8efe5] hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

type ToolCardProps = {
  href: string;
  badgeClass: string; // left here in case you want to hook real CSS icons later
  title: string;
  description: string;
};

function ToolCard({ href, title, description }: ToolCardProps) {
  return (
    <div className="text-center">
      <Link
        href={href}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-[#d7b37b] to-[#b78145] shadow-sm"
      >
        <span className="sr-only">{title}</span>
      </Link>
      <h4 className="mt-4 text-[13px] tracking-[0.2em] uppercase text-[#222]">
        <Link href={href} className="hover:text-[#b8864f]">
          {title}
        </Link>
      </h4>
      <p className="mt-2 text-[13px] text-[#777] max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
