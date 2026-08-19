import { work, type WorkItem } from "./site";

/**
 * SEO landing pages, one per search intent. Rendered by app/(site)/services/[slug]/page.tsx.
 * Copy rules: plain, first person, no em dashes, no exclamation marks, no skills not actually held.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface LandingPage {
  slug: string;
  /** Short label used in nav lists and related links. */
  label: string;
  /** Search intent the page targets, used as the eyebrow. */
  intent: string;
  /** <title> without the site suffix. Keep under ~60 characters. */
  title: string;
  /** Meta description, 140-160 characters. */
  description: string;
  keywords: string[];
  headline: [string, string];
  sub: string;
  /** "Good fit" column. */
  fit: string[];
  /** "Not a fit" column. Honesty is part of the positioning. */
  notFit: string[];
  /** What the engagement typically covers. */
  deliverables: { title: string; text: string }[];
  /** Client names from site.ts work[] to show as proof, in order. */
  proof: string[];
  proofIntro: string;
  faqs: Faq[];
  /** Slugs of related landing pages. */
  related: string[];
}

const sharedFaqs = {
  busFactor: {
    q: "Is one developer a risk for us?",
    a: "Code lives in your repositories from day one, written so the next developer can pick it up. Documentation and handover are part of every engagement, not an extra. My track record is long tenures, which is continuity, not dependency.",
  },
  afterLaunch: {
    q: "What happens after launch?",
    a: "I stick around. Most of my clients have kept me for one to six years, first for the build and then for support and further development. A retainer of reserved weekly hours is the usual shape, but ad hoc work is fine too.",
  },
  pricing: {
    q: "How do you price work?",
    a: "Fixed price for well-defined projects, hourly or a monthly retainer for ongoing work. My preferred engagement is 20-40 hours a week for six months or more. Rates are in the proposal, not on the site, because they depend on the scope.",
  },
  timezone: {
    q: "Do you work with companies outside Denmark?",
    a: "Yes. Most of my work is remote. I am in the Central European timezone, which gives full overlap with Europe and the UK and 3-6 hours of overlap with the US East and Central timezones. I work async-first with a written weekly update.",
  },
  start: {
    q: "How quickly can you start?",
    a: "I keep my availability status up to date on the homepage. If it says available, I can usually start within one to two weeks. The first step is a free 30-minute intro call.",
  },
  invoicing: {
    q: "How do you invoice?",
    a: "From my Danish company, Pekkel (CVR DK-37106666), in EUR, DKK or USD. Monthly for ongoing work, milestone-based for fixed-price projects.",
  },
} satisfies Record<string, Faq>;

