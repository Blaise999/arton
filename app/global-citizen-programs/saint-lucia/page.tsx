// app/global-citizen-programs/saint-lucia/page.tsx
// or: pages/saint-lucia.tsx (Pages Router)

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Saint Lucia Citizenship by Investment | Fast & Secure",
  description:
    "Discover Saint Lucia’s top-ranked Citizenship by Investment program. Gain visa-free access to 140 countries. Start your application now!",
};

// ---------- ARTON INDEX TYPES & DATA ----------

type MetricKey =
  | "cost"
  | "speed"
  | "global-mobility"
  | "quality-of-life"
  | "simplicity";

type ArtonIndexMetric = {
  key: MetricKey;
  label: string;
  value: number; // 0–20
};

const artonIndexMetrics: ArtonIndexMetric[] = [
  { key: "cost", label: "Cost", value: 15 },
  { key: "speed", label: "Speed", value: 20 },
  { key: "global-mobility", label: "Global mobility", value: 12 },
  { key: "quality-of-life", label: "Quality of life", value: 4 },
  { key: "simplicity", label: "Simplicity", value: 20 },
];

// ring order: outer → inner (to match screenshot)
const ringOrder: MetricKey[] = [
  "simplicity",
  "quality-of-life",
  "global-mobility",
  "speed",
  "cost",
];

const metricColors: Record<
  MetricKey,
  { ring: string; text: string }
> = {
  cost: { ring: "#E6BD9D", text: "#E6BD9D" }, // beige
  speed: { ring: "#C0C1C3", text: "#C0C1C3" }, // light grey
  "global-mobility": { ring: "#DA9C5F", text: "#DA9C5F" }, // golden
  "quality-of-life": { ring: "#C0C1C3", text: "#C0C1C3" }, // light grey
  simplicity: { ring: "#3D3D3D", text: "#000000" }, // dark grey / black
};

// ---------- SMALL COMPONENTS ----------

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border border-neutral-200 bg-white rounded-md overflow-hidden">
      <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none select-none">
        <span className="text-sm font-semibold tracking-[0.16em] uppercase text-neutral-700">
          {question}
        </span>
        <span className="ml-4 text-xs text-neutral-500 transition-transform group-open:rotate-90">
          ›
        </span>
      </summary>
      <div className="px-4 pb-4 text-sm text-neutral-700 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

type ToolCardProps = {
  title: string;
  href: string;
  description: string;
  badge: string;
};

