// app/become-a-certified-partner/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Become a Certified Partner - Arton Capital",
  description:
    "Join Arton Capital's Certified Partner network and empower Global Citizenship. Discover membership benefits and exclusive services.",
};

const COUNTRIES = [
  "AFGHANISTAN",
  "ALBANIA",
  "ALGERIA",
  "AMERICAN SAMOA",
  "ANDORRA",
  "ANGOLA",
  "ANGUILLA",
  "ANTARCTICA",
  "ANTIGUA AND BARBUDA",
  "ARGENTINA",
  "ARMENIA",
  "ARUBA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIJAN",
  "BAHAMAS",
  "BAHRAIN",
  "BANGLADESH",
  "BARBADOS",
  "BELARUS",
  "BELGIUM",
  "BELIZE",
  "BENIN",
  "BERMUDA",
  "BHUTAN",
  "BOLIVIA, PLURINATIONAL STATE OF",
  "BONAIRE, SINT EUSTATIUS AND SABA",
  "BOSNIA AND HERZEGOVINA",
  "BOTSWANA",
  "BOUVET ISLAND",
  "BRAZIL",
  "BRITISH INDIAN OCEAN TERRITORY",
  "BRUNEI DARUSSALAM",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "CAMBODIA",
  "CAMEROON",
  "CANADA",
  "CAPE VERDE",
  "CAYMAN ISLANDS",
  "CENTRAL AFRICAN REPUBLIC",
  "CHAD",
  "CHILE",
  "CHINA",
  "CHRISTMAS ISLAND",
  "COCOS (KEELING) ISLANDS",
  "COLOMBIA",
  "COMOROS",
  "CONGO",
  "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
  "COOK ISLANDS",
  "COSTA RICA",
  "COTE DIVOIRE",
  "CROATIA",
  "CUBA",
  "CURACAO",
  "CYPRUS",
  "CZECH REPUBLIC",
  "DENMARK",
  "DJIBOUTI",
  "DOMINICA",
  "DOMINICAN REPUBLIC",
  "ECUADOR",
  "EGYPT",
  "EL SALVADOR",
  "EQUATORIAL GUINEA",
  "ERITREA",
  "ESTONIA",
  "ETHIOPIA",
  "FALKLAND ISLANDS (MALVINAS)",
  "FAROE ISLANDS",
  "FIJI",
  "FINLAND",
  "FRANCE",
  "FRENCH GUIANA",
  "FRENCH POLYNESIA",
  "FRENCH SOUTHERN TERRITORIES",
  "GABON",
  "GAMBIA",
  "GEORGIA",
  "GERMANY",
  "GHANA",
  "GIBRALTAR",
  "GREECE",
  "GREENLAND",
  "GRENADA",
  "GUADELOUPE",
  "GUAM",
  "GUATEMALA",
  "GUERNSEY",
  "GUINEA",
  "GUINEA-BISSAU",
  "GUYANA",
  "HAITI",
  "HEARD ISLAND AND MCDONALD ISLANDS",
  "HONDURAS",
  "HONG KONG",
  "HUNGARY",
  "ICELAND",
  "INDIA",
  "INDONESIA",
  "IRAN, ISLAMIC REPUBLIC OF",
  "IRAQ",
  "IRELAND",
  "ISLE OF MAN",
  "ISRAEL",
  "ITALY",
  "JAMAICA",
  "JAPAN",
  "JERSEY",
  "JORDAN",
  "KAZAKHSTAN",
  "KENYA",
  "KIRIBATI",
  "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
  "KUWAIT",
  "KYRGYZSTAN",
  "LAND ISLANDS",
  "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
  "LATVIA",
  "LEBANON",
  "LESOTHO",
  "LIBERIA",
  "LIBYA",
  "LIECHTENSTEIN",
  "LITHUANIA",
  "LUXEMBOURG",
  "MACAO",
  "MADAGASCAR",
  "MALAWI",
  "MALAYSIA",
  "MALDIVES",
  "MALI",
  "MALTA",
  "MARSHALL ISLANDS",
  "MARTINIQUE",
  "MAURITANIA",
  "MAURITIUS",
  "MAYOTTE",
  "MEXICO",
  "MICRONESIA, FEDERATED STATES OF",
  "MOLDOVA, REPUBLIC OF",
  "MONACO",
  "MONGOLIA",
  "MONTENEGRO",
  "MONTSERRAT",
  "MOROCCO",
  "MOZAMBIQUE",
  "MYANMAR",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NETHERLANDS",
  "NEW CALEDONIA",
  "NEW ZEALAND",
  "NICARAGUA",
  "NIGER",
  "NIGERIA",
  "NIUE",
  "NORFOLK ISLAND",
  "NORTHERN MARIANA ISLANDS",
  "NORWAY",
  "NORTH MACEDONIA",
  "OMAN",
  "PAKISTAN",
  "PALAU",
  "PALESTINE, STATE OF",
  "PANAMA",
  "PAPUA NEW GUINEA",
  "PARAGUAY",
  "PERU",
  "PHILIPPINES",
  "PITCAIRN",
  "POLAND",
  "PORTUGAL",
  "PUERTO RICO",
  "QATAR",
  "REUNION",
  "ROMANIA",
  "RUSSIAN FEDERATION",
  "RWANDA",
  "SAINT BARTHELEMY",
  "SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA",
  "SAINT KITTS AND NEVIS",
  "SAINT LUCIA",
  "SAINT MARTIN (FRENCH PART)",
  "SAINT PIERRE AND MIQUELON",
  "SAINT VINCENT AND THE GRENADINES",
  "SAMOA",
  "SAN MARINO",
  "SAO TOME AND PRINCIPE",
  "SAUDI ARABIA",
  "SENEGAL",
  "SERBIA",
  "SEYCHELLES",
  "SIERRA LEONE",
  "SINGAPORE",
  "SINT MAARTEN (DUTCH PART)",
  "SLOVAKIA",
  "SLOVENIA",
  "SOLOMON ISLANDS",
  "SOMALIA",
  "SOUTH AFRICA",
  "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
  "SOUTH KOREA",
  "SOUTH SUDAN",
  "SPAIN",
  "SRI LANKA",
  "SUDAN",
  "SURINAME",
  "SVALBARD AND JAN MAYEN",
  "SWAZILAND",
  "SWEDEN",
  "SWITZERLAND",
  "SYRIAN ARAB REPUBLIC",
  "TAIWAN, PROVINCE OF CHINA",
  "TAJIKISTAN",
  "TANZANIA, UNITED REPUBLIC OF",
  "THAILAND",
  "TIMOR-LESTE",
  "TOGO",
  "TOKELAU",
  "TONGA",
  "TRINIDAD AND TOBAGO",
  "TUNISIA",
  "TURKIYE",
  "TURKMENISTAN",
  "TURKS AND CAICOS ISLANDS",
  "TUVALU",
  "UGANDA",
  "UKRAINE",
  "UNITED ARAB EMIRATES",
  "UNITED KINGDOM",
  "UNITED STATES",
  "UNITED STATES MINOR OUTLYING ISLANDS",
  "URUGUAY",
  "UZBEKISTAN",
  "VANUATU",
  "VATICAN",
  "VENEZUELA, BOLIVARIAN REPUBLIC OF",
  "VIET NAM",
  "VIRGIN ISLANDS, BRITISH",
  "VIRGIN ISLANDS, U.S.",
  "WALLIS AND FUTUNA",
  "WESTERN SAHARA",
  "YEMEN",
  "ZAMBIA",
  "ZIMBABWE",
];

