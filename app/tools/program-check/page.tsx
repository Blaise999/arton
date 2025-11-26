// app/tools/program-check/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
// if @ maps to project root
import { PROGRAMS, Program } from "@/app/data/program";

const COLUMN_COUNT = 4;
const EMPTY = "--";

type RowConfig = {
  label: string;
  getValue: (program: Program | undefined) => string;
};

const ROWS: RowConfig[] = [
  {
    label: "Currency",
    getValue: (p) => p?.currency ?? EMPTY,
  },
  {
    label: "Personal net worth",
    getValue: (p) => p?.netWorth ?? EMPTY,
  },
  {
    label: "Contribution amount",
    getValue: (p) => p?.contributionAmount ?? EMPTY,
  },
  {
    label: "Asset(s)",
    getValue: (p) => p?.asset ?? EMPTY,
  },
  {
    label: "Investment guarantees",
    getValue: (p) => p?.investmentGuarantees ?? EMPTY,
  },
  {
    label: "Financing options",
    getValue: (p) => p?.financingOptions ?? EMPTY,
  },
  {
    label: "Government fees¹",
    getValue: (p) => p?.governmentFees ?? EMPTY,
  },
  {
    label: "Professional fees",
    getValue: (p) => p?.professionalFees ?? EMPTY,
  },
  {
    label: "Time to residence",
    getValue: (p) => p?.timeToResidence ?? EMPTY,
  },
  {
    label: "Interview Required",
    getValue: (p) =>
      p == null ? EMPTY : p.interviewRequired ? "Yes" : "No",
  },
  {
    label: "Required physical residence",
    getValue: (p) => p?.requiredPhysicalResidence ?? EMPTY,
  },
  {
    label: "Time to citizenship",
    getValue: (p) => p?.timeToCitizenship ?? EMPTY,
  },
  {
    label: "Visa-free travel",
    getValue: (p) => p?.visaFreeTravel ?? EMPTY,
  },
  {
    label: "Arton Index Score",
    getValue: (p) =>
      p == null || p.artonIndexScore == null
        ? EMPTY
        : String(p.artonIndexScore),
  },
];

// Build a quick lookup by code: "AG-D" => Program
const PROGRAM_BY_CODE: Record<string, Program> = PROGRAMS.reduce(
  (acc, program) => {
    acc[program.code] = program;
    return acc;
  },
  {} as Record<string, Program>
);

const COLUMN_INDICES = Array.from({ length: COLUMN_COUNT }, (_, i) => i);

function ProgramCheckPage() {
  const [selectedCodes, setSelectedCodes] = useState<string[]>(
    Array(COLUMN_COUNT).fill("")
  );

  const handleSelectChange = (columnIndex: number, code: string) => {
    setSelectedCodes((prev) => {
      const next = [...prev];
      next[columnIndex] = code;
      return next;
    });
  };

  const selectedPrograms = useMemo(
    () => selectedCodes.map((code) => (code ? PROGRAM_BY_CODE[code] : undefined)),
    [selectedCodes]
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero / header */}
      <section className="bg-[#1b1b1b] text-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
            Tools
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Program <b>Check</b>
          </h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-slate-200">
            Select various programs and compare their unique features side by side.
          </p>

          {/* Tool nav pills */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm">
            <ToolNavLink href="/tools/arton-index">Arton Index</ToolNavLink>
            <ToolNavLink href="/tools/program-check" active>
              Program Check
            </ToolNavLink>
            <ToolNavLink href="/tools/program-cost">Program Cost</ToolNavLink>
            <ToolNavLink href="/tools/program-map">Program Map</ToolNavLink>
            <ToolNavLink href="/tools/program-match">Program Match</ToolNavLink>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full border-collapse text-xs md:text-sm">
              <thead className="bg-slate-50/80">
                {/* Country name row */}
                <tr>
                  <th className="w-44 border-b border-slate-200 px-3 py-3 text-left text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {/* empty label column */}
                  </th>
                  {COLUMN_INDICES.map((idx) => (
                    <th
                      key={`country-header-${idx}`}
                      className="border-b border-l border-slate-200 px-3 py-3 text-left text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      {selectedPrograms[idx]?.label ?? ""}
                    </th>
                  ))}
                </tr>

                {/* Select row */}
                <tr>
                  <th className="w-44 border-b border-slate-200 px-3 py-2 text-left text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Program
                  </th>
                  {COLUMN_INDICES.map((idx) => (
                    <th
                      key={`select-header-${idx}`}
                      className="border-b border-l border-slate-200 px-3 py-2 text-left"
                    >
                      <select
                        className="block w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs md:text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                        value={selectedCodes[idx]}
                        onChange={(e) =>
                          handleSelectChange(idx, e.target.value)
                        }
                      >
                        <option value="">Select Program</option>
                        {PROGRAMS.map((program) => (
                          <option key={program.code} value={program.code}>
                            {program.label}
                          </option>
                        ))}
                      </select>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="w-44 border-t border-slate-200 px-3 py-2.5 text-left align-top text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-600">
                      {row.label}
                    </th>
                    {COLUMN_INDICES.map((idx) => (
                      <td
                        key={`${row.label}-col-${idx}`}
                        className="border-t border-l border-slate-200 px-3 py-2.5 align-top text-[11px] md:text-sm text-slate-800"
                      >
                        {row.getValue(selectedPrograms[idx])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="bg-slate-50/80">
                  <th className="w-44 border-t border-slate-200 px-3 py-3 text-left text-[11px] md:text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Program page
                  </th>
                  {COLUMN_INDICES.map((idx) => {
                    const program = selectedPrograms[idx];
                    return (
                      <td
                        key={`details-col-${idx}`}
                        className="border-t border-l border-slate-200 px-3 py-3 text-[11px] md:text-xs text-slate-700"
                      >
                        {program ? (
                          <Link
                            href={program.detailsUrl}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 hover:underline"
                          >
                            View program details
                            <span className="ml-1 text-[10px]">↗</span>
                          </Link>
                        ) : (
                          <span className="text-slate-400">
                            Select a program
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-3 text-[11px] md:text-xs text-slate-500">
            ¹ Government fees shown are indicative ranges and typically assume a
            family of four (main applicant, spouse and two dependants). Exact
            costs depend on your family profile and current regulations.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProgramCheckPage;

type ToolNavLinkProps = {
  href: string;
  active?: boolean;
  children: React.ReactNode;
};

function ToolNavLink({ href, active, children }: ToolNavLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center rounded-full border px-3 py-1.5 transition-colors",
        "border-white/20 text-[11px] md:text-xs font-medium",
        active
          ? "bg-amber-500 border-amber-500 text-white"
          : "bg-transparent text-slate-100 hover:bg-white/10",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
