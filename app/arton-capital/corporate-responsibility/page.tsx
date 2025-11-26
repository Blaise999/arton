// app/arton-capital/corporate-responsibility/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import ContactFab from "@/components/ContactFab";

export const metadata: Metadata = {
  title: "Corporate Responsibility",
  description:
    "We have developed a model that keeps our corporate consciousness alert in every single act of our global performance.",
};

export default function CorporateResponsibilityPage() {
  return (
    <main className="bg-[#f7f7f7] text-[#444]">
      {/* Dark premium hero */}
      <section className="relative isolate overflow-hidden">
        {/* base dark gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#050608] via-[#0b0d10] to-[#0f1216]" />

        {/* subtle radial glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(204,153,102,0.18),transparent_60%),radial-gradient(60%_50%_at_10%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

        {/* soft vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-4 h-[2px] w-16 bg-gradient-to-r from-transparent via-[#cc9966] to-transparent" />
            <h1
              className="
                text-white
                text-3xl md:text-5xl
                font-semibold
                tracking-[0.12em]
                uppercase
                leading-tight
              "
            >
              Corporate Responsibility
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/70 leading-relaxed">
              A living framework for ethical performance, sustainable development,
              and social good.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <hr className="mb-8 border-black/10" />

        <div className="space-y-5 text-[#666] leading-relaxed">
          <p>
            We have developed a model that keeps our corporate consciousness alert in every
            single act of our global performance. We keep this model alive and diligently
            improve it. We address the issues of the ever-changing business, and we are
            committed to its sustainable development. In our pursuit to maintain the
            highest industry standards and to always be driven by business ethics, we
            advocate openness, transparency and confidentiality.
          </p>

          <p>
            We realize that globalization requires adequate strategies to address all
            industry issues, and we are determined in our objective to create a platform
            for open and constructive discussion between all relevant stakeholders in the
            investment for citizenship industry — with the ultimate goal of empowering
            global citizenship. To this end we created the Global Citizen Forum. The first
            edition was held in September 2013, and proved to be a great success. Find out
            more about the next editions and how to subscribe at{" "}
            <a
              href="https://www.globalcitizenforum.org"
              target="_blank"
              rel="noreferrer"
              className="text-[#b7895c] underline decoration-black/20 underline-offset-4 hover:text-[#9f6f45]"
            >
              www.globalcitizenforum.org
            </a>
            .
          </p>

          <p>
            Along the way we realized that our responsibilities must go beyond as we strive
            for more than just mere excellence in what we do. We want to be useful not only
            to our partners and clients.
          </p>

          <p>
            This is how the idea to establish a charitable company was born. We are proud
            to announce that Arton Capital is among the partners of the Global Citizen
            Foundation. The foundation focuses on the development and implementation of
            distinctive philanthropy programs with a focus on education and education
            policy worldwide as well as contribution to the next generation of leaders.
            Arton Capital is eager to further contribute to social good and has developed a
            strategy to become more and more involved in the development of a sustainable
            society. As part of this strategy our team members volunteer in the activity of
            the Global Citizen Foundation. The company itself is engaging with fundraising
            activities as well, and commits to matching the donations made to the foundation
            by Arton Capital’s partners and clients. Become a part of positive future change
            and join our causes at{" "}
            <a
              href="https://global-citizen.org"
              target="_blank"
              rel="noreferrer"
              className="text-[#b7895c] underline decoration-black/20 underline-offset-4 hover:text-[#9f6f45]"
            >
              www.global-citizen.org
            </a>
            .
          </p>
        </div>

        <hr className="mt-10 border-black/10" />
      </section>

      {/* Footer top strip */}
      <section className="bg-[#e9e9e9]">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-[#333]">
            Do you receive our monthly Global Citizen Newswire?
          </p>

          <a
            href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
          >
            <Image
              src="https://www.artoncapital.com/wp-content/themes/artoncapital/images/subscribe_button.jpg"
              width={90}
              height={22}
              alt="Subscribe"
              className="rounded-sm"
            />
          </a>
        </div>
      </section>

      {/* Floating Contact FAB */}
      <ContactFab />
    </main>
  );
}
