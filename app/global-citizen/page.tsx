// app/global-citizen/page.tsx
"use client";

export default function GlobalCitizenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white">
      <main className="flex-1">
        {/* HERO / SLIDER (single slide) */}
        <section
          className="relative h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Access.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "left top",
          }}
        >
          {/* Dark overlay for legibility */}
          <div className="absolute inset-0 bg-black/40 md:bg-black/35" />

          <div className="relative h-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-4">
              ARE YOU A GLOBAL CITIZEN?
            </h1>
            <p className="text-lg md:text-xl text-[#cc9966] italic">
              Let us help you become one
            </p>
          </div>
        </section>

        {/* MAIN COPY + VIDEO */}
        <section className="bg-[#f7f7f7] text-[#333333]">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 space-y-6 leading-relaxed">
            <p>
              What is a global citizen? We have been asking ourselves this
              question with intensifying frequency over the past five years, not
              only as industry experts, but also in our roles as members of our
              respective communities, families and businesses. And we see the
              answers in these distinctive contexts coming to the same
              conclusion.
            </p>
            <p>
              Global citizens are those present and future leaders who have the
              power to change our world to make it a better place, and who are
              capable of providing for its sustainable development.
            </p>
            <p>
              We are fortunate enough to be able to recognize global citizens
              among our clients, partners and friends. And we are here to
              empower them and involve them in the global citizen movement.
            </p>
            <p className="font-semibold">
              Do you consider yourself a global citizen?
            </p>
            <p>
              Whether you are seeking{" "}
              <a
                href="https://www.artonscapitalholdings.com/residency-by-investment"
                className="text-[#cc9966] hover:underline"
              >
                permanent residency
              </a>{" "}
              or a{" "}
              <a
                href="https://www.artonscapitalholdings.com/citizenship-by-investment"
                className="text-[#cc9966] hover:underline"
              >
                second citizenship
              </a>
              , it all starts with Arton through our unparalleled range of
              innovative, bespoke investor programs and services. Learn how
              becoming a{" "}
              <a
                href="https://www.artonscapitalholdings.com/high-net-worth-investors"
                className="text-[#cc9966] hover:underline"
              >
                Global Citizen
              </a>{" "}
              can help you create the opportunities you need to make the world a
              better place for yourself, your family and for all of us.
            </p>
            <p className="font-semibold">
              Are you a professional service provider with expertise in global
              migration and wealth management?
            </p>
            <p>
              Our burgeoning industry requires focused teamwork to ensure that
              our clients receive the best service possible from the start of
              the application process through to obtainment of PR or citizenship
              and beyond. Arton Capital’s{" "}
              <a
                href="https://www.artonscapitalholdings.com/certified-partners"
                className="text-[#cc9966] hover:underline"
              >
                Certified Partner
              </a>{" "}
              network allows global citizens to have the required guidance
              whenever, wherever they need it.
            </p>
            <p className="font-semibold">
              Are you a government representative seeking to improve your
              country’s economy?
            </p>
            <p>
              Residency by investment and citizenship by investment programs
              open up an incredible revenue stream to{" "}
              <a
                href="https://www.artonscapitalholdings.com/government-agencies"
                className="text-[#cc9966] hover:underline"
              >
                governments
              </a>
              . These programs can fund much-needed infrastructure, arts and
              culture projects and provide work for local citizens, thereby
              improving the country’s economy.
            </p>
            <p className="font-semibold">
              Discover the power of global citizenship now.
            </p>

            {/* VIDEO */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-lg bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="//www.youtube.com/embed/3OctYEin2O0?rel=0"
                  loading="lazy"
                  title="Empowering Global Citizenship"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* NEWSWIRE CTA STRIP */}
        <section className="bg-[#111111] text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm md:text-base font-medium">
              Do you receive our monthly Global Citizen Newswire?
            </p>
            <div className="flex-shrink-0">
              <a
                href="https://newsletter.artoncapital.com/h/r/5239EBE9E39CD6D0"
                target="_blank"
                rel="noopener noreferrer"
                id="newsletter-signup"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold bg-[#cc9966] hover:bg:white hover:text-black rounded-md transition-colors duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
