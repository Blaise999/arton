"use client";

import { useState, useMemo } from "react";
import Head from "next/head";

type Country = {
  code: string;
  name: string;
};

const COUNTRIES: Country[] = [
  { code: "AD", name: "Andorra" },
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AO", name: "Angola" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BR", name: "Brazil" },
  { code: "BN", name: "Brunei" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo (Dem. Rep.)" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Cote d'Ivoire (Ivory Coast)" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czechia" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Greece" },
  { code: "GD", name: "Grenada" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "XK", name: "Kosovo" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar [Burma]" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "KP", name: "North Korea" },
  { code: "MK", name: "North Macedonia" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestinian Territories" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "KR", name: "South Korea" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "VC", name: "St. Vincent and the Grenadines" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syria" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkiye" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States of America" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VA", name: "Vatican City" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Viet Nam" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

const STRONG_PASSPORTS = new Set<string>([
  "CA",
  "US",
  "GB",
  "FR",
  "DE",
  "SE",
  "CH",
  "NL",
  "NO",
  "FI",
  "DK",
  "JP",
  "KR",
  "SG",
  "AU",
  "NZ",
  "IT",
  "ES",
  "PT",
  "IE",
]);

const HIGH_RISK_DEST = new Set<string>([
  "AF",
  "SY",
  "YE",
  "IQ",
  "IR",
  "KP",
  "SO",
  "SD",
]);

function getVisaStatusLabel(
  from: string,
  to: string
): { label: string; tone: "neutral" | "good" | "caution" } {
  if (!from || !to) {
    return {
      label:
        "Select a passport and a destination to see an indicative visa status.",
      tone: "neutral",
    };
  }

  if (from === to) {
    return {
      label:
        "You are in your home country. No visa is required for domestic travel.",
      tone: "good",
    };
  }

  if (STRONG_PASSPORTS.has(from) && !HIGH_RISK_DEST.has(to)) {
    return {
      label:
        "Typically visa-free or visa-on-arrival for short stays, but always confirm with the official immigration website.",
      tone: "good",
    };
  }

  if (HIGH_RISK_DEST.has(to)) {
    return {
      label:
        "Travel to this destination often has stricter visa rules. A visa is likely required. Confirm with the destination’s embassy or consulate.",
      tone: "caution",
    };
  }

  return {
    label:
      "Visa policy may vary. A visa or e-visa may be required. Please confirm with the relevant embassy or government site.",
    tone: "neutral",
  };
}

const FAQ_ITEMS = [
  {
    question: "HOW LONG DOES IT TAKE TO GET A CANADIAN CITIZENSHIP?",
    answer:
      "To be eligible to become a Canadian citizen, you must be a permanent resident and have lived in Canada for 3 out of the last 5 years (1,095 days). The average processing time for citizenship applications is between 8–12 months.",
  },
  {
    question: "DOES CANADA ALLOW DUAL CITIZENSHIP?",
    answer:
      "Yes, dual citizenship in Canada is legal. But you may want to verify if your current citizenship allows it as well.",
  },
  {
    question: "WHO IS ELIGIBLE FOR THE QUEBEC IMMIGRANT INVESTOR PROGRAM?",
    answer:
      "To be eligible, an applicant must have net assets of at least CAD$2,000,000, arrange a five-year term investment of CAD$1,000,000 and make a donation of CA$200,000.",
  },
  {
    question: "CAN I APPLY TO THE QIIP DIRECTLY WITHOUT AN AGENT?",
    answer:
      "No. Quebec does not accept applications directly. All applications must go through authorized agents such as Arton Capital.",
  },
  {
    question: "WHICH OTHER CANADIAN IMMIGRATION OPTIONS EXIST FOR INVESTORS?",
    answer:
      "The Quebec Immigrant Investor Program is currently the only passive investment immigration program in Canada specifically designed for foreign investors.",
  },
];

export default function QuebecCanadaPage() {
  const [passportOf, setPassportOf] = useState<string>("CA");
  const [goingTo, setGoingTo] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const visaStatus = useMemo(
    () => getVisaStatusLabel(passportOf, goingTo),
    [passportOf, goingTo]
  );

  return (
    <>
      <Head>
        <title>Canada Investor Visa – Quebec Residency by Investment</title>
        <meta
          name="description"
          content="Gain Canadian residency hassle-free with Quebec's Investor Program. Enjoy quality healthcare, education, and global mobility. Learn how to qualify today!"
        />
        <link
          rel="canonical"
          href="https://www.yourdomain.com/global-citizenship-programs/canada-quebec"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Canada Investor Visa – Quebec Residency by Investment"
        />
        <meta
          property="og:description"
          content="Gain Canadian residency hassle-free with Quebec's Investor Program. Enjoy quality healthcare, education, and global mobility. Learn how to qualify today!"
        />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/global-citizenship-programs/canada-quebec"
        />
        <meta property="og:site_name" content="Arton Capital Clone" />
        <meta
          property="og:image"
          content="https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Quebec-Program.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="439" />
      </Head>

      <main className="bg-[#f4f4f4] text-[#333333] min-h-screen">
        {/* Hero */}
        <section className="relative">
          <div
            className="relative h-[260px] md:h-[320px] flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Canada.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 px-4">
              <h1 className="text-3xl md:text-4xl tracking-[0.25em] text-white mb-3">
                QUEBEC, CANADA
              </h1>
              <h2 className="text-sm md:text-base italic text-[#f0c37d] tracking-[0.25em]">
                Residency &amp; Citizenship by Investment
              </h2>
            </div>
          </div>
        </section>

        {/* Main */}
        <div id="content-wrapper" className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* LEFT COLUMN */}
              <div className="lg:w-2/3 bg-white p-6 md:p-8 shadow-sm border border-[#e5e5e5]">
                <p className="text-sm leading-relaxed mb-6">
                  Looking for a steadily top-rated country ranked among the best
                  in the world in terms of quality of life, education, civil
                  liberties, government transparency and economic freedom?
                  Canada is not only a stable contender in all those categories,
                  it is also diverse and rich in society, history and nature.
                  For many it is the country that for years shaped the immigrant
                  investor map.
                </p>

                <h3 className="text-lg tracking-[0.2em] uppercase mb-3 text-[#444]">
                  WHY CHOOSE CANADA?
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  Canada is one of the most popular destinations for investor
                  immigrants wishing to relocate. It consistently ranks high on
                  major comparative surveys of industrialized nations. Other of
                  the country’s key benefits include the following:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                  <li>G8 and NAFTA member.</li>
                  <li>Unspoiled environment with strict environmental controls.</li>
                  <li>
                    World-class health care system, one of the best in the
                    world.
                  </li>
                  <li>
                    Excellent education system, one of the most respected in the
                    world.
                  </li>
                  <li>
                    Cultural, ethnic and religious tolerance entrenched in the
                    Constitution.
                  </li>
                  <li>
                    One of the safest countries to live in, offering a high
                    quality of life.
                  </li>
                  <li>
                    One of the most valued passports for international travel.
                  </li>
                </ul>

                <h3 className="text-lg tracking-[0.2em] uppercase mb-3 text-[#444]">
                  QUALIFICATIONS
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  The Quebec Immigrant Investor Program was established in 1986.
                  Throughout its history, the program has undergone significant
                  changes in investment thresholds, transitioning from
                  CA$400,000 to CA$800,000 and eventually to CA$1.2 million. In
                  2024 it was relaunched with new qualification and investment
                  requirements. The program is designed to allow business people
                  and their families to enter the province of Quebec as
                  permanent residents on an unconditional basis. In return,
                  funding made available through the program helps provide
                  subsidies in support of small and medium businesses in Quebec.
                  The program has undergone significant transformation in the
                  past couple of years, addressing the application process.
                </p>
                <p className="text-sm leading-relaxed mb-3">
                  To qualify for residency or citizenship, applicants must
                  fulfill the investment requirements below in addition to
                  meeting the following criteria:
                </p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                  <li>Show Level 7 French language proficiency (intermediate).</li>
                  <li>Demonstrate business experience.</li>
                  <li>Have a net worth of at least CA$2 million.</li>
                  <li>
                    Provide documents supporting the source and origin of
                    invested funds.
                  </li>
                  <li>Settle in the province of Quebec.</li>
                </ul>

                <h3 className="text-lg tracking-[0.2em] uppercase mb-3 text-[#444]">
                  INVESTMENT REQUIREMENTS
                </h3>
                <p className="text-sm leading-relaxed mb-3">
                  As of January 2024, the financial contribution required to
                  qualify for the Quebec Immigrant Investor Program has been
                  split into two parts – a donation and a term investment,
                  totalling CA$1,200,000.
                </p>

                <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-1">
                  DONATION
                </h4>
                <p className="text-sm leading-relaxed mb-3">
                  Investors are now required to make a non-refundable financial
                  contribution of CA$200,000 to Investissement Québec – Immigrants
                  Investisseurs Inc.
                </p>

                <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-1">
                  INVESTMENT
                </h4>
                <p className="text-sm leading-relaxed mb-3">
                  There are different ways to make the required investment in
                  order to qualify for the Quebec Immigrant Investor Program.
                  Investors can either deposit the full amount (Full Investment),
                  or finance the required amount (Financed Investment) from a
                  chartered Canadian bank.
                </p>
                <p className="text-sm leading-relaxed mb-2">
                  <strong>Full Investment</strong>
                </p>
                <p className="text-sm leading-relaxed mb-3">
                  Applicants choosing this option must invest CA$1,000,000 in a
                  government-guaranteed investment and hold it for a period of
                  five years. At the end of this period, the guaranteed full
                  amount is returned to the investor without accrued interest.
                  The program provides for full investment or financing through
                  authorized financial institutions. Arton Investments is such a
                  financial institution duly recognized by the Ministère de
                  l’Immigration, de la Francisation et de l’Intégration (MIFI)
                  and Investissement Quebec (IQ). Additionally, investors will
                  also need to make a mandatory non-refundable donation of
                  CA$200,000 to Investissement Quebec.
                </p>

                <p className="text-sm leading-relaxed mb-2">
                  <strong>Financed Investment</strong>
                </p>
                <p className="text-sm leading-relaxed mb-6">
                  Under this option investors pay a reduced amount that is used
                  to finance a CA$1,000,000 closed 62-month term loan from a
                  chartered bank. This loan is initiated and repaid at no further
                  cost and without additional guarantees from the applicant.
                </p>

                <h3 className="text-lg tracking-[0.2em] uppercase mb-3 text-[#444]">
                  CITIZENSHIP REQUIREMENTS
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  Investors and their family members who have lived in Canada
                  for three out of the four years (1,095 days) preceding the
                  application, have adequate knowledge of English and/or French,
                  have no criminal record, and have acquired knowledge of the
                  rights and responsibilities of citizenship, as well as an
                  understanding of Canada’s history, values, institutions and
                  symbols are eligible to apply for citizenship.
                </p>

                {/* FAQ */}
                <div
                  className="border border-[#dedede] divide-y divide-[#eee] rounded-sm mb-8"
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                  {FAQ_ITEMS.map((item, idx) => (
                    <article
                      key={item.question}
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <button
                        type="button"
                        className="w-full text-left px-4 py-3 bg-[#f7f7f7] hover:bg-[#f0f0f0] flex items-center justify-between"
                        onClick={() =>
                          setOpenFaqIndex((prev) =>
                            prev === idx ? null : idx
                          )
                        }
                      >
                        <h3
                          itemProp="name"
                          className="text-xs md:text-sm tracking-[0.2em] uppercase"
                        >
                          {item.question}
                        </h3>
                        <span className="ml-4 text-xs">
                          {openFaqIndex === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaqIndex === idx && (
                        <div
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                          className="px-4 py-3 text-sm leading-relaxed bg-white"
                        >
                          <span itemProp="text">{item.answer}</span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>

                <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-3">
                  NEXT STEPS:
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                  <div className="border border-[#e4e0db] p-4 bg-[#f9f6f2]">
                    <a
                      href="/tools/program-check"
                      target="_blank"
                      rel="noreferrer"
                      className="block font-semibold text-[#b88654] uppercase tracking-[0.15em] mb-1"
                    >
                      Program Check
                    </a>
                    <span className="text-xs text-[#666]">
                      Compare the different programs side by side and examine
                      their features.
                    </span>
                  </div>
                  <div className="border border-[#e4e0db] p-4 bg-[#f9f6f2]">
                    <a
                      href="/tools/program-cost"
                      target="_blank"
                      rel="noreferrer"
                      className="block font-semibold text-[#b88654] uppercase tracking-[0.15em] mb-1"
                    >
                      Program Cost
                    </a>
                    <span className="text-xs text-[#666]">
                      Find out the cost estimates for each program tailored to
                      your family.
                    </span>
                  </div>
                  <div className="border border-[#e4e0db] p-4 bg-[#f9f6f2]">
                    <a
                      href="/tools/program-map"
                      target="_blank"
                      rel="noreferrer"
                      className="block font-semibold text-[#b88654] uppercase tracking-[0.15em] mb-1"
                    >
                      Program Map
                    </a>
                    <span className="text-xs text-[#666]">
                      See the power of global mobility for each passport.
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm mb-2">Need more information?</p>
                  <a
                    href="/become-a-global-citizen"
                    className="inline-block px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase bg-black text-white hover:bg-[#333]"
                  >
                    Contact us.
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <aside className="lg:w-1/3 space-y-6">
                {/* Index */}
                <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
                  <h2 className="text-sm tracking-[0.2em] uppercase mb-4">
                    ARTON INDEX SCORE
                  </h2>

                  <div className="flex flex-col items-center mb-4">
                    <div className="relative w-40 h-40 rounded-full border-[10px] border-[#e9e9e9] flex items-center justify-center">
                      <div className="absolute inset-3 rounded-full border-[8px] border-[#848486]" />
                      <div className="absolute inset-7 rounded-full border-[8px] border-[#da9c5f]" />
                      <div className="absolute inset-11 rounded-full border-[8px] border-[#c0c1c3]" />
                      <div className="absolute inset-16 rounded-full border-[8px] border-[#e6bd9d]" />
                      <h2 className="relative text-3xl font-semibold text-[#444]">
                        91
                      </h2>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-[0.15em]">
                    <li className="flex items-center justify-between">
                      <span>cost</span>
                      <strong>18</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>speed</span>
                      <strong>17</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>global mobility</span>
                      <strong>20</strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>quality of life</span>
                      <strong>20</strong>
                    </li>
                    <li className="flex items-center justify-between col-span-2">
                      <span>simplicity</span>
                      <strong>16</strong>
                    </li>
                  </ul>

                  <hr className="my-4 border-[#e5e5e5]" />

                  <p className="text-xs text-center text-[#666]">
                    Updated yearly, the Arton Index is an overall assessment and
                    comparative benchmark of the country and its investment
                    program.
                  </p>
                </div>

                {/* Map & stats */}
                <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://www.artoncapital.com/wp-content/uploads/2013/11/map-Canada.png"
                      alt="Quebec, Canada"
                      className="max-w-full h-auto"
                    />
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="font-semibold text-xs tracking-[0.18em] uppercase">
                      35,362,905
                    </p>
                    <p>Population Growth: 0.74%</p>
                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      46,200 USD
                    </p>
                    <p>GDP (per capita)</p>
                    <p>GDP (purchasing power parity)</p>
                    <p>1.674 trillion USD</p>
                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      169
                    </p>
                    <p>Visa free countries</p>
                  </div>

                  <hr className="my-4 border-[#e5e5e5]" />

                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-xs tracking-[0.18em] uppercase">
                      LOCATION
                    </p>
                    <p>
                      Northern North America, bordering the North Atlantic Ocean
                      on the east, North Pacific Ocean on the west, and the
                      Arctic Ocean on the north, north of the conterminous US
                    </p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      CAPITAL
                    </p>
                    <p>Ottawa</p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      DIFFERENCE
                    </p>
                    <p>UTC-5</p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      TOTAL AREA
                    </p>
                    <p>9,984,670 sq. km.</p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      AGE DEMOGRAPHICS
                    </p>
                    <p>
                      0–14: 15.44%, 15–24: 12.12%, 25–54: 40.32%, 55–64: 13.94%,
                      65+: 18.18%
                    </p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      LANGUAGE
                    </p>
                    <p>
                      English (official): 58.7%, French (official): 22%, Punjabi:
                      1.4%, Italian: 1.3%, Spanish: 1.3%, German: 1.3%,
                      Cantonese: 1.2%, Tagalog: 1.2%, Arabic: 1.1%, Other:
                      10.5%
                    </p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      RELIGIONS
                    </p>
                    <p>
                      Catholic: 39% (includes Roman Catholic: 38.8%, Other
                      Catholic: 0.2%), Protestant: 20.3% (includes United
                      Church: 6.1%, Anglican: 5%, Baptist: 1.9%, Lutheran:
                      1.5%, Pentecostal: 1.5%, Presbyterian: 1.4%, Other
                      Protestant: 2.9%), Orthodox: 1.6%, Other Christian: 6.3%,
                      Muslim: 3.2%, Hindu: 1.5%, Sikh: 1.4%, Buddhist: 1.1%,
                      Jewish: 1%, Other: 0.6%, None: 23.9%
                    </p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      GOVERNMENT TYPE
                    </p>
                    <p>
                      Federal parliamentary democracy (Parliament of Canada)
                      under a constitutional monarchy and Commonwealth realm
                    </p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      CURRENCY
                    </p>
                    <p>Canadian dollar (CAD)</p>

                    <p className="font-semibold text-xs tracking-[0.18em] uppercase mt-2">
                      EXCHANGE RATE
                    </p>
                    <p>1 USD = 1.331 CAD (2014)</p>
                  </div>
                </div>

                {/* Brochure */}
                <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
                  <p className="font-semibold text-xs tracking-[0.18em] uppercase mb-3">
                    DOWNLOAD BROCHURE (PDF)
                  </p>
                  <div className="flex flex-col items-center">
                    <a
                      href="https://www.artoncapital.com/documents/programs/Arton-Canada.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <img
                        src="https://www.artoncapital.com/wp-content/uploads/2025/06/Arton-Canada-cover.jpg"
                        alt="Program brochure for Quebec, Canada"
                        className="w-[220px] h-auto shadow-md mb-3"
                      />
                    </a>
                    <button
                      className="px-4 py-2 text-xs tracking-[0.16em] uppercase bg-[#b88654] text-white hover:bg-[#8a643b]"
                      onClick={() =>
                        window.open(
                          "https://www.artoncapital.com/documents/programs/Arton-Canada.pdf",
                          "_blank"
                        )
                      }
                    >
                      Get Download Link
                    </button>
                  </div>
                </div>

                {/* VISA STATUS WIDGET */}
                <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
                  <div className="mb-4">
                    <img
                      src="https://www.artoncapital.com/wp-content/plugins/passport-index/inc/PI-widget-logo-light.png"
                      alt="The Passport Index logo"
                      className="w-full max-w-xs mx-auto"
                    />
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <label
                        htmlFor="passport-of"
                        className="block text-xs uppercase tracking-[0.18em] mb-1"
                      >
                        Passport of
                      </label>
                      <select
                        id="passport-of"
                        className="w-full border border-[#d2d2d2] bg-white text-xs px-2 py-2"
                        value={passportOf}
                        onChange={(e) => setPassportOf(e.target.value)}
                      >
                        <option value="">Select passport</option>
                        {COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="going-to"
                        className="block text-xs uppercase tracking-[0.18em] mb-1"
                      >
                        Going to
                      </label>
                      <select
                        id="going-to"
                        className="w-full border border-[#d2d2d2] bg-white text-xs px-2 py-2"
                        value={goingTo}
                        onChange={(e) => setGoingTo(e.target.value)}
                      >
                        <option value="">Select destination</option>
                        {COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-4">
                      <div
                        className={[
                          "px-3 py-3 rounded-sm text-xs leading-relaxed",
                          visaStatus.tone === "good"
                            ? "bg-[#e8f5e9] border border-[#a5d6a7] text-[#256029]"
                            : visaStatus.tone === "caution"
                            ? "bg-[#fff3e0] border border-[#ffcc80] text-[#8f4f10]"
                            : "bg-[#f4f4f4] border border-[#dedede] text-[#555]",
                        ].join(" ")}
                      >
                        <span className="uppercase tracking-[0.18em] text-[10px] block mb-1">
                          Visa status (indicative)
                        </span>
                        <span>{visaStatus.label}</span>
                      </div>
                      <p className="mt-2 text-[10px] text-[#777]">
                        This widget is for informational &amp; UI purposes only.
                        Always confirm current visa rules with official
                        government or consular sources.
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 justify-center text-[10px] uppercase tracking-[0.18em]">
                      <a
                        href="https://www.passportindex.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border border-[#c7c7c7] hover:bg-[#f5f5f5]"
                      >
                        Explore
                      </a>
                      <a
                        href="https://www.passportindex.org/comparebyPassport.php"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border border-[#c7c7c7] hover:bg-[#f5f5f5]"
                      >
                        Compare
                      </a>
                      <a
                        href="https://www.passportindex.org/improve.php"
                        target="_blank"
                        rel="noreferrer"
                        className="px-2 py-1 border border-[#c7c7c7] hover:bg-[#f5f5f5]"
                      >
                        Improve
                      </a>
                    </div>

                    <p className="mt-3 text-[10px] text-center text-[#777]">
                      Empowered by a Passport Index–style experience (demo
                      clone).
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#202020] text-[#d8d8d8] pt-6 pb-4 mt-10 text-xs">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span>
                &copy; <span id="current-year">2025</span> Arton Capital
              </span>
              <span className="hidden md:inline">&nbsp;|&nbsp;</span>
              <a
                href="https://www.artoncapitals.com/confidentiality-policy/"
                className="underline-offset-2 hover:underline"
              >
                Confidentiality policy
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="https://www.artoncapitals.com/legal-notes/"
                className="underline-offset-2 hover:underline"
              >
                Legal notes
              </a>
            </div>
            <div className="text-right">
              PART OF{" "}
              <a
                href="https://www.arton-group.com"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                THE ARTON GROUP
              </a>
              .&nbsp; FOUNDING MEMBER OF{" "}
              <a
                href="https://www.giic.uk"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-2 hover:underline"
              >
                GIIC
              </a>
              .
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
