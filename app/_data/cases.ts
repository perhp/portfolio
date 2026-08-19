import { slug, work, type WorkItem } from "./site";

/**
 * Case study pages, one per client in site.ts work[]. Rendered by app/(site)/work/[slug]/page.tsx.
 * Everything here must stay consistent with site.ts, cv.ts and .agents/product-marketing.md.
 * No invented metrics: outcomes are described in terms of what was shipped and how long the client kept me.
 */
export interface CaseStudy {
  /** Must match a client name in site.ts work[]. The URL slug is derived from it. */
  client: string;
  /** <title> without the site suffix. */
  title: string;
  description: string;
  keywords: string[];
  /** One-line summary shown under the client name. */
  tagline: string;
  /** What the company does and where I came in. */
  context: string;
  /** What they needed. */
  brief: string;
  /** What I actually did. Short, concrete bullets. */
  built: string[];
  /** How the engagement ran. */
  approach: string;
  /** What it led to, without invented numbers. */
  outcome: string;
  /** Technologies used on the engagement. Keep to what is true; adjust per client. */
  stack: string[];
  /** Slug of the /industries page this belongs to. */
  industry: string;
  /** Slugs of /services pages this is proof for. */
  services: string[];
  /** Placeholder until testimonials are collected (open task in product-marketing.md). */
  quote?: { text: string; name: string; role: string };
}

