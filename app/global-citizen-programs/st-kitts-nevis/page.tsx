// app/global-citizen-programs/st-kitts-nevis/page.tsx

import type { Metadata } from "next";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";

export const metadata: Metadata = {
  title: "St. Kitts & Nevis Citizenship by Investment Program",
  description:
    "Invest in St. Kitts & Nevis for instant global mobility. No residence required, enjoy tax-free income and visa-free access to 148+ countries.",
};

const faqs: { question: string; answer: string }[] = [
  {
    question:
      "ARE THERE ANY RESIDENCY REQUIREMENTS TO APPLY FOR A SAINT KITTS AND NEVIS PASSPORT?",
    answer:
      "There are no requirements to visit Saint Kitts and Nevis during the application process, as well as no residency requirements to hold a passport of Saint Kitts and Nevis.",
  },
  {
    question: "HOW LONG IS MY SAINT KITTS AND NEVIS PASSPORT VALID?",
    answer:
      "Upon approval, your issued Saint Kitts and Nevis passport is valid for 10 years and can be renewed indefinitely. For children under the age of 16, passports are valid for 5 years.",
  },
  {
    question:
      "HOW LONG DOES IT TAKE TO CLOSE A REAL ESTATE PROPERTY DEAL IN SAINT KITTS AND NEVIS?",
    answer:
      "Closing an investment property in Saint Kitts and Nevis takes place once approval in principle is granted and the passport is issued. This should take no longer than three to four months. At that time, a Certificate of Title is issued for the property. The Certificate of Occupancy will be granted when the keys are handed over.",
  },
  {
    question: "WILL MY UNBORN CHILD BE ELIGIBLE FOR SAINT KITTS AND NEVIS CITIZENSHIP?",
    answer:
      "Yes, if both mother and father of the child are citizens of Saint Kitts and Nevis, the child will automatically inherit the citizenship.",
  },
  {
    question:
      "CAN TWO OR MORE APPLICANTS APPLY FOR SAINT KITTS AND NEVIS CITIZENSHIP TOGETHER?",
    answer:
      "Yes, two or more investors can apply for Saint Kitts and Nevis citizenship together by purchasing a pre-approved real estate project, which may include hotel shares, villas, and condominium units; provided each main applicant contributes the minimum investment of US$200,000 (resalable after 7 years) or US$400,000 (resalable after 5 years).",
  },
];

const indexMetrics = [
   { key: "cost", label: "Arton Index Score", value: 83 },
  { key: "cost", label: "Cost", value: 20 },
  { key: "speed", label: "Speed", value: 15 },
  { key: "mobility", label: "Global mobility", value: 13 },
  { key: "life", label: "Quality of life", value: 15 },
  { key: "simplicity", label: "Simplicity", value: 20 },
];

const programTools = [
  {
    name: "Program Check",
    href: "https://www.artoncapitals.com/tools/program-check/",
    description:
      "Compare the different programs side by side and examine their features.",
  },
  {
    name: "Program Cost",
    href: "https://www.artoncapitals.com/tools/program-cost/",
    description: "Find out the cost estimates for each program tailored to your family.",
  },
  {
    name: "Program Map",
    href: "https://www.artoncapitals.com/tools/program-map/",
    description: "See the power of global mobility for each passport.",
  },
];

