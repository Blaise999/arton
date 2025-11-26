// app/media-enquiries/page.tsx  (SERVER COMPONENT)

import type { Metadata } from "next";
import MediaEnquiriesForm from "./MediaEnquiriesForm";

export const metadata: Metadata = {
  title: "Media Enquiries - Valcrest Capital",
  description:
    "Valcrest Capital and its programs are regularly featured in media around the globe. For press or interview requests, contact our Public Relations Office.",
  alternates: { canonical: "/media-enquiries" },
  openGraph: {
    title: "Media Enquiries - Valcrest Capital",
    description:
      "Valcrest Capital and its programs are regularly featured in media around the globe. For press or interview requests, contact our Public Relations Office.",
    url: "/media-enquiries",
    siteName: "Valcrest Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Global Citizen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function MediaEnquiriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[300px] md:h-[420px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-left-top"
          style={{
            backgroundImage:
              "url(https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight">
              Media Enquiries
            </h1>
            <p className="mt-2 text-white/90 text-sm md:text-base max-w-2xl">
              For press, interview requests, or media information about Valcrest
              Capital.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <MediaEnquiriesForm />
      </section>

      {/* NEWSWIRE STRIP */}
      <section className="border-t bg-[#f7f7f7] py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <p className="text-sm md:text-base text-gray-700">
            Do you receive our monthly Global Citizen Newswire?
          </p>
          <a
            href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-white bg-[#cc9966] hover:bg-black transition rounded-md text-sm font-medium"
          >
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
