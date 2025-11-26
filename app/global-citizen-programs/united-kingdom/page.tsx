// app/global-citizen-programs/united-kingdom/page.tsx

import Link from "next/link";

export const metadata = {
  title: "How to Obtain UK Residency & Citizenship via Investment",
  description:
    "Interested in UK residency or citizenship? Find out how investment can grant you access to world-class benefits. Get expert guidance now!",
};

const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-UK.jpg";

const MAP_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/11/map-UK.png";

const tools = [
  {
    label: "Program Check",
    href: "https://www.artoncapitals.com/tools/program-check/",
    description:
      "Compare the different programs side by side and examine their features.",
  },
  {
    label: "Program Cost",
    href: "https://www.artoncapitals.com/tools/program-cost/",
    description:
      "Find out the cost estimates for each program tailored to your family.",
  },
  {
    label: "Program Map",
    href: "https://www.artoncapitals.com/tools/program-map/",
    description: "See the power of global mobility for each passport.",
  },
];

const investmentOptions = [
  {
    label: "Option 01",
    investment: "£2 million",
    ilr: "5 years",
  },
  {
    label: "Option 02",
    investment: "£5 million",
    ilr: "3 years",
  },
  {
    label: "Option 03",
    investment: "£10 million",
    ilr: "2 years",
  },
];

const faqs = [
  {
    question:
      "FAQ 1: I want to apply as an investor with my spouse and child. If I don’t feel that I can meet the residency requirements, can I make my spouse the main applicant in my Tier 1 Investor application?",
    answer:
      "Yes. Even if the assets are in one person’s name only or are held jointly, they are marital assets and as such can be used as part of the application. It should be noted that further into the process of settlement, if you are not living in the U.K. permanently with your family, ILR may not be issued for your child, with only one parent being qualified to apply for settlement.",
  },
  {
    question:
      "FAQ 2: If my child is over 18 when we are eligible to apply for ILR, can they still be included in the application?",
    answer:
      "Yes, depending on individual circumstances, and as long as the child is still dependent and part of the family unit and was included with the family in the initial Tier 1 Investor visa application.",
  },
  {
    question:
      "FAQ 3: Does a U.K. investor undergo a medical check as other countries require?",
    answer:
      "No. There is no medical testing required for UKIIP applicants.",
  },
];

