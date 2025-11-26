"use client";

import { useMemo, useState } from "react";

type VisaStatus = "visa-free" | "visa-on-arrival" | "e-visa" | "visa-required";

type Country = {
  code: string;
  name: string;
};

const COUNTRIES: Country[] = [
  { code: "CY", name: "Cyprus" },
  { code: "GB", name: "United Kingdom" },
  { code: "GR", name: "Greece" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "NG", name: "Nigeria" },
];

const VISA_STATUS_LABELS: Record<VisaStatus, string> = {
  "visa-free": "Visa-free access",
  "visa-on-arrival": "Visa on arrival",
  "e-visa": "Electronic visa (eVisa) required",
  "visa-required": "Visa required before travel",
};

const VISA_STATUS_BADGE_CLASS: Record<VisaStatus, string> = {
  "visa-free": "bg-green-100 text-green-800 border-green-300",
  "visa-on-arrival": "bg-blue-100 text-blue-800 border-blue-300",
  "e-visa": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "visa-required": "bg-red-100 text-red-800 border-red-300",
};

// Simple demo matrix – extend as you like
const VISA_MATRIX: Record<string, Record<string, VisaStatus>> = {
  CY: {
    GB: "visa-free",
    GR: "visa-free",
    DE: "visa-free",
    FR: "visa-free",
    IT: "visa-free",
    AE: "visa-on-arrival",
    US: "visa-required",
    CA: "visa-required",
    NG: "visa-required",
  },
  GB: {
    CY: "visa-free",
    US: "visa-free",
    CA: "visa-free",
    AE: "visa-on-arrival",
  },
};

function getVisaStatus(from: string, to: string): VisaStatus | null {
  if (!from || !to) return null;
  const fromRow = VISA_MATRIX[from];
  if (!fromRow) return null;
  return fromRow[to] ?? null;
}

