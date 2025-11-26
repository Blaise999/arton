// app/arton-capital/mission-vision/page.tsx
import Link from "next/link";

const HEADING = "tracking-[0.18em] uppercase font-semibold text-slate-700";
const BODY = "text-slate-600 leading-relaxed";

export const metadata = {
  title: "Mission & Vision • Arton Capital",
  description:
    "Our mission, vision, and values guiding Arton Capital’s global citizenship advisory.",
};

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ===== HERO (colored, text centered like Arton) ===== */}
      <section className="relative">
        <div
          className="
            relative w-full
            h-[180px] md:h-[220px]
            flex items-center justify-center
            bg-[#f5f6f7]
          "
        >
          {/* subtle parallax-ish overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/10" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#000000_1px,transparent_1px)] [background-size:18px_18px]" />

          {/* breadcrumbs + centered title */}
          <div className="relative mx-auto w-full max-w-6xl px-4 text-center">
            <nav className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              <Link href="/" className="hover:text-slate-800">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/arton-capital" className="hover:text-slate-800">
                About Us
              </Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800">Mission &amp; Vision</span>
            </nav>

            <h1 className="text-2xl font-bold tracking-[0.06em] text-slate-800 md:text-4xl">
              MISSION &amp; VISION
            </h1>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* sep40 */}
        <div className="my-8 border-t border-slate-200/70 md:my-10" />

        {/* ===== MISSION + VISION ===== */}
        <section className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Mission */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className={`${HEADING} text-sm md:text-base`}>Our Mission</h2>

            <p className={`${BODY} italic`}>
              To build trusted client relationships by continuously exceeding
              expectations with a premier, personalized advisory experience that
              simplifies complexity and delivers empowering results.
            </p>

            <div className="mx-auto h-px w-10 bg-slate-300 md:mx-0" />

            <p className={BODY}>
              We endeavor to meticulously utilize all available tools and to
              develop new mechanisms that enable us to provide an exquisite suite
              of high-end services to our diversified clientele. By doing so, we
              ensure that the best industry practices are observed and that the
              integrity of the industry is well-kept. We are eager to involve all
              stakeholders in a constructive dialogue and lead the industry to a
              higher standard.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className={`${HEADING} text-sm md:text-base`}>Our Vision</h2>

            <p className={`${BODY} italic`}>
              To be widely recognized as a leading financial advisory firm that
              provides expert counsel, as well as operational guidance, to empower
              individuals, families and partners in the exacting process of
              becoming and being successful global citizens.
            </p>

            <div className="mx-auto h-px w-10 bg-slate-300 md:mx-0" />

            <p className={BODY}>
              We empower global citizenship and want to bring the industry
              standards to a higher level by engaging all involved stakeholders.
              We want to see the world a better place, where global citizens have
              a premium level of choice.
            </p>
          </div>
        </section>

        {/* sep40 */}
        <div className="my-10 border-t border-slate-200/70 md:my-12" />

        {/* ===== VALUES ===== */}
        <section className="mx-auto max-w-3xl text-center">
          <h2 className={`${HEADING} text-sm md:text-base`}>Our Values</h2>

          <p className={`${BODY} mt-3 italic`}>
            In the pursuit of our mission, we have built the five pillars that
            form the solid foundation of values that empowers us to continuously
            grow and develop.
          </p>

          <div className="mt-8 space-y-7">
            <ValueBlock
              title="Integrity"
              text="Every act of our global performance reflects a shared belief in openness, transparency and confidentiality."
            />
            <ValueBlock
              title="Innovation"
              text="We apply prodigious strategizing techniques, insight, creativity and expertise to deliver solutions that meet our clients’ unique and always-evolving complex needs."
            />
            <ValueBlock
              title="Results"
              text="Our team is committed to delivering excellence – from building strong and prosperous long-term relationships to achieving unparalleled financial outcomes."
            />
            <ValueBlock
              title="Client First"
              text="Our personalized, premium service provides an unmatched experience based on a deep understanding of each client’s needs and ambitions."
            />
            <ValueBlock
              title="Global Stewardship"
              text="We lead and manage our organization with the avowed purpose of making the world a better place."
            />
          </div>
        </section>

        {/* sep40 */}
        <div className="my-10 border-t border-slate-200/70 md:my-12" />

        {/* ===== CTA Strip ===== */}
        <section className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row">
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
        </section>
      </main>
    </div>
  );
}

function ValueBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-2">
      <div className="mx-auto h-px w-full max-w-md bg-slate-200/80" />
      <h3 className="pt-4 text-base font-semibold uppercase tracking-[0.14em] text-slate-700 md:text-lg">
        {title}
      </h3>
      <p className="mx-auto max-w-2xl text-sm italic text-slate-600 md:text-base">
        {text}
      </p>
    </div>
  );
}
