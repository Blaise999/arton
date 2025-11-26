import type { Metadata } from "next";
import Image from "next/image";
import GovernmentEnquiriesForm from "./GovernmentEnquiriesForm";

export const metadata: Metadata = {
  title: "Government Enquiries | Global Citizenship",
  description:
    "We provide professional advice to governments seeking to optimize foreign direct investment through residency and citizenship programs.",
  alternates: { canonical: "/government-enquiries" },
  openGraph: {
    title: "Government Enquiries | Global Citizenship",
    description:
      "We provide professional advice to governments seeking to optimize foreign direct investment through residency and citizenship programs.",
    url: "/government-enquiries",
    siteName: "Valcrest Capital",
    images: [
      {
        // same hero image the Arton page uses
        url: "https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg",
        width: 1600,
        height: 800,
        alt: "Government Enquiries",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function GovernmentEnquiriesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg"
          alt="Government Enquiries hero"
          fill
          priority
          className="object-cover object-left-top"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Empowering Global Citizenship
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Government Enquiries
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
                We advise ministries, agencies, and sovereign partners on the design,
                launch, and optimization of residency and citizenship-by-investment programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Send us an enquiry</h2>
          <p className="mt-1 text-sm text-slate-600">
            Note that all information provided is kept highly confidential and subject to our privacy policy.
          </p>
        </div>

        <GovernmentEnquiriesForm />
      </section>
    </main>
  );
}
