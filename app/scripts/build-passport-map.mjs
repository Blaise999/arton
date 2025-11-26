// app/scripts/build-passport-map.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// project root = /app/scripts -> /app -> root
const ROOT = path.resolve(__dirname, "..", "..");

const inputPath = path.join(
  ROOT,
  "data/passport-index/raw/passport-index-tidy-iso2.csv"
);

// ✅ NEW output name so we don’t keep reading old JSON by mistake
const outputPath = path.join(
  ROOT,
  "data/passport-index-copy/passport-map-built.json"
);

if (!fs.existsSync(inputPath)) {
  console.error("❌ Input CSV not found at:", inputPath);
  process.exit(1);
}

// ---------------- CSV PARSER (handles quotes + commas inside quotes) ---------
function parseCsvLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    const next = line[i + 1];

    if (ch === '"' && next === '"') {
      cur += '"';
      i++;
      continue;
    }
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += ch;
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

function normalizeRequirement(reqRaw) {
  const r = String(reqRaw ?? "").toLowerCase().trim();

  if (!r) return "visa required";

  if (r === "visa free" || /^\d+$/.test(r) || r.includes("free"))
    return "visa free";
  if (r.includes("on arrival")) return "visa on arrival";
  if (r.includes("e-visa") || r.includes("evisa")) return "e-visa";
  if (r.includes("eta")) return "eta";
  if (r.includes("required")) return "visa required";
  if (r.includes("no admission")) return "no admission";

  return "visa required";
}

// read CSV
const raw = fs.readFileSync(inputPath, "utf8");
const lines = raw.split(/\r?\n/).filter(Boolean);

// header
const header = parseCsvLine(lines.shift() || "");
const passportIdx = header.findIndex((h) => h.toLowerCase() === "passport");
const destIdx = header.findIndex((h) => h.toLowerCase() === "destination");
const reqIdx = header.findIndex(
  (h) =>
    h.toLowerCase() === "requirement" ||
    h.toLowerCase() === "access"
);

// fallback positions if header not tidy
const pI = passportIdx >= 0 ? passportIdx : 0;
const dI = destIdx >= 0 ? destIdx : 1;
const rI = reqIdx >= 0 ? reqIdx : 2;

const map = {}; // { [passportISO2]: { [destISO2]: requirement } }

for (const line of lines) {
  const parts = parseCsvLine(line);
  if (parts.length < 3) continue;

  const passport = (parts[pI] || "").toUpperCase();
  const destination = (parts[dI] || "").toUpperCase();
  const requirementRaw = parts[rI];

  if (!passport || !destination) continue;

  if (!map[passport]) map[passport] = {};
  map[passport][destination] = normalizeRequirement(requirementRaw);
}

// convert to your JSON shape
const passports = Object.keys(map)
  .sort()
  .map((passportCode) => {
    const destinations = Object.entries(map[passportCode])
      .map(([destCode, access]) => ({
        code: destCode,
        access, // ✅ real label now, never ""
      }))
      .sort((a, b) => a.code.localeCompare(b.code));

    return { code: passportCode, destinations };
  });

const out = {
  generatedAt: new Date().toISOString(),
  passports,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(out, null, 2), "utf8");

console.log("✅ Built NEW file with access:", outputPath);
console.log(
  "Sample row:",
  out.passports?.[0]?.destinations?.slice(0, 5)
);
