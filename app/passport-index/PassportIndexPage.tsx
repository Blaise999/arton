// app/passport-index/PassportIndexPage.tsx
import Image from "next/image";
import Link from "next/link";
import FloatingContact from "./components/FloatingContact";

type FeatureTile = {
  title: string;
  href: string;
  description: string;
  cta: string;
};

type RankingCard = {
  title: string;
  href: string;
  body: string;
  cta: string;
};

const GOLD = "text-[#cc9966]";

// -------------------- DATA --------------------
const exploreTiles: FeatureTile[] = [
  {
    title: "By Country",
    href: "https://www.passportindex.org/",
    description:
      "Explore our interactive mosaic by country; find your passport or discover others.",
    cta: "Explore",
  },
  {
    title: "By Region",
    href: "https://www.passportindex.org/byRegion.php",
    description:
      "Filter passports within specific continents, regions, unions, and geopolitical filters.",
    cta: "Explore",
  },
  {
    title: "Map",
    href: "https://www.passportindex.org/passport-color-map.php",
    description:
      "Unveil a world map represented by the location of each country’s passport.",
    cta: "Explore",
  },
  {
    title: "By Color",
    href: "https://www.passportindex.org/byColor.php",
    description: "Sort passports by the colour of their cover.",
    cta: "Explore",
  },
];

const rankingCards: RankingCard[] = [
  {
    title: "Global Passport Power Rank",
    href: "https://www.passportindex.org/byRank.php",
    body:
      "Passports are sorted by their Mobility Score (visa-free, visa on arrival, eTA and fast eVisa). Higher score = better mobility. Compare up to 4 passports with filters.",
    cta: "View Ranking",
  },
  {
    title: "Individual Passport Power Rank",
    href: "https://www.passportindex.org/byIndividualRank.php",
    body:
      "Each passport has a unique rank based on Mobility Score and HDI. Two countries with same mobility can rank differently due to development factors.",
    cta: "View Ranking",
  },
  {
    title: "Welcoming Countries Rank",
    href: "https://www.passportindex.org/byWelcomingRank.php",
    body:
      "Ranks countries by how many passports they welcome visa-free or with VOA. Shows most/least welcoming destinations worldwide.",
    cta: "View Ranking",
  },
];

const compareTiles: FeatureTile[] = [
  {
    title: "Compare By Passport",
    href: "https://www.passportindex.org/comparebyPassport.php",
    description:
      "Compare passports side by side to discover differences and similarities instantly.",
    cta: "Explore Compare Tool",
  },
  {
    title: "Compare By Destination",
    href: "https://www.passportindex.org/comparebyDestination.php",
    description:
      "Compare welcoming scores of multiple passports for a destination list.",
    cta: "Explore Compare Tool",
  },
];

const nigeriaVisaFreeList = [
  "Barbados",
  "Benin",
  "Bolivia",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Chad",
  "Comoros",
  "Congo (Dem. Rep.)",
  "Cote d'Ivoire (Ivory Coast)",
  "Djibouti",
  "Dominica",
  "Equatorial Guinea",
  "Ethiopia",
  "Fiji",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Haiti",
  "Iran",
  "Kenya",
  "Kiribati",
  "Lebanon",
  "Liberia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Micronesia",
  "Mozambique",
  "Niger",
  "Pakistan",
  "Palau",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Samoa",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "South Sudan",
  "Suriname",
  "Timor-Leste",
  "Togo",
  "Tuvalu",
  "Uganda",
  "Vanuatu",
  "Viet Nam",
];

const mediaQuotes = [
  {
    quote:
      "…it’s strangely satisfying to see the world’s passports grouped into collections of red, blue, green and black",
    outlet: "THE WASHINGTON POST",
  },
  {
    quote:
      "How powerful is your passport? Canada’s financial consulting firm Arton Capital challenged this question",
    outlet: "THE WALL STREET JOURNAL",
  },
  {
    quote:
      "A ranking of the world’s most powerful passports… a powerful tool",
    outlet: "CNN MONEY",
  },
  {
    quote:
      "…stark differences are revealed in The Passport Index",
    outlet: "BUSINESS INSIDER",
  },
  {
    quote:
      "It just got a lot easier to navigate the labyrinth of visa regulations… The Passport Index is your one-stop shop for all things passport",
    outlet: "CONDE NAST TRAVELER",
  },
];

