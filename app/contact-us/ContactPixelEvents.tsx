"use client";

import { useEffect } from "react";
import { fbq } from "@/libs/fbq";

export function ContactPixelEvents() {
  useEffect(() => {
    // Standard Meta event for contact pages
    fbq("track", "Contact");
  }, []);

  return null;
}
