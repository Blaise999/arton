// app/.../ContactPixelEvents.tsx
"use client";

import { useEffect } from "react";
import { event } from "@/libs/metaPixel"; // note: lib, not libs

export function ContactPixelEvents() {
  useEffect(() => {
    event("Contact"); // Meta standard Contact event
  }, []);

  return null;
}
