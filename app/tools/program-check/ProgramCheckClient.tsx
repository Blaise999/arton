"use client";

import { useState } from "react";
import Link from "next/link";

type ProgramCode =
  | "ST"
  | "AG"
  | "BG"
  | "CA"
  | "CY"
  | "DM"
  | "GR"
  | "GD"
  | "HU"
  | "LV"
  | "MT"
  | "ME"
  | "PT"
  | "LC"
  | "KN"
  | "ES"
  | "GB"
  | "US";

type FieldKey =
  | "currency"
  | "netWorth"
  | "contributionAmount"
  | "assets"
  | "investmentGuarantees"
  | "financingOptions"
  | "governmentFees"
  | "professionalFees"
  | "timeToResidence"
  | "interviewRequired"
  | "requiredPhysicalResidence"
  | "timeToCitizenship"
  | "visaFreeTravel"
  | "artonIndexScore";

type ProgramFields = {
  [K in FieldKey]?: string;
};

type Program = {
  code: ProgramCode;
  name: string;
  link: string;
} & ProgramFields;

// 🔹 Placeholder values – plug in your real data later or wire to an API
const PROGRAMS: Program[] = [
  {
    code: "AG",
    name: "Antigua & Barbuda",
    link: "/global-citizen-programs/antigua-and-barbuda",
    currency: "USD",
  },
  {
    code: "BG",
    name: "Bulgaria",
    link: "/global-citizen-programs/bulgaria",
    currency: "EUR",
  },
  {
    code: "CA",
    name: "Quebec, Canada",
    link: "/global-citizen-programs/canada-quebec",
    currency: "CAD",
  },
  {
    code: "CY",
    name: "Cyprus",
    link: "/global-citizen-programs/cyprus",
    currency: "EUR",
  },
  {
    code: "DM",
    name: "Dominica",
    link: "/global-citizen-programs/dominica",
    currency: "USD",
  },
  {
    code: "GR",
    name: "Greece",
    link: "/global-citizen-programs/greece-golden-visa-program",
    currency: "EUR",
  },
  {
    code: "GD",
    name: "Grenada",
    link: "/global-citizen-programs/grenada",
    currency: "USD",
  },
  {
    code: "HU",
    name: "Hungary",
    link: "/global-citizen-programs/hungary",
    currency: "EUR",
  },
  {
    code: "LV",
    name: "Latvia",
    link: "/global-citizen-programs/latvia",
    currency: "EUR",
  },
  {
    code: "MT",
    name: "Malta",
    link: "/global-citizen-programs/malta",
    currency: "EUR",
  },
  {
    code: "ME",
    name: "Montenegro",
    link: "/global-citizen-programs/montenegro",
    currency: "EUR",
  },
  {
    code: "PT",
    name: "Portugal",
    link: "/global-citizen-programs/portugal",
    currency: "EUR",
  },
  {
    code: "LC",
    name: "Saint Lucia",
    link: "/global-citizen-programs/saint-lucia",
    currency: "USD",
  },
  {
    code: "KN",
    name: "St. Kitts & Nevis",
    link: "/global-citizen-programs/st-kitts-nevis",
    currency: "USD",
  },
  {
    code: "ES",
    name: "Spain",
    link: "/global-citizen-programs/spain",
    currency: "EUR",
  },
  {
    code: "GB",
    name: "United Kingdom",
    link: "/global-citizen-programs/united-kingdom",
    currency: "GBP",
  },
  {
    code: "US",
    name: "USA EB-5",
    link: "/global-citizen-programs/usa-eb-5",
    currency: "USD",
  },
  {
    code: "ST",
    name: "São Tomé and Príncipe",
    link: "/global-citizen-programs/sao-tome-principe-citizenship-by-investment",
    currency: "EUR",
  },
];

