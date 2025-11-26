// app/citizen-by-investment/page.tsx
// Single-page CBI Programs layout (Arton/Valcrest-style).
// Tailwind only. No external components required.

import Image from "next/image";
import Link from "next/link";
import { EligibilityFormCTA } from "./EligibilityFormCTA";

export const metadata = {
  title: "Citizenship By Investment Programs | Arton Capital",
  description:
    "Explore top Citizenship by Investment (CBI) programs and compare donation and real estate routes.",
  alternates: { canonical: "/citizen-by-investment" },
  openGraph: {
    title: "Citizenship By Investment Programs | Arton Capital",
    description:
      "Explore top Citizenship by Investment (CBI) programs and compare donation and real estate routes.",
    url: "/citizen-by-investment",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://in.artoncapital.com/wp-content/uploads/2024/02/program_antigua.jpg",
        width: 1200,
        height: 630,
        alt: "CBI Programs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citizenship By Investment Programs | Arton Capital",
    description:
      "Explore top Citizenship by Investment (CBI) programs and compare donation and real estate routes.",
  },
};

type PriceRow = { label: string; values: string[] };

type Program = {
  id: string;
  country: string;
  image: string;
  why: string;
  highlights: string[];
  prices: PriceRow[];
  note?: string;
};

const PRICE_HEADERS = ["Main Applicant", "Applicant + Spouse", "Family"];

const PROGRAMS: Program[] = [
  {
    id: "antigua",
    country: "Antigua & Barbuda",
    image:
      "https://in.artoncapital.com/wp-content/uploads/2024/02/program_antigua.jpg",
    prices: [
      { label: "Donation", values: ["US$230,000", "US$230,000", "US$230,000"] },
      { label: "Real estate", values: ["US$300,000", "US$300,000", "US$300,000"] },
    ],
    why:
      "Antigua & Barbuda is one of the most established Caribbean CBI options, offering visa-free travel to 140+ destinations and a fast, remote-friendly process.",
    highlights: [
      "Processing within 3–4 months.",
      "Include unmarried children under 30, siblings 18+, and parents/grandparents 55+.",
      "No travel required during processing.",
      "No education or management experience required.",
      "Visa-free travel to 144+ countries (Schengen, UK, HK, Singapore).",
      "No tax on worldwide income.",
    ],
  },
  {
    id: "dominica",
    country: "Dominica",
    image:
      "https://in.artoncapital.com/wp-content/uploads/2024/04/program_dominica.jpg",
    prices: [
      { label: "Donation", values: ["US$200,000", "US$250,000", "US$250,000"] },
      { label: "Real estate", values: ["US$220,000", "US$220,000", "US$220,000"] },
    ],
    why:
      "Dominica’s Economic Citizenship Program is known for low crime, political stability, and one of the most affordable entry points in the region.",
    highlights: [
      "No physical residency requirements.",
      "Include dependent children under 30.",
      "Include unmarried daughters under 30 living with and supported by main applicant.",
      "Include dependent parents/grandparents 65+.",
      "Visa-free travel to 137+ countries (Schengen, HK, Malaysia, Singapore, Turkey).",
      "No taxes for non-residents.",
    ],
  },
  {
    id: "grenada",
    country: "Grenada",
    image:
      "https://in.artoncapital.com/wp-content/uploads/2024/08/program_grenada.jpg",
    prices: [
      { label: "Real estate", values: ["US$270,000", "US$270,000", "US$270,000"] },
      { label: "Donation", values: ["US$235,000", "US$235,000", "US$235,000"] },
    ],
    why:
      "Grenada’s CBI stands out for its scenic islands, strong passport mobility, and straightforward process.",
    highlights: [
      "Fast processing within ~4 months.",
      "Include dependent children under 30.",
      "Include dependent parents and unmarried siblings.",
      "No physical residency requirements.",
      "No travel required during processing.",
      "No education/management experience required.",
      "Visa-free travel to 141+ countries including Schengen.",
      "No tax on worldwide income.",
    ],
  },
  {
    id: "stkitts",
    country: "Saint Kitts & Nevis",
    image:
      "https://in.artoncapital.com/wp-content/uploads/2024/08/program_st-kitts.jpg",
    prices: [
      { label: "Donation", values: ["US$250,000", "US$250,000", "US$250,000"] },
      { label: "Real estate", values: ["US$250,000", "US$250,000", "US$250,000"] },
    ],
    why:
      "St. Kitts & Nevis is the longest-running CBI program globally, with reliable processing and excellent visa-free access.",
    highlights: [
      "Fast processing within ~4 months.",
      "Include dependent children under 25 and parents/grandparents 55+.",
      "No physical residency requirements.",
      "No travel required during processing.",
      "No education/management experience required.",
      "Visa-free travel to 149+ countries (Schengen, UK, HK, Singapore).",
      "No tax on worldwide income.",
    ],
  },
  {
    id: "stlucia",
    country: "Saint Lucia",
    image:
      "https://in.artoncapital.com/wp-content/uploads/2024/08/program_st-lucia.jpg",
    prices: [
      // Placeholder values – replace with latest figures.
      { label: "Donation", values: ["—", "—", "—"] },
      { label: "Real estate", values: ["—", "—", "—"] },
    ],
    note:
      "Replace Saint Lucia pricing + details with your full HTML or latest figures.",
    why:
      "Saint Lucia offers flexible investment routes and a modern CBI framework designed for quick processing and family inclusion.",
    highlights: [
      "Flexible options (donation, real estate, bonds, enterprise).",
      "Family-friendly dependents policy.",
      "Remote application supported.",
      "Strong Caribbean passport mobility.",
    ],
  },
];

