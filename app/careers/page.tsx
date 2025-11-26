import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Your Career with Arton Capital",
  description:
    "At Arton, we believe that Empowering Global Citizenship starts with investing in and nurturing our corporate family. Join us.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Your Career with Arton Capital",
    description:
      "At Arton, we believe that Empowering Global Citizenship starts with investing in and nurturing our corporate family. Join us.",
    url: "/careers",
    siteName: "Arton Capital",
    images: [
      {
        url: "https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg",
        width: 1200,
        height: 630,
        alt: "Join the Arton Family",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

type Job = {
  title: string;
  overview: string[];
  duties: string[];
  qualifications: string[];
  locationNote?: string;
};

const JOBS: Job[] = [
  {
    title:
      "Relationship Manager (Dubai/Qatar/Singapore/Shanghai/Shenzhen/Philippines/Indonesia/Turkey)",
    overview: [
      "Arton Capital is looking for a dynamic and commercially astute candidate to work in the business development department as the Relationship Manager for its global operations.",
      "The successful candidate should have excellent communication skills with a proven record in generating significant revenues.",
      "Arton Capital is a dynamic and fast-moving company; the ideal fit would be ambitious and keen to have genuine influence – helping to shape the growth of the business’s future.",
    ],
    duties: [
      "Identify business opportunities and set business development strategies to develop a pipeline of business coming into ARTON, incl. by proposing new services and pricing of new/existing products, setting targets for annual sales and presenting semi-annual reports to the President",
      "Improve the market position of ARTON and achieve financial growth while maximizing the revenues for ARTON",
      "Build, maintain, and retain key relationships with Clients and Consultants, identify new Clients and Consultants, negotiate and close business deals",
      "Understand in-depth and stay informed about the market, the business trends, the particularities of each IIP, including changes, amendments and enhancements of each IIP, as well as to monitor the performance of key competitors in the area",
      "Liaise with all departments at ARTON and, in particular, with the Marketing department and the senior management to identify opportunities for events and campaigns",
      "Attend industry events and provide feedback on market development and shifts",
      "Act as a Relationship Manager for key Clients and for all Consultants and meet their needs",
      "Work in close relation with the Program Managers to secure the flawless and efficient service and channel the communication flows with.",
    ],
    qualifications: [
      "A bachelor’s degree",
      "Excellent command of spoken and written English",
      "Experience with professional services firms in the financial or legal industry",
      "Superior communications skills and ability to work with external parties",
      "Creative, proactive and confident approach to the position",
      "Team player, collaborative, reliable, flexible, and cooperative",
      "Strong organization skills and attention to detail: ability to prioritize, work efficiently under pressure and manage tight deadlines.",
    ],
  },
  {
    title: "PR Manager (Montreal/Dubai)",
    overview: [
      "Arton Capital is looking for a dynamic and creative individual to work in the marketing department as the Public Relations and Communications Manager for its global operations.",
      "Candidates must have excellent writing, editing, and communication skills with an exceptional eye for visual composition. Must be able to work effectively in a fast-paced and collaborative environment.",
    ],
    duties: [
      "Work with marketing team to create PR programs in support of strategic objectives.",
      "Work directly with leadership and project teams to realize a variety of special projects and custom communications and presentations.",
      "Write press releases, articles, digital and social media content and collaterals to document firm’s goals and promote press coverage and events.",
      "Respond to publication and media requests in a timely and professional manner.",
      "Cultivate and continue to develop a strong media contact network.",
      "Develop and implement outreach strategies and consistently identify press and event opportunities around the world.",
      "Maintain PR and contact databases for marketing, press and other editorial-related projects.",
    ],
    qualifications: [
      "A bachelor’s degree.",
      "Minimum of 5–7 years of professional experience in PR or Communications.",
      "Experience with professional services firms in the financial sector or in creative agencies is highly desirable.",
      "Superior written and verbal communications skills and ability to work with external parties.",
      "Creative, proactive and confident approach to the position.",
      "Team player, collaborative, reliable, flexible, and cooperative.",
      "Strong organization skills and attention to detail: ability to prioritize, work efficiently under pressure and manage tight deadlines.",
      "Knowledge of digital image procedures for press, screen and web, including social media.",
      "Understanding of photographic rights issues and processes.",
      "Proficient in MS Office and Adobe Creative Cloud with strong InDesign experience.",
      "Ability to manage multiple deadline driven projects simultaneously.",
    ],
  },
  {
    title: "Copywriter, content creator (Montreal/Dubai)",
    overview: [
      "Arton Group is looking for a prolific and talented communicator, storyteller and content creator to write and produce various types of online and offline content on a regular basis.",
      "This role requires a high level of creativity, attention to detail, and social media management skills.",
    ],
    duties: [
      "Build and manage a rich content calendar that attracts a qualified audience",
      "Create content on an ongoing basis to inform and engage",
      "Manage and grow subscriber base by providing regular, useful content via newsletters and targeted mailings",
      "Manage and grow social media engagement",
      "Contribute to long-form content projects such as ebooks, white papers and research documents",
      "Create content for landing pages and streamline call-to-actions",
      "Optimize marketing automation and lead nurturing processes through email, content, and social channels",
      "Optimize content for search engines and lead generation",
      "Conduct analytics to improve strategies/tactics.",
    ],
    qualifications: [
      "A passion for communications, storytelling and publishing",
      "Exceptional writing and editing skills, as well as the ability to adapt the style, tone, and voice",
      "Interest in lifestyle and membership-based brands",
      "Past experience producing content for the web and channel-specific social media",
      "Proven experience in building audiences online and offline",
      "Excellent organizational skills to work independently and manage projects with many moving parts",
      "An analytical mind and interest in using data to optimize/scale blog marketing strategies",
      "Knowledge of and interest in global affairs, politics and diplomacy",
      "BA/BS degree or equivalent working experience in marketing",
      "Proficiency with leading social media platforms",
      "Knowledge of Adobe Creative Suite (Photoshop and InDesign) a plus.",
    ],
    locationNote:
      "Work environment is a professional office environment in Montreal.",
  },
  {
    title: "Graphic Designer – (Montreal, Canada)",
    overview: [
      "Reporting directly to VP Marketing, the Graphic Designer will produce both web and print marketing collateral for Arton Group.",
      "The ideal candidate must be creative, resourceful, tech-savvy and attentive to detail.",
    ],
    duties: [
      "Design and integrate responsive emails, newsletters, web banners, landing pages and other digital marketing collateral",
      "Produce printed marketing collateral, including magazine ads and brochures",
      "Design and integrate content for social media platforms",
      "Ensure that all marketing collateral adheres to brand guidelines",
      "Work closely with the marketing managers to execute projects within time and budget",
      "Assist in organizing, monitoring, archiving, and maintaining files on the server.",
    ],
    qualifications: [
      "Detail-oriented and able to multi-task in a fast-paced environment",
      "Ability to collaborate with a team and work autonomously",
      "Ability to take art direction and critique",
      "Able to excel in a changing environment, manage several projects simultaneously",
      "Education in a related field",
      "Minimum 3 years of both web and print design experience",
      "Proficiency in Adobe Creative Suite",
      "Proficiency in HTML5, CSS3 and jQuery",
      "Working experience with PHP5, MySQL, JavaScript and WordPress.",
    ],
    locationNote:
      "Full-time position in Westmount office. Monday to Friday in-office required.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* HERO (matches slider vibe) */}
      <section className="relative h-[300px] w-full md:h-[420px]">
        <Image
          src="https://www.artoncapital.com/wp-content/uploads/2013/07/Team-slider-1.jpg"
          alt="Join the Arton Family"
          fill
          priority
          className="object-cover"
        />
        {/* darker overlay like revslider */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 md:px-6">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Join the Arton Family
          </h1>
          <p className="mt-2 text-base font-medium text-white/90 md:text-lg">
            Make an impact on the world
          </p>
        </div>
      </section>

      {/* BODY */}
      <main className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {/* sep40 style spacers */}
        <hr className="my-8 border-black/10" />

        <div className="space-y-4 text-[15px] leading-7 text-[#222] md:text-base">
          <p>
            At Arton, we believe that Empowering Global Citizenship starts with investing
            in and nurturing our corporate family.
          </p>
          <p>
            We are on the lookout for talented, passionate and determined global citizens
            who share our vision, our passion, and are eager to contribute to our mission.
          </p>
          <p>
            With great achievements come great benefits – private health insurance, latest
            and most advanced equipment, custom designed stimulating office environments,
            and many more.
          </p>
          <p>
            We cherish our unique blend of skills and personalities and we organize our
            yearly family get-togethers in different parts of the world, where we meet,
            exchange, and inspire each other.
          </p>
          <p>
            If you see yourself with Arton, tell us why would you join our team and send
            us your resume.
          </p>
          <p>
            Don’t hesitate to contact us to explore available opportunities in marketing,
            sales, administration, operations, and human resources.
          </p>
          <p>We can’t wait to hear from you! Join us.</p>
        </div>

        <hr className="my-8 border-black/10" />

        {/* ACCORDION styled like Arton brown theme */}
        <div className="space-y-3">
          {JOBS.map((job) => (
            <details
              key={job.title}
              className="group rounded-sm border border-black/10 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 md:px-5">
                <h3 className="text-[15px] font-bold text-[#111] md:text-base">
                  {job.title}
                </h3>

                {/* brown/gold toggle */}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#cc9966]/60 text-lg font-bold text-[#8b6a45] transition group-open:bg-[#cc9966] group-open:text-white">
                  +
                </span>
              </summary>

              <div className="border-t border-black/10 px-4 py-4 md:px-5">
                <h4 className="text-sm font-semibold text-[#8b6a45]">
                  Position Overview:
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#222]">
                  {job.overview.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>

                <h4 className="mt-5 text-sm font-semibold text-[#8b6a45]">
                  Duties and Responsibilities:
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#222]">
                  {job.duties.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>

                <h4 className="mt-5 text-sm font-semibold text-[#8b6a45]">
                  Qualifications:
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#222]">
                  {job.qualifications.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ul>

                {job.locationNote && (
                  <p className="mt-4 text-sm text-[#333]">{job.locationNote}</p>
                )}

                <div className="mt-5 flex justify-end">
                  <Link
                    href="/careers-apply"
                    className="inline-flex items-center justify-center rounded-sm bg-[#cc9966] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      </main>
    </div>
  );
}
