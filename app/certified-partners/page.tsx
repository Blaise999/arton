// app/certified-partners/page.tsx

export const metadata = {
  title: "Certified Partners - Join the Global Citizenship movement",
  description:
    "Arton has developed a global network of Certified Partners who enables us to communicate directly with client facilitators and receive immediate response to new market initiatives.",
};

const hero = {
  image:
    "https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg",
  title: "Become a Certified Partner",
  subtitle:
    "Join the global citizenship movement so we can empower future generations together",
};

export default function CertifiedPartnersPage() {
  return (
    <main className="min-h-screen bg-black text-[#333]">
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: "380px" }}
      >
        <img
          src={hero.image}
          alt={hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="mb-4 text-[13px] sm:text-sm font-semibold tracking-[0.35em] text-white/80 uppercase">
              It&apos;s all about access
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-semibold text-white leading-tight">
              {hero.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl italic text-[#cc9966]">
              Join the global citizenship movement
              <br className="hidden sm:block" />
              so we can empower future generations together
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          {/* Intro quote */}
          <p className="mb-10 text-sm leading-relaxed text-[#555] text-center italic">
            “Broad partnerships are the key to solving broad challenges.”
            <br />
            <span className="mt-1 inline-block not-italic font-semibold text-[#777]">
              – Ban Ki Moon, Secretary-General, United Nations
            </span>
          </p>

          {/* Global Citizenship for Certified Partners */}
          <section className="space-y-5">
            <h3 className="text-xl font-semibold tracking-wide text-[#333]">
              Global Citizenship for Certified Partners
            </h3>
            <p className="text-sm leading-relaxed text-[#555]">
              The concept of becoming a global citizen through alternative
              residency and citizenship has gathered quite a lot of traction in
              the past ten years, and we expect it to double in the mid term.
              With this surge in demand, the market needs focused service
              providers, such as migration consultants, financial and legal
              advisors, wealth managers, family offices and others, who are at
              the core of our Certified Partner network.
            </p>
            <p className="text-sm leading-relaxed text-[#555]">
              Global residence and citizenship programs have earned their place
              in the portfolio of products investment advisors offer to high net
              worth individuals due to the often priceless return on investment
              in a variety of instruments. More importantly, global citizenship
              involves an intricate understanding of the global migration
              processes, since the decision-making factors are weighted after a
              multilayered analysis of all benefits and opportunities. To these
              sophisticated applicants, becoming a global citizen is more than a
              simple investment transaction, and their trusted advisors must be
              able to read the complex structure of their personal rationale.
            </p>
          </section>

          {/* Arton’s commitment */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Arton&apos;s commitment
            </h4>
            <p className="text-sm leading-relaxed text-[#555]">
              Integrity. This is the single best word to describe our approach
              to the industry and our relations with our Certified Partners.
              Over the years Arton has built, and maintains, an extensive network
              of partners and agents who are certified to promote our products
              and services. Our partners have around-the-clock, global
              personalized support from our dedicated relationship managers whose
              goal is to build long-lasting relationships. We are proud to say
              that 97 percent of our initial relationships remain true to date.
            </p>
          </section>

          {/* Benefits of working with Arton */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Benefits of working with Arton
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#555]">
              <li>
                Complimentary one-year membership to Quintessentially, the
                world’s premier concierge service to qualified partners.
              </li>
              <li>
                Program information suite, including information materials,
                templates and guidelines, as well as regular training sessions
                and events to enable our partners to stay informed and up to
                date in the dynamic field of investment immigration. Our
                partners offer their clients first-class service.
              </li>
              <li>
                Access to a modern, secure, custom-built software platform to
                manage and follow the status of every client at any given time
                in the application process.
              </li>
              <li>
                Complete packages of information and promotional materials as
                well as clear guidance on the different procedures and steps for
                the most effective service.
              </li>
              <li>
                Complementary access to publications by Arton and available new
                regulations on the subject of investment immigration.
              </li>
              <li>
                Interactive tools and benchmarks to compare the different
                products and walk clients through the process.
              </li>
              <li>
                Trusted guidance in the areas of background and financial
                verification alongside security assessments through our solid
                partnerships with leading risk intelligence firms.
              </li>
              <li>
                Privileged access to the Global Citizen Forum, the industry’s
                leading conference designed to educate and promote the benefits
                of global citizenship.
              </li>
              <li>
                Access to complimentary training seminars hosted around the
                world.
              </li>
              <li>
                Complementary subscription to Global Citizen magazine, the
                industry’s leading lifestyle and business publication.
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-8">
            <p className="text-sm leading-relaxed text-[#555] text-center">
              Contact us today to learn how to become a member of the growing
              global citizenship movement.&nbsp;
              <a
                href="https://www.artoncapitals.com/become-a-certified-partner/"
                className="font-semibold text-[#cc9966] underline"
              >
                Become a Certified Partner now.
              </a>
            </p>
          </section>

          {/* Testimonial */}
          <section className="mt-10">
            <p className="text-sm leading-relaxed text-[#555] text-center italic">
              “Arton’s expertise on the international business level is unique.
              Not only are they able to demonstrate the best of a country’s
              investment potential, they also master the specific socio-economic
              relations in our part of the world to offer extremely relevant
              advice and guidance to business development while at the same time
              keep their very strong human touch.”
              <br />
              <span className="mt-1 inline-block not-italic font-semibold text-[#777]">
                – Sikander Lalani, CEO, Lalani &amp; Associates, Certified
                Partner since 2009
              </span>
            </p>
          </section>

          {/* About the certification procedure */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              About the certification procedure
            </h4>
            <p className="text-sm leading-relaxed text-[#555]">
              We are contacted on a daily basis for new partnership
              opportunities. As a result, we have put in place a qualification
              procedure to assure a consistent level of high-quality service.
            </p>
            <p className="text-sm leading-relaxed text-[#555]">
              Qualified Certified Partners are issued certificates that are
              renewed every year following a board review.&nbsp;
              <a
                href="https://www.artoncapitals.com/become-a-certified-partner/"
                className="font-semibold text-[#cc9966] underline"
              >
                Contact us
              </a>{" "}
              for more details and discover how much you can grow your business
              through Arton’s diversified products and services.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

