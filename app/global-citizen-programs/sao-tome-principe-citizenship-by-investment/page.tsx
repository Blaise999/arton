// app/programs/sao-tome-principe-citizenship-by-investment/page.tsx

import Link from "next/link";

export const metadata = {
  title: "SÃO TOMÉ & PRÍNCIPE CITIZENSHIP BY INVESTMENT",
  description:
    "Discover São Tomé & Príncipe Citizenship by Investment: from $90,000, no residency, 2-month processing, visa-free to 70+ destinations, plus CPLP ties.",
  openGraph: {
    title: "SÃO TOMÉ & PRÍNCIPE CITIZENSHIP BY INVESTMENT",
    description:
      "Discover São Tomé & Príncipe Citizenship by Investment: from $90,000, no residency, 2-month processing, visa-free to 70+ destinations, plus CPLP ties.",
    images: [
      "https://www.artoncapital.com/wp-content/uploads/2025/10/map-SaoTomePrincipe.png",
    ],
  },
};

const benefits = [
  "Access to one of the most affordable citizenship by investment programs worldwide.",
  "No residency or travel requirements during the application process.",
  "Straightforward documentation requirements.",
  "Fast and efficient processing, within 2 months from submission.",
  "Visa-free travel access to over 70 destinations such as South Africa, Singapore, and Hong Kong.",
  "E-visa access to the UAE and Qatar.",
  "Privileged ties with Portugal and CPLP countries (Community of Portuguese Speaking Countries), offering facilitated entry, residence, and work opportunities within the Portuguese-speaking world.",
  "Application open to a wide range of nationalities (North Korea is the sole exception).",
  "Inclusion of spouse or de facto partner, children up to 30, parents and grandparents aged 55 and above.",
  "Stable, safe, and internationally recognized citizenship that can be passed on to future generations.",
];

const qualificationCriteria = [
  "Being at least 18 years of age at the time of application.",
  "Being of outstanding character.",
  "Demonstrating the ability to make the required qualifying investment under the program.",
  "Providing evidence of a legitimate source of income.",
  "Meeting document and health requirements as defined by the authorities.",
];

const investmentTiers = [
  { label: "Single applicant", amount: "US$90,000" },
  { label: "Family of 2–4", amount: "US$95,000" },
  { label: "Each additional family member", amount: "US$5,000" },
];

const additionalFees = [
  { label: "Submission fee, per application", amount: "US$5,000" },
  { label: "Financial sponsor, if applicable", amount: "US$5,000" },
  {
    label:
      "Citizenship documents (citizenship certificate, passport, and national ID), per applicant",
    amount: "US$750",
  },
];

const indexScores = [
  { label: "Cost", value: 80 },
  { label: "Speed", value: 15 },
  { label: "Global mobility", value: 75 },
  { label: "Quality of life", value: 100 },
  { label: "Simplicity", value: 30 },
];

const snapshotStats = [
  { label: "Population", value: "235,536" },
  { label: "Population growth", value: "2.00%" },
  { label: "GDP (per capita)", value: "6,230 USD" },
  { label: "GDP (purchasing power parity)", value: "1.467 billion USD" },
  { label: "Visa-free countries", value: "71" },
];

const countryFacts = [
  {
    label: "Location",
    value:
      "Gulf of Guinea, Central Africa, island nation off the west coast near the equator",
  },
  { label: "Capital", value: "São Tomé" },
  { label: "Time difference", value: "UTC +0" },
  {
    label: "Total area",
    value: "Approx. 1,001 square km (total); ~964 square km (land)",
  },
  {
    label: "Age demographics",
    value:
      "0–14: 39.8%, 15–24: 21.6%, 25–54: 31.6%, 55–64: 4.2%, 65+: 2.9%",
  },
  {
    label: "Language",
    value:
      "Portuguese (official); Forro (Forro Creole) and other local languages widely spoken",
  },
  {
    label: "Religions",
    value: "Predominantly Christian; other faiths present",
  },
  {
    label: "Government type",
    value: "Semi-presidential republic (unitary)",
  },
  {
    label: "Currency",
    value: "São Tomé and Príncipe dobra (STN)",
  },
  {
    label: "Exchange rate",
    value: "1 USD = 21.10 STN",
  },
];

const nextStepTools = [
  {
    name: "Program Check",
    href: "https://www.artoncapitals.com/tools/program-check/",
    description:
      "Compare the different programs side by side and examine their features.",
  },
  {
    name: "Program Cost",
    href: "https://www.artoncapitals.com/tools/program-cost/",
    description:
      "Find out the cost estimates for each program tailored to your family.",
  },
  {
    name: "Program Map",
    href: "https://www.artoncapitals.com/tools/program-map/",
    description: "See the power of global mobility for each passport.",
  },
];

