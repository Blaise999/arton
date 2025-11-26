// data/team.ts

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  email?: string;
  overview: string; // short 1–2 line intro for the card
  bio: string; // full bio for modal
};

/**
 * Members compiled from Arton Capital "Meet the Team" public page.
 * Data source: https://www.artoncapital.com/team/
 * NOTE: currently based on publicly visible page-1 data.
 */
export const TEAM: TeamMember[] = [
  {
    id: "armand-arton",
    name: "Armand Arton",
    title: "President",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/08/Team-Armand-2018-300x271.jpg",
    email: "aarton@artoncapital.com",
    overview:
      "Founder of Arton Capital, leading global citizenship and investment strategy worldwide.",
    bio:
      "Founder of Arton Capital with a background in wealth management and investment advisory. Previously held senior roles in Canada’s financial sector and has led Arton’s global citizenship strategy since inception. Holds finance credentials and is active in philanthropic and industry organizations.",
  },
  {
    id: "vladimir-kolev",
    name: "Vladimir Kolev",
    title: "Chief Compliance Officer",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/08/Team-Vladimir-k-2018-300x271.jpg",
    email: "vkolev@artoncapital.com",
    overview:
      "Leads compliance and regulatory delivery across multiple investor programs.",
    bio:
      "Leads compliance for Arton Capital. Played a key role in the setup and ongoing delivery of Bulgaria’s investor residence/citizenship programs, coordinating applications, related financial processes, and supporting regional program development.",
  },
  {
    id: "rizwan-chowdhury",
    name: "Rizwan Chowdhury",
    title: "Group Chief Financial Officer",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/03/Team-Riz.jpeg",
    email: "rchowdhury@artoncapital.com",
    overview:
      "Group CFO overseeing strategic finance, governance, audit, and controls.",
    bio:
      "Group CFO and board-level finance leader. Brings broad experience in strategic finance, governance, internal controls, audit, and compliance across multinational organizations in North America and the Middle East.",
  },
  {
    id: "antoine-chawbah",
    name: "Antoine Chawbah",
    title: "Legal Director",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/03/Team-Antoine.jpeg",
    email: "achawbah@artoncapital.com",
    overview:
      "Senior legal leader focused on multi-market compliance and growth frameworks.",
    bio:
      "Arton’s Legal Director with over two decades of Middle East legal practice. Focused on private and corporate law, commercial and employment matters, regulatory compliance, and structuring legal frameworks that enable multi-market growth.",
  },
  {
    id: "jaclyn-grima",
    name: "Jaclyn Grima",
    title: "Human Resources Director",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/03/Team-Jaclyn.jpeg",
    email: "jgrima@artoncapital.com",
    overview:
      "Global HR head managing recruitment, retention, policy, and culture.",
    bio:
      "Directs Arton Capital’s HR function globally. Oversees recruitment, engagement, training, retention, and policies across the employee life cycle, with extensive HR leadership experience in the UAE and internationally.",
  },
  {
    id: "radost-ivanova",
    name: "Radost Ivanova",
    title: "Head of Processing",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/07/Team-Radost-2018-300x271.jpg",
    email: "rivanova@artoncapital.com",
    overview:
      "Leads processing operations and administration for investor programs.",
    bio:
      "Joined Arton in 2012 and manages processing and administration tied to Bulgaria’s investor residence and citizenship pathways. Background in international economic relations and non-bank financial services, with strong operational leadership in program delivery.",
  },
  {
    id: "george-eid",
    name: "George Eid",
    title: "Head of Global Sales, Senior Vice President",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/08/Team-George-2018-300x271.jpg",
    email: "geid@artoncapital.com",
    overview:
      "Senior sales leader driving global client growth and partnerships.",
    bio:
      "Senior Vice President leading global sales. Part of Arton Dubai’s early growth and has supported numerous high-net-worth investor cases and FDI placements. Known for long-standing client relationships and cross-region business development.",
  },
  {
    id: "emil-shahmooradian",
    name: "Emil Shahmooradian",
    title: "Vice-President, Business Development",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/08/Team-Emil-2018-300x271.jpg",
    email: "eshahmooradian@artoncapital.com",
    overview:
      "Business development VP focused on HNWI strategy and market expansion.",
    bio:
      "Vice President for business development. Long career across Canadian and U.S. financial institutions managing HNWI portfolios, client relations, negotiations, and investor program structuring. Supports Arton’s expansion into new markets and initiatives.",
  },
  {
    id: "radostina-balogh",
    name: "Radostina Balogh",
    title: "Managing Partner, Vice President",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2013/10/Team-Radosztina-300x271.jpg",
    email: "rbalogh@artoncapital.com",
    overview:
      "Managing partner overseeing Hungary operations and program delivery.",
    bio:
      "Managing Partner for Hungary, coordinating relationship managers, agents, and local authorities. Brings deep project-management expertise and operational leadership for Arton’s Hungarian program activities.",
  },
  {
    id: "jane-oseeva",
    name: "Jane Oseeva",
    title: "Vice-President, Business Development",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2020/03/Team-Jane-300x271.jpg",
    email: "joseeva@artoncapital.com",
    overview:
      "Advises HNWI and family offices across CIS and GCC markets.",
    bio:
      "Business development VP with strong track record in investment management and financial services spanning Russia, CIS, and GCC markets. Advises HNWI and family offices, with experience in alternative investments and cross-border structuring.",
  },
  {
    id: "evelyn-xinxin-xu",
    name: "Evelyn Xinxin Xu",
    title: "Regional Director",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2023/03/Team-Evelyn-Xinxin-300x271.jpg",
    email: "exu@artoncapital.com",
    overview:
      "China regional director specializing in investor portfolio structuring.",
    bio:
      "Regional Director for China with immigration-industry experience since 2008. Supports Mainland China and broader Asian markets, specializing in investor portfolio structuring and long-term client advisory.",
  },
  {
    id: "elizabeth-makhoul",
    name: "Elizabeth Makhoul",
    title: "Director, Antigua & Barbuda",
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/07/Team-Elizabeth-2018-300x271.jpg",
    email: "emakhoul@artoncapital.com",
    overview:
      "Leads Antigua & Barbuda operations and Caribbean investor programs.",
    bio:
      "Leads Arton’s Antigua & Barbuda operations. Background in marketing and event management with over a decade in Caribbean CIP, gaming, and offshore sectors, leveraging extensive regional networks to deliver strong outcomes.",
  },
];