function ToolCard({ title, href, description, badge }: ToolCardProps) {
  return (
    <div className="h-full rounded-md border border-neutral-200 bg-white/90 shadow-sm flex flex-col">
      <div className="flex-1 px-4 pt-4 pb-3 text-center">
        <Link
          href={href}
          target="_blank"
          className="inline-flex items-center justify-center rounded-full border border-[#cc9966] px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-[#cc9966]"
        >
          {badge}
        </Link>
        <h4 className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase text-neutral-800">
          <Link href={href} target="_blank">
            {title}
          </Link>
        </h4>
        <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// ---------- ARTON INDEX SCORE WIDGET ----------

type ArtonIndexScoreProps = {
  metrics: ArtonIndexMetric[];
};

function ArtonIndexScore({ metrics }: ArtonIndexScoreProps) {
  const totalScore = metrics.reduce((sum, m) => sum + m.value, 0);

  const metricsByKey: Record<MetricKey, ArtonIndexMetric> =
    metrics.reduce(
      (acc, m) => ({ ...acc, [m.key]: m }),
      {} as Record<MetricKey, ArtonIndexMetric>
    );

  const ringMetrics = ringOrder
    .map((k) => metricsByKey[k])
    .filter(Boolean) as ArtonIndexMetric[];

  const baseRadius = 80;
  const ringGap = 11;
  const maxPerMetric = 20;

  return (
    <div className="bg-[#f3f3f3] px-6 pt-6 pb-5 text-center">
      <h2 className="text-xs font-semibold tracking-[0.22em] uppercase text-neutral-700">
        ARTON INDEX SCORE
      </h2>

      <div className="mt-4 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <svg
            width={220}
            height={220}
            viewBox="0 0 200 200"
            className="drop-shadow-sm"
          >
            {ringMetrics.map((metric, index) => {
              const radius = baseRadius - index * ringGap;
              const circumference = 2 * Math.PI * radius;
              const progress = Math.max(
                0,
                Math.min(metric.value / maxPerMetric, 1)
              );
              const dashOffset = circumference * (1 - progress);

              const colors = metricColors[metric.key];

              return (
                <g key={metric.key}>
                  {/* background ring */}
                  <circle
                    cx={100}
                    cy={100}
                    r={radius}
                    fill="none"
                    stroke="#E9E9E9"
                    strokeWidth={10}
                  />
                  {/* progress ring */}
                  <circle
                    cx={100}
                    cy={100}
                    r={radius}
                    fill="none"
                    stroke={colors.ring}
                    strokeWidth={10}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    transform="rotate(-90 100 100)"
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-4xl font-semibold tracking-tight text-neutral-900">
              {totalScore}
            </span>
          </div>
        </div>
      </div>

      {/* Metric row underneath, same order as screenshot */}
      <div className="mt-5 flex flex-wrap items-start justify-between gap-y-3 gap-x-6 text-[11px] uppercase tracking-[0.18em]">
        {artonIndexMetrics.map((metric) => {
          const colors = metricColors[metric.key];
          return (
            <div key={metric.key} className="flex flex-col items-center">
              <span
                className="text-base font-semibold tabular-nums"
                style={{ color: colors.text }}
              >
                {metric.value}
              </span>
              <span className="mt-1 text-[10px] text-neutral-600">
                {metric.label.toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------- PAGE ----------

export default function SaintLuciaProgramPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-neutral-900">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[260px] md:h-[320px] lg:h-[360px]">
          <Image
            src="https://www.artoncapital.com/wp-content/uploads/2015/12/Arton-slider-Saint-Lucia.jpg"
            alt="Saint Lucia citizenship by investment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-[0.28em] uppercase">
              SAINT LUCIA
            </h1>
            <p className="mt-3 text-base md:text-lg italic text-[#f6d69b] tracking-[0.16em]">
              Citizenship by Investment
            </p>
          </div>
        </div>
      </section>

      {/* Layout */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:py-12">
        {/* LEFT COLUMN */}
        <article className="flex-1 space-y-6 text-[15px] leading-relaxed text-neutral-800">
          <p>
            Saint Lucia has one of the newest and most carefully structured
            citizenship by investment programs in the Caribbean. Vibrant,
            exclusive and well-positioned, it combines tropical lifestyle with
            strong global access and a clear regulatory framework.
          </p>

          <h3 className="mt-4 text-xl font-semibold tracking-[0.18em] uppercase text-[#7a5c3b]">
            Why choose Saint Lucia?
          </h3>
          <p>
            By learning from its regional neighbours, Saint Lucia’s Citizenship
            by Investment Board has built a program that is efficient for
            investors while delivering tangible economic benefits to the
            country.
          </p>
          <p>
            The program recognises dual citizenship and is attractive for those
            looking at mobility, lifestyle and tax planning. Key advantages
            include:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Fast processing, typically within three months.</li>
            <li>Dependants can include children up to 30 years of age.</li>
            <li>
              Dependent siblings under 18 (unmarried, with no children) may be
              added.
            </li>
            <li>
              Inclusion of dependent parents or children with physical or mental
              challenges.
            </li>
            <li>
              Dependent parents aged 55+ can be included if they live with and
              are fully supported by the main applicant.
            </li>
            <li>No physical residence requirement.</li>
            <li>No need to visit Saint Lucia during the application process.</li>
            <li>No education or senior management background requirement.</li>
            <li>
              Visa-free or visa-on-arrival access to around 140 destinations,
              including the Schengen Area, the UK and Hong Kong.
            </li>
            <li>No tax on foreign-source worldwide income.</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold tracking-[0.18em] uppercase text-[#7a5c3b]">
            Qualifications
          </h3>
          <p>
            The program was created under the Citizenship by Investment Act
            2015, making it the most recent addition to Caribbean CIP offerings.
            It targets a more selective, higher-net-worth audience by limiting
            overall application numbers and maintaining strict due diligence.
          </p>
          <p>Applicants must:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Demonstrate good character and reputation.</li>
            <li>Hold a clear criminal record.</li>
            <li>Be in good health.</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold tracking-[0.18em] uppercase text-[#7a5c3b]">
            Investment options
          </h3>

          <h4 className="mt-4 text-lg font-semibold tracking-[0.18em] uppercase text-[#b17b45]">
            1. National Economic Fund contribution
          </h4>
          <p>
            Investors may make a monetary contribution to the National Economic
            Fund (NEF) at one of the following levels:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>US$240,000 – single applicant.</li>
            <li>
              US$240,000 – main applicant plus up to three qualifying
              dependants.
            </li>
            <li>
              US$10,000 – each additional qualifying dependant under 18 years.
            </li>
            <li>US$20,000 – each additional qualifying dependant over 18.</li>
          </ul>

          <h4 className="mt-4 text-lg font-semibold tracking-[0.18em] uppercase text-[#b17b45]">
            2. Real estate investment
          </h4>
          <p>
            Applicants may invest a minimum of US$300,000 in a government
            approved real estate project. Government fees, property
            registration, processing charges and taxes are payable in addition
            to the purchase price.
          </p>

          <h4 className="mt-4 text-lg font-semibold tracking-[0.18em] uppercase text-[#b17b45]">
            3. National Action Bond investment
          </h4>
          <p>
            Following approval, an applicant (with any number of qualifying
            family members) can invest US$300,000 into Saint Lucia National
            Action Bonds.
          </p>
          <p>
            This option carries a non-refundable administration fee of US$50,000
            per application.
          </p>

          {/* FAQ */}
          <div className="mt-8 space-y-3">
            <FAQItem
              question="How long does it take to get Saint Lucia citizenship?"
              answer="Once your application is qualified and formally submitted, approvals are typically issued in around 90 days, provided all documents are in order and due diligence is straightforward."
            />
            <FAQItem
              question="What is the most affordable option for a single applicant?"
              answer="The lowest entry point for a single applicant is a US$240,000 contribution to the National Economic Fund, excluding government and processing fees."
            />
            <FAQItem
              question="Can I include parents below 65 years of age?"
              answer="Yes. Under current rules, you may include parents aged 55 and above as dependants if they are fully supported by the main applicant and meet the program’s eligibility criteria."
            />
            <FAQItem
              question="Is there a fast-track option?"
              answer="There is no separate fast-track lane, but Saint Lucia already ranks among the quicker programs globally, with well-prepared files often completing within about three months."
            />
          </div>

          {/* Next steps */}
          <h4 className="mt-8 text-lg font-semibold tracking-[0.18em] uppercase text-[#7a5c3b]">
            Next steps
          </h4>
          <p className="mt-2 text-sm text-neutral-700">
            Use Arton’s tools to compare Saint Lucia with other programs, model
            costs for your family, and visualise global mobility.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ToolCard
              title="Program Check"
              href="https://www.artoncapitals.com/tools/program-check/"
              badge="Program Check"
              description="Compare Saint Lucia with other programs side by side and analyse key features."
            />
            <ToolCard
              title="Program Cost"
              href="https://www.artoncapitals.com/tools/program-cost/"
              badge="Program Cost"
              description="Estimate the total investment and fees for various family configurations."
            />
            <ToolCard
              title="Program Map"
              href="https://www.artoncapitals.com/tools/program-map/"
              badge="Program Map"
              description="Visualise visa-free and visa-on-arrival access with a Saint Lucia passport."
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-neutral-700">Need more information?</span>
            <Link
              href="https://www.artoncapitals.com/become-a-global-citizen/"
              className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-900"
            >
              Contact us
            </Link>
          </div>
        </article>

        {/* RIGHT COLUMN */}
        <aside className="w-full max-w-md space-y-6 lg:w-[340px]">
          {/* ARTON INDEX SCORE CARD */}
          <section className="rounded-lg border border-neutral-200 bg-white shadow-sm">
            <ArtonIndexScore metrics={artonIndexMetrics} />
          </section>

          {/* Map + stats */}
          <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
            <div className="relative h-56 bg-[#f5f5f5]">
              <Image
                src="https://www.artoncapital.com/wp-content/uploads/2015/12/Saint-Lucia-Location-Map.png"
                alt="Saint Lucia location map"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="border-t border-neutral-200 bg-[#fafafa] px-5 py-4 text-sm text-neutral-800">
              <p className="country_data text-2xl font-semibold tracking-tight">
                164,464
              </p>
              <p>Population growth: 0.33%</p>

              <p className="mt-3 text-2xl font-semibold tracking-tight">
                12,000 USD
              </p>
              <p>GDP per capita</p>
              <p>GDP (PPP): 2.083 billion USD</p>

              <p className="mt-3 text-2xl font-semibold tracking-tight">
                140
              </p>
              <p>Visa-free destinations</p>
            </div>
          </section>

          {/* Country profile */}
          <section className="rounded-lg border border-neutral-200 bg-white shadow-sm px-5 py-4 text-sm text-neutral-800 space-y-3">
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Location
              </p>
              <p>
                Caribbean island between the Caribbean Sea and the North
                Atlantic Ocean, north of Trinidad and Tobago.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Capital
              </p>
              <p>Castries</p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Time difference
              </p>
              <p>UTC-4</p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Total area
              </p>
              <p>616 sq. km.</p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Age demographics
              </p>
              <p>
                0–14: 20.35%, 15–24: 15.88%, 25–54: 42.97%, 55–64: 9.58%, 65+:
                11.22%.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Languages
              </p>
              <p>English (official), French patois.</p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Religions
              </p>
              <p>
                Majority Roman Catholic, with Protestant, other Christian,
                Rastafarian and non-religious minorities.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Government type
              </p>
              <p>
                Parliamentary democracy under a constitutional monarchy and
                Commonwealth realm.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.18em] uppercase text-neutral-700">
                Currency
              </p>
              <p>East Caribbean dollar (XCD), approx. 1 USD = 2.7 XCD.</p>
            </div>
          </section>

          {/* Brochure */}
          <section className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 pt-4 pb-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-700">
                Download brochure (PDF)
              </p>
            </div>
            <div className="px-5 pb-4">
              <div className="overflow-hidden rounded-md border border-neutral-200 bg-[#f8f8f8]">
                <div className="relative mx-auto h-64 max-w-[220px]">
                  <Image
                    src="https://www.artoncapital.com/wp-content/uploads/2015/12/Arton_Saint-Lucia.png"
                    alt="Saint Lucia program brochure"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center">
                  <Link
                    href="https://www.artoncapital.com/documents/programs/Arton-Saint-Lucia.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full bg-[#cc9966] px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#b68453]"
                  >
                    Get download link
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
