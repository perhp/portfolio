export const site = {
  name: "Per Hansen",
  role: "Senior freelance web developer",
  location: "Denmark · remote-friendly",
  email: "hello@perhp.com",
  url: "https://perhp.com",
  company: { name: "Pekkel", cvr: "DK-37106666" },
  cvPath: "/cv",
  available: true,
  social: {
    github: "https://github.com/perhp",
    linkedin: "https://www.linkedin.com/in/per-hansen-38498711a/",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
} as const;

export const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const mailto = (subject = "Project inquiry") => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  badge: "Available for new projects",
  headline: ["The freelance developer", "clients keep for years."],
  sub: "I'm Per Hansen, a full-stack developer from Denmark with 10+ years of experience shipping products for fintech, biotech, climate tech and SaaS companies. Most freelancers hand over and leave. My clients tend to bring me back, and I stay long after the first release.",
  primaryCta: "Start a project",
  secondaryCta: "See the CV",
  ledger: {
    title: "Years per client",
    note: "Every engagement I can talk about, longest first.",
  },
};

export const services = [
  {
    title: "Web application development",
    text: "Full-stack web applications built with React, Next.js, Vue/Nuxt, Node.js and TypeScript. Customer portals, dashboards, SaaS products and internal tools, designed to be maintained, not just launched.",
  },
  {
    title: "Senior capacity for your team",
    text: "Need an experienced developer who can hit the ground running? I plug into your existing team, ship features, review code and raise the bar, without weeks of onboarding.",
  },
  {
    title: "APIs & integrations",
    text: "REST APIs, database design and third-party integrations such as payments, accounting and authentication. The plumbing that makes your product actually work.",
  },
  {
    title: "Modernisation & rescue",
    text: "Inherited a codebase nobody wants to touch? I upgrade legacy frontends, fix performance problems and get releases flowing again, with a plan and no drama.",
  },
];

export const reasons = [
  {
    title: "Senior from day one",
    text: "No ramp-up period, no hand-holding. I've shipped in fintech, biotech and e-commerce, and I know what production-grade actually means.",
  },
  {
    title: "Business first, tech second",
    text: "I care about the outcome you need, not which framework is trending. Every technical decision is made with your budget and timeline in mind.",
  },
  {
    title: "A partner, not a contractor",
    text: "My freelance clients have kept me around for one to three years at a time. I stay invested long after the first release.",
  },
  {
    title: "Clear, honest communication",
    text: "Weekly updates, realistic estimates and early warnings if something changes. You will never wonder what is going on.",
  },
];

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "Angular",
  "Node.js",
  "REST APIs",
  "SQL databases",
  "Tailwind CSS",
  "Testing & CI/CD",
  "Vercel & cloud hosting",
];

export interface WorkItem {
  client: string;
  industry: string;
  role: string;
  engagement: string;
  duration: string;
  /** Length of the engagement in years, used for the tenure ledger. Omit for one-off projects. */
  years?: number;
  text: string;
  link?: string;
}

export const work: WorkItem[] = [
  {
    client: "Målbar",
    industry: "Climate tech · LCA",
    role: "Full-Stack Developer",
    engagement: "Freelance",
    duration: "2 years",
    years: 2,
    text: "Ongoing development for a Danish life cycle assessment company. I have helped build their LCA screening tool, which lets companies estimate the climate footprint of their products, along with the internal tooling the team runs on every day.",
    link: "https://maalbar.dk",
  },
  {
    client: "Bunch Bygningsfysik",
    industry: "Construction · Building physics",
    role: "Full-Stack Developer",
    engagement: "Freelance",
    duration: "Project",
    text: "Built a moisture content calculator for construction compositions. Their existing calculation module already had years of building physics expertise baked in, so I kept it as the engine and put a modern, easy to use web UI on top of it instead of rewriting what worked.",
    link: "https://app.matchlab.io",
  },
  {
    client: "Visma Dinero",
    industry: "Fintech · Accounting SaaS",
    role: "Frontend Developer",
    engagement: "Full-time, then freelance",
    duration: "6 years",
    years: 6,
    text: "Frontend development on Dinero, one of Denmark's most popular accounting platforms for entrepreneurs and small businesses. First as an employee for four years, then they brought me back as a freelancer for two more.",
    link: "https://dinero.dk",
  },
  {
    client: "Y-mAbs Therapeutics",
    industry: "Biotech · Pharma",
    role: "Full-Stack Developer",
    engagement: "Freelance",
    duration: "3 years",
    years: 3,
    text: "Full-stack development of web solutions for a commercial-stage biopharmaceutical company, a regulated environment where reliability, correctness and clear documentation are not optional.",
    link: "https://ymabs.com",
  },
  {
    client: "Storebuddy",
    industry: "E-commerce · Fintech",
    role: "Frontend Developer",
    engagement: "Freelance",
    duration: "1 year",
    years: 1,
    text: "Frontend for a platform that automates bookkeeping for webshop owners and flags imbalances on orders, turning messy e-commerce data into something an accountant can trust.",
    link: "https://storebuddy.dk",
  },
  {
    client: "eManager",
    industry: "Esports · Gaming",
    role: "Full-Stack Developer & Partner",
    engagement: "Full-time",
    duration: "2 years",
    years: 2,
    text: "Co-built an esports tournament platform with a fantasy manager game from the ground up: product decisions, architecture and code, as a partner in the company.",
  },
];

export const products = [
  {
    name: "Tiltiden",
    text: "Booking system for Danish service businesses: online bookings, payments and fewer no-shows.",
    link: "https://tiltiden.dk",
  },
  { name: "Ønsker.dk", text: "A platform for creating and sharing wishlists.", link: "https://ønsker.dk" },
  { name: "Raspberry Stats", text: "Open-source Node.js utility for Raspberry Pi metrics.", link: "https://github.com/perhp/raspberry-stats" },
];

export const process = [
  {
    step: "01",
    title: "Intro call",
    text: "A free 30-minute call where you tell me about your project, goals and constraints. I ask a lot of questions and tell you honestly whether I'm the right fit.",
  },
  {
    step: "02",
    title: "Proposal & estimate",
    text: "You get a short written proposal: scope, approach, timeline and price. Fixed price for well-defined projects, hourly or retainer for ongoing work.",
  },
  {
    step: "03",
    title: "Build in the open",
    text: "Short iterations, working software early, and a weekly update you can actually read. You see progress and can change course before it gets expensive.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "I handle deployment, hand over clean documentation, and stick around for support and further development if you want me to.",
  },
];

export const about = {
  title: "The person behind the code",
  paragraphs: [
    "I'm Per, a developer from Denmark who has spent more than a decade building for the web. I have been an employee at a fintech company, a partner in a startup, and for the last several years a freelancer for accounting, biotech, climate tech and construction companies. That mix taught me that the best code is the code that solves the business problem and doesn't wake anyone up at night.",
    "I don't start coding until we both agree on what the goal is and why it matters. Once we do, I move fast, I am honest when I think there is a better way, and I stick around after launch. I enjoy long-term partnerships most, but I don't shy away from smaller tasks either. If it is a two-day fix or a two-year engagement, you will get the same care.",
    "Outside of client work I build my own products, like Tiltiden and Ønsker.dk, and tinker with Arduino, Godot and whatever technology happens to catch my interest that month.",
  ],
};

export const contact = {
  title: "Have a project in mind?",
  text: "Tell me about it: what you're building, roughly when, and what a great result looks like. I usually reply within a day, and the first call is always free.",
  cta: "Email me",
};
