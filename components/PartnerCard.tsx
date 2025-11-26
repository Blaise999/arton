// components/PartnerCard.tsx
import Image from "next/image";

export type Partner = {
  name: string;
  logo: string;
  href: string;
  blurb?: string;
  body: string[];
  wideLogo?: boolean;
};

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="bg-white border border-black/10 rounded-md p-6 shadow-sm">
      <div className="flex flex-col items-center text-center gap-3">
        <div className={partner.wideLogo ? "w-[220px]" : "w-[140px]"}>
          <Image
            src={partner.logo}
            width={partner.wideLogo ? 300 : 150}
            height={150}
            alt={partner.name}
            className="mx-auto object-contain"
          />
        </div>

        <div className="w-10 border-b border-black/20" />

        <h3 className="text-lg font-semibold tracking-wide text-[#3a3a3a]">
          {partner.name}
        </h3>

        {partner.blurb && (
          <p className="text-sm text-[#666]">{partner.blurb}</p>
        )}
      </div>

      <div className="mt-4 space-y-3 text-sm text-[#555] leading-relaxed">
        {partner.body.map((line, i) => (
          <p key={i}>{line}</p>
        ))}

        <p className="pt-2">
          <a
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            className="text-[#8b5a2b] hover:underline break-all"
          >
            {partner.href}
          </a>
        </p>
      </div>
    </article>
  );
}
