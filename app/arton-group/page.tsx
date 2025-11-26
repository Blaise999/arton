// app/arton-group/page.tsx

export const metadata = {
  title: "The Arton Group",
  description:
    "The Arton Group comprises of fully licensed international banking, financial advisory and investment consulting companies tailored to the needs of global citizens.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/arton-group",
  },
  openGraph: {
    title: "The Arton Group",
    description:
      "The Arton Group comprises of fully licensed international banking, financial advisory and investment consulting companies tailored to the needs of global citizens.",
    url: "/arton-group",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2024/07/Arton-become-global-citizen.jpg",
        width: 1200,
        height: 630,
        alt: "Arton Global Citizen",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "The Arton Group",
    description:
      "The Arton Group comprises of fully licensed international banking, financial advisory and investment consulting companies tailored to the needs of global citizens.",
  },
};

type TimelineEvent = {
  year: number;
  month: string; // "Oct"
  title: string;
  text: string;
  href?: string;
};

const TIMELINE_EVENTS: TimelineEvent[] = [
  // 2025
  {
    year: 2025,
    month: "Oct",
    title: "Arton lands in Botswana",
    text:
      "Following the signing of a Memorandum of Understanding, Arton Capital and the Government of Botswana unveiled the groundbreaking Impact Citizenship Program on the sidelines of the 80th United Nations General Assembly in New York City.",
  },
  {
    year: 2025,
    month: "Apr",
    title: "Latvia added to program portfolio",
    text: "Latvia's residency by investment program is now offered by Arton.",
  },

  // 2024
  {
    year: 2024,
    month: "Dec",
    title: "Arton is the exclusive partner for the new GIP in Hungary",
    text:
      "Arton Capital is the exclusive partner outside Greater China of the first and only licensed investment fund for Hungary's new Guest Investor Program.",
  },
  {
    year: 2024,
    month: "Sep",
    title: "Citizenship by Invitation ™",
    text:
      "Arton introduces the concept of Citizenship by Invitation in partnership with Forbes Global Talent and Grenada Investment Migration Agency.",
  },
  {
    year: 2024,
    month: "Jul",
    title: "Malta added to program portfolio",
    text:
      "Malta’s residency and citizenship by investment programs are now offered by Arton.",
  },
  {
    year: 2024,
    month: "Mar",
    title: "Greece added to program portfolio",
    text:
      "Greece’s Golden Visa program is now offered by Arton.",
  },

  // 2023
  {
    year: 2023,
    month: "Mar",
    title: "United Arab Emirates added to program portfolio",
    text:
      "United Arab Emirates’ Golden Visa program is now offered by Arton.",
  },

  // 2022
  {
    year: 2022,
    month: "Jun",
    title: "Arton acquires Sheppa Technologies",
    text:
      "The acquisition of Sheppa Technologies will boost Arton’s innovation and technological growth.",
  },

  // 2021
  {
    year: 2021,
    month: "Sep",
    title: "Türkiye added to program portfolio",
    text:
      "Türkiye’s citizenship by investment program is now offered by Arton.",
  },
  {
    year: 2021,
    month: "Mar",
    title: "Passport Index Mobile App Comes to Android",
    text:
      "Following the incredible success of its iOS mobile app — the unmatched passport experience is now available on Android devices. Now anyone can access real-time ranking and intelligent travel, right at their fingertips!",
    href: "https://play.google.com/store/apps/details?id=com.passportindex.androidapp",
  },
  {
    year: 2021,
    month: "Jan",
    title: "Global Mobility Report 2021 Released",
    text:
      "The Passport Index Global Mobility Report 2021 reveals what rock-bottom for global mobility looks like during a worldwide pandemic.",
    href: "https://www.passportindex.org/reports/Passport-Index-Global-Mobility-Report-2021.pdf",
  },

  // 2020
  {
    year: 2020,
    month: "Dec",
    title: "Launch of the Arton Achievers Program",
    text:
      "As a firm believer that the true value of a company lies in its people, the Arton Achievers Program was launched to recognize and empower the exceptional achievements of the growing global team.",
  },
  {
    year: 2020,
    month: "Nov",
    title: "Arton Partners with SHUAA Capital",
    text:
      "Arton Capital partners with SHUAA, the leading asset management and investment banking platform in MENA, to launch a €100,000,000 real estate investment fund to channel foreign investment into high growth markets.",
    href: "https://www.artoncapital.com/industry-news/press-releases/shuaa-and-arton-announce-partnership-to-encourage-foreign-direct-investment-in-high-growth-markets/",
  },
  {
    year: 2020,
    month: "May",
    title: "Passport Index Reveals New Data on Global Mobility",
    text:
      "The Passport Index reveals new data on the significant damage the Covid-19 pandemic has had on global mobility.",
    href: "https://discover.passportindex.org/press-releases/new-data-reveals-the-collapse-of-global-mobility/",
  },
  {
    year: 2020,
    month: "Mar",
    title: "Launch of the Global Citizen Series Webinars",
    text:
      "Arton launches the Global Citizen Series Webinars to keep industry stakeholders informed and engaged in times of the Covid-19 pandemic.",
    href: "https://www.artoncapital.com/events/",
  },
  {
    year: 2020,
    month: "Jan",
    title: "GCF in Davos during WEF",
    text:
      "The Global Citizen Forum hosts Beyond Boundaries in Davos during the World Economic Forum.",
    href: "https://www.globalcitizenforum.org/story/beyond-boundaries-at-davos-2020/",
  },

  // 2019
  {
    year: 2019,
    month: "Dec",
    title: "The Greatest Passports of the Decade",
    text:
      "The Passport Index published a report on the Greatest Passports of the Decade, revealing how the 2010s truly left a lasting mark on global mobility.",
    href: "https://discover.passportindex.org/press-releases/greatest-passports-of-the-decade/",
  },
  {
    year: 2019,
    month: "Nov",
    title: "Arton Addresses WebSummit 2019",
    text:
      "Armand Arton made the Opening Remarks for the Future Societies panel at the WebSummit 2019 in Lisbon.",
    href: "https://www.armandarton.com/global-citizen-quest/how-thinking-global-is-pushing-our-world-to-think-bigger-and-drive-innovation/",
  },
  {
    year: 2019,
    month: "Oct",
    title: "Arton First to Submit File in Montenegro",
    text:
      "Following the program’s launch, Arton Capital hand delivered the first application for Montenegro’s CIP.",
    href: "https://www.artoncapital.com/industry-news/montenegro-news/arton-capital-first-to-submit-application-for-montenegros-cip/",
  },
  {
    year: 2019,
    month: "Sep",
    title: "Arton Partners with Concordia Annual Summit",
    text:
      "During UNGA week in NYC, Armand Arton moderated a panel on Mobility and the Power of a Passport.",
    href: "https://www.artoncapital.com/industry-news/global-citizenship/arton-capital-brings-industry-discussions-to-nyc-during-unga-week/",
  },
  {
    year: 2019,
    month: "Aug",
    title: "Another Year at Gumball 3000",
    text:
      "Arton Capital transcends borders once again with another year of rallying at Gumball 3000; this time from Mykonos to Ibiza.",
  },
  {
    year: 2019,
    month: "Jun",
    title: "Arton helps launch Select Anguilla",
    text:
      "Arton Capital supports the Government of Anguilla in launching Select Anguilla, a new government agency to administer its Residency-by-Investment programs.",
    href: "https://www.artoncapital.com/industry-news/press-releases/anguilla-launches-not-one-but-two-residency-by-investment-programs/",
  },
  {
    year: 2019,
    month: "May",
    title: "Authorized Agent for Montenegro",
    text:
      "Arton Capital was appointed an Authorized Agent for Montenegro’s Citizenship-by-Investment Program.",
    href: "https://www.artoncapital.com/industry-news/montenegro-news/arton-signs-contract-with-government-of-montenegro/",
  },
  {
    year: 2019,
    month: "May",
    title: "Arton Explores Expansion into Latin America",
    text:
      "Arton Capital supported keynote presentations at the Concordia Americas Summit.",
    href: "https://www.artoncapital.com/industry-news/arton-partners-with-concordia-americas-summit/",
  },
  {
    year: 2019,
    month: "Mar",
    title: "Arton Opens New Office in Brussels",
    text:
      "With a new office just steps away from the European Parliament, Arton aims to facilitate communication with European decision makers.",
    href: "https://www.artoncapital.com/industry-news/europe/arton-brings-cip-industry-to-brussels/",
  },
  {
    year: 2019,
    month: "Feb",
    title: "Arton Capital Retreat in Portugal",
    text:
      "The Arton team gathers from offices around the world in Lisbon to celebrate year-long achievements.",
  },
  {
    year: 2019,
    month: "Jan",
    title: "Arton Capital Opens an Office in Beijing",
    text:
      "Arton Capital further expanded operations in the region with an additional office in Beijing.",
    href: "https://www.artoncapital.com/industry-news/arton/arton-expands-presence-in-asia/",
  },
  {
    year: 2019,
    month: "Jan",
    title: "GCF Hosts First Event in Davos",
    text:
      "On the sidelines of the World Economic Forum in Davos, the Global Citizen Forum hosted an event.",
  },

  // 2018
  {
    year: 2018,
    month: "Dec",
    title: "The Passport Index at the top of the world",
    text:
      "On December 1, 2018, the UAE celebrated their passport's victory in reaching the #1 spot in the Global Passport Ranking.",
    href: "https://discover.passportindex.org/press-releases/the-uae-passport-becomes-the-worlds-most-powerful/",
  },
  {
    year: 2018,
    month: "Oct",
    title: "Arton Opens an Office in St. John’s, Antigua",
    text:
      "Arton enhances its Caribbean operations by announcing the opening of their newest office in St. John’s, Antigua.",
    href: "https://www.artoncapital.com/industry-news/antigua-barbuda/arton-enhances-its-caribbean-operations/",
  },
  {
    year: 2018,
    month: "Sep",
    title: "Arton Signs MOU with Government of Anguilla",
    text:
      "The Government of Anguilla signed a Memorandum of Understanding with Arton Capital aimed at raising revenues through Residency-by-Investment programs.",
    href: "https://www.artoncapital.com/industry-news/arton-and-latitude-sign-a-mou-with-the-government-of-anguilla/",
  },
  {
    year: 2018,
    month: "Aug",
    title: "Arton races at Gumball 3000",
    text:
      "Gumball 3000 is a unique event that transcends borders and reaches over 100 million households in 60 countries.",
  },
  {
    year: 2018,
    month: "Jul",
    title: "Montenegro launches CIP",
    text:
      "After years of consideration, Montenegro joins the list of countries seeking to attract FDI through citizenship by investment programs.",
  },

  // 2017
  {
    year: 2017,
    month: "Oct",
    title: "Global Citizen Forum Sveti Stefan 2017",
    text:
      "Arton hosts the fourth edition of the Global Citizen Forum with over 400 global leaders.",
  },
  {
    year: 2017,
    month: "Jul",
    title: "Arton races at Gumball 3000",
    text:
      "Arton Capital to race for Gumball 3000 glory.",
    href: "https://www.artoncapital.com/industry-news/arton/arton-capital-to-race-for-gumball-3000-glory/",
  },
  {
    year: 2017,
    month: "May",
    title: "Arton is invited to advise Armenia’s Ministry",
    text:
      "Armenia’s government recognizes Arton's experience to attract foreign investments.",
    href: "https://www.artoncapital.com/industry-news/armenia-commits-to-foreign-direct-investments/",
  },
  {
    year: 2017,
    month: "Mar",
    title: "Arton signs a partnership with the HBS Alumni Club of the GCC",
    text:
      "The HBS Alumni Club of the GCC promotes collaboration among HBS alumni, government and business leadership.",
    href: "https://www.youtube.com/watch?v=fZ42oPSbrAw",
  },
  {
    year: 2017,
    month: "Mar",
    title: "Arton becomes a YPO Global Affiliate Partner",
    text:
      "Arton Capital sponsors YPO Edge in Vancouver in its capacity as a Global Affiliate Partner.",
  },
  {
    year: 2017,
    month: "Feb",
    title: "Arton participates in Montenegro’s tender",
    text:
      "Montenegro's government plans to offer citizenship to foreign investors who are willing to invest money in the country.",
  },
  {
    year: 2017,
    month: "Jan",
    title: "Arton launches Passport Index 2017",
    text:
      "Passport Index 2017 delivers up-to-date, real-time information on visa-free scores of almost every country.",
  },
  {
    year: 2017,
    month: "Jan",
    title: "Armand Arton begins his Global Citizen Quest",
    text:
      "Armand Arton takes a sabbatical to discover and reinvent the future of global citizenship.",
    href: "https://www.armandarton.com/",
  },

  // 2016
  {
    year: 2016,
    month: "Dec",
    title: "Arton launches the 2016 Philanthropy Report",
    text:
      "Already in its third edition, the Philanthropy Report is an annual study on UHNW giving trends.",
  },
  {
    year: 2016,
    month: "Jun",
    title: "Arton in Montenegro",
    text:
      "Arton Capital sets up operations in Podgorica, Montenegro. Miloš Stojanović is appointed Managing Director.",
  },
  {
    year: 2016,
    month: "Jun",
    title: "Arton Capital Hungary adds Vietnam",
    text:
      "Arton Capital Hungary is awarded exclusive rights to represent the Hungarian Residency Bond Program in Vietnam.",
  },
  {
    year: 2016,
    month: "May",
    title: "Arton in Singapore",
    text:
      "Arton Capital opens its first office in Singapore. Philippe May is appointed Managing Director.",
  },
  {
    year: 2016,
    month: "Apr",
    title: "Arton launches Passport Index 2016",
    text:
      "Passport Index 2016 delivers new ways to visualize the power of passports.",
  },
  {
    year: 2016,
    month: "Mar",
    title: "Arton adds Portugal",
    text:
      "Arton adds Portugal to its portfolio of global citizenship programs.",
  },
  {
    year: 2016,
    month: "Feb",
    title: "Arton Capital Hungary adds six new exclusive countries",
    text:
      "Arton Capital Hungary is awarded exclusive rights in Indonesia, Kazakhstan, Nigeria, Singapore, Thailand and the USA.",
  },
  {
    year: 2016,
    month: "Jan",
    title: "Arton appoints new CEO",
    text:
      "John Hanafin joins Arton as its CEO to drive the group’s development.",
  },
  {
    year: 2016,
    month: "Jan",
    title: "Arton celebrates 10 years of innovation and excellence",
    text:
      "2016 marks the 10th anniversary of Arton's founding.",
  },
  {
    year: 2016,
    month: "Jan",
    title: "Arton appointed marketing agent to Saint Lucia",
    text:
      "By appointment of Saint Lucia’s government, Arton becomes a marketing agent for the CIP.",
  },
  {
    year: 2016,
    month: "Jan",
    title: "Arton adds Saint Lucia to its portfolio",
    text:
      "Saint Lucia's CIP becomes the fifth Caribbean and 11th global program in Arton's portfolio.",
  },

  // 2015
  {
    year: 2015,
    month: "Dec",
    title: "Arton Capital in Dominica",
    text:
      "Arton Capital Dominica obtains full approval as an authorized agent in Dominica for the CIP.",
  },
  {
    year: 2015,
    month: "Dec",
    title: "Arton launches the 2015 Philanthropy Report",
    text:
      "Wealth-X and Arton Capital launch the 2015 Philanthropy Report.",
    href: "https://www.artoncapital.com/industry-news/wealth-x-arton-capital-philanthropy-report-2015/",
  },
  {
    year: 2015,
    month: "Nov",
    title: "Arton FDI Series",
    text:
      "Arton Capital hosts the FDI Series in Sofia, Bulgaria.",
  },
  {
    year: 2015,
    month: "Nov",
    title: "Arton on board of Positive Planet",
    text:
      "Armand Arton is appointed to the board (MENA) of Positive Planet.",
    href: "http://www.positiveplanet.ngo/",
  },
  {
    year: 2015,
    month: "Oct",
    title: "Global Citizen Forum Monaco 2015",
    text:
      "Arton Capital curates the third edition of the Global Citizen Forum in Monaco.",
  },
  {
    year: 2015,
    month: "Mar",
    title: "The world’s Passport Index™",
    text:
      "Arton Capital launches Passport Index™, the world’s first interactive online tool ranking passports.",
    href: "http://www.passportindex.org/",
  },
  {
    year: 2015,
    month: "Jan",
    title: "Arton Advisors in Grenada",
    text:
      "Arton Advisors obtains full approval as an overseas agent for Grenada’s CIP.",
  },
  {
    year: 2015,
    month: "Jan",
    title: "Special Economic Envoy for Antigua & Barbuda",
    text:
      "Armand Arton is appointed Special Economic Envoy for Antigua & Barbuda.",
  },

  // 2014
  {
    year: 2014,
    month: "Dec",
    title: "Arton Advisors in St. Kitts",
    text:
      "Arton Advisors becomes a fully approved marketing agent to St. Kitts & Nevis.",
  },
  {
    year: 2014,
    month: "Nov",
    title: "Arton Team Retreat",
    text:
      "The annual retreat is hosted by Arton's Budapest team.",
  },
  {
    year: 2014,
    month: "Oct",
    title: "Global Residence and Citizenship Council",
    text:
      "Arton becomes a founding member of the Global Residence and Citizenship Council.",
  },
  {
    year: 2014,
    month: "Oct",
    title: "Callaloo Cay real estate project announced in Antigua",
    text:
      "Arton brokers the investment agreement for Callaloo Cay in Antigua.",
  },
  {
    year: 2014,
    month: "Oct",
    title: "Global Citizen Forum 2014",
    text:
      "The second edition of the Global Citizen Forum is held in Toronto.",
  },
  {
    year: 2014,
    month: "Sep",
    title: "Arton Advisors in Antigua & Barbuda",
    text:
      "Arton Advisors becomes a pre-approved agent for Antigua & Barbuda’s CIP.",
  },
  {
    year: 2014,
    month: "Sep",
    title: "Arton advises St. Lucia’s CIP Task Force",
    text:
      "Arton participates in a workshop to exchange ideas on forming a CIP.",
  },
  {
    year: 2014,
    month: "Jul",
    title: "Arton advises Antigua & Barbuda",
    text:
      "Arton shares its expertise on optimizing Antigua & Barbuda’s CIP.",
  },
  {
    year: 2014,
    month: "Jul",
    title: "Arton participates in a white paper for St. Kitts",
    text:
      "Arton issues a white paper advisory for St. Kitts CIP optimization.",
  },
  {
    year: 2014,
    month: "Jun",
    title: "Arton in Turkey",
    text:
      "The joint venture with Sen International strengthens Arton's presence in Turkey.",
  },
  {
    year: 2014,
    month: "Mar",
    title: "Arton in South Africa",
    text:
      "Arton Capital opens an office in Cape Town.",
  },
  {
    year: 2014,
    month: "Jan",
    title: "Cyprus Citizenship by Investment Program",
    text:
      "Arton creates unique investment options for the Cyprus program.",
  },

  // 2013
  {
    year: 2013,
    month: "Dec",
    title: "Bulgaria Fast-Track Program",
    text:
      "Arton Capital Bulgaria advises the government on adding a fast-track option.",
  },
  {
    year: 2013,
    month: "Dec",
    title: "New branding",
    text:
      "Following restructuring, Arton unveils its new branding and mission.",
  },
  {
    year: 2013,
    month: "Dec",
    title: "Fast-Track Program for Hungary",
    text:
      "Arton participates in consultations on the Hungarian fast-track program.",
  },
  {
    year: 2013,
    month: "Oct",
    title: "Arton Index",
    text:
      "Created as a tool to compare global residence and citizenship programs.",
  },
  {
    year: 2013,
    month: "Sep",
    title: "Arton Team Retreat",
    text:
      "The retreat is held immediately following the Global Citizen Forum.",
  },
  {
    year: 2013,
    month: "Sep",
    title: "Global Citizen Forum",
    text:
      "Arton launches the Global Citizen Forum at the Burj Khalifa in Dubai.",
  },
  {
    year: 2013,
    month: "Aug",
    title: "Global Citizen Foundation",
    text:
      "Arton becomes the founding member of the Global Citizen Foundation.",
    href: "http://www.global-citizen.org",
  },
  {
    year: 2013,
    month: "Jul",
    title: "Antigua Citizenship by Investment Program",
    text:
      "Arton Advisors becomes an approved marketing agent for Antigua & Barbuda.",
  },
  {
    year: 2013,
    month: "Jun",
    title: "Grenada Citizenship by Investment Program",
    text:
      "Arton adds Grenada CIP to its portfolio through a strategic partnership.",
  },
  {
    year: 2013,
    month: "May",
    title: "Arton Bank",
    text:
      "Arton Bank is incorporated in Dominica to serve banking needs of Global Citizens.",
  },
  {
    year: 2013,
    month: "May",
    title: "Arton Capital Hungary",
    text:
      "Arton Capital Hungary advises on structuring the Hungarian Investor Residency Bond Program.",
    href: "https://akk.hu/securities-issuance-and-trading",
  },
  {
    year: 2013,
    month: "Apr",
    title: "Arton Advisors in Dominica",
    text:
      "Arton Advisors becomes an approved agent to the government of Dominica.",
  },

  // 2012
  {
    year: 2012,
    month: "Aug",
    title: "Arton Team Retreat",
    text:
      "The retreat was hosted by the Bulgarian team focusing on sustainable development.",
  },
  {
    year: 2012,
    month: "May",
    title: "Sovereign Investor Platform",
    text:
      "Arton structures its advisory service to governments under the Sovereign Investor Platform.",
  },
  {
    year: 2012,
    month: "Mar",
    title: "EU Capital Partners (EUCP)",
    text:
      "EUCP is a consulting partner for businesses expanding into MENA and vice versa.",
  },
  {
    year: 2012,
    month: "Feb",
    title: "Arton Advisors",
    text:
      "Arton Advisors is registered in the UAE to provide advice on global programs; Arton adds USA EB-5 to its portfolio.",
  },
  {
    year: 2012,
    month: "Jan",
    title: "Arton Investments",
    text:
      "Arton Investments continues its partnership with Quebec as an approved financial intermediary.",
  },

  // 2011
  {
    year: 2011,
    month: "Jan",
    title: "Global Citizen Magazine",
    text:
      "Global Citizen Magazine is a bi-monthly title promoting Global Citizenship.",
  },

  // 2010
  {
    year: 2010,
    month: "Jul",
    title: "Arton Capital Holdings",
    text:
      "Arton Capital Holdings is created to promote and structure Caribbean CIP offerings.",
  },

  // 2009
  {
    year: 2009,
    month: "Apr",
    title: "Investor Program for Residence and Citizenship in Bulgaria",
    text:
      "The Bulgarian Investor Program for Residence and Citizenship is launched with events in Montreal, Moscow and Dubai.",
  },

  // 2008
  {
    year: 2008,
    month: "Nov",
    title: "Arton Capital Bulgaria",
    text:
      "Arton Capital advises the government of Bulgaria on a residence and citizenship program.",
  },

  // 2006
  {
    year: 2006,
    month: "Aug",
    title: "Arton Capital is founded",
    text:
      "Arton Capital is established in Canada, bringing innovation and excellence to the global investor migration industry.",
  },
];

