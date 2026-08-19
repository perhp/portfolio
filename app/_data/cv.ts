import { products, site, stack } from "./site";

export interface CvEntry {
  company: string;
  role: string;
  type: string;
  period: string;
  /** Length in years, drives the tenure bar. Omit for one-off projects. */
  years?: number;
  location?: string;
  summary: string;
  highlights: string[];
}

export const cv = {
  summary:
    "Senior full-stack web and mobile developer with more than ten years of experience building web applications, and iOS, iPadOS and Android apps with Expo, for fintech, biotech, climate tech and construction companies. Comfortable owning a product end to end, from architecture and APIs to a polished frontend, and equally comfortable joining an existing team as extra senior capacity. Focused on maintainable code, clear communication and outcomes the business actually needs.",

  // Most recent first.
  experience: [
    {
      company: "Målbar",
      role: "Full-Stack Developer",
      type: "Freelance",
      period: "2 years, ongoing",
      years: 2,
      summary: "Life cycle assessment (LCA) company helping businesses understand the climate footprint of their products.",
      highlights: [
        "Helped build the LCA screening tool used by customers to estimate product footprints.",
        "Built and maintained internal tooling used daily by the team.",
      ],
    },
    {
      company: "Bunch Bygningsfysik",
      role: "Full-Stack Developer",
      type: "Freelance",
      period: "2021 - present, 5 years",
      years: 5,
      summary: "Building physics consultancy.",
      highlights: [
        "Built and continue to develop a moisture content calculator for construction compositions.",
        "Reused their proven legacy calculation module as the engine and delivered a modern web UI on top of it, then kept extending it over the years.",
      ],
    },
    {
      company: "Visma Dinero",
      role: "Frontend Developer",
      type: "Freelance",
      period: "2 years",
      years: 2,
      summary: "One of Denmark's most popular accounting platforms for entrepreneurs and small businesses.",
      highlights: [
        "Returned as a freelancer after four years as an employee to continue frontend development on the core product.",
        "Shipped features in a large, mature codebase used by a very large customer base.",
      ],
    },
    {
      company: "Storebuddy",
      role: "Frontend Developer",
      type: "Freelance",
      period: "1 year",
      years: 1,
      summary: "Automated bookkeeping for webshop owners.",
      highlights: [
        "Frontend for a platform that automates bookkeeping and flags imbalances on e-commerce orders.",
        "Turned complex financial data into interfaces accountants and shop owners could trust.",
      ],
    },
    {
      company: "eManager",
      role: "Full-Stack Developer & Partner",
      type: "Full-time",
      period: "2 years",
      years: 2,
      summary: "Esports platform with tournaments and a fantasy manager game.",
      highlights: [
        "Co-founded and co-built the platform from the ground up as a partner.",
        "Responsible for product decisions, architecture and implementation across the stack.",
      ],
    },
    {
      company: "Visma Dinero",
      role: "Frontend Developer",
      type: "Full-time",
      period: "4 years",
      years: 4,
      summary: "Accounting platform for entrepreneurs and small businesses.",
      highlights: [
        "Frontend development on the core accounting product.",
        "Worked closely with design and backend teams in an agile product organisation.",
      ],
    },
    {
      company: "Y-mAbs Therapeutics",
      role: "Full-Stack Developer",
      type: "Freelance",
      period: "3 years",
      years: 3,
      summary: "Commercial-stage biopharmaceutical company.",
      highlights: [
        "Full-stack development of web solutions in a regulated environment.",
        "Emphasis on reliability, correctness and clear documentation.",
      ],
    },
  ] satisfies CvEntry[],

  skills: {
    Frontend: ["TypeScript", "React", "Next.js", "Vue", "Nuxt", "Angular", "Tailwind CSS"],
    Backend: ["Node.js", "REST APIs", "SQL databases"],
    "Tooling & delivery": ["Git", "Testing", "CI/CD", "Vercel & cloud hosting"],
  } as Record<string, string[]>,

  languages: [
    { name: "Danish", level: "Native" },
    { name: "English", level: "Fluent" },
  ],

  products,
  allStack: stack,
  site,
};