const PROGRAMS_OF_INTEREST = [
  "ANTIGUA AND BARBUDA",
  "BULGARIA",
  "CANADA",
  "CYPRUS",
  "DOMINICA",
  "GREECE",
  "GRENADA",
  "HUNGARY",
  "LATVIA",
  "MALTA",
  "MONTENEGRO",
  "PORTUGAL",
  "SAINT LUCIA",
  "SAINT KITTS AND NEVIS",
  "SAO TOME AND PRINCIPE",
  "SPAIN",
  "UNITED ARAB EMIRATES",
  "UNITED STATES",
  "ALL",
];

export default function BecomeCertifiedPartnerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <section className="relative h-[260px] md:h-[360px] overflow-hidden">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg"
          alt="Become a Certified Partner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              Empowering Global Citizenship®
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Become a Certified Partner
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-200/90">
              Join the global citizenship movement, so we can empower future
              generations — together.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-4 text-slate-100">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Become a Certified Partner of Arton Capital
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Arton Capital has more than 500 Certified Partners around the
              world and is always looking at expanding its network of licensed
              immigration consultants, lawyers, private bankers, accountants and
              other financial/legal professionals with excellent reputation and
              good base of High Net Worth (HNW) clients.
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              If your firm qualifies, please get in touch with us.
            </p>
          </div>

          {/* Form card */}
          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/40 backdrop-blur sm:p-8">
            {/* 
              NOTE:
              - No onSubmit handler here (this file is a Server Component).
              - Handle the POST in an API route like /api/partner-lead.
            */}
            <form
              className="space-y-10"
              method="POST"
              action="/api/partner-lead"
            >
              {/* Name + contact */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fname"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    First name <span className="text-rose-300">*</span>
                  </label>
                  <input
                    id="fname"
                    name="fname"
                    required
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastname"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Last name <span className="text-rose-300">*</span>
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    required
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Email <span className="text-rose-300">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">
                    Include country code if possible.
                  </p>
                </div>
              </div>

              {/* Country of activity + Target markets */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="countryOfActivity"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Country of activity{" "}
                    <span className="text-rose-300">*</span>
                  </label>
                  <select
                    id="countryOfActivity"
                    name="country_activity"
                    required
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="targetMarkets"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
                  >
                    Target market(s){" "}
                    <span className="text-rose-300">*</span>
                  </label>
                  <select
                    id="targetMarkets"
                    name="target_markets"
                    required
                    multiple
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    size={6}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Hold Ctrl (Windows) or Cmd (Mac) to select multiple
                    countries.
                  </p>
                </div>
              </div>

              {/* Contact preference */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  How do you want us to contact you?
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Email", "Phone", "WhatsApp"].map((method) => (
                    <label
                      key={method}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-100"
                    >
                      <input
                        type="radio"
                        name="contact"
                        value={method}
                        defaultChecked={method === "Email"}
                        className="h-3.5 w-3.5 border-slate-500 bg-slate-900 text-cyan-400 focus:ring-cyan-400"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Are you? */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Are you?
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Lawyer",
                    "Accountant",
                    "Certified Immigration Consultant",
                    "Private Banker / Financial Intermediary",
                  ].map((role) => (
                    <label
                      key={role}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-100"
                    >
                      <input
                        type="radio"
                        name="are_you"
                        value={role}
                        className="h-3.5 w-3.5 border-slate-500 bg-slate-900 text-cyan-400 focus:ring-cyan-400"
                      />
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Company name */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Company name
                </p>
                <div className="space-y-2">
                  <input
                    name="company"
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Program of interest */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Global Citizen Program of interest
                </p>
                <div className="space-y-2">
                  <select
                    name="program_of_interest"
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    defaultValue="ANTIGUA AND BARBUDA"
                  >
                    {PROGRAMS_OF_INTEREST.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Existing clients? */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Do you have existing clients already enrolled in other
                  programs?
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Yes", "No"].map((answer, idx) => (
                    <label
                      key={answer}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-100"
                    >
                      <input
                        type="radio"
                        name="existing_clients"
                        value={answer}
                        defaultChecked={idx === 0}
                        className="h-3.5 w-3.5 border-slate-500 bg-slate-900 text-cyan-400 focus:ring-cyan-400"
                      />
                      <span>{answer}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Questions / comments */}
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  Questions or comments
                </p>
                <div className="space-y-2">
                  <textarea
                    name="questions"
                    rows={5}
                    className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="Share anything else that would help us understand your practice and client base."
                  />
                </div>
              </div>

              {/* Footer line */}
              <div className="flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Send Message
                </button>
                <p className="max-w-md text-[11px] leading-relaxed text-slate-400">
                  Protected by reCAPTCHA. Google{" "}
                  <span className="underline">Privacy Policy</span> and{" "}
                  <span className="underline">Terms of Service</span> apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
