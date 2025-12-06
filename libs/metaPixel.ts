// lib/metaPixel.ts
export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "3224981534335896";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Guard: are we on the client and does fbq exist?
const hasFbq = (): boolean =>
  typeof window !== "undefined" && typeof window.fbq === "function";

// Standard pageview event
export const pageview = () => {
  if (!FB_PIXEL_ID || !hasFbq()) return;
  window.fbq!("track", "PageView");
};

// Custom event helper
export const event = (name: string, options: Record<string, any> = {}) => {
  if (!FB_PIXEL_ID || !hasFbq()) return;
  window.fbq!("track", name, options);
};

// Optional: direct fbq wrapper if you want it
export const fbq = (...args: any[]) => {
  if (!hasFbq()) return;
  window.fbq!(...args);
};
