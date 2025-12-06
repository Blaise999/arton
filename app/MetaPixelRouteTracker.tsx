// app/MetaPixelRouteTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MetaPixelRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    // Debug: you can see this in your browser console
    console.log("[MetaPixelRouteTracker] PageView for", pathname);

    // Fire Meta PageView
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
