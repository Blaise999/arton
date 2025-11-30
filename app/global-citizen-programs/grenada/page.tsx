// app/global-citizen-programs/grenada/page.tsx

import Link from "next/link";
import { PassportIndexWidget } from "@/components/PassportIndexWidget";
export const metadata = {
  title: "Grenada Citizenship by Investment | Arton Capital",
  description:
    "Obtain Grenadian citizenship in just 4 months. Enjoy visa-free travel to 138 countries and access the U.S. E-2 Visa Program. Start your application today!",
};

const benefits = [
  "Fast processing within four months.",
  "Inclusion of dependent children under 30, or children with physical or mental challenges living with and fully supported by the main applicant.",
  "Inclusion of dependent siblings of the main applicant or spouse who are 18 and older and have no children.",
  "Inclusion of dependent parents.",
  "No physical residency requirements.",
  "No requirement to travel to Grenada during the application process.",
  "No education or management experience required.",
  "Visa-free travel to 138 countries, including Europe’s Schengen zone.",
  "E-2 Visa Program signed between Grenada and the United States allows citizens of Grenada to operate a substantial business in the U.S. and reside therein.",
  "No tax on worldwide income.",
];

const qualificationCriteria = [
  "Be of outstanding character.",
  "Hold no criminal record.",
  "Have excellent health.",
  "Have a high personal net worth.",
];

const realEstateFees = [
  "US$50,000 for a family of four (main applicant, spouse, and up to two dependents under 30 or parents over 55).",
  "US$25,000 for each additional dependent under 30 or parents over 55.",
  "US$50,000 for parents or grandparents of the main applicant or spouse who are under 55.",
  "US$75,000 for unmarried or divorced siblings of the main applicant or spouse, aged 18 and over, with no children.",
];

const faqs = [
  {
    question: "What is Grenada best known for?",
    answer:
      "Grenada is known as the Spice Island of the Caribbean and is a hidden gem offering unspoiled beauty, famed for its aromatic spices and organic chocolate. It is considered one of the safest places to live in the region and lies outside of the main hurricane belt. Grenada also has one of the world’s leading medical universities, enhancing its international reputation.",
  },
  {
    question: "When must the Grenada citizenship investment be paid?",
    answer:
      "Once processing and due diligence fees have been paid, the investment is made in two stages. An initial deposit is made upon submission of the citizenship application, and once the application is approved, the balance must be paid. Passports are typically issued shortly thereafter.",
  },
  {
    question: "Do I need to give up my current citizenship?",
    answer:
      "No. Grenada recognizes dual citizenship, meaning investors can retain their existing citizenship and still benefit from their current passports.",
  },
  {
    question: "How does Grenada’s E-2 Visa treaty with the U.S. work?",
    answer:
      "Grenada is the only Caribbean country that offers citizens the option to apply for a U.S. E-2 Work Visa, with the right to live in the United States and operate a substantial business there. Processing times are usually around two months, the visa can be issued for up to five years, and it may be renewed indefinitely, subject to the relevant requirements.",
  },
];

const indexStats = [
   { label: "Arton Index Score", value: 79 },
  { label: "Cost", value: 15 },
  { label: "Speed", value: 15 },
  { label: "Global mobility", value: 20 },
  { label: "Quality of life", value: 17 },
  { label: "Simplicity", value: 12 },
];

export default function GrenadaCitizenshipByInvestmentPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-slate-900">
      {/* Hero – centered, yellow italic subtitle, full-width background */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Grenada.jpg"
            alt="Grenada Citizenship by Investment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center sm:py-24">
          <h1 className="text-4xl font-semibold tracking-[0.25em] sm:text-5xl">
            GRENADA
          </h1>
          <p className="mt-3 text-sm font-medium tracking-[0.3em] text-amber-300 italic sm:text-base">
            CITIZENSHIP BY INVESTMENT
          </p>
          <p className="mt-6 max-w-2xl text-[0.9rem] text-slate-100/90">
            Popularly known as the Spice Island for its myriad locally grown
            spices, Grenada offers one of the most picturesque waterfronts in
            all the Caribbean and has become a preferred destination for many
            high net worth investors.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:py-16">
        {/* LEFT COLUMN – Program content */}
        <article className="space-y-8 text-[0.94rem] leading-relaxed">
          {/* Intro */}
          <section className="space-y-4">
            <p>
              Popularly known as the Spice Island for its myriad locally grown
              spices, Grenada offers one of the most picturesque waterfronts in
              all the Caribbean. The sublime scenery is just one of the many
              reasons to visit its three main islands. Diving, sailing,
              excellent restaurants, beautiful beaches, and a calendar of
              unforgettable festivities have fortified Grenada’s status as a
              preferred destination for many high net worth investors.
            </p>
          </section>

          {/* Why choose Grenada */}
          <section className="space-y-3">
            <SectionHeading>Why choose Grenada?</SectionHeading>
            <p>
              Grenada recognizes dual citizenship, meaning investors can still
              benefit from their current passports. The Grenada Citizenship by
              Investment Program offers the following prime benefits:
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Qualifications */}
          <section className="space-y-3">
            <SectionHeading>Qualifications</SectionHeading>
            <p>
              The Grenada Citizenship by Investment Program was launched in 2013
              under the regulations of the Grenada Citizenship by Investment
              Act. The country’s pilot scheme allows qualified investors and
              their family members to apply for citizenship and benefit from
              visa-free travel.
            </p>
            <p>
              Tourism has become the leading sector for foreign direct
              investment in Grenada. The offshore financial industry, together
              with strong performances in construction and manufacturing, has
              also contributed to growth in national output.
            </p>
            <p>
              As part of its strategy to attract foreign direct investment, the
              Grenadian government works closely with a select number of
              businesses related to tourism, agriculture and manufacturing.
              Through the implementation of the program, the government also
              aims to create sustainable employment opportunities.
            </p>
            <p>
              To qualify for citizenship, applicants must fulfill one of the
              investment options below in addition to the following criteria:
            </p>
            <ul className="ml-5 list-disc space-y-1.5">
              {qualificationCriteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Investment Options */}
          <section className="space-y-5">
            <SectionHeading>Investment options</SectionHeading>

            {/* Real Estate Investment */}
            <div className="space-y-2">
              <SubHeading>1. Real Estate Investment</SubHeading>
              <p>
                With Grenada’s economy shifting from an agriculture-dominant
                base to a service-oriented model, one of the most viable
                opportunities for foreign nationals is investing in a
                government-approved real estate project.
              </p>
              <p>
                Applicants must make a minimum investment of <strong>US$270,000</strong>,
                which must be maintained for at least five years. This amount
                covers the real estate investment and includes the main
                applicant, spouse, and up to two qualifying dependents.
              </p>
              <p>In addition to the investment, government fees apply:</p>
              <ul className="ml-5 list-disc space-y-1.5">
                {realEstateFees.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* National Transformation Fund Donation */}
            <div className="space-y-2">
              <SubHeading>2. National Transformation Fund Donation</SubHeading>
              <p>
                Applicants may donate a minimum of <strong>US$235,000</strong>{" "}
                to Grenada’s National Transformation Fund (NTF). The minimum
                amount covers the main applicant only. For a family of up to
                four people, the requirement is also set at US$235,000.
              </p>
              <p>
                An additional donation of <strong>US$25,000</strong> is required
                for each extra dependent. Where an application includes an
                eligible parent not exceeding the age of fifty-five years, an
                additional contribution of <strong>US$50,000</strong> is
                required. If an application includes an eligible sibling, an
                extra contribution of <strong>US$75,000</strong> must be made
                with the post-approval contribution.
              </p>
            </div>

            {/* PR Certificates */}
            <div className="space-y-2">
              <SubHeading>Permanent Residency Certificates</SubHeading>
              <p>
                The permanent residence status has been removed from the
                citizenship by investment process. As a result, the government
                has ceased issuing PR cards and certificates. Updates regarding
                an alternative form of national ID will be communicated by the
                authorities in due course.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-3">
            <SectionHeading>Frequently asked questions</SectionHeading>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#e1d5c5] bg-white/80 px-4 py-3"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-slate-900">
                    <span>{faq.question}</span>
                    <span className="ml-3 text-xs text-slate-500 transition-transform group-open:rotate-90">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-[0.86rem] text-slate-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* NEXT STEPS */}
          <section className="mt-6 rounded-2xl border border-[#e1d5c5] bg-white/80 p-5 shadow-sm">
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
                Need more information about Grenada’s Citizenship by Investment
                Program?
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

        {/* RIGHT COLUMN – Sidebar */}
        <aside className="space-y-6">
          {/* Arton Index Score */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/85 p-5 shadow-sm">
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
                src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-Grenada.png"
                alt="Grenada map"
                className="max-h-48 rounded-lg"
              />
            </div>

            <div className="space-y-3 text-[0.86rem]">
              <div>
                <p className="font-semibold text-slate-900">
                  Population:{" "}
                  <span className="font-normal text-slate-700">111,219</span>
                </p>
                <p className="text-slate-700">
                  Population growth: <span>0.46%</span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  GDP (per capita):{" "}
                  <span className="font-normal text-slate-700">
                    14,100 USD
                  </span>
                </p>
                <p className="text-slate-700">
                  GDP (purchasing power parity):{" "}
                  <span>1.511 billion USD</span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Visa-free countries:{" "}
                  <span className="font-normal text-slate-700">141</span>
                </p>
              </div>

              <hr className="border-dashed border-slate-200" />

              <FactRow label="Location">
                Caribbean, island between the Caribbean Sea and the North
                Atlantic Ocean, north of Trinidad and Tobago.
              </FactRow>
              <FactRow label="Capital">Saint George&apos;s</FactRow>
              <FactRow label="Time difference">UTC -4</FactRow>
              <FactRow label="Total area">344 sq. km.</FactRow>
              <FactRow label="Age demographics">
                0–14: 24.15%, 15–24: 15.55%, 25–54: 40.36%, 55–64: 10.10%, 65+:
                9.84%.
              </FactRow>
              <FactRow label="Language">
                English (official); French patois is also spoken.
              </FactRow>
              <FactRow label="Religions">
                Roman Catholic: 44.6%; Protestant: 43.5%; Jehovah&apos;s
                Witness: 1.1%; Rastafarian: 1.1%; Other/None: remainder.
              </FactRow>
              <FactRow label="Government type">
                Parliamentary democracy (Parliament) and Commonwealth realm.
              </FactRow>
              <FactRow label="Currency">
                East Caribbean dollars (XCD), tied to USD.
              </FactRow>
              <FactRow label="Exchange rate">1 USD = 2.7 XCD</FactRow>
            </div>
          </section>

          {/* Brochure download */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/95 p-5 shadow-sm">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
              Download brochure (PDF)
            </h2>
            <Link
              href="https://www.artoncapital.com/documents/programs/Arton-Grenada.pdf"
              target="_blank"
              className="group block overflow-hidden rounded-xl border border-slate-200"
            >
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Grenada.png"
                alt="Grenada Program Brochure"
                className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 group-hover:bg-slate-100">
                Get download links
              </div>
            </Link>
          </section>

          {/* Passport Index mini widget – wired to your /api/visa-status */}
          <section className="rounded-2xl border border-[#e1d5c5] bg-white/95 p-5 shadow-sm">
            <PassportIndexWidget defaultPassport="GD" />
          </section>
        </aside>
      </section>
    </main>
  );
}

/* Small helper components */

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

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b5a]">
      {children}
    </h2>
  );
}

type SubHeadingProps = {
  children: React.ReactNode;
};

function SubHeading({ children }: SubHeadingProps) {
  return (
    <h3 className="text-sm font-semibold tracking-wide text-slate-900">
      {children}
    </h3>
  );
}
