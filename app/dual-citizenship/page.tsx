// pages/dual-citizenship.tsx
import Head from "next/head";

export default function DualCitizenshipPage() {
  return (
    <>
      <Head>
        <title>How to Get Dual Citizenship &amp; What It Means for You</title>
        <meta
          name="description"
          content="Discover the benefits of dual citizenship, from global mobility to tax optimization. Find out how to obtain a second passport and expand your opportunities."
        />
        {/* change this to your own domain when you’re ready */}
        <link
          rel="canonical"
          href="https://www.valcrestcapitals.com/dual-citizenship"
        />
      </Head>

      <main className="bg-white text-slate-900">
        {/* HERO – image controls height, no black gaps */}
        <section className="relative">
          <div className="relative">
            <img
              src="https://www.artoncapital.com/wp-content/uploads/2017/03/Arton-slider-Dual-Citizenship.jpg"
              alt="Dual Citizenship"
              className="w-full h-auto object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* centered text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 text-center">
                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Dual Citizenship
                </h1>
                <p className="mt-2 text-sm italic text-[#ffd86a] md:text-base">
                  Discover Arton&apos;s Guide to Dual Citizenship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT WRAPPER (kept close to original structure) */}
        <section className="bg-[#f7f5f2]">
          <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 text-[15px] leading-relaxed">
            {/* top nav line, like original h3 with pipes */}
            <div className="mb-6 border-t border-[#dbdbdb] pt-6">
              <h3 className="text-[15px] font-semibold text-[#5b432e]">
                <a
                  href="#whatisdualcit"
                  className="hover:text-[#b4833f] transition-colors"
                >
                  What is Dual Citizenship?
                </a>{" "}
                &nbsp; | &nbsp;
                <a
                  href="#benefits"
                  className="hover:text-[#b4833f] transition-colors"
                >
                  What Are the Benefits of Dual Citizenship?
                </a>{" "}
                &nbsp; | &nbsp;
                <a
                  href="#acquire"
                  className="hover:text-[#b4833f] transition-colors"
                >
                  How Do I Acquire Dual Citizenship?
                </a>{" "}
                &nbsp; | &nbsp;
                <a
                  href="#listcountries"
                  className="hover:text-[#b4833f] transition-colors"
                >
                  Which Countries Allow or Recognize Dual Citizenship?
                </a>{" "}
                &nbsp; | &nbsp;
                <a
                  href="#triple"
                  className="hover:text-[#b4833f] transition-colors"
                >
                  Do Countries Allow Triple Citizenship?
                </a>
              </h3>
            </div>

            {/* SECTION: What is Dual Citizenship */}
            <section id="whatisdualcit" className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                What is Dual Citizenship?
              </h2>
              <p className="mb-3">
                Dual citizenship, or multiple citizenship, is when a single
                person is legally recognized as a citizen of two or more
                countries at the same time.
              </p>
              <p>
                Not all countries allow their citizens to hold dual citizenship.
                It is important to double check whether your country permits dual
                citizenship before seeking to acquire one.
              </p>
            </section>

            {/* SECTION: Benefits */}
            <section id="benefits" className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                What Are the Benefits of Dual Citizenship?
              </h2>
              <p className="mb-4">
                There are many benefits to being a dual citizen, from quality of
                living to global mobility.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Security
              </h3>
              <p>
                A second passport from a stable country can be life-saving in the
                event of any kind of political, economic or social unrest in
                one’s home country.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Global Mobility
              </h3>
              <p>
                Many passports are quite restrictive in their visa-free
                mobility, forcing citizens to obtain visas whenever they need to
                travel abroad. A second passport can offer individuals from these
                countries increased global mobility. See tools such as a{" "}
                <a
                  href="https://www.passportindex.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#b4833f] underline-offset-2 hover:underline"
                >
                  Passport Index
                </a>{" "}
                for visa-free scores and rankings.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Business
              </h3>
              <p>
                New business opportunities open up to dual citizens as they can
                do business in the host country as well as travel abroad more
                freely.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Tax Optimization
              </h3>
              <p>
                Dual citizenship may prove advantageous for tax optimization
                purposes. For example, some countries only tax income earned from
                that country and do not subject capital gains to taxes. This can
                allow investors to manage their wealth more efficiently and
                effectively (always with proper tax advice).
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Quality of Life
              </h3>
              <p>
                Second citizenships can offer access to world-class healthcare,
                education and an improved lifestyle for you and your family.
              </p>

              <div className="mt-6">
                <a
                  href="https://www.artoncapitals.com/become-a-global-citizen/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#b4833f] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-black"
                >
                  Invest in a Dual Citizenship with Arton Capital
                </a>
              </div>
            </section>

            {/* Banner image inline */}
            <div className="mb-10 overflow-hidden rounded-lg border border-[#e3ddd2] bg-white">
              <img
                src="https://www.artoncapital.com/wp-content/uploads/2017/03/arton-dual-citizenship.jpg"
                alt="Arton dual citizenship banner"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* SECTION: How do I acquire */}
            <section id="acquire" className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                How Do I Acquire Dual Citizenship?
              </h2>
              <p className="mb-4">
                There are several ways of acquiring a second citizenship and the
                corresponding passport. These are birth, naturalization,
                marriage, and investment.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Birth
              </h3>
              <p>
                Some countries allow non-resident individuals to obtain
                citizenship if their parents were born in that country. For
                example, certain countries allow persons living abroad to obtain
                citizenship provided they can show in the application that their
                parents are citizens.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Naturalization
              </h3>
              <p>
                Naturalization is the process by which a resident of a country
                can acquire citizenship, usually by residing in that country for
                a certain number of years as a permanent resident. It is
                important to double check the requirements of your country of
                residence if you hope to acquire a second citizenship through
                naturalization.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Marriage
              </h3>
              <p>
                Some countries grant fast-track permanent resident status to
                individuals who have married a citizen of that country, thereby
                speeding up the time to citizenship.
              </p>

              <h3 className="mt-3 text-lg font-semibold text-[#5b432e]">
                Investment
              </h3>
              <p>
                More and more countries are offering{" "}
                <a
                  href="https://www.artoncapitals.com/citizenship-by-investment/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b4833f] underline-offset-2 hover:underline"
                >
                  citizenship by investment programs
                </a>{" "}
                or{" "}
                <a
                  href="https://www.artoncapitals.com/residency-by-investment/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#b4833f] underline-offset-2 hover:underline"
                >
                  residency by investment programs
                </a>{" "}
                to high-net-worth investors. These programs typically require a
                qualifying investment in the host country’s economy and can
                provide a fast, predictable route to residence and eventually
                citizenship.
              </p>

              <div className="mt-6">
                <a
                  href="https://www.artoncapitals.com/tools/program-match/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#b4833f] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-black"
                >
                  Which Program Is Right for You?
                </a>
              </div>
            </section>

            {/* SECTION: Countries list (sample) */}
            <section id="listcountries" className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                Which Countries Allow or Recognize Dual Citizenship?
              </h2>
              <p className="mb-4">
                Many countries allow dual citizenship outright, while others
                allow it only in special circumstances. Below is an example of
                how this information can be structured. You can extend or replace
                this with your full list.
              </p>

              <div className="overflow-x-auto rounded-lg border border-[#e3ddd2] bg-white">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#f8f3ea]">
                    <tr>
                      <th className="border-b border-[#e3ddd2] px-3 py-2 text-left font-semibold">
                        Country
                      </th>
                      <th className="border-b border-[#e3ddd2] px-3 py-2 text-left font-semibold">
                        Dual Citizenship
                      </th>
                      <th className="border-b border-[#e3ddd2] px-3 py-2 text-left font-semibold">
                        Conditions / Exceptions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Afghanistan
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">No</td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Former citizens who fled due to instability or war may
                        still informally hold Afghan nationality, but dual
                        citizenship is not formally recognized.
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Albania
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Yes
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Dual citizenship generally permitted.
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Austria
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">No</td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Typically disallowed, except if dual nationality is held
                        from birth or permitted in the interest of Austria.
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Canada
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Yes
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Canada allows multiple citizenships without requiring
                        renunciation.
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Nigeria
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Yes
                      </td>
                      <td className="border-b border-[#efe7d9] px-3 py-2">
                        Dual citizenship allowed for citizens of Nigeria by
                        birth.
                      </td>
                    </tr>
                    <tr className="align-top">
                      <td className="px-3 py-2">United States</td>
                      <td className="px-3 py-2">Yes</td>
                      <td className="px-3 py-2">
                        Dual citizenship is tolerated; U.S. citizens must still
                        fulfil U.S. legal obligations regardless of other
                        nationalities.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                * You can replace this sample with your full, detailed table
                using your own data. If you want, I can wire your exact HTML
                table via <code>dangerouslySetInnerHTML</code> next.
              </p>
            </section>

            {/* SECTION: Triple citizenship */}
            <section id="triple" className="mb-10">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                Do Countries Allow Triple Citizenship?
              </h2>
              <p className="mb-3">
                Some countries do allow their citizens to hold multiple
                citizenships. Others limit you to one or two, or require you to
                renounce existing citizenships when acquiring a new one.
              </p>
              <p className="mb-3">
                To know whether triple citizenship is allowed in your case, you
                must check the nationality laws of{" "}
                <strong>each country involved</strong> and verify any limits on
                the number of citizenships permitted.
              </p>
              <p>
                Always refer to official government sources or consult a
                specialist advisor before making decisions that affect your
                citizenship status.
              </p>
            </section>

            {/* SECTION: Closing / What can Arton do */}
            <section className="mb-4">
              <h2 className="mb-3 text-2xl font-semibold text-[#5b432e]">
                What Can Arton Do for You?
              </h2>
              <p className="mb-3">
                Arton Capital empowers individuals and families to become Global
                Citizens. As a financial advisory firm specializing in investor
                programs for residence and citizenship, they act as the link
                between your goals and the right program.
              </p>
              <p>
                They support governments, consultants, legal and financial
                professionals, and investors in meeting their goals efficiently,
                effectively, and responsibly.
              </p>

              <div className="mt-6">
                <a
                  href="https://www.artoncapitals.com/become-a-global-citizen/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#b4833f] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-black"
                >
                  Contact Us to Become a Global Citizen
                </a>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