export const cases: CaseStudy[] = [
  {
    client: "Målbar",
    title: "Målbar case study | LCA screening tool and internal tooling",
    description:
      "How I have spent two years and counting as the ongoing full-stack developer for Målbar, a Danish LCA company: building their climate footprint screening tool and the internal tools the team runs on.",
    keywords: ["Målbar developer", "LCA screening tool", "climate tech case study", "Next.js LCA software", "freelance developer climate tech"],
    tagline: "Two years and counting as the ongoing developer behind an LCA screening tool.",
    context:
      "Målbar is a Danish life cycle assessment company. They help businesses understand and reduce the climate footprint of their products. Their customers range from companies running their first screening to teams that need LCA results inside their own processes. The domain is data-heavy and methodology matters: a number without the assumptions behind it is not useful.",
    brief:
      "Målbar needed a developer who could help build and keep improving their LCA screening tool, which lets companies estimate the climate footprint of a product from a description of its materials and processes, and at the same time build the internal tooling their team uses every day. Not a one-off project, but someone to stay and grow the product with them.",
    built: [
      "Helped build the customer-facing LCA screening tool: modelling inputs, calculations that update as you work, and results that explain themselves.",
      "Built and maintained internal tooling used daily by the Målbar team to support customers and manage data.",
      "Data-heavy interfaces that stay fast and readable for non-technical users.",
      "Ongoing feature development, maintenance and upgrades as the product and customer base grew.",
    ],
    approach:
      "A long-running retainer. Short iterations, working software early, and a written weekly update so the team always knows what shipped and what is next. I ask a lot of questions about the methodology before building, which is how I have become useful in LCA conversations without pretending to be an LCA practitioner.",
    outcome:
      "The engagement has been running for two years and is ongoing. The screening tool and the internal tooling are in daily use, and Målbar keeps bringing new work to the same developer rather than starting over with someone new. That continuity is the outcome I care most about.",
    stack: ["TypeScript", "React", "Node.js", "REST APIs", "SQL database"],
    industry: "climate-tech-lca",
    services: ["web-app-developer", "freelance-nextjs-developer", "api-development-integrations"],
  },
  {
    client: "Bunch Bygningsfysik",
    title: "Bunch Bygningsfysik case study | Five years on a building physics calculator",
    description:
      "Since 2021 I have built and kept developing a moisture content calculator for construction compositions for Bunch Bygningsfysik, keeping their proven calculation engine and putting a modern web UI on top.",
    keywords: ["Bunch Bygningsfysik", "moisture calculator web app", "building physics software", "web UI on legacy calculation engine", "construction tech case study"],
    tagline: "Five years and counting on a web UI for a proven building physics engine.",
    context:
      "Bunch Bygningsfysik is a Danish building physics consultancy. They had a calculation module for moisture content in construction compositions with years of expertise baked into it. The logic was trusted. The way people had to use it was not. I came in in 2021 and have been their developer since.",
    brief:
      "Make the calculator usable by customers and colleagues through a modern web application, without risking the correctness of the calculations, and then keep it moving as their needs and their customers' needs changed. The obvious shortcut, rewriting everything from scratch, would have thrown away the most valuable part.",
    built: [
      "A web-based moisture content calculator for construction compositions, used through app.matchlab.io.",
      "Kept the existing, proven calculation module as the engine instead of rewriting it.",
      "A clean input flow for compositions, materials and parameters, with results that update as you work.",
      "Validation, clear presentation of results and the plumbing between the new UI and the legacy engine.",
      "Ongoing development and maintenance since 2021: new features, upgrades and fixes as the tool and its users have grown.",
    ],
    approach:
      "It started as a clearly scoped build and turned into a long-term engagement. We agreed on the goal first: better access to the calculator, not a new calculator. I treated the existing module as a black box with a contract, wrapped it, and spent the effort on the interface and the edge cases users would hit. Short iterations and early demos meant the building physics experts could correct me before anything was expensive to change, and that rhythm has continued through years of further development.",
    outcome:
      "The calculator is live, in use and still evolving, and the expertise in the original module is intact. Five years on, Bunch Bygningsfysik is one of my longest engagements. It is the clearest example of a principle I follow everywhere: keep what works, modernise what does not, and do not confuse the two.",
    stack: ["TypeScript", "Web frontend", "REST API", "Legacy calculation engine"],
    industry: "construction-tech",
    services: ["legacy-frontend-modernisation", "web-app-developer"],
  },
  {
    client: "Visma Dinero",
    title: "Visma Dinero case study | Six years on an accounting SaaS frontend",
    description:
      "Six years of frontend development on Dinero, one of Denmark's most popular accounting platforms: four as an employee, then brought back as a freelancer for two more. Shipping in a large, mature fintech codebase.",
    keywords: ["Visma Dinero developer", "accounting SaaS frontend", "fintech frontend developer Denmark", "Dinero frontend", "fintech case study"],
    tagline: "Four years as an employee, then brought back as a freelancer for two more.",
    context:
      "Dinero is one of Denmark's most popular accounting platforms for entrepreneurs and small businesses, part of Visma. A large, mature product with a very large customer base, an agile product organisation, and the kind of domain where a wrong number ends up in someone's VAT return.",
    brief:
      "As an employee: frontend development on the core accounting product, working closely with design and backend teams. Later, after I had gone freelance, Dinero brought me back for two more years to continue frontend development on the same product with no ramp-up.",
    built: [
      "Frontend features on the core accounting product over six years: invoicing, bookkeeping and reporting flows used daily by a very large customer base.",
      "Shipped in a large, mature codebase where changes have to be careful, reviewed and tested.",
      "Worked with designers and backend developers in an agile product organisation.",
      "Returned as a freelancer and was productive from the first week, because I already knew the product, the codebase and the team.",
    ],
    approach:
      "Inside the team, on the team's process: sprints, code review, CI, close collaboration with design and backend. As a freelancer the shape changed to a retainer, but the way of working did not. I value being a reliable part of a team as much as owning a product alone.",
    outcome:
      "Six years in total with the same product, the first four as an employee and the last two as a freelancer they chose to bring back. It is the longest entry on my tenure ledger and the best evidence I have that I am easy to keep around.",
    stack: ["TypeScript", "Frontend", "Agile product team", "Code review and CI"],
    industry: "fintech",
    services: ["senior-frontend-contractor", "freelance-react-developer"],
  },
  {
    client: "Y-mAbs Therapeutics",
    title: "Y-mAbs Therapeutics case study | Web solutions in a regulated pharma environment",
    description:
      "Three years of full-stack development of web solutions for Y-mAbs Therapeutics, a commercial-stage biopharmaceutical company, where reliability, correctness and clear documentation are not optional.",
    keywords: ["Y-mAbs developer", "pharma web developer", "regulated environment software", "biotech full-stack developer", "pharma case study"],
    tagline: "Three years of full-stack web development where documentation is part of the deliverable.",
    context:
      "Y-mAbs Therapeutics is a commercial-stage biopharmaceutical company. Software built for a company like that lives inside a regulated environment: changes are reviewed and documented, correctness is checked rather than assumed, and nothing ships on a hunch.",
    brief:
      "Full-stack development of web solutions for the business, as a freelance developer who could work within that structure and stay long enough to own the systems rather than hand them over. Details of the systems are under NDA.",
    built: [
      "Web solutions built full-stack, from data and APIs to the interface, over three years.",
      "Documentation of requirements, decisions and testing written as part of the work, not after it.",
      "Controlled changes and upgrades over time so the systems stayed supportable.",
      "Integration with the company's existing systems and ways of working.",
    ],
    approach:
      "Carefully. Written requirements before code, reviewed pull requests, test evidence and release notes that a quality-minded organisation can file. Weekly written updates. I find this way of working comfortable rather than constraining, and I bring the habits to every client, regulated or not.",
    outcome:
      "A three-year engagement, which in a regulated environment says more than any feature list: the work held up to scrutiny, and the company kept asking for more of it.",
    stack: ["TypeScript", "Full-stack web", "REST APIs", "SQL database", "Documentation and change control"],
    industry: "biotech-pharma",
    services: ["web-app-developer", "senior-frontend-contractor"],
  },
  {
    client: "Storebuddy",
    title: "Storebuddy case study | Bookkeeping automation frontend for webshops",
    description:
      "A year building the frontend for Storebuddy, a platform that automates bookkeeping for webshop owners and flags imbalances on orders, turning messy e-commerce data into something an accountant can trust.",
    keywords: ["Storebuddy developer", "bookkeeping automation frontend", "e-commerce fintech developer", "webshop bookkeeping software", "e-commerce case study"],
    tagline: "Turning messy webshop order data into bookkeeping an accountant can trust.",
    context:
      "Storebuddy automates bookkeeping for webshop owners. It pulls orders from e-commerce platforms, matches them against payments and payouts, books them and flags imbalances that would otherwise surface months later at the accountant. Two domains I know well, e-commerce data and accounting, meeting in one product.",
    brief:
      "Build the frontend for the platform: interfaces that make complex, sometimes contradictory financial data understandable to two very different audiences, shop owners who are not accountants and accountants who need to trust every number.",
    built: [
      "The frontend for the bookkeeping automation platform.",
      "Views for orders, payouts and bookings that surface imbalances clearly instead of burying them in tables.",
      "Flows for connecting shops and payment providers and reviewing what the automation did.",
      "Interfaces designed for trust: every number traceable to its source.",
    ],
    approach:
      "A one-year freelance engagement working closely with the founders. Short iterations, frequent demos, and a lot of conversations about what an accountant actually needs to see. My years inside accounting software meant we spent less time explaining debits and credits and more time building.",
    outcome:
      "A frontend that made automated bookkeeping legible to shop owners and accountants alike, and a year-long engagement in a product where fintech and e-commerce overlap, which is exactly the kind of data-heavy work I look for.",
    stack: ["TypeScript", "Frontend", "REST APIs", "E-commerce and payment integrations"],
    industry: "e-commerce",
    services: ["freelance-react-developer", "api-development-integrations"],
  },
  {
    client: "eManager",
    title: "eManager case study | Co-building an esports platform as a partner",
    description:
      "Two years as full-stack developer and partner at eManager, co-building an esports tournament platform with a fantasy manager game from the ground up: product decisions, architecture and code.",
    keywords: ["eManager esports platform", "esports tournament platform developer", "fantasy manager game developer", "startup technical partner", "built from scratch case study"],
    tagline: "From zero to a live esports platform, as a partner rather than a contractor.",
    context:
      "eManager was an esports platform combining tournaments with a fantasy manager game. I was not hired into it; I co-founded and co-built it as a partner in the company, which meant owning product decisions and business trade-offs as well as the code.",
    brief:
      "Build the platform from the ground up: tournament organisation, the fantasy manager game on top, user accounts and everything around them. Ship fast enough to find out what players actually wanted, and solidly enough to keep running when they showed up.",
    built: [
      "The platform from scratch: architecture, backend, frontend and deployment.",
      "Tournament features and a fantasy manager game layered on top of them.",
      "Product decisions and prioritisation as a partner, not just implementation.",
      "Operations: running a live product and fixing what real users broke.",
    ],
    approach:
      "Startup mode. Decide, build, ship, learn, repeat. Two years of being responsible for the whole stack and for the consequences of every product decision taught me more about the business side of software than any client project could.",
    outcome:
      "Two years building and running a product as a partner. It is why I talk to founders as someone who has sat in their chair, and why my own products, Tiltiden and Ønsker.dk, exist. The business-first habit started here.",
    stack: ["TypeScript", "Full-stack web", "REST APIs", "SQL database", "Hosting and operations"],
    industry: "saas",
    services: ["mvp-development", "web-app-developer"],
  },
];

export const caseSlug = (client: string) => slug(client);

export const getCase = (s: string) => cases.find((c) => caseSlug(c.client) === s);

export const caseWork = (c: CaseStudy): WorkItem | undefined => work.find((w) => w.client === c.client);

/** Cases in the same order as the homepage work list. */
export const orderedCases = work.map((w) => cases.find((c) => c.client === w.client)).filter((c): c is CaseStudy => Boolean(c));
