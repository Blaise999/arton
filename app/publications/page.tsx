// app/publications/page.tsx (Next.js 14 App Router)
// Server Component • Light-mode only • Arton Capital branding
// No event handlers (onSubmit/onClick) to avoid RSC prop errors.

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Publications | Arton Capital",
  description:
    "Research, reports, and thought leadership on global citizenship, investment migration, and wealth trends.",
  alternates: { canonical: "/publications" },
  openGraph: {
    title: "Publications | Arton Capital",
    description:
      "Research, reports, and thought leadership on global citizenship, investment migration, and wealth trends.",
    url: "/publications",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Publications",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publications | Arton Capital",
    description:
      "Research, reports, and thought leadership on global citizenship, investment migration, and wealth trends.",
    images: [
      "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
    ],
  },
};

type Publication = {
  id: string;
  title: string;
  year?: string;
  excerpt: string;
  cover?: string; // optional: if missing we render a clean placeholder
  pdfUrl: string;
  tags?: string[];
};

const PUBLICATIONS: Publication[] = [
  {
    id: "cyprus-q3-2017",
    title: "Cyprus Residential Property Market Report — Q3 2017",
    year: "2017",
    excerpt:
      "The 9th edition provides a comprehensive overview of Cyprus’ residential real estate market, focusing on trends, investor appetite, and outlook.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2017/05/cyprus-report-2017.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2017/05/CYPRUS-RESIDENTIAL-PROPERTY-MARKET_FINAL_Q3_2017.pdf",
    tags: ["Real Estate", "Cyprus"],
  },
  {
    id: "philanthropy-2016",
    title: "Wealth-X & Arton Capital Philanthropy Report 2016",
    year: "2016",
    excerpt:
      "A global view of how UHNW individuals approach giving, the causes they support, and emerging philanthropic patterns.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2016/12/philanthropy-report-2016.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2016/12/Arton_Capital-Wealth-X_Philanthropy_Report_2016.pdf",
    tags: ["Wealth", "Philanthropy"],
  },
  {
    id: "cyprus-q3-2016",
    title: "Cyprus Residential Properties Report — Q3 2016",
    year: "2016",
    excerpt:
      "Market intelligence on residential price movement, demand drivers, and the investment-migration effect.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2016/11/cyprus-report-2016q3.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2016/11/Cyprus-Residential-Properties-Report-2016Q3.pdf",
    tags: ["Real Estate", "Cyprus"],
  },
  {
    id: "cyprus-q1-2016",
    title: "Cyprus Residential Properties Report — Q1 2016",
    year: "2016",
    excerpt:
      "Snapshot of market activity and investment opportunities across key regions in Cyprus.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2016/11/cyprus-report-2016q1.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2016/11/Cyprus-Residential-Properties-Report-2016Q1.pdf",
    tags: ["Real Estate", "Cyprus"],
  },
  {
    id: "philanthropy-2015",
    title: "Wealth-X & Arton Capital Philanthropy Report 2015",
    year: "2015",
    excerpt:
      "Key findings on UHNW giving habits, geographic patterns, and priority sectors.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/11/philanthropy-report-2015.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/11/Wealth-X-Arton-Capital-Philanthropy-Report-2015-FINAL.pdf",
    tags: ["Wealth", "Philanthropy"],
  },
  {
    id: "wealthy-migrant",
    title: "The Wealthy Migrant",
    year: "2015",
    excerpt:
      "Why affluent families move, what motivates jurisdiction choice, and the future of global mobility.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/10/TheWealthyMigrant-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/10/TheWealthyMigrant.pdf",
    tags: ["Mobility", "Migration"],
  },
  {
    id: "cir-5",
    title: "The Corporate Immigration Review — 5th Edition (Bulgaria)",
    year: "2016",
    excerpt:
      "A legal and regulatory overview of Bulgarian immigration pathways for corporate and private applicants.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2016/02/CIR5-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2016/02/CIR_Bulgaria_5.pdf",
    tags: ["Legal", "Bulgaria"],
  },
  {
    id: "wef-arton",
    title: "Global Citizenship: Planning for Sustainable Growth",
    year: "2014",
    excerpt:
      "WEF–Arton research on investment migration’s impact and a roadmap for sustainable policy.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2014/11/wef-arton-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2014/11/WEFArton-Report1.pdf",
    tags: ["Policy", "Global Citizenship"],
  },
  {
    id: "philanthropy-2014",
    title: "Wealth-X & Arton Capital Philanthropy Report 2014",
    year: "2014",
    excerpt:
      "Baseline study on global UHNW philanthropy and giving behaviors.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2014/10/philanthropy-report-2014.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2014/10/WX_AC-Philanthropy-Report-2014-Web.pdf",
    tags: ["Wealth", "Philanthropy"],
  },
  {
    id: "cir-4",
    title: "The Corporate Immigration Review — 4th Edition (Bulgaria)",
    year: "2015",
    excerpt:
      "Edition 4 update on Bulgaria’s corporate immigration framework.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/CIR4-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/TLR-Bulgaria.pdf",
    tags: ["Legal", "Bulgaria"],
  },
  {
    id: "shrinking-world",
    title: "A Shrinking World",
    year: "2015",
    excerpt:
      "Wealth-X & Arton Capital report exploring mobility, opportunity, and global capital flows.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/shrinking-world-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/WX-Arton-Report_18x25.pdf",
    tags: ["Mobility", "Wealth"],
  },
  {
    id: "legal-guide-2013",
    title: "InvestBulgaria Legal Guide 2013",
    year: "2013",
    excerpt:
      "Practical investor guide covering legal foundations for doing business and investing in Bulgaria.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/legal-guide-2013-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/legal_guide_2013.pdf",
    tags: ["Legal", "Bulgaria"],
  },
  {
    id: "legal-guide-2012",
    title: "InvestBulgaria Legal Guide 2012",
    year: "2012",
    excerpt:
      "Earlier edition of Bulgaria’s legal investment guide, still useful for historical context.",
    cover:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/legal-guide-2012-cover.jpg",
    pdfUrl:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/Legal-Guide_2012.pdf",
    tags: ["Legal", "Bulgaria"],
  },
];

