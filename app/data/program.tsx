// data/programs.ts

export interface Program {
  code: string; // e.g. "AG-D"
  label: string; // "Antigua & Barbuda – Donation"
  countryCode: string; // "AG"
  currency: string;
  netWorth: string;
  contributionAmount: string;
  asset: string;
  investmentGuarantees: string;
  financingOptions: string;
  governmentFees: string;
  professionalFees: string;
  timeToResidence: string;
  interviewRequired: boolean;
  requiredPhysicalResidence: string;
  timeToCitizenship: string;
  visaFreeTravel: string;
  artonIndexScore: number; // illustrative score / index
  detailsUrl: string;
}

export const PROGRAMS: Program[] = [
  // ANTIGUA & BARBUDA
  {
    code: "AG-D",
    label: "Antigua & Barbuda – Donation",
    countryCode: "AG",
    currency: "USD",
    netWorth: "US$1,000,000–2,000,000+ net assets.",
    contributionAmount: "From US$230,000 NDF donation (family of four).",
    asset: "Non-refundable donation to the National Development Fund.",
    investmentGuarantees: "No capital guarantee.",
    financingOptions: "Some third-party financing available.",
    governmentFees:
      "US$30,000–40,000 government & due-diligence fees (family of four).",
    professionalFees: "From US$20,000 legal and agent fees.",
    timeToResidence: "3–5 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "Minimum 5 days in 5 years.",
    timeToCitizenship: "3–6 months from application.",
    visaFreeTravel: "150+ countries incl. Schengen and the UK.",
    artonIndexScore: 80,
    detailsUrl: "/global-citizen-programs/antigua-and-barbuda",
  },
  {
    code: "AG-RE",
    label: "Antigua & Barbuda – Real Estate",
    countryCode: "AG",
    currency: "USD",
    netWorth: "US$1,000,000–2,000,000+ net assets.",
    contributionAmount: "From US$200,000 approved real estate.",
    asset: "Share in approved resort or real-estate project (min. 5-year hold).",
    investmentGuarantees: "No capital guarantee; normal property risk.",
    financingOptions: "Developer or bank financing available above minimum equity.",
    governmentFees:
      "From US$50,000 government & due-diligence fees (family of four).",
    professionalFees: "From US$25,000 legal and agent fees.",
    timeToResidence: "4–6 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "Short visit within a 5-year period.",
    timeToCitizenship: "4–8 months from investment and approval.",
    visaFreeTravel: "150+ countries incl. Schengen and the UK.",
    artonIndexScore: 81,
    detailsUrl: "/global-citizen-programs/antigua-and-barbuda",
  },

  // BULGARIA – FUNDS / BONDS (historic investor route)
  {
    code: "BG",
    label: "Bulgaria – Funds / Government Bonds",
    countryCode: "BG",
    currency: "EUR",
    netWorth: "€1,000,000+ net assets.",
    contributionAmount: "From €512,000 in government bonds or qualifying funds.",
    asset: "Five-year investment in government bonds or regulated Bulgarian funds.",
    investmentGuarantees:
      "Bonds: capital repaid at maturity; funds: normal market risk.",
    financingOptions: "Bank financing available for part of bond investment.",
    governmentFees:
      "Government and processing fees in the low thousands of euros per person.",
    professionalFees: "Legal and advisory fees €25,000–50,000+.",
    timeToResidence: "6–12 months to permanent residence (older framework).",
    interviewRequired: true,
    requiredPhysicalResidence: "Light physical-stay requirements.",
    timeToCitizenship: "Fast-track options from around 2 years of residence.",
    visaFreeTravel:
      "Citizenship: 180+ countries; PR gives Schengen-style mobility when aligned.",
    artonIndexScore: 84,
    detailsUrl: "/global-citizen-programs/bulgaria",
  },

  // DOMINICA
  {
    code: "DM-D",
    label: "Dominica – Donation",
    countryCode: "DM",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount: "From US$100,000 EDF donation (single applicant).",
    asset: "Non-refundable donation to the Economic Diversification Fund.",
    investmentGuarantees: "No capital guarantee.",
    financingOptions: "Self-funded; limited fee financing.",
    governmentFees:
      "US$25,000–40,000 government & due-diligence fees (family of four).",
    professionalFees: "US$15,000–30,000 legal and agent fees.",
    timeToResidence: "3–6 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "No minimum stay requirement.",
    timeToCitizenship: "3–6 months from approval and payment.",
    visaFreeTravel: "140–150 countries incl. Schengen and the UK.",
    artonIndexScore: 77,
    detailsUrl: "/global-citizen-programs/dominica",
  },
  {
    code: "DM-RE",
    label: "Dominica – Real Estate",
    countryCode: "DM",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount: "Minimum US$200,000 approved real estate.",
    asset: "Share in approved hotel or resort (3–5+ year hold).",
    investmentGuarantees: "No capital guarantee; rental income possible.",
    financingOptions: "Developer financing available for part of the price.",
    governmentFees:
      "US$35,000–50,000 government fees (family of four) plus due diligence.",
    professionalFees: "From US$25,000 legal, agent, and transaction fees.",
    timeToResidence: "4–7 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "No ongoing physical residence requirement.",
    timeToCitizenship: "6–9 months from investment and approval.",
    visaFreeTravel: "140–150 countries incl. Schengen and the UK.",
    artonIndexScore: 78,
    detailsUrl: "/global-citizen-programs/dominica",
  },

  // GREECE – REAL ESTATE GOLDEN VISA
  {
    code: "GR",
    label: "Greece – Real Estate (Golden Visa)",
    countryCode: "GR",
    currency: "EUR",
    netWorth: "€500,000–1,000,000+ net assets.",
    contributionAmount:
      "From €250,000 real estate (up to €800,000 in high-demand areas).",
    asset: "Freehold or long-term leasehold property in Greece.",
    investmentGuarantees: "No capital guarantee; normal property-market risk.",
    financingOptions: "Mortgages allowed above the minimum equity threshold.",
    governmentFees:
      "Application, issuance and renewal fees in the low thousands of euros per family.",
    professionalFees: "Legal, tax and property fees €10,000–20,000+.",
    timeToResidence: "3–9 months to first residence card.",
    interviewRequired: false,
    requiredPhysicalResidence: "No minimum stay to keep the golden visa.",
    timeToCitizenship:
      "Around 7 years of residence plus language and integration tests.",
    visaFreeTravel:
      "Schengen travel with residence card; 190+ countries with Greek passport.",
    artonIndexScore: 86,
    detailsUrl: "/global-citizen-programs/greece-golden-visa-program",
  },

  // GRENADA
  {
    code: "GD-D",
    label: "Grenada – Donation",
    countryCode: "GD",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount:
      "US$150,000–235,000 National Transformation Fund donation (single to family of four).",
    asset: "Non-refundable donation to the National Transformation Fund.",
    investmentGuarantees: "No capital guarantee.",
    financingOptions: "Self-funded; some fee financing structures exist.",
    governmentFees:
      "US$30,000–50,000 government, due-diligence and processing fees (family of four).",
    professionalFees: "US$20,000–30,000 agent and legal fees.",
    timeToResidence: "3–6 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "No minimum physical residence requirement.",
    timeToCitizenship: "3–6 months from approval and payment.",
    visaFreeTravel:
      "145–150 countries incl. Schengen and China; E-2 treaty access via the USA route.",
    artonIndexScore: 79,
    detailsUrl: "/global-citizen-programs/grenada",
  },
  {
    code: "GD-RE",
    label: "Grenada – Real Estate",
    countryCode: "GD",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount: "From US$220,000 approved real estate share.",
    asset: "Equity in approved resort or hotel project (5+ year hold).",
    investmentGuarantees: "No capital guarantee; rental income and resale only.",
    financingOptions:
      "Developer or bank financing available above minimum equity amount.",
    governmentFees:
      "From US$50,000 government and due-diligence fees (family of four).",
    professionalFees: "US$25,000–40,000+ advisory, legal and closing costs.",
    timeToResidence: "4–7 months.",
    interviewRequired: false,
    requiredPhysicalResidence: "No ongoing physical residence requirement.",
    timeToCitizenship: "4–8 months from investment and approval.",
    visaFreeTravel: "145–150 countries worldwide.",
    artonIndexScore: 80,
    detailsUrl: "/global-citizen-programs/grenada",
  },

  // HUNGARY – FUND-BASED GUEST INVESTOR
  {
    code: "HU",
    label: "Hungary – Investment Fund (Guest Investor Visa)",
    countryCode: "HU",
    currency: "EUR",
    netWorth: "€500,000–1,000,000+ net assets.",
    contributionAmount:
      "From €250,000 in units of a qualified real-estate investment fund.",
    asset: "Units in a designated real-estate investment fund.",
    investmentGuarantees: "No capital guarantee; fund performance risk.",
    financingOptions: "Bank lending possible; sufficient personal wealth required.",
    governmentFees:
      "Government and card-issuance fees in the low thousands of euros per family.",
    professionalFees: "Immigration and fund fees €15,000–30,000+.",
    timeToResidence: "2–6 months to multi-year residence permit.",
    interviewRequired: false,
    requiredPhysicalResidence:
      "Light stay requirements; investment must be maintained.",
    timeToCitizenship: "8+ years of residence plus language and integration tests.",
    visaFreeTravel:
      "Schengen travel with permit; 185–190 countries with Hungarian passport.",
    artonIndexScore: 85,
    detailsUrl: "/global-citizen-programs/hungary",
  },

  // LATVIA – SHARE CAPITAL
  {
    code: "LV",
    label: "Latvia – Share Capital Investment",
    countryCode: "LV",
    currency: "EUR",
    netWorth: "€100,000+ net assets.",
    contributionAmount:
      "From €50,000 into share capital of a qualifying Latvian company.",
    asset: "Equity stake in a Latvian business meeting set criteria.",
    investmentGuarantees: "No capital guarantee; normal business risk.",
    financingOptions: "Generally self-funded.",
    governmentFees: "One-time €10,000 state fee plus permit processing fees.",
    professionalFees: "Corporate, legal and tax advisory €10,000–20,000+.",
    timeToResidence: "2–6 months to temporary residence permit.",
    interviewRequired: false,
    requiredPhysicalResidence:
      "Periodic visits required to maintain the residence permit.",
    timeToCitizenship: "Around 10 years of residence plus language and civic tests.",
    visaFreeTravel:
      "Schengen travel with residence card; 185–190 countries with Latvian passport.",
    artonIndexScore: 83,
    detailsUrl: "/global-citizen-programs/latvia",
  },

  // MALTA – CONTRIBUTION / DONATION COMPONENT (MEIN)
  {
    code: "MT-D",
    label: "Malta – Contribution (Exceptional Services Citizenship)",
    countryCode: "MT",
    currency: "EUR",
    netWorth: "€1,500,000–2,000,000+ net assets.",
    contributionAmount:
      "€600,000 contribution (36-month track) or €750,000 (12-month track).",
    asset: "Government contribution plus €10,000+ donation to a Maltese NGO.",
    investmentGuarantees: "No capital guarantee; pure contribution cost.",
    financingOptions: "Self-funded.",
    governmentFees:
      "Additional program, due-diligence and passport fees in the tens of thousands of euros.",
    professionalFees: "Agent and advisory fees €40,000–100,000+.",
    timeToResidence: "Residence card issued within a few months.",
    interviewRequired: true,
    requiredPhysicalResidence:
      "12 or 36 months of residence in Malta depending on route.",
    timeToCitizenship: "1–3 years from initial residence.",
    visaFreeTravel:
      "185–190 countries including EU, UK and many other destinations.",
    artonIndexScore: 89,
    detailsUrl: "/global-citizen-programs/malta",
  },
  {
    code: "MT-RE",
    label: "Malta – Real Estate Requirement",
    countryCode: "MT",
    currency: "EUR",
    netWorth: "€1,500,000–2,000,000+ net assets.",
    contributionAmount:
      "Purchase from €700,000 or rent from €16,000 per year for 5 years.",
    asset:
      "Residential property in Malta, owned or leased at the required level.",
    investmentGuarantees: "No capital guarantee; normal property risk.",
    financingOptions: "Mortgages available on purchased property.",
    governmentFees:
      "Same citizenship-program fees as contribution route plus property charges.",
    professionalFees:
      "Real-estate, legal and notarial fees €10,000–30,000+.",
    timeToResidence:
      "Property arranged early; residence card usually issued within months.",
    interviewRequired: true,
    requiredPhysicalResidence:
      "Property must be held for at least 5 years with genuine residence.",
    timeToCitizenship: "1–3 years aligned with chosen MEIN track.",
    visaFreeTravel:
      "185–190 countries with Maltese passport once naturalised.",
    artonIndexScore: 90,
    detailsUrl: "/global-citizen-programs/malta",
  },

  // PORTUGAL – DONATION / FUNDS (POST-REAL-ESTATE REFORM)
  {
    code: "PT-D",
    label: "Portugal – Donation (Culture / R&D)",
    countryCode: "PT",
    currency: "EUR",
    netWorth: "€500,000–1,000,000+ net assets.",
    contributionAmount:
      "From €250,000 cultural donation or €500,000 R&D donation.",
    asset: "Non-refundable support for cultural, artistic or R&D projects.",
    investmentGuarantees: "No capital return; pure donation.",
    financingOptions: "Self-funded.",
    governmentFees:
      "Golden-visa government fees per person in the low five-figure range over 5 years.",
    professionalFees: "Legal and advisory fees €15,000–25,000+ per family.",
    timeToResidence: "6–12 months to first residence card.",
    interviewRequired: false,
    requiredPhysicalResidence:
      "Average of 7 days per year (or 14 days every 2 years).",
    timeToCitizenship:
      "Eligibility after 5 years of residence plus Portuguese language test.",
    visaFreeTravel:
      "Schengen travel with residence card; 190+ countries with Portuguese passport.",
    artonIndexScore: 88,
    detailsUrl: "/global-citizen-programs/portugal",
  },
  {
    code: "PT-F",
    label: "Portugal – Investment Funds",
    countryCode: "PT",
    currency: "EUR",
    netWorth: "€1,000,000+ net assets.",
    contributionAmount:
      "From €500,000 subscription into a qualifying investment fund.",
    asset:
      "Units in regulated venture-capital, private-equity or similar Portuguese funds.",
    investmentGuarantees: "No capital guarantee; fund strategy risk.",
    financingOptions: "Usually equity-funded; leverage possible within rules.",
    governmentFees:
      "Golden-visa government fees in the low five-figure range over 5 years.",
    professionalFees:
      "Legal, tax planning and fund subscription fees €20,000–30,000+.",
    timeToResidence: "6–12 months to first residence permit.",
    interviewRequired: false,
    requiredPhysicalResidence:
      "Average of 7 days per year (or 14 days each 2-year period).",
    timeToCitizenship:
      "Citizenship possible after 5 years of residence with A2 Portuguese.",
    visaFreeTravel:
      "Schengen travel with residence card; 190+ countries with Portuguese passport.",
    artonIndexScore: 89,
    detailsUrl: "/global-citizen-programs/portugal",
  },

  // QUEBEC, CANADA – IMMIGRANT INVESTOR
  {
    code: "CA",
    label: "Quebec, Canada – Immigrant Investor (Term Deposit + Contribution)",
    countryCode: "CA",
    currency: "CAD",
    netWorth: "C$2,000,000+ legally acquired net assets.",
    contributionAmount:
      "C$1,000,000 5-year term deposit plus C$200,000 non-refundable contribution.",
    asset:
      "Government-secured term deposit and separate non-refundable contribution.",
    investmentGuarantees:
      "C$1,000,000 deposit capital-protected; C$200,000 contribution not returned.",
    financingOptions:
      "Bank financing available for part of the term deposit through intermediaries.",
    governmentFees:
      "Federal and provincial processing, biometrics and medical fees for each family member.",
    professionalFees:
      "Immigration counsel and financial-intermediary fees from C$40,000+.",
    timeToResidence:
      "Processing typically several years before Canadian permanent residence.",
    interviewRequired: true,
    requiredPhysicalResidence:
      "Physical presence in Canada required to keep PR and qualify for citizenship.",
    timeToCitizenship:
      "From 3+ years of physical presence in Canada as a permanent resident.",
    visaFreeTravel:
      "Canadian passport offers 185–190 visa-free countries; PR gives right to live anywhere in Canada.",
    artonIndexScore: 91,
    detailsUrl: "/global-citizen-programs/canada-quebec",
  },

  // SAINT LUCIA
  {
    code: "LC-D",
    label: "Saint Lucia – Donation",
    countryCode: "LC",
    currency: "USD",
    netWorth: "US$500,000+ net assets.",
    contributionAmount:
      "From US$100,000 National Economic Fund donation (single).",
    asset: "Non-refundable donation to the National Economic Fund.",
    investmentGuarantees: "No capital guarantee.",
    financingOptions:
      "Self-funded; fee financing available through some providers.",
    governmentFees:
      "Due-diligence and processing fees in the tens of thousands of US dollars (family of four).",
    professionalFees: "Agent and legal fees US$15,000–25,000+.",
    timeToResidence: "3–6 months to citizenship and passport.",
    interviewRequired: false,
    requiredPhysicalResidence: "No minimum residence requirement.",
    timeToCitizenship: "3–6 months from approval and payment.",
    visaFreeTravel: "140–150 countries incl. Schengen and the UK.",
    artonIndexScore: 78,
    detailsUrl: "/global-citizen-programs/saint-lucia",
  },
  {
    code: "LC-GB",
    label: "Saint Lucia – Government Bonds",
    countryCode: "LC",
    currency: "USD",
    netWorth: "US$300,000+ investable assets.",
    contributionAmount:
      "From US$300,000 in government bonds plus US$50,000 admin fee.",
    asset: "Government bonds held for 5–7 years.",
    investmentGuarantees:
      "Bond principal returned at maturity; admin fee not returned.",
    financingOptions:
      "Limited financing options; strict source-of-funds checks.",
    governmentFees:
      "US$50,000 administration fee plus due-diligence and processing fees.",
    professionalFees: "Legal and agent fees US$20,000–30,000+.",
    timeToResidence: "3–6 months to citizenship and passport.",
    interviewRequired: false,
    requiredPhysicalResidence: "No residence requirement after approval.",
    timeToCitizenship: "3–6 months from investment and approval.",
    visaFreeTravel: "140–150 countries worldwide.",
    artonIndexScore: 79,
    detailsUrl: "/global-citizen-programs/saint-lucia",
  },

  // SPAIN – REAL ESTATE GOLDEN VISA
  {
    code: "ES",
    label: "Spain – Real Estate (Golden Visa)",
    countryCode: "ES",
    currency: "EUR",
    netWorth: "€700,000–1,000,000+ net assets.",
    contributionAmount:
      "From €500,000 mortgage-free investment in Spanish real estate.",
    asset: "Residential or commercial property in Spain.",
    investmentGuarantees: "No capital guarantee; normal property-market risk.",
    financingOptions:
      "Bank financing allowed above the first €500,000 which remains mortgage-free.",
    governmentFees:
      "Visa, residence-card and renewal fees of a few hundred euros per person.",
    professionalFees:
      "Real-estate, legal and tax-planning fees €10,000–20,000+.",
    timeToResidence: "2–6 months to initial investor visa/residence card.",
    interviewRequired: false,
    requiredPhysicalResidence:
      "Very light stay to keep the golden visa; more for PR/citizenship.",
    timeToCitizenship:
      "Around 10 years of legal residence for most nationalities.",
    visaFreeTravel:
      "Schengen travel with residence card; 190+ countries with Spanish passport.",
    artonIndexScore: 90,
    detailsUrl: "/global-citizen-programs/spain",
  },

  // ST. KITTS & NEVIS
  {
    code: "KN-D",
    label: "St. Kitts & Nevis – Donation",
    countryCode: "KN",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount:
      "From US$250,000 Sustainable Island State Contribution (single).",
    asset: "Non-refundable contribution to the Sustainable Island State fund.",
    investmentGuarantees: "No capital guarantee.",
    financingOptions: "Self-funded with strict AML compliance.",
    governmentFees:
      "Government, due-diligence and processing fees in the tens of thousands of US dollars (family).",
    professionalFees: "Authorized agent and legal fees US$20,000–35,000+.",
    timeToResidence: "3–6 months to approval and passport.",
    interviewRequired: true,
    requiredPhysicalResidence: "No ongoing physical-residence requirement.",
    timeToCitizenship: "3–6 months from contribution and approval.",
    visaFreeTravel: "155–165 countries incl. Schengen and the UK.",
    artonIndexScore: 82,
    detailsUrl: "/global-citizen-programs/st-kitts-nevis",
  },
  {
    code: "KN-RE",
    label: "St. Kitts & Nevis – Real Estate",
    countryCode: "KN",
    currency: "USD",
    netWorth: "US$500,000–1,000,000+ net assets.",
    contributionAmount:
      "From US$400,000 approved real estate share or US$800,000 private home.",
    asset:
      "Equity in approved resort/condo/villa project or qualifying private home.",
    investmentGuarantees:
      "No capital guarantee; returns via rental income and resale only.",
    financingOptions:
      "Developer or bank financing available above minimum equity amount.",
    governmentFees:
      "Government and due-diligence fees often US$50,000+ for a family.",
    professionalFees:
      "Real-estate, legal and agent fees US$30,000–50,000+.",
    timeToResidence: "4–7 months to full citizenship approval.",
    interviewRequired: true,
    requiredPhysicalResidence:
      "No minimum stay; property must be held for 7+ years.",
    timeToCitizenship: "4–7 months from investment and approval.",
    visaFreeTravel: "155–165 countries, same as donation route.",
    artonIndexScore: 83,
    detailsUrl: "/global-citizen-programs/st-kitts-nevis",
  },
];
