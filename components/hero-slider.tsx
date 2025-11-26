"use client";

import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "IT'S ALL ABOUT ACCESS",
    subtitle: "Access a world of visa-free travel and global mobility",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Access.jpg",
  },
  {
    id: 2,
    title: "IT'S ALL ABOUT FREEDOM",
    subtitle:
      "Freedom of mind to focus on what’s important for you and your family",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Bridge.jpg",
  },
  {
    id: 3,
    title: "IT'S ALL ABOUT SECURITY",
    subtitle: "Secure a better and safer future for your family",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2023/10/Arton-slider-Security.jpg",
  },
  {
    id: 4,
    title: "IT'S ALL ABOUT OPPORTUNITY",
    subtitle: "Expand your horizons and unlock unimaginable possibilities",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2023/10/Arton-slider-Opportunity.jpg",
  },
  {
    id: 5,
    title: "IT'S ALL ABOUT YOUR FUTURE",
    subtitle: "Realize your dreams and build the future you desire",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2023/10/Arton-slider-Future.jpg",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrent(slider.track.details.rel);
    },
  });

  const goTo = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
  };

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <section
      aria-label="Hero slider"
      className="relative w-full bg-black text-white"
    >
      {/* height tuned to feel like Arton, not full fullscreen huge */}
      <div
        ref={sliderRef}
        className="keen-slider h-[68vh] min-h-[420px] max-h-[640px]"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative flex items-center justify-center overflow-hidden"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Softer overlay so image still breathes */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.4)_0,_transparent_55%)]" />
            </div>

            {/* Text content */}
            <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-4 text-center">
              {/* Main title – uppercased, spaced out, not too heavy */}
              <h2 className="mt-4 text-[1.7rem] md:text-[2.1rem] lg:text-[2.4rem] font-light tracking-[0.42em] uppercase leading-[1.5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                {slide.title}
              </h2>

              {/* Subtitle – italic serif, warm gold */}
              <p className="mt-6 max-w-4xl text-[1.05rem] md:text-[1.2rem] lg:text-[1.3rem] font-normal italic leading-relaxed text-[#d3a163] drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] font-serif">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Left / right arrows */}
      <button
        type="button"
        onClick={prev}
        className="group absolute left-6 top-1/2 hidden -translate-y-1/2 transform items-center justify-center rounded-full border border-white/60 bg-black/35 p-3 transition hover:bg-black/70 md:flex"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button
        type="button"
        onClick={next}
        className="group absolute right-6 top-1/2 hidden -translate-y-1/2 transform items-center justify-center rounded-full border border-white/60 bg-black/35 p-3 transition hover:bg-black/70 md:flex"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            className="pointer-events-auto h-2 w-2 rounded-full border border-white/70 transition
              data-[active=true]:w-3 data-[active=true]:h-3 data-[active=true]:bg-white"
            data-active={current === i}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
