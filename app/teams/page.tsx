// app/teams/page.tsx
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

import { TEAM, type TeamMember } from "../data/team";

/**
 * Simple Team page (Arton "Meet the Team" inspired)
 * - No location filters or tags
 * - Smaller hero w/ real slider image
 * - Hero text perfectly centered (both axes)
 * - Bigger grid cards showing image + name + role + overview
 * - Click card → modal with full bio + email
 */

const HERO_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg";

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Hero (smaller + centered text) */}
      <section className="relative isolate">
        <div
          className="h-[260px] md:h-[320px] lg:h-[360px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* dark overlay so text pops */}
        <div className="absolute inset-0 bg-black/55" />

        {/* centered content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="mx-auto w-full max-w-5xl px-5 md:px-10">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Over 100 people, from 15 offices, living 5 values, for 1 goal.
            </h1>
            <p className="mt-3 text-sm md:text-base lg:text-lg text-white/90">
              Empowering Global Citizenship
            </p>
          </div>
        </div>
      </section>

      {/* Team intro */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 pt-10 md:pt-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Meet our Global Team
          </h2>
          <p className="mt-2 text-sm md:text-base text-black/70">
            A worldwide group of advisors, legal experts, and program leaders
            dedicated to helping individuals and families access global
            opportunities.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <TeamCard key={m.id} member={m} onSelect={() => setSelected(m)} />
          ))}
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="bg-[#efe7df] border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-7 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm md:text-lg font-medium">
            Do you receive our monthly Global Citizen Newswire?
          </p>
          <Button className="rounded-none bg-[#b07a4a] hover:bg-[#925f34] text-white px-6">
            Subscribe
          </Button>
        </div>
      </section>

      {/* Bio Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selected && (
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-[#111]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover min-h-[280px] md:min-h-[360px]"
                />
              </div>
              <div className="md:col-span-3 p-7 md:p-10 bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-semibold">
                    {selected.name}
                  </DialogTitle>
                  <p className="text-base md:text-lg text-black/70 mt-1">
                    {selected.title}
                  </p>
                </DialogHeader>

                {selected.email && (
                  <div className="mt-5 text-sm md:text-base">
                    <div className="font-semibold">Contact</div>
                    <a
                      href={`mailto:${selected.email}`}
                      className="inline-flex items-center gap-2 text-[#8a5a2b] hover:underline mt-1"
                    >
                      <Mail className="w-4 h-4" />
                      {selected.email}
                    </a>
                  </div>
                )}

                <Separator className="my-6" />

                <div className="prose prose-base max-w-none text-black/80">
                  <p>{selected.bio}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ---- Card ----

function TeamCard({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="group text-left bg-white border border-black/10 hover:border-black/30 transition overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/5] bg-[#e9e9ea]">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text under image */}
      <div className="p-4 md:p-5">
        <div className="font-semibold text-base md:text-lg leading-tight">
          {member.name}
        </div>
        <div className="text-sm md:text-base text-black/70 mt-1">
          {member.title}
        </div>
        <p className="text-sm md:text-base text-black/70 mt-3 line-clamp-3">
          {member.overview}
        </p>
      </div>
    </button>
  );
}
