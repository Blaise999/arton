import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Events - Arton Capital",
  description:
    "Join Arton Capital for Citizenship and Residency by Investment events worldwide. Explore upcoming and past Global Citizen Series events.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events - Arton Capital",
    description:
      "Join Arton Capital for Citizenship and Residency by Investment events worldwide.",
    url: "/events",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Arton Capital Events",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

type EventItem = {
  title: string;
  dateLabel: string; // e.g. "January 20, 2025"
  timeLabel?: string; // e.g. "09:30 Dubai Time"
  location: string; // e.g. "Dubai, UAE"
  image: string;
  excerpt: string;
  moreInfoUrl?: string;
  isPast?: boolean;
  monthGroup?: string; // e.g. "January, 2025"
};

const UPCOMING_EVENTS: EventItem[] = [
  // Put real upcoming events here later.
  // Leaving sample structure so page doesn’t look empty.
];

const PAST_EVENTS: EventItem[] = [
  {
    monthGroup: "January, 2025",
    title: "Hungary Guest Investor Advantage · Global Citizen Series · 2025 GCC",
    dateLabel: "January 20, 2025",
    timeLabel: "09:30 Dubai Time",
    location: "Dubai, UAE",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-13-at-1.44.54-PM.jpeg",
    excerpt:
      "Join us for an exclusive presentation with representatives from the investment fund and the Government of Hungary to explore the exceptional benefits of the Guest Investor Program.",
    moreInfoUrl:
      "https://www.linkedin.com/events/globalcitizenseries-2025gcc-hun7284507992291446784/",
    isPast: true,
  },
  {
    monthGroup: "March, 2022",
    title: "Fight or Flight: The Future of Citizenship by Investment",
    dateLabel: "March 22, 2022",
    timeLabel: "9:00 EST",
    location: "Global Citizen Webinar",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2022/03/AC-Invite-Fight-or-Flight-Webinar-v2-2-scaled.jpg",
    excerpt:
      "We are living through uncertain times — explore how Citizenship by Investment helps families future-proof their mobility and security.",
    moreInfoUrl:
      "https://arton.zoom.us/webinar/register/8816475467187/WN_qwD0p30nTu21ZoV6oWbw2w",
    isPast: true,
  },
  {
    monthGroup: "October, 2020",
    title: "Anguilla Residency by Investment",
    dateLabel: "October 28, 2020",
    timeLabel: "12PM EST",
    location: "Global Citizen Webinar",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2020/10/Webinar-2020-10-28-Anguilla-v4-1.jpg",
    excerpt:
      "Luxurious living meets financial freedom. Learn more about Anguilla’s residency by investment options.",
    moreInfoUrl:
      "https://us02web.zoom.us/webinar/register/7716033106523/WN_-aojLjJ4Sn-ZH8iqY8g33A",
    isPast: true,
  },
  // add the rest as needed…
];

function groupByMonth(events: EventItem[]) {
  const groups: Record<string, EventItem[]> = {};
  events.forEach((e) => {
    const key = e.monthGroup || "Other";
    if (!groups[key]) groups[key] = [];
    groups[key].push(e);
  });
  return groups;
}

export default function EventsPage() {
  const pastGroups = groupByMonth(PAST_EVENTS);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO (Arton slider vibe) */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://www.artoncapital.com/wp-content/uploads/2016/08/Arton-slider-Events-Registration.jpg"
            alt="Arton Capital Events"
            fill
            priority
            className="object-cover object-left-top"
          />
          {/* dark overlay like Arton */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              EVENTS
            </h1>
            <p className="mt-3 max-w-xl text-white/90">
              Join Arton Capital around the world for Global Citizenship® and
              Residency by Investment forums, briefings, and webinars.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Upcoming */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <div className="mt-4 h-[2px] w-16 bg-[#cc9966]" />

          {UPCOMING_EVENTS.length === 0 ? (
            <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
              No upcoming events are listed right now. Check back soon.
            </div>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {UPCOMING_EVENTS.map((e, idx) => (
                <article
                  key={`${e.title}-${idx}`}
                  className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-neutral-500">
                      {e.location}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold leading-snug">
                      {e.title}
                    </h3>
                    <div className="mt-2 text-sm text-neutral-700">
                      {e.dateLabel}
                      {e.timeLabel ? ` · ${e.timeLabel}` : ""}
                    </div>
                    <p className="mt-3 text-sm text-neutral-600">
                      {e.excerpt}
                    </p>
                    {e.moreInfoUrl && (
                      <Link
                        href={e.moreInfoUrl}
                        target="_blank"
                        className="mt-4 inline-block text-sm font-semibold text-[#cc9966] hover:underline"
                      >
                        More Info →
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Past */}
        <div>
          <h2 className="text-2xl font-semibold">Past Events</h2>
          <div className="mt-4 h-[2px] w-16 bg-[#cc9966]" />

          <div className="mt-6 space-y-10">
            {Object.entries(pastGroups).map(([month, events]) => (
              <div key={month}>
                <h3 className="text-xl font-semibold">{month}</h3>
                <div className="mt-3 h-px w-full bg-neutral-200" />

                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {events.map((e, idx) => (
                    <article
                      key={`${e.title}-${idx}`}
                      className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={e.image}
                          alt={e.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between text-xs text-neutral-500">
                          <span>{e.location}</span>
                          <span>{e.dateLabel}</span>
                        </div>

                        <h4 className="mt-2 text-base font-semibold leading-snug">
                          {e.title}
                        </h4>

                        <p className="mt-3 text-sm text-neutral-600">
                          {e.excerpt}
                        </p>

                        {e.moreInfoUrl && (
                          <Link
                            href={e.moreInfoUrl}
                            target="_blank"
                            className="mt-4 inline-block text-sm font-semibold text-[#cc9966] hover:underline"
                          >
                            More Info →
                          </Link>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
