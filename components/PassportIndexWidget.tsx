// components/PassportIndexWidget.tsx
"use client";

import { useEffect, useState } from "react";

type CountryOption = {
  code: string;
  name: string;
};

type PassportIndexWidgetProps = {
  /** Default selected passport (e.g. "DM" for Dominica) */
  defaultPassport?: string;
  className?: string;
};

type VisaStatus = {
  status: string;
  notes?: string;
};

const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "", name: "" },
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

function findCountryName(code: string): string {
  if (!code) return "";
  const c = COUNTRY_OPTIONS.find((c) => c.code === code);
  return c ? c.name : code;
}

export function PassportIndexWidget({
  defaultPassport = "",
  className = "",
}: PassportIndexWidgetProps) {
  const [passportOf, setPassportOf] = useState<string>(defaultPassport);
  const [goingTo, setGoingTo] = useState<string>("");

  const [visaStatus, setVisaStatus] = useState<VisaStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasSelection = Boolean(passportOf && goingTo);

  // Fetch visa status whenever both selections are set
  useEffect(() => {
    if (!passportOf || !goingTo) {
      setVisaStatus(null);
      setError(null);
      return;
    }

    let cancelled = false;

    async function loadStatus() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/visa-status?pof=${encodeURIComponent(
            passportOf
          )}&gto=${encodeURIComponent(goingTo)}`
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = (await res.json()) as VisaStatus;
        if (!cancelled) {
          setVisaStatus(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Could not load visa rules. Please use the buttons below.");
          setVisaStatus(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadStatus();

    return () => {
      cancelled = true;
    };
  }, [passportOf, goingTo]);

  const statusLabel = loading
    ? "Loading…"
    : hasSelection
    ? "Visa Status"
    : "Visa Status";

  const helperText = !hasSelection
    ? "Select a passport and destination to check visa options."
    : loading
    ? "Fetching visa rules from your local dataset…"
    : error
    ? error
    : visaStatus
    ? `Visa requirement: ${visaStatus.status}${
        visaStatus.notes ? ` – ${visaStatus.notes}` : ""
      }`
    : "No local data found. Use the buttons below for official, real-time rules.";

  return (
    <div
      className={
        "ac-passport-widget border border-gray-300 bg-white p-4 text-sm leading-relaxed " +
        className
      }
    >
      <div className="ac-passport-header mb-4 flex items-center gap-3">
        <img
          src="https://www.artoncapital.com/wp-content/plugins/passport-index/inc/PI-widget-logo-light.png"
          alt="The Passport Index logo"
          className="h-10 w-auto"
        />
      </div>

      <div className="ac-passport-fields space-y-3">
        <div>
          <label
            htmlFor="ac-passport-of"
            className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-600"
          >
            Passport of
          </label>
          <select
            id="ac-passport-of"
            name="pof"
            value={passportOf}
            onChange={(e) => setPassportOf(e.target.value)}
            className="w-full border border-gray-300 px-2 py-1.5 text-sm outline-none focus:border-gray-500"
          >
            {COUNTRY_OPTIONS.map((c) => (
              <option key={c.code || "blank"} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="ac-going-to"
            className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-600"
          >
            Going to
          </label>
          <select
            id="ac-going-to"
            name="gto"
            value={goingTo}
            onChange={(e) => setGoingTo(e.target.value)}
            className="w-full border border-gray-300 px-2 py-1.5 text-sm outline-none focus:border-gray-500"
          >
            {COUNTRY_OPTIONS.map((c) => (
              <option key={c.code || "blank-dest"} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status pill + text */}
        <div className="mt-2">
          <div
            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700"
            aria-live="polite"
          >
            {statusLabel}
          </div>

          <p className="mt-2 text-xs text-gray-700">{helperText}</p>

          {hasSelection && (
            <p className="mt-1 text-xs text-gray-500">
              Selected:{" "}
              <strong>
                {findCountryName(passportOf)} ({passportOf})
              </strong>{" "}
              →{" "}
              <strong>
                {findCountryName(goingTo)} ({goingTo})
              </strong>
            </p>
          )}
        </div>

        {/* Buttons → official PassportIndex pages */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <a
            id="piex"
            href="https://www.passportindex.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-400 px-3 py-1 transition-colors hover:bg-black hover:text-white"
          >
            Explore
          </a>
          <a
            id="pico"
            href="https://www.passportindex.org/comparebyPassport.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-400 px-3 py-1 transition-colors hover:bg-black hover:text-white"
          >
            Compare
          </a>
          <a
            id="piim"
            href="https://www.passportindex.org/improve.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-400 px-3 py-1 transition-colors hover:bg-black hover:text-white"
          >
            Improve
          </a>
        </div>

        <p className="mt-2 text-[11px] text-gray-500">
          *This mini-widget uses your own{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-[10px]">
            /api/visa-status
          </code>{" "}
          endpoint for quick reference. Click any button above to see the
          official, real-time visa rules on PassportIndex.org.
        </p>
      </div>
    </div>
  );
}
