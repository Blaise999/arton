// app/global-citizen-programs/portugal/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";

const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2016/06/Arton-slider-Portugal.jpg";

const MAP_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2016/06/Portugal-Location-Map-e1464798369697.png";

const BROCHURE_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2016/06/Arton_Brochure_Portugal_cover.jpg";

export const metadata: Metadata = {
  title: "Portugal Residency by Investment: Your Path to EU Living",
  description:
    "Secure EU residency with Portugal’s Golden Visa. Enjoy travel freedom, tax benefits & a stable future. See how to qualify & invest in your future now!",
};

type FAQ = {
  question: string;
  answer: string;
};

const introParagraphs = [
  "One of Europe’s oldest countries, positioned on the blissfully elegant shores of the Atlantic ocean, Portugal boasts a rich historical and architectural heritage. Luminosity, radiance and culture beams through whitewashed villages and lush vineyards.",
];

const whyChooseText =
  "Portugal boasts a rich and diverse culture, Mediterranean climate, and a safe and stable setting, which is an ideal location for raising families, conducting business or simply enjoying travel. Investors find many opportunities in Portugal’s secure and fast-developing market with access to the entire Schengen zone.";

const countryHighlights = [
  "Most welcoming country for expats, by InterNations",
  "4th most peaceful country in the world, by Global Peace Index, Institute for Economics & Peace",
  "World’s Leading Destination, by World Gold Awards",
  "Europe’s Leading Destination, by World Gold Awards",
];

const programBenefits = [
  "Visa waiver to enter, live and work in Portugal;",
  "Visa-free travel within the Schengen member states;",
  "Qualification for permanent residency and citizenship of Portugal after 5 years of temporary residency;",
  "Qualification for citizenship of newborns when one of the parents has valid residency for a minimum of 1 year and the birth occurs in Portugal;",
  "Family reunification allowed to spouse or de facto partner, dependent children and dependent parents.",
];

const qualificationIntro = [
  "Portugal’s Golden Visa Program is offered in accordance with the Ministry of Internal Affairs through the Agency for Integration, Migration and Asylum (AIMA).",
  "Aimed at attracting foreign direct investments to the country, the program yields a residency permit in Portugal to non-EU investors who meet the following requirements:",
];

const qualificationRequirements = [
  "Invest in one of the available options by transferring funds to Portugal from abroad;",
  "Submit the required documentation per applicant, including clear criminal record (when applicable);",
  "Pay Government fees and all remaining expenses associated with the selected investment;",
  "Attend appointment allocated in Portugal for physical submission of application and collection of biometrics (valid Schengen visa required, when applicable);",
  "Meet or exceed the minimum stay requirements (14 days per each 2-year period once residency cards are issued).",
];

const investmentIntro = [
  "Establishing the program in 2012 and being the first country to offer a Golden Visa, Portugal remains one of the most popular options for investors seeking European residency, having surpassed the €5 billion mark in foreign direct investment.",
  "Over the years, the program has offered investors a diverse range of qualifying options while also evolving to focus on key strategic areas of economic development. Under the latest iteration of the program, investors can choose from the following investment options to qualify for the Golden Visa:",
];

const investmentOptions = [
  {
    label: "Capital Option",
    items: ["€500,000 – Acquisition of participation units in venture capital or investment funds."],
  },
  {
    label: "Capital and Employment Option",
    items: [
      "€500,000 – Incorporation of a company in Portugal that creates 5 permanent jobs, or investment in an existing company with the creation of 5 permanent jobs or maintenance of at least 10 jobs.",
    ],
  },
  {
    label: "Donation Options",
    items: [
      "€500,000 – Investment in research activities;",
      "€250,000 – Investment in arts or the reconstruction of national heritage projects.",
    ],
  },
  {
    label: "Job Creation Option",
    items: ["10 jobs – Investment on the creation of new registered labor contracts."],
  },
];

const applicationNotes = [
  "The fees associated with this program cover service for the main applicant and all qualifying family members throughout the first application for temporary residence. Additional fees are applicable depending on the investment option selected.",
  "Translation, notarization and authentication of documents at all stages of the process are the responsibility of the investor.",
  "All application fees and taxes charged by the Portuguese government and by entities external to Arton are subject to change without prior notice.",
];

