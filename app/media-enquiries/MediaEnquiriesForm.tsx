// app/media-enquiries/MediaEnquiriesForm.tsx  (CLIENT COMPONENT)
"use client";

import { useMemo, useState } from "react";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua And Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia, Plurinational State Of",
  "Bonaire, Sint Eustatius And Saba",
  "Bosnia And Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic Of The",
  "Cook Islands",
  "Costa Rica",
  "Cote Divoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island And Mcdonald Islands",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic Of",
  "Iraq",
  "Ireland",
  "Isle Of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic Of",
  "Kuwait",
  "Kyrgyzstan",
  "Land Islands",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States Of",
  "Moldova, Republic Of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "North Macedonia",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State Of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena, Ascension And Tristan Da Cunha",
  "Saint Kitts And Nevis",
  "Saint Lucia",
  "Saint Martin (french Part)",
  "Saint Pierre And Miquelon",
  "Saint Vincent And The Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome And Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (dutch Part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia And The South Sandwich Islands",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard And Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan, Province Of China",
  "Tajikistan",
  "Tanzania, United Republic Of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad And Tobago",
  "Tunisia",
  "Turkiye",
  "Turkmenistan",
  "Turks And Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican",
  "Venezuela, Bolivarian Republic Of",
  "Viet Nam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis And Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function MediaEnquiriesForm() {
  const [form, setForm] = useState({
    salutation: "",
    fname: "",
    lastname: "",
    mediaOrganization: "",
    position: "",
    nationality: "",
    residence: "",
    website: "",
    phone: "",
    email: "",
    email2: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const requiredFields = useMemo(
    () => [
      "salutation",
      "fname",
      "lastname",
      "position",
      "nationality",
      "residence",
      "website",
      "phone",
      "email",
      "email2",
    ],
    []
  );

  function updateField<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
    setSuccess(null);
  }

  function validate() {
    const e: Record<string, string> = {};
    for (const k of requiredFields) {
      if (!form[k as keyof typeof form]) e[k] = "Required";
    }
    if (form.email && form.email2 && form.email !== form.email2) {
      e.email2 = "Emails do not match";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);

    try {
      // Point this to your real endpoint later
      const res = await fetch("/api/media-enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess("Message sent successfully.");
      setForm({
        salutation: "",
        fname: "",
        lastname: "",
        mediaOrganization: "",
        position: "",
        nationality: "",
        residence: "",
        website: "",
        phone: "",
        email: "",
        email2: "",
        enquiry: "",
      });
    } catch {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "mt-1 w-full border border-slate-300 rounded-md px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {success && (
        <div className="rounded-md border border-slate-200 px-4 py-3 text-sm bg-white">
          {success}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {/* Salutation */}
        <div>
          <label className="text-sm font-medium">
            Salutation<span className="text-red-500">*</span>
          </label>
          <select
            value={form.salutation}
            onChange={(e) => updateField("salutation", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            <option>Ms</option>
            <option>Mrs</option>
            <option>Mr</option>
            <option>Prof</option>
            <option>Dr</option>
          </select>
          {errors.salutation && (
            <p className="text-xs text-red-500 mt-1">{errors.salutation}</p>
          )}
        </div>

        {/* Position */}
        <div>
          <label className="text-sm font-medium">
            Position<span className="text-red-500">*</span>
          </label>
          <input
            value={form.position}
            onChange={(e) => updateField("position", e.target.value)}
            className={inputClass}
          />
          {errors.position && (
            <p className="text-xs text-red-500 mt-1">{errors.position}</p>
          )}
        </div>

        {/* First name */}
        <div>
          <label className="text-sm font-medium">
            First name<span className="text-red-500">*</span>
          </label>
          <input
            value={form.fname}
            onChange={(e) => updateField("fname", e.target.value)}
            className={inputClass}
          />
          {errors.fname && (
            <p className="text-xs text-red-500 mt-1">{errors.fname}</p>
          )}
        </div>

        {/* Last name */}
        <div>
          <label className="text-sm font-medium">
            Last name<span className="text-red-500">*</span>
          </label>
          <input
            value={form.lastname}
            onChange={(e) => updateField("lastname", e.target.value)}
            className={inputClass}
          />
          {errors.lastname && (
            <p className="text-xs text-red-500 mt-1">{errors.lastname}</p>
          )}
        </div>

        {/* Media Org */}
        <div>
          <label className="text-sm font-medium">Media Organization</label>
          <input
            value={form.mediaOrganization}
            onChange={(e) =>
              updateField("mediaOrganization", e.target.value)
            }
            className={inputClass}
          />
        </div>

        {/* Nationality */}
        <div>
          <label className="text-sm font-medium">
            Nationality<span className="text-red-500">*</span>
          </label>
          <select
            value={form.nationality}
            onChange={(e) => updateField("nationality", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.nationality && (
            <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>
          )}
        </div>

        {/* Country of Residence */}
        <div>
          <label className="text-sm font-medium">
            Country of Residence<span className="text-red-500">*</span>
          </label>
          <select
            value={form.residence}
            onChange={(e) => updateField("residence", e.target.value)}
            className={inputClass}
          >
            <option value="">Select</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.residence && (
            <p className="text-xs text-red-500 mt-1">{errors.residence}</p>
          )}
        </div>

        {/* Website */}
        <div>
          <label className="text-sm font-medium">
            Website<span className="text-red-500">*</span>
          </label>
          <input
            value={form.website}
            onChange={(e) => updateField("website", e.target.value)}
            className={inputClass}
          />
          {errors.website && (
            <p className="text-xs text-red-500 mt-1">{errors.website}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Repeat Email */}
        <div>
          <label className="text-sm font-medium">
            Email (repeat)<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email2}
            onChange={(e) => updateField("email2", e.target.value)}
            className={inputClass}
          />
          {errors.email2 && (
            <p className="text-xs text-red-500 mt-1">{errors.email2}</p>
          )}
        </div>
      </div>

      {/* Note + Enquiry */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="text-sm text-gray-600">
          <label className="font-medium block mb-2">Note</label>
          All information provided is kept highly confidential and subject to our
          privacy policy.
        </div>

        <div>
          <label className="text-sm font-medium">Your enquiry</label>
          <textarea
            value={form.enquiry}
            onChange={(e) => updateField("enquiry", e.target.value)}
            rows={7}
            className={inputClass}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-2.5 rounded-md bg-[#cc9966] hover:bg-black text-white text-sm font-medium transition disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        <p className="text-[12px] text-gray-500">
          Protected by reCAPTCHA. Google Privacy Policy and Terms of Service
          apply.
        </p>
      </div>
    </form>
  );
}
