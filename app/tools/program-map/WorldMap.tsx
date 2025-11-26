// app/tools/program-map/WorldMap.tsx
"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";

// ✅ Import topojson directly (NO fetch)
import worldTopo from "@data/maps/world-110m.json";

export type AccessCategory =
  | "visaFree"
  | "visaOnArrival"
  | "eVisa"
  | "visaRequired";

export type AccessByCountry = Record<string, AccessCategory | undefined>;

const COLOR_MAP: Record<AccessCategory, string> = {
  visaFree: "#f5d39a",
  visaOnArrival: "#d5aa62",
  eVisa: "#947144",
  visaRequired: "#444a5a",
};

type WorldMapProps = {
  /** Map of ISO code → access category (supports ISO2 or ISO3) */
  access: AccessByCountry;
};

function getCodesFromGeo(geo: any): { iso3: string; iso2: string } {
  const props = geo?.properties ?? {};

  const rawIso3: string =
    props.ISO_A3 ||
    props.iso_a3 ||
    props.ADM0_A3 ||
    props.adm0_a3 ||
    "";

  const rawIso2: string =
    props.ISO_A2 ||
    props.iso_a2 ||
    props["Alpha-2"] ||
    "";

  const iso3 = (rawIso3 || "").toUpperCase();
  let iso2 = (rawIso2 || "").toUpperCase();
  if (iso2 === "-99") iso2 = "";

  return { iso3, iso2 };
}

export default function WorldMap({ access }: WorldMapProps) {
  return (
    <div className="w-full">
      <div className="w-full border border-neutral-800 rounded-lg bg-black/40">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 160 }}
          style={{ width: "100%", height: "auto" }}
        >
          {/* ✅ Pass the imported topojson object */}
          <Geographies geography={worldTopo as any}>
            {({ geographies }: { geographies: any[] }) => {
              if (!geographies?.length) {
                return (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="12"
                  >
                    World file not loaded
                  </text>
                );
              }

              return geographies.map((geo, i) => {
                const { iso3, iso2 } = getCodesFromGeo(geo);

                const cat =
                  (iso3 && access[iso3]) ||
                  (iso2 && access[iso2]);

                const fill = cat ? COLOR_MAP[cat] : "#20232b";

                return (
                  <Geography
                    key={geo.id || geo.rsmKey || iso3 || iso2 || `geo-${i}`}
                    geography={geo}
                    style={{
                      default: {
                        fill,
                        outline: "none",
                        stroke: "#181b22",
                        strokeWidth: 0.4,
                      },
                      hover: { fill: "#f5d39a", outline: "none" },
                      pressed: { fill: "#d5aa62", outline: "none" },
                    }}
                  />
                );
              });
            }}
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
}
