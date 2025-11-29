// app/api/track-visit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/libs/supabaseClient";

export async function POST(req: NextRequest) {
  try {
    const { pathname } = await req.json().catch(() => ({ pathname: "/" }));

    const forwardedFor =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "";
    const ip = forwardedFor.split(",")[0].trim() || "unknown";

    const userAgent = req.headers.get("user-agent") || null;

    let city: string | null = null;
    let region: string | null = null;
    let country: string | null = null;
    let country_code: string | null = null;

    if (
      ip !== "unknown" &&
      ip !== "::1" &&
      !ip.startsWith("127.") &&
      !ip.startsWith("10.") &&
      !ip.startsWith("192.168.")
    ) {
      try {
        const res = await fetch(`https://ipapi.co/${ip}/json/`, {
          cache: "no-store",
        });

        if (res.ok) {
          const data = await res.json();
          city = data.city ?? null;
          region = data.region ?? null;
          country = data.country_name ?? null;
          country_code = data.country ?? null;
        }
      } catch (err) {
        console.error("Geo lookup failed", err);
      }
    }

    const { error } = await supabase.from("visits").insert({
      ip,
      city,
      region,
      country,
      country_code,
      path: pathname,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Error inserting visit:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to log visit" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("track-visit error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
