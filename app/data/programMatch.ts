// data/programMatch.ts

export type ContributionType = "donation" | "bonds" | "funds" | "real-estate";
export type MobilityRegion = "Canada" | "Europe" | "USA";

/**
 * ProgramMatchProfile
 *
 * This is the numeric profile the matching engine reads.
 * `code` should match your Program.code from data/programs.ts (e.g. "AG-D" or base country code).
 */
export interface ProgramMatchProfile {
  code: string; // e.g. "AG", "BG"
  label: string; // Display label, e.g. "Antigua & Barbuda"
  countryCode: string; // ISO code for flags / mapping, e.g. "AG"
  detailsUrl: string; // Link to program detail page

  // Minimum recommended personal net worth in USD.
  minNetWorth: number;

  // Minimum all-in contribution for a family of four in USD.
  minContribution: number;

  // Which contribution types the program supports.
  contributionTypes: ContributionType[];

  // Whether the program typically allows financing structures.
  allowsFinancing: boolean;

  // Whether the program expects actual relocation / physical residence.
  requiresRelocation: boolean;

  // Broad mobility regions the passport covers visa-free.
  mobilityRegions: MobilityRegion[];

  // 0 = low, 1 = medium, 2 = high (as per Arton-style importance).
  speedScore: 0 | 1 | 2;
  simplicityScore: 0 | 1 | 2;
  qualityOfLifeScore: 0 | 1 | 2;

  // Overall index / attractiveness number (0-100, purely yours).
  artonIndexScore: number;
}

/**
 * PROGRAM_MATCH_PROFILES
 *
 * You can tweak all numeric fields. The matching engine
 * will read from this list and rank accordingly.
 */
export const PROGRAM_MATCH_PROFILES: ProgramMatchProfile[] = [
  {
    code: "AG",
    label: "Antigua & Barbuda",
    countryCode: "AG",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/antigua-and-barbuda/",
    minNetWorth: 1000000,
    minContribution: 230000,
    contributionTypes: ["donation", "real-estate", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe", "Canada"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 72,
  },
  {
    code: "BG",
    label: "Bulgaria",
    countryCode: "BG",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/bulgaria/",
    minNetWorth: 2000000,
    minContribution: 550000,
    contributionTypes: ["bonds", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 75,
  },
  {
    code: "CA",
    label: "Quebec, Canada",
    countryCode: "CA",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/canada-quebec/",
    minNetWorth: 2000000,
    minContribution: 1200000,
    contributionTypes: ["bonds", "funds"],
    allowsFinancing: true,
    requiresRelocation: true,
    mobilityRegions: ["Canada", "USA", "Europe"],
    speedScore: 0,
    simplicityScore: 0,
    qualityOfLifeScore: 2,
    artonIndexScore: 80,
  },
  {
    code: "CY",
    label: "Cyprus",
    countryCode: "CY",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/cyprus/",
    minNetWorth: 2000000,
    minContribution: 2000000,
    contributionTypes: ["real-estate", "funds"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 78,
  },
  {
    code: "DM",
    label: "Dominica",
    countryCode: "DM",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/dominica/",
    minNetWorth: 500000,
    minContribution: 200000,
    contributionTypes: ["donation", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 70,
  },
  {
    code: "GD",
    label: "Grenada",
    countryCode: "GD",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/grenada/",
    minNetWorth: 800000,
    minContribution: 220000,
    contributionTypes: ["donation", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe", "USA"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 74,
  },
  {
    code: "HU",
    label: "Hungary",
    countryCode: "HU",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/hungary/",
    minNetWorth: 1000000,
    minContribution: 300000,
    contributionTypes: ["bonds", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 73,
  },
  {
    code: "LV",
    label: "Latvia",
    countryCode: "LV",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/latvia/",
    minNetWorth: 800000,
    minContribution: 300000,
    contributionTypes: ["real-estate", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 1,
    artonIndexScore: 65,
  },
  {
    code: "MT",
    label: "Malta",
    countryCode: "MT",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/malta/",
    minNetWorth: 1500000,
    minContribution: 800000,
    contributionTypes: ["donation", "real-estate", "funds"],
    allowsFinancing: false,
    requiresRelocation: true,
    mobilityRegions: ["Europe", "USA"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 82,
  },
  {
    code: "ME",
    label: "Montenegro",
    countryCode: "ME",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/montenegro/",
    minNetWorth: 800000,
    minContribution: 450000,
    contributionTypes: ["donation", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 2,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 68,
  },
  {
    code: "PT",
    label: "Portugal",
    countryCode: "PT",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/portugal/",
    minNetWorth: 1000000,
    minContribution: 350000,
    contributionTypes: ["real-estate", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe", "USA"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 81,
  },
  {
    code: "LC",
    label: "Saint Lucia",
    countryCode: "LC",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/saint-lucia/",
    minNetWorth: 500000,
    minContribution: 200000,
    contributionTypes: ["donation", "bonds", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 69,
  },
  {
    code: "KN",
    label: "St. Kitts & Nevis",
    countryCode: "KN",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/st-kitts-nevis/",
    minNetWorth: 700000,
    minContribution: 250000,
    contributionTypes: ["donation", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 77,
  },
  {
    code: "ES",
    label: "Spain",
    countryCode: "ES",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/spain/",
    minNetWorth: 1000000,
    minContribution: 500000,
    contributionTypes: ["real-estate", "funds"],
    allowsFinancing: true,
    requiresRelocation: true,
    mobilityRegions: ["Europe"],
    speedScore: 0,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 79,
  },
  {
    code: "GB",
    label: "United Kingdom",
    countryCode: "GB",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/united-kingdom/",
    minNetWorth: 2000000,
    minContribution: 2000000,
    contributionTypes: ["funds"],
    allowsFinancing: false,
    requiresRelocation: true,
    mobilityRegions: ["Europe", "USA"],
    speedScore: 0,
    simplicityScore: 0,
    qualityOfLifeScore: 2,
    artonIndexScore: 83,
  },
  {
    code: "US",
    label: "USA EB-5",
    countryCode: "US",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/usa-eb-5/",
    minNetWorth: 2000000,
    minContribution: 900000,
    contributionTypes: ["funds", "real-estate"],
    allowsFinancing: true,
    requiresRelocation: true,
    mobilityRegions: ["USA"],
    speedScore: 0,
    simplicityScore: 0,
    qualityOfLifeScore: 2,
    artonIndexScore: 76,
  },
  {
    code: "GR",
    label: "Greece Golden Visa",
    countryCode: "GR",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/greece-golden-visa-program/",
    minNetWorth: 800000,
    minContribution: 250000,
    contributionTypes: ["real-estate", "funds"],
    allowsFinancing: true,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 1,
    simplicityScore: 1,
    qualityOfLifeScore: 2,
    artonIndexScore: 74,
  },
  {
    code: "ST",
    label: "São Tomé and Príncipe",
    countryCode: "ST",
    detailsUrl:
      "https://www.artoncapitals.com/global-citizen-programs/sao-tome-principe-citizenship-by-investment/",
    minNetWorth: 500000,
    minContribution: 200000,
    contributionTypes: ["donation", "real-estate"],
    allowsFinancing: false,
    requiresRelocation: false,
    mobilityRegions: ["Europe"],
    speedScore: 2,
    simplicityScore: 2,
    qualityOfLifeScore: 1,
    artonIndexScore: 60,
  },
];
