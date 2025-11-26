// app/become-a-global-citizen/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

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

      {/* FORM (inline) */}
      <section className="container mx-auto px-4 md:px-6 pb-14">
        <div className="max-w-4xl">
          <form
            action="#"
            method="post"
            className="mt-2 rounded-xl border border-neutral-200 p-4 md:p-6 bg-white shadow-sm"
          >
            <fieldset className="space-y-6">
              {/* Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    First name <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="fname"
                    required
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Last name <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="lastname"
                    required
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Email + phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    name="email"
                    required
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                    type="email"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    name="phone"
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                    type="tel"
                    placeholder="+1..."
                  />
                </div>
              </div>

              {/* Nationality + Residence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Nationality <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="nationality"
                    required
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 bg-white outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                  >
                    <option value="">Select nationality</option>
                    {NATIONALITIES.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Current country of residence{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="country"
                    required
                    className="mt-1 w-full h-11 rounded-md border border-neutral-300 px-3 bg-white outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sex */}
              <div>
                <label className="block text-sm font-medium">
                  Sex <span className="text-red-600">*</span>
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Male", "Female"].map((s) => (
                    <label key={s} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="sex" value={s} required />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              {/* Marital status */}
              <div>
                <label className="block text-sm font-medium">
                  Marital status <span className="text-red-600">*</span>
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Single", "Married", "Divorced / Separated"].map((m) => (
                    <label key={m} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="status" value={m} required />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              {/* Professional management experience */}
              <div>
                <label className="block text-sm font-medium">
                  Have you had professional management experience?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="mt-2 flex gap-4">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="prof" value={v} required />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              {/* Program interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  Global Citizen Program of interest{" "}
                  <span className="text-red-600">*</span>
                </label>
                <select
                  name="program-of-interest"
                  required
                  className="w-full h-11 rounded-md border border-neutral-300 px-3 bg-white outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                >
                  <option value="">Select program</option>
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Managerial proof (shown always; you can make conditional later) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  Can you prove managerial experience of 2 years for the past 5 years?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-4 pt-1">
                  {["Yes","No"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="exp2" value={v} required />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  If Yes, how many years and what was your position?
                </label>
                <input
                  name="exp-description"
                  className="w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                  type="text"
                  placeholder="e.g. 4 years, Operations Manager"
                />
              </div>

              {/* Total assets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  Total value of your assets, in US dollars{" "}
                  <span className="text-red-600">*</span>
                </label>
                <select
                  name="total-value"
                  required
                  className="w-full h-11 rounded-md border border-neutral-300 px-3 bg-white outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                >
                  <option value="">Select range</option>
                  <option value="1 - 3,000,000">1 - 3,000,000</option>
                  <option value="3 - 5,000,000">3 - 5,000,000</option>
                  <option value="more than 5,000,000">more than 5,000,000</option>
                </select>
              </div>

              {/* Lawyer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  Are you represented by an Immigration Consultant or a Lawyer?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="flex gap-4 pt-1">
                  {["Yes","No"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="lawyer2" value={v} required />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  If Yes, please name them
                </label>
                <input
                  name="lawyer-description"
                  className="w-full h-11 rounded-md border border-neutral-300 px-3 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                  type="text"
                  placeholder="Consultant/Lawyer name"
                />
              </div>

              {/* Contact preference */}
              <div>
                <label className="block text-sm font-medium">
                  How do you want us to contact you?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <div className="mt-2 flex flex-wrap gap-4">
                  {["Email","Phone","WhatsApp"].map((v) => (
                    <label key={v} className="inline-flex items-center gap-2 text-sm">
                      <input type="radio" name="contact" value={v} required />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              {/* Heard about */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  How did you find out about our Programs?{" "}
                  <span className="text-red-600">*</span>
                </label>
                <select
                  name="heard"
                  required
                  className="w-full h-11 rounded-md border border-neutral-300 px-3 bg-white outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                >
                  <option value="">Select option</option>
                  <option value="Google">Google</option>
                  <option value="Publication">Publication</option>
                  <option value="Consultant Referral">Consultant Referral</option>
                  <option value="Personal Referral (someone you know)">
                    Personal Referral (someone you know)
                  </option>
                </select>
              </div>

              {/* Comments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <label className="block text-sm font-medium">
                  Questions or Comments
                </label>
                <textarea
                  name="questions"
                  rows={6}
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#cc9966]/40"
                  placeholder="Any extra context..."
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#cc9966] px-6 py-3 text-sm font-semibold text-white hover:bg-black transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>

                <p className="text-xs text-neutral-500 md:text-right">
                  Protected by reCAPTCHA. Google Privacy Policy and Terms of Service apply.
                </p>
              </div>
            </fieldset>
          </form>
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
