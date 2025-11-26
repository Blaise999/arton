// app/industry-digest/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Industry Digest",
  description:
    "Industry digest is a machine-generated list of web articles intended for information purposes only.",
  alternates: { canonical: "/industry-digest" },
  openGraph: {
    title: "Industry Digest",
    description:
      "Industry digest is a machine-generated list of web articles intended for information purposes only.",
    url: "/industry-digest",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Industry Digest",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Industry Digest",
    description:
      "Industry digest is a machine-generated list of web articles intended for information purposes only.",
  },
};

type DigestCategory = {
  id: string; // legacy WP category id
  slug: string; // query slug in Next
  label: string;
};

type DigestItem = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  category: string; // DigestCategory.slug
  href: string;
  source?: string;
};

const DIGEST_CATEGORIES: DigestCategory[] = [
  { id: "7", slug: "all", label: "All" },
  { id: "82", slug: "antigua-barbuda-digest", label: "Antigua & Barbuda" },
  { id: "83", slug: "bulgaria-digest", label: "Bulgaria" },
  { id: "84", slug: "cyprus-digest", label: "Cyprus" },
  { id: "85", slug: "dominica-digest", label: "Dominica" },
  { id: "86", slug: "grenada-digest", label: "Grenada" },
  { id: "181", slug: "montenegro-digest", label: "Montenegro" },
  { id: "87", slug: "portugal-digest", label: "Portugal" },
  { id: "88", slug: "quebec-canada-digest", label: "Quebec (Canada)" },
  { id: "89", slug: "st-kitts-nevis-digest", label: "St. Kitts & Nevis" },
  { id: "94", slug: "st-lucia-digest", label: "St. Lucia" },
  { id: "90", slug: "uk-digest", label: "UK" },
  { id: "91", slug: "usa-eb-5-digest", label: "USA EB-5" },
];

// NOTE: These are starter items pulled from your pasted HTML.
// Replace later with a real RSS/import pipeline if you want it live.
const DIGEST_ITEMS: DigestItem[] = [
  {
    id: "eb5-processing-time-concurrent-application",
    title:
      "EB–5 Visa Processing Time: Concurrent Application Rules Expedite Immigrants to Get US Citizenship",
    date: "2025-11-20",
    excerpt:
      "How long is EB-5 visa processing time for foreign nationals evaluating investment.",
    category: "usa-eb-5-digest",
    href:
      "https://www.einpresswire.com/article/868559994/eb-5-visa-processing-time-concurrent-application-rules-expedite-immigrants-to-get-us-citizenship",
    source: "EIN Presswire",
  },
  {
    id: "eb5-filing-fees-reversion-jdsupra",
    title: "Immediate EB–5 Filing Fees Reversion",
    date: "2025-11-20",
    excerpt:
      "In a significant win for immigrant investors, DHS’ 2024 EB-5 fee increases were rolled back after a court ruling.",
    category: "usa-eb-5-digest",
    href:
      "https://www.jdsupra.com/legalnews/immediate-eb-5-filing-fees-reversion-9472027/",
    source: "JDSupra / Bradley Arant Boult Cummings LLP",
  },
  {
    id: "global-immigration-partners-expanded-eb5",
    title:
      "Global Immigration Partners Announces Expanded EB–5 Legal Services to Support High Net Worth Investors",
    date: "2025-11-20",
    excerpt:
      "Global Immigration Partners LLP expands EB-5 legal services for investors.",
    category: "usa-eb-5-digest",
    href:
      "https://www.einpresswire.com/article/868977182/global-immigration-partners-announces-expanded-eb-5-legal-services-to-support-high-net-worth-investors",
    source: "EIN Presswire",
  },
  {
    id: "uk-high-earners-faster-visa-path",
    title: "UK to allow high-earners new, faster visa path to residency",
    date: "2025-11-20",
    excerpt:
      "A new accelerated pathway for top earners signals a shift in UK mobility policy.",
    category: "uk-digest",
    href:
      "https://m.economictimes.com/nri/migrate/uk-to-allow-high-earners-new-faster-visa-path-to-residency/articleshow/125464165.cms",
    source: "The Economic Times",
  },
  {
    id: "portugal-gv-investment-fund-passive-returns",
    title:
      "Portugal Golden Visa Investment Fund: Secure EU Residency with Passive Returns",
    date: "2025-11-20",
    excerpt:
      "A hands-off route to EU residency via regulated investment funds.",
    category: "portugal-digest",
    href:
      "https://techbullion.com/portugal-golden-visa-investment-fund-secure-eu-residency-with-passive-returns/",
    source: "TechBullion",
  },
  {
    id: "digital-nomad-visa-london-portugal",
    title:
      "How the Digital Nomad Visa Opens a Practical Route from London to Portugal",
    date: "2025-11-20",
    excerpt:
      "Portugal’s remote-work route and how it intersects with residency planning.",
    category: "portugal-digest",
    href:
      "https://london-post.co.uk/how-the-digital-nomad-visa-opens-a-practical-route-from-london-to-portugal/",
    source: "London Post",
  },
  {
    id: "caribbean-cbi-regulator-2026",
    title: "2026 CBI Countries and New Caribbean CBI Regulator",
    date: "2025-11-20",
    excerpt:
      "A look at the Caribbean CBI landscape and the coming regional regulator.",
    category: "antigua-barbuda-digest",
    href:
      "https://www.bignewsnetwork.com/news/278705757/2026-cbi-countries-and-new-caribbean-cbi-regulator",
    source: "Big News Network",
  },
  {
    id: "saint-lucia-citizenship-2025-video",
    title: "How to Qualify for Saint Lucia Citizenship in 2025",
    date: "2025-11-20",
    excerpt:
      "Video explainer on eligibility and pathways for St. Lucia CBI.",
    category: "st-lucia-digest",
    href: "https://www.youtube.com/shorts/VX6n9dgJ9DA",
    source: "YouTube",
  },
];

