// lib/fbPixel.ts
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || ''

// Standard pageview event
export const pageview = (url: string) => {
  if (!FB_PIXEL_ID) return
  // @ts-ignore
  window.fbq('track', 'PageView')
}

// Custom event helper
export const event = (name: string, options: Record<string, any> = {}) => {
  if (!FB_PIXEL_ID) return
  // @ts-ignore
  window.fbq('track', name, options)
}
