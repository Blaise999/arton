// app/arton-capital/page.tsx
import Image from "next/image";
import Link from "next/link";

const GOLD = "text-[#cc9966]";

export const metadata = {
  title: "About Us • Arton Capital",
  description:
    "Arton Capital empowers individuals and families to become Global Citizens by investing in second residency and citizenship around the world.",
};

export default function AboutArtonCapitalPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ===== HERO / SMALL BUT STILL A HERO ===== */}
      <section className="relative">
        <div className="relative h-[210px] w-full md:h-[260px]">
          <Image
            src="/Pics/head.jpg"   // ✅ local image from public/Pics/head.jpg
            alt="About Arton Capital"
            fill
            priority
            className="object-cover"
          />

          {/* overlay + slight gradient so text reads clean */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/25" />

          {/* content */}
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-7 md:pb-9">
              <nav className="mb-2 text-xs text-white/80">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">About Us</span>
              </nav>

              <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Section>
          <div className="mx-auto max-w-4xl space-y-5 text-sm text-slate-700 md:text-base">
            <p>
              Arton Capital empowers individuals and families to become Global
              Citizens by investing in second residency and citizenship around the
              world. This is accomplished through a bespoke service experience,
              which simplifies complexity and is supported and sustained by long-term
              relationships.
            </p>

            <p>
              As a global financial advisory firm specializing in impact investment
              programs for residence and citizenship, Arton plays a critical role in
              empowering governments, consultants, legal and financial professionals,
              and investors to meet their goals efficiently, effectively, and
              responsibly.
            </p>

            <p>
              As a visionary leader Arton has founded and curates the{" "}
              <Link
                href="https://www.globalcitizenforum.org/"
                target="_blank"
                className={`${GOLD} font-medium underline`}
              >
                Global Citizen Forum
              </Link>
              , a non-profit built on a community of leaders committed to improving
              the state of global citizenship and bound by the shared belief that
              citizenship stands for freedom, representation, equality, but also for
              responsibility, sustainability, and impact.
            </p>

            <p>
              Furthermore, Arton is the founding member of the Global Investor
              Immigration Council (GIIC), whose mission is to establish best
              practices and foster sustainable and responsible industry governance.
            </p>

            <p>
              Arton’s global operations are spread over 19 locations around the world
              and have helped attract over US$4 billion in foreign direct investment
              to various countries in the last 5 years. Arton Capital is a member of
              the Arton Group, which comprises fully licensed international banking,
              financial advisory, and investment consulting entities tailored to the
              needs of global citizens.
            </p>
          </div>
        </Section>

        {/* brand stats row */}
        <Section>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3">
            <Stat label="Global Locations" value="19+" />
            <Stat label="FDI Attracted (5 yrs)" value="$4B+" />
            <Stat label="Founded" value="2006" />
          </div>
        </Section>

        {/* CTA strip */}
        <Section>
          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row">
            <p className="text-sm text-slate-700 md:text-base">
              Do you receive our monthly Global Citizen Newswire?
            </p>
            <Link
              href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
              target="_blank"
              className="rounded-full bg-[#cc9966] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black"
            >
              Subscribe
            </Link>
          </div>
        </Section>
      </main>
    </div>
  );
}

/* ===================== tiny helpers ===================== */

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-8 md:mt-10">{children}</section>;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-3 text-center">
      <div className="text-2xl font-bold text-slate-900 md:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
        {label}
      </div>
    </div>
  );
}
