// app/become-a-global-citizen/BecomeGlobalCitizenForm.tsx
"use client";

import type { FormEvent } from "react";

type Props = {
  nationalities: string[];
  countries: string[];
  programs: string[];
};

export function BecomeGlobalCitizenForm({
  nationalities,
  countries,
  programs,
}: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fname = (formData.get("fname") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim() ?? "";

    // TODO: replace this with a real API call later, e.g.:
    // await fetch("/api/global-citizen-lead", { method: "POST", body: formData });
    if (fname && email) {
      alert(`Thank you, ${fname}. We will reach out to you at ${email}.`);
    } else if (email) {
      alert(`Thank you. We will reach out to you at ${email}.`);
    } else {
      alert("Thank you. Your details have been recorded.");
    }

    // Optional: reset the form after submit
    // e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
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
              {nationalities.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
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
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
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
            {programs.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Managerial proof */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <label className="block text-sm font-medium">
            Can you prove managerial experience of 2 years for the past 5 years?{" "}
            <span className="text-red-600">*</span>
          </label>
          <div className="flex gap-4 pt-1">
            {["Yes", "No"].map((v) => (
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
            {["Yes", "No"].map((v) => (
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
            {["Email", "Phone", "WhatsApp"].map((v) => (
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
            Protected by reCAPTCHA. Google Privacy Policy and Terms of Service
            apply.
          </p>
        </div>
      </fieldset>
    </form>
  );
}