function groupByYear(events: TimelineEvent[]) {
  const map = new Map<number, TimelineEvent[]>();
  events.forEach((e) => {
    if (!map.has(e.year)) map.set(e.year, []);
    map.get(e.year)!.push(e);
  });
  // descending years like original
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
}

export default function ArtonGroupPage() {
  const grouped = groupByYear(TIMELINE_EVENTS);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Centered writeup + timeline only */}
      <main className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12 md:py-16">
        <div className="mb-10 max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Arton Group Timeline
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#333] md:text-lg">
            The Arton Group comprises fully licensed international banking,
            financial advisory, and investment consulting companies tailored to
            the needs of global citizens.
          </p>
        </div>

        <div className="timeline-wrap relative w-full">
          <div className="timeline-line" />

          {grouped.map(([year, events]) => (
            <div key={year} className="mb-10">
              <div className="year-pill mx-auto mb-6">{year}</div>

              <div className="space-y-6">
                {events.map((e, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <article
                      key={`${e.year}-${e.month}-${e.title}`}
                      className={`timeline-item ${isEven ? "left" : "right"}`}
                    >
                      <div className="timeline-dot" />
                      <div className="timeline-card">
                        <div className="timeline-date">
                          {e.month}, {e.year}
                        </div>
                        <h2 className="timeline-title">{e.title}</h2>
                        <p className="timeline-text">
                          {e.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="year-pill mx-auto mt-8 opacity-80">2006</div>
        </div>
      </main>

      {/* Timeline CSS (NO styled-jsx, safe for Server Components) */}
      <style>{`
        .timeline-wrap {
          position: relative;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.08);
        }
        .year-pill {
          width: fit-content;
          padding: 6px 14px;
          border-radius: 999px;
          background: #111;
          color: #fff;
          font-weight: 700;
          letter-spacing: 1px;
          font-size: 13px;
        }
        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          min-height: 80px;
        }
        .timeline-item.left .timeline-card {
          grid-column: 1 / 2;
          margin-right: 28px;
          justify-self: end;
        }
        .timeline-item.right .timeline-card {
          grid-column: 2 / 3;
          margin-left: 28px;
          justify-self: start;
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 18px;
          width: 12px;
          height: 12px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #cc9966;
          border: 3px solid white;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.08);
        }
        .timeline-card {
          width: 100%;
          max-width: 460px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 6px;
          padding: 16px 18px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.04);
        }
        .timeline-date {
          font-size: 12px;
          color: #6b5a46;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        .timeline-title {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 6px;
          color: #111;
        }
        .timeline-text {
          font-size: 14px;
          color: #333;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 10px;
            transform: none;
          }
          .timeline-item {
            grid-template-columns: 1fr;
            padding-left: 28px;
          }
          .timeline-item.left .timeline-card,
          .timeline-item.right .timeline-card {
            grid-column: 1 / -1;
            margin: 0;
            justify-self: stretch;
          }
          .timeline-dot {
            left: 10px;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