function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white/90">
              Option
            </th>
            {PRICE_HEADERS.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-semibold text-white/90"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.label}
              className={i % 2 === 0 ? "bg-black/20" : "bg-black/10"}
            >
              <td className="px-4 py-3 font-medium text-white/80">
                {r.label}
              </td>
              {r.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-white/80">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CitizenByInvestmentPage() {
  return (
    // Padding top so content starts below global layout header
    <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
      {/* Hero / Intro */}
      <section
        id="intro"
        className="relative border-b border-white/10"
      >
        <div className="absolute inset-0">
          <Image
            src="https://in.artoncapital.com/wp-content/uploads/2024/02/program_antigua.jpg"
            alt="CBI Programs"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              How can a second citizenship by investment help me?
            </h1>

            <ul className="mt-6 space-y-3 text-white/85">
              <li>✅ Visa-Free Travel to 140+ Countries</li>
              <li>✅ Wealth Preservation & Tax Optimization</li>
              <li>✅ Business Expansion with Increased Market Access</li>
              <li>✅ Enhanced Personal Security</li>
              <li>✅ Legacy & Family Benefits (Multi-Generational Security)</li>
              <li>✅ Fast & Efficient Process</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <Link
                href="#programs"
                className="rounded-lg bg-[#cc9966] px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
              >
                View Programs
              </Link>
              <Link
                href="#cta"
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Start Assessment
              </Link>
            </div>
          </div>

          {/* CTA: Custom Eligibility Form */}
          <div id="cta">
            <EligibilityFormCTA />
          </div>
        </div>
      </section>

      {/* Why Arton */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Why Should I choose Arton Capital?
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-white/80">
          <p>
            With a global presence in 19 locations across the world, nearly 20
            years of experience, and a track record of attracting over US$4
            billion in foreign direct investment, Arton Capital sets the
            standard for excellence and innovation in the industry.
          </p>
          <p>
            Our team of nearly 100 members, fluent in 17 languages, ensures
            personalized guidance for each client. We simplify the complexities
            of obtaining second citizenship while delivering a bespoke advisory
            experience.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programs"
        className="border-t border-white/10 bg-[#070707]"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Citizenship by Investment Programs
          </h2>

          <div className="mt-10 space-y-10">
            {PROGRAMS.map((p) => (
              <article
                key={p.id}
                className="grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-black/40 p-4 md:grid-cols-3 md:p-6"
              >
                {/* Left: Image + title */}
                <div className="md:col-span-1">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={p.image}
                      alt={p.country}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    {p.country}
                  </h3>

                  <div className="mt-3">
                    <PriceTable rows={p.prices} />
                    {p.note && (
                      <p className="mt-2 text-xs text-amber-200/80">
                        {p.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Why + highlights */}
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-white/90">
                    Why choose {p.country}?
                  </h4>
                  <p className="mt-2 text-white/80">{p.why}</p>

                  <h5 className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/70">
                    Program Highlights
                  </h5>
                  <ul className="mt-3 grid grid-cols-1 gap-2 text-white/80 md:grid-cols-2">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#cc9966]">✔</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="#cta"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#cc9966] px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
                    >
                      Want to know more? Start your assessment →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-white/50">
            *Amounts shown are based on your pasted HTML snapshot — always
            confirm current official prices before publishing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Arton Capital. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
