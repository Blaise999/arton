// lib/fbPixel.ts
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

const hasWindow = () => typeof window !== "undefined";

export const pageview = (url?: string) => {
  if (!FB_PIXEL_ID) return;
  if (!hasWindow()) return;

  const w = window as any;
  if (!w.fbq) return;

  w.fbq("track", "PageView", url ? { url } : undefined);
};

export const event = (name: string, options: Record<string, any> = {}) => {
  if (!FB_PIXEL_ID) return;
  if (!hasWindow()) return;

  const w = window as any;
  if (!w.fbq) return;

  w.fbq("track", name, options);
};
