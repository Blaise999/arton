"use client";

import React, { useEffect, useMemo, useRef } from "react";
import type { TimelineEvent } from "@data/timelineEvents";

type Props = {
  events: TimelineEvent[];
};

export default function Timeline({ events }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const years = useMemo(() => {
    const uniq = Array.from(new Set(events.map((e) => e.year)));
    return uniq.sort((a, b) => b - a);
  }, [events]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-event]")
    );

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) {
            const el = ent.target as HTMLElement;
            el.dataset.reveal = "true";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8 py-14"
    >
      {/* vertical line */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-1/2 w-[2px]
          -translate-x-1/2 bg-[#cc9966]/55
          max-[820px]:left-[22px] max-[820px]:translate-x-0
        "
        aria-hidden
      />

      <div className="space-y-6">
        {years.map((year) => {
          const yearEvents = events.filter((e) => e.year === year);

          return (
            <div key={year}>
              {/* year pill */}
              <div className="relative z-10 flex justify-center py-3">
                <div
                  className="
                    rounded-full border border-[#cc9966]
                    bg-[#111] px-4 py-1.5 text-[14px] font-bold tracking-[0.08em]
                    text-[#cc9966] shadow-md
                  "
                >
                  {year}
                </div>
              </div>

              {/* events for year */}
              <div className="space-y-5">
                {yearEvents.map((e, idx) => {
                  const isLeft = idx % 2 === 1;

                  return (
                    <article
                      key={`${e.year}-${e.month}-${idx}`}
                      data-event
                      data-reveal="true"  // ✅ reveal by default so never empty
                      className="
                        group relative grid min-h-[110px] grid-cols-[1fr_80px_1fr] items-center
                        max-[820px]:min-h-0 max-[820px]:grid-cols-[44px_1fr]
                        max-[820px]:items-start max-[820px]:gap-x-3
                      "
                    >
                      {/* left column */}
                      <div className="col-[1] flex justify-end pr-2 max-[820px]:col-[2] max-[820px]:pr-0 max-[820px]:justify-start">
                        {isLeft ? (
                          <Card title={e.title} text={e.text} side="left" />
                        ) : (
                          <div className="invisible">.</div>
                        )}
                      </div>

                      {/* middle column */}
                      <div className="col-[2] z-10 flex flex-col items-center gap-2 max-[820px]:col-[1]">
                        <div
                          className="
                            h-[18px] w-[18px] rounded-full border-[3px] border-[#cc9966] bg-white
                            shadow-[0_0_0_4px_rgba(204,153,102,0.12)]
                          "
                          aria-hidden
                        />
                        <div className="whitespace-nowrap rounded-md border border-zinc-200 bg-white px-2 py-1 text-[13px] text-zinc-900 shadow-sm">
                          {e.month}, {e.year}
                        </div>
                      </div>

                      {/* right column */}
                      <div className="col-[3] flex justify-start pl-2 max-[820px]:col-[2] max-[820px]:pl-0">
                        {!isLeft ? (
                          <Card title={e.title} text={e.text} side="right" />
                        ) : (
                          <div className="invisible">.</div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        [data-event] .card {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        [data-event][data-reveal="true"] .card {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}

function Card({
  title,
  text,
  side,
}: {
  title: string;
  text: string;
  side: "left" | "right";
}) {
  return (
    <div
      className="
        card relative max-w-[480px] rounded-xl border border-zinc-200 bg-zinc-50
        px-5 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)]
      "
    >
      <h3 className="mb-2 text-[22px] font-bold tracking-tight text-[#b8834f]">
        {title}
      </h3>
      <p className="text-[16px] leading-relaxed text-zinc-900">{text}</p>

      <span
        aria-hidden
        className={`
          absolute top-5 h-3 w-3 rotate-45 bg-zinc-50
          ${
            side === "left"
              ? "right-[-6px] border-l border-t border-zinc-200"
              : "left-[-6px] border-l border-t border-zinc-200"
          }
          max-[820px]:left-[-6px] max-[820px]:right-auto
        `}
      />
    </div>
  );
}
