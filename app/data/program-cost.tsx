// app/data/program-costs.ts

export type SupportedCurrency = "USD" | "EUR" | "CAD";

export interface OptionCost {
  /** A contribution/investment option for the program (e.g. “Donation”, “Real estate”, “University Fund”) */
  optionLabel: string;
  /** Contribution amount for main applicant (no dependants) in USD by default */
  contributionAmount: number | null;
  /** Application + mandatory fees for main applicant (no dependants) in USD */
  applicationFees: number | null;
  /** Total = contributionAmount + applicationFees (for main applicant only) */
  total: number | null;
}

export interface ProgramCost {
  /** Short program code, usually ISO country code */
  code: string;
  /** Display name */
  label: string;
  /** Currency baseline */
  currency: SupportedCurrency;
  /** Baseline option when ages=0 and main applicant only */
  baselineOption: OptionCost;
  /** Additional alternate options (matched to drop-down) */
  alternateOptions?: OptionCost[];
  /** Whether we have numeric baseline data */
  hasData: boolean;
  /** Optional notes */
  notes?: string;
}

/**
 * Baseline program cost table, where ages = 0 (main applicant only) in USD.
 *
 * For alternate options, contribution amounts follow widely published
 * minimums for each route. Application fees are assumed to be broadly
 * similar across options within the same country, so the baseline
 * application fee is reused unless better data is available.
 *
 * These figures are indicative only and must be verified before any use
 * in real advisory / compliance workflows.
 */
