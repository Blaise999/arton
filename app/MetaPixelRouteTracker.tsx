// app/MetaPixelRouteTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/libs/metaPixel";

export function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Fire a PageView on every route change
    pageview();
  }, [pathname, searchParams]);

  return null;
}
