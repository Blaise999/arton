// app/global-citizenship-programs/antigua-and-barbuda/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Antigua & Barbuda Citizenship by Investment | Global Citizenship",
  description:
    "Antigua & Barbuda citizenship by investment overview, benefits, qualifications, investment options, and mobility tools.",
};

export default function AntiguaAndBarbudaPage() {
  return (
    <div className="bg-[#f6f4f1] text-[#333333]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Antigua.jpg"
          alt="Antigua & Barbuda coastline"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
          <h1 className="text-3xl font-semibold tracking-[0.16em] uppercase text-white md:text-4xl">
            Antigua &amp; Barbuda
          </h1>
          <p className="mt-3 text-lg italic text-[#f6d9a0] md:text-xl">
            Citizenship by Investment
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 py-12 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* LEFT COLUMN – PROGRAM CONTENT */}
        <article className="space-y-8 lg:col-span-2">
          <p className="text-[15px] leading-relaxed text-[#555555]">
            The largest of the English-speaking Leeward Islands, Antigua &amp;
            Barbuda attracts visitors with its white-sand beaches and calm azure
            waters. The islands are a preferred winter home for global
            celebrities and high-net-worth families.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-[0.12em] uppercase text-[#7a5a33]">
              Why Choose Antigua &amp; Barbuda?
            </h2>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              With a combined size of 442 sq. km and a population of a little
              over 90,000, Antigua &amp; Barbuda is one of the Caribbean’s most
              attractive investor-citizenship destinations. The program provides
              visa-free or visa-on-arrival access to more than 140 countries and
              recognizes dual citizenship.
            </p>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              Key advantages include:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px] text-[#555555]">
              <li>Application processing typically within 3–4 months.</li>
              <li>
                Inclusion of financially dependent children under 30 years old.
              </li>
              <li>
                Inclusion of financially dependent parents and grandparents over
                55 years old.
              </li>
              <li>
                Inclusion of physically or mentally challenged dependent
                children.
              </li>
              <li>
                Possibility to include unmarried siblings of the main applicant
                or spouse.
              </li>
              <li>
                Option to add future spouse and future children of qualified
                dependants.
              </li>
              <li>No interview, education or management experience required.</li>
              <li>
                Visa-free travel to 140+ countries including the Schengen Area,
                the UK, Hong Kong, Singapore and more.
              </li>
              <li>No tax on worldwide income for non-residents.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-[0.12em] uppercase text-[#7a5a33]">
              Qualifications
            </h2>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              Antigua &amp; Barbuda&apos;s Citizenship by Investment Program was
              launched in 2012. To qualify, applicants must:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-[15px] text-[#555555]">
              <li>Be of outstanding character with a clean personal record.</li>
              <li>Hold no criminal convictions.</li>
              <li>Demonstrate excellent health.</li>
              <li>Have a high personal net worth.</li>
              <li>
                Spend at least 5 days in Antigua &amp; Barbuda within the first
                5 years after approval.
              </li>
            </ul>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              Individuals born in restricted jurisdictions may still qualify if
              they have relocated and maintained residence in permitted
              countries for at least 10 years and hold no ongoing economic ties
              to restricted states.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-[0.12em] uppercase text-[#7a5a33]">
              Investment Options
            </h2>

            <h3 className="text-[16px] font-semibold text-[#444444]">
              1. National Development Fund (NDF) or Approved Charity
            </h3>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              A contribution of <strong>US$230,000</strong> (family of up to
              four) to the NDF or an approved charity. Government and due
              diligence fees apply per applicant.
            </p>

            <h3 className="text-[16px] font-semibold text-[#444444]">
              2. Real Estate Investment
            </h3>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              Purchase real estate with a minimum value of{" "}
              <strong>US$300,000</strong> in a government-approved development.
              The property must be held for at least 5 years. Additional closing
              costs and taxes apply. Financing may be available on request.
            </p>

            <h3 className="text-[16px] font-semibold text-[#444444]">
              3. Business Establishment
            </h3>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              Invest <strong>US$1.5 million</strong> as a sole investor into an
              approved business, or participate in a joint investment of at
              least <strong>US$5 million</strong> where each investor commits a
              minimum of <strong>US$400,000</strong>.
            </p>

            <h3 className="text-[16px] font-semibold text-[#444444]">
              4. University of the West Indies Fund
            </h3>
            <p className="text-[15px] leading-relaxed text-[#555555]">
              A contribution of <strong>US$260,000</strong> for a family of up
              to six. The amount covers government and processing fees, and one
              family member receives a one-year scholarship at the University of
              the West Indies. Additional fees apply to larger families.
            </p>
          </section>

          {/* FAQ USING NATIVE ACCORDION */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-[0.12em] uppercase text-[#7a5a33]">
              Frequently Asked Questions
            </h2>

            <FAQItem question="What is the most inclusive option for large families?">
              The University of the West Indies Fund is highly competitive for
              larger families. For US$260,000, a family of six can apply,
              including government and processing fees, and the definition of
              eligible dependents is broad and flexible.
            </FAQItem>

            <FAQItem question="Does Antigua &amp; Barbuda passport allow visa-free travel to Europe?">
              Yes. Citizens enjoy visa-free or visa-on-arrival access to more
              than 140 countries, including the Schengen Area and the United
              Kingdom.
            </FAQItem>

            <FAQItem question="Is worldwide income taxed in Antigua &amp; Barbuda?">
              No. Antigua &amp; Barbuda does not tax income generated outside of
              the country, and there are no capital gains, inheritance or
              personal income taxes for non-resident citizens.
            </FAQItem>

            <FAQItem question="Can I apply directly without an authorized agent?">
              No. Applications must be submitted via authorized agents. The
              Citizenship by Investment Unit does not accept direct applications
              from individuals.
            </FAQItem>

            <FAQItem question="Do I need to renounce my existing citizenship?">
              No. Antigua &amp; Barbuda permits dual citizenship. You should
              verify whether your current nationality permits it as well.
            </FAQItem>
          </section>

          {/* NEXT STEPS TOOLS */}
          <section className="space-y-4">
            <h3 className="text-[16px] font-semibold tracking-[0.16em] uppercase text-[#7a5a33]">
              Next Steps
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <ProgramToolCard
                title="Program Check"
                description="Compare programs side-by-side and review key features."
                href="https://www.artoncapitals.com/tools/program-check/"
              />
              <ProgramToolCard
                title="Program Cost"
                description="Estimate total investment and fees for your family."
                href="https://www.artoncapitals.com/tools/program-cost/"
              />
              <ProgramToolCard
                title="Program Map"
                description="Visualize global mobility and visa-free reach."
                href="https://www.artoncapitals.com/tools/program-map/"
              />
            </div>

            <div className="mt-4 rounded-xl border border-[#d7c3a4] bg-white/70 px-4 py-3 text-sm text-[#555555] shadow-sm">
              Need more information?{" "}
              <a
                href="https://www.artoncapitals.com/become-a-global-citizen/"
                className="font-semibold text-[#b27b3b] underline underline-offset-2"
              >
                Contact us
              </a>
              .
            </div>
          </section>
        </article>

        {/* RIGHT COLUMN – INDEX + COUNTRY DATA + PASSPORT WIDGET */}
        <aside className="mt-12 space-y-8 lg:col-span-1 lg:mt-0">
          <ArtonIndexCard />
          <CountryMapCard />
          <CountryFactsCard />
          <DownloadBrochureCard />
          <PassportIndexWidget />
        </aside>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SMALL PRESENTATIONAL COMPONENTS (SERVER)                           */
/* ------------------------------------------------------------------ */

type ProgramToolCardProps = {
  title: string;
  description: string;
  href: string;
};

function ProgramToolCard({ title, description, href }: ProgramToolCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center rounded-xl border border-[#dec8aa] bg-white/80 px-4 py-5 text-center text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b27b3b]">
        Tool
      </div>
      <div className="text-[15px] font-semibold text-[#333333]">{title}</div>
      <p className="mt-2 text-[13px] leading-relaxed text-[#666666]">
        {description}
      </p>
    </a>
  );
}

type FAQItemProps = {
  question: string;
  children: React.ReactNode;
};

function FAQItem({ question, children }: FAQItemProps) {
  return (
    <details className="group rounded-lg border border-[#e0d3c0] bg-white/80 px-4 py-3 text-sm shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
        <span className="font-semibold text-[#444444]">{question}</span>
        <span className="text-xs tracking-[0.2em] text-[#b27b3b] group-open:rotate-90 transition">
          +
        </span>
      </summary>
      <div className="mt-2 text-[13px] leading-relaxed text-[#555555]">
        {children}
      </div>
    </details>
  );
}

/* ------------------------------------------------------------------ */
/* RIGHT COLUMN CARDS                                                 */
/* ------------------------------------------------------------------ */

function ArtonIndexCard() {
  return (
    <section className="rounded-2xl border border-[#dec8aa] bg-white px-6 py-5 shadow-sm">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#888888]">
        Arton Index Score
      </h2>

      <div className="mt-4 flex items-center gap-5">
        {/* Faux multi-ring chart */}
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 rounded-full border-[10px] border-[#3d3d3d]" />
          <div className="absolute inset-3 rounded-full border-[8px] border-[#c0c1c3]" />
          <div className="absolute inset-6 rounded-full border-[8px] border-[#da9c5f]" />
          <div className="absolute inset-9 rounded-full border-[7px] border-[#848486]" />
          <div className="absolute inset-12 flex items-center justify-center rounded-full bg-white">
            <span className="text-3xl font-semibold text-[#333333]">80</span>
          </div>
        </div>

        <ul className="flex-1 space-y-1 text-[12px] uppercase tracking-[0.18em]">
          <li className="flex items-center justify-between text-[#777777]">
            <span>Cost</span>
            <span className="font-semibold text-[#d09454]">18</span>
          </li>
          <li className="flex items-center justify-between text-[#777777]">
            <span>Speed</span>
            <span className="font-semibold text-[#555555]">20</span>
          </li>
          <li className="flex items-center justify-between text-[#777777]">
            <span>Global Mobility</span>
            <span className="font-semibold text-[#d09454]">18</span>
          </li>
          <li className="flex items-center justify-between text-[#777777]">
            <span>Quality of Life</span>
            <span className="font-semibold text-[#555555]">4</span>
          </li>
          <li className="flex items-center justify-between text-[#777777]">
            <span>Simplicity</span>
            <span className="font-semibold text-[#d09454]">20</span>
          </li>
        </ul>
      </div>

      <p className="mt-4 text-center text-[12px] leading-relaxed text-[#777777]">
        Updated yearly, the Arton Index is an overall assessment and comparative
        benchmark of the country and its investment program.
      </p>
    </section>
  );
}

function CountryMapCard() {
  return (
    <section className="rounded-2xl border border-[#dec8aa] bg-white px-6 py-5 shadow-sm">
      <div className="relative mx-auto h-40 w-full max-w-xs">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-AntiguaBarbuda.png"
          alt="Map of Antigua & Barbuda"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}

function CountryFactsCard() {
  return (
    <section className="rounded-2xl border border-[#dec8aa] bg-white px-6 py-5 text-[13px] leading-relaxed text-[#555555] shadow-sm">
      <div className="mb-4">
        <p className="text-[22px] font-semibold text-[#333333]">92,581</p>
        <p>Population growth: 1.23%</p>
        <p className="mt-2 text-[22px] font-semibold text-[#333333]">
          24,100 USD
        </p>
        <p>GDP per capita</p>
        <p>GDP (PPP): 2.171 billion USD (2016)</p>
        <p className="mt-2 text-[22px] font-semibold text-[#333333]">144</p>
        <p>Visa-free countries</p>
      </div>

      <hr className="my-4 border-[#e3d7c7]" />

      <FactBlock
        label="Location"
        text="Caribbean, islands between the Caribbean Sea and the North Atlantic Ocean, east-southeast of Puerto Rico."
      />
      <FactBlock label="Capital" text="Saint John’s" />
      <FactBlock label="Time Difference" text="UTC-4" />
      <FactBlock label="Total Area" text="442.6 sq. km." />
      <FactBlock
        label="Age Demographics"
        text="0–14: 23.36%, 15–24: 17%, 25–54: 42.31%, 55–64: 9.53%, 65+: 7.8%."
      />
      <FactBlock label="Language" text="English" />
      <FactBlock
        label="Religions"
        text="Protestant 68.3%, Roman Catholic 8.2%, other 12.2%, unspecified 5.5%, none 5.9%."
      />
      <FactBlock
        label="Government Type"
        text="Parliamentary democracy under a constitutional monarchy and Commonwealth realm."
      />
      <FactBlock
        label="Currency"
        text="East Caribbean dollar (XCD), pegged to the US dollar."
      />
      <FactBlock label="Exchange Rate" text="1 USD = 2.7 XCD (2014)." />
    </section>
  );
}

type FactBlockProps = {
  label: string;
  text: string;
};

function FactBlock({ label, text }: FactBlockProps) {
  return (
    <div className="mb-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#444444]">
        {label}
      </p>
      <p>{text}</p>
    </div>
  );
}

function DownloadBrochureCard() {
  return (
    <section className="rounded-2xl border border-[#dec8aa] bg-white px-6 py-5 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#444444]">
        Download Brochure (PDF)
      </p>
      <a
        href="https://www.artoncapital.com/documents/programs/Arton-Antigua-Barbuda.pdf"
        target="_blank"
        rel="noreferrer"
        className="mt-3 block overflow-hidden rounded-xl border border-[#e3d7c7]"
      >
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Antigua-Barbuda.png"
          alt="Antigua & Barbuda brochure cover"
          width={320}
          height={460}
          className="w-full object-cover"
        />
      </a>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PASSPORT INDEX WIDGET – WITH WORKING VISA STATUS                   */
/* ------------------------------------------------------------------ */

function PassportIndexWidget() {
  return (
    <section className="rounded-2xl border border-[#dec8aa] bg-white px-6 py-5 text-[13px] shadow-sm">
      <div className="mb-4">
        <Image
          src="https://www.artoncapital.com/wp-content/plugins/passport-index/inc/PI-widget-logo-light.png"
          alt="Passport Index logo"
          width={200}
          height={40}
          className="h-auto w-40"
        />
      </div>

      <div className="space-y-3">
        <div>
          <label
            htmlFor="pi-passport"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]"
          >
            Passport of
          </label>
          <select
            id="pi-passport"
            className="mt-1 w-full rounded-md border border-[#e2d5c4] bg-[#f8f5f1] px-3 py-2 text-[13px] text-[#333333]"
            disabled
            defaultValue="AG"
          >
            <option value="AG">Antigua and Barbuda</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="pi-destination"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#777777]"
          >
            Going to
          </label>
          <select
            id="pi-destination"
            className="mt-1 w-full rounded-md border border-[#e2d5c4] bg-[#f8f5f1] px-3 py-2 text-[13px] text-[#333333]"
            defaultValue=""
          >
            <option value="">Select a country</option>
            <option value="GB">United Kingdom</option>
            <option value="FR">France</option>
            <option value="ES">Spain</option>
            <option value="IT">Italy</option>
            <option value="DE">Germany</option>
            <option value="CA">Canada</option>
            <option value="US">United States of America</option>
            <option value="AE">United Arab Emirates</option>
            <option value="SG">Singapore</option>
            <option value="CN">China</option>
            <option value="RU">Russian Federation</option>
            <option value="BR">Brazil</option>
            <option value="ZA">South Africa</option>
            <option value="NG">Nigeria</option>
            <option value="AU">Australia</option>
          </select>
        </div>
      </div>

      {/* STATUS PILL */}
      <div
        id="pi-status"
        className="mt-6 rounded-full bg-[#e7dfd4] px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#666666]"
      >
        visa status
      </div>

      <div className="mt-3 text-center text-[11px] leading-relaxed text-[#9c8563]">
        Empowered by the Passport Index.{" "}
        <a
          href="https://www.passportindex.org/"
          className="underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          Explore
        </a>{" "}
        ·{" "}
        <a
          href="https://www.passportindex.org/comparebyPassport.php"
          className="underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          Compare
        </a>{" "}
        ·{" "}
        <a
          href="https://www.passportindex.org/improve.php"
          className="underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          Improve
        </a>
      </div>

      {/* Tiny inline script to update the status pill – no React state needed */}
      <Script id="passport-index-widget-script" strategy="afterInteractive">
        {`
          (function () {
            const visaMap = {
              GB: { label: "Visa-free", color: "#4caf50" },
              FR: { label: "Visa-free", color: "#4caf50" },
              ES: { label: "Visa-free", color: "#4caf50" },
              IT: { label: "Visa-free", color: "#4caf50" },
              DE: { label: "Visa-free", color: "#4caf50" },
              CA: { label: "Visa-free", color: "#4caf50" },
              SG: { label: "Visa-free", color: "#4caf50" },
              AE: { label: "Visa on arrival", color: "#ff9800" },
              BR: { label: "Visa-free", color: "#4caf50" },
              ZA: { label: "Visa-free", color: "#4caf50" },
              AU: { label: "Electronic travel auth.", color: "#2196f3" },
              US: { label: "Visa required", color: "#e53935" },
              CN: { label: "Visa required", color: "#e53935" },
              RU: { label: "Visa required", color: "#e53935" },
              NG: { label: "Visa required", color: "#e53935" }
            };

            function initPIWidget() {
              var select = document.getElementById("pi-destination");
              var pill = document.getElementById("pi-status");
              if (!select || !pill) return;

              function update() {
                var code = select.value;
                if (!code) {
                  pill.textContent = "visa status";
                  pill.style.backgroundColor = "#e7dfd4";
                  pill.style.color = "#666666";
                  return;
                }
                var entry = visaMap[code] || { label: "Visa required", color: "#e53935" };
                pill.textContent = entry.label.toUpperCase();
                pill.style.backgroundColor = entry.color;
                pill.style.color = "#ffffff";
              }

              select.addEventListener("change", update);
            }

            if (document.readyState === "complete" || document.readyState === "interactive") {
              initPIWidget();
            } else {
              document.addEventListener("DOMContentLoaded", initPIWidget);
            }
          })();
        `}
      </Script>
    </section>
  );
}
