// components/become-a-global-citizen/BecomeAGlobalCitizenTwin.tsx
import Image from "next/image";
import BecomeGlobalCitizenForm from "./BecomeGlobalCitizenForm";

type BecomeAGlobalCitizenTwinProps = {
  heroImage?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  introHeading?: string;
  introParagraphs?: string[];
  newsletterText?: string;
  newsletterHref?: string;
  className?: string;
};

/**
 * Full-page twin component for "Become a Global Citizen®"
 * Server component by default; nests client form.
 */
export default function BecomeAGlobalCitizenTwin({
  heroImage = "https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Access.jpg",
  title = "Become a Global Citizen®",
  subtitle = "Discover how global citizenship can empower your dreams",
  eyebrow,
  introHeading = "Your journey begins with Arton.",
  introParagraphs = [
    "A world of opportunity, freedom, and prosperity awaits you.",
    "Our team of experts are committed to offer you unmatched experience throughout the entire process. We are delighted to offer a free consultation to evaluate your potential, answer any questions you may have, and provide you with valuable recommendations for the most suitable program to meet your goals.",
    "Confidentiality and trust are at the core of Arton Capital. We take your privacy seriously and abide by our Confidentiality Policy. No information will be shared with third parties under any circumstances.",
    "Please answer the below questions, and one of our team members will be in touch with you within 24 hours.",
  ],
  newsletterText = "Do you receive our monthly Global Citizen Newswire?",
  newsletterHref = "https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0",
  className = "",
}: BecomeAGlobalCitizenTwinProps) {
  return (
    <main className={`min-h-screen bg-white text-neutral-900 ${className}`}>
      {/* HERO */}
      <section className="relative h-[260px] md:h-[380px] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            {eyebrow && (
              <p className="text-xs md:text-sm tracking-widest uppercase text-white/80">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-1 text-2xl md:text-4xl font-semibold text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-2 text-sm md:text-lg text-white/90 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-3xl space-y-4 text-neutral-700">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
            {introHeading}
          </h2>

          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="container mx-auto px-4 md:px-6 pb-14">
        <div className="max-w-4xl">
          <BecomeGlobalCitizenForm />
        </div>
      </section>

      {/* NEWSWIRE CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-neutral-700">
            {newsletterText}
          </p>
          <a
            href={newsletterHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#cc9966] px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
