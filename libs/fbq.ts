// lib/fbq.ts
export const FB_PIXEL_ID = "3224981534335896"; // optional, if you ever need it

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

/**
 * Safe wrapper around window.fbq
 */
export function fbq(...args: any[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}
