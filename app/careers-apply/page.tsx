"use client";

import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormState = {
  jobPosting: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phoneNumber: string;
  nationalities: string;
  residenceCountry: string;
  relocate: "yes" | "no" | "";
  cvFile: File | null;
  globalCitizenship: string;
  whyArton: string;
};

const JOB_POSTINGS = [
  "Business Development Manager",
  "Client Advisor",
  "Marketing Specialist",
  "Immigration/Legal Associate",
  "Operations Coordinator",
  "Other",
];

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Hungary",
  "India",
  "Ireland",
  "Italy",
  "Kenya",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Pakistan",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Saudi Arabia",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "UAE",
  "UK",
  "USA",
  "Other",
];

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label className="text-[11px] font-semibold tracking-wide uppercase text-black">
        {label}
        {required ? "*" : ""}
      </Label>
      {children}
    </div>
  );
}

export default function ApplyToWorkPage() {
  const [form, setForm] = React.useState<FormState>({
    jobPosting: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "Nigeria",
    phoneNumber: "",
    nationalities: "",
    residenceCountry: "Afghanistan",
    relocate: "",
    cvFile: null,
    globalCitizenship: "",
    whyArton: "",
  });

  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState<null | "ok" | "err">(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSent(null);

    try {
      // Replace with your real endpoint
      // const fd = new FormData();
      // Object.entries(form).forEach(([k, v]) => {
      //   if (k === "cvFile" && v) fd.append("cv", v);
      //   else fd.append(k, String(v ?? ""));
      // });
      // await fetch("/api/careers/apply", { method: "POST", body: fd });

      console.log("Apply payload:", form);
      setSent("ok");
    } catch (err) {
      console.error(err);
      setSent("err");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative h-[260px] sm:h-[320px] w-full overflow-hidden">
        {/* Background image (swap to your hero pattern url) */}
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg"
          alt="Apply to work with us"
          fill
          priority
          className="object-cover grayscale"
        />
        {/* Dark overlay like screenshot */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Center icon + title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[#d7ad79] flex items-center justify-center shadow-md">
            {/* simple “home” glyph placeholder */}
            <div className="h-5 w-5 border-2 border-black/80 rotate-45 -mt-1" />
          </div>
          <h1 className="text-white text-2xl sm:text-4xl font-medium tracking-wide uppercase">
            APPLY TO WORK WITH US
          </h1>
        </div>
      </section>

      {/* BODY */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <p className="text-base text-black/80 mb-6">
          Dear candidate,
        </p>
        <p className="text-base text-black/70 mb-10 leading-relaxed">
          Please complete the form below and attach your resume in PDF format.
          Due to the high volume of applications, only potential candidates will
          be contacted. Thank you for your interest at a career with Arton Capital.
        </p>

        <form onSubmit={onSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Job posting */}
            <Field label="Job posting you are applying for" required>
              <Select
                value={form.jobPosting}
                onValueChange={(v) => update("jobPosting", v)}
              >
                <SelectTrigger className="h-11 rounded-none border border-[#d6b189] focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select a job posting" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {JOB_POSTINGS.map((jp) => (
                    <SelectItem key={jp} value={jp}>
                      {jp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            {/* empty right slot to match screenshot spacing */}
            <div />

            {/* First name */}
            <Field label="First name" required>
              <Input
                className="h-11 rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
              />
            </Field>

            {/* Last name */}
            <Field label="Last name" required>
              <Input
                className="h-11 rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
              />
            </Field>

            {/* Email */}
            <Field label="Email" required>
              <Input
                type="email"
                className="h-11 rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>

            {/* Phone (country + number like screenshot) */}
            <Field label="Phone">
              <div className="flex items-stretch">
                <Select
                  value={form.phoneCountry}
                  onValueChange={(v) => update("phoneCountry", v)}
                >
                  <SelectTrigger className="h-11 w-[160px] rounded-none border border-[#d6b189] border-r-0 focus:ring-0 focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  placeholder="+1 802 123 4567"
                  className="h-11 flex-1 rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                  value={form.phoneNumber}
                  onChange={(e) => update("phoneNumber", e.target.value)}
                />
              </div>
            </Field>

            {/* Nationalities */}
            <Field label="Nationality(ies)">
              <Input
                placeholder="e.g. USA, Canadian"
                className="h-11 rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.nationalities}
                onChange={(e) => update("nationalities", e.target.value)}
              />
            </Field>

            {/* Current country of residence */}
            <Field label="Current country of residence">
              <Select
                value={form.residenceCountry}
                onValueChange={(v) => update("residenceCountry", v)}
              >
                <SelectTrigger className="h-11 rounded-none border border-[#d6b189] focus:ring-0 focus:ring-offset-0">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="rounded-none max-h-72">
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            {/* Relocate */}
            <Field label="Are you willing to relocate?">
              <RadioGroup
                value={form.relocate}
                onValueChange={(v) =>
                  update("relocate", v as FormState["relocate"])
                }
                className="flex items-center gap-6 pt-1"
              >
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="no" />
                  NO
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <RadioGroupItem value="yes" />
                  YES
                </label>
              </RadioGroup>
            </Field>

            {/* CV upload */}
            <Field label="CV in PDF format">
              <div className="flex items-center gap-3">
                <Input
                  type="file"
                  accept="application/pdf"
                  className="h-11 rounded-none border border-[#d6b189] file:mr-4 file:h-9 file:border-0 file:bg-black/5 file:px-4 file:text-sm file:font-medium file:text-black hover:file:bg-black/10"
                  onChange={(e) =>
                    update("cvFile", e.target.files?.[0] ?? null)
                  }
                />
                {form.cvFile ? (
                  <span className="text-sm text-black/70 truncate max-w-[220px]">
                    {form.cvFile.name}
                  </span>
                ) : (
                  <span className="text-sm text-black/50">
                    No file chosen
                  </span>
                )}
              </div>
            </Field>
          </div>

          {/* Big textareas row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Field label="What is global citizenship to you?">
              <Textarea
                className="min-h-[220px] rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.globalCitizenship}
                onChange={(e) => update("globalCitizenship", e.target.value)}
              />
            </Field>

            <Field label="Why do you think you should work for Arton?">
              <Textarea
                className="min-h-[220px] rounded-none border border-[#d6b189] focus-visible:ring-0 focus-visible:border-[#c79a63]"
                value={form.whyArton}
                onChange={(e) => update("whyArton", e.target.value)}
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center gap-4">
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-none bg-black text-white hover:bg-black/90 px-8"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>

            {sent === "ok" && (
              <p className="text-sm text-emerald-700">
                Application submitted. We’ll be in touch if shortlisted.
              </p>
            )}
            {sent === "err" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </section>

      {/* Floating phone button in screenshot (optional) */}
      <button
        type="button"
        aria-label="Call"
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-[#d7ad79] shadow-xl grid place-items-center hover:brightness-95"
      >
        <span className="text-xl">📞</span>
      </button>
    </main>
  );
}
