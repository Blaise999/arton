// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleTranslateLoader } from "@/components/GoogleTranslateLoader";
import ChatWidget from "@/components/support/ChatWidget";
import { VisitTracker } from "@/components/VisitTracker";
import { MetaPixelRouteTracker } from "./MetaPixelRouteTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "artoncapital — Global Residency & Citizenship",
  description:
    "artoncapital helps investors, partners, and governments design and access global residency and citizenship programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
      >
        {/* 🔥 Meta Pixel base code – MUST be in body so Next runs it */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3224981534335896');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* 🔁 SPA route tracking */}
        <MetaPixelRouteTracker />

        {/* No-script fallback for Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3224981534335896&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <GoogleTranslateLoader />
        <VisitTracker />

        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>

        <ChatWidget />
      </body>
    </html>
  );
}
