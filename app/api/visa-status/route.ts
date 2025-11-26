// app/api/visa-status/route.ts
import { NextRequest, NextResponse } from "next/server";
import { VISA_DATA } from "@/lib/passportIndexData";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pof = url.searchParams.get("pof") || "";
  const gto = url.searchParams.get("gto") || "";

  if (!pof || !gto) {
    return NextResponse.json(
      { error: "Missing parameters 'pof' and/or 'gto'." },
      { status: 400 }
    );
  }

  const key = `${pof.toUpperCase()}-${gto.toUpperCase()}`;
  const record = VISA_DATA[key];

  if (!record) {
    // No local record → graceful fallback
    return NextResponse.json({
      status: "Unknown (not in local dataset)",
      notes:
        "We don't have this pair in the local dataset. Use Explore / Compare buttons for the official, real-time rules.",
    });
  }

  return NextResponse.json(record, { status: 200 });
}
