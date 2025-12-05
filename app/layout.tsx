// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleTranslateLoader } from "@/components/GoogleTranslateLoader";
import ChatWidget from "@/components/support/ChatWidget";
import { VisitTracker } from "@/components/VisitTracker"; // 👈 logs all visitors
import { MetaPixel } from "./MetaPixel"; // 👈 add this

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
        {/* 🔑 Load Google Translate once for the whole app */}
        <GoogleTranslateLoader />

        {/* 🔍 Track all visitors + paths for IP/location logging */}
        <VisitTracker />

        {/* 📊 Meta Pixel – fires PageView on every route */}
        <MetaPixel />

        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>

        {/* 👇 Floating support chat widget, visible on every page */}
        <ChatWidget />
      </body>
    </html>
  );
}
