// app/global-citizen-programs/latvia/page.tsx

import Link from "next/link";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";

export const metadata = {
  title: "Latvia Residency by Investment | EU Access in 3 Months",
  description:
    "Apply for Latvia Residency by Investment. Gain EU access, travel visa-free in Schengen, include family & enjoy fast 2–3 month approval. Start now!",
};

export default function LatviaResidencyByInvestmentPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#3D3D3D]">
      {/* Hero / Banner */}
      <section className="relative h-[260px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.artoncapital.com/wp-content/uploads/2025/04/Arton-slider-Latvia.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-semibold tracking-[0.35em] text-white leading-[1.4]">
            LATVIA
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#cc9966] italic">
            Residency by Investment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          {/* LEFT: Program Content */}
          <article className="space-y-6 bg-white px-6 py-6 shadow-sm lg:px-8 lg:py-8">
            <p className="text-[15px] leading-relaxed">
              Latvia, widely recognized for its political stability, robust
              economy, and high quality of life, serves as an appealing gateway
              to the Schengen area and the European Union. With its strategic
              location, business-friendly environment, and rich cultural
              heritage, the country provides an excellent opportunity for
              individuals and investors seeking access to the broader European
              market.
            </p>

            <h3 className="mt-2 text-lg font-semibold tracking-wide text-[#3D3D3D]">
              WHY CHOOSE LATVIA?
            </h3>
            <p className="text-[15px] leading-relaxed">
              Latvia offers the most affordable residency by investment program
              in the European Union, providing visa-free access to all Schengen
              countries. Known for its strong political and social stability,
              high quality of life, and ranking as the 6th safest country in the
              world, Latvia presents a compelling option for those seeking
              secure and strategic European residency. Other benefits include
              the following:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px]">
              <li>
                Residency is granted within 2–3 months and is renewable for a
                period of 5 years (extendable for an additional 5 years if the
                investment is maintained);
              </li>
              <li>
                Visa-free travel across the Schengen Area (90 days stay within
                any 180-day period);
              </li>
              <li>Only one visit per year required to maintain residency;</li>
              <li>Ability to include spouse and children in the same application;</li>
              <li>
                Permanent residence available, subject to additional
                requirements;
              </li>
              <li>
                High living standards with modern infrastructure, quality
                healthcare, and education;
              </li>
              <li>
                Strategic location with easy access to Europe and neighboring
                markets;
              </li>
              <li>
                Business-friendly environment with low taxes and a growing
                economy.
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold tracking-wide text-[#3D3D3D]">
              Latvia Residency by Investment Program Qualifications
            </h3>
            <p className="text-[15px] leading-relaxed">
              To qualify for the Latvia Residency by Investment program,
              applicants must meet the following criteria, as per the
              Immigration Law of Latvia (Art. 23, para 1, clause 28,
              subparagraph C):
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px]">
              <li>Applicants must be at least 18 years of age;</li>
              <li>A clean criminal record is required;</li>
              <li>
                Proof of legally sourced funds amounting to a minimum of
                €100,000 is mandatory;
              </li>
              <li>Must be a third-country national (i.e., not an EU citizen);</li>
              <li>Only legally married spouses are eligible for inclusion;</li>
              <li>
                Dependent children must be under 18 years of age at the time of
                application;
              </li>
              <li>No nationality restrictions apply.</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold tracking-wide text-[#3D3D3D]">
              Investment Options
            </h3>
            <p className="text-[15px] leading-relaxed">
              Latvia’s Residency by Investment Program offers flexible routes to
              support economic growth and attract foreign investment. Eligible
              investors (and their families) may qualify by choosing one of the
              following options:
            </p>

            <h4 className="mt-2 text-base font-semibold tracking-wide text-[#3D3D3D]">
              1. Share-Capital Investment
            </h4>
            <p className="text-[15px] leading-relaxed">
              Invest €100,000 in the share capital of an established Latvian
              company. Investors receive Category B shares equivalent to their
              investment amount and gain minority-shareholder status. The
              investment must be maintained for a minimum of 5 years after
              registration.
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px]">
              <li>
                <span className="font-semibold">Permit Term:</span> 5-year
                residence permit (renewable for another 5 years upon maintenance
                of the investment)
              </li>
              <li>
                <span className="font-semibold">Inclusions:</span> Main
                applicant may include spouse and children under 18
              </li>
            </ul>

            <h4 className="mt-3 text-base font-semibold tracking-wide text-[#3D3D3D]">
              2. State Budget Donation
            </h4>
            <p className="text-[15px] leading-relaxed">
              Make a one-time donation of €10,000 directly to the Latvian state
              budget. No ongoing maintenance is required beyond the initial
              contribution.
            </p>

            <h3 className="mt-4 text-lg font-semibold tracking-wide text-[#3D3D3D]">
              Capital Company Requirements for Latvia’s Residency by Investment
              Program
            </h3>
            <p className="text-[15px] leading-relaxed">
              To qualify for Latvian residency through a capital company, the
              following conditions must be met:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px]">
              <li>
                Guaranteed buy-back option on the €100,000 investment amount
                after the 5-year mandatory period;
              </li>
              <li>Minimum of 50 employees;</li>
              <li>Annual turnover of at least €10 million;</li>
              <li>Tax compliance of no less than €100,000 per year;</li>
              <li>
                Must be a Latvian establishment with legitimate business
                activity and financial viability.
              </li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold tracking-wide text-[#3D3D3D]">
              Application Fees
            </h3>
            <p className="text-[15px] leading-relaxed">
              The fees associated with the application process for Latvia
              include legal representation, government fees, processing fees,
              due diligence fees, and address registration. Arton’s service fees
              may vary depending on the complexity of the file and the number of
              applicants. For a personalized and detailed quotation, you are
              encouraged to contact Arton directly.
            </p>
            <p className="text-[15px] leading-relaxed">
              In addition to the above, investors should also plan for expenses
              related to document attestation and authentication, visa and
              permit applications outside of Latvia, as well as travel and
              accommodation during the stay in Latvia prior to the acquisition
              and transfer of property.
            </p>
            <p className="text-[15px] leading-relaxed">
              Please note that all fees charged by the Latvian authorities and
              by Arton are subject to change.
            </p>

            {/* NEXT STEPS */}
            <div className="mt-8 border-t border-[#e3e3e3] pt-6">
              <h4 className="text-base font-semibold tracking-wide text-[#3D3D3D]">
                NEXT STEPS:
              </h4>

              <div className="mt-4 grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center rounded-md border border-[#e1e1e1] bg-[#fafafa] px-4 py-5 text-center">
                  <Link
                    href="https://www.artoncapitals.com/tools/program-check/"
                    target="_blank"
                    className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cc9966]"
                  >
                    Program Check
                  </Link>
                  <p className="mt-2 text-xs text-[#848688]">
                    Compare the different programs side by side and examine
                    their features.
                  </p>
                </div>

                <div className="flex flex-col items-center rounded-md border border-[#e1e1e1] bg-[#fafafa] px-4 py-5 text-center">
                  <Link
                    href="https://www.artoncapitals.com/tools/program-cost/"
                    target="_blank"
                    className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cc9966]"
                  >
                    Program Cost
                  </Link>
                  <p className="mt-2 text-xs text-[#848688]">
                    Find out the cost estimates for each program tailored to
                    your family.
                  </p>
                </div>

                <div className="flex flex-col items-center rounded-md border border-[#e1e1e1] bg-[#fafafa] px-4 py-5 text-center">
                  <Link
                    href="https://www.artoncapitals.com/tools/program-map/"
                    target="_blank"
                    className="text-sm font-semibold uppercase tracking-[0.16em] text-[#cc9966]"
                  >
                    Program Map
                  </Link>
                  <p className="mt-2 text-xs text-[#848688]">
                    See the power of global mobility for each passport.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-2 text-center text-sm text-[#555] md:flex-row md:justify-between">
                <p className="mb-2 md:mb-0">Need more information?</p>
                <Link
                  href="https://www.artoncapitals.com/become-a-global-citizen/"
                  target="_blank"
                  className="inline-flex items-center justify-center border border-[#cc9966] bg-[#cc9966] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black hover:border-black"
                >
                  Contact us.
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT: Index / Map / Stats / Brochure / Passport Index */}
          <aside className="space-y-8">
            {/* ARTON INDEX SCORE */}
            <section className="rounded-md bg-white px-6 py-6 shadow-sm">
              <h2 className="text-base font-semibold uppercase tracking-[0.18em] text-[#3D3D3D]">
                ARTON INDEX SCORE
              </h2>

              {/* Static concentric “index” rings */}
              <div className="mt-4 flex flex-col items-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  {/* Outer (simplicity bg) */}
                  <div className="absolute inset-0 rounded-full border-[10px] border-[#E9E9E9]" />
                  {/* Simplicity (dark) */}
                  <div className="absolute inset-1.5 rounded-full border-[10px] border-[#3D3D3D]" />
                  {/* Quality of life */}
                  <div className="absolute inset-5 rounded-full border-[10px] border-[#848486]" />
                  {/* Global mobility */}
                  <div className="absolute inset-9 rounded-full border-[10px] border-[#DA9C5F]" />
                  {/* Speed */}
                  <div className="absolute inset-[46px] rounded-full border-[10px] border-[#C0C1C3]" />
                  {/* Cost */}
                  <div className="absolute inset-[62px] rounded-full border-[10px] border-[#E6BD9D]" />
                  <span className="relative text-3xl font-semibold text-[#3D3D3D]">
                    0
                  </span>
                </div>
              </div>

              <ul className="mt-5 grid w-full gap-3 text-xs uppercase tracking-[0.16em] text-[#555]">
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#E6BD9D]" />
                    cost
                  </span>
                  <strong>0</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#C0C1C3]" />
                    speed
                  </span>
                  <strong>0</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#DA9C5F]" />
                    global mobility
                  </span>
                  <strong>0</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#848486]" />
                    quality of life
                  </span>
                  <strong>0</strong>
                </li>
                <li className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#3D3D3D]" />
                    simplicity
                  </span>
                  <strong>0</strong>
                </li>
              </ul>

              <hr className="my-5 border-[#e1e1e1]" />

              <p className="text-center text-[13px] leading-relaxed text-[#555]">
                Updated yearly, the Arton Index is an overall assessment and
                comparative benchmark of the country and its investment program.
              </p>
            </section>

            {/* MAP + COUNTRY NUMBERS */}
            <section className="rounded-md bg-white px-6 py-6 shadow-sm">
              <div className="flex justify-center">
                <img
                  src="https://www.artoncapital.com/wp-content/uploads/2025/04/map-Latvia.png"
                  alt="Latvia map"
                  className="max-w-[220px]"
                />
              </div>

              <div className="mt-5 space-y-1 bg-[#f8f3ec] px-4 py-4 text-[13px] text-[#3D3D3D]">
                <p className="text-xl font-semibold">1,858,259</p>
                <p>Population Growth: 1.07%</p>
                <p className="mt-2 text-xl font-semibold">41,730 USD</p>
                <p>GDP (per capita)</p>
                <p>GDP (purchasing power parity)</p>
                <p>81.79 billion USD</p>
                <p className="mt-2 text-xl font-semibold">172</p>
                <p>Visa free countries</p>
              </div>

              <hr className="my-5 border-[#e1e1e1]" />

              <div className="space-y-2 text-[13px] text-[#3D3D3D]">
                <p className="font-semibold">LOCATION</p>
                <p>Northern Europe</p>

                <p className="mt-2 font-semibold">CAPITAL</p>
                <p>Riga</p>

                <p className="mt-2 font-semibold">DIFFERENCE</p>
                <p>UTC+2</p>

                <p className="mt-2 font-semibold">TOTAL AREA</p>
                <p>64,589 sq. km.</p>

                <p className="mt-2 font-semibold">AGE DEMOGRAPHICS</p>
                <p>0-14: 14.7%, 15-64: 63%, 65+: 22.2%</p>

                <p className="mt-2 font-semibold">LANGUAGE</p>
                <p>
                  Latvian: 56.3%, Russian: 33.8%, Unspecified: 9.4%, Other:
                  0.6%
                </p>

                <p className="mt-2 font-semibold">RELIGIONS</p>
                <p>
                  Lutheran: 36.2%, Roman Catholic: 19.5%, Orthodox: 19.1%, Other
                  Christians: 1.6%, Unspecified: 9.4%, Other: 0.1%
                </p>

                <p className="mt-2 font-semibold">GOVERNMENT TYPE</p>
                <p>Parliamentary republic</p>

                <p className="mt-2 font-semibold">CURRENCY</p>
                <p>Euro</p>

                <p className="mt-2 font-semibold">EXCHANGE RATE</p>
                <p>1 USD = 0.85 EUR</p>
              </div>
            </section>

            {/* DOWNLOAD BROCHURE */}
            <section className="rounded-md bg-white px-6 py-6 shadow-sm">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D]">
                DOWNLOAD BROCHURE (PDF)
              </p>
              <div className="mt-4 flex justify-start">
                <Link
                  href="https://www.artoncapital.com/documents/programs/Arton-Latvia.pdf"
                  target="_blank"
                  className="inline-block"
                >
                  <img
                    src="https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Latvia-cover.jpg"
                    alt="Program brochure for Latvia"
                    className="w-[180px] rounded-sm border border-[#ddd] shadow-sm transition hover:shadow-md"
                  />
                </Link>
              </div>
            </section>

            {/* PASSPORT INDEX WIDGET (powered widget component) */}
            <section className="rounded-md bg-white px-6 py-6 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <PassportIndexWidget />
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
