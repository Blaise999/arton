// app/become-a-global-citizen/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { BecomeGlobalCitizenForm } from "./BecomeGlobalCitizenForm";

export const metadata: Metadata = {
  title: "Become a Global Citizen® | Arton Capital",
  description:
    "Become a Global Citizen through Arton Capital's Investor Programs for Residence and Citizenship. Enjoy the benefits for generations to come.",
  alternates: { canonical: "/become-a-global-citizen" },
  openGraph: {
    title: "Become a Global Citizen® | Arton Capital",
    description: "Discover how global citizenship can empower your dreams.",
    url: "/become-a-global-citizen",
    siteName: "Arton Capital",
    images: [
      {
        url: "/Pics/Arton-slider-Access.jpg",
        width: 1200,
        height: 630,
        alt: "Arton Global Citizen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  robots: { index: true, follow: true },
};

// You can extend these lists anytime.
// Keeping them in arrays keeps the file readable and fast to render.
const NATIONALITIES = [
  "Afghan","Albanian","Algerian","American","Angolan","Argentinean","Armenian","Australian","Austrian",
  "Azerbaijani","Bahraini","Bangladeshi","Barbadian","Belarusian","Belgian","Beninese","Bolivian",
  "Brazilian","British","Bulgarian","Burkinabe","Burmese","Cameroonian","Canadian","Cape Verdean",
  "Chilean","Chinese","Colombian","Congolese","Costa Rican","Croatian","Cuban","Cypriot","Czech",
  "Danish","Dominican","Dutch","Ecuadorean","Egyptian","Emirian","English","Eritrean","Estonian",
  "Ethiopian","Filipino","Finnish","French","Gabonese","Gambian","Georgian","German","Ghanaian",
  "Greek","Grenadian","Guatemalan","Guinean","Guyanese","Haitian","Honduran","Hong Kong","Hungarian",
  "Icelandic","Indian","Indonesian","Iranian","Iraqi","Irish","Israeli","Italian","Jamaican","Japanese",
  "Jordanian","Kazakhstani","Kenyan","Kuwaiti","Kyrgyz","Laotian","Latvian","Lebanese","Liberian",
  "Libyan","Lithuanian","Luxembourger","Malagasy","Malawian","Malaysian","Malian","Maltese",
  "Mauritanian","Mauritian","Mexican","Moldovan","Monacan","Mongolian","Moroccan","Mozambican",
  "Namibian","Nepalese","New Zealander","Nicaraguan","Nigerian","Norwegian","Omani","Pakistani",
  "Palestinian","Panamanian","Paraguayan","Peruvian","Polish","Portuguese","Qatari","Romanian",
  "Russian","Rwandan","Saudi","Scottish","Senegalese","Serbian","Sierra Leonean","Singaporean",
  "Slovakian","Slovenian","Somali","South African","South Korean","Spanish","Sri Lankan","Sudanese",
  "Swazi","Swedish","Swiss","Syrian","Taiwanese","Tajik","Tanzanian","Thai","Togolese","Trinidadian",
  "Tunisian","Turkish","Turkmen","Ugandan","Ukrainian","Uruguayan","Uzbekistani","Venezuelan",
  "Vietnamese","Welsh","Yemenite","Zambian","Zimbabwean",
];

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua And Barbuda","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
  "Belize","Benin","Bhutan","Bolivia","Bosnia And Herzegovina","Botswana","Brazil","Brunei Darussalam",
  "Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
  "Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana",
  "Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
  "Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali",
  "Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco",
  "Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger",
  "Nigeria","North Macedonia","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru",
  "Philippines","Poland","Portugal","Qatar","Romania","Russian Federation","Rwanda","Saint Kitts And Nevis",
  "Saint Lucia","Saint Vincent And The Grenadines","Samoa","San Marino","Sao Tome And Principe",
  "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
  "Suriname","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania",
  "Thailand","Timor-Leste","Togo","Tonga","Trinidad And Tobago","Tunisia","Turkiye","Turkmenistan",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican","Venezuela","Viet Nam","Yemen","Zambia","Zimbabwe",
];

const PROGRAMS = [
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

export default function BecomeAGlobalCitizenPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO / SLIDER-LIKE BANNER */}
      <section className="relative h-[260px] md:h-[380px] overflow-hidden">
        <Image
          src="/Pics/Arton-slider-Access.jpg"
          alt="Become a Global Citizen®"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-white">
              Become a Global Citizen®
            </h1>
            <p className="mt-2 text-sm md:text-lg text-white/90 max-w-2xl">
              Discover how global citizenship can empower your dreams
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-4 md:px-6 py-8 md:py-10">
        <div className="max-w-3xl space-y-4 text-neutral-700">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-900">
            Your journey begins with Arton.
          </h2>
          <p>A world of opportunity, freedom, and prosperity awaits you.</p>
          <p>
            Our team of experts are committed to offer you unmatched experience
            throughout the entire process. We are delighted to offer a free
            consultation to evaluate your potential, answer any questions you
            may have, and provide you with valuable recommendations for the most
            suitable program to meet your goals.
          </p>
          <p>
            Confidentiality and trust are at the core of Arton Capital. We take
            your privacy seriously and abide by our Confidentiality Policy. No
            information will be shared with third parties under any
            circumstances.
          </p>
          <p>
            Please answer the below questions, and one of our team members will
            be in touch with you within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM (client-side) */}
      <section className="container mx-auto px-4 md:px-6 pb-14">
        <div className="max-w-4xl">
          <BecomeGlobalCitizenForm
            nationalities={NATIONALITIES}
            countries={COUNTRIES}
            programs={PROGRAMS}
          />
        </div>
      </section>

      {/* NEWSWIRE CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-neutral-700">
            Do you receive our monthly Global Citizen Newswire?
          </p>
          <a
            href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#cc9966] px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
          >
            Subscribe
          </a>
        </div>
      </section>
    </main>
  );
}