export default function UnitedKingdomProgramPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.28em] uppercase text-white">
            United Kingdom
          </h1>
          <p className="mt-3 text-lg md:text-2xl italic text-[#f3c27d] tracking-[0.18em] uppercase">
            Residency &amp; Citizenship by Investment
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.05fr)]">
        {/* LEFT / MAIN COPY */}
        <article className="space-y-8 text-slate-700">
          {/* Intro + status */}
          <section className="space-y-3">
            <p className="text-sm md:text-base leading-relaxed">
              Looking for a diverse, prosperous, and perfectly located place to
              call home? Look no further than the U.K., an economic and cultural
              hub boasting one of the best and most sought-after standards of
              living in the world.
            </p>
            <p className="text-sm md:text-base text-red-600 text-center font-semibold">
              The program has been suspended for new applicants. Contact us for
              more details.
            </p>
          </section>

          {/* WHY UK */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Why choose the UK?
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Residency or citizenship status in the U.K. provides investors
              with access to a world of exclusive benefits:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>
                Diverse and multicultural society represented by large cultural
                and ethnic communities.
              </li>
              <li>
                Superior standard of education, a broad network of state and
                private schools, and more than 150 universities and higher
                education institutions.
              </li>
              <li>One of the best free health care services in the world.</li>
              <li>Member of the G8.</li>
              <li>Unrivaled financial business center (London).</li>
              <li>
                Attractive tax regime for high net worth investors classed as
                U.K. resident, non-domicile.
              </li>
              <li>The travel mobility and security of a U.K. passport.</li>
            </ul>
          </section>

          {/* Qualifications */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Qualifications
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Offered through a joint venture with a U.K.-authorized financial
              institution, the U.K. Immigrant Investor Program is a three-tiered
              system enabling those who invest at a higher level to be granted
              residency sooner. To qualify for the program, applicants must
              fulfill one of the investment options below in addition to meeting
              the following criteria:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>
                Maintain and accommodate yourself and any dependents without
                taking employment (outside of self-employment or business).
              </li>
              <li>
                Make the U.K. your main home. Investors will need to spend at
                least 50% of their time in the U.K. (six out of 12 months) to
                maintain visa status.
              </li>
            </ul>
          </section>

          {/* Investment options */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Investment options
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Applicants must invest no less than 75% of the specified
              investment amount in the U.K. by way of U.K. government bonds,
              share capital, or loan capital in active and trading U.K.-registered
              companies. The remaining 25% must be invested in the U.K. either
              by purchasing assets or by depositing the funds in a
              U.K.-regulated financial institution.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              As shown below, the higher the investment (and therefore the net
              personal assets required), the faster the applicant will obtain
              their stay for settlement (ILR).
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {investmentOptions.map((opt) => (
                <div
                  key={opt.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 flex flex-col gap-2"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {opt.label}
                  </p>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="font-semibold">Full investment:</span>{" "}
                      {opt.investment}
                    </p>
                    <p>
                      <span className="font-semibold">
                        Stay for settlement (ILR):
                      </span>{" "}
                      {opt.ilr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Citizenship requirements */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Citizenship requirements
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Individuals who have lived in the U.K. for five or more years are
              eligible to apply for U.K. citizenship as long as they meet the
              following residency requirements:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base">
              <li>
                Be absent from the country for no more than 90 days (three
                months) in the 12 months preceding the application. The total
                number of days spent outside the U.K. for the entire five-year
                qualifying period should not exceed 450 days (around three
                months each year).
              </li>
              <li>
                Be of good moral character and not in breach of any immigration
                laws.
              </li>
              <li>
                Demonstrate a good knowledge of U.K. life and culture, as well
                as a basic level of English, Welsh, or Scottish Gaelic.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm md:text-base font-medium text-slate-800">
                    <span>{faq.question}</span>
                    <span className="mt-1 shrink-0 text-xs text-slate-500 group-open:rotate-90 transition">
                      ▸
                    </span>
                  </summary>
                  <p className="mt-2 text-xs md:text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* NEXT STEPS */}
          <section className="pt-4 border-t border-slate-200">
            <h3 className="text-lg md:text-xl font-semibold tracking-wide uppercase text-slate-900">
              Next steps
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <Link
                      href={tool.href}
                      target="_blank"
                      className="inline-flex text-sm font-semibold tracking-wide uppercase text-[#f3c27d] hover:text-[#d6a155]"
                    >
                      {tool.label}
                    </Link>
                    <p className="text-xs md:text-sm text-slate-600">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl border border-dashed border-[#f3c27d]/60 bg-[#fff8ed] px-5 py-4">
              <p className="text-sm md:text-base text-slate-800">
                Need more information?
              </p>
              <Link
                href="https://www.artoncapitals.com/become-a-global-citizen/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-[#f3c27d] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white bg-[#f3c27d] hover:bg-[#d6a155] hover:border-[#d6a155] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </section>
        </article>

        {/* RIGHT / SIDEBAR */}
        <aside className="space-y-8 lg:pl-6 lg:border-l border-slate-200">
         {/* Arton Index */}
<section className="space-y-4">
  <h2 className="text-lg md:text-xl font-semibold tracking-wide uppercase text-slate-900">
    Arton Index Score
  </h2>

  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col items-center gap-4">
    <div className="relative h-40 w-40 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-slate-200/70" />
      <div className="absolute inset-4 rounded-full border border-slate-300" />
      <div className="absolute inset-8 rounded-full border border-[#f3c27d]/70" />
      <div className="absolute inset-12 rounded-full border border-slate-400" />
      <div className="absolute inset-16 rounded-full border border-slate-500" />
      {/* Overall index (simple aggregate of dimensions) */}
      <span className="relative text-3xl font-semibold tracking-wide text-slate-900">
        60
      </span>
    </div>

    <ul className="grid grid-cols-2 gap-2 w-full text-xs md:text-[13px] text-slate-700">
      <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
        <span>Cost</span>
        <span className="font-semibold">80</span>
      </li>
      <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
        <span>Speed</span>
        <span className="font-semibold">15</span>
      </li>
      <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
        <span>Global mobility</span>
        <span className="font-semibold">75</span>
      </li>
      <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
        <span>Quality of life</span>
        <span className="font-semibold">100</span>
      </li>
      <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 col-span-2">
        <span>Simplicity</span>
        <span className="font-semibold">30</span>
      </li>
    </ul>

    <p className="mt-3 text-center text-xs md:text-sm text-slate-600">
      Updated yearly, the Arton Index is an overall assessment and comparative
      benchmark of the country and its investment program.
    </p>
  </div>
</section>

          {/* Map + basic stats */}
          <section className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex justify-center mb-4">
                <img
                  src={MAP_IMAGE}
                  alt="United Kingdom map"
                  className="max-h-64 w-auto rounded-lg border border-slate-200"
                />
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-700">
                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">
                    64,430,428
                  </p>
                  <p>Population Growth: 0.53%</p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">
                    42,500 USD
                  </p>
                  <p>GDP (per capita)</p>
                  <p>GDP (purchasing power parity): 2.788 trillion USD</p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">169</p>
                  <p>Visa free countries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Country profile */}
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs md:text-sm text-slate-700">
            <ProfileRow
              label="Location"
              value="Western Europe, islands – including the northern one-sixth of the island of Ireland – between the North Atlantic Ocean and the North Sea; northwest of France"
            />
            <ProfileRow label="Capital" value="London" />
            <ProfileRow label="Time difference" value="UTC 0" />
            <ProfileRow label="Total area" value="243,610 sq. km." />
            <ProfileRow
              label="Age demographics"
              value="0–14: 17.44%, 15–24: 12.15%, 25–54: 40.74%, 55–64: 11.77%, 65+: 17.9%"
            />
            <ProfileRow label="Language" value="English" />
            <ProfileRow
              label="Religions"
              value="Christian (includes Anglican, Roman Catholic, Presbyterian, Methodist): 59.5%, Muslim: 4.4%, Hindu: 1.3%, Other: 2%, Unspecified: 7.2%, None: 25.7%"
            />
            <ProfileRow
              label="Government type"
              value="Parliamentary constitutional monarchy and Commonwealth realm"
            />
            <ProfileRow label="Currency" value="British pound (GBP)" />
            <ProfileRow label="Exchange rate" value="1 USD = 0.7391 GBP" />
          </section>

          {/* Passport Index CTA */}
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                PassportIndex™
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Explore the UK’s passport power
              </p>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Compare the U.K.’s passport against others, explore visa-free
                travel options, and simulate improvements with additional
                citizenships.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="https://www.passportindex.org/"
                target="_blank"
                className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:border-[#f3c27d] hover:text-[#f3c27d]"
              >
                Explore
              </Link>
              <Link
                href="https://www.passportindex.org/comparebyPassport.php"
                target="_blank"
                className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:border-[#f3c27d] hover:text-[#f3c27d]"
              >
                Compare
              </Link>
              <Link
                href="https://www.passportindex.org/improve.php"
                target="_blank"
                className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:border-[#f3c27d] hover:text-[#f3c27d]"
              >
                Improve
              </Link>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

type ProfileRowProps = {
  label: string;
  value: string;
};

function ProfileRow({ label, value }: ProfileRowProps) {
  return (
    <div className="border-b border-slate-200 last:border-0 pb-3 last:pb-0">
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-0.5 text-xs md:text-sm text-slate-800">{value}</p>
    </div>
  );
}
