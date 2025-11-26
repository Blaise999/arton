"use client";

import { useMemo, useState } from "react";

const SALUTATIONS = ["Ms", "Mrs", "Mr", "Prof", "Dr", "Sir", "Sheikh"] as const;

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica",
  "Antigua And Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas",
  "Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
  "Bonaire, Sint Eustatius And Saba","Bosnia And Herzegovina","Botswana","Bouvet Island","Brazil",
  "British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia",
  "Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China",
  "Christmas Island","Cocos (keeling) Islands","Colombia","Comoros","Congo",
  "Congo, The Democratic Republic Of The","Cook Islands","Costa Rica","Cote Divoire","Croatia","Cuba",
  "Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
  "Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
  "Falkland Islands (malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana",
  "French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana",
  "Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea",
  "Guinea-Bissau","Guyana","Haiti","Heard Island And Mcdonald Islands","Honduras","Hong Kong",
  "Hungary","Iceland","India","Indonesia","Iran, Islamic Republic Of","Iraq","Ireland","Isle Of Man",
  "Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati",
  "Korea, Democratic People's Republic Of","Kuwait","Kyrgyzstan","Land Islands",
  "Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein",
  "Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico",
  "Micronesia, Federated States Of","Moldova, Republic Of","Monaco","Mongolia","Montenegro",
  "Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands",
  "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island",
  "Northern Mariana Islands","Norway","North Macedonia","Oman","Pakistan","Palau","Palestine, State Of",
  "Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal",
  "Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Barthelemy",
  "Saint Helena, Ascension And Tristan Da Cunha","Saint Kitts And Nevis","Saint Lucia",
  "Saint Martin (french Part)","Saint Pierre And Miquelon","Saint Vincent And The Grenadines","Samoa",
  "San Marino","Sao Tome And Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
  "Sierra Leone","Singapore","Sint Maarten (dutch Part)","Slovakia","Slovenia","Solomon Islands",
  "Somalia","South Africa","South Georgia And The South Sandwich Islands","South Korea","South Sudan",
  "Spain","Sri Lanka","Sudan","Suriname","Svalbard And Jan Mayen","Swaziland","Sweden","Switzerland",
  "Syrian Arab Republic","Taiwan, Province Of China","Tajikistan","Tanzania, United Republic Of",
  "Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad And Tobago","Tunisia","Turkiye",
  "Turkmenistan","Turks And Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates",
  "United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan",
  "Vanuatu","Vatican","Venezuela, Bolivarian Republic Of","Viet Nam","Virgin Islands, British",
  "Virgin Islands, U.S.","Wallis And Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"
];

type FormState = {
  salutation: string;
  firstName: string;
  lastName: string;
  nationality: string;
  governmentDepartment: string;
  position: string;
  phone: string;
  email: string;
  emailRepeat: string;
  enquiry: string;
};

const initialState: FormState = {
  salutation: "",
  firstName: "",
  lastName: "",
  nationality: "",
  governmentDepartment: "",
  position: "",
  phone: "",
  email: "",
  emailRepeat: "",
  enquiry: "",
};

export default function GovernmentEnquiriesForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const requiredMissing = useMemo(() => {
    const missing: string[] = [];
    if (!form.salutation) missing.push("Salutation");
    if (!form.firstName) missing.push("First name");
    if (!form.lastName) missing.push("Last name");
    if (!form.nationality) missing.push("Nationality");
    if (!form.position) missing.push("Position");
    if (!form.phone) missing.push("Phone number");
    if (!form.email) missing.push("Email");
    if (!form.emailRepeat) missing.push("Repeat email");
    return missing;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError(null);
    setSuccess(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (requiredMissing.length) {
      setError(`Please fill: ${requiredMissing.join(", ")}.`);
      return;
    }

    if (form.email.trim().toLowerCase() !== form.emailRepeat.trim().toLowerCase()) {
      setError("Emails do not match.");
      return;
    }

    setSubmitting(true);
    try {
      // TODO: wire to your backend when ready.
      // Example:
      // const res = await fetch("/api/government-enquiries", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Failed to send.");

      await new Promise((r) => setTimeout(r, 600)); // placeholder

      setSuccess("Thanks. Your message has been sent.");
      setForm(initialState);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      {/* grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Salutation */}
        <div>
          <label className="text-sm font-medium">
            Salutation <span className="text-rose-600">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.salutation}
            onChange={(e) => update("salutation", e.target.value)}
            required
          >
            <option value="">Select</option>
            {SALUTATIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Govt Dept */}
        <div>
          <label className="text-sm font-medium">Government department</label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.governmentDepartment}
            onChange={(e) => update("governmentDepartment", e.target.value)}
            placeholder="e.g., Ministry of Foreign Affairs"
          />
        </div>

        {/* First name */}
        <div>
          <label className="text-sm font-medium">
            First name <span className="text-rose-600">*</span>
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            required
          />
        </div>

        {/* Last name */}
        <div>
          <label className="text-sm font-medium">
            Last name <span className="text-rose-600">*</span>
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            required
          />
        </div>

        {/* Nationality */}
        <div>
          <label className="text-sm font-medium">
            Nationality <span className="text-rose-600">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.nationality}
            onChange={(e) => update("nationality", e.target.value)}
            required
          >
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Position */}
        <div>
          <label className="text-sm font-medium">
            Position <span className="text-rose-600">*</span>
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.position}
            onChange={(e) => update("position", e.target.value)}
            placeholder="e.g., Director / Minister / Advisor"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">
            Phone number <span className="text-rose-600">*</span>
          </label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 ..."
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">
            Email <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
        </div>

        {/* Email repeat */}
        <div>
          <label className="text-sm font-medium">
            Email (repeat) <span className="text-rose-600">*</span>
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.emailRepeat}
            onChange={(e) => update("emailRepeat", e.target.value)}
            required
          />
        </div>

        {/* Enquiry */}
        <div className="sm:col-span-2">
          <label className="text-sm font-medium">Your enquiry</label>
          <textarea
            className="mt-1 min-h-[140px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900"
            value={form.enquiry}
            onChange={(e) => update("enquiry", e.target.value)}
            placeholder="Tell us about your government’s goals, timeline, and desired outcomes..."
          />
        </div>
      </div>

      {/* feedback */}
      {error && (
        <div className="mt-4 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          {success}
        </div>
      )}

      {/* submit */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          Protected by reCAPTCHA. Google Privacy Policy and Terms of Service apply.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-black disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
