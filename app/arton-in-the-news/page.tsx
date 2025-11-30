import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "In The News | Arton Capital",
  description:
    "Global coverage of Arton Capital and the investment migration industry.",
  alternates: { canonical: "/in-the-news" },
  openGraph: {
    title: "In The News | Arton Capital",
    description:
      "Global coverage of Arton Capital and the investment migration industry.",
    url: "/in-the-news",
    siteName: "Arton Capital",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "In The News | Arton Capital",
    description:
      "Global coverage of Arton Capital and the investment migration industry.",
  },
};

type NewsItem = {
  title: string;
  href: string;
  img: string;
  imgAlt: string;
  source: string; // e.g. "Newsweek"
  region: string; // e.g. "USA", "Germany"
  date: string; // ISO-ish or YYYY-MM-DD
  excerpt: string;
  featured?: boolean;
};

// ✅ Big single-page list. Add more items here (same shape) and it will auto-group + sort.
const NEWS_ITEMS: NewsItem[] = [
  {
    title:
      "America’s Young Millionaires Seek ‘Golden Visas’ Due to Election Concerns",
    href: "https://www.newsweek.com/americas-young-millonaires-seeks-golden-visas-due-election-concerns-1979144",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/11/images-1.png",
    imgAlt:
      "America’s Young Millionaires Seek ‘Golden Visas’ Due to Election Concerns",
    source: "Newsweek",
    region: "USA",
    date: "2024-11-03",
    excerpt:
      "A new wave of wealthy Americans, especially young tech entrepreneurs and finance professionals, is pursuing golden visas ahead of the U.S. presidential election.",
    featured: true,
  },
  {
    title: "More Americans are renouncing their citizenship—who is leaving and why",
    href: "https://fortune.com/2024/11/01/how-to-renounce-u-s-american-citizenship/",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/10/Fortune-Logo.png",
    imgAlt: "Fortune logo",
    source: "Fortune",
    region: "USA",
    date: "2024-11-01",
    excerpt:
      "Rising numbers of U.S. citizens are exploring renunciation, driven by taxes, politics, and lifestyle considerations.",
  },
  {
    title:
      "Record numbers of wealthy Americans are making plans to leave the U.S. after the election",
    href: "https://www.cnbc.com/2024/11/01/wealthy-americans-plans-leaving-united-states.html",
    img: "https://www.artoncapital.com/wp-content/uploads/2015/01/272px-CNBC_logo.svg_.png",
    imgAlt: "CNBC logo",
    source: "CNBC",
    region: "London, USA",
    date: "2024-11-01",
    excerpt:
      "Wealth advisors report increasing demand for second residencies and citizenships as affluent Americans seek optionality.",
  },
  {
    title:
      "This Caribbean nation is preparing for the ravages of climate change by selling citizenship",
    href: "https://www.washingtonpost.com/climate-environment/2024/10/04/dominica-hurricane-passports/",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/10/The-Washington-Post-Logo.png",
    imgAlt: "The Washington Post logo",
    source: "The Washington Post",
    region: "US",
    date: "2024-10-05",
    excerpt:
      "Dominica is using citizenship-by-investment revenues to fund resilience projects against hurricanes and climate impacts.",
  },
  {
    title:
      "Rich Americans prefer Harris over Trump—but want a second passport no matter who wins",
    href: "https://fortune.com/2024/10/03/millionaires-harris-trump-second-passports/",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/10/Fortune-Logo.png",
    imgAlt: "Fortune logo",
    source: "Fortune",
    region: "US",
    date: "2024-10-04",
    excerpt:
      "Millionaires are increasingly looking at golden visas and citizenship programs as a hedge against uncertainty.",
  },
  {
    title:
      "A lot of millionaires are considering leaving the U.S. after the election — regardless of who wins",
    href: "https://qz.com/most-millionaires-leave-the-u-s-after-the-election-1851663681",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/10/quartz-vector-logo.png",
    imgAlt: "Quartz logo",
    source: "Quartz",
    region: "US",
    date: "2024-10-04",
    excerpt:
      "Survey data shows rising interest in mobility and alternate residencies from America’s wealthy.",
  },
  {
    title:
      "These are the most powerful passports in the world according to the current Passport Index",
    href: "https://www.esquire.de/life/reisen/passport-index-maechtigste-reisepaesse-der-welt-ohne-visum-einreisen",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/09/Esquire-logo.png",
    imgAlt: "Esquire logo",
    source: "Esquire",
    region: "Germany",
    date: "2024-09-26",
    excerpt:
      "A snapshot of global mobility rankings and what they mean for citizens and investors.",
  },
  {
    title:
      "I help super-rich people get golden visas and passports – these are the 5 countries they most want to move to",
    href: "https://www.businessinsider.de/leben/international-panorama/in-diese-5-laender-wollen-die-meisten-superreichen-umziehen/",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/09/Business-Insider-Logo-scaled.jpg",
    imgAlt: "Business Insider logo",
    source: "Business Insider",
    region: "Germany",
    date: "2024-09-26",
    excerpt:
      "An interview-style overview of top investor migration destinations for UHNW families.",
  },
  {
    title: "London witnesses an exodus of millionaires",
    href: "https://timeskuwait.com/london-witnesses-an-exodus-of-millionaires/",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/08/images.jpeg",
    imgAlt: "The Times Kuwait",
    source: "The Times Kuwait",
    region: "Kuwait, UK",
    date: "2024-08-26",
    excerpt:
      "A study shows nearly half of UK millionaires are considering relocation amid tax and regulatory fears.",
  },
  {
    title:
      "Sri Lanka Announces Free Visas for Travelers From These 35 Countries",
    href: "https://www.cntraveler.com/story/sri-lanka-free-tourist-visas",
    img: "https://www.artoncapital.com/wp-content/uploads/2024/08/Conde%CC%81_Nast_Traveler_logo.svg_.png",
    imgAlt: "Condé Nast Traveler logo",
    source: "Condé Nast Traveler",
    region: "Sri Lanka",
    date: "2024-08-26",
    excerpt:
      "Sri Lanka temporarily eliminates tourist visa fees for visitors from 35 countries.",
  },
  {
    title:
      "Millionaire migration: 21% of young and wealthy from UK, France target UAE as new home",
    href: "https://www.arabianbusiness.com/money/wealth/millionaire-migration-21-of-young-and-wealthy-from-uk-france-target-uae-as-new-home-report-finds",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/12/Arabian-Business-English.jpg",
    imgAlt: "Arabian Business logo",
    source: "Arabian Business",
    region: "UK / France / UAE",
    date: "2024-08-21",
    excerpt:
      "Survey of 518 millionaires highlights UAE as a top relocation hub for young wealth.",
  },
  {
    title:
      "Global Mobility: The Role Of Investment Migration, Tech And Businesses",
    href: "https://www.forbes.com/councils/forbesbusinesscouncil/2024/08/19/global-mobility-the-role-of-investment-migration-tech-and-businesses/",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/10/forbes-logo.png",
    imgAlt: "Forbes logo",
    source: "Forbes",
    region: "Global",
    date: "2024-08-20",
    excerpt:
      "Why investment migration is becoming a core strategy for founders and global families.",
  },
  {
    title:
      "A gateway to Europe: Why Greece and Hungary are on every Gulf investor’s mind",
    href: "https://www.arabianbusiness.com/resources/a-gateway-to-europe-why-greece-and-hungary-are-on-every-gulf-investors-mind",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/12/Arabian-Business-English.jpg",
    imgAlt: "Arabian Business logo",
    source: "Arabian Business",
    region: "Greece / Hungary / Gulf",
    date: "2024-08-19",
    excerpt:
      "A look at Greece and Hungary Golden Visa routes, pathways, and investor demand.",
  },
  {
    title: "The world’s most powerful passports for 2024 so far",
    href: "https://www.cnn.com/travel/powerful-passports-july-2024-henley/index.html",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/10/cnn.travel.jpg",
    imgAlt: "CNN Travel logo",
    source: "CNN Travel",
    region: "USA",
    date: "2024-07-23",
    excerpt:
      "Singapore leads 2024 rankings on global mobility; an overview of top performers.",
  },
  {
    title: "How to invest for Caribbean citizenship",
    href: "https://www.telegraph.co.uk/money/investing/stocks-shares/how-invest-caribbean-citizenship/",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/04/Telegraph.jpg",
    imgAlt: "The Telegraph logo",
    source: "The Telegraph",
    region: "UK",
    date: "2024-07-08",
    excerpt:
      "A guide to Caribbean CBI routes, tightening due diligence, and evolving thresholds.",
  },
  {
    title: "The Golden Years Of The EB5 Investor Immigration Program Are Now",
    href: "https://www.forbes.com/sites/andyjsemotiuk/2024/06/10/the-golden-years-of-the-eb5-investor-immigration-program-are-now/",
    img: "https://www.artoncapital.com/wp-content/uploads/2017/10/forbes-logo.png",
    imgAlt: "Forbes logo",
    source: "Forbes",
    region: "USA",
    date: "2024-06-10",
    excerpt:
      "EB-5 reform, reserved-visa set-asides, and why U.S. investor immigration remains attractive.",
  },
];

