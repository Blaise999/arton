// app/tools/program-match/ProgramMatchClient.tsx
"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import Link from "next/link";

import {
  ContributionType,
  MobilityRegion,
  ProgramMatchProfile,
  PROGRAMS,
} from "@data/program";

const SLIDER_MIN = 0;
const SLIDER_MAX = 38;

type YesNo = "yes" | "no" | null;
type TriImportance = 0 | 1 | 2 | null;

interface ProgramMatchFilters {
  netWorthSlider: number; // 0–38
  contributionSlider: number; // 0–38
  contributionTypes: ContributionType[];
  financing: YesNo;
  speedImportance: TriImportance;
  relocation: YesNo;
  mobility: MobilityRegion[];
  simplicityImportance: TriImportance;
  qualityImportance: TriImportance;
}

const CONTRIBUTION_OPTIONS: { value: ContributionType; label: string }[] = [
  { value: "donation", label: "Donation" },
  { value: "bonds", label: "Government bonds" },
  { value: "funds", label: "Funds" },
  { value: "real-estate", label: "Real estate" },
];

const MOBILITY_OPTIONS: { value: MobilityRegion; label: string }[] = [
  { value: "Canada", label: "Canada" },
  { value: "Europe", label: "Europe (Schengen zone)" },
  { value: "USA", label: "USA" },
];

function sliderToAmount(value: number): number {
  if (value <= 0) return 0;
  if (value <= 20) {
    return value * 50_000;
  }
  return (value - 18) * 500_000;
}

function formatCurrency(amount: number): string {
  if (!amount) return "0";
  return amount.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });
}

function createDefaultFilters(): ProgramMatchFilters {
  return {
    netWorthSlider: 0,
    contributionSlider: 0,
    contributionTypes: [],
    financing: null,
    speedImportance: null,
    relocation: null,
    mobility: [],
    simplicityImportance: null,
    qualityImportance: null,
  };
}

function isDefaultFilters(filters: ProgramMatchFilters): boolean {
  return (
    filters.netWorthSlider === 0 &&
    filters.contributionSlider === 0 &&
    filters.contributionTypes.length === 0 &&
    filters.financing === null &&
    filters.speedImportance === null &&
    filters.relocation === null &&
    filters.mobility.length === 0 &&
    filters.simplicityImportance === null &&
    filters.qualityImportance === null
  );
}

function scoreProgram(
  profile: ProgramMatchProfile,
  filters: ProgramMatchFilters
): number {
  let score =
    profile.artonIndexScore * 0.4 +
    profile.qualityOfLifeScore * 4 +
    profile.mobilityRegions.length * 3;

  const defaultFilters = isDefaultFilters(filters);
  if (defaultFilters) return score;

  const desiredNetWorth = sliderToAmount(filters.netWorthSlider);
  const desiredContribution = sliderToAmount(filters.contributionSlider);

  if (desiredNetWorth > 0 && profile.minNetWorth > 0) {
    const ratio = desiredNetWorth / profile.minNetWorth;
    if (ratio >= 1) score += 18;
    else score += Math.max(-20, 18 * (ratio - 1));
  }

  if (desiredContribution > 0 && profile.minContribution > 0) {
    const ratio = desiredContribution / profile.minContribution;
    if (ratio >= 1) score += 18;
    else score += Math.max(-20, 18 * (ratio - 1));
  }

  if (filters.contributionTypes.length > 0) {
    const matches = filters.contributionTypes.filter((t) =>
      profile.contributionTypes.includes(t)
    ).length;
    if (matches > 0) score += matches * 5;
    else score -= 8;
  }

  if (filters.financing === "yes") {
    score += profile.allowsFinancing ? 6 : -10;
  } else if (filters.financing === "no") {
    score += profile.allowsFinancing ? 0 : 4;
  }

  if (filters.speedImportance !== null) {
    const diff = Math.abs(filters.speedImportance - profile.speedScore);
    score += (2 - diff) * 5;
  }

  if (filters.relocation === "yes") {
    if (profile.requiresRelocation) score += 4;
  } else if (filters.relocation === "no") {
    if (profile.requiresRelocation) score -= 15;
    else score += 6;
  }

  if (filters.mobility.length > 0) {
    const matches = filters.mobility.filter((m) =>
      profile.mobilityRegions.includes(m)
    ).length;
    if (matches > 0) score += matches * 6;
    else score -= 8;
  }

  if (filters.simplicityImportance !== null) {
    const diff = Math.abs(
      filters.simplicityImportance - profile.simplicityScore
    );
    score += (2 - diff) * 4;
  }

  if (filters.qualityImportance !== null) {
    const diff = Math.abs(
      filters.qualityImportance - profile.qualityOfLifeScore
    );
    score += (2 - diff) * 5;
  }

  return score;
}

