// app/arton-capital/board-of-advisors/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ADVISORS, type Advisor } from "@data/advisors";
import { cn } from "@/lib/utils";

// shadcn/ui
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// ✅ HERO image from the original Arton HTML
// If you want local instead, download it into /public/images/team/Team-slider-1.jpg
// and switch to: const HERO_IMAGE = "/images/team/Team-slider-1.jpg";
const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg";

export default function BoardOfAdvisorsPage() {
  const [active, setActive] = useState<Advisor | null>(null);
  const advisors = useMemo(() => ADVISORS ?? [], []);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className={cn(
          "relative w-full overflow-hidden",
          "h-[220px] md:h-[280px] lg:h-[320px]"
        )}
      >
        <Image
          src={HERO_IMAGE}
          alt="Board of Advisors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full w-full">
          <div className="container mx-auto h-full px-4">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
                Board of Advisors
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                Experienced global leaders guiding our mission to empower global
                citizenship.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-white/80 md:text-sm">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href="/arton-capital" className="hover:text-white">
                  Arton Capital
                </Link>
                <span>/</span>
                <span className="text-white">Board of Advisors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">
              Meet the Board
            </h2>
            <p className="mt-1 text-sm text-neutral-600 md:text-base">
              Strategic advisors across finance, government, real estate, and
              global mobility.
            </p>
          </div>
        </div>

        {/* GRID */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a) => (
            <li key={a.id}>
              <Card className="group overflow-hidden rounded-2xl border-neutral-200 shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[4/3] w-full bg-neutral-100">
                  <Image src={a.image} alt={a.name} fill sizes="400px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                </div>

                <CardContent className="p-4">
                  <h3 className="text-base font-semibold text-neutral-900 md:text-lg">
                    {a.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-600">{a.role}</p>

                  {a.location && (
                    <p className="mt-1 text-xs text-neutral-500">
                      {a.location}
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <Button
                      variant="secondary"
                      className="rounded-full"
                      onClick={() => setActive(a)}
                    >
                      View Profile
                    </Button>

                    {a.email && (
                      <a
                        href={`mailto:${a.email}`}
                        className="text-xs font-medium text-neutral-700 underline-offset-2 hover:underline"
                      >
                        Email
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      {/* PROFILE DIALOG */}
      <Dialog open={!!active} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent className="max-w-3xl rounded-2xl p-0">
          {active && (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative min-h-[260px] bg-neutral-100 md:min-h-full">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-xl md:text-2xl">
                    {active.name}
                  </DialogTitle>
                </DialogHeader>

                <p className="mt-1 text-sm font-medium text-neutral-700">
                  {active.role}
                </p>

                {active.location && (
                  <p className="mt-1 text-xs text-neutral-500">
                    {active.location}
                  </p>
                )}

                {active.email && (
                  <p className="mt-3 text-sm">
                    <span className="text-neutral-500">Can be reached at </span>
                    <a
                      href={`mailto:${active.email}`}
                      className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                    >
                      {active.email}
                    </a>
                  </p>
                )}

                {!!active.bio && (
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700">
                    {active.bio.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}

                {active.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {active.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 hover:bg-neutral-50"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
