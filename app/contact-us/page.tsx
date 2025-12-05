// app/contact/page.tsx
// Contact page (Arton/Valcrest-style, with primary email focus + WhatsApp).
// Tailwind only. No external components required.

import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { MetaPixel } from "../MetaPixel";

export const metadata = {
  title: "Contact | Citizenship By Investment Advisors",
  description:
    "Reach our citizenship by investment advisors via email or direct WhatsApp lines.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact | Citizenship By Investment Advisors",
    description:
      "Reach our citizenship by investment advisors via email or direct WhatsApp lines.",
    url: "/contact-us",
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
    title: "Contact | Citizenship By Investment Advisors",
    description:
      "Reach our citizenship by investment advisors via email or direct WhatsApp lines.",
  },
};

const CONTACT_EMAIL = "@mail.artonscapitalholdings.com";

const PHONE_LINES = [
  {
    label: "James Foster — USA Desk",
    number: "+13436414504",
    hint: "Based in North America, available during EST business hours via WhatsApp.",
  },
  {
    label: "Omar Al Mansoori — Dubai Desk",
    number: "+18199401637",
    hint: "Handles Gulf-region enquiries and time-sensitive relocations on WhatsApp.",
  },
  {
    label: "Noah Tremblay — Canada Desk",
    number: "+15677370076",
    hint: "Focuses on clients in Canada and wider North America via WhatsApp.",
  },
];

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

export default function ContactPage() {
  return (
    <>
      {FB_PIXEL_ID && <MetaPixel pixelId={FB_PIXEL_ID} />}

      {/* pt-* ensures content starts just under the global layout header */}
      <main className="min-h-screen bg-black pt-16 text-white md:pt-20">
        {/* Hero section */}
        <section className="relative border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src="https://in.artoncapital.com/wp-content/uploads/2024/02/program_antigua.jpg"
              alt="CBI Programs"
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
            <div className="md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Contact Our Advisors
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                One dedicated{" "}
                <span className="text-[#cc9966]">email channel</span> for all
                your enquiries.
              </h1>
              <p className="mt-4 text-sm text-white/80 md:text-base">
                Share your situation, family structure, desired timelines and
                preferred destination in one detailed message. Our team will
                reply with tailored options, clear pricing and next steps.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li>• Ideal for complex cases and detailed questions.</li>
                <li>• Attach supporting documents securely.</li>
                <li>• Receive structured, written guidance you can revisit.</li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <TrackedLink
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="rounded-lg bg-[#cc9966] px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
                  eventName="Contact"
                  eventProps={{
                    contact_method: "Email",
                    contact_location: "Hero CTA Button",
                    contact_email: CONTACT_EMAIL,
                  }}
                >
                  Email Our Team
                </TrackedLink>
                <Link
                  href="/citizen-by-investment#cta"
                  className="rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Start Online Assessment
                </Link>
              </div>
            </div>

            {/* Email + phone block */}
            <div className="md:w-1/2" id="email-section">
              {/* Primary email card */}
              <div className="rounded-2xl border border-[#cc9966]/60 bg-black/70 p-5 shadow-[0_0_45px_rgba(0,0,0,0.7)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cc9966]/80">
                  Primary Contact Email
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Send all enquiries, documentation and follow-ups to:
                </p>
                <TrackedLink
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-3 inline-block font-mono text-base font-semibold text-[#f5d2a0] md:text-lg"
                  eventName="Contact"
                  eventProps={{
                    contact_method: "Email",
                    contact_location: "Primary Email Card",
                    contact_email: CONTACT_EMAIL,
                  }}
                >
                  {CONTACT_EMAIL}
                </TrackedLink>
                <p className="mt-3 text-xs text-white/65">
                  Please include your full name, country of residence, family
                  composition and preferred program (if any). This allows us to
                  respond with accurate timelines and indicative cost ranges.
                </p>
              </div>

              {/* Direct WhatsApp lines */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/60 p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                  Direct WhatsApp Lines
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Prefer a quick conversation? Start a WhatsApp chat with one of
                  our advisors:
                </p>

                <div className="mt-4 space-y-3">
                  {PHONE_LINES.map((line) => {
                    const waLink = `https://wa.me/${line.number.replace(
                      /\D/g,
                      ""
                    )}`;
                    return (
                      <div
                        key={line.number}
                        className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition hover:border-[#cc9966] hover:bg-white/10"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                              {line.label}
                            </p>
                            <TrackedLink
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 inline-block text-base font-semibold text-[#cc9966] group-hover:underline"
                              eventName="Contact"
                              eventProps={{
                                contact_method: "WhatsApp",
                                contact_location: "WhatsApp Card",
                                contact_label: line.label,
                                contact_number: line.number,
                              }}
                            >
                              {line.number}
                            </TrackedLink>
                          </div>
                          <div className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/70">
                            WhatsApp Chat
                          </div>
                        </div>
                        <p className="mt-1 text-[11px] text-white/70">
                          {line.hint}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-3 text-[11px] text-white/55">
                  If your WhatsApp message is sent outside of office hours, our
                  team will respond as soon as operations resume. For formal or
                  document-heavy enquiries, please also send an email to{" "}
                  <span className="font-mono">{CONTACT_EMAIL}</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer (remove if your global layout already has one) */}
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-white/60 md:flex-row">
            <p>
              © {new Date().getFullYear()} Arton Capital. All rights reserved.
            </p>
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
    </>
  );
}
