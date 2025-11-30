// app/high-net-worth-investors/page.tsx

export const metadata = {
  title: "High Net Worth Investors - Residency and Citizenship",
  description:
    "Arton Capital is devoted to providing high net worth investors and their families with information and tools that will enable them to select the most suitable program for their needs and objectives.",
};

const hero = {
  image:
    "https://www.artoncapital.com/wp-content/uploads/2013/12/Arton-slider-Access.jpg",
  title: "Become a Global Citizen",
  subtitle: "Discover how global citizenship can empower your dreams",
};

const programCards = [
  {
    title: "Antigua & Barbuda",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/antigua-and-barbuda/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Antigua-Barbuda.png",
    imgAlt: "Citizenship by Investment Program for Antigua & Barbuda",
  },
  {
    title: "Dominica",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/dominica/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-Dominica.png",
    imgAlt: "Citizenship by Investment Program for Dominica",
  },
  {
    title: "Greece",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/greece-golden-visa-program/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2023/03/Arton-Greece-Brochure-Cover.jpg",
    imgAlt: "Citizenship by Investment Program for Greece",
  },
  {
    title: "Grenada",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/grenada/",
    imgSrc:
      "https://www.artonscapitalholdings.com/wp-content/uploads/2013/07/Arton-Grenada.png",
    imgAlt: "Citizenship by Investment Program for Grenada",
  },
  {
    title: "Hungary",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/hungary/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2023/04/Arton_Brochure_Hungary_cover.jpg",
    imgAlt: "Citizenship by Investment Program for Hungary",
  },
  {
    title: "Portugal",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/portugal/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2016/06/Arton_Brochure_Portugal_cover.jpg",
    imgAlt: "Citizenship by Investment Program for Portugal",
  },
  {
    title: "Saint Lucia",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/saint-lucia/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/Arton_Saint-Lucia.png",
    imgAlt: "Citizenship by Investment Program for Saint Lucia",
  },
  {
    title: "St. Kitts & Nevis",
    href: "https://www.artonscapitalholdings.com/global-citizen-programs/st-kitts-nevis/",
    imgSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/Arton-StKitts.png",
    imgAlt: "Citizenship by Investment Program for St. Kitts & Nevis",
  },
];

