// app/MetaPixelRouteTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/libs/metaPixel";

export function MetaPixelRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    pageview();
  }, [pathname]);

  return null;
}
