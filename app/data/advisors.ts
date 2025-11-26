// data/advisors.ts

export type AdvisorLink = {
  label: string;
  href: string;
};

export type Advisor = {
  id: string;
  name: string;
  role: string;
  location?: string;
  email?: string | null;
  image: string;
  bio: string;
  links?: AdvisorLink[];
};

export const ADVISORS: Advisor[] = [
  {
    id: "lora-georgieva",
    name: "Lora Georgieva",
    role: "Government Advisory Practice",
    location: "Sofia & Paris",
    email: null, // email was Cloudflare-protected in the source HTML
    image:
      "https://www.artoncapital.com/wp-content/uploads/2014/08/Team-Lora-2018-300x271.jpg",
    bio:
      "With over two decades of experience, Lora Georgieva leads Arton Capital’s design, development, and delivery of bespoke products and services. Her background spans policy and procedure alignment, project coordination, internal operations, and progress tracking across complex initiatives.\n\n" +
      "As a project leader under Arton’s Sovereign Platform, she oversees development projects of varying size and complexity, directing and controlling project activities to ensure on-time, high-quality delivery.",
  },
  {
    id: "stephan-yazedjian",
    name: "Stephan Yazedjian",
    role: "Board of Advisors",
    location: "Montreal",
    email: null,
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/09/Team-Stephan.jpg",
    bio:
      "Stephan is a seasoned financial expert with deep experience in corporate finance and financial planning. He brings strategic leadership, strong operational discipline, and a proven ability to build and guide high-performing teams.\n\n" +
      "Known for his commitment to excellence and broad financial insight, he provides a practical, growth-oriented perspective to Arton Capital’s advisory board.",
  },
  {
    id: "karl-tabbakh",
    name: "Karl Tabbakh",
    role: "Board of Advisors",
    location: "Montreal",
    email: null,
    image:
      "https://www.artoncapital.com/wp-content/uploads/2024/09/Team-Karl.jpg",
    bio:
      "Karl has more than 20 years of experience across private equity, international business, and capital markets. He is a high-caliber dealmaker whose commercial sharpness supports Arton in structuring and executing complex transactions.\n\n" +
      "With a rare mix of legal expertise and business instinct, he adds strong strategic value to the firm’s global mobility and investment initiatives.",
  },
  {
    id: "nouriel-roubini",
    name: "Nouriel Roubini",
    role: "Board of Advisors",
    location: "London",
    email: null,
    image:
      "https://www.artoncapital.com/wp-content/uploads/2020/08/Team-Nouriel-300x271.jpg",
    bio:
      "Nouriel Roubini is a Professor of Economics at NYU Stern School of Business and Chair of Roubini Macro Associates. He previously served as a senior economic adviser to the Clinton Administration and has extensive global policy experience.\n\n" +
      "He co-founded and chaired Roubini Global Economics (2005–2016), a leading macro research firm recognized by major international business outlets. As a board member, he helps Arton stay ahead of economic shifts and policy evolution tied to global citizenship and investment migration.",
  },
  {
    id: "alistair-brown",
    name: "Alistair Brown",
    role: "Real Estate Advisor",
    location: "London & Miami",
    email: null,
    image:
      "https://www.artoncapital.com/wp-content/uploads/2017/04/Team-Alistair-300x271.jpg",
    bio:
      "Alistair Brown is an energetic real estate and hospitality leader with a global network developed over 25+ years. He has guided major resort and hospitality brands into new markets and segments.\n\n" +
      "His experience includes senior sales and business roles with Fairmont Resorts & Hotels, Marriott Grand Residence Club, Residence International (UK), and others. He has worked on iconic property sales and marketing across North America, including luxury golf clubs, beachfront resorts, and branded hotel residences.\n\n" +
      "He was appointed International Ambassador to One Sotheby’s Real Estate in Florida and resides between London and Miami.",
  },
];