export default function StKittsNevisProgramPage() {
  return (
    <main className="bg-[#f7f3ec] text-[#333333]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://www.artoncapital.com/wp-content/uploads/2013/11/Arton-slider-StKittsNevis.jpg"
            alt="St. Kitts & Nevis coastline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center text-white md:py-24">
          <h1 className="text-[1.8rem] tracking-[0.3em] font-semibold md:text-[2.1rem]">
            ST. KITTS &amp; NEVIS
          </h1>
          <p className="mt-3 text-base italic tracking-[0.18em] text-[#f3c27d] md:text-lg">
            Citizenship by Investment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.5fr)] xl:gap-16">
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* Intro + Why choose */}
            <section className="space-y-6">
              <p className="text-[15px] leading-relaxed text-[#444444]">
                With its breathtaking natural beauty, warm skies and white sandy beaches,
                St. Kitts &amp; Nevis is one of the most stunning spots in the Caribbean.
                With the country’s CIP program, investors have the opportunity to wake up
                there every morning in as little as a few months.
              </p>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold tracking-wide text-[#3d3d3d]">
                  WHY CHOOSE ST. KITTS &amp; NEVIS?
                </h2>
                <p className="text-[15px] leading-relaxed text-[#444444]">
                  This beautiful two-island nation is blessed with tropical temperatures,
                  clear blue waters and a bustling trade and tourism economy. It is
                  well-connected by direct flights to and from Europe and the U.S., and
                  offers residents and citizens sought-after advantages, such as dual
                  citizenship and tax-free worldwide income. As one of the
                  longest-established programs of its kind, the St. Kitts &amp; Nevis
                  Citizenship by Investment Program offers applicants a host of unique
                  benefits:
                </p>
                <ul className="ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-[#444444]">
                  <li>Fast processing within four months.</li>
                  <li>
                    Inclusion of dependent children under 25 years and dependent parents or
                    grandparents over 55 years.
                  </li>
                  <li>No physical residency requirements.</li>
                  <li>
                    No requirement to travel to St. Kitts &amp; Nevis during the application
                    process.
                  </li>
                  <li>No interview, education or managerial experience required.</li>
                  <li>
                    Visa-free travel to 148 countries, including Schengen member states, the
                    U.K., Hong Kong, Singapore and more.
                  </li>
                  <li>No tax on worldwide income.</li>
                  <li>
                    St. Kitts &amp; Nevis recognizes dual citizenship, so investors can still
                    benefit from their current passports.
                  </li>
                </ul>
              </div>
            </section>

            {/* Qualifications */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-wide text-[#3d3d3d]">
                Qualifications
              </h2>
              <p className="text-[15px] leading-relaxed text-[#444444]">
                The St. Kitts &amp; Nevis (St. Christopher &amp; Nevis) Citizenship by
                Investment Program was established in 1984 under the regulations of the
                1984 Citizenship Act, Part II, Section 3 (5), which makes it the oldest
                citizenship by investment program in the world.
              </p>
              <p className="text-[15px] leading-relaxed text-[#444444]">
                To qualify for citizenship in St. Kitts &amp; Nevis, applicants must fulfill
                one of the investment requirements below in addition to the following
                criteria:
              </p>
              <ul className="ml-5 list-disc space-y-2 text-[15px] leading-relaxed text-[#444444]">
                <li>Be of outstanding character.</li>
                <li>Hold no criminal record.</li>
                <li>Have excellent health.</li>
                <li>Have a high personal net worth.</li>
              </ul>
            </section>

            {/* Investment options */}
            <section className="space-y-6">
              <h2 className="text-lg font-semibold tracking-wide text-[#3d3d3d]">
                INVESTMENT OPTIONS
              </h2>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#3d3d3d]">
                  1. Sustainable Island State Contribution
                </h3>
                <p className="text-[15px] leading-relaxed text-[#444444]">
                  The Sustainable Island State Contribution is open for donations with the
                  following thresholds:
                </p>
                <ul className="ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-[#444444]">
                  <li>US$250,000: Main applicant.</li>
                  <li>US$250,000: Main applicant and Spouse.</li>
                  <li>US$250,000: Main applicant and one dependent.</li>
                  <li>
                    US$250,000: Main applicant, Spouse and one or two dependents.
                  </li>
                  <li>
                    US$250,000: Main applicant, and up to three qualifying dependents.
                  </li>
                  <li>US$25,000: Per additional dependent under 18 years of age.</li>
                  <li>US$50,000: Per additional dependent aged 18 years or over.</li>
                </ul>
                <p className="mt-3 text-[15px] leading-relaxed text-[#444444]">
                  In addition, due diligence fees are as follows:
                </p>
                <ul className="ml-5 list-disc space-y-1.5 text-[15px] leading-relaxed text-[#444444]">
                  <li>US$10,000: Due diligence of main applicant.</li>
                  <li>US$7,500: Due diligence for dependent over 16.</li>
                  <li>US$4,000: Due diligence for financial sponsor.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold text-[#3d3d3d]">
                  2. Real Estate Investments
                </h3>
                <p className="text-[15px] leading-relaxed text-[#444444]">
                  Applicants may purchase government-approved property valued at a minimum
                  of US$325,000*. The investment must be maintained for a minimum of seven
                  years.
                </p>
                <p className="text-[15px] leading-relaxed text-[#444444]">
                  *Investors are required to pay additional applicable taxes and fees.
                </p>
                <p className="text-[15px] leading-relaxed text-[#444444]">
                  Arton handpicks prestigious projects to meet our clients’ expectations.
                  Please contact us for available options.
                </p>
              </div>
            </section>

            {/* FAQ / Accordion */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-wide text-[#3d3d3d]">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-[#e0d6c6] rounded-xl border border-[#e0d6c6] bg-white/90">
                {faqs.map((faq, idx) => (
                  <details
                    key={faq.question}
                    className="group px-5 py-4"
                    {...(idx === 0 ? { open: true } : {})}
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-3 text-sm font-semibold uppercase tracking-wide text-[#3d3d3d]">
                      <span>{faq.question}</span>
                      <span className="mt-0.5 text-xs text-[#b18a5a] group-open:hidden">
                        +
                      </span>
                      <span className="mt-0.5 hidden text-xs text-[#b18a5a] group-open:inline">
                        −
                      </span>
                    </summary>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#555555]">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Next steps / Tools */}
            <section className="space-y-4">
              <h3 className="text-base font-semibold tracking-wide text-[#3d3d3d]">
                NEXT STEPS:
              </h3>

              <div className="grid gap-4 md:grid-cols-3">
                {programTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center rounded-xl border border-[#e2d7c5] bg-white/90 px-4 py-5 text-center shadow-sm"
                  >
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#b18a5a]"
                    >
                      {tool.name}
                    </a>
                    <h4 className="mt-2 text-sm font-semibold text-[#3d3d3d]">
                      <a href={tool.href} target="_blank" rel="noreferrer">
                        {tool.name}
                      </a>
                    </h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#666666]">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl bg-[#f0e5d4] px-4 py-3 text-sm">
                <span className="font-medium text-[#3d3d3d]">
                  Need more information?
                </span>
                <a
                  href="https://www.artoncapitals.com/become-a-global-citizen/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#cc9966] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black"
                >
                  Contact us
                </a>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <aside className="space-y-8 lg:pt-2">
            {/* Arton Index score */}
            <section className="rounded-2xl border border-[#e2d7c5] bg-white/95 p-5 shadow-sm">
              <h2 className="text-sm font-semibold tracking-[0.18em] text-[#3d3d3d]">
                ARTON INDEX SCORE
              </h2>

              <div className="mt-4 rounded-xl bg-[#f7f1e6] p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7d6550]">
                  Program profile
                </p>
                <div className="mt-3 space-y-3">
                  {indexMetrics.map((metric) => (
                    <div
                      key={metric.key}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#777777]">
                        {metric.label}
                      </span>
                      <div className="flex w-40 items-center gap-2">
                        <div className="h-1.5 flex-1 rounded-full bg-[#e3d7c5]">
                          <div
                            className="h-1.5 rounded-full bg-[#cc9966]"
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-[#5c4631]">
                          {metric.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-[#666666]">
                  Updated yearly, the Arton Index is an overall assessment and comparative
                  benchmark of the country and its investment program.
                </p>
              </div>
            </section>

            {/* Map + country data */}
            <section className="rounded-2xl border border-[#e2d7c5] bg-white/95 p-5 shadow-sm">
              <div className="flex justify-center">
                <img
                  src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-StKittsNevis.png"
                  alt="Map of St. Kitts & Nevis"
                  className="max-h-56 w-auto"
                />
              </div>

              <div className="mt-4 space-y-2 border-t border-[#e6ddcf] pt-4 text-[13px] leading-relaxed text-[#444444]">
                <p className="text-sm font-semibold text-[#3d3d3d]">KEY FACTS</p>

                <p className="mt-1 text-[13px] font-semibold text-[#111111]">
                  52,329
                </p>
                <p>Population Growth: 0.75%</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  25,500 USD
                </p>
                <p>GDP (per capita)</p>
                <p>GDP (purchasing power parity)</p>
                <p>1.427 billion USD</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">149</p>
                <p>Visa free countries</p>
              </div>

              <div className="mt-4 space-y-2 border-t border-[#e6ddcf] pt-4 text-[13px] leading-relaxed text-[#444444]">
                <p className="text-[13px] font-semibold text-[#111111]">LOCATION</p>
                <p>
                  Caribbean, islands in the Caribbean Sea, about one-third of the way from
                  Puerto Rico to Trinidad and Tobago
                </p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">CAPITAL</p>
                <p>Basseterre</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  TIME DIFFERENCE
                </p>
                <p>UTC-4</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  TOTAL AREA
                </p>
                <p>261 sq. km.</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  AGE DEMOGRAPHICS
                </p>
                <p>
                  0-14: 20.61%, 15-24: 14.82%, 25-54: 44.85%, 55-64: 11.38%, 65+: 8.34%
                </p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  LANGUAGE
                </p>
                <p>English (official)</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  RELIGIONS
                </p>
                <p>Anglican, Other Protestant, Roman Catholic</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  GOVERNMENT TYPE
                </p>
                <p>
                  Federal parliamentary democracy (National Assembly) under a
                  constitutional monarchy and Commonwealth realm
                </p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  CURRENCY
                </p>
                <p>East Caribbean dollars (XCD), tied to USD</p>

                <p className="mt-2 text-[13px] font-semibold text-[#111111]">
                  EXCHANGE RATE
                </p>
                <p>1 USD = 2.7 XCD</p>
              </div>
            </section>

            {/* Brochure card */}
            <section className="rounded-2xl border border-[#e2d7c5] bg-white/95 p-5 shadow-sm">
              <p className="text-sm font-semibold tracking-wide text-[#3d3d3d]">
                DOWNLOAD BROCHURE (PDF)
              </p>
              <div className="mt-4 flex flex-col items-center">
                <a
                  href="https://www.artoncapital.com/documents/programs/Arton-StKitts.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex flex-col items-center"
                >
                  <img
                    src="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-StKitts.png"
                    alt="St. Kitts & Nevis program brochure cover"
                    className="max-w-[220px] rounded-lg border border-[#e2d7c5] shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md"
                  />
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#b18a5a]">
                    Get download link
                  </span>
                </a>
              </div>
            </section>

            {/* Passport Index widget wrapper */}
            <section className="rounded-2xl border border-[#e2d7c5] bg-white/95 p-5 shadow-sm">
              <p className="mb-3 text-sm font-semibold tracking-wide text-[#3d3d3d]">
                Passport Index
              </p>
              <PassportIndexWidget />
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
