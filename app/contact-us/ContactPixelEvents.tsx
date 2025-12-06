"use client";

import { useEffect } from "react";
import { event } from "@/libs/metaPixel";

export function ContactPixelEvents() {
  useEffect(() => {
    event("Contact"); // logs a Contact event
  }, []);

  return null;
}