export const PROGRAM_COSTS: ProgramCost[] = [
  {
    code: "AG",
    label: "Antigua & Barbuda",
    currency: "USD",
    baselineOption: {
      optionLabel: "Donation",
      contributionAmount: 230_000,
      applicationFees: 50_800,
      total: 280_800,
    },
    alternateOptions: [
      {
        optionLabel: "University of the West Indies Fund",
        // UWI option typically requires a larger bundled contribution
        // for a family package; here treated as an indicative single “ticket”.
        contributionAmount: 260_000,
        applicationFees: 50_800,
        total: 310_800,
      },
      {
        optionLabel: "Real estate",
        // Real estate minimum currently marketed around US$300k
        // for approved property shares.
        contributionAmount: 300_000,
        applicationFees: 50_800,
        total: 350_800,
      },
    ],
    hasData: true,
  },
  {
    code: "BG",
    label: "Bulgaria",
    currency: "USD",
    baselineOption: {
      optionLabel: "Investment fund",
      contributionAmount: 512_000,
      applicationFees: 10_000,
      total: 522_000,
    },
    // The historic Bulgarian route was essentially a single-track
    // investment path; no meaningful alternates to expose here.
    alternateOptions: [],
    hasData: true,
  },
  {
    code: "CA",
    label: "Canada – Quebec",
    currency: "USD",
    baselineOption: {
      optionLabel: "Quebec Entrepreneur",
      contributionAmount: 240_000,
      applicationFees: 32_238,
      total: 272_238,
    },
    alternateOptions: [
      {
        optionLabel: "StartUp Visa",
        // Indicative capital commitment into a qualifying Canadian start-up.
        contributionAmount: 200_000,
        applicationFees: 32_238,
        total: 232_238,
      },
    ],
    hasData: true,
  },
  {
    code: "CY",
    label: "Cyprus",
    currency: "USD",
    baselineOption: {
      optionLabel: "Immigration permit for investors",
      contributionAmount: 900_000,
      applicationFees: 5_506,
      total: 905_506,
    },
    alternateOptions: [],
    hasData: true,
  },
  {
    code: "DM",
    label: "Dominica",
    currency: "USD",
    baselineOption: {
      optionLabel: "Donation",
      contributionAmount: 275_000,
      applicationFees: 21_500,
      total: 296_500,
    },
    alternateOptions: [
      {
        optionLabel: "Real estate",
        // Real estate route: widely published minimum US$200k.
        contributionAmount: 200_000,
        applicationFees: 21_500,
        total: 221_500,
      },
    ],
    hasData: true,
  },
  {
    code: "GR",
    label: "Greece",
    currency: "USD",
    baselineOption: {
      optionLabel: "Real estate",
      contributionAmount: 250_000,
      applicationFees: 10_112,
      total: 260_112,
    },
    alternateOptions: [],
    hasData: true,
  },
  {
    code: "GD",
    label: "Grenada",
    currency: "USD",
    baselineOption: {
      optionLabel: "—",
      contributionAmount: null,
      applicationFees: null,
      total: null,
    },
    alternateOptions: [],
    hasData: false,
    notes: "No figures shown in baseline table (all cells were “--”).",
  },
  {
    code: "HU",
    label: "Hungary",
    currency: "USD",
    baselineOption: {
      optionLabel: "Real estate fund",
      contributionAmount: 250_000,
      applicationFees: 0,
      total: 250_000,
    },
    alternateOptions: [],
    hasData: true,
    notes:
      "Application fees shown as US$ 0² (likely included in advisory fees per footnote).",
  },
  {
    code: "LV",
    label: "Latvia",
    currency: "USD",
    baselineOption: {
      optionLabel: "—",
      contributionAmount: null,
      applicationFees: null,
      total: null,
    },
    alternateOptions: [],
    hasData: false,
    notes: "No figures shown in baseline table (all cells were “--”).",
  },
  {
    code: "MT",
    label: "Malta",
    currency: "USD",
    baselineOption: {
      optionLabel: "Residency – purchase",
      contributionAmount: 414_000,
      applicationFees: 61_700,
      total: 475_700,
    },
    alternateOptions: [
      {
        optionLabel: "Residency – rent",
        // Rental-based residency path; this is an indicative
        // all-in investment ticket for the main applicant.
        contributionAmount: 300_000,
        applicationFees: 61_700,
        total: 361_700,
      },
    ],
    hasData: true,
  },
  {
    code: "PT",
    label: "Portugal",
    currency: "USD",
    baselineOption: {
      optionLabel: "Investment fund",
      contributionAmount: 500_000,
      applicationFees: 47_586,
      total: 547_586,
    },
    alternateOptions: [
      {
        optionLabel: "Real estate",
        // Legacy Golden Visa real-estate threshold (standard tier).
        contributionAmount: 500_000,
        applicationFees: 47_586,
        total: 547_586,
      },
    ],
    hasData: true,
    notes:
      "Some Portuguese investment routes (especially real estate) have been modified or phased out; amounts reflect legacy thresholds.",
  },
  {
    code: "LC",
    label: "Saint Lucia",
    currency: "USD",
    baselineOption: {
      optionLabel: "National economic fund",
      contributionAmount: 250_000,
      applicationFees: 27_500,
      total: 277_500,
    },
    alternateOptions: [
      {
        optionLabel: "Real estate",
        contributionAmount: 200_000,
        applicationFees: 27_500,
        total: 227_500,
      },
      {
        optionLabel: "National action bond",
        contributionAmount: 300_000,
        applicationFees: 27_500,
        total: 327_500,
      },
    ],
    hasData: true,
  },
  {
    code: "KN",
    label: "St. Kitts & Nevis",
    currency: "USD",
    baselineOption: {
      optionLabel: "Sustainable island state contribution",
      contributionAmount: 275_000,
      applicationFees: 37_135,
      total: 312_135,
    },
    alternateOptions: [
      {
        optionLabel: "Public Benefit Option (PBO)",
        // PBO headline contribution ticket.
        contributionAmount: 250_000,
        applicationFees: 37_135,
        total: 287_135,
      },
      {
        optionLabel: "Real estate",
        // Approved real estate share, standard tier.
        contributionAmount: 400_000,
        applicationFees: 37_135,
        total: 437_135,
      },
    ],
    hasData: true,
    notes:
      "The Sustainable Island State Contribution currently starts from about US$250k for a single applicant; other routes carry similar fee structures.",
  },
  {
    code: "ST",
    label: "São Tomé and Príncipe",
    currency: "USD",
    baselineOption: {
      optionLabel: "Donation",
      contributionAmount: 100_000,
      applicationFees: 9_050,
      total: 109_050,
    },
    alternateOptions: [],
    hasData: true,
  },
  {
    code: "ES",
    label: "Spain",
    currency: "USD",
    baselineOption: {
      optionLabel: "—",
      contributionAmount: null,
      applicationFees: null,
      total: null,
    },
    alternateOptions: [],
    hasData: false,
    notes: "No figures shown in baseline table (all cells were “--”).",
  },
  {
    code: "TR",
    label: "Turkiye",
    currency: "USD",
    baselineOption: {
      optionLabel: "Real estate",
      contributionAmount: 400_000,
      applicationFees: 3_735,
      total: 400_000,
    },
    alternateOptions: [],
    hasData: true,
    notes:
      "Published total is US$ 400,000 (rounded) even though sum = 403,735.",
  },
  {
    code: "US",
    label: "USA",
    currency: "USD",
    baselineOption: {
      optionLabel: "EB-5",
      contributionAmount: 800_000,
      applicationFees: 103_410,
      total: 903_410,
    },
    alternateOptions: [],
    hasData: true,
  },
];