function ProgramMatchClient() {
  const [filters, setFilters] = useState<ProgramMatchFilters>(() =>
    createDefaultFilters()
  );

  const netWorthAmount = useMemo(
    () => sliderToAmount(filters.netWorthSlider),
    [filters.netWorthSlider]
  );
  const contributionAmount = useMemo(
    () => sliderToAmount(filters.contributionSlider),
    [filters.contributionSlider]
  );

  const bestMatches = useMemo(() => {
    const scored = PROGRAMS.map((p) => ({
      profile: p,
      score: scoreProgram(p, filters),
    }));

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 5);
  }, [filters]);

  const handleSliderChange =
    (field: "netWorthSlider" | "contributionSlider") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setFilters((prev) => ({ ...prev, [field]: value }));
    };

  const toggleContribution = (value: ContributionType) => {
    setFilters((prev) => {
      const exists = prev.contributionTypes.includes(value);
      return {
        ...prev,
        contributionTypes: exists
          ? prev.contributionTypes.filter((v) => v !== value)
          : [...prev.contributionTypes, value],
      };
    });
  };

  const toggleMobility = (value: MobilityRegion) => {
    setFilters((prev) => {
      const exists = prev.mobility.includes(value);
      return {
        ...prev,
        mobility: exists
          ? prev.mobility.filter((v) => v !== value)
          : [...prev.mobility, value],
      };
    });
  };

  const setYesNo =
    (field: "financing" | "relocation") => (value: YesNo) => {
      setFilters((prev) => ({ ...prev, [field]: value }));
    };

  const setImportance =
    (
      field: "speedImportance" | "simplicityImportance" | "qualityImportance"
    ) =>
    (value: TriImportance) => {
      setFilters((prev) => ({ ...prev, [field]: value }));
    };

  const handleReset = () => setFilters(createDefaultFilters());
  const filtersAreDefault = isDefaultFilters(filters);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero / header */}
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top,_#fff7ed_0,_#ffffff_55%)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:py-14">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Program <b className="font-semibold text-amber-600">Match</b>
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Discover which programs best match your goals.
            </p>
          </div>

          {/* Tools tab group */}
          <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium">
            <ToolTab href="/tools/arton-index" label="Arton Index" />
            <ToolTab href="/tools/program-check" label="Program Check" />
            <ToolTab href="/tools/program-cost" label="Program Cost" />
            <ToolTab href="/tools/program-map" label="Program Map" />
            <ToolTab href="/tools/program-match" label="Program Match" active />
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          {/* Form */}
          <form className="space-y-8">
            {/* NET WORTH */}
            <QuestionRow
              icon={null}
              title="NET WORTH"
              subtitle="Indicate your personal net worth, in US$"
            >
              <SliderField
                id="net-worth"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                value={filters.netWorthSlider}
                onChange={handleSliderChange("netWorthSlider")}
                label={`$${formatCurrency(netWorthAmount)}${
                  filters.netWorthSlider === SLIDER_MAX ? "+" : ""
                }`}
              />
            </QuestionRow>

            {/* CONTRIBUTION AMOUNT */}
            <QuestionRow
              icon="https://www.artoncapital.com/wp-content/themes/artoncapital/images/cost.png"
              title="CONTRIBUTION AMOUNT"
              subtitle="Indicate how much you are willing to contribute for a family of four, in US$"
            >
              <SliderField
                id="contribution-amount"
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                value={filters.contributionSlider}
                onChange={handleSliderChange("contributionSlider")}
                label={`$${formatCurrency(contributionAmount)}${
                  filters.contributionSlider === SLIDER_MAX ? "+" : ""
                }`}
              />
            </QuestionRow>

            {/* CONTRIBUTION TYPE */}
            <QuestionRow
              icon={null}
              title="CONTRIBUTION TYPE"
              subtitle="Indicate the type of contribution you would like to make"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {CONTRIBUTION_OPTIONS.map((opt) => {
                  const checked = filters.contributionTypes.includes(opt.value);
                  return (
                    <label
                      key={opt.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors ${
                        checked
                          ? "border-amber-500 bg-amber-50 text-slate-900"
                          : "border-slate-200 bg-white hover:border-amber-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-amber-500"
                        checked={checked}
                        onChange={() => toggleContribution(opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </QuestionRow>

            {/* FINANCING */}
            <QuestionRow
              icon={null}
              title="FINANCING"
              subtitle="Indicate if you would like to finance the required contribution"
            >
              <RadioGroup
                options={[
                  { value: "yes" as YesNo, label: "Yes" },
                  { value: "no" as YesNo, label: "No" },
                ]}
                value={filters.financing}
                onChange={setYesNo("financing")}
              />
            </QuestionRow>

            {/* SPEED */}
            <QuestionRow
              icon="https://www.artoncapital.com/wp-content/themes/artoncapital/images/speed.png"
              title="SPEED"
              subtitle="Indicate how important it is the time to obtain citizenship as measured by the Arton Index"
            >
              <ImportanceGroup
                value={filters.speedImportance}
                onChange={setImportance("speedImportance")}
              />
            </QuestionRow>

            {/* RELOCATION */}
            <QuestionRow
              icon={null}
              title="RELOCATION"
              subtitle="Indicate if relocating to fulfill citizenship requirements is an option for you"
            >
              <RadioGroup
                options={[
                  { value: "yes" as YesNo, label: "Yes" },
                  { value: "no" as YesNo, label: "No" },
                ]}
                value={filters.relocation}
                onChange={setYesNo("relocation")}
              />
            </QuestionRow>

            {/* MOBILITY */}
            <QuestionRow
              icon="https://www.artoncapital.com/wp-content/themes/artoncapital/images/mobility.png"
              title="MOBILITY"
              subtitle="Indicate which countries and/or regions you would like to travel to visa-free"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {MOBILITY_OPTIONS.map((opt) => {
                  const checked = filters.mobility.includes(opt.value);
                  return (
                    <label
                      key={opt.value}
                      className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors ${
                        checked
                          ? "border-amber-500 bg-amber-50 text-slate-900"
                          : "border-slate-200 bg-white hover:border-amber-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-amber-500"
                        checked={checked}
                        onChange={() => toggleMobility(opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </QuestionRow>

            {/* SIMPLICITY */}
            <QuestionRow
              icon="https://www.artoncapital.com/wp-content/themes/artoncapital/images/simple.png"
              title="SIMPLICITY"
              subtitle="Indicate how important it is a simple procedure as measured by the Arton Index"
            >
              <ImportanceGroup
                value={filters.simplicityImportance}
                onChange={setImportance("simplicityImportance")}
              />
            </QuestionRow>

            {/* QUALITY OF LIFE */}
            <QuestionRow
              icon="https://www.artoncapital.com/wp-content/themes/artoncapital/images/quality.png"
              title="QUALITY OF LIFE"
              subtitle="Indicate how important it is the quality of life as measured by the Arton Index"
            >
              <ImportanceGroup
                value={filters.qualityImportance}
                onChange={setImportance("qualityImportance")}
              />
            </QuestionRow>
          </form>

          {/* Right column: Best matches / reset */}
          <aside className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xs font-semibold tracking-[0.25em] text-slate-600">
                YOUR BEST MATCH
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-amber-400 hover:text-amber-600"
              >
                Reset
              </button>
            </div>

            <p className="text-xs text-slate-500">
              {filtersAreDefault
                ? "Adjust the sliders and options on the left to see which programs fit you best."
                : "Based on your preferences, these programs align best with your profile."}
            </p>

            <ul className="space-y-3">
              {bestMatches.map(({ profile, score }) => (
                <li key={profile.code}>
                  <Link
                    href={profile.detailsUrl}
                    target="_blank"
                    className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm transition-colors hover:border-amber-400 hover:bg-amber-50/40"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">
                        {profile.label}
                      </span>
                      <span className="text-[11px] uppercase tracking-wide text-slate-500">
                        {profile.countryCode}
                      </span>
                    </div>
                    <div className="flex flex-col items-end text-[11px] text-slate-500">
                      <span>
                        Index:{" "}
                        <span className="font-semibold text-slate-900">
                          {profile.artonIndexScore}
                        </span>
                      </span>
                      <span className="opacity-80">
                        Match score: {Math.round(score)}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Bottom tools row */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ToolCard
            href="/tools/arton-index"
            label="Arton Index"
            description="Discover how the industry benchmark ranks the different programs."
            className="arton-index"
          />
          <ToolCard
            href="/tools/program-check"
            label="Program Check"
            description="Compare the different programs side by side and examine their features."
            className="program-check"
          />
          <ToolCard
            href="/tools/program-cost"
            label="Program Cost"
            description="Find out the cost estimates for each program tailored to your family."
            className="program-cost"
          />
          <ToolCard
            href="/tools/program-map"
            label="Program Map"
            description="See the power of global mobility for each passport."
            className="program-map"
          />
        </div>
      </section>
    </div>
  );
}

export default ProgramMatchClient;

/* ---------- Small UI helpers ---------- */

function ToolTab({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] transition-colors ${
        active
          ? "border-amber-500 bg-amber-50 text-amber-700"
          : "border-slate-200 bg-white text-slate-600 hover:border-amber-400 hover:text-amber-700"
      }`}
    >
      {label}
    </Link>
  );
}

function QuestionRow({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: string | null;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
      <div className="flex gap-3">
        <div className="hidden w-6 flex-shrink-0 items-start justify-center md:flex">
          {icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={icon}
              alt=""
              className="mt-1 h-5 w-5 object-contain opacity-70"
            />
          ) : (
            <span className="mt-1 h-5 w-5" />
          )}
        </div>
        <div>
          <strong className="block text-xs font-semibold tracking-wide text-slate-900">
            {title}
          </strong>
          <em className="mt-1 block text-[11px] not-italic text-slate-500">
            {subtitle}
          </em>
        </div>
      </div>
      <div className="md:pl-4">{children}</div>
    </div>
  );
}

function SliderField({
  id,
  min,
  max,
  value,
  onChange,
  label,
}: {
  id: string;
  min: number;
  max: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) {
  return (
    <div className="space-y-2">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full accent-amber-500"
      />
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>0</span>
        <span className="font-semibold text-slate-900">{label}</span>
        <span>10,000,000+</span>
      </div>
    </div>
  );
}

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: { value: YesNo; label: string }[];
  value: YesNo;
  onChange: (val: YesNo) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value ?? "none"}
            className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors ${
              checked
                ? "border-amber-500 bg-amber-50 text-slate-900"
                : "border-slate-200 bg-white hover:border-amber-400"
            }`}
          >
            <input
              type="radio"
              className="h-3 w-3 accent-amber-500"
              checked={checked}
              onChange={() => onChange(opt.value)}
            />
            <span>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function ImportanceGroup({
  value,
  onChange,
}: {
  value: TriImportance;
  onChange: (val: TriImportance) => void;
}) {
  const options: { val: TriImportance; label: string }[] = [
    { val: 2, label: "Very important" },
    { val: 1, label: "Somewhat important" },
    { val: 0, label: "Not important at all" },
  ];
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const checked = value === opt.val;
        return (
          <label
            key={opt.val ?? "none"}
            className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors ${
              checked
                ? "border-amber-500 bg-amber-50 text-slate-900"
                : "border-slate-200 bg-white hover:border-amber-400"
            }`}
          >
            <input
              type="radio"
              className="h-3 w-3 accent-amber-500"
              checked={checked}
              onChange={() => onChange(opt.val)}
            />
            <span>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function ToolCard({
  href,
  label,
  description,
  className,
}: {
  href: string;
  label: string;
  description: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-slate-200 bg-white px-4 py-6 text-center text-xs shadow-sm transition-colors hover:border-amber-400 hover:bg-amber-50/40"
    >
      <span
        className={`inline-flex rounded-full border border-amber-500/30 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700 ${className}`}
      >
        {label}
      </span>
      <h4 className="mt-3 text-sm font-semibold text-slate-900">{label}</h4>
      <p className="mt-1 text-[11px] text-slate-500">{description}</p>
    </Link>
  );
}
