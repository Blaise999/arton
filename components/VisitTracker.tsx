// app/components/VisitTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/libs/supabaseClient";

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    async function logVisit() {
      try {
        // Get IP + location based on the browser's request
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) {
          console.warn("Geo lookup failed", await res.text());
          return;
        }

        const data = await res.json();

        const ip = data.ip ?? null;
        const city = data.city ?? null;
        const region = data.region ?? null;
        const country = data.country_name ?? null;
        const country_code = data.country ?? null;
        const user_agent = navigator.userAgent ?? null;

        const { error } = await supabase.from("visits").insert({
          ip,
          city,
          region,
          country,
          country_code,
          path: pathname || "/",
          user_agent,
        });

        if (error) {
          console.error("Error inserting visit:", error);
        }
      } catch (err) {
        console.error("VisitTracker failed:", err);
      }
    }

    logVisit();
  }, [pathname]);

  return null;
}
