// app/tools/program-map/page.tsx
"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import WorldMap, { type AccessByCountry } from "./WorldMap";

// 👇 direct import of your JSON (no API route needed)
import passportMap from "@data/passport-index copy/passport-map-built.json";

// ---- RAW OPTION HTML (copied from Arton) -----------------------------

const CITIZEN_OF_OPTIONS_HTML = `
<option value="AF">Afghanistan</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BR">Brazil</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo (Dem. Rep.)</option><option value="CR">Costa Rica</option><option value="CI">Cote D'Ivoire (Ivory Coast)</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GR">Greece</option><option value="GD">Grenada</option><option value="GT">Guatemala</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="RK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar [Burma]</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territories</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="QA">Qatar</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="LC">Saint Lucia</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="KN">St. Kitts and Nevis</option><option value="VC">St. Vincent and the Grenadines</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States of America</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican City</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
`;

const SECOND_PASSPORT_OPTIONS_HTML = `
<option value="">Please select</option>
<option value="AG">Antigua &amp; Barbuda</option>
<option value="BG">Bulgaria</option>
<option value="CA">Canada</option>
<option value="CY">Cyprus</option>
<option value="DM">Dominica</option>
<option value="GR">Greece</option>
<option value="GD">Grenada</option>
<option value="HU">Hungary</option>
<option value="MT">Malta</option>
<option value="ME">Montenegro</option>
<option value="PT">Portugal</option>
<option value="LC">Saint Lucia</option>
<option value="KN">St. Kitts &amp; Nevis</option>
<option value="GB">United Kingdom</option>
<option value="US">USA</option>
`;

// --------- Types + helpers to read YOUR JSON shape ----------

type PassportDestination = {
  code: string; // ISO2 destination
  access: string | number | null; // "visa free" | "visa on arrival" | "e-visa" | "eta" | "visa required" | "" | number of days
};

type PassportListEntry = {
  code: string; // ISO2 passport
  destinations: PassportDestination[];
};

type PassportListJson = {
  generatedAt?: string;
  passports: PassportListEntry[];
};

// legacy shapes fallback (if you ever switch later)
type PassportEntry = {
  code?: string;
  iso2?: string;
  iso3?: string;
  countryCode?: string;

  visa_free?: string[];
  visa_on_arrival?: string[];
  evisa?: string[];
  eta?: string[];
  visa_required?: string[];
};

type PassportMapJson =
  | PassportListJson
  | Record<string, PassportEntry>
  | PassportEntry[];

const PASSPORT_DATA = passportMap as PassportMapJson;

function isPassportListJson(data: PassportMapJson): data is PassportListJson {
  return !!(data as any)?.passports && Array.isArray((data as any).passports);
}

/** normalize access labels from your destinations[] */
function parseAccess(accessRaw: string | number | undefined | null) {
  const a = String(accessRaw ?? "").toLowerCase().trim();

  // Your current file has access: "" a lot
  // Treat blank as visa required so numbers won't be zero.
  if (!a) return "visa_required";

  if (a === "visa free" || /^\d+$/.test(a) || a.includes("free")) {
    return "visa_free";
  }
  if (a.includes("on arrival")) return "visa_on_arrival";
  if (a.includes("e-visa") || a.includes("evisa")) return "evisa";
  if (a.includes("eta")) return "eta";
  if (a.includes("required")) return "visa_required";
  if (a.includes("no admission")) return "visa_required";

  return "visa_required";
}

type ExtractedAccess = {
  visaFree: Set<string>;
  visaOnArrival: Set<string>;
  eVisa: Set<string>;
  visaRequired: Set<string>;
};

function extractAccessForCode(
  data: PassportMapJson,
  countryCodeIn: string
): ExtractedAccess {
  const countryCode = countryCodeIn.toUpperCase();

  // ✅ Your current shape: { passports: [...] }
  if (isPassportListJson(data)) {
    const entry = data.passports.find(
      (p) => p.code?.toUpperCase() === countryCode
    );

    if (!entry) {
      return {
        visaFree: new Set(),
        visaOnArrival: new Set(),
        eVisa: new Set(),
        visaRequired: new Set(),
      };
    }

    const vf: string[] = [];
    const voa: string[] = [];
    const ev: string[] = [];
    const vr: string[] = [];

    for (const d of entry.destinations || []) {
      const dest = d.code?.toUpperCase();
      if (!dest) continue;

      const cat = parseAccess(d.access);

      if (cat === "visa_free") vf.push(dest);
      else if (cat === "visa_on_arrival") voa.push(dest);
      else if (cat === "evisa" || cat === "eta") ev.push(dest);
      else vr.push(dest);
    }

    return {
      visaFree: new Set(vf),
      visaOnArrival: new Set(voa),
      eVisa: new Set(ev),
      visaRequired: new Set(vr),
    };
  }

  // ✅ Old shapes fallback (dict or array)
  let entry: PassportEntry | undefined;

  if (!Array.isArray(data)) {
    entry =
      (data as any)[countryCode] ||
      (data as any)[countryCode.toLowerCase()];
  } else {
    entry = data.find((row) => {
      const c = row.code || row.iso2 || row.iso3 || row.countryCode;
      return c?.toUpperCase() === countryCode;
    });
  }

  if (!entry) {
    return {
      visaFree: new Set(),
      visaOnArrival: new Set(),
      eVisa: new Set(),
      visaRequired: new Set(),
    };
  }

  const toSet = (arr: string[] = []) =>
    new Set(arr.map((c) => c.toUpperCase()));

  return {
    visaFree: toSet(entry.visa_free),
    visaOnArrival: toSet(entry.visa_on_arrival),
    eVisa: toSet([...(entry.evisa || []), ...(entry.eta || [])]),
    visaRequired: toSet(entry.visa_required),
  };
}