function toDate(d: string) {
  const parsed = new Date(d);
  return Number.isNaN(parsed.getTime()) ? new Date("1970-01-01") : parsed;
}

function fmtDate(d: string) {
  const date = toDate(d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

function groupByYear(items: NewsItem[]) {
  const groups = new Map<number, NewsItem[]>();
  for (const item of items) {
    const y = toDate(item.date).getFullYear();
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push(item);
  }
  // sort items within each year (newest first)
  for (const [y, arr] of groups.entries()) {
    arr.sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime());
    groups.set(y, arr);
  }
  // return years sorted descending
  return Array.from(groups.entries()).sort((a, b) => b[0] - a[0]);
}

export default function InTheNewsPage() {
  const items = [...NEWS_ITEMS].sort(
    (a, b) => toDate(b.date).getTime() - toDate(a.date).getTime()
  );

  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);
  const grouped = groupByYear(rest);

  const latest = items.slice(0, 3);
  const years = Array.from(
    new Set(items.map((i) => toDate(i.date).getFullYear()))
  ).sort((a, b) => b - a);

  const regions = Array.from(new Set(items.map((i) => i.region))).slice(0, 8);

  const asSeenIn = Array.from(
    new Map(items.map((i) => [i.source, i])).values()
  ).slice(0, 12);

  return (
    <main className="bg-[#F7F8FB] text-[#0B1020]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,180,216,0.14),transparent_60%),radial-gradient(60%_50%_at_10%_20%,rgba(243,194,125,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-xs tracking-[0.2em] uppercase text-slate-600">
            Media & Press
          </p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
            In The News
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-700 md:text-lg">
            Global coverage of Arton Capital, investor migration, and the
            shifting landscape of global mobility.
          </p>

          {/* Quick stats row */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">Total Mentions</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums">
                {items.length}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">Latest Year</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums">
                {items[0] ? toDate(items[0].date).getFullYear() : "—"}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">Top Regions</div>
              <div className="mt-1 text-2xl font-semibold tabular-nums">
                Global
              </div>
            </div>
          </div>

          {/* Intro blurb */}
          <div className="mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm md:p-7">
            <h2 className="text-lg font-semibold md:text-xl">
              What the world is saying about Arton Capital
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
              From major financial outlets to global mobility think-pieces, we
              contribute insight on citizenship-by-investment, residency
              programs, tax strategy, and wealth preservation. Below is a living
              archive of our most relevant media coverage.
            </p>
          </div>
        </div>
      </section>

      {/* AS SEEN IN / LOGO STRIP */}
      {asSeenIn.length > 0 && (
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide text-slate-800">
                As seen in
              </h2>
              <span className="text-xs text-slate-500">
                {asSeenIn.length}+ global publications
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {asSeenIn.map((item) => (
                <a
                  key={item.source}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-[160px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:bg-slate-50"
                  aria-label={item.source}
                >
                  <div className="relative h-10 w-36 opacity-90 transition group-hover:opacity-100">
                    <Image
                      src={item.img}
                      alt={`${item.source} logo`}
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LATEST COVERAGE GRID */}
      {latest.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Latest Coverage
            </h2>
            <div className="text-sm text-slate-500">
              Fresh stories shaping global mobility
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((item) => (
              <MiniCard key={item.href} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* FEATURED */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-8 md:pb-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Featured</h2>
            <div className="text-sm text-slate-500">Newest highlights</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((item) => (
              <FeaturedCard key={item.href} item={item} />
            ))}
          </div>
        </section>
      )}

      {/* FILTER STRIP (STATIC UI FOR NOW) */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-base font-semibold md:text-lg">
                Browse by year or region
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                This archive auto-updates as we add new coverage.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {years.map((y) => (
                  <span
                    key={y}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700"
                  >
                    {y}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {regions.map((r) => (
                <span
                  key={r}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-700"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL NEWS BY YEAR */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold md:text-3xl">All Coverage</h2>
          <p className="text-sm text-slate-500">Sorted by latest first</p>
        </div>

        <div className="space-y-14">
          {grouped.map(([year, yearItems]) => (
            <div key={year} className="space-y-6">
              <div className="sticky top-0 z-10 -mx-6 bg-[#F7F8FB]/90 px-6 py-3 backdrop-blur">
                <h3 className="text-xl font-semibold md:text-2xl">{year}</h3>
              </div>

              <div className="space-y-6">
                {yearItems.map((item, idx) => (
                  <NewsRow key={item.href} item={item} flip={idx % 2 === 1} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA KIT / PRESS RESOURCES */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-18">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-slate-600">
                Press Resources
              </p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                Media Kit & Brand Assets
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                Download official Arton Capital logos, executive bios, and
                background on our investor migration advisory. For quotes,
                interviews or data requests, contact our media desk.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  High-resolution logos & wordmarks (dark / light)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Company profile + key statistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Exec bios and approved headshots
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B1020] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1020]/90"
                >
                  Contact Media Team
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  About Arton Capital
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <h4 className="text-lg font-semibold">Quick Press Facts</h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Fact label="Founded" value="2005" />
                <Fact label="Core focus" value="Investment Migration" />
                <Fact label="Coverage regions" value="Global" />
                <Fact label="Clients served" value="HNW / UHNW" />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <div className="text-sm text-slate-600">
                  For press inquiries:
                </div>
                <div className="mt-1 text-base font-semibold">
                  media@artonscapitalholdings.com
                </div>
                <div className="mt-2 text-sm text-slate-500">
                  Response within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">
                Get mobility insights in your inbox
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
                Monthly briefings on program updates, global trends, and new
                Arton Capital media coverage.
              </p>
            </div>

            <form
              className="flex w-full flex-col gap-3 sm:flex-row md:w-auto"
              action="#"
            >
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-full border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 sm:w-[280px]"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-[#0B1020] px-6 text-sm font-semibold text-white transition hover:bg-[#0B1020]/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">
              Want Arton Capital in your publication?
            </h3>
            <p className="mt-1 text-slate-600">
              We’re available for insights on citizenship-by-investment,
              residency programs, and global mobility trends.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0B1020] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0B1020]/90 md:mt-0"
          >
            Contact Media Team
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(16,24,40,0.12)]">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={item.img}
          alt={item.imgAlt}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
            {item.source}
          </span>
          <span>• {item.region}</span>
          <span>• {fmtDate(item.date)}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug md:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-base">
          {item.excerpt}
        </p>
        <div className="mt-5">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          >
            Read full article <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function NewsRow({ item, flip }: { item: NewsItem; flip?: boolean }) {
  return (
    <article className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[220px_1fr] md:gap-7 md:p-6">
      <div
        className={
          "relative h-[160px] overflow-hidden rounded-2xl bg-white md:h-[170px] " +
          (flip ? "md:order-2" : "")
        }
      >
        <Image
          src={item.img}
          alt={item.imgAlt}
          fill
          className="object-contain p-6"
          sizes="220px"
        />
      </div>

      <div className={flip ? "md:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
            {item.source}
          </span>
          <span>• {item.region}</span>
          <span>• {fmtDate(item.date)}</span>
        </div>
        <h4 className="mt-2 text-base font-semibold leading-snug md:text-lg">
          {item.title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {item.excerpt}
        </p>
        <div className="mt-4">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline"
          >
            Open article <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function MiniCard({ item }: { item: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300">
      <div className="relative aspect-[16/10] w-full bg-white">
        <Image
          src={item.img}
          alt={item.imgAlt}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700">
            {item.source}
          </span>
          <span>• {fmtDate(item.date)}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug md:text-base">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-700">
          {item.excerpt}
        </p>
        <div className="mt-4">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-900 hover:underline"
          >
            Read more ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}
