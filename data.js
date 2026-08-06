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
    linkedin: "https://www.linkedin.com/in/hrishikeshkarra1213/",
    resumeViewUrl: "https://drive.google.com/file/d/1VmgD2ylhymhzfL0V_FdY5mh5bEYPIE5t/view?usp=sharing",
    resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1VmgD2ylhymhzfL0V_FdY5mh5bEYPIE5t",
  },

  nav: [
    { label: "About", href: "#manifesto" },
    { label: "Skills", href: "#toolkit" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#trajectory" },
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
      { label: "Experience", value: "SDE-2, Super.Money (Flipkart Group)" },
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

  work: {
    sectionLabel: "[ 02 ] — SELECTED WORK",
    heading: ["Systems that", "carry weight."],
    projects: [
      {
        year: "2025", tag: "LLM · FIGMA MCP", tagId: "P-01", viz: "viz-1", reverse: false,
        title: "AI-Powered Figma-to-Code Platform",
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
        year: "2024", tag: "REDIS · CAFFEINE", tagId: "P-02", viz: "viz-2", reverse: true,
        title: "Central Page &amp; URL Service",
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
        year: "2024", tag: "SPRING BOOT", tagId: "P-03", viz: "viz-3", reverse: false,
        title: "Cross-Sell Gateway &amp; A/B Platform",
        description: "High-throughput microservice for in-app cross-selling with a central A/B testing architecture " +
          "spanning 20+ gateways — driving adoption of core financial products and an on-demand credit " +
          "score feature for 6M+ users.",
        stats: [
          { value: "3,000 QPS", label: "SUSTAINED" },
          { value: "210K+", label: "CREDIT CARDS ISSUED" },
          { value: "6M+", label: "USERS ON CREDIT SCORE" },
        ],
        pills: ["Spring Boot", "A/B Testing", "Rate Limiting"],
      },
      {
        year: "2023", tag: "AIRFLOW · KAFKA", tagId: "P-04", viz: "viz-4", reverse: true,
        title: "Cohort Engine &amp; Intent Payments",
        description: "Data platform on Apache Airflow aggregating raw events into segmented user cohorts, plus a " +
          "unified UPI intent-payment flow across Credit Cards, Fixed Deposits and Flights in a single " +
          "checkout — and the Axis Bank lending integration that followed.",
        stats: [
          { value: "1,700 QPS", label: "AT SUB-20MS" },
          { value: "12%", label: "LOWER PAYMENT DROP" },
          { value: "36%", label: "OF LOAN DISBURSALS" },
        ],
        pills: ["Airflow", "Kafka", "UPI"],
      },
    ],
  },

  trajectory: {
    sectionLabel: "[ 03 ] — TRAJECTORY",
    heading: ["Where I've", "shipped."],
    items: [
      {
        date: "FEB 2024 — PRESENT", org: "Super.Money (Flipkart Group)", badge: "10M+ DAU",
        role: "Software Development Engineer 2",
        bullets: [
          "Designed an AI-native Figma-to-code platform, cutting design-to-PR handoff from 4+ days to under 2.",
          "Own the Central Page &amp; URL Service: 4,500+ QPS at sub-10ms P99 via Redis-Caffeine caching.",
          "Built the Cross-Sell Gateway and A/B platform behind 210K+ credit cards and 50K+ Fixed Deposits.",
          "Shipped an on-demand credit score feature reaching 6M+ users.",
        ],
      },
      {
        date: "JUN 2023 — JAN 2024", org: "Flipkart Health Plus", badge: "+100K listings",
        role: "Software Development Engineer 1",
        bullets: [
          "Onboarded 11 new category schemas and 100,000+ product listings.",
          "Integrated a \"Best Price\" API, lifting purchase conversion by an estimated 8–12%.",
          "Authored 15+ RESTful APIs for the Marketplace gateway, lowering order resolution time by 20%.",
        ],
      },
      {
        date: "2018 — 2023", org: "IIT Bhubaneswar", badge: "GPA 8.04/10",
        role: "Dual Degree, B.Tech + M.Tech in Computer Science",
        bullets: [
          "Internships: Flipkart Internet Pvt. Ltd. (2022) · PTCG India Pvt. Ltd. (2021) · HCL Technologies (2021).",
          "AIR 1857 (JEE Mains) &amp; AIR 2357 (JEE Advanced), 2018 — top 1.3% of 1.1M candidates.",
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
    tagline: "Built with plain HTML/CSS/JS.",
  },
};