// ---------------------------- Page ---------------------------------------

export default function ProgramMapPage() {
  // Default citizen as NG to be nice to you
  const [citizenOf, setCitizenOf] = useState<string>("NG");
  const [secondPassport, setSecondPassport] = useState<string>("");

  const { visaFreeCount, visaRequiredCount, accessByCountry } =
    useMemo<{
      visaFreeCount: number;
      visaRequiredCount: number;
      accessByCountry: AccessByCountry;
    }>(() => {
      if (!citizenOf) {
        return {
          visaFreeCount: 0,
          visaRequiredCount: 0,
          accessByCountry: {},
        };
      }

      const base = extractAccessForCode(PASSPORT_DATA, citizenOf);
      const extra =
        secondPassport && secondPassport !== ""
          ? extractAccessForCode(PASSPORT_DATA, secondPassport)
          : {
              visaFree: new Set<string>(),
              visaOnArrival: new Set<string>(),
              eVisa: new Set<string>(),
              visaRequired: new Set<string>(),
            };

      // Union each bucket
      const unionVisaFree = new Set<string>([
        ...base.visaFree,
        ...extra.visaFree,
      ]);

      const unionVisaOnArrival = new Set<string>([
        ...base.visaOnArrival,
        ...extra.visaOnArrival,
      ]);

      const unionEVisa = new Set<string>([...base.eVisa, ...extra.eVisa]);

      const unionVisaRequired = new Set<string>([
        ...base.visaRequired,
        ...extra.visaRequired,
      ]);

      // "Open access" = visa-free-like bucket (Arton counts these together)
      const openAccess = new Set<string>([
        ...unionVisaFree,
        ...unionVisaOnArrival,
        ...unionEVisa,
      ]);

      // If a country ends up in both, keep it as open access and drop from required.
      for (const code of openAccess) {
        if (unionVisaRequired.has(code)) {
          unionVisaRequired.delete(code);
        }
      }

      const access: AccessByCountry = {};

      // Priority: visaFree > visaOnArrival > eVisa > visaRequired
      for (const code of unionVisaFree) {
        access[code] = "visaFree";
      }
      for (const code of unionVisaOnArrival) {
        if (!access[code]) access[code] = "visaOnArrival";
      }
      for (const code of unionEVisa) {
        if (!access[code]) access[code] = "eVisa";
      }
      for (const code of unionVisaRequired) {
        if (!access[code]) access[code] = "visaRequired";
      }

      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.log("Computed access", {
          citizenOf,
          secondPassport,
          visaFreeLikeCount: openAccess.size,
          visaRequiredCount: unionVisaRequired.size,
          sampleAccessKeys: Object.keys(access).slice(0, 10),
        });
      }

      return {
        visaFreeCount: openAccess.size,
        visaRequiredCount: unionVisaRequired.size,
        accessByCountry: access,
      };
    }, [citizenOf, secondPassport]);

  return (
    <main className="bg-[#f5f2ec]">
      {/* Hero / title bar */}
      <section className="bg-gradient-to-b from-[#d7c2a2] to-[#c19a6b] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl tracking-[0.18em] uppercase font-semibold">
              Program <span className="font-bold">Map</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-[15px] leading-relaxed text-[#fdf7ee] italic">
              Discover the power of a second passport and see how your global
              mobility changes when you add another citizenship.
            </p>

            {/* Tools tab group */}
            <div className="mt-8 inline-flex flex-wrap justify-center gap-2 border border-[#e6cfac]/60 bg-white/10 p-1">
              <ToolTab href="/tools/arton-index">Arton Index</ToolTab>
              <ToolTab href="/tools/program-check">Program Check</ToolTab>
              <ToolTab href="/tools/program-cost">Program Cost</ToolTab>
              <ToolTab href="/tools/program-map" active>
                Program Map
              </ToolTab>
              <ToolTab href="/tools/program-match">Program Match</ToolTab>
            </div>
          </div>
        </div>
      </section>

      {/* Main content card */}
      <section className="-mt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm border border-[#e3ded5]">
            <div className="px-6 sm:px-10 pt-10 pb-6">
              {/* Filters row */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="citizen-of"
                    className="block text-[13px] font-medium text-[#444] mb-2"
                  >
                    You are a citizen of
                  </label>
                  <div className="border border-[#d4cec2] bg-white px-3 py-2">
                    <select
                      id="citizen-of"
                      name="citizen_of"
                      value={citizenOf}
                      onChange={(e) => setCitizenOf(e.target.value)}
                      className="w-full bg-transparent text-[13px] text-[#333] outline-none"
                      dangerouslySetInnerHTML={{
                        __html: CITIZEN_OF_OPTIONS_HTML,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="new-passport"
                    className="block text-[13px] font-medium text-[#444] mb-2"
                  >
                    Add a second passport
                  </label>
                  <div className="border border-[#d4cec2] bg-white px-3 py-2">
                    <select
                      id="new-passport"
                      name="new_passport"
                      value={secondPassport}
                      onChange={(e) => setSecondPassport(e.target.value)}
                      className="w-full bg-transparent text-[13px] text-[#333] outline-none"
                      dangerouslySetInnerHTML={{
                        __html: SECOND_PASSPORT_OPTIONS_HTML,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Map + stats */}
              <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                {/* Map */}
                <div className="border border-[#e9e1d5] bg-[#faf6ef] min-h-[260px] flex flex-col">
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-[13px] uppercase tracking-[0.18em] text-[#777]">
                      World map
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center px-4 pb-4">
                    <WorldMap access={accessByCountry} />
                  </div>
                </div>

                {/* Stats like Arton’s right column */}
                <div className="space-y-6">
                  <div className="border border-[#e9e1d5] bg-[#faf6ef] px-5 py-4">
                    <h3 className="text-3xl font-semibold text-[#b4783a] leading-none">
                      {visaFreeCount}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#555]">
                      Countries you may visit <strong>visa-free</strong> with
                      your current passport
                      {secondPassport ? " combo" : ""}.
                    </p>
                  </div>
                  <div className="border border-[#e9e1d5] bg-[#faf6ef] px-5 py-4">
                    <h3 className="text-3xl font-semibold text-[#444] leading-none">
                      {visaRequiredCount}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#555]">
                      Countries where you still <strong>need a visa</strong>{" "}
                      (based on the same combination).
                    </p>
                  </div>

                  <p className="text-[12px] text-[#777] leading-relaxed">
                    Based on data from the passport index file you imported.
                    Numbers are approximations – always confirm visa
                    requirements with the relevant embassy or consulate.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools strip (same as other tools pages) */}
            <div className="px-6 sm:px-10 pt-6 pb-10 border-t border-[#e9e1d5]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <ToolCard
                  href="/tools/arton-index"
                  title="Arton Index"
                  description="Discover how the industry benchmark ranks the different programs."
                />
                <ToolCard
                  href="/tools/program-check"
                  title="Program Check"
                  description="Compare the different programs side by side and examine their features."
                />
                <ToolCard
                  href="/tools/program-cost"
                  title="Program Cost"
                  description="Find out the cost estimates for each program tailored to your family."
                />
                <ToolCard
                  href="/tools/program-match"
                  title="Program Match"
                  description="Find the program that best matches your goals."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ---------------- shared UI bits (same style as Program Cost) ----------------

type ToolTabProps = {
  href: string;
  children: ReactNode;
  active?: boolean;
};

function ToolTab({ href, children, active }: ToolTabProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase border border-transparent ${
        active
          ? "bg-white text-[#333] font-semibold"
          : "bg-transparent text-[#f8efe5] hover:bg-white/10"
      }`}
    >
      {children}
    </Link>
  );
}

type ToolCardProps = {
  href: string;
  title: string;
  description: string;
};

function ToolCard({ href, title, description }: ToolCardProps) {
  return (
    <div className="text-center">
      <Link
        href={href}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-[#d7b37b] to-[#b78145] shadow-sm"
      >
        <span className="sr-only">{title}</span>
      </Link>
      <h4 className="mt-4 text-[13px] tracking-[0.2em] uppercase text-[#222]">
        <Link href={href} className="hover:text-[#b8864f]">
          {title}
        </Link>
      </h4>
      <p className="mt-2 text-[13px] text-[#777] max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
}
