// app/arton-capital/international-partners/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import PartnerCard from "@/components/PartnerCard";
import ContactFab from "@/components/ContactFab";

export const metadata: Metadata = {
  title: "International Partners",
  description:
    "At Arton we believe in long-lasting, sustainable partnerships. We seek to constantly enrich the scope of our value-added services.",
};

const PARTNERS = [
  {
    name: "HARVARD BUSINESS SCHOOL ALUMNI OF GCC",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/hbs-1.jpg",
    href: "https://www.hbs.edu",
    blurb: "HBS educates leaders who make a difference in the world.",
    body: [
      "Arton Capital is a proud sponsor of the prestigious Harvard Business School Alumni Club of GCC in order to collaborate with HBS Alumni, Government and business leaders and local community.",
      "Arton Capital will actively participate in seminars, conferences, research projects and networking events to provide its insight on big issues the world is facing today.",
    ],
  },
  {
    name: "YOUNG PRESIDENTS’ ORGANIZATION",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/ypo-1.jpg",
    href: "https://www.ypo.org/",
    blurb: "YPO is the global platform for chief executives to engage, learn and grow.",
    body: [
      "YPO empowers more than 24,000 members in more than 130 countries across industries. YPO member-run companies employ 15 million people and generate USD 6 trillion in annual revenues.",
      "As a Global Affiliate Partner, YPO members are offered preferred pricing for all Arton products and services as well as preferential rates for the Global Citizen Forum.",
    ],
  },
  {
    name: "GLOBAL HOTEL ALLIANCE",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/discovery-1.jpg",
    href: "https://www.discoveryloyalty.com/",
    blurb: "GHA is the world’s largest alliance of independent hotel brands.",
    body: [
      "GHA brings together 35 brands with more than 550 hotels across 76 countries.",
      "All Arton Capital clients are offered a complimentary upgrade to Platinum level in the DISCOVERY loyalty program.",
    ],
  },
  {
    name: "AMICORP",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/amicorp-1.jpg",
    href: "https://www.amicorp.com/",
    blurb:
      "Independent global service provider of assurance, legal, corporate secretarial and support services.",
    body: [
      "This global leading firm of estate planning services will provide answers that we hope you will find useful in your endeavor of acquiring a new citizenship.",
      "All Arton Capital clients are offered a complimentary consultation service by the team of experts at Amicorp.",
    ],
  },
  {
    name: "THE AMAL PROJECT",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/amal-1.jpg",
    href: "https://global-citizen.org/project/amal-project/",
    blurb: "Amal means hope in Arabic.",
    body: [
      "The mission of Amal is to bring hope by building and maintaining recreational centres where needed most, creating a safe haven for young children to play, read and learn peacefully.",
      "Arton Capital donates $100 for each global citizen joining the club.",
    ],
  },
  {
    name: "CHERIE BLAIR FOUNDATION FOR WOMEN",
    logo: "https://www.artoncapital.com/wp-content/uploads/2017/07/blair-hor-1.jpg",
    href: "https://www.cherieblairfoundation.org/",
    blurb:
      "Envisions a world where women have equal opportunities to establish and grow businesses.",
    body: [
      "The foundation supports women with capability, confidence and capital necessary to build successful ventures.",
    ],
    wideLogo: true,
  },
];

export default function InternationalPartnersPage() {
  return (
    <main className="bg-[#f7f7f7] text-[#444]">
      {/* Dark premium hero */}
      <section className="relative isolate overflow-hidden">
        {/* base dark gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#050608] via-[#0b0d10] to-[#0f1216]" />

        {/* subtle radial glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(204,153,102,0.18),transparent_60%),radial-gradient(60%_50%_at_10%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

        {/* soft vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#cc9966] to-transparent" />
            <h1
              className="
                text-white
                text-3xl md:text-5xl
                font-semibold
                tracking-[0.12em]
                uppercase
                leading-tight
              "
            >
              International Partners
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              Long-lasting, sustainable partnerships that expand the scope of our value-added services
              for global citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="space-y-4 text-[#666] leading-relaxed">
          <p>
            At Arton we believe in long-lasting, sustainable partnerships. We seek to constantly
            enrich the scope of our value-added services.
          </p>
          <p>
            We have established partnerships with fellow professionals that enable us to offer our
            clients a variety of additional benefits and a supreme level of satisfaction. This
            extended network of partnerships allows us to maintain a broad and innovative suite of
            solutions, such as:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Registration of companies in various jurisdictions, including offshore formations;</li>
            <li>Tax and corporate planning counsel;</li>
            <li>Registration of yachts and aircraft;</li>
            <li>Advice and assistance in enrollment in top-rated educational establishments;</li>
            <li>Hotel booking, accommodation at special rates, and transportation services;</li>
            <li>Access to selected members-only restaurants and restaurant booking;</li>
            <li>Invitations to sought-after events and exclusive parties, as well as to cultural events;</li>
            <li>And much more.</li>
          </ul>

          <p>
            While we are taking care of their applications, our clients and their family members
            enjoy the privileges of the Global Citizen movement.
          </p>
        </div>

        <hr className="my-10 border-black/10" />

        <h2 className="text-2xl font-semibold text-[#2b2b2b] mb-6">
          Past &amp; Current Partnerships
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERS.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>
      </section>

      {/* Footer top strip */}
      <section className="bg-[#e9e9e9]">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-[#333]">
            Do you receive our monthly Global Citizen Newswire?
          </p>

          <a
            href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
          >
            <Image
              src="https://www.artoncapital.com/wp-content/themes/artoncapital/images/subscribe_button.jpg"
              width={90}
              height={22}
              alt="Subscribe"
              className="rounded-sm"
            />
          </a>
        </div>
      </section>

      {/* Floating Contact FAB */}
      <ContactFab />
    </main>
  );
}
