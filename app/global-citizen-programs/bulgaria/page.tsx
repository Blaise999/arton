// app/programs/bulgaria/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bulgaria Residency by Investment | Arton-style Clone",
  description:
    "Secure Bulgaria permanent residency in just 6–9 months. Enjoy visa-free Schengen travel, low taxes, and EU business opportunities.",
};

const faqs = [
  {
    question:
      "FAQ 1: Can I study in another EU country as a Bulgaria PR holder?",
    answer:
      "Yes, you can, but you will generally be classed as a foreign student and will need to pay additional student fees. However, the European Commission has launched many exchange programs between EU universities to enable students to have easier access to study abroad.",
  },
  {
    question: "FAQ 2: How many trips do I have to make to Bulgaria?",
    answer:
      "There are two statutory trips for each applicant at different stages of the process.",
  },
  {
    question: "FAQ 3: How long does it take to have my Bulgarian ID card?",
    answer:
      "Under the express procedure, the cards are usually ready on the third business day following the day of application.",
  },
];

type ProgramToolProps = {
  title: string;
  href: string;
  description: string;
};

function ProgramTool({ title, href, description }: ProgramToolProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="space-y-1">
        <Link
          href={href}
          target="_blank"
          className="text-sm font-semibold text-slate-900 hover:text-black"
        >
          {title}
        </Link>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <Link
        href={href}
        target="_blank"
        className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 hover:text-slate-900"
      >
        Open tool →
      </Link>
    </div>
  );
}

type IndexBarProps = {
  label: string;
  value: number;
  accent: string;
};

