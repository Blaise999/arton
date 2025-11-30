// app/global-citizen-programs/malta/page.tsx

export const metadata = {
  title: "Malta Residency by Investment | Arton Capital",
  description:
    "Discover Malta's top residency program. Enjoy EU access, tax benefits, and a strong economy. Apply today for fast-track approval!",
};

const HERO_BG =
  "https://www.artoncapital.com/wp-content/uploads/2025/01/Arton-slider-Malta.jpg";

const MAP_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2025/01/map-Malta.png";

const BROCHURE_IMAGE =
  "https://www.artoncapital.com/wp-content/uploads/2025/01/Arton_Brochure_Malta_RCBI-2025-01-P1-2.jpg";

// Real Arton Index values from the original page (canvas data-end attributes)
const ARTON_INDEX = {
  cost: 13,
  speed: 17,
  globalMobility: 20,
  qualityOfLife: 20,
  simplicity: 19,
};

// Simple overall score – you can tweak if you later find the exact formula
const OVERALL_INDEX = Math.round(
  (ARTON_INDEX.cost +
    ARTON_INDEX.speed +
    ARTON_INDEX.globalMobility +
    ARTON_INDEX.qualityOfLife +
    ARTON_INDEX.simplicity) 
);

export default function MaltaResidencyByInvestmentPage() {
  return (
    <main className="bg-[#f6f2ec] text-[#222]">
      {/* HERO */}
      <section
        className="relative w-full flex items-center justify-center text-center min-h-[320px] md:min-h-[380px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.8)), url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="title text-4xl md:text-5xl font-semibold tracking-[0.18em] text-white uppercase">
            Malta
          </h1>
          <h2 className="sub_title mt-3 text-lg md:text-2xl italic text-[#f3cd78]">
            Permanent Residency by Investment
          </h2>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT COLUMN */}
          <article className="bg-white/95 border border-[#eadfce] rounded-lg shadow-sm px-5 md:px-7 py-6 md:py-8 text-[14px] md:text-[15px] leading-relaxed text-[#444]">
            <p className="program_intro mb-5">
              Although one of the smallest countries in the world, Malta offers
              some of the biggest opportunities – from a thriving economy that
              is highly diversified in multiple sectors, including financial
              services, high-value manufacturing, and tourism; as well as being
              a natively English-speaking member of the European Union and the
              Eurozone. Located in the central Mediterranean Sea, Malta&apos;s
              strategic position plays an important role in its attraction to
              both visitors and investors eager to discover the many hidden gems
              of this remarkably picturesque and globally-acclaimed island.
            </p>

            {/* WHY CHOOSE MALTA? */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              WHY CHOOSE MALTA?
            </h3>
            <p className="mb-3">
              As an EU member since 2004, Malta is often considered the gateway
              to the Euro-Mediterranean region and has become an excellent
              choice for investment due to its stable political climate, growing
              economy, and booming tourist property market.
            </p>
            <p className="mb-3">
              It also has some of the most reputable banks in the world –
              creating an optimal environment for investors looking to diversify
              their portfolio and seize opportunities worldwide:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-6">
              <li>Fastest permanent residency program in Europe;</li>
              <li>Member of the European Union;</li>
              <li>Member of the British Commonwealth;</li>
              <li>Fastest growing economy in the EU, rated A+ by Fitch (2024);</li>
              <li>Diverse business and investment opportunities;</li>
              <li>First-class healthcare and educational systems;</li>
              <li>
                Voted 2nd safest country in the world (World Risk Index 2020).
              </li>
            </ul>

            {/* QUALIFICATIONS */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              QUALIFICATIONS FOR MALTA PERMANENT RESIDENCY PROGRAM (MPRP)
            </h3>
            <p className="mb-3">
              To qualify for one of the fastest permanent residency programs
              (MPRP) in Europe, applicants must fulfill the investment
              requirements in addition to meeting the following criteria:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-6">
              <li>Be non-EU, non-EEA, and non-Swiss national;</li>
              <li>Main applicant must be 18 years of age, or older;</li>
              <li>
                Have a certificate of good health from a reputable health
                system;
              </li>
              <li>
                Proof of capital of either €500,000 in total assets, including
                €150,000 in liquid financial assets or €650,000 in total assets,
                including €75,000 in liquid financial assets;
              </li>
              <li>Have a stable and regular source of income;</li>
              <li>Have a clean criminal record.</li>
            </ul>

            {/* BENEFITS */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              BENEFITS OF THE MALTA PERMANENT RESIDENCY PROGRAM (MPRP)
            </h3>
            <p className="mb-3">
              The Malta Permanent Residency Program (MPRP) grants applicants and
              their dependents a lifetime residence permit along with other
              exclusive benefits:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-6">
              <li>Obtain residency permit within 9 months;</li>
              <li>The right to live and settle indefinitely in Malta;</li>
              <li>Access to an excellent healthcare system;</li>
              <li>Visa-free travel throughout the Schengen area;</li>
              <li>
                No physical residency requirements during or after the
                application;
              </li>
              <li>Inclusive program that allows the addition of dependents.</li>
            </ul>

            {/* INVESTMENT REQUIREMENTS */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              INVESTMENT REQUIREMENTS FOR THE MALTA PERMANENT RESIDENCY PROGRAM
              (MPRP)
            </h3>

            <h4 className="mt-4 mb-2 text-[15px] font-semibold tracking-[0.12em] uppercase text-[#4b3b30]">
              Real Estate Rent
            </h4>
            <p className="mb-3">
              Applicants may rent a residential unit in Malta for five years for
              a minimum annual lease of €14,000, in addition to:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-5">
              <li>€37,000: Government contribution, and</li>
              <li>€2,000: Donation to a registered NGO in Malta.</li>
            </ul>

            <h4 className="mt-4 mb-2 text-[15px] font-semibold tracking-[0.12em] uppercase text-[#4b3b30]">
              Real Estate Purchase
            </h4>
            <p className="mb-3">
              Applicants may purchase a residential unit in Malta for a minimum
              value of €375,000, and hold it for a minimum of five years, in
              addition to:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-6">
              <li>€37,000: Government contribution, and</li>
              <li>€2,000: Donation to a registered NGO in Malta.</li>
            </ul>

            {/* APPLICATION FEES */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              APPLICATION FEES FOR THE MALTA PERMANENT RESIDENCY PROGRAM (MPRP)
            </h3>
            <p className="mb-3">
              Arton’s advisory fees cover legal and procedural representation
              for the main applicant and qualified dependents throughout the
              submission of the residence application. Advisory fees are
              non-refundable.
            </p>
            <p className="mb-6">
              All application fees issued by the government of Malta and by
              Arton may be subject to change. Fees depend on the number of
              applicants and the complexity of the process.
            </p>

            {/* ADMINISTRATIVE FEES */}
            <h3 className="mt-6 mb-2 text-[17px] font-semibold tracking-[0.14em] uppercase text-[#4b3b30]">
              ADMINISTRATIVE FEES AND CONTRIBUTIONS FOR THE MALTA PERMANENT
              RESIDENCY PROGRAM (MPRP)
            </h3>

            <h4 className="mt-4 mb-2 text-[15px] font-semibold tracking-[0.12em] uppercase text-[#4b3b30]">
              Main Applicant Administration Fee
            </h4>
            <ul className="list-disc list-outside pl-5 space-y-1 mb-5">
              <li>€15,000 payable within one month of application submission</li>
              <li>
                €45,000 payable within two months of receiving a Letter of
                Approval in Principle
              </li>
            </ul>

            <h4 className="mt-4 mb-2 text-[15px] font-semibold tracking-[0.12em] uppercase text-[#4b3b30]">
              Dependent Fees
            </h4>
            <p className="mb-2">
              €7,500 per each adult dependent excluding the spouse.
            </p>
            <p className="mb-2">
              Payable within two months of receiving a Letter of Approval in
              Principle.
            </p>
            <p className="mb-2">
              Additional fees apply for issuance of residence cards and if
              dependents are added to the application after the main applicant
              is approved.
            </p>
            <p className="mb-6">
              Payment of additional due diligence, residence card issuance, and
              other administrative fees may apply.
            </p>

            <br />

            {/* NEXT STEPS */}
            <h4 className="mt-4 mb-3 text-[15px] font-semibold tracking-[0.12em] uppercase text-[#4b3b30]">
              NEXT STEPS:
            </h4>

            <div className="container program-cost-footer grid gap-5 md:grid-cols-3 mb-6">
              <div className="tools text-center bg-[#fdf7ee] border border-[#eadfce] rounded-lg px-4 py-4">
                <a
                  href="https://www.artonscapitalholdings.com/tools/program-check/"
                  className="program-check arton-tools inline-block text-[13px] font-semibold tracking-[0.16em] uppercase text-[#4b3b30] hover:text-[#cc9966]"
                  title="Program Check"
                  target="_blank"
                  rel="noreferrer"
                >
                  Program Check
                </a>
                <h4 className="mt-2 text-[13px] font-semibold">
                  <a
                    href="https://www.artonscapitalholdings.com/tools/program-check/"
                    title="Program Check"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#cc9966]"
                  >
                    Program Check
                  </a>
                </h4>
                <span className="block mt-1 text-[12px] text-[#777]">
                  Compare the different programs side by side and examine their
                  features.
                </span>
              </div>

              <div className="tools text-center bg-[#fdf7ee] border border-[#eadfce] rounded-lg px-4 py-4">
                <a
                  href="https://www.artonscapitalholdings.com/tools/program-cost/"
                  className="program-cost arton-tools inline-block text-[13px] font-semibold tracking-[0.16em] uppercase text-[#4b3b30] hover:text-[#cc9966]"
                  title="Program Cost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Program Cost
                </a>
                <h4 className="mt-2 text-[13px] font-semibold">
                  <a
                    href="https://www.artonscapitalholdings.com/tools/program-cost/"
                    title="Program Cost"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#cc9966]"
                  >
                    Program Cost
                  </a>
                </h4>
                <span className="block mt-1 text-[12px] text-[#777]">
                  Find out the cost estimates for each program tailored to your
                  family.
                </span>
              </div>

              <div className="tools text-center bg-[#fdf7ee] border border-[#eadfce] rounded-lg px-4 py-4">
                <a
                  href="https://www.artonscapitalholdings.com/tools/program-map/"
                  className="program-map arton-tools inline-block text-[13px] font-semibold tracking-[0.16em] uppercase text-[#4b3b30] hover:text-[#cc9966]"
                  title="Program Map"
                  target="_blank"
                  rel="noreferrer"
                >
                  Program Map
                </a>
                <h4 className="mt-2 text-[13px] font-semibold">
                  <a
                    href="https://www.artonscapitalholdings.com/tools/program-map/"
                    title="Program Map"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#cc9966]"
                  >
                    Program Map
                  </a>
                </h4>
                <span className="block mt-1 text-[12px] text-[#777]">
                  See the power of global mobility for each passport.
                </span>
              </div>
            </div>

            {/* CTA: Contact us. */}
            <div className="action_button_programs mt-4 flex flex-wrap items-center gap-3 border border-[#eadfce] rounded-full px-5 py-3 bg-[#fbf3e8]">
              <p className="text-[13px] text-[#555] mb-0">
                Need more information?
              </p>
              <a
                href="https://www.artonscapitalholdings.com/become-a-global-citizen/"
                className="inline-flex items-center justify-center rounded-full border border-[#cc9966] bg-[#cc9966] px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-black hover:border-black transition"
              >
                Contact us.
              </a>
            </div>
          </article>

          {/* RIGHT COLUMN */}
          <aside className="space-y-7 lg:space-y-8">
            {/* ARTON INDEX SCORE */}
            <section className="bg-white border border-[#eadfce] rounded-lg shadow-sm px-5 py-5">
              <h2 className="mb-4 text-[18px] font-semibold tracking-[0.16em] uppercase text-[#3d3d3d]">
                ARTON INDEX SCORE
              </h2>

              {/* Concentric ring chart – static, no JS, values baked in */}
              <div className="wrapper country-chart flex items-center justify-center mb-4">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Simplicity (outer) – 30 */}
                  <div
                    className="absolute inset-0 rounded-full border-[8px] border-transparent"
                    style={{
                      backgroundImage:
                        "conic-gradient(#3D3D3D 0deg 108deg, #E9E9E9 108deg 360deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Quality of life – 100 */}
                  <div
                    className="absolute inset-3 rounded-full border-[7px] border-transparent"
                    style={{
                      backgroundImage:
                        "conic-gradient(#848486 0deg 360deg, #E9E9E9 360deg 360deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Global mobility – 75 */}
                  <div
                    className="absolute inset-6 rounded-full border-[7px] border-transparent"
                    style={{
                      backgroundImage:
                        "conic-gradient(#DA9C5F 0deg 270deg, #E9E9E9 270deg 360deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Speed – 15 */}
                  <div
                    className="absolute inset-9 rounded-full border-[7px] border-transparent"
                    style={{
                      backgroundImage:
                        "conic-gradient(#C0C1C3 0deg 54deg, #E9E9E9 54deg 360deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Cost – 80 */}
                  <div
                    className="absolute inset-12 rounded-full border-[7px] border-transparent"
                    style={{
                      backgroundImage:
                        "conic-gradient(#E6BD9D 0deg 288deg, #E9E9E9 288deg 360deg)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Center score */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-sm">
                    <span className="text-2xl font-semibold text-[#3d3d3d]">
                      {OVERALL_INDEX}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="canvas-data grid grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-[#444] mb-4">
                <li className="color-1 flex items-center justify-between">
                  <strong className="text-[15px]">{ARTON_INDEX.cost}</strong>
                  <span className="uppercase tracking-[0.14em] text-[11px] text-[#777]">
                    cost
                  </span>
                </li>
                <li className="color-2 flex items-center justify-between">
                  <strong className="text-[15px]">{ARTON_INDEX.speed}</strong>
                  <span className="uppercase tracking-[0.14em] text-[11px] text-[#777]">
                    speed
                  </span>
                </li>
                <li className="color-3 flex items-center justify-between">
                  <strong className="text-[15px]">
                    {ARTON_INDEX.globalMobility}
                  </strong>
                  <span className="uppercase tracking-[0.14em] text-[11px] text-[#777]">
                    global mobility
                  </span>
                </li>
                <li className="color-5 flex items-center justify-between">
                  <strong className="text-[15px]">
                    {ARTON_INDEX.qualityOfLife}
                  </strong>
                  <span className="uppercase tracking-[0.14em] text-[11px] text-[#777]">
                    quality of life
                  </span>
                </li>
                <li className="color-4 flex items-center justify-between col-span-2">
                  <strong className="text-[15px]">
                    {ARTON_INDEX.simplicity}
                  </strong>
                  <span className="uppercase tracking-[0.14em] text-[11px] text-[#777]">
                    simplicity
                  </span>
                </li>
              </ul>

              <hr className="sep20 border-t border-[#e4d7c7] my-3" />

              <p className="text-center text-[12px] leading-relaxed text-[#777]">
                Updated yearly, the Arton Index is an overall assessment and
                comparative benchmark of the country and its investment program.
              </p>
            </section>

            <hr className="grey-hr border-t border-[#e4d7c7]" />

            {/* Map + stats */}
            <section className="bg-white border border-[#eadfce] rounded-lg shadow-sm overflow-hidden">
              <div className="center-image w-full flex items-center justify-center bg-[#fef8f0] px-4 pt-4 pb-3">
                <img
                  src={MAP_IMAGE}
                  alt="Malta"
                  className="max-h-60 w-auto object-contain"
                />
              </div>

              <div className="p20 accent-color bg-[#fdf5ea] px-5 py-4 text-[13px] text-[#444] space-y-1.5">
                <p className="country_data text-[15px] font-semibold text-[#222]">
                  535,064
                </p>
                <p>Population Growth: 0.33%</p>
                <p className="country_data mt-2 text-[15px] font-semibold text-[#222]">
                  34,819 USD
                </p>
                <p>GDP (per capita)</p>
                <p className="mt-2">GDP (purchasing power parity)</p>
                <p>26 billion USD</p>
                <p className="country_data mt-2 text-[15px] font-semibold text-[#222]">
                  172
                </p>
                <p>Visa free countries</p>
              </div>
            </section>

            <hr className="grey-hr border-t border-[#e4d7c7]" />

            {/* Country facts */}
            <section className="p20 bg-white border border-[#eadfce] rounded-lg shadow-sm px-5 py-5 text-[13px] text-[#444] space-y-2">
              <p className="country_data_black font-semibold text-[13px] text-[#222]">
                LOCATION
              </p>
              <p>
                Southern Europe, islands in the Mediterranean Sea, south of
                Sicily
              </p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                CAPITAL
              </p>
              <p>Valletta</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                DIFFERENCE
              </p>
              <p>UTC +1</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                TOTAL AREA
              </p>
              <p>316 km²</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                AGE DEMOGRAPHICS
              </p>
              <p>
                0-14: 14.29%, 15-24: 11.03%, 25-54: 40.92%, 55-64: 13.25%, 65+:
                20.51%
              </p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                LANGUAGE
              </p>
              <p>
                Maltese (official): 90.1% English (official): 6% Multilingual:
                3% Other: 0.9%
              </p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                RELIGIONS
              </p>
              <p>Roman Catholic (official): More than 90%</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                GOVERNMENT TYPE
              </p>
              <p>Parliamentary republic</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                CURRENCY
              </p>
              <p>Euro (EUR)</p>

              <p className="country_data_black mt-2 font-semibold text-[13px] text-[#222]">
                EXCHANGE RATE
              </p>
              <p>1 USD = 0.885 EUR</p>
            </section>

            {/* Brochure block */}
            <section className="p20 related-documents bg-white border border-[#eadfce] rounded-lg shadow-sm px-5 py-5">
              <p className="country_data_black mb-3 font-semibold text-[13px] uppercase tracking-[0.16em] text-[#222]">
                DOWNLOAD BROCHURE (PDF)
              </p>

              <div className="mb-4 flex justify-start">
                <a
                  href="#"
                  className="download-pdf-button inline-block rounded-md overflow-hidden border border-[#eadfce] bg-[#fdf5ea] hover:border-[#cc9966] hover:bg-[#fbeeda] transition"
                  id="program"
                >
                  <img
                    src={BROCHURE_IMAGE}
                    alt="Arton_Brochure_Malta_RCBI 2025-01 P1 (2)"
                    className="block max-w-[260px] h-auto"
                  />
                  <br />
                </a>
              </div>

              <div className="publication-wrap" id="pubwrap_program">
                <div className="publication-container border border-[#eadfce] rounded-lg bg-[#faf4ea] px-4 py-4 text-[13px] text-[#444]">
                  <div className="publication-content">
                    <div className="subscribedownload_container">
                      <form
                        name="subscribedownload"
                        className="subscribedownload_box space-y-3"
                        id="subscribedownload_9628"
                        action="#"
                        method="post"
                      >
                        <div className="subscribedownload_signup_form">
                          <div className="subscribedownload_form_row mb-2 font-semibold text-[#333]">
                            Program brochure for Malta
                          </div>

                          <div className="subscribedownload_form_row flex flex-col sm:flex-row gap-3 mb-2">
                            <div className="subscribedownload_form_column subscribedownload_50 flex-1">
                              <input
                                tabIndex={101}
                                className="subscribedownload-input subscribedownload_fullwidth w-full rounded border border-[#cccccc] bg-white/90 px-3 py-2 text-[13px] placeholder:text-[#b5b5b5] focus:outline-none focus:ring-1 focus:ring-[#cc9966]"
                                type="text"
                                id="name_9628"
                                placeholder="Enter your name"
                                title="Enter your name"
                              />
                            </div>
                            <div className="subscribedownload_form_column subscribedownload_50 flex-1">
                              <input
                                tabIndex={102}
                                className="subscribedownload-input subscribedownload_fullwidth w-full rounded border border-[#cccccc] bg-white/90 px-3 py-2 text-[13px] placeholder:text-[#b5b5b5] focus:outline-none focus:ring-1 focus:ring-[#cc9966]"
                                type="email"
                                id="email_9628"
                                placeholder="Enter your e-mail"
                                title="Enter your e-mail"
                              />
                            </div>
                          </div>

                          <div className="mt-2 flex items-center gap-3">
                            <button
                              type="submit"
                              tabIndex={103}
                              className="subscribedownload-submit inline-flex items-center justify-center rounded-full bg-[#cc9966] px-4 py-1.5 text-[13px] font-semibold text-white border border-[#cc9966] hover:bg-black hover:border-black transition"
                            >
                              Get Download Link
                            </button>
                            <span className="text-[11px] text-[#777]">
                              You will receive the brochure link by email.
                            </span>
                          </div>
                          <div
                            id="message_9628"
                            className="subscribedownload_message mt-2 text-[12px] text-[#777]"
                          />
                        </div>

                        <div
                          className="subscribedownload_confirmation_container hidden"
                          id="subscribedownload_confirmation_container_9628"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="widget widget_pindexw" />
          </aside>
        </div>
      </section>
    </main>
  );
}
