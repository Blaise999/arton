// app/industry-news/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industry News",
  description: "Industry Digest and updates from across global citizenship.",
  alternates: { canonical: "/industry-news" },
  openGraph: {
    title: "Industry News",
    description: "Industry Digest and updates from across global citizenship.",
    url: "/industry-news",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Industry News",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Industry News",
    description: "Industry Digest and updates from across global citizenship.",
  },
};

type Category = {
  id: string;
  slug: string;
  label: string;
};

type NewsItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  categories: string[]; // slugs
  href: string;
  image: string;
  imageAlt?: string;
};

const CATEGORIES: Category[] = [
  { id: "all", slug: "all", label: "All" },
  { id: "105", slug: "antigua-barbuda", label: "Antigua & Barbuda" },
  { id: "43", slug: "arton", label: "Arton" },
  { id: "215", slug: "arton-capital", label: "Arton Capital" },
  { id: "212", slug: "bond-industry-news", label: "Bond" },
  { id: "242", slug: "botswana-industry-news", label: "Botswana" },
  { id: "14", slug: "bulgaria", label: "Bulgaria" },
  { id: "44", slug: "canada", label: "Canada" },
  { id: "195", slug: "cryptocurrency", label: "Cryptocurrency" },
  { id: "104", slug: "cyprus", label: "Cyprus" },
  { id: "15", slug: "dominica", label: "Dominica" },
  { id: "200", slug: "donation", label: "Donation" },
  { id: "109", slug: "europe", label: "Europe" },
  { id: "45", slug: "events-news", label: "Events" },
  { id: "19", slug: "global-citizen-forum", label: "Global Citizen Forum" },
  { id: "110", slug: "global-citizenship", label: "Global Citizenship" },
  { id: "184", slug: "greece", label: "Greece" },
  { id: "81", slug: "grenada", label: "Grenada" },
  { id: "108", slug: "hungary-news", label: "Hungary" },
  { id: "187", slug: "malta", label: "Malta" },
  { id: "103", slug: "montenegro-news", label: "Montenegro" },
  { id: "120", slug: "news", label: "News" },
  { id: "111", slug: "opinion", label: "Opinion" },
  { id: "112", slug: "philanthropy", label: "Philanthropy" },
  { id: "97", slug: "portugal", label: "Portugal" },
  { id: "46", slug: "press", label: "Press" },
  { id: "47", slug: "press-releases", label: "Press releases" },
  { id: "22", slug: "quebec", label: "Quebec" },
  { id: "199", slug: "real-estate", label: "Real Estate" },
  { id: "217", slug: "schengen-area", label: "Schengen Area" },
  { id: "179", slug: "singapore-industry-news", label: "Singapore" },
  { id: "48", slug: "south-africa", label: "South Africa" },
  { id: "189", slug: "spain", label: "Spain" },
  { id: "106", slug: "st-kitts-nevis", label: "St. Kitts & Nevis" },
  { id: "102", slug: "st-lucia", label: "St. Lucia" },
  { id: "214", slug: "the-olympics", label: "The Olympics" },
  { id: "113", slug: "turkey", label: "Turkey" },
  { id: "49", slug: "uk", label: "UK" },
  { id: "185", slug: "united-arab-emirates", label: "United Arab Emirates" },
  { id: "114", slug: "united-states", label: "United States" },
];

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "the-2025-investment-migration-industry-reset",
    title: "The 2025 Investment Migration Industry Reset",
    date: "2025-11-20",
    excerpt: "Why Reliability, Regulation, and Long-Term...",
    categories: ["global-citizenship", "news"],
    href:
      "https://www.artoncapital.com/industry-news/the-2025-investment-migration-industry-reset/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/AC_The-2025-Migration-Industry-Reset-v1-300x300.jpg",
    imageAlt: "The 2025 Investment Migration Industry Reset",
  },
  {
    id: "americans-redefine-the-investment-migration-landscape",
    title: "Americans Redefine the Investment Migration Landscape",
    date: "2025-11-18",
    excerpt: "It’s...",
    categories: ["arton-capital", "opinion", "united-states"],
    href:
      "https://www.artoncapital.com/industry-news/the-great-rebalancing-americans-redefine-the-investment-migration-landscape/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/AC_Americans-are-dominating-Investment-Migration-v2-300x300.jpg",
    imageAlt: "Americans Redefine the Investment Migration Landscape",
  },
  {
    id: "portugals-nationality-law-moves-to-the-constitutional-court",
    title: "Portugal’s Nationality Law Moves to the Constitutional Court",
    date: "2025-11-14",
    excerpt: "What Investors Should Know",
    categories: ["portugal", "news"],
    href:
      "https://www.artoncapital.com/industry-news/portugals-nationality-law-moves-to-the-constitutional-court/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/AC_Portugals-Nationality-Law-Moves-to-the-Constitutional-Court-v3-300x300.jpg",
    imageAlt: "Portugal’s Nationality Law Moves to the Constitutional Court",
  },
  {
    id: "one-investment-schengen-today-euro-tomorrow",
    title: "From Schengen Freedom to Euro Stability: Bulgaria’s Next Chapter",
    date: "2025-11-12",
    excerpt: "Bulgaria’s Residency by Investment Program...",
    categories: ["bulgaria", "europe"],
    href:
      "https://www.artoncapital.com/industry-news/one-investment-schengen-today-euro-tomorrow/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/PI_Bulgaria-PR.-Schengen-in-2025-v4-300x300.jpg",
    imageAlt: "Bulgaria Residency by Investment",
  },
  {
    id: "arton-capital-dubai-sothebys",
    title: "Arton Capital partners with Dubai Sotheby’s International Realty",
    date: "2025-11-06",
    excerpt:
      "Citizenship, residency, and real estate to be brought together...",
    categories: [
      "arton",
      "arton-capital",
      "press-releases",
      "united-arab-emirates",
    ],
    href:
      "https://www.artoncapital.com/industry-news/press-releases/arton-capital-and-dubai-sothebys-international-realty-launch-strategic-alliance-to-redefine-global-living-for-hnwis/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/AC_Arton-Capital-x-Dubai-Sothebys-Press-Release-v1-2-300x300.jpg",
    imageAlt: "Arton Capital partners with Dubai Sotheby’s International Realty",
  },
  {
    id: "botswana-program-attracts-1000-investors",
    title:
      "Botswana’s Impact Citizenship Program Attracts 1,000+ Investors in First Month",
    date: "2025-11-03",
    excerpt: "How a purpose-led model drew interest from 99 nationalities...",
    categories: ["botswana-industry-news", "global-citizenship"],
    href:
      "https://www.artoncapital.com/industry-news/botswanas-impact-citizenship-program-attracts-1000-investors-in-first-month/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/11/AC_Botswanas-Impact-Citizenship-Program-Attracts-1_000_-Investors-v2-300x300.jpg",
    imageAlt: "Botswana Impact Citizenship Program",
  },
  {
    id: "portugal-extends-citizenship-timelines",
    title: "Portugal Extends Citizenship Timelines Under New Nationality Law",
    date: "2025-10-29",
    excerpt:
      "Clearer timelines, integration standards, and updated eligibility pathways...",
    categories: ["portugal", "europe"],
    href: "https://www.artoncapital.com/industry-news/portugals-nationality-law/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/AC_Portugal-Approves-Changes-to-the-Nationality-Law-v2-300x300.jpg",
    imageAlt: "Portugal Nationality Law",
  },
  {
    id: "uk-visa-requirement-botswana-nationals",
    title: "UK Visa Requirement for Botswana Nationals",
    date: "2025-10-23",
    excerpt: "Temporary Shifts in a Changing Mobility Landscape...",
    categories: ["botswana-industry-news", "uk"],
    href:
      "https://www.artoncapital.com/industry-news/uk-visa-requirement-for-botswana-nationals/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/AC_UK-Visa-Requirement-for-Botswana-Nationals-v2-300x300.jpg",
    imageAlt: "UK Visa Requirement for Botswana Nationals",
  },
  {
    id: "ees-for-dual-nationals",
    title: "EES for Dual Nationals: Which Passport Gets You Through Faster?",
    date: "2025-10-21",
    excerpt: "Schengen’s EES Is Live. Dual Citizens, Read This First...",
    categories: ["schengen-area", "europe"],
    href: "https://www.artoncapital.com/industry-news/ees-for-dual-nationals/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/PI_EES-for-Dual-Nationals-v1-300x300.jpg",
    imageAlt: "EES for Dual Nationals",
  },
  {
    id: "eu-visa-suspension-mechanism",
    title: "Is the EU Becoming Harder to Reach?",
    date: "2025-10-13",
    excerpt: "European Union Refines the Visa Suspension Mechanism...",
    categories: ["europe", "schengen-area"],
    href:
      "https://www.artoncapital.com/industry-news/visa-suspension-mechanism/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/AC_EU-updates-the-Visa-Suspension-v1-300x300.jpg",
    imageAlt: "EU Visa Suspension Mechanism",
  },
  {
    id: "h-1b-just-got-expensive",
    title: "H-1B Just Got Expensive",
    date: "2025-10-07",
    excerpt:
      "Reported $100k fee to hit any new applications from Sep 21, 2025...",
    categories: ["united-states", "news"],
    href: "https://www.artoncapital.com/industry-news/h-1b-just-got-expensive/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/10/AC_H-1B-Just-Got-Expensive-v2-300x300.jpg",
    imageAlt: "H-1B Just Got Expensive",
  },
  {
    id: "botswana-to-launch-impact-citizenship-programme",
    title: "Botswana to launch Impact Citizenship Programme",
    date: "2025-09-26",
    excerpt: "Arton Capital has...",
    categories: ["botswana-industry-news", "global-citizenship"],
    href:
      "https://www.artoncapital.com/industry-news/botswana-to-launch-impact-citizenship-programme/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/09/AC_Botswana_NYC-v1-300x300.jpg",
    imageAlt: "Botswana to launch Impact Citizenship Programme",
  },

  // extra ones they added (kept same)
  {
    id: "greece-golden-visa-expansion-2025",
    title: "Greece Golden Visa Expansion: Access to More Property Markets in 2025",
    date: "2025-08-14",
    excerpt:
      "Greece broadens its Golden Visa real-estate options, opening access to more regions and investor pathways.",
    categories: ["greece", "europe", "real-estate", "schengen-area"],
    href:
      "https://www.artoncapital.com/industry-news/greece-golden-visa-expansion-access-to-more-property-markets-in-2025/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/08/AC_Greece-Golden-Visa-Expansion-Access-to-More-Property-Markets-in-2025-300x300.jpg",
    imageAlt: "Greece Golden Visa Expansion",
  },
  {
    id: "europe-ees-about-to-change-everything",
    title: "Europe’s EES Is About to Change Everything. What Comes Next?",
    date: "2025-08-11",
    excerpt:
      "A rundown of the EU’s Entry/Exit System rollout and what it means for Schengen mobility and dual citizens.",
    categories: ["europe", "schengen-area", "news"],
    href:
      "https://www.artoncapital.com/industry-news/europes-ees-is-about-to-change-everything-what-comes-next/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/08/PI_Europe-EES-Is-About-to-Change-Everything-v1-300x300.jpg",
    imageAlt: "Europe EES Update",
  },
  {
    id: "cyprus-residency-by-investment-about-to-end",
    title: "Cyprus Residency by Investment: Is it About to End?",
    date: "2025-08-05",
    excerpt:
      "Policy signals suggest Cyprus could tighten or sunset its residency-by-investment route—here’s the data investors should watch.",
    categories: ["cyprus", "europe", "real-estate"],
    href:
      "https://www.artoncapital.com/industry-news/cyprus-residency-by-investment-is-it-about-to-end/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/08/AC_Cyprus-Residency-by-Investment-Is-it-About-to-End-300x300.jpg",
    imageAlt: "Cyprus Residency by Investment",
  },
  {
    id: "citizenship-by-invitation-to-revolutionise-investor-immigration",
    title: "‘Citizenship by Invitation’ to revolutionise investor immigration",
    date: "2025-01-29",
    excerpt:
      "Arton Capital unveils ‘Citizenship by Invitation’, positioning it as a next-generation model for investor immigration.",
    categories: ["grenada", "arton-capital"],
    href:
      "https://www.artoncapital.com/industry-news/citizenship-by-invitation-to-revolutionise-investor-immigration/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/01/AC_Citizenship-by-Invitation.jpg",
    imageAlt: "Citizenship by Invitation",
  },
  {
    id: "newly-launched-hungary-golden-visa-program",
    title: "Newly Launched Hungary Golden Visa Program: What Investors Need to Know",
    date: "2024-11-28",
    excerpt:
      "Hungary’s Guest Investor Program is live. Here’s eligibility, timelines, and the core investment routes.",
    categories: ["hungary-news", "europe", "real-estate", "schengen-area"],
    href:
      "https://www.artoncapital.com/industry-news/newly-launched-hungary-golden-visa-program-what-investors-need-to-know/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/11/AC_Newly-Launched-Hungary-Golden-Visa-Program-300x300.jpg",
    imageAlt: "New Hungary Golden Visa Program",
  },
  {
    id: "signals-point-to-hungary-as-europes-next-property-hotspot",
    title: "Signals Point to Hungary as Europe’s Next Property Hotspot",
    date: "2024-10-14",
    excerpt:
      "Hungary’s property and policy signals are aligning—making it a rising residency-by-investment destination.",
    categories: ["hungary-news", "europe", "real-estate"],
    href:
      "https://www.artoncapital.com/industry-news/signals-point-to-hungary-as-europes-next-property-hotspot/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/10/AC_Hungary-Europe-Next-Property-Hotspot-300x300.jpg",
    imageAlt: "Hungary Property Hotspot",
  },
  {
    id: "maltas-residency-and-citizenship-programs",
    title: "Malta’s Residency and Citizenship Programs",
    date: "2024-09-06",
    excerpt:
      "A dual-track look at Malta’s Golden Visa (MPRP) and citizenship-by-investment pathways for HNW investors.",
    categories: ["malta", "europe", "real-estate", "schengen-area"],
    href:
      "https://www.artoncapital.com/industry-news/maltas-residency-and-citizenship-programs/",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/09/AC_Maltas-Residency-and-Citizenship-Programs-300x300.jpg",
    imageAlt: "Malta Residency and Citizenship Programs",
  },
];