const faqs: FAQ[] = [
  {
    question: "DOES PORTUGAL OFFER A CITIZENSHIP PROGRAM?",
    answer:
      "Portugal’s Golden Visa allows foreign investors to become residents of the country, granting the freedom to live, work, and study in Portugal and to move within the Schengen Zone. After 5 years holding a temporary residency status, investors and their families can apply for Portuguese citizenship.",
  },
  {
    question: "DO I NEED TO LIVE IN PORTUGAL TO MAINTAIN MY RESIDENCY?",
    answer:
      "To maintain your Golden Visa residency, you must spend 7 days in Portugal in the first year, and 14 days in subsequent years. They do not need to be consecutive.",
  },
  {
    question: "DO I HAVE TO PAY ANY TAXES IF I DON’T LIVE IN PORTUGAL?",
    answer:
      "As a rule of thumb, if you spend less than half of the year in Portugal, you are considered a non-tax resident, and are consequently only taxed on income obtained in Portugal. If you become a tax resident in Portugal, there is the option to become a non-habitual resident and be exempt from paying taxes on worldwide income in Portugal. However, Portuguese-sourced income would be taxed at a flat rate of 20% during the first 10 years, with the ability to pass your wealth to a spouse or dependent without any incurring inheritance taxes.",
  },
];

const artonIndexBreakdown = {
  cost: 16,
  speed: 7,
  mobility: 20,
  qualityOfLife: 8,
  simplicity: 3,
} as const;

const artonIndex = {
  overall: Object.values(artonIndexBreakdown).reduce((sum, v) => sum + v, 0),
  ...artonIndexBreakdown,
};

const countryStats = {
  population: "10,833,816",
  populationGrowth: "0.07%",
  gdpPerCapita: "28,500 USD",
  gdpPppTotal: "297.1 billion USD",
  visaFreeCountries: 174,
};