// -------------------- PAGE --------------------
export default function PassportIndexPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ===== HERO / TOP BANNER ===== */}
      <section className="relative">
        <div className="relative h-[300px] w-full md:h-[420px]">
          <Image
            src="https://www.artoncapital.com/wp-content/uploads/2018/12/Arton-slider-Passport-Index.jpg"
            alt="Passport Index hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4">
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                The Passport Index
              </h1>
              <p className="mt-3 max-w-xl text-sm text-white/90 md:text-base">
                World&apos;s passports in your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Intro */}
        <Section>
          <div className="space-y-4 text-center">
            <h2 className={`text-2xl font-semibold md:text-3xl ${GOLD}`}>
              The Passport Index is the first real-time interactive platform to
              display, sort, and rank the world’s passports.
            </h2>

            <p className="mx-auto max-w-3xl text-sm text-slate-700 md:text-base">
              The Passport Index is an interactive online tool that allows users to
              discover the world of passports by learning about their power and
              significance in today’s global world.
            </p>

            <p className="mx-auto max-w-3xl text-sm text-slate-700 md:text-base">
              Calculate your passport’s Global Mobility Score, improve your passport
              ranking, and discover the latest insights on visa policies, biometric
              technology, country branding, public security, philanthropy, foreign
              policy, and more.
            </p>

            <p className="mx-auto max-w-3xl text-sm text-slate-700 md:text-base">
              Created by Arton Capital in 2014, The Passport Index has become a global
              reference on passport ranking.
            </p>
          </div>
        </Section>

        {/* Video + Store */}
        <Section>
          <VideoBlock
            title="Watch: The Passport Index"
            src="https://www.youtube.com/embed/F-kI746Ksh8"
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <StoreBadge
              href="https://apps.apple.com/ca/app/passport-index/id1488786142"
              img="https://www.artoncapital.com/wp-content/uploads/2020/01/appstore.png"
              alt="Download on the App Store"
            />
            <StoreBadge
              href="https://play.google.com/store/apps/details?id=com.passportindex.androidapp"
              img="https://www.artoncapital.com/wp-content/uploads/2021/03/google-play-badge-ac.png"
              alt="Get it on Google Play"
            />
          </div>
        </Section>

        {/* Inspire / Inform / Engage */}
        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="Inspire">
              In today’s world, becoming a Global Citizen is more important than
              ever. Having a second citizenship is empowering and comes with a
              shared responsibility to the world.
            </InfoCard>
            <InfoCard title="Inform">
              Educate and inform our community on the power of passports. United by
              diversity, passports influence opportunity, mobility and quality of
              life.
            </InfoCard>
            <InfoCard title="Engage">
              Encourage discussions on visa policies, citizenship, country branding,
              global mobility, public security, philanthropy and foreign policy.
            </InfoCard>
          </div>
        </Section>

        {/* Methodology + Importance */}
        <Section>
          <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                What is the Passport Index methodology?
              </h3>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                Data is based on proprietary research from public sources and official
                government information. The index considers 193 UN members and selected
                territories that issue passports. Destinations that do not issue
                passports are excluded.
              </p>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                For more information about methodology, visit the Passport Index website.
              </p>
              <Link
                href="https://www.passportindex.org/about.php"
                target="_blank"
                className={`mt-3 inline-block text-sm font-medium ${GOLD} underline`}
              >
                Visit methodology
              </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">
                Why is Passport Power important?
              </h3>
              <p className="mt-3 text-sm text-slate-700 md:text-base">
                Passports influence opportunity, freedom of mobility and quality of
                life. Governments use rankings to benchmark access and global openness.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-iOS-App.jpg"
            alt="Passport Index app"
          />
        </Section>

        {/* HOW TO USE */}
        <SectionHeader title="How to use the Passport Index?" />

        {/* Explore Passports */}
        <Section>
          <SubHeading>Explore Passports</SubHeading>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            Dig deeper into passport rankings by country, region, location, colour and
            more. Uncover new things about your passport and global trends.
          </p>

          <FeatureGrid tiles={exploreTiles} />
          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Explore.jpg"
            alt="Explore passports screenshot"
          />
        </Section>

        {/* Rank Passports */}
        <Section>
          <SubHeading>Rank Passports</SubHeading>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            The Passport Index has developed Global, Individual, and Welcoming ranking
            systems to define mobility, unity and freedom.
          </p>

          <RankingGrid cards={rankingCards} />
          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Rank-Global.jpg"
            alt="Rank passports screenshot"
          />
        </Section>

        {/* WOS */}
        <Section>
          <SubHeading>World Openness Score</SubHeading>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700 md:text-base">
              The World Openness Score (WOS) is a real-time barometer of global mobility.
              The closer the score gets to its maximum, the more open the world is
              becoming. Track variation over time and filter by continent, region, and union.
            </p>
            <Link
              href="https://www.passportindex.org/world-openness-score.php"
              target="_blank"
              className={`mt-3 inline-block text-sm font-medium ${GOLD} underline`}
            >
              View Score
            </Link>
          </div>

          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Rank-WOS.jpg"
            alt="World openness score screenshot"
          />
        </Section>

        {/* Compare Tools */}
        <Section>
          <SubHeading>Compare Tools</SubHeading>
          <p className="mt-2 text-sm text-slate-700 md:text-base">
            Compare passports side by side to reveal details on visa policies,
            mobility scores, and more.
          </p>

          <FeatureGrid tiles={compareTiles} cols={2} />
          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Compare-Passports.jpg"
            alt="Compare passports screenshot"
          />
        </Section>

        {/* Improve Mobility */}
        <Section>
          <SubHeading>Improve Passport Mobility</SubHeading>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700 md:text-base">
              A second or third passport can grant greater freedom to travel. This tool
              shows how additional passports can improve your Global Mobility Score.
            </p>
            <Link
              href="https://www.passportindex.org/improve.php"
              target="_blank"
              className={`mt-3 inline-block text-sm font-medium ${GOLD} underline`}
            >
              Improve Your Passport
            </Link>
          </div>

          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Improve.jpg"
            alt="Improve mobility screenshot"
          />
        </Section>

        {/* Visa Checker */}
        <Section>
          <SubHeading>Travel Visa Checker App</SubHeading>
          <div className="mt-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700 md:text-base">
              For urgent visa questions on the go, the Passport Index Travel Visa Checker
              app gives simple and quick answers in a few clicks.
            </p>
          </div>

          <BigImage
            src="https://www.artoncapital.com/wp-content/uploads/2020/09/Passport-Index-Android-App.jpg"
            alt="Visa checker app screenshot"
          />
        </Section>

        {/* Nigeria Snapshot */}
        <Section>
          <SubHeading>Nigeria Sample Mobility Snapshot</SubHeading>
          <NigeriaWidgetSample list={nigeriaVisaFreeList} />
        </Section>

        {/* Video 2 */}
        <Section>
          <VideoBlock
            title="Watch: Passport Index Insights"
            src="https://www.youtube.com/embed/V5AaKsTmfLE"
          />
        </Section>

        {/* Media */}
        <Section>
          <SubHeading>Praised by the Media</SubHeading>
          <MediaQuotes quotes={mediaQuotes} />
        </Section>

        {/* Final CTA */}
        <Section>
          <div className="text-center">
            <Link
              href="https://www.passportindex.org/"
              target="_blank"
              className="inline-flex rounded-full bg-[#cc9966] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black"
            >
              Explore The World of Passports
            </Link>
          </div>
        </Section>
      </main>

      {/* Floating contact fan (remove if global layout already includes it) */}
      <FloatingContact />
    </div>
  );
}

