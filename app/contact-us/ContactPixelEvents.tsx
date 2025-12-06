// app/contact/ContactPixelEvents.tsx
"use client";

import { useEffect } from "react";
import { event } from "@/libs/metaPixel";

export function ContactPixelEvents() {
  useEffect(() => {
    event("Contact"); // Meta standard Contact event
  }, []);

  return null;
}
