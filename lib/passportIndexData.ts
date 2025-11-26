// lib/passportIndexData.ts

export type VisaRequirement = {
  status: string;          // e.g. "Visa-free", "eVisa", "Visa required"
  notes?: string;          // extra explanation
};

export const VISA_DATA: Record<string, VisaRequirement> = {
  // key format: `${PASSPORT}-${DESTINATION}` in ISO country codes
  // These are EXAMPLES so the widget shows something real immediately.
  // ✳️ You can expand this with a bigger dataset later.

  // DOMINICA (DM) examples
  "DM-BB": {
    status: "Visa-free",
    notes: "Short stays up to 180 days permitted visa-free.",
  },
  "DM-GB": {
    status: "Visa-free",
    notes: "Visa-free entry for short visits to the United Kingdom.",
  },
  "DM-SG": {
    status: "Visa-free",
    notes: "Short-term visa-free entry to Singapore.",
  },
  "DM-CA": {
    status: "eVisa / ETA",
    notes: "Electronic travel authorization required for air arrivals.",
  },
  "DM-US": {
    status: "Visa required",
    notes: "A visa is required for travel to the United States.",
  },

  // NIGERIA (NG) examples
  "NG-GH": {
    status: "Visa-free",
    notes: "ECOWAS citizens may enter visa-free for short stays.",
  },
  "NG-KE": {
    status: "eVisa",
    notes: "Travellers usually require an electronic visa in advance.",
  },

  // fallback demo for any passport going to Barbados
  // (if you want, you can remove this once you fill in real pairs)
  "XX-BB": {
    status: "Visa-free (example)",
    notes: "Demo record showing how other passports could be mapped.",
  },
};