function CoverOrPlaceholder({ cover, title }: { cover?: string; title: string }) {
  if (!cover) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
            AC
          </div>
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Arton Capital
          </div>
          <div className="mt-2 line-clamp-3 text-sm font-semibold text-slate-800">
            {title}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={cover}
      alt={title}
      fill
      className="object-cover"
      unoptimized
      sizes="(max-width: 768px) 100vw, 220px"
    />
  );
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Light top bar like the screenshot */}
      <section className="relative border-b border-slate-200 bg-[#f2f2f2]">
        {/* subtle top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-black/10" />

        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          {/* round icon badge */}
          <div className="mx-auto -mt-2 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-black bg-[#d8b075] shadow-sm">
            {/* simple book/arch icon */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M3 4h7a2 2 0 0 1 2 2v14H5a2 2 0 0 1-2-2z" />
              <path d="M21 4h-7a2 2 0 0 0-2 2v14h7a2 2 0 0 0 2-2z" />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold tracking-wide md:text-4xl">
            PUBLICATIONS
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            Explore Arton Capital’s reports, market intelligence, and thought
            leadership on global citizenship, wealth mobility, and investment
            migration.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-amber-700">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">Publications</span>
          </div>
        </div>
      </section>

      {/* Publications list (clean Arton-style rows) */}
      <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {PUBLICATIONS.map((pub, i) => (
            <article
              key={pub.id}
              className={`grid gap-6 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:p-7 ${
                i !== 0 ? "border-t border-slate-200" : ""
              } ${i % 2 === 1 ? "bg-slate-50/40" : "bg-white"}`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <CoverOrPlaceholder cover={pub.cover} title={pub.title} />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                  {pub.year && (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">
                      {pub.year}
                    </span>
                  )}
                  {pub.tags?.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-amber-50 px-2 py-0.5 text-amber-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
                  {pub.title}
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                  {pub.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {/* Direct download link — no JS, no handler */}
                  <Link
                    href={pub.pdfUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-amber-600 hover:text-amber-800"
                  >
                    Download Now
                  </Link>

                  <span className="text-xs text-slate-500">
                    Free PDF • Opens in new tab
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