export default function HighNetWorthInvestorsPage() {
  return (
    <main className="min-h-screen bg-[#000] text-[#333]">
      {/* HERO */}
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ minHeight: "360px" }} // hero height
      >
        <img
          src={hero.image}
          alt={hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] font-semibold tracking-[0.18em] text-white uppercase leading-tight">
              {hero.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl italic text-[#facc15]">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
          {/* Intro quote */}
          <p className="mb-8 text-sm leading-relaxed text-[#555]">
            “In broad usage, the term global citizenship or world citizenship
            typically defines a person who places their identity with a ‘global
            community’ above their identity as a citizen of a particular nation
            or place. The idea is that one’s identity transcends geography or
            political borders and that the planetary human community is
            interdependent and whole; humankind is essentially one.”
            <span className="ml-1 font-semibold">– Wikipedia</span>
          </p>

          {/* Global citizenship for high net worth investors */}
          <section className="space-y-5">
            <h3 className="text-xl font-semibold tracking-wide text-[#333]">
              Global citizenship for high net worth investors
            </h3>
            <p className="text-sm leading-relaxed text-[#555]">
              Investing in an alternative residence and citizenship unlocks the
              potential for high net worth individuals to become global
              citizens. We have paved the way for a better, brighter and safer
              future for more than 2,000 individuals and families in the past
              five years. We understand the driving forces behind the global
              citizenship movement and we possess the grit, the knowledge and
              the extensive network of Certified Partners to empower high net
              worth individuals to join this movement.
            </p>
          </section>

          {/* Key drivers */}
          <section className="mt-8 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Key drivers for investors
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#555]">
              <li>
                <span className="font-semibold text-[#999]">Mobility:</span> Free
                travel is not only convenient but also a fundamental freedom that
                global citizens enjoy.
              </li>
              <li>
                <span className="font-semibold text-[#999]">Quality of life:</span>{" "}
                Perceived individually, it is an important decision-making factor
                for high net worth investors who aim to ensure premium education,
                standard of living, environmental quality, social progress, and
                more.
              </li>
              <li>
                <span className="font-semibold text-[#999]">Security:</span>{" "}
                Individual and community safety as well as freedom in a broader
                socio-economic context is essential for all global citizens and
                particularly for those who come from politically distressed
                regions.
              </li>
              <li>
                <span className="font-semibold text-[#999]">
                  Health care and education:
                </span>{" "}
                When considering relocation, applicants analyze the opportunities
                that the hosting country holds for all family members.
              </li>
              <li>
                <span className="font-semibold text-[#999]">
                  Taxation, retirement and succession planning:
                </span>{" "}
                High and ultra high net worth individuals diligently explore the
                effects of relocation and obtaining alternate residence and
                citizenship on their assets.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[#555]">
              From the critical first step, choosing the right program, through
              the entire process of application and approval of the status, we
              are side by side with our partners to provide information, and
              assist with and secure the successful completion of the complex
              process for each Global Citizen.
            </p>
          </section>

          {/* Arton’s commitment */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Arton&apos;s commitment
            </h4>
            <p className="text-sm leading-relaxed text-[#555]">
              Arton Capital is devoted to providing information and tools that
              will enable high net worth investors and their families to select
              the most suitable program for their needs and objectives. In
              pursuit of this goal, we are constantly improving the mechanisms
              to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#555]">
              <li>
                build and expand our network of Certified Partners in order to
                increase our global reach and better serve high net worth
                individuals around the world;
              </li>
              <li>analyze available and new legislation;</li>
              <li>
                create interactive tools and benchmarks to compare the most
                attractive products; and
              </li>
              <li>
                simplify complexity to ensure a smooth and stress-free
                application process by working alongside our partners as well as
                actively communicating with responsible government authorities in
                various jurisdictions.
              </li>
            </ul>
          </section>

          {/* Tools & discovery */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Discover how to make the right choice
            </h4>
            <p className="text-sm leading-relaxed text-[#555]">
              Every future Global Citizen starts their discovery process through
              the{" "}
              <a
                href="https://www.artonscapitalholdings.com/tools/arton-index/"
                className="font-semibold text-[#cc9966] underline"
              >
                Arton Index
              </a>
              , the industry benchmark that compares the features of the most
              attractive programs, and the Arton Matrix, which lists available
              options in an easy-to-follow table. To fine-tune their selection,
              investors move on to the{" "}
              <a
                href="https://www.artonscapitalholdings.com/tools/program-match/"
                className="font-semibold text-[#cc9966] underline"
              >
                Program Match
              </a>{" "}
              tool to shortlist the program(s) that best meet their goals. These
              tools are just one of the unique features that Arton offers to its{" "}
              <a
                href="https://www.artonscapitalholdings.com/certified-partners/"
                className="font-semibold text-[#cc9966] underline"
              >
                Certified Partners
              </a>{" "}
              and their clients. Our relationship managers are leading the way by
              juxtaposing the unique status and needs of each investor to
              available programs for second residence and citizenship.
            </p>
          </section>

          {/* Benefits of working with Arton */}
          <section className="mt-10 space-y-4">
            <h4 className="text-lg font-semibold text-[#333]">
              Benefits of working with Arton
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-sm text-[#555]">
              <li>
                Access to a world-class network of Certified Partners who are
                assigned to build the files and walk investors seamlessly through
                the process.
              </li>
              <li>
                Bespoke array of services in the banking, accounting, legal and
                tax advisory fields.
              </li>
              <li>
                Lifetime subscription to Global Citizen magazine, the
                industry&apos;s leading lifestyle and business title.
              </li>
              <li>
                Special pricing and exclusive benefits to the Global Citizen
                Forum, the industry&apos;s leading conference designed to educate
                and promote the benefits of global citizenship.
              </li>
              <li>Subscription to our publications.</li>
              <li>
                Complimentary one-year membership to Quintessentially, the
                world&apos;s premier concierge service.
              </li>
            </ul>
          </section>

          {/* CTA + program cards */}
          <section className="mt-10 border-t border-[#e3e3e3] pt-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm font-medium text-[#333]">
                Need more information?
              </p>
              <a
                href="https://www.artonscapitalholdings.com/become-a-global-citizen/"
                className="inline-flex items-center rounded-sm bg-[#cc9966] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black"
              >
                Contact us
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {programCards.map((program) => (
                <a
                  key={program.title}
                  href={program.href}
                  className="group flex flex-col overflow-hidden rounded-md border border-[#eee] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#f7f7f7]">
                    <img
                      src={program.imgSrc}
                      alt={program.imgAlt}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-3 py-3">
                    <div className="mt-1 flex-1">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#999] uppercase">
                        Citizenship by investment
                      </p>
                      <h2 className="mt-1 text-sm font-semibold text-[#333]">
                        {program.title}
                      </h2>
                    </div>
                    <span className="mt-2 text-xs font-semibold text-[#cc9966] group-hover:text-black">
                      Discover Today
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          <section className="mt-12 border-t border-[#e3e3e3] pt-8">
            <p className="text-sm leading-relaxed text-[#555] italic">
              “I would like you to know how happy I am at my choice and how
              amazingly professional your whole team was from start all the way
              till we got our passports. After meeting your team in Cyprus, I
              knew that I was in good hands and they made us feel so welcomed and
              at home. What you do is changing people&apos;s lives for generations
              to come and that’s an amazing job that not many people get to do. I
              will forever remember your advisory service and I am grateful to
              it.”
              <span className="ml-1 not-italic font-semibold">
                – M. G., client
              </span>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
