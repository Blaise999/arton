// app/global-citizen-programs/dominica/page.tsx

import { PassportIndexWidget } from "@/components/PassportIndexWidget";

export const metadata = {
  title: "Dominica Citizenship by Investment | Arton Capital",
  description:
    "Explore Dominica’s Citizenship by Investment program. Gain visa-free access to 134+ countries and secure a second citizenship for your family.",
};

// Real Arton Index figures as per the original widget data-end values
const ARTON_INDEX = {
  overall: 60, // simple average of the 5 factors
  cost: 80,
  speed: 15,
  globalMobility: 75,
  qualityOfLife: 100,
  simplicity: 30,
};

export default function DominicaProgramPage() {
  return (
    <main className="bg-white text-[#333333]">
      {/* HERO */}
      <section
        className="relative flex h-[260px] items-center justify-center text-center md:h-[320px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Dominica.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl px-4">
          <p className="mb-3 text-xs tracking-[0.35em] text-[#f4d6a1] uppercase">
            GLOBAL CITIZEN PROGRAMS
          </p>
          <h1 className="text-3xl font-semibold tracking-wide text-white md:text-4xl">
            DOMINICA
          </h1>
          <p className="mt-2 text-base italic text-[#f3d18d] md:text-lg">
            Citizenship by Investment
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:py-12">
        {/* LEFT COLUMN – PROGRAM DETAILS */}
        <article className="space-y-8">
          {/* Intro */}
          <p className="text-sm leading-relaxed text-[#4A4A4A]">
            Named the Nature Island for its unspoiled natural beauty, Dominica
            is arguably the most breathtaking island in the Caribbean, boasting
            one of the best standards of living in the region.
          </p>

          {/* WHY CHOOSE DOMINICA */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold tracking-[0.18em] text-[#555555]">
              WHY CHOOSE DOMINICA?
            </h2>
            <p className="text-sm leading-relaxed text-[#4A4A4A]">
              Officially the Commonwealth of Dominica, this beautiful island
              boasts pristine sandy beaches, lush green mountains, acres of
              unspoiled tropical rainforests, and some of the best diving and
              hiking in the Caribbean. A diverse blend of English, French,
              African and Carib peoples and cultures, Dominica is a politically
              and economically stable state with the lowest crime rate in the
              region. In addition Dominica recognizes dual citizenship. The
              Economic Citizenship Program offers applicants a wealth of
              benefits and privileges:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-[#4A4A4A]">
              <li>No physical residency requirements.</li>
              <li>Inclusion of dependent children under 30.</li>
              <li>
                Inclusion of unmarried daughters under 30 living with and fully
                supported by the main applicant.
              </li>
              <li>Inclusion of dependent parents and grandparents over 65.</li>
              <li>No education or managerial experience required.</li>
              <li>
                Visa-free travel to 134 countries, including Europe’s Schengen
                zone, the U.K., Hong Kong, Malaysia, Singapore and Turkey.
              </li>
              <li>No taxes for nonresidents.</li>
            </ul>
          </section>

          {/* QUALIFICATIONS */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold tracking-[0.18em] text-[#555555]">
              QUALIFICATIONS
            </h2>
            <p className="text-sm leading-relaxed text-[#4A4A4A]">
              To qualify for citizenship in Dominica, applicants must fulfill
              one of the investment options below in addition to meeting the
              following criteria:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-[#4A4A4A]">
              <li>Be of outstanding character.</li>
              <li>Hold no criminal record.</li>
              <li>Have excellent health.</li>
              <li>Have a basic knowledge of English.</li>
            </ul>
          </section>

          {/* INVESTMENT OPTIONS */}
          <section className="space-y-5">
            <h2 className="text-lg font-semibold tracking-[0.18em] text-[#555555] uppercase">
              Investment Options
            </h2>

            {/* 1. EDF Donation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#666666]">
                1. ECONOMIC DIVERSIFICATION FUND DONATION
              </h3>

              <div className="space-y-3 text-sm leading-relaxed text-[#4A4A4A]">
                <p>
                  <strong>A. Single Applicant</strong>
                  <br />
                  A single applicant is required to make a nonrefundable
                  contribution of <strong>US$200,000</strong> to the Economic
                  Diversification Fund.
                </p>

                <p>
                  <strong>B. Spouse</strong>
                  <br />
                  A nonrefundable contribution of <strong>US$50,000</strong> for
                  a qualified spouse.
                </p>

                <p>
                  <strong>C. Dependents</strong>
                  <br />
                  Any additional dependent other than the spouse of the main
                  applicant who is under the age of 18:{" "}
                  <strong>US$25,000</strong> each.
                  <br />
                  Any additional dependent other than the spouse of the main
                  applicant who is aged 18 and over:{" "}
                  <strong>US$40,000</strong>.
                </p>

                <p>
                  <strong>D. Family Option</strong>
                  <br />
                  A nonrefundable contribution of <strong>US$250,000</strong>{" "}
                  qualifies a family of four including the main applicant, the
                  spouse, and two other dependents other than a dependent
                  sibling.
                </p>
              </div>
            </div>

            {/* 2. Real Estate Option */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#666666]">
                2. REAL ESTATE INVESTMENT
              </h3>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                Applicants may purchase property valued at a minimum of{" "}
                <strong>US$220,000</strong> in a government-approved real estate
                development. The investment must be maintained for a minimum of
                three years. If maintained and sold after five years, the
                property qualifies the next applicant for citizenship as well.
              </p>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                Nationals of the following countries and territories will be
                treated on a case-by-case basis: Afghanistan, Chechnya, Iraq,
                North Korea, Pakistan, Sao Tome Principe, Saudi Arabia, Somalia,
                Sudan, Turkmenistan, Uzbekistan and Yemen.
              </p>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                Exceptions are applicants who have been legal residents in other
                countries for 10 years or more and whose investment funds do not
                originate from one of the above-mentioned countries. For
                case-by-case eligibility, please{" "}
                <a
                  href="https://www.artoncapitals.com/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b47b45] underline underline-offset-2 hover:text-[#8c6135]"
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-5">
            <h2 className="text-lg font-semibold tracking-[0.18em] text-[#555555] uppercase">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-md border border-[#e3e3e3] bg-[#fafafa] p-4">
                <p className="text-sm font-semibold text-[#444444]">
                  Does my Dominica citizenship extend to my family?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  Citizenship can be extended to dependents including your
                  spouse, children, parents and grandparents, as well as spouses
                  of dependent parents and grandparents. The fees will vary
                  according to the number of family members you include in your
                  application for citizenship.
                </p>
              </div>

              <div className="rounded-md border border-[#e3e3e3] bg-[#fafafa] p-4">
                <p className="text-sm font-semibold text-[#444444]">
                  Is Dominica&apos;s real estate option a good investment?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  Yes. Dominica has an emerging eco-tourism sector that
                  continues to receive international acclaim, creating an ideal
                  landscape for real estate investment. With global brands like
                  Hilton and Kempinski in addition to unique boutique resorts,
                  Dominica has been featured in leading publications such as{" "}
                  <em>Travel + Leisure</em>, <em>Caribbean Travel Awards</em>{" "}
                  and <em>Condé Nast Traveller</em>.
                </p>
              </div>

              <div className="rounded-md border border-[#e3e3e3] bg-[#fafafa] p-4">
                <p className="text-sm font-semibold text-[#444444]">
                  Can I sell my investment in Dominica?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  Yes, but you must hold the investment for at least five years
                  before it can be resold to another CIP investor. The
                  investment can be sold to a non-Dominica CIP buyer after three
                  years instead of five years.
                </p>
              </div>

              <div className="rounded-md border border-[#e3e3e3] bg-[#fafafa] p-4">
                <p className="text-sm font-semibold text-[#444444]">
                  Can I renew my Dominica passport if I have already sold the
                  investment property?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  Yes, as long as you held the property for the required number
                  of years after obtaining your citizenship.
                </p>
              </div>

              <div className="rounded-md border border-[#e3e3e3] bg-[#fafafa] p-4">
                <p className="text-sm font-semibold text-[#444444]">
                  Can I apply to Dominica’s program directly without an agent?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4A4A]">
                  No, all applications must go through an authorized agent such
                  as Arton Capital.
                </p>
              </div>
            </div>
          </section>

          {/* NEXT STEPS */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold tracking-[0.18em] text-[#555555] uppercase">
              Next Steps
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-md border border-[#e0e0e0] bg-[#fafafa] p-4 text-center">
                <a
                  href="https://www.artoncapitals.com/tools/program-check/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold uppercase tracking-[0.16em] text-[#b47b45]"
                >
                  Program Check
                </a>
                <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                  Compare the different programs side by side and examine their
                  features.
                </p>
              </div>

              <div className="rounded-md border border-[#e0e0e0] bg-[#fafafa] p-4 text-center">
                <a
                  href="https://www.artoncapitals.com/tools/program-cost/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold uppercase tracking-[0.16em] text-[#b47b45]"
                >
                  Program Cost
                </a>
                <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                  Find out the cost estimates for each program tailored to your
                  family.
                </p>
              </div>

              <div className="rounded-md border border-[#e0e0e0] bg-[#fafafa] p-4 text-center">
                <a
                  href="https://www./tools/program-map/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold uppercase tracking-[0.16em] text-[#b47b45]"
                >
                  Program Map
                </a>
                <p className="mt-2 text-xs leading-relaxed text-[#666666]">
                  See the power of global mobility for each passport.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.artoncapitals.com/become-a-global-citizen/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#b47b45] px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#8d6036]"
              >
                Need more information?&nbsp;
                <span className="normal-case">Contact us</span>
              </a>
            </div>
          </section>
        </article>

        {/* RIGHT COLUMN – INDEX, COUNTRY DATA, BROCHURE, PASSPORT WIDGET */}
        <aside className="space-y-8">
          {/* ARTON INDEX CARD */}
          <section className="rounded-lg border border-[#e1e1e1] bg-[#f7f7f7] p-6">
            <h2 className="text-xs font-semibold tracking-[0.3em] text-[#777777] uppercase">
              Arton Index Score
            </h2>

            <div className="mt-4 flex items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-[#d4b08a] bg-white shadow-sm">
                <span className="text-3xl font-semibold text-[#333333]">
                  {ARTON_INDEX.overall}
                </span>
              </div>
              <dl className="grid flex-1 grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="uppercase tracking-[0.18em] text-[#999999]">
                    Cost
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[#333333]">
                    {ARTON_INDEX.cost}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-[#999999]">
                    Speed
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[#333333]">
                    {ARTON_INDEX.speed}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-[#999999]">
                    Global mobility
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[#333333]">
                    {ARTON_INDEX.globalMobility}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-[#999999]">
                    Quality of life
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[#333333]">
                    {ARTON_INDEX.qualityOfLife}
                  </dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.18em] text-[#999999]">
                    Simplicity
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-[#333333]">
                    {ARTON_INDEX.simplicity}
                  </dd>
                </div>
              </dl>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#666666]">
              Updated yearly, the Arton Index is an overall assessment and
              comparative benchmark of the country and its investment program.
            </p>
          </section>

          {/* MAP + BASIC STATS */}
          <section className="space-y-3 rounded-lg border border-[#e1e1e1] bg-[#fafafa] p-5">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-[#777777] uppercase">
              Dominica at a Glance
            </h3>
            <div className="overflow-hidden rounded-md border border-[#e1e1e1] bg-white">
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-Dominica.png"
                alt="Map of Dominica"
                className="h-auto w-full"
              />
            </div>

            <div className="mt-3 space-y-1 text-xs leading-relaxed text-[#444444]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                Population
              </p>
              <p className="text-sm font-semibold text-[#333333]">73,757</p>
              <p>Population growth: 0.20%</p>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                GDP (per capita)
              </p>
              <p className="text-sm font-semibold text-[#333333]">
                11,400 USD
              </p>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                GDP (purchasing power parity)
              </p>
              <p>812 million USD</p>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                Visa-free countries
              </p>
              <p className="text-sm font-semibold text-[#333333]">137</p>
            </div>
          </section>

          {/* COUNTRY PROFILE */}
          <section className="space-y-3 rounded-lg border border-[#e1e1e1] bg-[#fafafa] p-5 text-xs leading-relaxed text-[#444444]">
            <h3 className="text-xs font-semibold tracking-[0.22em] text-[#777777] uppercase">
              Country Profile
            </h3>

            <div className="space-y-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Location
                </p>
                <p>
                  Caribbean, island between the Caribbean Sea and the North
                  Atlantic Ocean about halfway between Puerto Rico and Trinidad
                  and Tobago.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Capital
                </p>
                <p>Roseau</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Time Difference
                </p>
                <p>UTC-4</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Total Area
                </p>
                <p>751 sq. km.</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Age Demographics
                </p>
                <p>
                  0–14: 21.84%, 15–24: 15.70%, 25–54: 41.97%, 55–64: 9.6%, 65+:
                  10.89%.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Language
                </p>
                <p>English (official), French patois.</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Religions
                </p>
                <p>
                  Roman Catholic: 61.4%, Protestant: 28.6% (includes Evangelical
                  6.7%, Seventh Day Adventist 6.1%, Pentecostal 5.6%, Baptist
                  4.1%, Methodist 3.7%, Church of God 1.2%, Other 1.2%),
                  Rastafarian 1.3%, Jehovah&apos;s Witness 1.2%, Other 0.3%,
                  None 6.1%, Unspecified 1.1%.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Government Type
                </p>
                <p>Parliamentary republic.</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Currency
                </p>
                <p>East Caribbean dollar (XCD), tied to USD.</p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]">
                  Exchange Rate
                </p>
                <p>1 USD = 2.7 XCD.</p>
              </div>
            </div>
          </section>

          {/* BROCHURE DOWNLOAD */}
          <section className="space-y-3 rounded-lg border border-[#e1e1e1] bg-[#fafafa] p-5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#777777] uppercase">
              Download Brochure (PDF)
            </p>
            <a
              href="https://www.artoncapital.com/documents/programs/Arton-Dominica.pdf"
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-md border border-[#e1e1e1] bg-white transition hover:shadow-md"
            >
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Dominica.png"
                alt="Dominica Program Brochure"
                className="h-auto w-full"
              />
            </a>
          </section>

          {/* PASSPORT INDEX WIDGET – REUSABLE COMPONENT */}
          <section className="space-y-4 rounded-lg border border-[#e1e1e1] bg-[#fafafa] p-5">
            <PassportIndexWidget
              defaultPassport="DM"
              className="border-none bg-transparent p-0 text-xs"
            />
          </section>
        </aside>
      </section>

      {/* (Global newsletter/footer strips stay in your layout component) */}
    </main>
  );
}
