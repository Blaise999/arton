// app/global-citizen-magazine/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Citizen Magazine | Arton Capital",
  description:
    "A bespoke bi-monthly title exposing topics that matter most to global citizens. Authentic and luxurious, the magazine brings the best the world can offer.",
  alternates: { canonical: "/global-citizen-magazine" },
  openGraph: {
    title: "Global Citizen Magazine | Arton Capital",
    description:
      "A bespoke bi-monthly title exposing topics that matter most to global citizens.",
    url: "/global-citizen-magazine",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Arton Global Citizen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

type Issue = {
  label: string; // "Issue 77", "FE 2024", etc.
  image: string;
  href: string;
};

const ISSUES: Issue[] = [
  {
    label: "Issue 77",
    image: "https://www.artoncapital.com/wp-content/uploads/2025/11/GCM-issue-77.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_77_3258a6e2644190",
  },
  {
    label: "Issue 76",
    image: "https://www.artoncapital.com/wp-content/uploads/2025/10/GCM-issue-76.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_76_6ed2f3c103ade9",
  },
  {
    label: "Issue 75",
    image: "https://www.artoncapital.com/wp-content/uploads/2025/06/GCM-issue-75.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_75",
  },
  {
    label: "Issue 74",
    image: "https://www.artoncapital.com/wp-content/uploads/2025/04/gcm-74_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_74",
  },
  {
    label: "FE 2024",
    image: "https://www.artoncapital.com/wp-content/uploads/2024/12/GCM-issue-forum2024.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_forum_edition_digital_file",
  },
  {
    label: "Issue 72",
    image: "https://www.artoncapital.com/wp-content/uploads/2025/04/gcm-72_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_72_",
  },
  {
    label: "Issue 71",
    image: "https://www.artoncapital.com/wp-content/uploads/2024/11/GCM-issue-71.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_71_",
  },
  {
    label: "Issue 70",
    image: "https://www.artoncapital.com/wp-content/uploads/2024/05/GCM-70_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_70",
  },
  {
    label: "Issue 69",
    image: "https://www.artoncapital.com/wp-content/uploads/2024/02/GCM-69_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_69",
  },
  {
    label: "Issue 68",
    image: "https://www.artoncapital.com/wp-content/uploads/2024/01/GCM-68_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_68",
  },
  {
    label: "Issue 67",
    image: "https://www.artoncapital.com/wp-content/uploads/2023/11/gcm-67_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_67",
  },
  {
    label: "Issue 66",
    image: "https://www.artoncapital.com/wp-content/uploads/2023/10/gcm-66_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_66_",
  },
  {
    label: "Issue 65",
    image: "https://www.artoncapital.com/wp-content/uploads/2023/04/gcm-65_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_65",
  },
  {
    label: "Issue 64",
    image: "https://www.artoncapital.com/wp-content/uploads/2023/02/gcm-64_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_64",
  },
  {
    label: "Issue 63",
    image: "https://www.artoncapital.com/wp-content/uploads/2022/11/gcm-63_cover.png",
    href: "https://issuu.com/global-citizen/docs/global_citizen_63",
  },
  {
    label: "Issue 62",
    image: "https://www.artoncapital.com/wp-content/uploads/2022/09/gcm-62-cover.png",
    href: "https://issuu.com/global-citizen/docs/global_citizen_62_dcb46b1d7b3cc4",
  },
  {
    label: "Issue 61",
    image: "https://www.artoncapital.com/wp-content/uploads/2022/04/GCM-61-cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_61",
  },
  {
    label: "Issue 60",
    image: "https://www.artoncapital.com/wp-content/uploads/2022/04/GCM-60-cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_60",
  },
  {
    label: "Issue SE 2021",
    image: "https://www.artoncapital.com/wp-content/uploads/2021/12/gcm-SE21-cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_special_edition",
  },
  {
    label: "Issue 59",
    image: "https://www.artoncapital.com/wp-content/uploads/2021/12/gcm-59-cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_59",
  },
  {
    label: "Issue 58",
    image: "https://www.artoncapital.com/wp-content/uploads/2021/10/gcm-58-cover.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_58_-_digital",
  },
  {
    label: "Issue 57",
    image: "https://www.artoncapital.com/wp-content/uploads/2021/05/gcm-57-cover.png",
    href: "https://issuu.com/global-citizen/docs/global_citizen_57",
  },
  {
    label: "Issue 56",
    image: "https://www.artoncapital.com/wp-content/uploads/2021/02/GCM_issue56.png",
    href: "https://issuu.com/global-citizen/docs/gc_56",
  },
  {
    label: "Issue 55",
    image: "https://www.artoncapital.com/wp-content/uploads/2020/12/GCM_issue55.png",
    href: "https://issuu.com/global-citizen/docs/global_citizen_55",
  },
  {
    label: "Issue 54",
    image: "https://www.artoncapital.com/wp-content/uploads/2020/10/issue54.png",
    href: "https://issuu.com/global-citizen/docs/global_20citizen_2054",
  },
  {
    label: "Issue 52",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2020/03/gcm-52_cover-e1603908138670.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_52",
  },
  {
    label: "Issue 51",
    image: "https://www.artoncapital.com/wp-content/uploads/2020/01/gcm-51_cover.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_51_-_final-digital",
  },
  {
    label: "Issue 50",
    image: "https://www.artoncapital.com/wp-content/uploads/2020/01/GCM-50_Cover.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_50_",
  },
  {
    label: "Issue 49",
    image: "https://www.artoncapital.com/wp-content/uploads/2019/09/GCM-issue49-1.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_49",
  },
  {
    label: "Issue 48",
    image: "https://www.artoncapital.com/wp-content/uploads/2019/09/GCM-issue49.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_48",
  },
  {
    label: "Issue 47",
    image: "https://www.artoncapital.com/wp-content/uploads/2019/04/GCMagazin-issue47.jpg",
    href: "https://issuu.com/global-citizen/docs/global_citizen_47",
  },
  {
    label: "Issue 46",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2019/01/GC46-COVER-e1548976176939.jpg",
    href:
      "https://issuu.com/global-citizen/docs/global_citizen_46_a2db15e8dbb1c2",
  },
  {
    label: "Issue 45",
    image: "https://www.artoncapital.com/wp-content/uploads/2019/01/GC45.jpg",
    href: "https://issuu.com/global-citizen/docs/gc45_",
  },
  {
    label: "Issue 44",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2018/09/issue44-min.jpg",
    href:
      "https://issuu.com/global-citizen/docs/gc_44_-_sep_oct_2018",
  },
  {
    label: "Issue 43",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2018/05/GCM_issue_43.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_43_may_june",
  },
  {
    label: "Issue 42",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2018/03/GCM_issue_42.jpg",
    href:
      "https://issuu.com/global-citizen/docs/gc_42_mar_apr_2018",
  },
  {
    label: "Issue 41",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2018/03/GCM_issue_41.jpg",
    href:
      "https://issuu.com/global-citizen/docs/gc_41_jan_feb_web",
  },
  {
    label: "Issue 39",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2017/10/GCM_issue_39.png",
    href: "https://issuu.com/global-citizen/docs/gc_39_gcf",
  },
  {
    label: "Issue 38",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2017/05/issue38.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_38",
  },
  {
    label: "Issue 37",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2017/03/issue37.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_37",
  },
  {
    label: "Issue 36",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2017/01/issue_36.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_36",
  },
  {
    label: "Issue 35",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/issue35.jpg",
    href: "https://issuu.com/global-citizen/docs/gc35",
  },
  {
    label: "Issue 34",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/issue34.jpg",
    href: "https://issuu.com/global-citizen/docs/gc_34",
  },
  {
    label: "Issue 33",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/05/issue33.png",
    href: "https://issuu.com/global-citizen/docs/gc33",
  },
  {
    label: "Issue 32",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/05/COVER-GC32--e1462705157104.jpeg",
    href: "https://issuu.com/global-citizen/docs/gc32",
  },
  {
    label: "Issue 31",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/03/GC31-COVER-e1462549736487.jpeg",
    href: "http://issuu.com/global-citizen/docs/gc31",
  },
  {
    label: "Issue 30",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/02/GC30_Cover.jpg",
    href: "http://issuu.com/global-citizen/docs/gc30",
  },
  {
    label: "Issue 29",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC29-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc29",
  },
  {
    label: "Issue 28",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC28-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc28",
  },
  {
    label: "Issue 27",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC27-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc27",
  },
  {
    label: "Issue 26",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC26-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc26",
  },
  {
    label: "Issue 25",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC25-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc25",
  },
  {
    label: "Issue 24",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/GC24-COVER.jpg",
    href: "http://issuu.com/global-citizen/docs/gc24",
  },
  {
    label: "Issue 23",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2015/01/GCMagazine23.jpg",
    href: "https://issuu.com/global-citizen/docs/gc23",
  },
  {
    label: "Issue 22",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine22.jpg",
    href: "http://issuu.com/global-citizen/docs/gc22",
  },
  {
    label: "Issue 21",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine21.jpg",
    href: "http://issuu.com/global-citizen/docs/gc21",
  },
  {
    label: "Issue 20",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine20.jpg",
    href: "http://issuu.com/global-citizen/docs/gc20",
  },
  {
    label: "Issue 19",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine19-e1474301382184.jpg",
    href: "http://issuu.com/global-citizen/docs/gc19",
  },
  {
    label: "Issue 18",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine18.jpg",
    href: "http://issuu.com/global-citizen/docs/gc18",
  },
  {
    label: "Issue 17",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2016/09/GCMagazine17.jpg",
    href: "http://issuu.com/global-citizen/docs/gc17",
  },
];

export default function GlobalCitizenMagazinePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[240px] md:h-[340px] overflow-hidden">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2016/09/Arton-slider-Global-Citizen-Magazine.jpg"
          alt="Global Citizen Magazine"
          fill
          priority
          className="object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-white">
              Global Citizen Magazine
            </h1>
            <p className="mt-2 text-sm md:text-lg text-white/90">
              Authentic luxury. Global outlook.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-3xl">
          <p className="text-base md:text-lg text-neutral-700">
          Authentic and luxurious, the magazine brings the best the
            world can offer.
          </p>
        </div>
      </section>

      {/* ISSUES GRID */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {ISSUES.map((issue) => (
            <Link
              key={issue.label}
              href={issue.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-100 shadow-sm transition-transform duration-200 group-hover:-translate-y-1">
                <Image
                  src={issue.image}
                  alt={`Global Citizen Magazine ${issue.label}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors" />
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <div className="rounded bg-white/90 px-2 py-1 text-center text-xs font-semibold text-neutral-900">
                    {issue.label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSWIRE CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-neutral-700">
            Do you receive our monthly Global Citizen Newswire?
          </p>
          <Link
            href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#cc9966] px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </main>
  );
}
