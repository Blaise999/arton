import { PROGRAM_COSTS } from "./program-cost";
import { PROGRAM_MATCH_PROFILES as RAW_MATCH } from "./programMatch";
import { PROGRAMS } from "./program";

/**
 * Build quick lookups
 */
export const PROGRAM_COST_BY_COUNTRY = Object.fromEntries(
  PROGRAM_COSTS.map((p) => [p.code, p])
);

/**
 * Some countries in your match file are intentionally *not*
 * based on PROGRAM_COSTS (different route assumptions).
 * Put explicit baselines here to prevent auto-overwrite.
 *
 * Example: Canada profile is modeling the Quebec Investor Program
 * (~1.2M) while costs file is modeling Entrepreneur / StartUp routes (200–240k).
 */
const MATCH_MIN_CONTRIBUTION_OVERRIDE: Partial<Record<string, number>> = {
  CA: 1_200_000,
  CY: 2_000_000, // keep if you want the old citizenship-style baseline
  // add more if you want a fixed baseline
};

/**
 * Derive minContribution from PROGRAM_COSTS:
 * - take baseline + alternates
 * - choose the cheapest numeric option as the "entry route"
 * - unless overridden above
 */
export const PROGRAM_MATCH_PROFILES = RAW_MATCH.map((profile) => {
  const override = MATCH_MIN_CONTRIBUTION_OVERRIDE[profile.code];
  if (override != null) return { ...profile, minContribution: override };

  const cost = PROGRAM_COST_BY_COUNTRY[profile.code];
  if (!cost || !cost.hasData) return profile;

  const options = [
    cost.baselineOption,
    ...(cost.alternateOptions ?? []),
  ];

  const numeric = options
    .map((o) => o.contributionAmount)
    .filter((n): n is number => typeof n === "number");

  if (!numeric.length) return profile;

  const cheapest = Math.min(...numeric);

  return { ...profile, minContribution: cheapest };
});

/**
 * Dev-time mismatch report so you *see drift instantly*.
 */
export function devToolsCatalogReport() {
  if (process.env.NODE_ENV === "production") return;

  const costCountries = new Set(PROGRAM_COSTS.map((p) => p.code));
  const matchCountries = new Set(RAW_MATCH.map((p) => p.code));
  const programCountries = new Set(PROGRAMS.map((p) => p.countryCode));

  const missingInPrograms = [...costCountries].filter(
    (c) => !programCountries.has(c)
  );
  const missingInMatch = [...costCountries].filter(
    (c) => !matchCountries.has(c)
  );
  const surplusInMatch = [...matchCountries].filter(
    (c) => !costCountries.has(c)
  );

  if (missingInPrograms.length || missingInMatch.length || surplusInMatch.length) {
    console.warn("[tools catalog drift]", {
      missingInPrograms,
      missingInMatch,
      surplusInMatch,
    });
  }
}
