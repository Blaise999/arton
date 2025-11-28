"use client";

import { FormEvent, useState } from "react";

type Props = {
  countries: string[];
  programs: string[];
};

export function BecomeCertifiedPartnerForm({ countries, programs }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setSubmitting(true);

      const res = await fetch("/api/partner-lead", {
        method: "POST",
        body: formData, // multipart/form-data -> matches req.formData() on the API
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok || !data.ok) {
        console.error("Error from /api/partner-lead:", data);
        setError(
          data?.error ||
            "Something went wrong while sending your request. Please try again."
        );
        return;
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Network error calling /api/partner-lead:", err);
      setError(
        "We couldn't submit your request due to a network error. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/40 backdrop-blur sm:p-8">
      {/* Success / error banner */}
      {success && (
        <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thank you. Your information has been received. Our team will contact
          you within 24 hours.
        </div>
      )}
      {error && (
        <div className="mb-6 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </div>
      )}

      <form className="space-y-10" onSubmit={handleSubmit}>
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
              Country of activity <span className="text-rose-300">*</span>
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
              {countries.map((c) => (
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
              Target market(s) <span className="text-rose-300">*</span>
            </label>
            <select
              id="targetMarkets"
              name="target_markets"
              required
              multiple
              className="block w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              size={6}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <p className="mt-1 text-[11px] text-slate-400">
              Hold Ctrl (Windows) or Cmd (Mac) to select multiple countries.
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
              defaultValue={programs[0]}
            >
              {programs.map((p) => (
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
            Do you have existing clients already enrolled in other programs?
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
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
          <p className="max-w-md text-[11px] leading-relaxed text-slate-400">
            Protected by reCAPTCHA. Google{" "}
            <span className="underline">Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service</span> apply
          </p>
        </div>
      </form>
    </div>
  );
}