function getCategoryBySlugOrId(value: string | undefined) {
  if (!value || value === "all") return DIGEST_CATEGORIES[0];
  return (
    DIGEST_CATEGORIES.find((c) => c.slug === value) ||
    DIGEST_CATEGORIES.find((c) => c.id === value)
  );
}

export default async function IndustryDigestPage({
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

  const sorted = [...DIGEST_ITEMS].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );

  const filtered =
    categoryObj.slug === "all"
      ? sorted
      : sorted.filter((n) => n.category === categoryObj.slug);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Number.isFinite(currentPage)
    ? Math.min(Math.max(currentPage, 1), totalPages)
    : 1;

  const start = (safePage - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);
  const nextPage = safePage < totalPages ? safePage + 1 : null;

  const disclaimer =
    "Industry digest is a machine-generated list of web articles intended for information purposes only. Arton does not endorse, nor promote any of the content and is not responsible for any of the links provided.";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero — dark background */}
      <section className="relative w-full">
        <div className="h-[220px] md:h-[260px] w-full bg-[#0B0F14]">
          <div className="h-full w-full bg-[radial-gradient(80%_80%_at_20%_0%,rgba(0,224,255,0.10)_0%,transparent_60%),radial-gradient(70%_70%_at_90%_10%,rgba(204,153,102,0.12)_0%,transparent_55%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="mx-auto h-full w-full max-w-6xl px-4 flex items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Industry Digest
              </h1>
              <p className="mt-2 text-sm md:text-base text-white/75 max-w-2xl">
                Machine-generated links from across the global citizenship industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + list */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-zinc-700">
              Category
            </span>

            <div className="flex flex-wrap gap-2">
              {DIGEST_CATEGORIES.map((cat) => {
                const active =
                  cat.slug === categoryObj.slug || cat.id === categoryObj.id;

                const href =
                  cat.slug === "all"
                    ? "/industry-digest"
                    : `/industry-digest?category=${cat.slug}`;

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

        <p className="mt-4 text-sm text-zinc-500">{disclaimer}</p>

        {/* List */}
        <div className="mt-6 space-y-4">
          {pageItems.map((item) => {
            const catLabel =
              DIGEST_CATEGORIES.find((c) => c.slug === item.category)?.label ??
              item.category;

            return (
              <article
                key={item.id}
                className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="text-xs md:text-sm text-zinc-500">
                  <span className="font-semibold text-zinc-700">
                    {catLabel}
                  </span>{" "}
                  <span className="mx-1">|</span>
                  <span>{item.date}</span>
                  {item.source ? (
                    <>
                      <span className="mx-1">•</span>
                      <span>{item.source}</span>
                    </>
                  ) : null}
                </div>

                <h2 className="mt-1 text-base md:text-lg font-semibold leading-snug">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.title}
                  </Link>
                </h2>

                <p className="mt-2 text-sm text-zinc-700">
                  {item.excerpt}
                </p>

                <div className="mt-2">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-900 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            );
          })}

          {pageItems.length === 0 && (
            <div className="py-12 text-center text-zinc-500">
              No articles found for this category yet.
            </div>
          )}
        </div>

        {/* Load more / Pagination */}
        <div className="mt-8 flex items-center justify-center">
          {nextPage ? (
            <Link
              href={
                categoryObj.slug === "all"
                  ? `/industry-digest?page=${nextPage}`
                  : `/industry-digest?category=${categoryObj.slug}&page=${nextPage}`
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

        <p className="mt-8 text-sm text-zinc-500">{disclaimer}</p>
      </section>
    </main>
  );
}
