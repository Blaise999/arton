// app/become-a-certified-partner/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { BecomeCertifiedPartnerForm } from "./BecomeCertifiedPartnerForm";

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

          {/* Form card with built-in success/error */}
          <BecomeCertifiedPartnerForm
            countries={COUNTRIES}
            programs={PROGRAMS_OF_INTEREST}
          />
        </div>
      </section>
    </main>
  );
}