function IndexBar({ label, value, accent }: IndexBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-mono text-slate-500">{value}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-slate-100">
        <div
          className={`h-1.5 rounded-full ${accent}`}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function BulgariaResidencyPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative border-b border-slate-100">
        <div className="absolute inset-0">
          <img
            src="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-slider-Bulgaria1.jpg"
            alt="Bulgaria Residency by Investment"
            className="h-80 w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        <div className="relative mx-auto flex h-80 max-w-6xl flex-col items-center justify-center px-4 text-center text-white">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-300/90">
            PROGRAMS · RESIDENCY BY INVESTMENT
          </p>
          <h1 className="text-4xl font-semibold tracking-wide sm:text-5xl">
            Bulgaria
          </h1>
          <p className="mt-3 text-sm sm:text-base italic text-amber-300">
            Permanent Residency by Investment
          </p>
        </div>
      </section>

      {/* BREADCRUMB BAR */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/programs"
              className="hidden hover:text-slate-700 sm:inline"
            >
              Global Citizen Programs
            </Link>
            <span className="hidden sm:inline">/</span>
            <span className="font-medium text-slate-700">Bulgaria</span>
          </div>
          <span className="hidden text-[11px] tracking-[0.2em] uppercase text-slate-400 sm:inline">
            Empowering Global Citizenship®
          </span>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          {/* LEFT COLUMN – PROGRAM COPY */}
          <article className="space-y-8 leading-relaxed text-sm sm:text-[15px]">
            <p className="text-slate-700">
              The ideal gateway into the European economy and way of life,
              Bulgaria is diverse, culturally rich, and perfectly placed for
              working and traveling in and around the continent.
            </p>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                WHY CHOOSE BULGARIA?
              </h2>
              <p className="mb-3 text-slate-700">
                As one of the youngest Schengen member states and a member of
                the European Union (2007) and NATO (2004), Bulgaria boasts a
                rich and diverse culture, temperate climate, and an ideal
                location in Southeast Europe — and the Investor Program for
                Permanent Residence in Bulgaria helps get you there faster.
              </p>
              <p className="mb-2 font-medium text-slate-900">
                Benefits of the program:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-slate-700">
                <li>Fast process to permanent residency (6 to 9 months);</li>
                <li>
                  Special exemption from physical residence enforced with
                  legislation;
                </li>
                <li>
                  Stable investment in a licensed and regulated investment fund;
                </li>
                <li>No language requirements for permanent residence;</li>
                <li>
                  Possibility to transfer the permanent residence status to an
                  unlimited number of generations;
                </li>
                <li>
                  Possibility to obtain temporary residence status for
                  financially dependent parents;
                </li>
                <li>Permanent residency for lifetime.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-base font-semibold tracking-wide text-slate-900">
                Benefits for Permanent Residents
              </h3>
              <ul className="list-disc space-y-1 pl-5 text-slate-700">
                <li>Free movement within the Schengen countries;</li>
                <li>
                  Lowest tax rates and free-trade environment within the EU;
                </li>
                <li>
                  Access to high-quality health care in Bulgaria and the EU;
                </li>
                <li>Access to high-quality education in the country.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                QUALIFICATIONS
              </h2>
              <p className="mb-3 text-slate-700">
                The Investor Program for Permanent Residence is offered in
                accordance with the Foreigners in the Republic of Bulgaria Act.
              </p>
              <p className="mb-2 text-slate-700">
                To qualify, applicants must fulfill the investment requirement
                in addition to meeting the following criteria:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-slate-700">
                <li>Be a non-EU citizen;</li>
                <li>
                  Possess a valid passport or another substitute foreign travel
                  document;
                </li>
                <li>Have a personal net worth greater than €512,000;</li>
                <li>
                  Provide documents supporting the source and origin of the
                  declared and invested funds;
                </li>
                <li>Hold no criminal record;</li>
                <li>Pay application fees;</li>
                <li>Make the minimum statutory trips to Bulgaria.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                INVESTMENT OPTIONS
              </h2>
              <ul className="mb-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>
                  A minimum investment of EUR 512,000 in units of an investment
                  fund licensed by the Bulgarian Financial Supervision
                  Commission.
                </li>
              </ul>
              <p className="mb-3 text-slate-700">
                Applicants must deposit the investment amount for a minimum
                period of five years as of the date of their permanent residence
                approval, with no further payment required.
              </p>
              <p className="mb-2 text-slate-700">
                The investment fund must meet the requirements set by the
                Foreigners in the Republic of Bulgaria Act:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-slate-700">
                <li>Minimum net asset value of the fund: 5,000,000 BGN;</li>
                <li>Licensed by the Financial Supervision Commission;</li>
                <li>
                  Investment strategy focused on shares and/or bonds of Bulgarian
                  companies traded on a regulated market or multilateral trading
                  system in the Republic of Bulgaria.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                ELANA Bulgaria Mutual Fund
              </h2>
              <p className="mb-3 text-slate-700">
                Arton partners with one of the first asset management companies
                in Bulgaria — ELANA Fund Management. With over 20 years of
                experience in fund management, it is part of the oldest
                non-banking financial institution in Bulgaria, known as a leader
                and innovator in the finance and investments sector for over 30
                years.
              </p>
              <p className="text-slate-700">
                ELANA Fund Management manages multiple mutual funds and close to
                100 million EUR in assets. It is one of the mutual funds that
                meet the requirements of the Foreigners in the Republic of
                Bulgaria Act, and an investment in its units will qualify an
                investor for permanent residence in the country.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                INVESTMENT PROCESS
              </h2>
              <p className="mb-3 text-slate-700">
                To qualify as a foreign investor in Bulgaria, applicants undergo
                a preliminary verification and approval by the government
                authority supervising the foreign investment process in the
                country — Invest Bulgaria Agency.
              </p>
              <p className="mb-3 text-slate-700">
                Arton fully facilitates and represents its clients in the
                pre-approval process.
              </p>
              <p className="text-slate-700">
                Once Invest Bulgaria Agency grants its positive opinion on the
                applicant and issues an official statement, they can proceed
                with the process of obtaining permanent residence in Bulgaria.
                The next step will be a visa D application at the accredited
                Bulgarian diplomatic mission in the country of residence or
                nationality.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                APPLICATION FEES
              </h2>
              <p className="mb-3 text-slate-700">
                Application fees associated with the Investor Program for
                Permanent Residence in Bulgaria include government application
                fees, legal and translation fees, and service fees related to
                background verification and validation of source of funds.
              </p>
              <p className="text-slate-700">
                All application fees charged by the Bulgarian government and by
                your service provider are subject to change. These fees depend
                on the number of applicants and the complexity of the process.
                Please contact us if you have any questions or need more
                information.
              </p>
            </section>

            {/* FAQ ACCORDION (STATIC) */}
            <section>
              <h2 className="mb-3 text-lg font-semibold tracking-wide text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-transparent bg-white px-4 py-3 text-sm shadow-sm transition hover:border-amber-200"
                    open={idx === 0}
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-3 text-left font-medium text-slate-900">
                      <span>{faq.question}</span>
                      <span className="shrink-0 text-xs text-slate-400 group-open:hidden">
                        +
                      </span>
                      <span className="hidden shrink-0 text-xs text-slate-400 group-open:inline">
                        –
                      </span>
                    </summary>
                    <p className="mt-2 text-slate-700">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* NEXT STEPS */}
            <section>
              <h3 className="mb-3 text-base font-semibold tracking-wide text-slate-900">
                NEXT STEPS
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <ProgramTool
                  title="Program Check"
                  href="https://www.artoncapitals.com/tools/program-check/"
                  description="Compare different programs side by side and examine their key features."
                />
                <ProgramTool
                  title="Program Cost"
                  href="https://www.artoncapitals.com/tools/program-cost/"
                  description="Estimate the total cost for this program tailored to your family."
                />
                <ProgramTool
                  title="Program Map"
                  href="https://www.artoncapitals.com/tools/program-map/"
                  description="See the power of global mobility for each passport."
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                <p className="text-slate-700">
                  Need more information or a tailored assessment?
                </p>
                <Link
                  href="https://www.artoncapitals.com/become-a-global-citizen/"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-black"
                >
                  Contact Us
                </Link>
              </div>
            </section>
          </article>

          {/* RIGHT COLUMN – INDEX, COUNTRY DATA & PASSPORT INDEX */}
          <aside className="space-y-8">
            {/* Arton Index Score */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                Arton Index Score
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Updated yearly as an overall assessment and comparative benchmark
                of the country and its investment program.
              </p>

              <div className="mt-4 space-y-3">
                <IndexBar label="Cost" value={80} accent="bg-amber-400" />
                <IndexBar label="Speed" value={15} accent="bg-slate-400" />
                <IndexBar
                  label="Global mobility"
                  value={75}
                  accent="bg-amber-500"
                />
                <IndexBar
                  label="Quality of life"
                  value={100}
                  accent="bg-slate-600"
                />
                <IndexBar
                  label="Simplicity"
                  value={30}
                  accent="bg-slate-800"
                />
              </div>
            </section>

            {/* Country Map & Quick Stats */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Bulgaria Snapshot
                </h2>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                <img
                  src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-Bulgaria.png"
                  alt="Map of Bulgaria"
                  className="mx-auto block h-40 w-auto object-contain"
                />
              </div>

              <dl className="mt-4 space-y-2 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Population</dt>
                  <dd>7,144,653 (Growth: –0.60%)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    GDP (per capita)
                  </dt>
                  <dd>20,100 USD</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    GDP (PPP, circa 2013)
                  </dt>
                  <dd>143.1 billion USD</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Visa-free countries
                  </dt>
                  <dd>172</dd>
                </div>
              </dl>

              <hr className="my-4 border-dashed border-slate-200" />

              <dl className="space-y-2 text-sm text-slate-700">
                <div>
                  <dt className="font-semibold text-slate-900">Location</dt>
                  <dd>
                    Southeastern Europe, bordering the Black Sea, between
                    Romania and Turkey.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Capital</dt>
                  <dd>Sofia</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Time difference
                  </dt>
                  <dd>UTC +2</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Total area</dt>
                  <dd>110,879 sq. km</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Age demographics
                  </dt>
                  <dd>
                    0–14: 14.54%, 15–24: 9.73%, 25–54: 43.33%, 55–64: 13.38%,
                    65+: 19.03%
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Language</dt>
                  <dd>
                    Bulgarian (official): 76.8%, Turkish: 8.2%, Roma: 3.8%,
                    other: 0.7%, unspecified: 10.5%.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Religions</dt>
                  <dd>
                    Eastern Orthodox: 59.4%, Muslim: 7.8%, other (Catholic,
                    Protestant, Armenian Apostolic Orthodox, Jewish): 1.7%,
                    none: 3.7%, unspecified: 27.4%.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Government type
                  </dt>
                  <dd>Parliamentary republic</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Currency</dt>
                  <dd>Bulgarian lev (BGN), tied to the euro</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">
                    Exchange rate
                  </dt>
                  <dd>1 USD ≈ 1.85 BGN</dd>
                </div>
              </dl>
            </section>

            {/* Brochure download */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                Download Brochure (PDF)
              </h2>
              <div className="mt-4 flex items-start gap-4">
                <a
                  href="https://www.artoncapital.com/documents/programs/Arton-Bulgaria.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-xl border border-slate-100 bg-slate-50"
                >
                  <img
                    src="https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Bulgaria-cover.jpg"
                    alt="Bulgaria Program Brochure Cover"
                    className="h-44 w-32 object-cover transition group-hover:scale-105"
                  />
                </a>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-slate-900">
                    Program brochure for Bulgaria
                  </p>
                  <p className="text-slate-600">
                    Get the full PDF brochure with detailed requirements, fee
                    breakdowns, and application workflows.
                  </p>
                  <a
                    href="https://www.artoncapital.com/documents/programs/Arton-Bulgaria.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-slate-900 underline underline-offset-4 hover:text-black"
                  >
                    Get download link
                  </a>
                </div>
              </div>
            </section>

            {/* PASSPORT INDEX WIDGET (the “passport p” block) */}
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                  Passport Index™
                </h2>
                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Bulgaria
                </span>
              </div>

              <div className="mb-4 text-xs text-slate-600">
                Check indicative visa status for Bulgarian passport holders when
                traveling abroad. (Static UI clone – hook into your own logic or
                Passport Index API if needed.)
              </div>

              <div className="space-y-3 text-sm">
                <div className="space-y-1">
                  <label
                    htmlFor="passport-of"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                  >
                    Passport of
                  </label>
                  <select
                    id="passport-of"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                    defaultValue="BG"
                  >
                    <option value="">Select country</option>
                    <option value="BG">Bulgaria</option>
                    <option value="NG">Nigeria</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="DE">Germany</option>
                    <option value="GR">Greece</option>
                    {/* Add more if you want, purely visual */}
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="going-to"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                  >
                    Going to
                  </label>
                  <select
                    id="going-to"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900/40"
                  >
                    <option value="">Select destination</option>
                    <option value="ES">Spain</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="CN">China</option>
                    <option value="BR">Brazil</option>
                    {/* etc */}
                  </select>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-lg border border-dashed border-slate-200 bg-slate-50 px-3 py-2 text-xs">
                  <span className="font-medium text-slate-600">
                    Visa status
                  </span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                    —
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <a
                    href="https://www.passportindex.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-slate-700 hover:border-slate-900 hover:text-slate-900"
                  >
                    Explore
                  </a>
                  <a
                    href="https://www.passportindex.org/comparebyPassport.php"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-slate-700 hover:border-slate-900 hover:text-slate-900"
                  >
                    Compare
                  </a>
                  <a
                    href="https://www.passportindex.org/improve.php"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-slate-700 hover:border-slate-900 hover:text-slate-900"
                  >
                    Improve
                  </a>
                </div>

                <p className="mt-3 text-[11px] text-slate-500">
                  Empowered by Passport Index. Build your own branded experience
                  by wiring this UI into your data source later.
                </p>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
