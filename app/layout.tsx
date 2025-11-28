// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleTranslateLoader } from "@/components/GoogleTranslate"; // ⬅️ new

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artsoncapital — Global Residency & Citizenship",
  description:
    "Artsoncapital helps investors, partners, and governments design and access global residency and citizenship programs.",
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
        {/* Load Google Translate globally */}
        <GoogleTranslateLoader />

        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
