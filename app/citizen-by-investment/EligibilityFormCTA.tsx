// app/citizen-by-investment/EligibilityFormCTA.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

type FieldKey = "name" | "email" | "country" | "budget" | "family" | "timeline";

type FormState = Record<FieldKey, string>;

const TOTAL_STEPS = 6;

const BUDGET_OPTIONS = [
  "US$200,000 – US$350,000",
  "US$350,000 – US$500,000",
  "US$500,000 – US$1,000,000",
  "Above US$1,000,000",
];

const TIMELINE_OPTIONS = [
  "Immediately (0–3 months)",
  "Short term (3–6 months)",
  "Within 12 months",
  "Exploring options / no fixed date",
];

export function EligibilityFormCTA() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    country: "",
    budget: "",
    family: "",
    timeline: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const progress = ((completed ? TOTAL_STEPS : step + 1) / TOTAL_STEPS) * 100;

  function updateField(key: FieldKey, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (error) setError(null);
  }

  function validateCurrentStep(): boolean {
    let key: FieldKey | null = null;

    if (step === 0) key = "name";
    else if (step === 1) key = "email";
    else if (step === 2) key = "country";
    else if (step === 3) key = "budget";
    else if (step === 4) key = "family";
    else if (step === 5) key = "timeline";

    if (!key) return true;

    if (!form[key] || !form[key].trim()) {
      setError("Please fill in this field to continue.");
      return false;
    }

    if (key === "email" && !/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  async function handleNext(e: React.FormEvent) {
    e.preventDefault();

    if (!validateCurrentStep()) return;

    // If not last step, just go to next question
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      return;
    }

    // Last step → call API
    try {
      setSubmitting(true);
      setError(null);

      const res = await fetch("/api/eligibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("Eligibility submit error:", data);
        setError(
          (data as any)?.error?.message ||
            (data as any)?.error ||
            "Could not submit assessment. Please try again."
        );
        return;
      }

      setCompleted(true);
    } catch (err) {
      console.error("Eligibility submit failed:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleBack() {
    if (step === 0 || completed) return;
    setStep((s) => Math.max(0, s - 1));
    setError(null);
  }

  if (completed) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/70 p-4 md:p-6">
        <div className="mb-3">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#cc9966]/80">
            Eligibility Submitted
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
            Thank you, {form.name || "Applicant"}.
          </h3>
          <p className="mt-2 text-sm text-white/75">
            An advisor will review your profile and respond to{" "}
            <span className="font-mono text-xs md:text-sm">{form.email}</span>{" "}
            with tailored program options, indicative costs and suggested next
            steps.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 text-xs text-white/70 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Country of residence
            </p>
            <p className="mt-1 text-sm text-white/85">{form.country}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Investment capacity
            </p>
            <p className="mt-1 text-sm text-white/85">{form.budget}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Family profile
            </p>
            <p className="mt-1 text-sm text-white/85">{form.family}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">
              Desired timeline
            </p>
            <p className="mt-1 text-sm text-white/85">{form.timeline}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="#programs"
            className="rounded-lg bg-[#cc9966] px-4 py-2 font-semibold text-black hover:brightness-110"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact-us"
            className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/5"
          >
            Speak with an Advisor
          </Link>
        </div>

        <p className="mt-4 text-[11px] text-white/55">
          You will receive a confirmation email within the next few minutes. If
          you do not see it, please check your spam or promotions folder.
        </p>
      </div>
    );
  }

  // ---------- QUESTION RENDERING ----------

  function renderQuestion() {
    switch (step) {
      case 0:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Let&apos;s start with your name.
            </h3>
            <p className="mt-1 text-sm text-white/70">
              This will appear on your initial assessment file.
            </p>
            <input
              type="text"
              className="mt-5 w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none ring-0 transition focus:border-[#cc9966] focus:bg-black/60"
              placeholder="Full legal name"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </>
        );
      case 1:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              What is your best contact email?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              We&apos;ll send your tailored program options and next steps here.
            </p>
            <input
              type="email"
              className="mt-5 w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Where are you currently residing?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Country of tax residence or primary address.
            </p>
            <input
              type="text"
              className="mt-5 w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              placeholder="e.g. USA, UAE, United Kingdom"
              value={form.country}
              onChange={(e) => updateField("country", e.target.value)}
            />
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              What is your approximate investment capacity?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              This helps us filter the most realistic CBI options for you.
            </p>
            <div className="mt-5 space-y-2">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => updateField("budget", opt)}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                    form.budget === opt
                      ? "border-[#cc9966] bg-[#cc9966]/10 text-white"
                      : "border-white/20 bg-black/40 text-white/80 hover:border-[#cc9966]/60 hover:bg-black/60"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              Who would be included in the application?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Briefly describe your family structure (spouse, children, parents,
              etc.).
            </p>
            <textarea
              className="mt-5 min-h-[110px] w-full rounded-xl border border-white/20 bg-black/40 px-3 py-3 text-sm text-white outline-none focus:border-[#cc9966] focus:bg-black/60"
              placeholder="e.g. Main applicant + spouse + 2 children (ages 5 and 9)"
              value={form.family}
              onChange={(e) => updateField("family", e.target.value)}
            />
          </>
        );
      case 5:
        return (
          <>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              What is your ideal timeline?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              When would you like to have your second citizenship in place?
            </p>
            <div className="mt-5 space-y-2">
              {TIMELINE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => updateField("timeline", opt)}
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                    form.timeline === opt
                      ? "border-[#cc9966] bg-[#cc9966]/10 text-white"
                      : "border-white/20 bg-black/40 text-white/80 hover:border-[#cc9966]/60 hover:bg-black/60"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        );
      default:
        return null;
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 md:p-6">
      {/* Top meta + progress */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Quick Eligibility Check
          </div>
          <p className="mt-1 text-xs text-white/60">
            Step {step + 1} of {TOTAL_STEPS}
          </p>
        </div>
        <div className="flex-1">
          <div className="ml-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#cc9966] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleNext} className="mt-2">
        <div className="space-y-2">
          <div className="min-h-[170px] animate-[fadeIn_0.25s_ease-out]">
            {renderQuestion()}
          </div>

          {error && (
            <p className="mt-2 text-xs font-medium text-amber-300/90">
              {error}
            </p>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={`text-xs font-semibold uppercase tracking-wide ${
              step === 0
                ? "cursor-default text-white/25"
                : "text-white/60 hover:text-white"
            }`}
          >
            {step === 0 ? " " : "← Back"}
          </button>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-lg bg-[#cc9966] px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {step === TOTAL_STEPS - 1
              ? submitting
                ? "Submitting..."
                : "Finish Assessment"
              : "Next"}
          </button>
        </div>

        <p className="mt-3 text-[11px] text-white/45">
          This short assessment is non-binding and used solely to prepare an
          initial, confidential overview of your options.
        </p>
      </form>
    </div>
  );
}