function PassportIndexWidget() {
  const [passportOf, setPassportOf] = useState<string>("CY");
  const [goingTo, setGoingTo] = useState<string>("");

  const status = useMemo(
    () => getVisaStatus(passportOf, goingTo),
    [passportOf, goingTo]
  );

  const fromCountry = useMemo(
    () => COUNTRIES.find((c) => c.code === passportOf),
    [passportOf]
  );

  const toCountry = useMemo(
    () => COUNTRIES.find((c) => c.code === goingTo),
    [goingTo]
  );

  return (
    <div className="border border-gray-200 rounded-md p-5 shadow-sm bg-white">
      <h3 className="text-base font-semibold mb-3">
        Passport Index – Quick Check
      </h3>

      <div className="space-y-4">
        {/* Passport of */}
        <div>
          <label
            htmlFor="passport-of"
            className="block text-xs font-semibold mb-1 uppercase tracking-wide text-gray-600"
          >
            Passport of
          </label>
          <select
            id="passport-of"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
            value={passportOf}
            onChange={(e) => setPassportOf(e.target.value)}
          >
            {COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Going to */}
        <div>
          <label
            htmlFor="going-to"
            className="block text-xs font-semibold mb-1 uppercase tracking-wide text-gray-600"
          >
            Going to
          </label>
          <select
            id="going-to"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
          >
            <option value="">Select a destination</option>
            {COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Result */}
        <div className="mt-3 border-t border-gray-200 pt-3 text-sm">
          {!passportOf || !goingTo ? (
            <p className="text-gray-500">
              Select both a passport and a destination to see the visa status.
            </p>
          ) : status ? (
            <div className="space-y-2">
              <div
                className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold ${VISA_STATUS_BADGE_CLASS[status]}`}
              >
                {VISA_STATUS_LABELS[status]}
              </div>
              <p className="text-gray-600">
                Holders of a{" "}
                <strong>{fromCountry?.name ?? passportOf} passport</strong>{" "}
                travelling to{" "}
                <strong>{toCountry?.name ?? goingTo}</strong> generally have the
                above visa status in this demo.
              </p>
              <p className="text-[11px] text-gray-400">
                This is a simplified example. For official and updated rules,
                always check government or official visa sources.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-gray-600">
                No status defined for this route yet in this demo.
              </p>
              <p className="text-[11px] text-gray-400">
                You can extend the <code>VISA_MATRIX</code> in this file to add
                more country pairs, or wire it up to a real API later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CyprusPage() {
  return (
    <main className="bg-white text-[#3d3d3d]">
      {/* HERO */}
      <section
        className="relative h-[260px] md:h-[320px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://www.artoncapital.com/wp-content/uploads/2014/02/Arton-slider-Cyprus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-3xl px-4">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase">
            Global Citizenship Programs
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-wide">
            CYPRUS
          </h1>
          <p className="mt-1 text-sm md:text-base italic text-yellow-300">
            Investment Programme
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* LEFT COLUMN – TEXT */}
        <article className="space-y-8 leading-relaxed text-sm md:text-base">
          <section>
            <p className="mb-4">
              An important hub in the heart of the Mediterranean at the
              crossroads of Europe, Africa and Asia, Cyprus is diverse,
              culturally rich and perfectly placed for working and traveling
              within and beyond the European Union. The economy has been driven
              by activity in shipping, tourism, legal and financial services,
              and has also seen a surge in foreign investment, development, and
              property values.
            </p>
            <p className="text-center text-red-600 text-sm font-medium">
              As of November 1st 2020, the Cyprus Investment Programme has been
              suspended for new applicants. Contact an advisor for the latest
              options and alternatives in the region.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              WHY CHOOSE CYPRUS?
            </h2>
            <p className="mb-3">
              Cyprus boasts a rich and diverse culture, mild Mediterranean
              climate, and a safe and stable setting ideal for raising families.
              Investors also look at Cyprus for business and investment
              purposes, recognizing numerous investment opportunities. Some of
              the key advantages historically associated with the program
              included:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Approval of citizenship application within months.</li>
              <li>Simultaneous submission of residency and citizenship files.</li>
              <li>No language requirements.</li>
              <li>
                Possibility for parents to qualify under certain property
                conditions.
              </li>
              <li>Civil unions eligible to apply.</li>
              <li>No obligation to relinquish current nationality.</li>
              <li>Attractive tax framework and EU free trade access.</li>
              <li>Unrestricted right to live, work and study in Europe.</li>
              <li>Right to own property in an EU member state.</li>
              <li>
                Strategic location bridging the EU, Middle East and North
                Africa.
              </li>
              <li>
                High levels of personal safety in a country under 5 million
                people.
              </li>
              <li>Strong education system and quality healthcare.</li>
              <li>Outstanding holiday and lifestyle destination.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              QUALIFICATIONS
            </h2>
            <p className="mb-3">
              The Cyprus Investment Programme was offered in accordance with
              Cyprus civil registry laws and was one of the faster routes to EU
              residence and citizenship. To qualify, applicants historically
              needed to satisfy one of the investment routes and maintain it for
              several years, alongside meeting core criteria such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Possession of a valid passport.</li>
              <li>No criminal record.</li>
              <li>Valid Schengen visa.</li>
              <li>
                No prior rejection from another EU member state&apos;s
                citizenship program.
              </li>
              <li>
                No frozen assets within EU boundaries due to sanctions or legal
                issues.
              </li>
              <li>
                Holding a residency permit in Cyprus for a minimum qualifying
                period before citizenship approval.
              </li>
              <li>
                Ownership of a permanent private residence in Cyprus with a
                minimum value (historically around EUR 500,000 + VAT).
              </li>
              <li>
                Compliance with minimum total investment amounts depending on
                the chosen option.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              INVESTMENT OPTIONS (HISTORICAL)
            </h2>

            <h3 className="font-semibold mb-2">Donations</h3>
            <p className="mb-3">
              In addition to the main investment, applicants were required to
              make defined contributions to entities such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Housing schemes via the Cyprus Land Development Corporation.
              </li>
              <li>
                Research, innovation or energy-related funds (or similar
                qualifying bodies).
              </li>
            </ul>

            <h3 className="font-semibold mb-2">
              1. Real Estate, Land Development &amp; Infrastructure
            </h3>
            <p className="mb-4">
              Investing in residential or commercial real estate, land
              development or infrastructure projects, subject to a minimum
              investment threshold.
            </p>

            <h3 className="font-semibold mb-2">
              2. Cypriot Companies or Businesses
            </h3>
            <p className="mb-4">
              Purchase or participation in companies established and operating
              in Cyprus, often requiring a minimum number of local or EU
              employees and proof of substantial business activity.
            </p>

            <h3 className="font-semibold mb-2">
              3. Alternative Investment Funds &amp; Financial Assets
            </h3>
            <p className="mb-4">
              Subscription to units in Alternative Investment Funds (AIFs) or
              similar regulated vehicles that invest in Cyprus-based assets,
              within defined limits.
            </p>

            <h3 className="font-semibold mb-2">4. Combination Investment</h3>
            <p>
              Applicants could also combine elements of the above routes, as
              long as the total investment met or exceeded the prescribed
              minimum.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              NEXT STEPS
            </h2>
            <p className="mb-3">
              While the original Cyprus Investment Programme has been suspended,
              investors interested in European residence or citizenship by
              investment can explore alternative options in the EU and wider
              region.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Compare residency and citizenship pathways in multiple
                jurisdictions.
              </li>
              <li>
                Model total investment, fees and timelines tailored to your
                family.
              </li>
              <li>
                Review global mobility options based on current passport and
                target destinations.
              </li>
            </ul>
          </section>
        </article>

        {/* RIGHT COLUMN – SIDEBAR */}
        <aside className="space-y-8 text-sm">
          {/* Arton Index-esque summary */}
          <div className="border border-gray-200 rounded-md p-5 shadow-sm bg-white">
            <h2 className="text-base font-semibold mb-3">ARTON INDEX SCORE</h2>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-24 h-24 rounded-full border-4 border-gray-200 flex items-center justify-center">
                <span className="text-xl font-semibold">0</span>
              </div>
              <ul className="text-xs space-y-1">
                <li>
                  <span className="font-semibold">Cost:</span> 0
                </li>
                <li>
                  <span className="font-semibold">Speed:</span> 0
                </li>
                <li>
                  <span className="font-semibold">Global mobility:</span> 0
                </li>
                <li>
                  <span className="font-semibold">Quality of life:</span> 0
                </li>
                <li>
                  <span className="font-semibold">Simplicity:</span> 0
                </li>
              </ul>
            </div>

            <p className="text-xs text-gray-500">
              Updated annually, the Arton Index is a comparative assessment of a
              country and its investment program. Values shown here are
              illustrative; use an official tool for live scoring.
            </p>
          </div>

          {/* Map + country stats */}
          <div className="border border-gray-200 rounded-md p-5 shadow-sm bg-white">
            <div className="flex justify-center mb-4">
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2014/02/map-Cyprus.png"
                alt="Cyprus"
                className="max-w-full h-auto"
              />
            </div>

            <div className="space-y-1 mb-4">
              <p className="text-lg font-semibold">1,205,575</p>
              <p>Population Growth: 1.38%</p>
              <p className="text-lg font-semibold">34,400 USD</p>
              <p>GDP (per capita)</p>
              <p>GDP (purchasing power parity): 29.26 billion USD</p>
              <p className="text-lg font-semibold">170</p>
              <p>Visa-free countries (approximate historical order)</p>
            </div>

            <hr className="my-4" />

            <div className="space-y-2">
              <div>
                <p className="font-semibold text-xs">LOCATION</p>
                <p>South Eastern Europe, island in the Mediterranean Sea.</p>
              </div>

              <div>
                <p className="font-semibold text-xs">CAPITAL</p>
                <p>Nicosia</p>
              </div>

              <div>
                <p className="font-semibold text-xs">TIME DIFFERENCE</p>
                <p>UTC+2</p>
              </div>

              <div>
                <p className="font-semibold text-xs">TOTAL AREA</p>
                <p>9,251 sq. km</p>
              </div>

              <div>
                <p className="font-semibold text-xs">LANGUAGES</p>
                <p>
                  Greek (official), Turkish (official), plus English and other
                  languages spoken by communities and expatriates.
                </p>
              </div>

              <div>
                <p className="font-semibold text-xs">GOVERNMENT TYPE</p>
                <p>Republic of Cyprus: presidential democracy.</p>
              </div>

              <div>
                <p className="font-semibold text-xs">CURRENCY</p>
                <p>Euro (EUR)</p>
              </div>
            </div>
          </div>

          {/* WORKING PASSPORT INDEX WIDGET (in same file) */}
          <PassportIndexWidget />
        </aside>
      </section>
    </main>
  );
}
