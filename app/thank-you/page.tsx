// app/thank-you/page.tsx
// Next.js 16 App Router — Server Component (no hooks needed)
// Light-mode Arton-style Thank You page

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you – Arton Capital",
  robots: { index: false, follow: false }, // matches WP noindex/nofollow
  alternates: { canonical: "/thank-you" },
  openGraph: {
    title: "Thank you – Arton Capital",
    description:
      "One of our experienced advisors will be in touch within 24 hours to discuss your needs and provide tailored guidance.",
    url: "/thank-you",
    siteName: "Arton Capital",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[100svh] bg-white text-neutral-900">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            // replace this url with any hero/texture you want
            "radial-gradient(1200px circle at 20% -10%, rgba(204,153,102,0.18), transparent 55%), radial-gradient(900px circle at 110% 10%, rgba(204,153,102,0.12), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <section className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl items-center px-6 py-16">
        <div className="w-full rounded-2xl border border-neutral-200 bg-white/85 p-8 shadow-sm backdrop-blur md:p-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cc9966]/30 bg-[#cc9966]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#8a5a2b]">
            Thank you
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
            Congratulations and thank you for choosing Arton Capital!
          </h1>

          <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-neutral-700 md:text-lg">
            <p>
              One of our experienced advisors will be in touch within 24 hours to
              discuss your needs and provide tailored guidance. Our goal is to
              ensure that you have all the information and support you need
              every step of the way.
            </p>

            <p>
              In the meantime, feel free to explore our website for more
              insights on our services. We look forward to speaking with you
              soon!
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="localhost:3000/?utm_source=landing-page&utm_medium=thankyou-page&utm_campaign=cta"
              className="inline-flex items-center justify-center rounded-full bg-[#cc9966] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#cc9966]/40"
            >
              Visit Our Website
            </Link>

            <Link
              href="/citizen-by-investment"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            >
              Back to Programs
            </Link>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-5 text-sm text-neutral-500">
            If you need urgent assistance, please reply to the email you
            received or contact your advisor directly.
          </div>
        </div>
      </section>
    </main>
  );
}
