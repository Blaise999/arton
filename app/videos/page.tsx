// app/videos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Videos - Arton Capital",
  description: "Arton Capital videos.",
  alternates: { canonical: "/videos" },
  openGraph: {
    title: "Videos - Arton Capital",
    description: "Arton Capital videos.",
    url: "/videos",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Arton Capital - Global Citizen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos - Arton Capital",
    description: "Arton Capital videos.",
    images: [
      "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
    ],
  },
};

type VideoItem = {
  title: string;
  src: string; // embed url
  provider: "youtube" | "youtube-nocookie" | "vimeo";
};

const VIDEOS: VideoItem[] = [
  {
    title:
      "Armand Arton discusses the positive power of the CIP industry on CNBC’s ‘The Entrepreneurial Edge’",
    src: "https://www.youtube.com/embed/ku2SgWrI8P8",
    provider: "youtube",
  },
  {
    title: "Arton hosts an industry roundtable in NYC",
    src: "https://www.youtube.com/embed/9A5V2E6YwkA",
    provider: "youtube",
  },
  {
    title: "Global Citizen Series – Lagos 2019",
    src: "https://www.youtube.com/embed/iLZc0nY8De0",
    provider: "youtube",
  },
  {
    title: "Cityscape Dubai 2018",
    src: "https://www.youtube.com/embed/DLwbZoBwhPw",
    provider: "youtube",
  },
  {
    title: "Global Citizen Forum – Sveti Stefan 2017 – Day 1",
    src: "https://www.youtube.com/embed/m9ocWpxnoqk",
    provider: "youtube",
  },
  {
    title: "Global Citizen Forum – Sveti Stefan 2017 – Day 2",
    src: "https://www.youtube.com/embed/pYPMA5UycLc",
    provider: "youtube",
  },
  {
    title: "Global Citizen Forum – Sveti Stefan 2017 – Gala",
    src: "https://www.youtube.com/embed/3SaH17lVXwM",
    provider: "youtube",
  },
  {
    title: "GCF Anthem",
    src: "https://www.youtube.com/embed/k1ZQfEzHaSU",
    provider: "youtube",
  },
  {
    title: "Gumball 3000 – Global Citizen Pit Stop",
    src: "https://www.youtube.com/embed/fhFrarVt4Mc?rel=0&showinfo=0",
    provider: "youtube",
  },
  {
    title: "Passport Index 2016 (official)",
    src: "https://www.youtube.com/embed/V5AaKsTmfLE?rel=0&showinfo=0",
    provider: "youtube",
  },
  {
    title: "Discover Saint Lucia – CIP inauguration, Dubai, UAE",
    src: "https://www.youtube.com/embed/MhfLYgYi7ZE?rel=0&showinfo=0",
    provider: "youtube",
  },
  {
    title: "Jason Silva for Global Citizen Forum – Monaco 2015",
    src: "https://www.youtube-nocookie.com/embed/f55DSbUGhMU?rel=0&showinfo=0",
    provider: "youtube-nocookie",
  },
  {
    title: "Global Citizen Forum – Monaco 2015 (Highlights)",
    src: "https://www.youtube-nocookie.com/embed/mmklSRQ9mjc?rel=0&showinfo=0",
    provider: "youtube-nocookie",
  },
  {
    title: "Global Citizen Forum – Monaco 2015 (Invitation)",
    src: "https://player.vimeo.com/video/132261349?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "PM Villa Donation REPORT",
    src: "https://www.youtube-nocookie.com/embed/MPyDFEGJgoA?controls=0",
    provider: "youtube-nocookie",
  },
  {
    title: "Empowering Global Citizenship®",
    src: "https://player.vimeo.com/video/78880943?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Toronto 2014 (Highlights)",
    src: "https://player.vimeo.com/video/122422660?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Toronto 2014 (Invitation)",
    src: "https://player.vimeo.com/video/122412791?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title:
      "Unesco Director-General Ms. Irina Bokova addresses the Global Citizen Forum in Toronto",
    src: "https://player.vimeo.com/video/108684483?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum on Bloomberg",
    src: "https://player.vimeo.com/video/76483970?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Dubai 2013",
    src: "https://player.vimeo.com/video/73741731?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Dubai 2013 (Executive Summary)",
    src: "https://player.vimeo.com/video/87631675?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Dubai 2013 (Overview)",
    src: "https://player.vimeo.com/video/87631676?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Global Citizen Forum – Dubai 2013 (YouTube)",
    src: "https://www.youtube-nocookie.com/embed/mQERp0Njoto?controls=0",
    provider: "youtube-nocookie",
  },
  {
    title:
      "New Head Office – Cocktail Reception – Arton Capital – Immigrant Investor Programs",
    src: "https://player.vimeo.com/video/20957286?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title: "Bulgarian Immigrant Investor Program Launch – Moscow, Russia",
    src: "https://player.vimeo.com/video/7836123?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title:
      "Arton Capital Investor Program for Residency and Citizenship in Bulgaria – Program Launch – Dubai, UAE",
    src: "https://player.vimeo.com/video/6530872?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
  {
    title:
      "Arton Capital Investor Program for Residency and Citizenship in Bulgaria – Program Launch – Montreal, Canada",
    src: "https://player.vimeo.com/video/4677709?color=cc9966&title=0&byline=0&portrait=0",
    provider: "vimeo",
  },
];

function VideoCard({ title, src }: VideoItem) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md overflow-hidden">
      <div className="relative w-full aspect-video bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="p-4 md:p-5">
        <h2 className="text-base md:text-lg font-semibold leading-snug text-neutral-900">
          {title}
        </h2>
      </div>
    </article>
  );
}

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      {/* Hero / Parallax-ish header */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2000&auto=format&fit=crop"
            alt="Arton Capital Videos"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6 pb-10 md:pb-14">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Videos
            </h1>
            <p className="mt-2 text-sm md:text-base text-white/85 max-w-2xl">
              Watch Arton Capital’s latest talks, forums, and Global Citizen
              events.
            </p>
          </div>
        </div>
      </section>

      {/* Videos grid */}
      <section className="mx-auto w-full max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {VIDEOS.map((v, i) => (
            <VideoCard key={`${v.src}-${i}`} {...v} />
          ))}
        </div>
      </section>
    </main>
  );
}
