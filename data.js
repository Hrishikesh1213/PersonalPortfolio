// ============================================================
// ALL SITE CONTENT LIVES HERE. Edit this file to update the
// site — no HTML editing needed. script.js reads this object
// and builds the page from it.
// ============================================================
const SITE_DATA = {

  profile: {
    name: "Karra Hrishikesh Reddy",
    roleShort: "SDE-2 @ Super.Money — Bengaluru, IN",
    avatar: "assets/profile-avatar.jpg",
    aboutPhoto: "assets/about-photo.jpg",
    email: "karra.hrishikesh@gmail.com",
    phone: "+91 93815 67454",
    phoneHref: "tel:+919381567454",
    whatsappUrl: "https://wa.me/919381567454",
    linkedin: "https://www.linkedin.com/in/hrishikeshkarra1213/",
    resumeViewUrl: "https://drive.google.com/file/d/1jXYmoP8tj9dJr0ZLVuIvDHi_qagbd_kU/view?usp=sharing",
    resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1jXYmoP8tj9dJr0ZLVuIvDHi_qagbd_kU",
  },

  nav: [
    { label: "About", href: "#manifesto" },
    { label: "Skills", href: "#toolkit" },
    { label: "Experience", href: "#trajectory" },
    { label: "Work", href: "#work" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "SDE-2 · BACKEND & DISTRIBUTED SYSTEMS — BENGALURU, IN",
    titleLines: ["I build backends", "that stay fast"],
    titleOutline: "under real traffic.",
    subtitle: "Software engineer at Super.Money (Flipkart Group) specializing in high-throughput " +
      "personalization systems, multi-agent LLM platforms, and the caching &amp; infra work " +
      "that keeps 10M+ daily users fast.",
    ctaPrimary: { label: "VIEW THE WORK ↓", href: "#work" },
    ctaSecondary: { label: "GET IN TOUCH", href: "#contact" },
    scrollHint: "SCROLL TO EXPLORE ↓",
    marquee: [
      "DISTRIBUTED SYSTEMS", "LLM AGENTS", "HIGH-THROUGHPUT CACHING",
      "EVENT-DRIVEN ARCHITECTURE", "PERSONALIZATION AT SCALE", "SPRING BOOT",
    ],
  },

  about: {
    sectionLabel: "[ 00 ] — HOW I WORK",
    bioParagraphs: [
      "Software Development Engineer 2 at Super.Money (Flipkart Group), with a Computer Science Dual " +
        "Degree (B.Tech + M.Tech) from IIT Bhubaneswar. I'm a backend engineer experienced in designing " +
        "scalable, high-throughput FinTech systems.",
      "At Super.Money, I've led several high-impact initiatives, including building the co-branded " +
        "credit cards, Fixed Deposit platforms and cross-sell gateway as well as developing our core " +
        "cohorting and experimentation systems.",
      "I work extensively with Spring Boot, HBase, SQL, Kafka, and Redis, always with a focus on " +
        "optimising performance and enhancing the user experience. I'm passionate about designing and " +
        "building resilient, efficient platforms that solve complex, real-world problems at scale.",
    ],
    details: [
      { label: "Name", value: "Karra Hrishikesh Reddy" },
      { label: "Education", value: "Dual Degree (B.Tech + M.Tech), CS — IIT Bhubaneswar" },
      { label: "Experience", value: "3+ years" },
      { label: "Email", value: "karra.hrishikesh@gmail.com", href: "mailto:karra.hrishikesh@gmail.com" },
      { label: "Phone", value: "+91 93815 67454", href: "tel:+919381567454" },
    ],
  },

  toolkit: {
    sectionLabel: "[ 01 ] — TOOLKIT",
    heading: ["The stack I", "reach for."],
    description: "Tools chosen for throughput and operational calm at Flipkart Group scale — not novelty.",
    categories: [
      { title: "Languages & Core Ecosystems", skills: ["Java", "Spring Boot", "Dropwizard", "Python", "SQL"] },
      { title: "Databases & Caching", skills: ["PostgreSQL", "Redis", "ClickHouse", "HBase", "MongoDB", "Bigtable", "BigQuery", "NoSQL"] },
      { title: "Cloud & Distributed Systems", skills: ["GCP", "Kubernetes", "Docker", "Kafka", "Pub/Sub", "Spark", "Flink", "Airflow"] },
      { title: "Applied AI", skills: ["LLMs", "AI Agents", "Prompt Engineering", "Figma MCP"] },
    ],
  },

  // Each project renders as a small clickable card (brief + tag). Click opens
  // a modal with the full description/stats/pills. First 8 show by default,
  // split 4-left/4-right; anything past that sits behind "Show more".
  work: {
    sectionLabel: "[ 03 ] — SELECTED WORK",
    heading: ["Systems that", "carry weight."],
    projects: [
      {
        year: "2025", tag: "LLM · FIGMA MCP", tagId: "P-01",
        title: "AI-Powered Figma-to-Code Platform",
        brief: "Multi-agent LLM platform that generates API contracts, backend and frontend code straight from Figma designs.",
        description: "Multi-agent LLM platform with a Figma MCP server that autonomously generates API contracts, " +
          "backend boilerplate and frontend UI straight from design components — cutting design-to-PR " +
          "handoff from 4+ days to under 2.",
        stats: [
          { value: "< 2 days", label: "DESIGN-TO-PR" },
          { value: "60%", label: "LIFECYCLE CUT" },
          { value: "Multi-agent", label: "ARCHITECTURE" },
        ],
        pills: ["LLMs", "Figma MCP", "Multi-Agent", "Automation"],
      },
      {
        year: "2024", tag: "REDIS · CAFFEINE", tagId: "P-02",
        title: "Central Page &amp; URL Service",
        brief: "High-throughput personalization service serving 10M+ users via multi-tier Redis-Caffeine caching.",
        description: "Centralized, high-throughput service delivering personalized content by user cohort and " +
          "active experiment via multi-tier Redis-Caffeine caching, plus a zero-code RBAC'd admin " +
          "platform fed by a GCP Pub/Sub + Bigtable signal pipeline.",
        stats: [
          { value: "10M+", label: "DAILY ACTIVE USERS" },
          { value: "4,500 QPS", label: "THROUGHPUT" },
          { value: "< 10ms", label: "P99 LATENCY" },
        ],
        pills: ["Redis", "Caffeine", "GCP Pub/Sub", "Bigtable"],
      },
      {
        year: "2024", tag: "SPRING BOOT", tagId: "P-03",
        title: "Cross-Sell Gateway &amp; Template Service",
        brief: "Spring Boot cross-sell microservice plus a zero-deployment templating service for app &amp; CRM content.",
        description: "High-throughput in-app cross-sell microservice with user-level personalization and rate " +
          "limiting across 5+ touchpoints, alongside a zero-deployment templating service that lets " +
          "product teams configure app/CRM content with zero engineering dependency.",
        stats: [
          { value: "3,000 QPS", label: "AT SUB-80MS" },
          { value: "< 5ms", label: "TEMPLATE LATENCY" },
          { value: "100%", label: "ENG. DEPENDENCY REMOVED" },
        ],
        pills: ["Spring Boot", "Personalization", "Rate Limiting", "Templating"],
      },
      {
        year: "2024", tag: "EXPERIMENTATION", tagId: "P-04",
        title: "A/B Testing &amp; Experiment Platform",
        brief: "Central experimentation architecture spanning the orchestrator and 20+ downstream gateways.",
        description: "Central A/B testing architecture spanning the orchestrator and 20+ gateways, sustaining " +
          "10K+ QPS and letting downstream services run data-driven content experiments on their own — " +
          "compressing product iteration cycles.",
        stats: [
          { value: "10K+ QPS", label: "SUSTAINED" },
          { value: "20+", label: "GATEWAYS COVERED" },
          { value: "3x", label: "FASTER ITERATION" },
        ],
        pills: ["A/B Testing", "Experimentation", "Spring Boot"],
      },
      {
        year: "2024", tag: "FINTECH", tagId: "P-05",
        title: "Cards, Fixed Deposits &amp; Credit Score",
        brief: "End-to-end onboarding for co-branded credit cards and Fixed Deposits, plus an on-demand credit score feature.",
        description: "End-to-end, session-persistent onboarding journeys for co-branded credit cards and Fixed " +
          "Deposits across multiple partner banks, plus an on-demand credit score feature powering the " +
          "primary data pipeline for loan and card cross-sell.",
        stats: [
          { value: "210K+", label: "CREDIT CARDS ISSUED" },
          { value: "50K+", label: "FIXED DEPOSITS" },
          { value: "6M+", label: "USERS ON CREDIT SCORE" },
        ],
        pills: ["Payments", "Partner APIs", "Credit Cards", "Fixed Deposits"],
      },
      {
        year: "2023", tag: "AIRFLOW · KAFKA", tagId: "P-06",
        title: "Cohort Engine, Intent Payments &amp; Journeys",
        brief: "Airflow-based cohorting platform, an event-driven journey system, and a unified UPI intent-payment flow.",
        description: "Data platform on Apache Airflow aggregating raw events into segmented user cohorts powering " +
          "3 downstream gateways, an event-driven system decomposing events across specialized state " +
          "machines, and a unified UPI intent-payment flow across Credit Cards, Fixed Deposits and Flights.",
        stats: [
          { value: "1,700 QPS", label: "AT SUB-20MS" },
          { value: "3", label: "GATEWAYS POWERED" },
          { value: "12%", label: "LOWER PAYMENT DROP" },
        ],
        pills: ["Airflow", "Kafka", "Event-Driven", "UPI"],
      },
      {
        year: "2023", tag: "LENDING", tagId: "P-07",
        title: "Lender Integration",
        brief: "Axis Bank lending integration plus a cross-lender dedup pipeline cutting late-stage rejections.",
        description: "Spearheaded the integration of Axis Bank into the core lending platform — now accounting for " +
          "36% of total loan disbursals — and introduced a cross-lender deduplication pipeline that " +
          "trimmed late-stage application rejections.",
        stats: [
          { value: "36%", label: "OF LOAN DISBURSALS" },
          { value: "30%", label: "FEWER LATE-STAGE REJECTIONS" },
          { value: "Multi-lender", label: "ORCHESTRATION" },
        ],
        pills: ["Lending", "Axis Bank", "Dedup Pipeline"],
      },
      {
        year: "2023", tag: "MARKETPLACE", tagId: "P-08",
        title: "Flipkart Health Plus — Catalog &amp; Marketplace APIs",
        brief: "Catalog expansion, a \"Best Price\" conversion feature, and RESTful APIs for the Marketplace gateway.",
        description: "Expanded product catalog coverage with 11 new category schemas and 100,000+ listings, " +
          "integrated a \"Best Price\" API into search and PDP to surface the optimal coupon at checkout, " +
          "and authored RESTful APIs for the Marketplace gateway covering returns, shipments and cancellations.",
        stats: [
          { value: "100K+", label: "LISTINGS ADDED" },
          { value: "8–12%", label: "CONVERSION LIFT" },
          { value: "15+", label: "APIS SHIPPED" },
        ],
        pills: ["Java", "Spring Boot", "REST APIs", "Catalog"],
      },
    ],
  },

  // "items" always show. "moreItems" are revealed by the Show More button.
  trajectory: {
    sectionLabel: "[ 02 ] — TRAJECTORY",
    heading: ["Where I've", "shipped."],
    items: [
      {
        date: "FEB 2024 — PRESENT", org: "Super.Money (Flipkart Group)", badge: "10M+ DAU",
        role: "Software Development Engineer 2",
        bullets: [
          "AI-Powered Figma-to-Code Platform: designed a multi-agent LLM system with a Figma MCP server that autonomously generates API contracts, backend boilerplate and frontend UI, cutting design-to-PR handoff from 4+ days to under 2 and shortening the widget lifecycle by 60%.",
          "Central Page &amp; URL Service: built a multi-tier Redis-Caffeine caching layer processing 4,500+ QPS at sub-10ms P99 for 10M+ daily active users, plus a zero-code RBAC admin platform (GCP Pub/Sub + Bigtable) that compressed content rollout cycles by 30%.",
          "Cross-Sell Gateway &amp; Template Service: built a Spring Boot microservice sustaining 3,000 QPS at sub-80ms with rate limiting across 5+ touchpoints, plus a zero-deployment templating service (sub-5ms) letting product teams configure app/CRM content with zero engineering dependency.",
          "A/B Testing Platform: established a central experimentation architecture spanning the orchestrator and 20+ gateways, letting downstream services run data-driven experiments independently and compressing product iteration cycles by 3x.",
          "Cards, Fixed Deposits &amp; Credit Score: drove adoption of core financial products — 210,000+ credit cards and 50,000+ Fixed Deposits — via session-persistent onboarding journeys and partner API integrations, and shipped an on-demand credit score feature reaching 6M+ users.",
          "Cohort Engine &amp; Intent Payments: built an Apache Airflow cohorting platform (1,700 QPS, sub-20ms) powering 3 downstream gateways, plus a unified UPI intent-payment flow across Credit Cards, Fixed Deposits and Flights that cut payment drop 12%.",
          "Lender Integration: spearheaded the Axis Bank integration into the core lending platform (36% of total loan disbursals) and introduced a cross-lender dedup pipeline that trimmed late-stage application rejections by 30%.",
        ],
        stack: ["Java", "Spring Boot", "LLMs", "Redis", "Kafka", "Airflow", "GCP", "Bigtable"],
      },
      {
        date: "JUN 2023 — JAN 2024", org: "Flipkart Health Plus", badge: "+100K listings",
        role: "Software Development Engineer 1",
        bullets: [
          "Expanded product catalog coverage by onboarding 11 new category schemas and adding 100,000+ product listings, increasing catalog depth for high-traffic search queries.",
          "Accelerated user conversion by integrating a \"Best Price\" API into search and product pages, raising purchase conversion by an estimated 8–12% across eligible SKUs.",
          "Authored 15+ RESTful APIs for the Marketplace gateway covering returns, shipment processing and order cancellations, lowering average order resolution time by 20%.",
        ],
        stack: ["Java", "Spring Boot", "REST APIs"],
      },
      {
        date: "MAY 2022 — JUL 2022", org: "Flipkart Internet Pvt. Ltd.", badge: "-70% TASK TIME",
        role: "Software Engineering Intern",
        bullets: [
          "Boosted developer productivity by building an internal UI for job scheduling APIs, slashing average scheduling task completion time by 70% and eliminating CLI dependency for 30+ engineers.",
          "Strengthened system reliability by implementing exponential back-off retry logic for ZooKeeper lock acquisition, halving lock contention failures by 90%+ and raising distributed job success rate to 99.9%.",
        ],
        stack: ["Java", "ZooKeeper", "Internal Tooling"],
      },
    ],
    moreItems: [
      {
        date: "SEP 2021 — JAN 2022", org: "PTCG India Pvt. Ltd.", badge: "50HRS/WK SAVED",
        role: "Software Engineering Intern",
        stack: ["Chatbots/NLP", "SMS/WhatsApp APIs"],
        bullets: [
          "Deployed an MVP conversational chatbot that engaged mortgage leads via SMS/WhatsApp on database entry, collected qualification data, and scheduled advisor appointments.",
          "Saved mortgage advisors 50 hours/week and slashed lead response time from 24 hours to under 5 minutes.",
        ],
      },
      {
        date: "MAY 2021 — JUL 2021", org: "HCL Technologies", badge: "+40% AWARENESS",
        role: "Software Engineering Intern",
        stack: ["IBM Watson", "HCL Compass", "Slack/MS Teams APIs"],
        bullets: [
          "Integrated HCL Compass with IBM Watson Assistant and Discovery to deliver real-time change notifications across 5+ MS Teams and Slack channels.",
          "Boosted incident awareness speed by 40% for 3 cross-functional engineering teams.",
        ],
      },
    ],
  },

  achievements: {
    sectionLabel: "[ 04 ] — ACHIEVEMENTS &amp; LEADERSHIP",
    heading: ["Notes on", "the record."],
    items: [
      { tag: "AWARD", title: "Engineering Excellence Award",
        description: "Recognized company-wide for a scalable A/B testing framework and a homepage revamp that drove engagement growth across 8+ product verticals." },
      { tag: "ACADEMIC", title: "AIR 1857 (JEE Mains) &amp; AIR 2357 (JEE Advanced)",
        description: "Ranked in the top 1.3% of 1.1 million candidates, 2018." },
      { tag: "COMPETITIVE", title: "Top 2,000 globally on HackerRank",
        description: "AIR 10 and AIR 19 in SICHO across two consecutive years." },
      { tag: "LEADERSHIP", title: "Secretary &amp; Governor, Nakshatra",
        description: "Directed a 60-member team across 10+ events and workshops at IIT Bhubaneswar, reaching 2,000+ students annually." },
      { tag: "LEADERSHIP", title: "PR Coordinator, E-Summit IIT Bhubaneswar",
        description: "Led outreach to 50+ companies, securing sponsorships that grew the event budget 3x." },
    ],
  },

  contact: {
    sectionLabel: "[ 05 ] — CONTACT",
    title: ["LET'S BUILD", "SOMETHING."],
    description: "Open to SDE-2 / senior backend &amp; platform roles. Drop a note — it lands straight in my inbox.",
    formAction: "https://formsubmit.co/karra.hrishikesh@gmail.com",
  },

  footer: {
    tagline: "Built for IMPACT.",
  },
};
