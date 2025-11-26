// app/api/program-map/route.ts
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// If you want it to be fully static at build time, you can also use
//   export const dynamic = "force-static";
// but it's optional here.
export const dynamic = "force-static";

export async function GET(_req: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      "app",
      "data",
      "passport-index",
      "passport-map.json",
    );

    const file = await fs.readFile(filePath, "utf8");
    const json = JSON.parse(file);

    return NextResponse.json(json, { status: 200 });
  } catch (err) {
    console.error("Error reading passport-map.json", err);
    return NextResponse.json(
      { error: "Failed to load passport map data" },
      { status: 500 },
    );
  }
}