const FIELDS: {
  key: FieldKey;
  label: string;
  rowClassName?: string;
  valueClassName: string;
  hasSup1?: boolean;
}[] = [
  { key: "currency", label: "Currency", valueClassName: "Currency" },
  {
    key: "netWorth",
    label: "Personal net worth",
    valueClassName: "NetWorth",
  },
  {
    key: "contributionAmount",
    label: "Contribution amount",
    valueClassName: "InvestmentAmount",
  },
  {
    key: "assets",
    label: "Asset(s)",
    valueClassName: "Asset",
  },
  {
    key: "investmentGuarantees",
    label: "Investment guarantees",
    valueClassName: "InvestmentGurantees",
  },
  {
    key: "financingOptions",
    label: "Financing options",
    valueClassName: "FinancingOptions",
  },
  {
    key: "governmentFees",
    label: "Government fees",
    valueClassName: "GovernmentFees",
    hasSup1: true,
  },
  {
    key: "professionalFees",
    label: "Professional fees",
    rowClassName: "invalid_row",
    valueClassName: "ProfessionalFees",
  },
  {
    key: "timeToResidence",
    label: "Time to residence",
    valueClassName: "TimeToResidence",
  },
  {
    key: "interviewRequired",
    label: "Interview Required",
    valueClassName: "Interview",
  },
  {
    key: "requiredPhysicalResidence",
    label: "Required physical residence",
    valueClassName: "RequiredPhysicalResidence",
  },
  {
    key: "timeToCitizenship",
    label: "Time to citizenship",
    valueClassName: "TimeToCitizenship",
  },
  {
    key: "visaFreeTravel",
    label: "Visa-free travel",
    valueClassName: "VisaFreeTravel",
  },
  {
    key: "artonIndexScore",
    label: "Arton Index Score",
    valueClassName: "ArtonRank",
  },
];

const columns = [0, 1, 2, 3];

