// app/global-citizen-programs/greece-golden-visa-program/page.tsx

import Link from "next/link";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";

export const metadata = {
  title: "Greece Golden Visa Program | Arton Capital",
  description:
    "Gain EU residency with Greece’s Golden Visa Program. Enjoy visa-free Schengen travel, fast processing, and no minimum stay required.",
};

const benefits = [
  "Straightforward procedure and fast application processing time of 3–9 months.",
  "Right to enter Greece even in case of closed borders.",
  "Right, but not obligation, to reside in Greece with no minimum residency requirements.",
  "Children up to 21 years old, parents, and parents of spouses eligible as dependents.",
  "Residency cards renewable for life as long as the qualifying investment is maintained.",
  "Access to public education institutions under the same terms as Greek nationals.",
  "Visa-free access across the Schengen Area.",
  "Country ranked as the world’s number one country for retirement.",
];

const generalQualifications = [
  "Possess a valid passport.",
  "If selecting the real estate option, complete the property purchase in full.",
];

const dependents = [
  "Spouse.",
  "Children up to 21 years old.",
  "Parents of the main applicant.",
  "Parents of the spouse.",
];

const realEstateOptions = [
  "€800,000 in a single property with a minimum area of 120 sqm in Athens, regional units of Thessaloniki, the islands of Mykonos and Santorini, and those islands with more than 3,100 inhabitants.",
  "€400,000 in a single property with a minimum area of 120 sqm in all other regions of Greece.",
  "€250,000 in a commercial property to be converted for residential use – the conversion must be completed before the submission of the application.",
  "€250,000 in the acquisition and full restoration of a property in listed buildings of historical and cultural importance.",
];

const capitalOptions = [
  "€800,000 in shares, corporate bonds or Greek Government bonds which are imported for trading or traded on regulated markets or multilateral trading facilities operating in Greece.",
  "€500,000 in a company registered in Greece for the acquisition of shares or bonds.",
  "€500,000 in a Public Limited Real Estate Investment Company (REIC).",
  "€500,000 in Greek Government bonds.",
  "€500,000 in a fixed-term deposit.",
  "€350,000 in a mutual fund investing exclusively in shares, corporate bonds or Greek Government bonds.",
  "€350,000 in shares or stocks in an Alternative Investment Fund (AIF) established in Greece or any other EU country which aims to invest exclusively in Greece.",
  "€250,000 minimum investment in startups listed on the National Register of Startups (Elevate Greece).",
];

const indexStats = [
   { label: "Arton Index Score", value: 86 },
  { label: "Cost", value: 20 },
  { label: "Speed", value: 20 },
  { label: "Global mobility", value: 15 },
  { label: "Quality of life", value: 20 },
  { label: "Simplicity", value: 11 },
];

export default function GreeceGoldenVisaProgramPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://www.artoncapital.com/wp-content/uploads/2023/03/Arton-slider-Greece.jpg"
            alt="Greece Golden Visa Program"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/90">
            Golden Visa Program
          </p>
          <h1 className="text-4xl font-semibold tracking-[0.25em] sm:text-5xl">
            GREECE
          </h1>
          <p className="mt-4 max-w-2xl text-sm italic text-slate-100/90 sm:text-base">
            Known as the cradle of Western civilization, Greece offers an
            exceptional Mediterranean lifestyle, a thriving economy, and one of
            Europe’s most attractive residency-by-investment routes.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:py-16">
        {/* Left column – program copy */}
        <article className="space-y-8 text-[0.94rem] leading-relaxed">
          <section className="space-y-4">
            <p>
              Known as the cradle of Western civilization, Greece embodies the
              best of business and leisure, welcoming nearly 40 million tourists
              each year. Whether it is swimming in the turquoise seawaters of
              Zakynthos, enjoying vibrant nightlife in Mykonos, or delving into
              the historical heritage of Athens, Greece is perfect for leisure
              and for building a desired life.
            </p>
            <p>
              As one of the most popular investment programs in Europe, the
              Greece Golden Visa Program offers access to a European oasis with
              arguably the most competitive investment options in the region.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
              Why choose Greece?
            </h2>
            <p>
              A member of the Schengen Area and of the eurozone, Greece bridges
              historical heritage and exceptional Mediterranean scenery, with a
              booming economic landscape that has regained momentum through
              growing foreign direct investment. Participation in the Program
              enables holders to acquire a long-term residence status, which is
              one of the prerequisites for naturalization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
              Benefits
            </h2>
            <ul className="ml-5 list-disc space-y-1.5">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
              Qualifications
            </h2>
            <p>
              Greece’s Golden Visa is considered one of the most attractive and
              competitive residency-by-investment programs in Europe. To
              qualify, applicants must fulfill all investment criteria in
              addition to meeting the requirements below:
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              {generalQualifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-3">
              The following family members qualify as dependents of the main
              applicant:
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              {dependents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
              Investment options
            </h2>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                Real estate investment
              </h3>
              <p>
                Applicants can qualify through several real estate options under
                the Golden Visa:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                {realEstateOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                Capital investment
              </h3>
              <p>
                Applicants may also obtain residency via the following capital
                investments:
              </p>
              <ul className="ml-5 list-disc space-y-1.5">
                {capitalOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
              Application fees
            </h2>
            <p>
              The fees associated with this program cover service fees for the
              principal applicant and all accompanying family members throughout
              the first application for permanent residence. Additional fees are
              applicable depending on the investment selected.
            </p>
            <p>
              Translation, notarization, and authentication of documents are not
              included in the estimate of fees and are the responsibility of the
              investor at all stages.
            </p>
            <p>
              All application fees and taxes charged by the Greek Government and
              by entities external to Arton are subject to change without prior
              notice.
            </p>
          </section>

          {/* Next Steps */}
          <section className="mt-6 rounded-2xl border border-[#e1d5c5] bg-white/70 p-5 shadow-sm">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Next steps
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <NextStepCard
                title="Program Check"
                href="https://www.artonscapitalholdings.com/tools/program-check/"
                description="Compare different programs side by side and examine their features."
              />
              <NextStepCard
                title="Program Cost"
                href="https://www.artonscapitalholdings.com/tools/program-cost/"
                description="Estimate costs tailored to your family and chosen route."
              />
              <NextStepCard
                title="Program Map"
                href="https://www.artonscapitalholdings.com/tools/program-map/"
                description="See the power of global mobility for each passport."
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#e1d5c5] pt-4 text-sm">
              <p className="text-slate-700">
                Need more information about the Greece Golden Visa?
              </p>
              <Link
                href="https://www.artonscapitalholdings.com/become-a-global-citizen/"
                className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-slate-900"
              >
                Contact us
              </Link>
            </div>
          </section>
        </article>

        {/* Right column – sidebar */}
        <aside className="space-y-6">
          {/* Arton Index */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/80 p-5 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Arton Index Score
            </h2>
            <p className="mt-3 text-[0.86rem] text-slate-600">
              Updated yearly, the Arton Index is an overall assessment and
              comparative benchmark of the country and its investment program.
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              {indexStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="text-lg font-semibold text-slate-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Country snapshot */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/90 p-5 shadow-sm">
            <div className="mb-4 flex justify-center">
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2023/03/Greece_Map.png"
                alt="Greece map"
                className="max-h-48 rounded-lg"
              />
            </div>

            <div className="space-y-3 text-[0.86rem]">
              <div>
                <p className="font-semibold text-slate-900">
                  Population:{" "}
                  <span className="font-normal text-slate-700">
                    10,497,595
                  </span>
                </p>
                <p className="text-slate-700">
                  Population growth: <span>1.95%</span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  GDP (per capita):{" "}
                  <span className="font-normal text-slate-700">
                    29,500 USD
                  </span>
                </p>
                <p className="text-slate-700">
                  GDP (purchasing power parity):{" "}
                  <span>314 billion USD</span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Visa-free countries:{" "}
                  <span className="font-normal text-slate-700">174</span>
                </p>
              </div>

              <hr className="border-dashed border-slate-200" />

              <FactRow label="Location">
                South Eastern Europe, on the southern tip of the Balkans.
              </FactRow>
              <FactRow label="Capital">Athens</FactRow>
              <FactRow label="Time difference">UTC +3</FactRow>
              <FactRow label="Total area">131,957 sq. km.</FactRow>
              <FactRow label="Age demographics">
                0–15: 14.2% · 15–64: 66.2% · 65+: 19.6%
              </FactRow>
              <FactRow label="Language">
                Greek (official): 99%; English, German, French, Italian: 1%.
              </FactRow>
              <FactRow label="Religions">
                Orthodox Christianity: 90%; Other Christians: 3%; Unaffiliated:
                4%; Islam: 2%; Other religions: 1%.
              </FactRow>
              <FactRow label="Government type">
                Parliamentary Republic
              </FactRow>
              <FactRow label="Currency">Euro (EUR)</FactRow>
              <FactRow label="Exchange rate">1 EUR = 1.04 USD</FactRow>
            </div>
          </section>

          {/* Brochure download */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/95 p-5 shadow-sm">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Download brochure (PDF)
            </h2>
            <Link
              href="https://www.artoncapital.com/documents/programs/Arton-Greece.pdf"
              target="_blank"
              className="group block overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2023/03/Arton-Greece-Brochure-Cover.jpg"
                alt="Greece Program Brochure"
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 group-hover:bg-slate-100">
                Get download link
              </div>
            </Link>
          </section>

          {/* Passport Index mini-widget – using your API */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/95 p-5 shadow-sm">
            <PassportIndexWidget defaultPassport="GR" />
          </section>
        </aside>
      </section>
    </main>
  );
}

/* --- Small helpers --- */

type FactRowProps = {
  label: string;
  children: React.ReactNode;
};

function FactRow({ label, children }: FactRowProps) {
  return (
    <div className="space-y-0.5">
      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </p>
      <p className="text-[0.86rem] text-slate-700">{children}</p>
    </div>
  );
}

type NextStepCardProps = {
  title: string;
  href: string;
  description: string;
};

function NextStepCard({ title, href, description }: NextStepCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex flex-col justify-between rounded-xl border border-[#e1d5c5] bg-white/80 px-4 py-3 text-xs shadow-sm transition hover:border-[#c29662] hover:bg-white"
    >
      <div>
        <p className="mb-1 font-semibold uppercase tracking-[0.2em] text-slate-800">
          {title}
        </p>
        <p className="text-[0.8rem] text-slate-600">{description}</p>
      </div>
      <span className="mt-3 inline-flex items-center text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-[#b88b5a] group-hover:text-[#8b643a]">
        Open tool
        <span className="ml-1 text-[0.9em]">↗</span>
      </span>
    </Link>
  );
}