const countrySnapshot = {
  location:
    "Southwestern Europe, bordering the North Atlantic Ocean, west of Spain",
  capital: "Lisbon",
  timeDifference: "UTC 0",
  totalArea: "92,090 sq. km.",
  ageDemographics:
    "0–14: 15.50%, 15–24: 11.4%, 24–54: 41.88%, 55–64: 12.07%, 65+: 19.15%",
  languages: "Portuguese (official), Mirandese (official, but locally used)",
  religions:
    "Roman Catholic: 81%, Other Christian: 3.3%, Other (includes Jewish, Muslim, Other): 0.6%, None: 6.8%, Unspecified: 8.3%",
  governmentType: "Semi-presidential republic",
  currency: "Euro (EUR)",
  exchangeRateSample: "1 USD = 0.9214 EUR",
};

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-slate-200 pt-10 first:border-t-0 first:pt-0"
    >
      <h2 className="text-base md:text-lg font-semibold tracking-[0.18em] text-slate-900 uppercase">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PortugalResidencyByInvestmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />

        <div className="relative mx-auto flex max-w-6xl flex-col px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-amber-200 italic">
              Residency by Investment · Golden Visa
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Portugal
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] lg:gap-14">
          {/* LEFT COLUMN – CONTENT */}
          <div className="space-y-8">
            <Section title="Program Overview">
              {introParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Section>

            <Section title="Why Choose Portugal?">
              <p>{whyChooseText}</p>
              <p className="mt-1 font-semibold text-slate-900">Country highlights:</p>
              <BulletList items={countryHighlights} />
            </Section>

            <Section title="Program Benefits">
              <BulletList items={programBenefits} />
            </Section>

            <Section title="Qualifications">
              {qualificationIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <BulletList items={qualificationRequirements} />
            </Section>

            <Section title="Investment Options">
              {investmentIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <div className="mt-4 space-y-5">
                {investmentOptions.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <h3 className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">
                      {block.label}
                    </h3>
                    <BulletList items={block.items} />
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Application Fees">
              {applicationNotes.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <h3 className="text-sm font-semibold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/70 bg-amber-50 px-4 py-4 text-xs text-slate-800">
                <p className="font-semibold tracking-[0.18em] text-slate-900 uppercase">
                  Next Steps
                </p>
                <p className="mt-2">
                  Compare this program using your Program Check, Program Cost and
                  Program Map tools, then direct qualified prospects to your
                  “Become a Global Citizen®” lead form or contact page.
                </p>
              </div>
            </Section>
          </div>

          {/* RIGHT COLUMN – SIDEBAR */}
          <aside className="space-y-6">
            {/* Arton Index card */}
            <div className="rounded-3xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <h2 className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
                Arton Index Score
              </h2>

              <div className="mt-4 flex items-center gap-4">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-50">
                  <div className="absolute inset-[14%] rounded-full bg-white" />
                  <span className="relative text-3xl font-semibold text-slate-900">
                    {artonIndex.overall}
                  </span>
                  <span className="absolute bottom-2 text-[9px] font-medium tracking-[0.24em] uppercase text-slate-500">
                    Score
                  </span>
                </div>

                <div className="flex-1 space-y-1.5 text-[11px]">
                  <IndexRow label="Cost" value={artonIndex.cost} />
                  <IndexRow label="Speed" value={artonIndex.speed} />
                  <IndexRow
                    label="Global mobility"
                    value={artonIndex.mobility}
                  />
                  <IndexRow
                    label="Quality of life"
                    value={artonIndex.qualityOfLife}
                  />
                  <IndexRow
                    label="Simplicity"
                    value={artonIndex.simplicity}
                  />
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-600">
                Updated yearly, the Arton Index is an overall assessment and
                comparative benchmark of the country and its investment program.
              </p>
            </div>

            {/* Map & macro stats */}
            <div className="rounded-3xl border border-slate-200 bg-white px-5 py-5">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <img
                  src={MAP_IMAGE}
                  alt="Portugal on the map"
                  className="h-40 w-full bg-white object-contain"
                />
              </div>

              <div className="mt-4 grid gap-3 text-xs text-slate-800">
                <StatRow
                  label="Population"
                  value={countryStats.population}
                  strong
                />
                <StatRow
                  label="Population growth"
                  value={countryStats.populationGrowth}
                />
                <StatRow
                  label="GDP (per capita)"
                  value={countryStats.gdpPerCapita}
                />
                <StatRow
                  label="GDP (purchasing power parity)"
                  value={countryStats.gdpPppTotal}
                />
                <StatRow
                  label="Visa-free countries"
                  value={String(countryStats.visaFreeCountries)}
                />
              </div>
            </div>

            {/* Country snapshot */}
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-xs text-slate-800">
              <h2 className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
                Country Snapshot
              </h2>
              <SnapshotRow label="Location" value={countrySnapshot.location} />
              <SnapshotRow label="Capital" value={countrySnapshot.capital} />
              <SnapshotRow
                label="Time difference"
                value={countrySnapshot.timeDifference}
              />
              <SnapshotRow
                label="Total area"
                value={countrySnapshot.totalArea}
              />
              <SnapshotRow
                label="Age demographics"
                value={countrySnapshot.ageDemographics}
              />
              <SnapshotRow
                label="Language"
                value={countrySnapshot.languages}
              />
              <SnapshotRow
                label="Religions"
                value={countrySnapshot.religions}
              />
              <SnapshotRow
                label="Government type"
                value={countrySnapshot.governmentType}
              />
              <SnapshotRow
                label="Currency"
                value={countrySnapshot.currency}
              />
              <SnapshotRow
                label="Exchange rate"
                value={countrySnapshot.exchangeRateSample}
              />
            </div>

            {/* Brochure download */}
            <div className="rounded-3xl border border-amber-300/70 bg-amber-50 px-5 py-5">
              <h2 className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
                Download Brochure (PDF)
              </h2>

              <div className="mt-4 flex gap-4">
                <div className="w-24 flex-shrink-0 overflow-hidden rounded-xl border border-amber-300/70 bg-white">
                  <img
                    src={BROCHURE_IMAGE}
                    alt="Portugal program brochure cover"
                    className="h-32 w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between text-xs text-slate-800">
                  <p>
                    Program brochure for Portugal, including detailed
                    eligibility, investment options and process stages.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-black"
                    >
                      Get download link
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Passport Index / tools */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-xs text-slate-800">
              <h2 className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
                PassportIndex™ Widget
              </h2>
              <p className="mt-3">
                Explore visa requirements for Portuguese citizens, compare with
                other nationalities and see how additional passports can improve
                global mobility.
              </p>
              <div className="mt-4">
                <PassportIndexWidget countryCode="PT" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small presentational helpers ---------- */

const MAX_METRIC_SCORE = 20;

function IndexRow({ label, value }: { label: string; value: number }) {
  const width = `${(value / MAX_METRIC_SCORE) * 100}%`;

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-slate-600">{label}</span>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-amber-500"
            style={{ width }}
          />
        </div>
        <span className="tabular-nums text-[11px] text-slate-800">
          {value}
        </span>
      </div>
    </div>
  );
}

function StatRow({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p
        className={`mt-0.5 text-sm ${
          strong ? "font-semibold text-slate-900" : "text-slate-700"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function SnapshotRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-0.5 text-xs text-slate-700">{value}</p>
    </div>
  );
}
