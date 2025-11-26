// app/global-citizen-programs/spain/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Spain Residency Program | No Investment Required",
  description:
    "An exclusive path to Spain is now available through Arton Capital! Enjoy lifetime benefits with no investment needed. Reach out for more details.",
};

const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-slider-Spain.jpg";

const MAP_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2025/06/map-Spain.png";

const BROCHURE_COVER =
  "https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Spain-brochure-cover.jpg";

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

export default function SpainResidencyProgramPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.28em] uppercase text-white">
            Spain
          </h1>
          <p className="mt-3 text-lg md:text-2xl italic text-[#f3c27d] tracking-[0.18em] uppercase">
            Residency Program
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-12 lg:py-16 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.05fr)]">
        {/* LEFT / MAIN COPY */}
        <article className="space-y-8 text-slate-700">
          <p className="text-sm md:text-base leading-relaxed">
            A scenic Mediterranean paradise with profound historical roots,
            Spain is home to one of Europe’s leading economies. Offering highly
            lucrative investment opportunities, a booming tourism sector, and
            unparalleled global connectivity, the country promises a
            multifaceted experience for those seeking prosperity and an
            enriching European lifestyle.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Why Choose Spain?
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Spain combines a Mediterranean lifestyle, rich culture, and great
              climate with visa-free access to 29 Schengen countries. Its
              competitive living costs, strong infrastructure, and vibrant
              start-up scene make it ideal for remote professionals. Tax
              residents can benefit from a 24% flat tax on Spanish income and an
              exemption on foreign-sourced income for up to six years.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              About the Spain Residency Program
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Spain’s Residency Program allows remote workers, freelancers, and
              entrepreneurs to legally live and work in Spain while paving the
              way toward long-term residency and European citizenship.
              Introduced under Law 28/2022 (Final Provision Five) in December
              2022, the program was designed to attract international talent by
              streamlining immigration and offering clear legal and tax
              advantages.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Other benefits include the following:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base text-slate-700">
              <li>
                3-year residence permit (filed in Spain), renewable for two more
                years;
              </li>
              <li>Permanent residency after 5 years;</li>
              <li>Visa-free travel across 29 Schengen countries;</li>
              <li>
                Family inclusion (spouse, partner, and dependents under 18);
              </li>
              <li>No investment or property purchase required;</li>
              <li>Fast 20-business-day approval (in-country applications);</li>
              <li>Minimal documentation; only three Spain visits required;</li>
              <li>Full access to banking, healthcare, and education;</li>
              <li>No minimum stay required to keep residency.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Spain Residency Program Qualifications
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              With a relatively short processing time of 45 days, Spain’s
              Residency Program offers straightforward qualification criteria,
              paving the way for investors to seamlessly and swiftly integrate
              into the vibrant tapestry of Spanish life. The following
              conditions must be met to qualify:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base text-slate-700">
              <li>Be a non-EU citizen;</li>
              <li>Have no criminal record in the last 5 years;</li>
              <li>
                Must be working for a non-Spanish company or a self-employed
                freelancer/entrepreneur with clients outside Spain;
              </li>
              <li>Agree to tax and legal compliance;</li>
              <li>
                Hold a university degree or have 3+ years of relevant
                experience;
              </li>
              <li>Minimum 3 visits to Spain required during the process.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#f3c27d] tracking-wide uppercase">
              Application Fees
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              The fees associated with the application process include service
              fees for the principal applicant and all accompanying family
              members. Applicants must also consider state fees, charges, and
              other expenses related to the investment, as well as fees for
              translation and authentication of documents, and visa application.
              All expenses related to trips and sojourn in Spain are also at the
              expense of the client.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              All application fees and taxes determined by the Spanish
              authorities are subject to change without prior notice.
            </p>
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
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4 backdrop-blur-sm flex flex-col justify-between"
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
                <span className="relative text-3xl font-semibold tracking-wide text-slate-900">
                  0
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2 w-full text-xs md:text-[13px] text-slate-700">
                <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
                  <span>Cost</span>
                  <span className="font-semibold">0</span>
                </li>
                <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
                  <span>Speed</span>
                  <span className="font-semibold">0</span>
                </li>
                <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
                  <span>Global mobility</span>
                  <span className="font-semibold">0</span>
                </li>
                <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2">
                  <span>Quality of life</span>
                  <span className="font-semibold">0</span>
                </li>
                <li className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 col-span-2">
                  <span>Simplicity</span>
                  <span className="font-semibold">0</span>
                </li>
              </ul>

              <p className="mt-3 text-center text-xs md:text-sm text-slate-600">
                Updated yearly, the Arton Index is an overall assessment and
                comparative benchmark of the country and its investment program.
              </p>
            </div>
          </section>

          {/* Map + basic stats */}
          <section className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex justify-center mb-4">
                <img
                  src={MAP_IMAGE}
                  alt="Spain map"
                  className="max-h-64 w-auto rounded-lg border border-slate-200"
                />
              </div>

              <div className="space-y-3 text-xs md:text-sm text-slate-700">
                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">
                    47,778,340
                  </p>
                  <p>Population Growth: 0.8%</p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">
                    USD 29,675
                  </p>
                  <p>GDP (per capita)</p>
                  <p>GDP (purchasing power parity): USD 2.21 trillion</p>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-[#f3c27d] text-base">175</p>
                  <p>Visa free countries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Country profile */}
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs md:text-sm text-slate-700">
            <ProfileRow
              label="Location"
              value="Southwestern Europe, bordering the Atlantic Ocean and Mediterranean Sea"
            />
            <ProfileRow label="Capital" value="Madrid" />
            <ProfileRow label="Time difference" value="UTC+1" />
            <ProfileRow label="Total area" value="505,965 km²" />
            <ProfileRow
              label="Age demographics"
              value="0–14: 14%, 15–64: 66%, 65+: 20%"
            />
            <ProfileRow
              label="Language"
              value="Castilian Spanish 74%, Catalan 17%, Galician 7%, Basque 2%"
            />
            <ProfileRow
              label="Religions"
              value="Roman Catholic 56%, Atheist 14.9%, Agnostic 12.6%, Indifferent 12.3%, Other 2.7%, Undeclared 1.5%"
            />
            <ProfileRow label="Government type" value="Constitutional Monarchy" />
            <ProfileRow label="Currency" value="Euro" />
            <ProfileRow label="Exchange rate" value="1 EUR = 1.08 USD" />
          </section>

          {/* Brochure */}
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-slate-900">
              Download brochure (PDF)
            </p>
            <Link
              href="https://www.artoncapital.com/documents/programs/Arton-Spain.pdf"
              target="_blank"
              className="group block"
            >
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <img
                  src={BROCHURE_COVER}
                  alt="Spain Program Brochure"
                  className="w-full group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <span className="mt-2 inline-flex text-xs md:text-sm text-[#f3c27d] group-hover:text-[#d6a155]">
                Get download link
              </span>
            </Link>
          </section>

          {/* Passport Index widget → simplified CTA */}
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                PassportIndex™
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Explore Spain’s passport power
              </p>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Compare Spain’s passport against others, explore visa-free
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
