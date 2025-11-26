// app/citizenship-by-investment/page.tsx
import Link from "next/link";

const sectionLinks = [
  { id: "whatis", label: "What Is Citizenship?" },
  { id: "whatiscbi", label: "What Is Citizenship by Investment?" },
  { id: "whypeople", label: "Why Do People Invest in a Second Citizenship?" },
  { id: "countriesgain", label: "What Do Countries Gain From CBI Programs?" },
  { id: "whichcountries", label: "Which Countries Offer CBI Programs?" },
  { id: "requirements", label: "Requirements for a Second Passport" },
  { id: "history", label: "History of Citizenship & Passports" },
  { id: "timeline", label: "Citizenship by Investment Timeline" },
  { id: "whatarton", label: "What Can Arton Do for You?" },
  { id: "artondifferent", label: "What Makes Arton Different?" },
  { id: "tools", label: "Arton’s Program Tools" },
];

export const metadata = {
  title: "Citizenship by Investment | Secure Your Second Passport",
  description:
    "Invest in your future with tailored Citizenship by Investment programs. Learn what citizenship by investment is, why people choose it, and how Arton can help.",
};

export default function CitizenshipByInvestmentPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#333]">
      {/* HERO */}
      <section className="relative h-[340px] md:h-[380px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.artoncapitals.com/wp-content/uploads/2017/03/Arton-slider-Citizenship-by-Investment.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        <div className="relative max-w-5xl mx-auto h-full flex flex-col justify-center px-4 md:px-6">
          <p className="uppercase tracking-[0.2em] text-[0.7rem] md:text-xs mb-3 opacity-90">
            Empowering Global Citizenship®
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Citizenship by Investment
          </h1>
          <p className="text-sm md:text-base max-w-xl text-[#f5e0c7]">
            Invest in a second passport with Arton Capital.
          </p>
        </div>
      </section>

      {/* ANCHOR NAV */}
      <section className="bg-black text-[#f0d9b9] text-[0.8rem]">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-wrap gap-x-1 gap-y-1">
          {sectionLinks.map((link, index) => (
            <span key={link.id} className="whitespace-nowrap">
              <a
                href={`#${link.id}`}
                className="hover:underline transition-colors"
              >
                {link.label}
              </a>
              {index !== sectionLinks.length - 1 && (
                <span className="mx-1 text-[#7d6042]">|</span>
              )}
            </span>
          ))}
        </nav>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* What is Citizenship */}
        <section id="whatis" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Is Citizenship?
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              Citizenship is the relationship between an individual and a nation
              state whereby the state grants the citizen certain rights, such as
              the right to vote, work and own property, and in return the
              citizen accepts the responsibility of upholding the laws and
              customs of that state. Citizenship unites different people under a
              common identity.
            </p>
            <p>
              Traditional means of acquiring citizenship and the corresponding
              passports have been birth, naturalization and marriage.
              Naturalization is the process by which a resident of a country can
              acquire citizenship usually by residing in that country for a
              certain number of years. Since 1984, investment in the host
              country has been another way of acquiring citizenship.
            </p>
          </div>
        </section>

        {/* What is CBI */}
        <section id="whatiscbi" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Is Citizenship by Investment?
          </h2>
          <p className="leading-relaxed mb-4">
            Citizenship by investment is the process of obtaining a second
            citizenship and passport by investing in the economy of the host
            country. Citizenship by investment programs legally confer
            citizenship status faster than traditional immigration processes and
            do so without requiring investors to put their lives on hold.
          </p>
          <div className="mt-4">
            <a
              href="https://www.artoncapitals.com/global-citizen-programs/program-overview/"
              className="inline-block rounded-full bg-[#c78a41] px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-white hover:bg-black transition-colors"
            >
              See Our Program Overview
            </a>
          </div>
        </section>

        {/* Why invest in a second citizenship */}
        <section id="whypeople" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            Why Do People Invest in a Second Citizenship?
          </h2>
          <p className="leading-relaxed mb-4">
            There are many reasons to invest in a{" "}
            <a
              href="https://www.artoncapitals.com/dual-citizenship/"
              className="text-[#c78a41] hover:underline"
            >
              second citizenship
            </a>
            , from personal safety to increased global mobility. Applications
            can be approved in as little as three months, resulting in
            citizenship for life, a valid passport,{" "}
            <a
              href="https://www.passportindex.org/visa.php"
              className="text-[#c78a41] hover:underline"
            >
              visa-free travel
            </a>{" "}
            and more. Economic citizenship opens up a world of possibilities to{" "}
            <a
              href="https://www.artoncapitals.com/high-net-worth-investors/"
              className="text-[#c78a41] hover:underline"
            >
              high net worth investors
            </a>
            .
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">
            Security
          </h3>
          <p className="leading-relaxed">
            A second passport from a stable, peaceful country can be
            life-saving in the event of any kind of political unrest in one’s
            home country. This type of insurance is priceless for investors and
            their families.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">
            Global Mobility
          </h3>
          <p className="leading-relaxed mb-3">
            Many passports are quite restrictive in their visa-free mobility,
            forcing citizens to obtain visas whenever they need to travel
            abroad. A second passport can offer individuals from these countries
            increased global mobility. For example, the{" "}
            <a
              href="https://www.passportindex.org/?country=pk"
              target="_blank"
              rel="noreferrer"
              className="text-[#c78a41] hover:underline"
            >
              passport of Pakistan
            </a>{" "}
            allows visa-free entry into only 40 countries, whereas the{" "}
            <a
              href="https://www.passportindex.org/?country=cy"
              target="_blank"
              rel="noreferrer"
              className="text-[#c78a41] hover:underline"
            >
              passport of Cyprus
            </a>{" "}
            allows visa-free entry to 164 countries. The difference in global
            mobility equals an incredible amount of time saved filing visa
            applications and is priceless to businesspeople the world over.
          </p>
          <p className="leading-relaxed">
            See our{" "}
            <a
              href="https://www.passportindex.org/"
              target="_blank"
              rel="noreferrer"
              className="text-[#c78a41] hover:underline"
            >
              Passport Index
            </a>{" "}
            for the visa-free score of every passport in the world.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">Business</h3>
          <p className="leading-relaxed">
            New business opportunities open up to participants in citizenship by
            investment programs as they can now do business in the host country
            as well as travel abroad more freely.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">
            Tax Management
          </h3>
          <p className="leading-relaxed">
            <a
              href="https://www.artoncapitals.com/dual-citizenship/"
              className="text-[#c78a41] hover:underline"
            >
              Dual citizenship
            </a>{" "}
            may prove advantageous for tax optimization purposes. For example,
            some countries only tax income earned from that country and do not
            subject capital gains to taxes either. This allows investors to
            manage their wealth more efficiently and effectively.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">Family</h3>
          <p className="leading-relaxed">
            Most citizenship by investment programs are available to the family
            members of the main applicant. This means that investors can secure
            a better future for their spouse and children. Second citizenships
            offer access to world-class health care, education and an improved
            lifestyle.
          </p>

          <h3 className="mt-6 mb-2 font-semibold text-[1.05rem]">
            Education
          </h3>
          <p className="leading-relaxed">
            Education is the foundation of a successful life as a global
            citizen. Investing in a second citizenship can open up access to the
            best schools in the world for applicants and their children by
            qualifying them for domestic rather than international tuition fees.
          </p>
        </section>

        {/* Image banner */}
        <section className="my-10 md:my-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <figure>
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2017/02/CitizenByInvestment03.jpg"
              alt="Citizenship by investment"
              className="w-full"
            />
            <figcaption className="text-center text-sm text-[#666] px-4 pt-3">
              Citizenship by investment will unlock the potential to a world of
              freedom, global mobility, and exclusive opportunity. Learn about
              your options today.
            </figcaption>
          </figure>
        </section>

        {/* What do countries gain */}
        <section id="countriesgain" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Do Countries Gain From Citizenship by Investment Programs?
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              Many countries offer citizenship by investment programs in order
              to attract much-needed foreign direct investment. Countries can
              then use these funds to invest in their own projects, such as real
              estate development, business development and job creation. CBI
              programs also attract global talent and know-how aimed at boosting
              the economy.
            </p>
            <p>
              For example,{" "}
              <a
                href="https://www.artoncapitals.com/global-citizen-programs/st-kitts-nevis/"
                target="_blank"
                rel="noreferrer"
                className="text-[#c78a41] hover:underline"
              >
                St. Kitts &amp; Nevis
              </a>{" "}
              applicants can invest in the Sugar Industry Diversification
              Foundation, which aims to assist the government and country in
              transitioning to a more diversified economy. The foundation
              supports the government, but also undertakes new projects itself.
              To date, the foundation has invested more than US$55 million in
              the development of St. Kitts &amp; Nevis.
            </p>
          </div>
        </section>

        {/* Which countries offer CBI */}
        <section id="whichcountries" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            Which Countries Offer Citizenship by Investment Programs?
          </h2>
          <p className="leading-relaxed mb-4">
            Many countries offer citizenship by investment programs. The number
            of these programs is constantly increasing as more and more
            countries realize the economic advantages of opening their doors to
            immigrant investors. Arton Capital is pleased to be an authorized
            agent for the following citizenship by investment programs:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-[0.9rem]">
              <thead className="bg-[#f7f2ec]">
                <tr>
                  <th className="text-left py-2.5 px-3 uppercase tracking-[0.08em] text-xs">
                    Country
                  </th>
                  <th className="text-left py-2.5 px-3 uppercase tracking-[0.08em] text-xs">
                    Time to Citizenship
                  </th>
                  <th className="text-left py-2.5 px-3 uppercase tracking-[0.08em] text-xs">
                    Min. Investment
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Antigua & Barbuda",
                    "4–5 months",
                    "US$230,000",
                    "https://www.artoncapitals.com/global-citizen-programs/antigua-and-barbuda/",
                  ],
                  [
                    "Dominica",
                    "3 months",
                    "US$200,000",
                    "https://www.artoncapitals.com/global-citizen-programs/dominica/",
                  ],
                  [
                    "Grenada",
                    "7–8 months",
                    "US$235,000",
                    "https://www.artoncapitals.com/global-citizen-programs/grenada/",
                  ],
                  [
                    "Saint Lucia",
                    "9–12 months",
                    "US$240,000",
                    "https://www.artoncapitals.com/global-citizen-programs/saint-lucia/",
                  ],
                  [
                    "St. Kitts & Nevis",
                    "6–12 months",
                    "US$250,000",
                    "https://www.artoncapitals.com/global-citizen-programs/st-kitts-nevis/",
                  ],
                ].map(([name, time, min, href]) => (
                  <tr key={name} className="odd:bg-white even:bg-[#fbf8f4]">
                    <td className="py-2.5 px-3 border-b border-[#e6e0d7]">
                      <a
                        href={href}
                        className="text-[#c78a41] hover:underline"
                      >
                        {name}
                      </a>
                    </td>
                    <td className="py-2.5 px-3 border-b border-[#e6e0d7]">
                      {time}
                    </td>
                    <td className="py-2.5 px-3 border-b border-[#e6e0d7]">
                      {min}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-[#666] mt-3">
            It is important to remember that not all countries allow their
            citizens to hold dual citizenship. Double check before starting the
            process with Arton Capital.
          </p>

          <div className="mt-4">
            <a
              href="https://www.artoncapitals.com/become-a-global-citizen/"
              className="inline-block rounded-full bg-[#c78a41] px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-white hover:bg-black transition-colors"
            >
              Contact Us to Learn More
            </a>
          </div>
        </section>

        {/* Second image banner */}
        <section className="my-10 md:my-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <figure>
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2017/02/CitizenByInvestment02.jpg"
              alt="Citizenship by investment"
              className="w-full"
            />
            <figcaption className="text-center text-sm text-[#666] px-4 pt-3">
              Citizenship by investment will unlock the potential to a world of
              freedom, global mobility, and exclusive opportunity. Learn about
              your options today.
            </figcaption>
          </figure>
        </section>

        {/* Requirements */}
        <section id="requirements" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Are the Requirements for Obtaining a Second Passport?
          </h2>
          <p className="leading-relaxed mb-3">
            Each country has a different set of requirements that applicants
            must fulfill for its citizenship by investment program. For example,
            some programs require medical examinations and proof of good health,
            while others do not. However, some requirements are common to all
            such programs:
          </p>
          <ul className="list-disc ml-5 space-y-1.5 leading-relaxed">
            <li>Have a clean criminal record.</li>
            <li>Show the legal source of the investment funds.</li>
            <li>
              Invest in one of the government-approved options, such as real
              estate, government bonds or a national economic fund.
            </li>
          </ul>
          <p className="leading-relaxed mt-3">
            All requirements must be met in order for citizenship applications
            to be approved by the host government. See the specific requirements
            on the individual program pages.
          </p>
        </section>

        {/* History */}
        <section id="history" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            History of Citizenship and Passports
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              Passports are an invaluable document dating back to Biblical times
              when individuals could be granted “safe conduct” letters
              requesting that the governors of foreign lands grant them safe
              passage. The first mention of a passport is in the Bible&apos;s
              book of Nehemiah from approximately 450 BC. Fast forward to the
              Roman Empire, which recognized different levels of citizenship,
              such as municipal or empire-wide, and was the first to issue
              certificates of citizenship. Later in the early Medieval period
              citizenship became slightly less important, though it remained
              imperative for merchants to secure safe conduct. In the 13th
              century Marco Polo’s father became the first European to receive
              safe conduct from Kublai Khan, granting him safe passage and
              access to the entire Mongol Empire.
            </p>
            <p>
              Mentions of safe conduct appeared in England as early as 1414
              under King Henry V, who had the authority to grant safe conduct to
              anyone, even foreigners. By 1540 in England the granting of
              travelling papers became normalized under the Privy Council. The
              term passport was already in use at this time. However, they were
              not necessarily used as identity documents until 1858 and were not
              necessarily required for international travel until World War I.
            </p>
            <p>
              Travelling and identity were finally officially merged in the
              early 20th century. The British Nationality and Status Aliens Act
              of 1914 produced the first modern British passport. By 1920 the
              League of Nations had adopted a standard passport format.
            </p>
            <p>
              Switzerland can be said to have the first{" "}
              <a
                href="https://www.artoncapitals.com/residency-by-investment/"
                className="text-[#c78a41] hover:underline"
              >
                residency by investment program
              </a>
              , though it was not intended as such. In 1862 the canton of Vaud
              introduced lump-sum taxation, which sought to tax wealthy
              foreigners who had taken up residence in Switzerland but were not
              contributing to the upkeep of the infrastructure from which they
              benefited. Today high net worth individuals can significantly
              reduce their tax burden by taking up residence in Switzerland.
            </p>
            <p>
              St. Kitts &amp; Nevis implemented the first official citizenship
              by investment program in 1984. Other countries soon followed suit.
              The capital acquired through these programs allowed the host
              countries to invest in their economies, culture and people.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-10 md:mb-12 border-t border-[#eee0cf] pt-8">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-6 text-center">
            Citizenship by Investment Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-sm leading-relaxed">
            <div>
              <h4 className="font-semibold mb-1 text-base">1984</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/st-kitts-nevis/"
                  className="text-[#c78a41] hover:underline"
                >
                  St. Kitts &amp; Nevis Citizenship by Investment Program
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">1993</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/dominica/"
                  className="text-[#c78a41] hover:underline"
                >
                  Dominica Economic Citizenship Program
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">2011</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/cyprus/"
                  className="text-[#c78a41] hover:underline"
                >
                  Cyprus Naturalization of Investors by Exception Scheme
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">2012</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/antigua-and-barbuda/"
                  className="text-[#c78a41] hover:underline"
                >
                  Antigua &amp; Barbuda Citizenship by Investment Program
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">2013</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/grenada/"
                  className="text-[#c78a41] hover:underline"
                >
                  Grenada Citizenship by Investment Program
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">2015</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/saint-lucia/"
                  className="text-[#c78a41] hover:underline"
                >
                  Saint Lucia Citizenship by Investment Program
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">2018</h4>
              <p>
                <a
                  href="https://www.artoncapitals.com/global-citizen-programs/montenegro/"
                  className="text-[#c78a41] hover:underline"
                >
                  Montenegro Citizenship by Investment Program
                </a>
                <br />
                Moldova Citizenship by Investment Program
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-base">Upcoming</h4>
              <p>Armenia Citizenship by Investment Program</p>
            </div>
          </div>
        </section>

        {/* What can Arton do for you */}
        <section id="whatarton" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Can Arton Do for You?
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              Arton Capital empowers individuals and families to become Global
              Citizens. We are a financial advisory firm specializing in
              investor programs for residence and citizenship, and consider
              ourselves the all-important link between dreams and reality. We
              offer a bespoke service experience supported and sustained by
              long-term relationships.
            </p>
            <p>
              In a world of increasing globalization, more and more people are
              seeing themselves as global citizens of the world rather than as
              strictly national citizens. For them borders are not barriers and
              the ability to live, work and travel around the world is entirely
              within reach and desirable.
            </p>
            <p>
              Arton plays a critical role in empowering{" "}
              <a
                href="https://www.artoncapitals.com/government-agencies/"
                className="text-[#c78a41] hover:underline"
              >
                governments
              </a>
              ,{" "}
              <a
                href="https://www.artoncapitals.com/certified-partners/"
                className="text-[#c78a41] hover:underline"
              >
                consultants
              </a>
              , legal and financial professionals, and{" "}
              <a
                href="https://www.artoncapitals.com/high-net-worth-investors/"
                className="text-[#c78a41] hover:underline"
              >
                investors
              </a>{" "}
              to meet their goals efficiently, effectively and responsibly.
            </p>
          </div>
          <div className="mt-4">
            <a
              href="https://www.artoncapitals.com/become-a-global-citizen/"
              className="inline-block rounded-full bg-[#c78a41] px-6 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-white hover:bg-black transition-colors"
            >
              Contact Us to Become a Global Citizen
            </a>
          </div>
        </section>

        {/* What makes Arton different */}
        <section id="artondifferent" className="mb-10 md:mb-12">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            What Makes Arton Different?
          </h2>
          <div className="space-y-3 leading-relaxed">
            <p>
              Arton Capital is best defined by its integrity. We work side by
              side with our clients and partners, from choosing the right
              program through to the completion of the application process and
              beyond. We have built and maintained an extensive network of
              partners and agents who are certified to promote our products and
              services and to whom we offer round-the-clock support. We simplify
              complexity to ensure a smooth application process.
            </p>
            <p>
              When you choose Arton, you choose the Global Citizen lifestyle. We
              offer a bespoke array of financial services, access to the Global
              Citizen Forum and trusted guidance concerning immigration matters.
            </p>
          </div>
        </section>

        {/* Third image banner */}
        <section className="my-10 md:my-12 -mx-4 sm:-mx-6 lg:-mx-8">
          <figure>
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2017/03/Arton-Citizenship-By-Investment.jpg"
              alt="Citizenship by investment"
              className="w-full"
            />
            <figcaption className="text-center text-sm text-[#666] px-4 pt-3">
              Citizenship by investment will unlock the potential to a world of
              freedom, global mobility, and exclusive opportunity. Learn about
              your options today.
            </figcaption>
          </figure>
        </section>

        {/* Tools */}
        <section id="tools" className="mb-4 md:mb-6">
          <h2 className="text-[1.6rem] md:text-[1.75rem] font-semibold tracking-[0.08em] uppercase mb-4">
            Arton’s Program Tools
          </h2>
          <p className="leading-relaxed">
            Arton Capital’s proprietary program tools allow investors to learn
            about each citizenship program and compare them side by side. We
            believe it is crucial for investors to understand the cost and
            benefits of each program so that they may make the right decision
            for themselves, their families and their businesses.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Program Check",
                icon: "⚖️",
                desc: "Compare the different programs side by side and examine their features.",
                href: "https://www.artoncapitals.com/tools/program-check/",
              },
              {
                title: "Program Cost",
                icon: "$",
                desc: "Find out the cost estimates for each program tailored to your family.",
                href: "https://www.artoncapitals.com/tools/program-cost/",
              },
              {
                title: "Program Map",
                icon: "🌍",
                desc: "See the power of global mobility for each passport.",
                href: "https://www.artoncapitals.com/tools/program-map/",
              },
              {
                title: "Program Match",
                icon: "🎯",
                desc: "Find the program that best matches your goals.",
                href: "https://www.artoncapitals.com/tools/program-match/",
              },
              {
                title: "Arton Index",
                icon: "📊",
                desc: "Discover how the industry benchmark ranks the different programs.",
                href: "https://www.artoncapitals.com/tools/arton-index/",
              },
              {
                title: "Passport Index",
                icon: "🛂",
                desc: "Explore the world of passports. Find your passport, or explore them all.",
                href: "https://www.passportindex.org/",
              },
            ].map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className="flex flex-col gap-2 rounded-2xl bg-[#fbf8f4] p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full border-2 border-[#c78a41] flex items-center justify-center text-xl mb-1">
                  {tool.icon}
                </div>
                <h3 className="text-sm font-semibold tracking-[0.08em] uppercase">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#555] flex-1">{tool.desc}</p>
                <span className="mt-1 text-[0.78rem] tracking-[0.14em] uppercase text-[#c78a41]">
                  Open {tool.title} →
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
