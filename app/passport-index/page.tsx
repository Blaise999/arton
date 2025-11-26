// app/passport-index/page.tsx
import type { Metadata } from "next";
import PassportIndexPage from "./PassportIndexPage";

export const metadata: Metadata = {
  title: "Discover Your Passport Power & Visa-Free Travel Options",
  description:
    "Find out how powerful your passport is with The Passport Index. Compare rankings, track visa policies, and enhance your global mobility.",
  alternates: {
    canonical: "/passport-index",
  },
  openGraph: {
    title: "Discover Your Passport Power & Visa-Free Travel Options",
    description:
      "Find out how powerful your passport is with The Passport Index. Compare rankings, track visa policies, and enhance your global mobility.",
    url: "/passport-index",
    type: "article",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2019/07/Passport-Index-2016-Custom-001.jpg",
        width: 3840,
        height: 2400,
        alt: "Passport Index",
      },
    ],
  },
};

export default function Page() {
  return <PassportIndexPage />;
}
