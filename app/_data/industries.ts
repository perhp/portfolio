import type { LandingPage } from "./landing";
import { work, type WorkItem } from "./site";

/**
 * Industry landing pages, one per sector I have real work in. Rendered by app/(site)/industries/[slug]/page.tsx.
 * Same shape as services, plus the service pages each industry links to.
 * Copy rules: plain, first person, no em dashes, no exclamation marks, no compliance claims I cannot back.
 */
export interface IndustryPage extends LandingPage {
  /** Slugs of /services pages most relevant to this industry. */
  services: string[];
}

const shared = {
  regulated: {
    q: "How do you handle code quality in a regulated environment?",
    a: "Typed code, tests around the logic that matters, code review on every change, and written documentation of decisions. Pull requests, CI and a deployment history you can audit. I have worked this way inside a pharma company and an accounting platform, where a wrong number is not a cosmetic bug.",
  },
  domain: {
    q: "How quickly do you learn our domain?",
    a: "Faster than most, because I ask a lot of questions before writing code. I have picked up LCA methodology, building physics, bookkeeping rules and pharma processes on previous engagements. Expect me to be useful in the first week and fluent in the domain within a month or two.",
  },
  pricing: {
    q: "How do you price work?",
    a: "Fixed price for well-defined projects, hourly or a monthly retainer for ongoing work. My preferred engagement is 20-40 hours a week for six months or more. Rates are in the proposal, not on the site.",
  },
  nda: {
    q: "Will you sign an NDA?",
    a: "Yes. Most of my clients are under NDA and I only mention the ones I have permission to name. Your code, data and roadmap stay yours.",
  },
  start: {
    q: "How quickly can you start?",
    a: "Current availability is on the homepage. If it says available, usually within one to two weeks after a free 30-minute intro call and a short written proposal.",
  },
  afterLaunch: {
    q: "What happens after launch?",
    a: "I stick around. My clients have kept me for one to six years, first for the build and then for support and further development, usually on a retainer of reserved weekly hours.",
  },
};

