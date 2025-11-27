// app/global-citizen-programs/usa-eb-5/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";

const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/11/Arton-slider-USA.jpg";

const MAP_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/11/map-USA.png";

export const metadata: Metadata = {
  title: "USA Residency & Citizenship by Investment Guide",
  description:
    "Secure your US residency through investment. Learn about the EB-5 program, eligibility criteria, and benefits. Start your journey today!",
};

export default function UsaEb5Page() {
  return (
    <main className="min-h-screen bg-white pt-16 text-slate-900 md:pt-20">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-black">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="USA EB-5 — Residency & Citizenship by Investment"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-20 md:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            United States of America
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Residency &amp; Citizenship by Investment
          </h1>
          <p className="max-w-2xl text-sm text-white/80 md:text-base">
            Live the American Dream and move to the U.S., a cultural melting
            pot with a thriving economy, a wealth of opportunities, and one of
            the highest standards of living anywhere on the globe.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] lg:items-start">
          {/* Left – Main article */}
          <article className="space-y-8 text-sm leading-relaxed text-slate-700 md:text-[15px]">
            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-900">
                Why Choose the US?
              </h2>
              <p className="mt-4">
                Known the world over as the land of opportunity, the United
                States of America boasts a rich and diverse culture, one of the
                strongest currencies in the world, and one of the most
                sought-after passports on the planet. Through the USA EB-5
                Immigrant Investor Program, investors can enjoy a host of
                exclusive benefits:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>No language skills required.</li>
                <li>No minimum education required.</li>
                <li>No business or managerial experience required.</li>
                <li>
                  Investment capital can come from a gift, inheritance, business
                  ownership or any other lawful activity.
                </li>
                <li>No obligation to live in the area of investment.</li>
                <li>
                  The opportunity to live, work and study anywhere in the U.S.
                  and benefit from lower tuition fees.
                </li>
                <li>Inclusion of dependent children under the age of 21.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-900">
                Qualifications
              </h2>
              <p className="mt-4">
                To qualify for the program applicants must fulfill one of the
                investment options below in addition to meeting the following
                criteria:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Be at least 21 years of age.</li>
                <li>Show legal source of assets and funds.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-900">
                Investment Options
              </h2>
              <p className="mt-4">
                The USA EB-5 Immigrant Investor Program comprises two investment
                options.
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-900">
                    1. Creation of a New U.S. Enterprise
                  </h3>
                  <p className="mt-3">
                    To be eligible for this investment option, applicants must
                    meet the following criteria:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      Make an investment of US$1.8 million in a new commercial
                      enterprise or US$900,000 if that enterprise is in a
                      targeted commercial area, including rural areas or areas
                      with unemployment of at least 150 percent that of the
                      national average.
                    </li>
                    <li>
                      Create full-time employment for at least 10 qualified U.S.
                      workers who must be direct employees of the commercial
                      enterprise.
                    </li>
                    <li>
                      Actively manage the day-to-day activities and/or policy
                      formulation of the enterprise.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-900">
                    2. Investment in a Regional Center
                  </h3>
                  <p className="mt-3">
                    Regional centres are investment opportunities that have been
                    pre-approved by the U.S. Citizenship and Immigration
                    Services. To be eligible for this investment option,
                    applicants must meet the following criteria:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Make an investment of US$800,000.</li>
                    <li>
                      Create full-time employment for at least 10 qualified U.S.
                      workers, where indirect employment is permitted.
                    </li>
                    <li>Active management of the enterprise is not required.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-900">
                Citizenship Requirements
              </h2>
              <p className="mt-4">
                Individuals who are nonconditional Green Card holders for at
                least five years can apply for naturalization upon meeting the
                following requirements:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Be 18 years or older.</li>
                <li>
                  Have lived within the state, or USCIS district with
                  jurisdiction over the place of residence, for at least three
                  months prior to the application.
                </li>
                <li>
                  Have continuous residence in the U.S. as a Green Card holder
                  for at least five years immediately preceding the application.
                </li>
                <li>
                  Be physically present in the U.S. for at least 30 months out
                  of the five years (60 months) immediately preceding the
                  application.
                </li>
                <li>
                  Reside continuously within the U.S. from the date of
                  application for naturalization up to the time of
                  naturalization.
                </li>
                <li>
                  Be able to read, write and speak English, and have knowledge
                  and an understanding of U.S. history and government (civics).
                </li>
                <li>
                  Be of good moral character in keeping with the principles of
                  the Constitution of the United States, and well-disposed to
                  the good order and happiness of the United States during all
                  relevant periods under the law.
                </li>
              </ul>
            </section>

            {/* Next steps */}
            <section className="border-t border-slate-200 pt-6">
              <h3 className="text-base font-semibold uppercase tracking-[0.24em] text-slate-900">
                Next Steps
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-xs">
                  <Link
                    href="/tools/program-check"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-black"
                  >
                    Program Check
                  </Link>
                  <h4 className="mt-3 text-sm font-semibold text-slate-900">
                    <Link href="/tools/program-check">Program Check</Link>
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-600">
                    Compare the different programs side by side and examine
                    their features.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-xs">
                  <Link
                    href="/tools/program-cost"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-black"
                  >
                    Program Cost
                  </Link>
                  <h4 className="mt-3 text-sm font-semibold text-slate-900">
                    <Link href="/tools/program-cost">Program Cost</Link>
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-600">
                    Find out the cost estimates for each program tailored to
                    your family.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-xs">
                  <Link
                    href="/tools/program-map"
                    className="inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-black"
                  >
                    Program Map
                  </Link>
                  <h4 className="mt-3 text-sm font-semibold text-slate-900">
                    <Link href="/tools/program-map">Program Map</Link>
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-600">
                    See the power of global mobility for each passport.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs md:justify-between">
                <p className="text-[11px] text-slate-700">
                  Need more information?
                </p>
                <Link
                  href="/become-a-global-citizen"
                  className="inline-flex items-center justify-center rounded-full bg-[#cc9966] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black hover:brightness-110"
                >
                  Contact us
                </Link>
              </div>
            </section>
          </article>

          {/* Right – Index / stats / map / widget */}
          <aside className="space-y-8 lg:pl-4">
            {/* Arton Index Score – white background + multi-ring chart for 51 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-900 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                Arton Index Score
              </h2>

              <div className="mt-5 flex flex-col items-center">
                {/* Fake concentric-ring gauge */}
                <div className="relative h-32 w-32">
                  {/* Outer dark ring */}
                  <div className="absolute inset-0 rounded-full border-[10px] border-slate-900" />
                  {/* Mid gold ring */}
                  <div className="absolute inset-3 rounded-full border-[8px] border-[#dca262]" />
                  {/* Inner light ring */}
                  <div className="absolute inset-6 rounded-full border-[6px] border-slate-100" />
                  {/* Center pill with 51 */}
                  <div className="absolute inset-9 flex items-center justify-center rounded-full bg-white shadow-sm">
                    <span className="text-3xl font-semibold tracking-tight text-slate-900">
                      51
                    </span>
                  </div>
                </div>

                {/* Sub-scores */}
                <dl className="mt-6 grid w-full grid-cols-5 gap-3 text-center text-xs">
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#dca262]">
                      Cost
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-[#dca262]">
                      7
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                      Speed
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-slate-500">
                      4
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#dca262]">
                      Global
                      <br />
                      mobility
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-[#dca262]">
                      20
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                      Quality
                      <br />
                      of life
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-slate-800">
                      8
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600">
                      Simplicity
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-slate-900">
                      12
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 max-w-xs text-center text-[11px] leading-relaxed text-slate-600">
                  Updated yearly, the Arton Index is an overall assessment and
                  comparative benchmark of the country and its investment
                  program.
                </p>
              </div>
            </section>

            {/* Map */}
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={MAP_IMAGE}
                  alt="USA map"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 space-y-3 text-xs text-slate-700">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Population
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    323,995,528
                  </p>
                  <p className="text-[11px] text-slate-600">
                    Population growth: 0.81%
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    GDP (per capita)
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    57,300 USD
                  </p>
                  <p className="text-[11px] text-slate-600">
                    GDP (purchasing power parity): 18.56 trillion USD
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Visa-free countries
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    168
                  </p>
                </div>
              </div>
            </section>

            {/* Country facts */}
            <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-700">
              <FactItem
                label="Location"
                value="North America, bordering both the North Atlantic Ocean and the North Pacific Ocean, between Canada and Mexico."
              />
              <FactItem label="Capital" value="Washington, DC" />
              <FactItem label="Time difference" value="UTC-5" />
              <FactItem label="Total area" value="9,833,517 sq. km." />
              <FactItem
                label="Age demographics"
                value="0–14: 18.84%, 15–24: 13.46%, 25–54: 39.6%, 55–64: 12.85%, 65+: 15.25%."
              />
              <FactItem
                label="Languages"
                value="English: 79.2%, Spanish: 12.9%, other Indo-European: 3.8%, Asian and Pacific islands: 3.3%, other: 0.9%."
              />
              <FactItem
                label="Religions"
                value="Protestant: 46.5%, Roman Catholic: 20.8%, Mormon: 1.6%, Jehovah's Witness: 0.8%, other Christian: 0.9%, Jewish: 1.9%, Muslim: 0.9%, Buddhist: 0.7%, Hindu: 0.7%, other: 1.8%, unaffiliated: 22.8%, none: 0.6%."
              />
              <FactItem
                label="Government type"
                value="Constitutional federal republic."
              />
              <FactItem label="Currency" value="US dollar (USD)." />
              <FactItem label="Exchange rate" value="1 USD = 0.9214 EUR." />
            </section>

            {/* Passport Index widget */}
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <PassportIndexWidget />
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

type FactItemProps = {
  label: string;
  value: string;
};

function FactItem({ label, value }: FactItemProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xs text-slate-700">{value}</p>
    </div>
  );
}
