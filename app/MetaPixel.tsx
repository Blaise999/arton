// app/MetaPixel.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/libs/metaPixel";

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

interface FbqFn {
  (...args: any[]): void;
  q?: any[];
  loaded?: boolean;
}

type MetaPixelProps = {
  pixelId: string;
};

export function MetaPixel({ pixelId }: MetaPixelProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1) Load Meta Pixel script + initial PageView
  useEffect(() => {
    if (!pixelId) return;
    if (typeof window === "undefined") return;

    if (window.fbq) {
      window.fbq("track", "PageView");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    const fbq: FbqFn = (...args: any[]) => {
      (fbq.q = fbq.q || []).push(args);
    };
    fbq.q = [];
    fbq.loaded = false;

    window.fbq = fbq;
    window._fbq = fbq;

    script.onload = () => {
      fbq.loaded = true;
      window.fbq?.("init", pixelId);
      window.fbq?.("track", "PageView");
    };
  }, [pixelId]);

  // 2) Track route changes as PageView
  useEffect(() => {
    if (!pixelId) return;
    if (!pathname) return;

    const url =
      pathname +
      (searchParams && searchParams.toString()
        ? `?${searchParams.toString()}`
        : "");

    pageview(url);
  }, [pathname, searchParams, pixelId]);

  return null;
}
