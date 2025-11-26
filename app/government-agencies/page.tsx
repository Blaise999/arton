// app/government-agencies/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Agencies - Arton Capital",
  description:
    "Global political leaders are dedicated to fostering economic sustainability, mitigating risk and securing a healthy environment. Arton advises governments on attracting foreign direct investment through residency and citizenship programs.",
};

type RoleKey = "strategicAdvisory" | "financialIntermediary" | "marketingAgent";

type Jurisdiction = {
  name: string;
  flagSrc: string;
  flagAlt: string;
  roles: Partial<Record<RoleKey, { year?: string }>>;
};

const JURISDICTIONS: Jurisdiction[] = [
  {
    name: "Canada (Quebec)",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/10/PC-canada-icon.png",
    flagAlt: "Flag of Quebec",
    roles: {
      strategicAdvisory: {},
      financialIntermediary: { year: "2006" },
    },
  },
  {
    name: "Bulgaria",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2014/07/PC-bulgaria-icon.png",
    flagAlt: "Flag of Bulgaria",
    roles: {
      strategicAdvisory: {},
    },
  },
  {
    name: "Cyprus",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2014/02/Cyprus.png",
    flagAlt: "Flag of Cyprus",
    roles: {
      strategicAdvisory: {},
      marketingAgent: { year: "2019" },
    },
  },
  {
    name: "Montenegro",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2019/03/MNE-icon.png",
    flagAlt: "Flag of Montenegro",
    roles: {
      marketingAgent: { year: "2019" },
    },
  },
  {
    name: "Hungary",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/10/PC-hungary-icon.png",
    flagAlt: "Flag of Hungary",
    roles: {
      strategicAdvisory: {},
      financialIntermediary: { year: "2013" },
    },
  },
  {
    name: "Anguilla",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2019/09/PC-Anguilla-icon-6.png",
    flagAlt: "Flag of Anguilla",
    roles: {
      strategicAdvisory: { year: "2019" },
    },
  },
  {
    name: "Antigua & Barbuda",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-antigua-icon.png",
    flagAlt: "Flag of Antigua & Barbuda",
    roles: {
      strategicAdvisory: {},
      marketingAgent: { year: "2013" },
    },
  },
  {
    name: "Dominica",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-dominica-icon.png",
    flagAlt: "Flag of Dominica",
    roles: {
      marketingAgent: { year: "2013" },
    },
  },
  {
    name: "Grenada",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/12/PC-grenada-icon.png",
    flagAlt: "Flag of Grenada",
    roles: {
      marketingAgent: { year: "2014" },
    },
  },
  {
    name: "Saint Lucia",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2015/12/PC_Saint_Lucia_icon.png",
    flagAlt: "Flag of Saint Lucia",
    roles: {
      strategicAdvisory: {},
      marketingAgent: { year: "2016" },
    },
  },
  {
    name: "St. Kitts & Nevis",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2013/07/PC-stKitts-icon.png",
    flagAlt: "Flag of St. Kitts & Nevis",
    roles: {
      marketingAgent: { year: "2014" },
    },
  },
  {
    name: "Armenia",
    flagSrc:
      "https://www.artoncapital.com/wp-content/uploads/2017/06/PC-Armenia-icon-6.png",
    flagAlt: "Flag of Armenia",
    roles: {
      strategicAdvisory: { year: "2017" },
    },
  },
];

const ROLE_ROWS: { key: RoleKey; label: string }[] = [
  { key: "strategicAdvisory", label: "STRATEGIC ADVISORY ROLE" },
  { key: "financialIntermediary", label: "APPROVED FINANCIAL INTERMEDIARY" },
  { key: "marketingAgent", label: "MARKETING / AUTHORIZED AGENT" },
];

