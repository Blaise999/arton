// app/passport-index/components/FloatingContact.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative flex flex-col items-end gap-2">
        {open && (
          <>
            <IconButton
              href="contact-us"
              label="Call"
              icon="📞"
            />
            <IconButton
              href="/contact-us/"
              label="Email"
              icon="✉️"
            />
            <IconButton
              href="contact-us"
              label="WhatsApp"
              icon="💬"
              external
            />
          </>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#cc9966] text-lg text-white shadow-lg hover:bg-black"
          aria-label="Contact menu"
        >
          {open ? "✕" : "☎"}
        </button>
      </div>
    </div>
  );
}

function IconButton({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}) {
  const Comp: any = external ? "a" : Link;
  return (
    <Comp
      href={href}
      target={external ? "_blank" : undefined}
      className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:border-[#cc9966]"
    >
      <span className="text-sm">{icon}</span>
      <span className="opacity-80 group-hover:opacity-100">{label}</span>
    </Comp>
  );
}