/* ===================== UI HELPERS ===================== */

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 md:mt-12">{children}</section>;
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="mt-14 text-center text-2xl font-semibold md:text-3xl">
      {title}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">
        {children}
      </h3>
      <hr className="mt-2 border-slate-200" />
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-700 md:text-base">{children}</p>
    </div>
  );
}

function FeatureGrid({ tiles, cols = 4 }: { tiles: FeatureTile[]; cols?: 2 | 4 }) {
  return (
    <div
      className={`mt-6 grid gap-4 ${
        cols === 4 ? "md:grid-cols-4" : "md:grid-cols-2"
      }`}
    >
      {tiles.map((t) => (
        <Link
          key={t.title}
          href={t.href}
          target="_blank"
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#cc9966]"
        >
          <h4 className="text-sm font-semibold text-slate-900">{t.title}</h4>
          <p className="mt-2 text-sm text-slate-700">{t.description}</p>
          <span className="mt-3 inline-block text-xs font-semibold text-[#cc9966] underline">
            {t.cta}
          </span>
        </Link>
      ))}
    </div>
  );
}

function RankingGrid({ cards }: { cards: RankingCard[] }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <Link
          key={c.title}
          href={c.href}
          target="_blank"
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#cc9966]"
        >
          <h4 className="text-sm font-semibold text-slate-900">{c.title}</h4>
          <p className="mt-2 text-sm text-slate-700">{c.body}</p>
          <span className="mt-3 inline-block text-xs font-semibold text-[#cc9966] underline">
            {c.cta}
          </span>
        </Link>
      ))}
    </div>
  );
}

function BigImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-xl border border-slate-200 md:h-[360px]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

function VideoBlock({ title, src }: { title: string; src: string }) {
  return (
    <div>
      <h3 className="text-center text-sm font-semibold tracking-wide text-slate-900">
        {title}
      </h3>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function StoreBadge({
  href,
  img,
  alt,
  small,
}: {
  href: string;
  img: string;
  alt: string;
  small?: boolean;
}) {
  return (
    <Link href={href} target="_blank" className="inline-block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={alt}
        style={{ height: small ? 36 : 56, width: "auto" }}
      />
    </Link>
  );
}

function NigeriaWidgetSample({ list }: { list: string[] }) {
  return (
    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-base font-semibold">
        Nigeria passport holders can visit{" "}
        <span className="font-bold">54 countries</span> visa-free (approx. 27% of the world).
      </h4>

      <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
        {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((x) => (
          <span key={x} className="rounded-full bg-slate-100 px-3 py-1">
            {x}
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((c) => (
          <div
            key={c}
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800"
          >
            {c}
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-slate-500">
        Visa-free includes visa-free, visa on arrival, eTA and fast eVisa (if issued in less than 3 working days).
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <MiniBtn href="https://www.passportindex.org/?country=ng">Explore</MiniBtn>
        <MiniBtn href="https://www.passportindex.org/comparebyPassport.php?p1=ng&s=yes">
          Compare
        </MiniBtn>
        <MiniBtn href="https://www.passportindex.org/improve.php?p1=ng&s=yes">
          Improve
        </MiniBtn>
      </div>
    </div>
  );
}

function MiniBtn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 hover:border-[#cc9966] hover:text-[#cc9966]"
    >
      {children}
    </Link>
  );
}

function MediaQuotes({
  quotes,
}: {
  quotes: { quote: string; outlet: string }[];
}) {
  return (
    <div className="mt-6 space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      {quotes.map((q) => (
        <div key={q.outlet} className="text-center">
          <p className="text-sm italic text-slate-800 md:text-base">
            “{q.quote}”
          </p>
          <p className="mt-1 text-xs font-bold tracking-wide text-slate-600">
            {q.outlet}
          </p>
        </div>
      ))}
    </div>
  );
}