export default function GovernmentAgenciesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero / Slider (single slide equivalent) */}
      <section className="relative h-[260px] md:h-[360px] lg:h-[420px]">
        <img
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/slider1-homepage.jpg"
          alt="Attract Global Citizens"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
            Government Agencies
          </p>
          <h1 className="mt-3 text-3xl font-semibold uppercase text-white md:text-4xl lg:text-5xl">
            Attract Global Citizens
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-100 md:text-base">
            Increase foreign direct investment in your country.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        {/* Intro quote */}
        <blockquote className="border-l-4 border-amber-500/70 bg-amber-50/40 px-4 py-3 text-sm italic text-slate-700 sm:text-base">
          “Cooperation, solidarity and innovation are the only answers. This is
          why global citizenship is so important, underpinned by a sense of
          common belonging, shared purpose and social justice.”{" "}
          <span className="not-italic font-semibold">
            – Mrs. Irina Bokova, Director-General, UNESCO
          </span>
        </blockquote>

        {/* Global Citizenship for Governments */}
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-slate-800 sm:text-[0.95rem]">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Global Citizenship for Governments
          </h2>
          <p>
            Governments realize that high net worth individuals benefit every
            economy. They create jobs and open businesses, develop or utilize
            existing infrastructure, pay taxes and make social contributions
            that boost the local economy, and have their share in GDP growth. At
            the same time, future global citizens are a powerful source for the
            exchange of successful business practices, know-how, ideas for
            sustainable development and much more.
          </p>
          <p>
            Governments are seeking to attract high net worth individuals for
            all of the above reasons. This can be achieved by introducing or
            optimizing adequate legislative mechanisms that offer local
            incentives and benefits, such as residency or citizenship.
            Globalization and the global migration of people, economy and
            capital have changed the perception of citizenship as a pure
            national identity to one of global identity. The world is
            increasingly becoming one global village.
          </p>
        </div>

        {/* Arton’s commitment */}
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-800 sm:text-[0.95rem]">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            Arton’s commitment
          </h3>
          <p>
            Arton has extensive experience in providing professional advice to
            governments that seek to better utilize the possibilities of
            attracting foreign direct investments by means of investment
            immigration programs. We provide comprehensive analyses on existing
            practices as well as research on current industry trends, thereby
            providing focused and tailored advice to each jurisdiction.
          </p>
          <p>
            Since its founding in Canada, where Arton is an authorized financial
            intermediary for the Quebec Immigrant Investor program, Arton has
            significantly expanded its international reach by acting as an
            authorized marketing agent or professional advisor in the following
            jurisdictions:
          </p>
        </div>

        {/* Jurisdictions table */}
        <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full border-collapse text-xs sm:text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border-b border-slate-200 px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  &nbsp;
                </th>
                {JURISDICTIONS.map((j) => (
                  <th
                    key={j.name}
                    className="border-b border-l border-slate-200 px-3 py-3 text-left align-bottom text-[11px] font-semibold uppercase tracking-wide text-slate-700"
                  >
                    <div className="flex flex-col items-start gap-1">
                      <img
                        src={j.flagSrc}
                        alt={j.flagAlt}
                        className="h-5 w-auto rounded-sm border border-slate-200 bg-white object-contain"
                      />
                      <span className="whitespace-nowrap text-[11px] font-medium normal-case text-slate-700">
                        {j.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROLE_ROWS.map((role) => (
                <tr key={role.key} className="even:bg-slate-50/60">
                  <th className="border-t border-slate-200 px-3 py-4 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-600 align-top">
                    {role.label.split(" / ").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </th>
                  {JURISDICTIONS.map((j) => {
                    const info = j.roles[role.key];
                    return (
                      <td
                        key={j.name}
                        className="border-t border-l border-slate-200 px-2 py-4 text-center align-top"
                      >
                        {info ? (
                          <div className="flex flex-col items-center gap-1">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500 text-[10px] font-bold text-emerald-600">
                              ✓
                            </span>
                            {info.year && (
                              <span className="text-[11px] text-slate-500">
                                {info.year}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-300">–</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small explanatory text under table */}
        <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
          Arton-affiliated companies are listed and publicly available on the
          respective government agency’s website. Arton Investments is one of
          the 22 brokers and trust companies authorized to facilitate the Quebec
          Immigrant Investor Program of Canada. The company is regulated by the
          Investment Industry Regulatory Organization of Canada (IIROC) and is
          also a member of the Canadian Investor Protection Fund (CIPF).
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-800 sm:text-[0.95rem]">
          Arton is currently advising other jurisdictions on the development of
          global citizenship programs custom-tailored to their economic and
          strategic goals.
        </p>

        {/* Benefits of working with Arton */}
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-slate-800 sm:text-[0.95rem]">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            Benefits of working with Arton
          </h3>
          <p>
            At Arton we develop policies and procedures to facilitate the
            institutional set up of new programs. We leverage our expertise and
            analysis of legal practices and procedural solutions relating to key
            issues, including the following:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Advising governments on how to maximize the social and economic
              benefits through the utilization of global citizenship programs
              while maintaining the integrity of the national passport.
            </li>
            <li>
              Producing comprehensive industry reports and analyses that support
              the administering of legislative changes and the adoption of new
              legal practices in order to enhance or adopt mechanisms for the
              implementation of Global Citizen programs.
            </li>
            <li>
              In-depth analysis of the specific economic needs and the potential
              to meet these needs through a customized investment model.
            </li>
            <li>
              Providing a suite of customized methodologies and practical guides
              to be used in the process of structuring and implementing
              governmental policies in order to attract FDI by means of
              residence and citizenship programs.
            </li>
            <li>
              Implementing policies in line with know your client procedures,
              politically exposed persons, anti-money laundering, and countering
              the financing of terrorism.
            </li>
            <li>
              Securing the transparency of the investment process and advising
              on the implementation of a sound communication policy to
              popularize the benefits from the program once active.
            </li>
          </ul>
          <p>
            Our long-term partnership with industry specialists focusing on
            investigative due diligence, risk management, AML, wealth management
            and tax advice, and our broad international network of Certified
            Partners enables us to offer turnkey solutions to every government.
          </p>
        </div>

        {/* Closing quote */}
        <blockquote className="mt-10 border-l-4 border-amber-500/70 bg-amber-50/40 px-4 py-3 text-sm italic text-slate-700 sm:text-base">
          “Since the inception of our citizenship by investment programme, Arton
          plays an important role not only in the promotion but also in
          enhancing the programme’s features and its competitiveness by
          regularly sharing with our government insights and recommendations
          with respect to acquiring and sustaining best industry practices.
          Arton has assumed an active and important role in attracting foreign
          direct investments to our country.”{" "}
          <span className="not-italic font-semibold">
            – Hon. Gaston Browne, Prime Minister, Antigua and Barbuda
          </span>
        </blockquote>

        <hr className="mt-10 border-slate-200" />
      </section>
    </main>
  );
}