export default function SaoTomePrincipeCitizenshipPage() {
  return (
    <main className="min-h-screen bg-white text-[#333]">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <img
          src="https://www.artoncapital.com/wp-content/uploads/2025/10/Arton-slider-SaoTomePrincipe.jpg"
          alt="São Tomé and Príncipe coastline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-[0.25em] text-white uppercase">
            SÃO TOMÉ AND PRÍNCIPE
          </h1>
          <p className="mt-3 text-sm md:text-base tracking-[0.35em] text-[#f3c27d] italic uppercase">
            Citizenship by Investment
          </p>
          <p className="mt-5 max-w-2xl text-xs md:text-sm text-slate-100/90">
            Discover São Tomé &amp; Príncipe Citizenship by Investment: from
            US$90,000, no residency requirements, 2-month processing, visa-free
            access to 70+ destinations, and strong CPLP ties.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-t border-slate-200 bg-[#f7f7f7]">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* LEFT COLUMN – PROGRAM CONTENT */}
            <article className="space-y-8 text-sm leading-relaxed md:text-[15px]">
              <p>
                Known as the “Chocolate Island” for its world-famous cacao, São
                Tomé and Príncipe is a tranquil haven off the coast of Central
                Africa. Nestled in the Gulf of Guinea, the country is a peaceful
                island nation celebrated for its safety and pristine natural
                beauty. Renowned for stability and natural landscapes, it offers
                investors not only breathtaking views and a rich
                Portuguese-influenced cultural heritage, but also an emerging
                economy with opportunities in tourism, agriculture, and
                sustainable development.
              </p>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold tracking-wide text-[#c48b4b] uppercase">
                  WHY CHOOSE SÃO TOMÉ &amp; PRÍNCIPE?
                </h2>
                <p>
                  Through the Citizenship by Investment Program of São Tomé and
                  Príncipe, investors gain the security of second citizenship in
                  a trusted and welcoming nation. This unique program combines
                  lifestyle, opportunity, and legacy—positioning São Tomé and
                  Príncipe as a premier destination for forward-looking
                  investors.
                </p>
                <p className="font-medium">
                  The key benefits of São Tomé and Príncipe citizenship include:
                </p>
                <ul className="ml-5 list-disc space-y-2">
                  {benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold tracking-wide text-[#c48b4b] uppercase">
                  SÃO TOMÉ &amp; PRÍNCIPE CITIZENSHIP BY INVESTMENT
                  QUALIFICATIONS
                </h2>
                <p>
                  The Citizenship by Investment Program of São Tomé and Príncipe
                  is open to investors who meet the program’s legal and
                  financial requirements, ensuring that citizenship is granted
                  only to individuals of integrity and good standing. Applicants
                  must demonstrate the ability to make the required qualifying
                  investment and provide all necessary documentation to support
                  their application.
                </p>
                <p className="font-medium">Key eligibility criteria include:</p>
                <ul className="ml-5 list-disc space-y-2">
                  {qualificationCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-lg font-semibold tracking-wide text-[#c48b4b] uppercase">
                  SÃO TOMÉ &amp; PRÍNCIPE INVESTMENT OPTIONS
                </h2>
                <p>
                  The São Tomé and Príncipe Citizenship by Investment Program
                  provides a single government-approved contribution route that
                  is simple, transparent, and designed to support national
                  development priorities.
                </p>
                <p className="font-semibold">
                  Donation to National Transformation Fund
                </p>
                <p>
                  Contributions are made to the National Transformation Fund,
                  established to finance key infrastructure and sustainable
                  development projects across the country. Applicants select the
                  qualifying contribution tier according to the size of their
                  application:
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {investmentTiers.map((t) => (
                        <tr
                          key={t.label}
                          className="border-b border-slate-100 last:border-none"
                        >
                          <td className="px-4 py-3 font-medium text-[#222]">
                            {t.amount}
                          </td>
                          <td className="px-4 py-3 text-slate-600">{t.label}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-base font-semibold tracking-wide text-[#c48b4b] uppercase">
                  ADDITIONAL FEES
                </h3>
                <p className="font-medium">
                  Due Diligence and Governmental Processing Fees
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {additionalFees.map((fee) => (
                        <tr
                          key={fee.label}
                          className="border-b border-slate-100 last:border-none"
                        >
                          <td className="px-4 py-3 font-medium text-[#222]">
                            {fee.amount}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {fee.label}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-base font-semibold tracking-wide text-[#c48b4b] uppercase">
                  APPLICATION FEES
                </h3>
                <p>
                  Arton Advisory fees for the program are charged per family and
                  cover services from applicant pre-screening and qualification
                  through to the delivery of naturalization documents for the
                  main applicant and all eligible family members, where
                  applicable. These fees do not include the costs of translations
                  or attestations.
                </p>
                <p>
                  All application fees charged by the Government of São Tomé and
                  Príncipe, as well as any fees external to Arton, are subject to
                  change without prior notice.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-base font-semibold tracking-wide text-[#c48b4b] uppercase">
                  NEXT STEPS
                </h3>
                <p>
                  Use Arton’s program tools to compare options, estimate
                  investment levels, and explore global mobility scenarios before
                  you engage with an advisor.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {nextStepTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                    >
                      <Link
                        href={tool.href}
                        target="_blank"
                        className="text-sm font-semibold uppercase tracking-wide text-[#c48b4b]"
                      >
                        {tool.name}
                      </Link>
                      <p className="mt-2 text-xs text-slate-600">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm">
                    Need more information about São Tomé and Príncipe’s
                    Citizenship by Investment Program?
                  </p>
                  <Link
                    href="https://www.artoncapitals.com/become-a-global-citizen/"
                    target="_blank"
                    className="rounded-full bg-[#c48b4b] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#a87437]"
                  >
                    Contact us
                  </Link>
                </div>
              </section>
            </article>

            {/* RIGHT COLUMN – SIDEBAR */}
            <aside className="space-y-8">
              {/* Arton Index */}
              <section className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold tracking-wide text-[#c48b4b] uppercase">
                  Arton Index Score
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Updated yearly, the Arton Index provides an overall assessment
                  and comparative benchmark of the country and its investment
                  program.
                </p>

                <ul className="mt-4 space-y-3 text-sm">
                  {indexScores.map((item) => (
                    <li key={item.label} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="uppercase tracking-wide text-xs text-slate-500">
                          {item.label}
                        </span>
                        <span className="font-semibold text-[#222]">
                          {item.value}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-[#c48b4b]"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Country snapshot */}
              <section className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold tracking-wide text-[#c48b4b] uppercase">
                  Country Snapshot
                </h2>
                <div className="mt-4">
                  <img
                    src="https://www.artoncapital.com/wp-content/uploads/2025/10/map-SaoTomePrincipe.png"
                    alt="Map of São Tomé and Príncipe"
                    className="mx-auto mb-4 h-auto max-w-[220px]"
                  />
                  <dl className="space-y-2 text-sm">
                    {snapshotStats.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="text-xs uppercase tracking-wide text-slate-500">
                          {item.label}
                        </dt>
                        <dd className="text-right font-medium text-[#222]">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>

              {/* Country facts */}
              <section className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold tracking-wide text-[#c48b4b] uppercase">
                  Key Facts
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {countryFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs uppercase tracking-wide text-slate-500">
                        {fact.label}
                      </dt>
                      <dd className="text-[13px] text-[#222]">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Brochure download */}
              <section className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold tracking-wide text-[#c48b4b] uppercase">
                  Download Brochure (PDF)
                </h2>
                <div className="mt-4 flex flex-col items-center">
                  <img
                    src="https://www.artoncapital.com/wp-content/uploads/2025/10/Arton_Brochure_SaoTomePrincipe_Coverpage.jpg"
                    alt="São Tomé and Príncipe program brochure cover"
                    className="mb-4 h-auto max-w-[260px] rounded-md border border-slate-200"
                  />
                  <Link
                    href="https://www.artoncapital.com/documents/programs/Arton-SaoTomePrincipe.pdf"
                    target="_blank"
                    className="rounded-full bg-[#c48b4b] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#a87437]"
                  >
                    Get download link
                  </Link>
                </div>
              </section>

              {/* Passport Index widget stub */}
              <section className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold tracking-wide text-[#c48b4b] uppercase">
                  Passport Index™
                </h2>
                <p className="mt-2 text-xs text-slate-600">
                  Explore visa requirements and global mobility scenarios for
                  São Tomé and Príncipe and compare its passport with others
                  worldwide.
                </p>
                <div className="mt-4 flex gap-2">
                  <Link
                    href="https://www.passportindex.org/"
                    target="_blank"
                    className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide hover:bg-slate-100"
                  >
                    Explore
                  </Link>
                  <Link
                    href="https://www.passportindex.org/comparebyPassport.php"
                    target="_blank"
                    className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wide hover:bg-slate-100"
                  >
                    Compare
                  </Link>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
