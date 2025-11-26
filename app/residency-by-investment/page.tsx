// app/residency-by-investment/page.tsx
"use client";

import Link from "next/link";

export default function ResidencyByInvestmentPage() {
  return (
    <div className="ac-page font-sans bg-[#f5f5f5] min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[220px] md:h-[260px] lg:h-[300px]"
        style={{
          backgroundImage:
            "url('https://www.artoncapital.com/wp-content/uploads/2017/03/Arton-slider-Residency-by-Investment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.08em]">
            RESIDENCY BY INVESTMENT
          </h1>
          <p className="mt-3 text-[#c2874a] text-sm md:text-base italic max-w-xl">
            Invest in a second residency with Arton Capital.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-20 bg-white shadow-[0_0_30px_rgba(0,0,0,0.06)] relative z-10">
        {/* ANCHOR NAV */}
        <nav className="text-[13px] md:text-[14px] text-[#c2874a] tracking-[0.18em] leading-relaxed text-center border-b border-[#e2e2e2] pb-8 mb-8">
          <a href="#permanentresidency" className="hover:underline">
            WHAT IS PERMANENT RESIDENCY?
          </a>{" "}
          |{" "}
          <a href="#whatis" className="hover:underline">
            WHAT IS RESIDENCY BY INVESTMENT?
          </a>{" "}
          |{" "}
          <a href="#whypeople" className="hover:underline">
            WHY DO PEOPLE INVEST IN PERMANENT RESIDENCY?
          </a>{" "}
          |{" "}
          <a href="#countriesgain" className="hover:underline">
            WHAT DO COUNTRIES GAIN FROM RESIDENCY BY INVESTMENT PROGRAMS?
          </a>{" "}
          |{" "}
          <a href="#whichcountries" className="hover:underline">
            WHICH COUNTRIES OFFER RESIDENCY BY INVESTMENT PROGRAMS?
          </a>{" "}
          |{" "}
          <a href="#requirements" className="hover:underline">
            WHAT ARE THE REQUIREMENTS FOR OBTAINING PERMANENT RESIDENCY?
          </a>{" "}
          |{" "}
          <a href="#artondo" className="hover:underline">
            WHAT CAN ARTON DO FOR YOU?
          </a>{" "}
          |{" "}
          <a href="#artondifferent" className="hover:underline">
            WHAT MAKES ARTON DIFFERENT?
          </a>{" "}
          |{" "}
          <a href="#artontool" className="hover:underline">
            ARTON’S PROGRAM TOOLS
          </a>{" "}
          |{" "}
          <a href="#timeline" className="hover:underline">
            RESIDENCY BY INVESTMENT TIMELINE
          </a>
        </nav>

        {/* 1. WHAT IS PERMANENT RESIDENCY */}
        <section
          id="permanentresidency"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT IS PERMANENT RESIDENCY?
          </h2>

          <p className="mb-4">
            Permanent residency is a legal status that allows an individual to live in a country
            on a long-term basis without becoming a citizen. Permanent residents are usually
            entitled to reside, work, study and access healthcare in the host country under broadly
            the same conditions as citizens, but they are generally not permitted to vote or run for
            public office.
          </p>

          <p>
            To qualify for permanent residency, applicants are normally required to satisfy a
            combination of criteria such as work experience, study in the country or language
            proficiency. Since the mid-1980s, investment has become an additional route to obtain
            this status. In many jurisdictions, permanent residency can eventually lead to{" "}
            <Link
              href="/citizenship-by-investment"
              className="text-[#c2874a] underline underline-offset-2"
            >
              citizenship by naturalization
            </Link>{" "}
            once a prescribed period of lawful residence has been completed.
          </p>
        </section>

        {/* 2. WHAT IS RESIDENCY BY INVESTMENT */}
        <section
          id="whatis"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT IS RESIDENCY BY INVESTMENT?
          </h2>

          <p className="mb-4">
            Residency by investment describes government-approved programs that allow foreign
            nationals to obtain permanent residency, or a pathway to it, by making a qualifying
            investment in the host country. Instead of following the traditional route based purely
            on employment or family ties, investors can obtain residence rights within a
            predictable, often significantly accelerated timeframe.
          </p>

          <div className="mt-6">
            <Link
              href="/global-citizen-programs/program-overview"
              className="inline-block bg-[#c2874a] text-white text-[13px] tracking-[0.18em] px-10 py-3 rounded-[2px]"
            >
              SEE OUR PROGRAM OVERVIEW
            </Link>
          </div>
        </section>

        {/* 3. WHY DO PEOPLE INVEST */}
        <section
          id="whypeople"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHY DO PEOPLE INVEST IN PERMANENT RESIDENCY?
          </h2>

          <p className="mb-5">
            Investors and their families are drawn to permanent residency for a variety of reasons,
            ranging from personal security to improved global mobility and long-term wealth
            planning. For{" "}
            <Link
              href="/high-net-worth-investors"
              className="text-[#c2874a] underline underline-offset-2"
            >
              high net worth investors
            </Link>
            , it is often an essential element of a global lifestyle strategy.
          </p>

          <h3 className="text-[18px] text-[#333] font-semibold mb-2">Security</h3>
          <p className="mb-4">
            Holding permanent residency in a peaceful, well-governed country can provide a vital
            safety net in times of political or social instability at home. It offers the
            reassurance that there is always an alternative place to live, work and educate one’s
            family.
          </p>

          <h3 className="text-[18px] text-[#333] font-semibold mb-2">Global Mobility</h3>
          <p className="mb-4">
            Many passports offer only limited visa-free access, obliging their holders to apply for
            visas whenever they travel. Permanent residency in the right country can unlock a far
            broader range of visa-free destinations. For example, the{" "}
            <a
              href="https://www.passportindex.org/?country=cn"
              target="_blank"
              rel="noreferrer"
              className="text-[#c2874a] underline underline-offset-2"
            >
              passport of China
            </a>{" "}
            grants visa-free entry to a relatively small number of countries, while permanent
            residency in certain European states allows unrestricted movement within the Schengen
            area. The time saved on{" "}
            <a
              href="https://www.passportindex.org/visa.php"
              target="_blank"
              rel="noreferrer"
              className="text-[#c2874a] underline underline-offset-2"
            >
              visa applications
            </a>{" "}
            is invaluable for internationally active investors and entrepreneurs.
          </p>

          <p className="mb-5">
            You can consult the{" "}
            <a
              href="https://www.passportindex.org/"
              target="_blank"
              rel="noreferrer"
              className="text-[#c2874a] underline underline-offset-2"
            >
              Passport Index
            </a>{" "}
            for the latest visa-free scores of passports worldwide.
          </p>

          <h3 className="text-[18px] text-[#333] font-semibold mb-2">Business</h3>
          <p className="mb-4">
            Residency opens access to new markets. Investors are able to establish or expand
            businesses in the host country, hold board positions and travel more freely to meet
            clients and partners.
          </p>

          <h3 className="text-[18px] text-[#333] font-semibold mb-2">Tax Management</h3>
          <p className="mb-4">
            Some residency by investment jurisdictions offer attractive tax environments. For
            example, certain EU member states apply comparatively low flat income tax rates, which
            may support efficient, compliant tax planning when combined with appropriate advice.
          </p>

          <h3 className="text-[18px] text-[#333] font-semibold mb-2">Family &amp; Education</h3>
          <p>
            Many programs allow the main applicant to include their spouse, dependent children and,
            in some cases, parents. Permanent residency can therefore secure access to high-quality
            healthcare systems and world-class educational institutions, often at domestic rather
            than international tuition rates.
          </p>
        </section>

        {/* 4. WHAT DO COUNTRIES GAIN */}
        <section
          id="countriesgain"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT DO COUNTRIES GAIN FROM RESIDENCY BY INVESTMENT PROGRAMS?
          </h2>

          <p className="mb-4">
            For many countries, residency by investment is a way to attract meaningful foreign
            direct investment and highly engaged residents. The capital raised through these
            programs can be channelled into infrastructure, innovation, cultural initiatives or
            regional development projects.
          </p>

          <p>
            In some cases, investors may participate in carefully selected opportunities such as
            restoration of heritage properties or funding for research and job-creating businesses.
            For example, in Portugal, investors may access{" "}
            <Link
              href="/global-citizen-programs/portugal"
              className="text-[#c2874a] underline underline-offset-2"
            >
              Arton’s Qualified Offer
            </Link>{" "}
            focused on the rehabilitation of historically significant real estate.
          </p>
        </section>

        {/* 5. WHICH COUNTRIES OFFER… */}
        <section
          id="whichcountries"
          className="py-8 border-b border-[#ececec] text-[15px] text-[#555] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHICH COUNTRIES OFFER RESIDENCY BY INVESTMENT PROGRAMS?
          </h2>

          <p className="mb-5">
            Arton Capital is an authorized agent for a carefully curated selection of residency by
            investment programs around the world.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-[#e3e3e3] text-[#999]">
                  <th className="py-3 font-normal">RBI Program</th>
                  <th className="py-3 font-normal">Time to Residency</th>
                  <th className="py-3 font-normal">Min. Investment</th>
                </tr>
              </thead>
              <tbody className="text-[#555]">
                {[
                  ["Bulgaria", "7 months", "€512,000", "/global-citizen-programs/bulgaria"],
                  [
                    "Canada, Quebec",
                    "36 months",
                    "CA$1,200,000",
                    "/global-citizen-programs/canada-quebec",
                  ],
                  ["Spain", "3 months", "€100,000", "/global-citizen-programs/spain"],
                  [
                    "Greece",
                    "6 months",
                    "€250,000",
                    "/global-citizen-programs/greece-golden-visa-program",
                  ],
                  ["Hungary", "2 months", "€250,000", "/global-citizen-programs/hungary"],
                  ["Malta", "9 months", "€407,000", "/global-citizen-programs/malta"],
                  ["Latvia", "3 months", "€100,000", "/global-citizen-programs/latvia"],
                  ["Portugal", "24 months", "€250,000", "/global-citizen-programs/portugal"],
                  [
                    "United States of America",
                    "12–18 months",
                    "US$800,000",
                    "/global-citizen-programs/usa-eb-5",
                  ],
                ].map(([name, time, invest, href]) => (
                  <tr key={name} className="border-b border-[#efefef]">
                    <td className="py-3">
                      <Link href={href} className="text-[#c2874a] hover:underline">
                        {name}
                      </Link>
                    </td>
                    <td className="py-3">{time}</td>
                    <td className="py-3">{invest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link
              href="/become-a-global-citizen"
              className="inline-block bg-[#c2874a] text-white text-[13px] tracking-[0.18em] px-12 py-3 rounded-[2px]"
            >
              CONTACT US TO LEARN MORE
            </Link>
          </div>
        </section>

        {/* 6. REQUIREMENTS */}
        <section
          id="requirements"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT ARE THE REQUIREMENTS FOR OBTAINING PERMANENT RESIDENCY?
          </h2>

          <p className="mb-4">
            Each residency by investment program has its own detailed criteria, but there are some
            recurring elements that investors can expect to encounter in most jurisdictions:
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>Providing evidence of a clean criminal record.</li>
            <li>Demonstrating the legal and transparent origin of investment funds.</li>
            <li>
              Committing to an approved investment option such as real estate, government bonds or a
              national economic fund.
            </li>
          </ul>

          <p>
            Additional requirements may include minimum physical presence, language ability or
            medical checks. Arton Capital assists clients in understanding and meeting the specific
            requirements of each program, helping to minimize delays and avoid unnecessary risk.
          </p>
        </section>

        {/* 7. WHAT CAN ARTON DO */}
        <section
          id="artondo"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT CAN ARTON DO FOR YOU?
          </h2>

          <p className="mb-4">
            Arton Capital empowers individuals and families to become true global citizens. As a
            specialized advisory firm, we guide clients through the entire residency by investment
            process – from the first exploratory conversation to the issuance of the residence
            permit and beyond.
          </p>

          <p className="mb-4">
            We listen carefully to your objectives, evaluate your circumstances and help you select
            the program that best reflects your personal, family and business priorities. Our
            experienced team coordinates legal, tax and compliance professionals where required, and
            oversees the preparation and submission of your application file.
          </p>

          <p className="mb-6">
            In a world where borders are increasingly flexible for those who plan ahead, Arton plays
            a pivotal role in ensuring that mobility, opportunity and security remain within reach.
          </p>

          <div className="mt-4">
            <Link
              href="/become-a-global-citizen"
              className="inline-block bg-[#c2874a] text-white text-[13px] tracking-[0.18em] px-16 py-3 rounded-[2px]"
            >
              CONTACT US TO BECOME A GLOBAL CITIZEN
            </Link>
          </div>
        </section>

        {/* 8. WHAT MAKES ARTON DIFFERENT */}
        <section
          id="artondifferent"
          className="py-8 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            WHAT MAKES ARTON DIFFERENT?
          </h2>

          <p className="mb-4">
            Arton Capital is distinguished by its integrity, industry expertise and global reach. We
            work side by side with our clients and partners, from selecting the right program to
            completing the application process and maintaining residency status thereafter.
          </p>

          <p className="mb-4">
            Over the years we have built a broad international network of government partners,
            licensed agents and professional advisers. This allows us to anticipate regulatory
            changes, streamline procedures and offer a truly bespoke service experience supported by
            long-term relationships.
          </p>

          <p>
            Choosing Arton means embracing the global citizen lifestyle – with access to financial
            solutions, community platforms and expert guidance on the evolving world of investment
            migration.
          </p>

          <div className="mt-6">
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2021/03/arton-different.jpg"
              alt="Arton publications and brand materials"
              className="w-full rounded-[2px]"
            />
          </div>
        </section>

        {/* 9. PROGRAM TOOLS */}
        <section
          id="artontool"
          className="py-12 border-b border-[#ececec] text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">ARTON’S PROGRAM TOOLS</h2>

          <p className="mb-8">
            Arton Capital’s proprietary program tools help investors understand each residency and
            citizenship program in detail and compare them side by side. These resources clarify
            costs, benefits and mobility options so that you can make informed decisions for
            yourself, your family and your business interests.
          </p>

          {/* Tiles – 2 rows of 3, similar to screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "PROGRAM CHECK",
                "Compare the different programs side by side and examine their features.",
                "/tools/program-check",
              ],
              [
                "PROGRAM COST",
                "Estimate the total cost of each program tailored to your family profile.",
                "/tools/program-cost",
              ],
              [
                "PROGRAM MAP",
                "Visualize the power of global mobility for each passport and program.",
                "/tools/program-map",
              ],
              [
                "PROGRAM MATCH",
                "Identify the program that best aligns with your objectives and priorities.",
                "/tools/program-match",
              ],
              [
                "ARTON INDEX",
                "Discover how the industry benchmark ranks the world’s leading programs.",
                "/tools/arton-index",
              ],
              [
                "PASSPORT INDEX",
                "Explore the world of passports and compare their real-time mobility.",
                "/passport-index",
              ],
            ].map(([title, desc, href]) => (
              <Link
                key={title}
                href={href as string}
                className="bg-[#f7f7f7] border border-[#e6e6e6] px-8 py-10 flex flex-col items-center text-center hover:bg-[#f1f1f1] transition"
              >
                <div className="w-16 h-16 rounded-full bg-[#c2874a] mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-light">◎</span>
                </div>
                <h3 className="text-[14px] tracking-[0.18em] text-[#333] mb-3">
                  {title}
                </h3>
                <p className="text-[14px] text-[#666]">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 10. TIMELINE */}
        <section
          id="timeline"
          className="py-12 text-center text-[#555] text-[15px] leading-[1.8]"
        >
          <h2 className="text-[22px] text-[#333] font-normal mb-4">
            RESIDENCY BY INVESTMENT TIMELINE
          </h2>

          <p className="mb-6">
            Residency by investment has evolved over several decades. Below are some key milestones
            in the development of modern investor immigration programs:
          </p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">1986</span> – Quebec, Canada Immigrant Investor
              Program
            </p>
            <p>
              <span className="font-semibold">1990</span> – United States EB-5 Immigrant Investor
              Program
            </p>
            <p>
              <span className="font-semibold">1994</span> – United Kingdom Tier 1 Investor Visa
            </p>
            <p>
              <span className="font-semibold">2012</span> – Launch of several European investor
              residency initiatives
            </p>
            <p>
              <span className="font-semibold">2013</span> – Expansion of Golden Visa programs in
              Southern Europe
            </p>
            <p>
              <span className="font-semibold">2014</span> – Malta Individual Investor Program
            </p>
            <p>
              <span className="font-semibold">2016</span> – Turkey Residence Permit for investors
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