export const industries: IndustryPage[] = [
  {
    slug: "fintech",
    label: "Fintech & accounting",
    intent: "Developer for fintech and accounting software",
    title: "Fintech Developer | Accounting & Bookkeeping",
    description:
      "Senior freelance developer for fintech and accounting products. Six years on Visma Dinero, bookkeeping automation for e-commerce. React, Next.js, Node.js.",
    keywords: ["fintech web developer", "accounting software developer freelance", "bookkeeping app developer", "fintech frontend developer", "React developer fintech"],
    headline: ["Fintech software", "where every number has to be right."],
    sub: "I spent six years on Dinero, one of Denmark's most popular accounting platforms, first as an employee and then brought back as a freelancer. I built the frontend for Storebuddy, which automates bookkeeping for webshops. I know what it means to ship features in a product where a rounding error ends up in someone's tax return.",
    fit: [
      "You build accounting, bookkeeping, invoicing, payments or other financial software and need a senior developer who understands the stakes.",
      "Your product handles money or financial data and you want correctness, audit trails and tests treated as standard.",
      "You need integrations with banks, payment providers, accounting systems or e-commerce platforms.",
      "You want someone who has worked inside a mature fintech codebase and can join yours without a long ramp-up.",
    ],
    notFit: [
      "You need a licensed financial adviser or a compliance consultant. I build software, and I work with your compliance people.",
      "You need blockchain, trading algorithms or machine learning. Not my field.",
      "Your stack is far from TypeScript, React, Vue and Node.js.",
    ],
    deliverables: [
      {
        title: "Financial product frontends",
        text: "Invoicing, bookkeeping, reporting and dashboard UIs with complex forms, tables and calculations that stay fast and correct. Built in React or Vue with TypeScript.",
      },
      {
        title: "Integrations",
        text: "Payment providers such as Stripe, bank and accounting APIs, e-commerce platforms and webhooks, built with idempotency, retries and logging so money never goes missing silently.",
      },
      {
        title: "Data correctness",
        text: "Typed domain models, decimal-safe calculations, validation on both sides, and tests around the rules that matter, like VAT, rounding and reconciliation.",
      },
      {
        title: "Senior capacity for fintech teams",
        text: "Join your existing team, ship features from the first week and review code with an eye for the edge cases that show up at quarter end.",
      },
    ],
    proof: ["Visma Dinero", "Storebuddy", "Y-mAbs Therapeutics"],
    proofIntro: "Six years in accounting software, a year in e-commerce bookkeeping, and three years in another regulated sector.",
    faqs: [
      {
        q: "What fintech work have you actually done?",
        a: "Six years of frontend development on Dinero, an accounting platform used by a large share of Danish small businesses, covering invoicing, bookkeeping and reporting features. A year building the frontend for Storebuddy, which pulls orders from webshops, automates the bookkeeping and flags imbalances. Plus payments in my own booking product, Tiltiden.",
      },
      shared.regulated,
      {
        q: "Do you have experience with PSD2, open banking or specific payment providers?",
        a: "I have integrated payment providers and accounting APIs and built on top of bank data in a product context. I will not claim certifications I do not hold. On the intro call I can go through your specific providers and tell you honestly what I have done before.",
      },
      shared.nda,
      shared.pricing,
      shared.start,
    ],
    related: ["saas", "e-commerce", "biotech-pharma"],
    services: ["freelance-react-developer", "api-development-integrations", "senior-frontend-contractor"],
  },
  {
    slug: "climate-tech-lca",
    label: "Climate tech & LCA",
    intent: "Developer for climate tech and LCA software",
    title: "Climate Tech Developer | LCA Tools & Carbon",
    description:
      "Freelance full-stack developer for climate tech. Two years and counting on an LCA screening tool and internal tooling for Målbar. Next.js, Node.js, data UIs.",
    keywords: ["climate tech software developer", "LCA software developer", "carbon footprint tool developer", "sustainability app developer freelance", "life cycle assessment web app"],
    headline: ["Climate tech products", "built on data you can defend."],
    sub: "For the past two years I have been the ongoing developer for Målbar, a Danish life cycle assessment company. I have helped build their LCA screening tool, which lets companies estimate the climate footprint of their products, and the internal tooling their team uses every day. Climate data is messy and the methodology matters, and I have learned to build for both.",
    fit: [
      "You are building an LCA, carbon accounting, ESG reporting or sustainability product and need a developer who already knows the domain.",
      "Your product turns large, imperfect datasets into something customers can act on, and the UI has to make that trustworthy.",
      "You need internal tooling for a small expert team as much as a customer-facing product.",
      "You want a developer who will stay and grow the product rather than hand over and leave.",
    ],
    notFit: [
      "You need an LCA practitioner or a sustainability consultant. I build the software your experts use.",
      "You need heavy data science or machine learning pipelines.",
      "You want the cheapest possible build for a pitch deck demo.",
    ],
    deliverables: [
      {
        title: "Calculation and screening tools",
        text: "Interfaces for modelling products, materials and processes, with results that update instantly and explain themselves. Built in Next.js with TypeScript and a Node.js backend.",
      },
      {
        title: "Data-heavy UIs",
        text: "Tables, comparisons, charts and exports for datasets with thousands of rows, kept fast and readable for non-technical users.",
      },
      {
        title: "Internal tooling",
        text: "Admin panels, data import and review workflows, and the back-office tools that let a small team support many customers.",
      },
      {
        title: "APIs and integrations",
        text: "REST APIs for partners and customers, imports from ERP and product data systems, and exports to reporting formats.",
      },
    ],
    proof: ["Målbar", "Bunch Bygningsfysik", "Visma Dinero"],
    proofIntro: "Two years and ongoing in LCA, plus calculation-heavy and data-heavy work in construction and accounting.",
    faqs: [
      {
        q: "What have you built in climate tech?",
        a: "Målbar's LCA screening tool, which lets companies estimate the climate footprint of their products from a description of materials and processes, and the internal tools the Målbar team runs on. The engagement has been ongoing for two years.",
      },
      {
        q: "Do you understand LCA methodology?",
        a: "Enough to build software for it and to have a sensible conversation with your LCA experts about functional units, system boundaries and impact categories. I am not an LCA practitioner, and I do not pretend to be.",
      },
      shared.domain,
      shared.afterLaunch,
      shared.pricing,
      shared.start,
    ],
    related: ["saas", "construction-tech", "biotech-pharma"],
    services: ["freelance-nextjs-developer", "web-app-developer", "api-development-integrations"],
  },
  {
    slug: "biotech-pharma",
    label: "Biotech & pharma",
    intent: "Developer for biotech and pharma",
    title: "Biotech & Pharma Developer | Regulated Web Apps",
    description:
      "Senior freelance full-stack developer, three years building web solutions for Y-mAbs Therapeutics, a commercial-stage biopharma company. Reliable, documented.",
    keywords: ["pharma web developer", "biotech software developer freelance", "life sciences web application developer", "regulated software developer", "full-stack developer biotech"],
    headline: ["Web solutions for biotech", "where documentation is not optional."],
    sub: "I spent three years as a full-stack developer for Y-mAbs Therapeutics, a commercial-stage biopharmaceutical company. Regulated environments change how you build: correctness and traceability come first, every change is reviewed and documented, and nothing ships on a hunch. I am comfortable working that way, and I bring it to every client.",
    fit: [
      "You are a biotech, pharma, medtech or life sciences company that needs web applications, portals or internal tools built carefully.",
      "You work with validation, audit trails and change control, and you need a developer who does not fight the process.",
      "Your IT or quality team needs clear documentation of what was built, why and how it was tested.",
      "You want one senior developer you can keep for years rather than a rotating agency team.",
    ],
    notFit: [
      "You need software classified as a medical device or embedded software. I build web applications around the business and science, not regulated device firmware.",
      "You need a validation consultant or a quality assurance function. I work with yours.",
      "You need scientific computing, bioinformatics pipelines or machine learning.",
    ],
    deliverables: [
      {
        title: "Web applications and portals",
        text: "Internal and external web solutions for commercial, medical and operations teams, built full-stack in TypeScript with React or Vue and Node.js.",
      },
      {
        title: "Documentation and traceability",
        text: "Written requirements and decisions, reviewed pull requests, test evidence and release notes your quality team can file. Part of the work, not a bolt-on.",
      },
      {
        title: "Integrations",
        text: "Authentication with your identity provider, data from internal systems and vendors, and exports to the formats your teams already use.",
      },
      {
        title: "Long-term maintenance",
        text: "Planned upgrades, security patches and controlled changes over years, so the system stays supportable without surprise rewrites.",
      },
    ],
    proof: ["Y-mAbs Therapeutics", "Visma Dinero", "Målbar"],
    proofIntro: "Three years in pharma and six in accounting software, both sectors where mistakes are expensive.",
    faqs: [
      {
        q: "What have you built in pharma?",
        a: "Three years of full-stack development of web solutions for Y-mAbs Therapeutics. Details are under NDA, but I can describe the type of systems and the way of working on the intro call.",
      },
      shared.regulated,
      {
        q: "Do you have experience with GxP or computer system validation?",
        a: "I have worked inside a company where those requirements shaped how software was specified, built, tested and released, and I work comfortably within that structure alongside your quality team. I am not a validation consultant and I will not claim to be one.",
      },
      shared.nda,
      shared.pricing,
      shared.start,
    ],
    related: ["fintech", "climate-tech-lca", "saas"],
    services: ["web-app-developer", "senior-frontend-contractor", "legacy-frontend-modernisation"],
  },
  {
    slug: "saas",
    label: "SaaS",
    intent: "Developer for SaaS products",
    title: "SaaS Developer for Hire | Senior Full-Stack",
    description:
      "Senior freelance SaaS developer. Six years inside a large accounting SaaS, two years growing an LCA product, plus my own booking SaaS. Next.js, React, Node.js.",
    keywords: ["SaaS developer for hire", "freelance SaaS developer", "Next.js SaaS developer", "B2B SaaS frontend developer", "SaaS product developer freelance"],
    headline: ["SaaS products that keep shipping", "long after version one."],
    sub: "SaaS is where most of my career has been. Six years on Dinero, a mature accounting SaaS with a large customer base. Two years and counting growing Målbar's LCA product. A year on Storebuddy. And my own booking SaaS, Tiltiden, where I handle subscriptions, payments and support myself. I know what it takes to ship features every week without breaking paying customers.",
    fit: [
      "You run a B2B SaaS product and need senior capacity to ship features and keep quality up.",
      "You are a founder building a SaaS MVP and want it built so it can become the real product.",
      "Your product needs billing, subscriptions, roles and permissions, onboarding and an admin back-office done properly.",
      "You want a developer who has run a SaaS himself and thinks about churn, support load and upgrades, not just code.",
    ],
    notFit: [
      "You need a full product team with design, growth and support in one contract.",
      "You want a no-code or low-code build. That can be a fine choice, but it is not what I do.",
      "Your product is built on a stack far from TypeScript, React, Vue and Node.js.",
    ],
    deliverables: [
      {
        title: "Product features",
        text: "Customer-facing features shipped in short iterations from your backlog, in React or Vue with TypeScript, with a weekly written update.",
      },
      {
        title: "Billing and accounts",
        text: "Subscriptions and payments with Stripe or similar, plans and limits, teams, roles and permissions, invoicing and the edge cases of upgrades and downgrades.",
      },
      {
        title: "Admin and internal tools",
        text: "Back-office tools for support, operations and finance, so the team can help customers without asking a developer.",
      },
      {
        title: "Scaling the codebase",
        text: "Upgrades, performance work, tests and structure that keep feature development fast as the product and the team grow.",
      },
    ],
    proof: ["Visma Dinero", "Målbar", "Storebuddy"],
    proofIntro: "Nine years combined inside SaaS products, longest engagements first, plus my own booking SaaS Tiltiden.",
    faqs: [
      {
        q: "Have you built a SaaS from scratch?",
        a: "Yes. Tiltiden is my own booking system for Danish service businesses, with online bookings, payments and reminders. I also co-built eManager's tournament platform from zero as a partner. And I have spent years inside large, mature SaaS codebases, which is a different and equally useful skill.",
      },
      {
        q: "Can you take over a SaaS product from a previous developer or agency?",
        a: "Yes, that is common. I start with a short audit of the code and infrastructure, write down what I find, and agree on priorities with you before changing anything important.",
      },
      shared.afterLaunch,
      shared.domain,
      shared.pricing,
      shared.start,
    ],
    related: ["fintech", "e-commerce", "climate-tech-lca"],
    services: ["freelance-nextjs-developer", "mvp-development", "senior-frontend-contractor"],
  },
  {
    slug: "e-commerce",
    label: "E-commerce",
    intent: "Developer for e-commerce platforms and tools",
    title: "E-commerce Developer | Webshop Tools & Payments",
    description:
      "Freelance full-stack developer for e-commerce companies and their tools. Webshop data, order integrations, bookkeeping automation, payments. React, Node.",
    keywords: ["e-commerce developer freelance", "webshop integration developer", "Shopify integration developer Node.js", "e-commerce tools developer", "headless commerce developer"],
    headline: ["E-commerce tools", "that turn messy order data into money."],
    sub: "I built the frontend for Storebuddy, a platform that pulls orders from webshops, automates the bookkeeping and flags imbalances an accountant would otherwise find months later. Before that I spent six years in accounting software, and I run my own product with online payments. Orders, payments, refunds, VAT and the integrations between them are familiar ground.",
    fit: [
      "You run a webshop or an e-commerce tool and need integrations between your shop, payments, accounting and logistics.",
      "You are building a SaaS product for webshop owners and need a developer who understands order and payment data.",
      "You want a headless or custom storefront in Next.js on top of your commerce platform.",
      "You need dashboards and reporting that make sense of orders, returns and margins.",
    ],
    notFit: [
      "You need a standard Shopify or WooCommerce theme set up. There are cheaper specialists for that.",
      "You need a design and marketing agency for your shop.",
      "You want the lowest hourly rate rather than the lowest total cost.",
    ],
    deliverables: [
      {
        title: "Integrations",
        text: "Shopify, WooCommerce and other platform APIs, payment providers, accounting systems and shipping, built with retries, idempotency and monitoring.",
      },
      {
        title: "Dashboards and reporting",
        text: "Order, revenue, refund and margin views that stay fast at volume, with exports your accountant will accept.",
      },
      {
        title: "Custom storefronts and checkout",
        text: "Next.js storefronts and checkout flows on top of your commerce backend, with the performance and SEO that matter for conversion.",
      },
      {
        title: "Tools for webshop owners",
        text: "SaaS products that serve many shops at once: onboarding, multi-tenant data, billing and support tooling.",
      },
    ],
    proof: ["Storebuddy", "Visma Dinero", "Målbar"],
    proofIntro: "E-commerce bookkeeping, six years of accounting software, and a data-heavy SaaS product.",
    faqs: [
      {
        q: "What e-commerce work have you done?",
        a: "The frontend for Storebuddy, which automates bookkeeping for webshop owners by pulling orders from their shops and flagging imbalances. Payments and bookings in my own product, Tiltiden. And years of accounting software, which is where e-commerce data eventually ends up.",
      },
      {
        q: "Which platforms do you integrate with?",
        a: "Whichever your shop runs on, as long as it has an API. Shopify, WooCommerce and the Danish and Nordic platforms are the usual suspects. I will check the specifics of yours on the intro call rather than guess.",
      },
      shared.domain,
      shared.pricing,
      shared.afterLaunch,
      shared.start,
    ],
    related: ["fintech", "saas", "climate-tech-lca"],
    services: ["api-development-integrations", "freelance-nextjs-developer", "web-app-developer"],
  },
  {
    slug: "construction-tech",
    label: "Construction tech",
    intent: "Developer for construction and building physics software",
    title: "Construction Tech Developer | Web Calculators",
    description:
      "Freelance full-stack developer for construction and engineering software. Five years on a moisture calculator for Bunch Bygningsfysik, on their proven engine.",
    keywords: ["construction tech developer", "building physics software developer", "engineering calculator web app", "construction software freelance developer", "web UI for calculation engine"],
    headline: ["Engineering calculators", "your customers can actually use."],
    sub: "Since 2021 I have been the developer behind Bunch Bygningsfysik's moisture content calculator for construction compositions. Their calculation module already had years of building physics expertise baked in, so I kept it as the engine and put a modern, easy to use web UI on top instead of rewriting what worked. That is the shape of most construction tech work: deep domain logic that deserves a better interface.",
    fit: [
      "You are a construction, engineering or building physics company with a calculation tool, spreadsheet or legacy app that needs a modern web UI.",
      "You build software for architects, engineers, contractors or building owners and need a developer who respects the domain logic.",
      "You want to turn in-house expertise into a product customers can use online.",
      "You need dashboards, reporting or project tools that handle technical data without confusing non-technical users.",
    ],
    notFit: [
      "You need a structural or building physics engineer. I build the software around your experts.",
      "You need BIM tooling, CAD plugins or 3D modelling. Not my field.",
      "You need a field app with heavy offline mapping and hardware integration beyond what Expo handles well.",
    ],
    deliverables: [
      {
        title: "Web UIs on proven engines",
        text: "Keep the calculation logic that works, wrap it in a clear, fast web interface with validation, explanations and exports. Built in React or Vue with TypeScript.",
      },
      {
        title: "Calculators and configurators",
        text: "Input forms for compositions, materials and parameters, with results that update live and outputs your customers can hand to a client.",
      },
      {
        title: "Project and reporting tools",
        text: "Internal and customer portals for projects, documents and reports, with roles and permissions.",
      },
      {
        title: "Mobile companions",
        text: "iOS and Android apps with Expo for use on site, sharing code and APIs with the web tool.",
      },
    ],
    proof: ["Bunch Bygningsfysik", "Målbar", "Y-mAbs Therapeutics"],
    proofIntro: "A building physics calculator, a climate footprint tool and a regulated pharma environment. Different sectors, the same respect for the domain.",
    faqs: [
      {
        q: "What have you built in construction tech?",
        a: "A moisture content calculator for construction compositions for Bunch Bygningsfysik, which I have built and kept developing since 2021. Their existing calculation module stayed as the engine, and I built a modern web application on top of it so their customers can use it without a specialist in the room.",
      },
      {
        q: "Can you work with our existing calculation code or spreadsheets?",
        a: "Yes, and I usually recommend it. Domain logic that has been validated over years is worth keeping. I put an API and a modern UI around it and only rewrite the parts that genuinely need it.",
      },
      shared.domain,
      shared.pricing,
      shared.afterLaunch,
      shared.start,
    ],
    related: ["climate-tech-lca", "saas", "biotech-pharma"],
    services: ["web-app-developer", "legacy-frontend-modernisation", "hire-react-native-developer"],
  },
];

export const getIndustry = (slug: string) => industries.find((p) => p.slug === slug);

export const industryProof = (page: IndustryPage): WorkItem[] =>
  page.proof.map((client) => work.find((w) => w.client === client)).filter((w): w is WorkItem => Boolean(w));