export const landingPages: LandingPage[] = [
  {
    slug: "freelance-nextjs-developer",
    label: "Next.js developer",
    intent: "Freelance Next.js developer",
    title: "Freelance Next.js Developer | Senior, EU timezone",
    description:
      "Hire a senior freelance Next.js developer with 10+ years of experience. App Router, React Server Components, TypeScript and Vercel, for fintech, SaaS and climate tech companies.",
    keywords: ["freelance Next.js developer", "hire Next.js developer", "Next.js contractor", "Next.js freelancer Europe", "senior Next.js developer"],
    headline: ["A freelance Next.js developer", "who stays after the launch."],
    sub: "I build and maintain production Next.js applications for product companies and funded startups: customer portals, dashboards, SaaS products and marketing sites that have to hold up under real traffic. TypeScript throughout, deployed on Vercel or your own infrastructure.",
    fit: [
      "You are building a web product on Next.js and need a senior developer to own it end to end.",
      "You have a Next.js app in production and want someone who can ship features and keep it healthy for years.",
      "You want to move from Pages Router, Create React App or a legacy frontend to the App Router without stopping releases.",
      "Your team needs senior Next.js capacity now, not after a three-month hiring process.",
    ],
    notFit: [
      "You want the cheapest possible hourly rate.",
      "You need a full agency with design, marketing and a team of developers.",
      "Your stack is far from TypeScript and React, for example .NET MVC or Django templates.",
    ],
    deliverables: [
      {
        title: "New Next.js applications",
        text: "Architecture, data fetching, authentication, forms, payments and integrations. App Router, Server Components and Server Actions where they help, and a simpler setup where they do not.",
      },
      {
        title: "Feature work on existing apps",
        text: "I join your repository, read the code before I change it, and ship features in short iterations with a weekly written update.",
      },
      {
        title: "Migrations and upgrades",
        text: "Pages Router to App Router, JavaScript to TypeScript, CRA or Gatsby to Next.js, major version upgrades. Done incrementally so releases never stop.",
      },
      {
        title: "Performance and Core Web Vitals",
        text: "Rendering strategy, caching, image and font loading, bundle size. Measured before and after, not guessed.",
      },
    ],
    proof: ["Målbar", "Visma Dinero", "Storebuddy", "Y-mAbs Therapeutics"],
    proofIntro: "React and Next.js work I can talk about, with how long each client kept me.",
    faqs: [
      {
        q: "Which Next.js versions and features do you work with?",
        a: "Current Next.js with the App Router, React Server Components, Server Actions, route handlers and the Metadata API, as well as older Pages Router codebases that need maintaining or migrating. This site runs on Next.js 16.",
      },
      {
        q: "Can you also build the backend and APIs?",
        a: "Yes. I am full-stack: Node.js, REST APIs, SQL databases, authentication, payments and third-party integrations. For many products the backend lives inside the Next.js app itself.",
      },
      sharedFaqs.start,
      sharedFaqs.pricing,
      sharedFaqs.busFactor,
      sharedFaqs.timezone,
    ],
    related: ["freelance-react-developer", "web-app-developer", "legacy-frontend-modernisation"],
  },
  {
    slug: "freelance-react-developer",
    label: "React developer",
    intent: "Freelance React developer",
    title: "Freelance React Developer | Senior, 10+ Years",
    description:
      "Senior freelance React developer for product companies. React, TypeScript, Next.js and React Native, with clients in fintech, biotech and climate tech who kept me for years.",
    keywords: ["freelance React developer", "hire React developer", "React contractor", "senior React developer Europe", "React TypeScript freelancer"],
    headline: ["A senior React developer", "your team will want to keep."],
    sub: "I have written React for most of a decade, in a large accounting SaaS, in a regulated pharma environment and in startups shipping their first product. I write the kind of React that is still easy to change two years later: typed, tested where it matters, and boring in the good way.",
    fit: [
      "You have a React codebase and need a senior developer to ship features and raise the quality bar.",
      "You are starting a new product and want React with Next.js done right from the first commit.",
      "You want web and mobile from the same skill set: React on the web, React Native with Expo on iOS and Android.",
      "Your frontend has become slow or fragile and you want it fixed without a rewrite.",
    ],
    notFit: [
      "You need GraphQL expertise specifically. I work with REST and have not built production GraphQL APIs.",
      "You are looking for a junior to do simple markup at a low rate.",
      "You want many developers at once rather than one senior person.",
    ],
    deliverables: [
      {
        title: "Component architecture",
        text: "Design systems, shared component libraries, forms, tables and data-heavy UI that stays fast and accessible.",
      },
      {
        title: "State, data and performance",
        text: "Server state, caching, optimistic updates and rendering performance, chosen to fit the product rather than the current trend.",
      },
      {
        title: "Testing and CI",
        text: "Unit and integration tests where they pay off, type safety everywhere, and a CI pipeline that catches regressions before users do.",
      },
      {
        title: "Code review and mentoring",
        text: "Review pull requests, document patterns and help the rest of the team move faster. Part of every team engagement.",
      },
    ],
    proof: ["Visma Dinero", "Y-mAbs Therapeutics", "Storebuddy", "Målbar"],
    proofIntro: "Six years on Dinero's React frontend, three in pharma, and more. Longest engagements first.",
    faqs: [
      {
        q: "Do you work with Next.js, Vite or Create React App?",
        a: "All three. New projects usually get Next.js or Vite depending on whether they need server rendering. Existing CRA apps I can maintain or migrate incrementally.",
      },
      {
        q: "Can you take over an existing React codebase?",
        a: "Yes, that is a large part of my work. I start by reading the code and the git history, write down what I find, and agree on a short list of priorities with you before changing anything.",
      },
      sharedFaqs.start,
      sharedFaqs.pricing,
      sharedFaqs.afterLaunch,
      sharedFaqs.timezone,
    ],
    related: ["freelance-nextjs-developer", "hire-react-native-developer", "senior-frontend-contractor"],
  },
  {
    slug: "hire-react-native-developer",
    label: "React Native / Expo developer",
    intent: "Hire a React Native developer",
    title: "Hire a React Native Developer | Expo, iOS & Android",
    description:
      "Freelance React Native and Expo developer. iOS, iPadOS and Android apps from one TypeScript codebase, App Store and Google Play releases, sharing code and APIs with your web app.",
    keywords: ["hire React Native developer", "freelance Expo developer", "React Native contractor", "Expo app developer", "iOS Android app developer freelance"],
    headline: ["One codebase for iOS, Android", "and the web you already have."],
    sub: "I build mobile apps with Expo and React Native for companies that already have a web product, or are about to. One TypeScript codebase, native-feeling apps on iOS, iPadOS and Android, and the same APIs and business logic your web app uses. Released to the App Store and Google Play, updated over the air.",
    fit: [
      "You have a web product and customers are asking for an app, and you do not want to build it twice.",
      "You want one developer who can ship the mobile app and the backend it talks to.",
      "You need App Store and Google Play releases, push notifications, offline support and over-the-air updates handled properly.",
      "You have an existing React Native or Expo app that needs a senior pair of hands.",
    ],
    notFit: [
      "You need native Swift or Kotlin development. I build with Expo and React Native, not native code.",
      "You need a game or a graphics-heavy app that is a poor fit for React Native.",
      "You want the app designed and marketed as well. I can work with your designer, but I am not an agency.",
    ],
    deliverables: [
      {
        title: "New apps with Expo",
        text: "Navigation, authentication, forms, payments, camera and file handling, and the native modules you need through Expo's managed workflow.",
      },
      {
        title: "Store releases and updates",
        text: "App Store and Google Play submission, review process, EAS Build and over-the-air updates so small fixes do not wait for store approval.",
      },
      {
        title: "Push, offline and background work",
        text: "Push notifications, local data with sync, and the edge cases that make the difference between a demo and a product.",
      },
      {
        title: "Shared code with web",
        text: "Shared TypeScript types, validation and API clients across your Next.js web app and the mobile app, so one change ships to both.",
      },
    ],
    proof: ["Målbar", "Visma Dinero", "Y-mAbs Therapeutics"],
    proofIntro: "Long-term clients across web and mobile. Ask me on the intro call about the mobile work I can show.",
    faqs: [
      {
        q: "Why Expo and React Native instead of native apps?",
        a: "For most product companies the deciding factor is one codebase and one team for iOS, Android and web. Expo gives native performance for typical business apps, access to device features, and much faster iteration. If your app is a game or needs heavy custom native code, I will tell you on the call that native is the better choice.",
      },
      {
        q: "Can you publish the app under our company account?",
        a: "Yes. The apps are released under your Apple Developer and Google Play accounts, and the code lives in your repository. You own everything from day one.",
      },
      {
        q: "Can you build the backend too?",
        a: "Yes. Node.js and REST APIs, SQL databases, authentication and payments. If you already have a backend, I integrate with it.",
      },
      sharedFaqs.start,
      sharedFaqs.pricing,
      sharedFaqs.afterLaunch,
    ],
    related: ["freelance-react-developer", "web-app-developer", "api-development-integrations"],
  },
  {
    slug: "web-app-developer",
    label: "Web app developer",
    intent: "Web app developer for hire",
    title: "Web App Developer for Hire | Full-Stack, Senior",
    description:
      "Senior full-stack web app developer for hire. Customer portals, dashboards, SaaS products and internal tools in React, Next.js, Vue, Node.js and TypeScript. From Denmark, remote.",
    keywords: ["web app developer for hire", "hire web application developer", "full-stack developer freelance", "custom web application development", "SaaS developer freelance"],
    headline: ["A web app developer", "who treats your product like his own."],
    sub: "I build web applications for companies that need more than a website: customer portals, admin dashboards, SaaS products, calculators and internal tools. Full-stack, from database to UI, designed to be maintained for years rather than launched and forgotten.",
    fit: [
      "You need a customer portal, dashboard or internal tool and want one senior developer to own it.",
      "You are building a SaaS product and want working software early, not a big reveal in six months.",
      "You have a proven calculation engine, spreadsheet or legacy system that needs a modern web UI on top.",
      "You want someone who understands the business problem first and chooses the technology second.",
    ],
    notFit: [
      "You need a brochure website in WordPress or Webflow. There are better and cheaper options for that.",
      "You want a fully staffed agency with design, content and marketing in one contract.",
      "You need the lowest price rather than the lowest total cost.",
    ],
    deliverables: [
      {
        title: "Scoping and proposal",
        text: "A free intro call, then a short written proposal with scope, approach, timeline and price. No code until we agree on the goal.",
      },
      {
        title: "Full-stack build",
        text: "React or Vue frontend, Node.js and REST APIs, SQL database, authentication, payments and integrations. TypeScript end to end.",
      },
      {
        title: "Hosting, CI and launch",
        text: "Deployment on Vercel or your cloud, automated tests and CI, monitoring, and a launch that does not need a war room.",
      },
      {
        title: "Support and further development",
        text: "Documentation and handover, then ongoing development on a retainer if you want to keep building.",
      },
    ],
    proof: ["Målbar", "Bunch Bygningsfysik", "Y-mAbs Therapeutics", "Storebuddy"],
    proofIntro: "Web applications in climate tech, construction, pharma and e-commerce, and how long each client kept me.",
    faqs: [
      {
        q: "Which technologies do you use?",
        a: "TypeScript, React and Next.js or Vue and Nuxt on the frontend, Node.js and REST APIs on the backend, SQL databases, Tailwind CSS, and Vercel or cloud hosting. I pick within that set based on your team and product, not on trends.",
      },
      {
        q: "Can you work from a design, or without one?",
        a: "Both. I work well with your designer or an existing design system. For internal tools and MVPs I can design a clean, usable interface myself, as I have done for my own products.",
      },
      {
        q: "How long does a web app take?",
        a: "A focused MVP or internal tool is typically four to ten weeks. Larger products are built in stages so you have something in production early. You get a timeline in the proposal.",
      },
      sharedFaqs.pricing,
      sharedFaqs.busFactor,
      sharedFaqs.afterLaunch,
    ],
    related: ["mvp-development", "freelance-nextjs-developer", "api-development-integrations"],
  },
  {
    slug: "senior-frontend-contractor",
    label: "Senior frontend contractor",
    intent: "Senior frontend contractor",
    title: "Senior Frontend Contractor | React, Next.js, Vue",
    description:
      "Senior frontend contractor who plugs into your team in days. React, Next.js, Vue and TypeScript, 10+ years of experience, clients kept me for up to six years. EU timezone, remote.",
    keywords: ["senior frontend contractor", "frontend contractor Europe", "React contractor", "freelance frontend developer senior", "contract frontend developer remote"],
    headline: ["Senior frontend capacity", "without the three-month hire."],
    sub: "When your team is stretched and hiring is slow, I join as a senior contractor: read the codebase, pick up tickets in the first week, review code and ship features. No ramp-up theatre. I have done this inside a large accounting SaaS for six years and inside a pharma company for three.",
    fit: [
      "Your engineering team is stretched and you need a senior frontend developer who can start soon.",
      "You want someone who ships and reviews code, not someone who needs to be managed.",
      "You are a recruiter or agency placing a senior React, Next.js or Vue contractor with a verifiable profile.",
      "You need a contractor who will still be here in a year, not just for a three-month gig.",
    ],
    notFit: [
      "You need on-site presence most days. I work remotely from Denmark.",
      "Your stack is Angular-only or something outside React and Vue. I have shipped Angular but it is not my main tool.",
      "You need a team lead to manage other contractors rather than an individual contributor.",
    ],
    deliverables: [
      {
        title: "Feature delivery",
        text: "Pick up tickets from your backlog, ship them in small reviewable pull requests, and keep the board moving from week one.",
      },
      {
        title: "Code review and standards",
        text: "Review the team's pull requests, document conventions and raise the bar on types, tests and accessibility without slowing anyone down.",
      },
      {
        title: "Upgrades nobody has time for",
        text: "Framework upgrades, dependency cleanup, build tooling and performance work that keeps getting pushed to next sprint.",
      },
      {
        title: "Knowledge that stays",
        text: "Written decisions and documentation so the team keeps the knowledge if I leave, which my track record suggests will not be soon.",
      },
    ],
    proof: ["Visma Dinero", "Y-mAbs Therapeutics", "Storebuddy", "Målbar"],
    proofIntro: "Embedded in existing teams, with how long each one kept me.",
    faqs: [
      {
        q: "How many hours a week are you available?",
        a: "My preferred engagement is 20-40 hours a week for six months or more. Shorter or smaller engagements are possible when my calendar allows. Current availability is on the homepage.",
      },
      {
        q: "Do you have a CV I can forward?",
        a: "Yes, a printable CV is at perhp.com/cv. It covers the stack, every engagement with years, and contact details. Recruiters and agencies are welcome to forward it, and perhp.com/for-recruiters has everything needed to qualify me for a role on one page.",
      },
      {
        q: "Which tools and workflows are you used to?",
        a: "GitHub and GitLab, pull request reviews, CI/CD, Jira and Linear, Slack and Teams, async written updates. I adapt to your team's process rather than the other way around.",
      },
      sharedFaqs.invoicing,
      sharedFaqs.timezone,
      sharedFaqs.start,
    ],
    related: ["freelance-react-developer", "freelance-vue-nuxt-developer", "legacy-frontend-modernisation"],
  },
  {
    slug: "freelance-vue-nuxt-developer",
    label: "Vue / Nuxt developer",
    intent: "Freelance Vue and Nuxt developer",
    title: "Freelance Vue & Nuxt Developer | Senior, TypeScript",
    description:
      "Senior freelance Vue and Nuxt developer. Vue 3, Composition API, Nuxt, TypeScript and Node.js for product companies that need features shipped and a codebase that stays maintainable.",
    keywords: ["freelance Vue developer", "Nuxt developer for hire", "Vue.js contractor", "senior Vue developer Europe", "Vue TypeScript freelancer"],
    headline: ["A Vue and Nuxt developer", "who ships and sticks around."],
    sub: "Vue is the other half of my frontend work. I build and maintain Vue 3 and Nuxt applications with TypeScript, the Composition API and Node.js backends, for companies that chose Vue for good reasons and want a senior developer who respects that choice instead of pushing a rewrite.",
    fit: [
      "You run a Vue or Nuxt product and need senior capacity to ship features and keep it healthy.",
      "You are on Vue 2 or an older Nuxt version and need a planned, incremental upgrade.",
      "You want one developer who can handle the Vue frontend and the Node.js API behind it.",
      "You prefer a developer who is comfortable in both React and Vue and will not argue about which is better.",
    ],
    notFit: [
      "You are looking for someone to rewrite a working Vue app in React. I will usually advise against it.",
      "You need the cheapest possible rate for simple page building.",
      "You need a large team rather than one senior developer.",
    ],
    deliverables: [
      {
        title: "Vue 3 and Nuxt applications",
        text: "Composition API, Pinia, typed components, server routes and data fetching in Nuxt, and a sensible project structure the team can follow.",
      },
      {
        title: "Vue 2 to Vue 3 migrations",
        text: "Audit, migration plan, and an incremental path that keeps releases going while the codebase moves forward.",
      },
      {
        title: "Performance and maintainability",
        text: "Bundle size, rendering, caching and the refactors that make the next feature cheaper instead of more expensive.",
      },
      {
        title: "APIs and integrations",
        text: "Node.js REST APIs, SQL databases, authentication, payments and accounting integrations behind the Vue frontend.",
      },
    ],
    proof: ["Målbar", "Bunch Bygningsfysik", "Visma Dinero", "Y-mAbs Therapeutics"],
    proofIntro: "Product companies that kept me for years, on Vue and React alike.",
    faqs: [
      {
        q: "Do you work with Vue 2 codebases?",
        a: "Yes, both maintaining them and migrating them to Vue 3. Vue 2 is end of life, so most clients want a migration plan, and I prefer one that ships in steps rather than a big-bang rewrite.",
      },
      {
        q: "React or Vue, which do you recommend?",
        a: "Whichever your team already knows and your product already runs on. Both are mature. The choice matters far less than the quality of the code and the people maintaining it.",
      },
      sharedFaqs.start,
      sharedFaqs.pricing,
      sharedFaqs.busFactor,
      sharedFaqs.timezone,
    ],
    related: ["senior-frontend-contractor", "freelance-react-developer", "legacy-frontend-modernisation"],
  },
  {
    slug: "legacy-frontend-modernisation",
    label: "Modernisation & rescue",
    intent: "Legacy frontend modernisation",
    title: "Legacy Frontend Modernisation & Rescue | Freelance",
    description:
      "Inherited a codebase nobody wants to touch? I modernise legacy React, Vue and JavaScript frontends, fix performance problems and get releases flowing again, incrementally and with a plan.",
    keywords: ["legacy frontend modernisation", "codebase rescue developer", "upgrade legacy React app", "frontend migration freelance", "fix slow web app"],
    headline: ["Inherited a codebase", "nobody wants to touch?"],
    sub: "Releases have stopped, the site is slow, the last developer left and the dependencies are years behind. I take over stalled and legacy frontends, stabilise them, and move them forward in steps you can ship, with a written plan and no drama. I did exactly this for a building physics company, keeping their proven calculation engine and putting a modern web UI on top.",
    fit: [
      "You have a React, Vue, Angular or jQuery-era frontend that is hard to change and nobody on the team wants to own.",
      "Releases have slowed down or stopped because every change breaks something else.",
      "Your previous developer or agency left and you need someone to take over safely.",
      "You want to modernise without a full rewrite and without stopping feature work.",
    ],
    notFit: [
      "You want a complete rewrite on day one. I will usually recommend an incremental path first and show you why.",
      "The codebase is in a language far from JavaScript and TypeScript, for example a PHP or .NET backend rewrite. I can modernise the frontend in front of it, not replace it.",
      "You want someone to blame for the old code. I am more interested in fixing it.",
    ],
    deliverables: [
      {
        title: "Audit and plan",
        text: "I read the code, the git history and the bug tracker, then write a short assessment: what is risky, what is fine, and what to do first. You get it in writing before any large decision.",
      },
      {
        title: "Stabilise",
        text: "Builds that pass, dependencies updated, tests around the scary parts, monitoring in place. Releases start flowing again.",
      },
      {
        title: "Modernise incrementally",
        text: "TypeScript, current framework versions, a modern build and a path from old patterns to new ones, shipped in steps alongside normal feature work.",
      },
      {
        title: "Performance fixes",
        text: "Slow pages, large bundles and jank, measured and fixed. Core Web Vitals you can show the business.",
      },
    ],
    proof: ["Bunch Bygningsfysik", "Visma Dinero", "Y-mAbs Therapeutics", "Målbar"],
    proofIntro: "Mature codebases I have taken over or kept healthy, and how long each client kept me.",
    faqs: [
      {
        q: "Rewrite or refactor?",
        a: "Almost always refactor and modernise incrementally. Rewrites take longer than planned, freeze feature work and often reproduce the old bugs. I will tell you honestly if your case is one of the rare exceptions.",
      },
      {
        q: "How do you start on a codebase you have never seen?",
        a: "With a short paid audit. One to two weeks of reading code, running it locally, talking to whoever knows it and writing down what I find. You get a document you can act on whether you hire me for the next step or not.",
      },
      {
        q: "Can you work alongside our existing team?",
        a: "Yes. Modernisation usually happens next to ongoing feature work. I coordinate with your team, review their changes and keep the plan updated so nobody is blocked.",
      },
      sharedFaqs.pricing,
      sharedFaqs.start,
      sharedFaqs.afterLaunch,
    ],
    related: ["senior-frontend-contractor", "freelance-nextjs-developer", "freelance-vue-nuxt-developer"],
  },
  {
    slug: "api-development-integrations",
    label: "APIs & integrations",
    intent: "API and integrations developer",
    title: "API Development & Integrations | Node.js, TypeScript",
    description:
      "Freelance Node.js developer for REST APIs, database design and third-party integrations: payments, accounting, authentication and more. The plumbing that makes your product work.",
    keywords: ["API developer freelance", "Node.js API development", "third-party integration developer", "payment integration developer", "REST API contractor"],
    headline: ["APIs and integrations", "that make the product actually work."],
    sub: "Behind every web and mobile product is a layer of APIs, databases and integrations that nobody sees until it breaks. I design and build that layer in Node.js and TypeScript: REST APIs, SQL schemas, authentication, payments, accounting and the third-party services your product depends on.",
    fit: [
      "Your web or mobile app needs a backend API and you want one developer who can build both sides.",
      "You need to integrate payments, accounting, CRM, authentication or another third-party service properly.",
      "You have an API that has grown organically and needs structure, documentation and tests.",
      "You want someone who has built data-heavy integrations in fintech and e-commerce before.",
    ],
    notFit: [
      "You need GraphQL specifically. I build and consume REST APIs.",
      "You need large-scale data engineering, machine learning or infrastructure-only work.",
      "You are looking for a team of backend engineers rather than one senior full-stack developer.",
    ],
    deliverables: [
      {
        title: "REST API design and build",
        text: "Resource design, validation, error handling, pagination, versioning and documentation. Node.js, TypeScript and a SQL database.",
      },
      {
        title: "Third-party integrations",
        text: "Payments such as Stripe, accounting systems, authentication providers, email and webhooks. Built with retries, idempotency and logging so they survive contact with reality.",
      },
      {
        title: "Database design",
        text: "Schemas, migrations, indexes and queries that stay fast as the data grows, with backups and access you can audit.",
      },
      {
        title: "Auth and security basics",
        text: "Authentication, roles and permissions, secrets handling, rate limiting and input validation. Done as standard, not as an afterthought.",
      },
    ],
    proof: ["Storebuddy", "Målbar", "Y-mAbs Therapeutics", "Visma Dinero"],
    proofIntro: "Data-heavy products in e-commerce bookkeeping, LCA, pharma and accounting.",
    faqs: [
      {
        q: "Which backend stack do you use?",
        a: "Node.js with TypeScript, REST APIs, SQL databases such as PostgreSQL, and hosting on Vercel or your cloud of choice. If your backend is in another language, I integrate with it from the frontend and mobile side.",
      },
      {
        q: "Can you integrate with our accounting or ERP system?",
        a: "Very likely. I have worked inside accounting software and built bookkeeping automation for e-commerce. Most systems expose a REST API or webhooks, and I will check the specifics on the intro call.",
      },
      sharedFaqs.pricing,
      sharedFaqs.start,
      sharedFaqs.busFactor,
      sharedFaqs.timezone,
    ],
    related: ["web-app-developer", "hire-react-native-developer", "freelance-nextjs-developer"],
  },
  {
    slug: "mvp-development",
    label: "MVP development",
    intent: "MVP development for startups",
    title: "MVP Development for Startups | Senior Freelancer",
    description:
      "Get your MVP built by a senior freelance developer instead of an agency. Next.js, Expo, Node.js and TypeScript. Working software early, weekly updates, and someone who stays after launch.",
    keywords: ["MVP development freelance", "build my MVP", "startup developer for hire", "MVP developer Next.js", "technical co-founder alternative"],
    headline: ["An MVP built by a senior developer,", "not an agency's juniors."],
    sub: "Founders come to me when they need a product in the market without hiring a team or paying agency overhead. I scope with you, build in short iterations, and put working software in front of users early so we can change course before it gets expensive. I also build my own products, so I know what it is like to be on your side of the table.",
    fit: [
      "You are a founder with a validated idea and need a web or mobile MVP in weeks, not quarters.",
      "You want a senior developer who will challenge the scope and help you ship the smallest thing that proves the point.",
      "You want the same person to stay on after launch and grow the product with you.",
      "You need web and mobile and do not want to build it twice.",
    ],
    notFit: [
      "You need a technical co-founder working for equity. I work for fees, with a free intro call and honest advice included.",
      "You want the cheapest possible build and plan to throw it away. That is fine, but I am probably not the right fit.",
      "You need design, branding and marketing in the same contract.",
    ],
    deliverables: [
      {
        title: "Scope to the smallest useful product",
        text: "A free intro call and a short proposal. We cut everything that does not prove the idea, and write down what version two looks like.",
      },
      {
        title: "Build in short iterations",
        text: "Something in production in the first weeks, a weekly written update, and a demo you can show investors and early users.",
      },
      {
        title: "Web, mobile or both",
        text: "Next.js for web, Expo for iOS and Android, one TypeScript codebase and one set of APIs. Payments and authentication included where needed.",
      },
      {
        title: "A foundation that survives success",
        text: "Clean code, tests where they matter and documentation, so the MVP can become the real product instead of being rewritten.",
      },
    ],
    proof: ["eManager", "Målbar", "Storebuddy", "Bunch Bygningsfysik"],
    proofIntro: "Products built from zero, including one where I was a partner, plus my own products Tiltiden and Ønsker.dk.",
    faqs: [
      {
        q: "How long does an MVP take?",
        a: "Most MVPs I build take four to ten weeks to first release, depending on scope. Anything that needs much longer is probably not minimal yet, and we will talk about that on the call.",
      },
      {
        q: "Do you work fixed price?",
        a: "Yes, for a well-defined MVP scope. For ongoing development after launch a retainer works better. Both are in the proposal.",
      },
      {
        q: "What if we need to change direction halfway?",
        a: "That is expected. Short iterations and weekly updates exist so you can change course early, while it is cheap. We adjust the scope and the proposal together.",
      },
      sharedFaqs.afterLaunch,
      sharedFaqs.busFactor,
      sharedFaqs.start,
    ],
    related: ["web-app-developer", "hire-react-native-developer", "freelance-nextjs-developer"],
  },
  {
    slug: "freelance-web-developer-denmark",
    label: "Freelance developer in Denmark",
    intent: "Freelance web developer, Denmark",
    title: "Freelance Web Developer in Denmark | Per Hansen",
    description:
      "Senior freelance web and mobile developer based in Denmark. React, Next.js, Vue, Expo and Node.js for Danish and Nordic companies. Danish CVR invoicing, native Danish, fluent English.",
    keywords: ["freelance web developer Denmark", "freelance udvikler", "freelance developer Copenhagen", "Next.js developer Denmark", "React developer Danmark"],
    headline: ["A senior freelance developer", "based in Denmark."],
    sub: "I am Per Hansen, a full-stack web and mobile developer working from Denmark for Danish, Nordic and international companies. Danish company and CVR number, invoices in DKK or EUR, native Danish and fluent English. Most of my longest clients, including Visma Dinero, Målbar and Storebuddy, are Danish product companies.",
    fit: [
      "You are a Danish or Nordic company that wants a senior developer in your timezone and language.",
      "You want a freelancer with a Danish company and CVR number for straightforward invoicing and contracts.",
      "You are an international company that wants an EU-based developer with full European overlap.",
      "You need web, mobile or both, and a developer who stays around after launch.",
    ],
    notFit: [
      "You need someone on-site every day. I work remotely and meet in person when it makes sense.",
      "You are looking for a full agency or a team of developers.",
      "You need stacks outside TypeScript, React, Vue and Node.js.",
    ],
    deliverables: [
      {
        title: "Web applications",
        text: "React, Next.js, Vue and Nuxt frontends with Node.js APIs. Customer portals, dashboards, SaaS products and internal tools.",
      },
      {
        title: "Mobile apps",
        text: "iOS, iPadOS and Android apps with Expo and React Native, released to the App Store and Google Play.",
      },
      {
        title: "Senior capacity for Danish teams",
        text: "Join your team in Copenhagen, Aarhus, Odense or anywhere else remotely, and ship from the first week. Danish or English, whichever the team prefers.",
      },
      {
        title: "Modernisation and integrations",
        text: "Take over legacy frontends, integrate Danish payment and accounting systems, and get releases flowing again.",
      },
    ],
    proof: ["Visma Dinero", "Målbar", "Storebuddy", "Bunch Bygningsfysik"],
    proofIntro: "Danish companies I have worked with, and how long each one kept me.",
    faqs: [
      {
        q: "Do you work in Danish?",
        a: "Yes. Danish is my native language and I work in English every day. Code, documentation and written updates are in English by default so they stay useful if the team grows.",
      },
      {
        q: "Can we meet in person?",
        a: "Yes, for kick-offs, workshops or the occasional day at the office when it adds value. Day to day I work remotely.",
      },
      sharedFaqs.invoicing,
      sharedFaqs.start,
      sharedFaqs.pricing,
      sharedFaqs.afterLaunch,
    ],
    related: ["web-app-developer", "senior-frontend-contractor", "hire-react-native-developer"],
  },
];

export const getLandingPage = (slug: string) => landingPages.find((p) => p.slug === slug);

export const proofItems = (page: LandingPage): WorkItem[] =>
  page.proof.map((client) => work.find((w) => w.client === client)).filter((w): w is WorkItem => Boolean(w));