export default function ProgramCheckClient() {
  const [selectedCodes, setSelectedCodes] = useState<(ProgramCode | "")[]>([
    "",
    "",
    "",
    "",
  ]);

  const handleSelectChange = (cellIndex: number, code: string) => {
    setSelectedCodes((prev) => {
      const next = [...prev];
      next[cellIndex] = (code || "") as ProgramCode | "";
      return next;
    });
  };

  const getProgramForCell = (cellIndex: number): Program | null => {
    const code = selectedCodes[cellIndex];
    if (!code) return null;
    return PROGRAMS.find((p) => p.code === code) || null;
  };

  return (
    <div id="content-wrapper" className="programs">
      <div className="parallex" id="parallex-inner">
        <div className="container">
          <div
            data-animated="fadeInUp"
            className="sixteen columns animated fadeInUp"
          >
            <h1 className="program-title">
              Program <b>Check</b>
            </h1>
            <span className="sub_title">
              Select various programs and compare their unique features
            </span>

            <ul className="programs_btn_group">
              <li>
                <Link
                  href="/tools/arton-index"
                  className="arton-index"
                  title="Arton Index"
                >
                  Arton Index
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/program-check"
                  className="program-check active"
                  title="Program Check"
                >
                  Program Check
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/program-cost"
                  className="program-cost"
                  title="Program Cost"
                >
                  Program Cost
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/program-map"
                  className="program-map"
                  title="Program Map"
                >
                  Program Map
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/program-match"
                  className="program-match"
                  title="Program Match"
                >
                  Program Match
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container container-bck">
        <div className="clearfix" />

        <div id="program-check">
          <div className="container">
            <table className="programs-table">
              <thead>
                {/* Row 1 – Selected program names */}
                <tr>
                  <th className="label-cell"></th>
                  {columns.map((cellIndex, idx) => {
                    const program = getProgramForCell(cellIndex);
                    return (
                      <FragmentWithSeparator
                        key={`head-name-${cellIndex}`}
                        separatorTag="td"
                        showSeparator={idx < columns.length - 1}
                        separatorClass={`cell-separator cell-${cellIndex}`}
                      >
                        <th
                          style={{ width: "20%" }}
                          className={`cell-${cellIndex}`}
                        >
                          {program ? (
                            <Link
                              href={program.link}
                              className="selected-country"
                              data-cell={cellIndex}
                            >
                              {program.name}
                            </Link>
                          ) : (
                            <a
                              href="#"
                              className="selected-country"
                              data-cell={cellIndex}
                              aria-disabled="true"
                            >
                              &nbsp;
                            </a>
                          )}
                        </th>
                      </FragmentWithSeparator>
                    );
                  })}
                </tr>

                {/* Row 2 – Select dropdowns */}
                <tr>
                  <th className="label-cell"></th>
                  {columns.map((cellIndex, idx) => (
                    <FragmentWithSeparator
                      key={`head-select-${cellIndex}`}
                      separatorTag="th"
                      showSeparator={idx < columns.length - 1}
                      separatorClass={`cell-separator cell-${cellIndex}`}
                    >
                      <th
                        data-cell={cellIndex}
                        className={`cell-${cellIndex}`}
                      >
                        <select
                          className="select2 country-select"
                          data-cell={cellIndex}
                          value={selectedCodes[cellIndex]}
                          onChange={(e) =>
                            handleSelectChange(cellIndex, e.target.value)
                          }
                        >
                          <option value="">Select Program</option>
                          {PROGRAMS.map((program) => (
                            <option key={program.code} value={program.code}>
                              {program.name}
                            </option>
                          ))}
                        </select>
                      </th>
                    </FragmentWithSeparator>
                  ))}
                </tr>
              </thead>

              <tbody>
                {FIELDS.map((field) => (
                  <tr
                    key={field.key}
                    className={field.rowClassName ? field.rowClassName : ""}
                  >
                    <th className="label-cell">
                      {field.label}
                      {field.hasSup1 && <sup>1</sup>}
                    </th>

                    {columns.map((cellIndex, idx) => {
                      const program = getProgramForCell(cellIndex);
                      const value = program?.[field.key];

                      return (
                        <FragmentWithSeparator
                          key={`${field.key}-cell-${cellIndex}`}
                          separatorTag="td"
                          showSeparator={idx < columns.length - 1}
                          separatorClass={`cell-separator cell-${cellIndex}`}
                        >
                          <td
                            className={`value-cell ${field.valueClassName} cell-${cellIndex}`}
                            data-cell={cellIndex}
                          >
                            <span>{value || " -- "}</span>
                          </td>
                        </FragmentWithSeparator>
                      );
                    })}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <th className="label-cell"></th>
                  {columns.map((cellIndex, idx) => {
                    const program = getProgramForCell(cellIndex);
                    return (
                      <FragmentWithSeparator
                        key={`foot-${cellIndex}`}
                        separatorTag="td"
                        showSeparator={idx < columns.length - 1}
                        separatorClass={`cell-separator cell-${cellIndex}`}
                      >
                        <td
                          data-cell={cellIndex}
                          className="link_to_program"
                        >
                          {program && (
                            <Link href={program.link}>View program</Link>
                          )}
                        </td>
                      </FragmentWithSeparator>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="container">
          <span className="displamer margin-bottom-20">
            <br />
            <sup>1</sup> Government fees shown are estimated for a family of
            four (main applicant, spouse and two dependents between 12 and 17
            years of age). For exact quotes based on your family configuration,
            please{" "}
            <Link href="/contact-us">contact us</Link>.
          </span>

          <div className="container program-cost-footer">
            <div className="tools">
              <div className="text-center">
                <Link
                  href="/tools/arton-index"
                  className="arton-index arton-tools"
                  title="Arton Index"
                >
                  Arton Index
                </Link>
                <h4>
                  <Link href="/tools/arton-index" title="Arton Index">
                    Arton Index
                  </Link>
                </h4>
                <span>
                  Discover how the industry benchmark ranks the different
                  programs.
                </span>
              </div>
            </div>

            <div className="tools">
              <div className="text-center">
                <Link
                  href="/tools/program-cost"
                  className="program-cost arton-tools"
                  title="Program Cost"
                >
                  Program Cost
                </Link>
                <h4>
                  <Link href="/tools/program-cost" title="Program Cost">
                    Program Cost
                  </Link>
                </h4>
                <span>
                  Find out the cost estimates for each program tailored to your
                  family.
                </span>
              </div>
            </div>

            <div className="tools">
              <div className="text-center">
                <Link
                  href="/tools/program-map"
                  className="program-map arton-tools"
                  title="Program Map"
                >
                  Program Map
                </Link>
                <h4>
                  <Link href="/tools/program-map" title="Program Map">
                    Program Map
                  </Link>
                </h4>
                <span>See the power of global mobility for each passport.</span>
              </div>
            </div>

            <div className="tools">
              <div className="text-center">
                <Link
                  href="/tools/program-match"
                  className="program-match arton-tools"
                  title="Program Match"
                >
                  Program Match
                </Link>
                <h4>
                  <Link href="/tools/program-match" title="Program Match">
                    Program Match
                  </Link>
                </h4>
                <span>Find the program that best matches your goals.</span>
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Small helper to avoid repeating separator TD/TH logic everywhere
type FragmentWithSeparatorProps = {
  children: React.ReactNode;
  separatorTag: "td" | "th";
  showSeparator: boolean;
  separatorClass: string;
};

function FragmentWithSeparator({
  children,
  separatorTag,
  showSeparator,
  separatorClass,
}: FragmentWithSeparatorProps) {
  const SeparatorTag = separatorTag as any;
  return (
    <>
      {children}
      {showSeparator && <SeparatorTag className={separatorClass}></SeparatorTag>}
    </>
  );
}