function getCategoryBySlugOrId(value: string | undefined) {
  if (!value || value === "all") return CATEGORIES[0];
  return (
    CATEGORIES.find((c) => c.slug === value) ||
    CATEGORIES.find((c) => c.id === value)
  );
}

export default async function IndustryNewsPage({
  searchParams = {},
}: {
  searchParams?:
    | { category?: string | string[]; page?: string | string[] }
    | Promise<{ category?: string | string[]; page?: string | string[] }>;
}) {
  const sp = await Promise.resolve(searchParams as any);

  const categoryParam = Array.isArray(sp.category) ? sp.category[0] : sp.category;
  const pageParam = Array.isArray(sp.page) ? sp.page[0] : sp.page;

  const selectedCategory = categoryParam ?? "all";
  const currentPage = Number(pageParam ?? "1");
  const perPage = 12;

  const categoryObj = getCategoryBySlugOrId(selectedCategory);
  if (!categoryObj) notFound();

  const filtered =
    categoryObj.slug === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.categories.includes(categoryObj.slug));

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Number.isFinite(currentPage)
    ? Math.min(Math.max(currentPage, 1), totalPages)
    : 1;

  const start = (safePage - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  const nextPage = safePage < totalPages ? safePage + 1 : null;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero — dark background (no image) */}
      <section className="relative w-full">
        <div className="h-[220px] md:h-[260px] w-full bg-[#0B0F14]">
          <div className="h-full w-full bg-[radial-gradient(80%_80%_at_20%_0%,rgba(0,224,255,0.10)_0%,transparent_60%),radial-gradient(70%_70%_at_90%_10%,rgba(204,153,102,0.12)_0%,transparent_55%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="mx-auto h-full w-full max-w-6xl px-4 flex items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Industry News
              </h1>
              <p className="mt-2 text-sm md:text-base text-white/75 max-w-2xl">
                Updates, insights, and analysis from across the global citizenship industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-700">
              Category
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active =
                  cat.slug === categoryObj.slug || cat.id === categoryObj.id;

                const href =
                  cat.slug === "all"
                    ? "/industry-news"
                    : `/industry-news?category=${cat.slug}`;

                return (
                  <Link
                    key={cat.id}
                    href={href}
                    className={[
                      "rounded-full border px-3 py-1 text-xs md:text-sm transition",
                      active
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-300 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900",
                    ].join(" ")}
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="text-xs md:text-sm text-zinc-500">
            Showing{" "}
            <span className="font-medium text-zinc-700">
              {filtered.length}
            </span>{" "}
            items in{" "}
            <span className="font-medium text-zinc-700">
              {categoryObj.label}
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pageItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              {/* No Link: card no longer navigates anywhere */}
              <div className="block">
                <div className="relative aspect-square bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="text-xs text-zinc-500">
                    {item.date}
                  </div>
                  <h3 className="mt-1 text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-700 line-clamp-2">
                    {item.excerpt}
                  </p>

                  {item.categories.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.categories.map((slug) => {
                        const cat = CATEGORIES.find((c) => c.slug === slug);
                        if (!cat) return null;
                        return (
                          <span
                            key={slug}
                            className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-700"
                          >
                            {cat.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}

          {pageItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-zinc-500">
              No posts found for this category yet.
            </div>
          )}
        </div>

        {/* Load more / Pagination */}
        <div className="mt-8 flex items-center justify-center">
          {nextPage ? (
            <Link
              href={
                categoryObj.slug === "all"
                  ? `/industry-news?page=${nextPage}`
                  : `/industry-news?category=${categoryObj.slug}&page=${nextPage}`
              }
              className="rounded-full border border-zinc-900 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-900 hover:text-white transition"
            >
              Load more
            </Link>
          ) : (
            <div className="text-xs text-zinc-500">
              You’ve reached the end.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
