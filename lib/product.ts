export interface Product {
  id: string;
  title: string;
  subtitle: string;
  overview?: {
    description: string;
    usage: string;
    environment: string;
  };
  imageUrl: string;
  context?: {
    background: string;
    scale: string;
    constraints: string[];
  };
  problem?: {
    description: string;
    painPoints: string[];
  };
  architecture?: {
    pattern: string;
    highLevelFlow: string[];
    components: string[];
    failureHandling: string[];
  };
  llmStrategy?: {
    providers: string[];
    design: string;
    features: string[];
  };
  pipelineDesign?: {
    pattern: string;
    input: string[];
    stages: {
      stage: string;
      description: string;
    }[];
    dataFlow: string;
  };
  asyncProcessing?: {
    queueSystem: string;
    features: string[];
    failureHandling: string[];
  };
  systemFlow?: {
    pattern: string;
    input: string[];
    dailyScheduling: {
      executionTime: string;
      logic: string[];
    };
    distribution: {
      method: string;
      tracking: string[];
      guarantees: string[];
      nonGuarantees: string[];
    };
  };
  channelManagement?: {
    features: string[];
    apis: string;
  };
  toolingAndAutomation?: {
    crawling: string;
    automation: string[];
    monitoringAndReporting: string[];
  };
  backendResponsibilities?: string[];
  performance?: {
    throughput:
      | string
      | {
          bestCase?: string;
          worstCase?: string;
        };
    processingModel: string;
  };
  impact?: {
    automation?: string;
    scale?: string;
    costOptimization?: {
      inputTokenReduction: string;
      outputTokenReduction: string;
    };
    operationalBenefits: string[];
  };
  role?: {
    responsibilities: string[];
    position: string;
  };
  techStack?: {
    frontend?: string[];
    backend?: string[];
    messaging?: string[];
    database?: string[];
    externalServices?: string[];
    queue?: string[];
    aiServices?: string[];
    automation?: string[];
    integrations?: string[];
  };
  challengesAndTradeoffs?: string[];
  category: string;
  version?: string;
  status?: string;
}

// Sample data
export const productsData: Product[] = [
  {
    id: "1",
    title: "AI Metadata Generation Backend Platform",
    subtitle:
      "Asynchronous LLM-based metadata generation system for short-form video content",
    overview: {
      description:
        "An internal backend platform responsible for generating and managing metadata (titles and descriptions) for short-form video content as part of a large-scale automation pipeline.",
      usage:
        "Used by multiple internal automation services as a post-processing step after video creation.",
      environment:
        "Production system handling high-volume asynchronous workloads",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Metadata for video content was previously created manually by editors using external AI tools.",
      scale:
        "Thousands of videos generated daily, requiring a scalable and reliable metadata generation solution.",
      constraints: [
        "External LLM APIs with rate limits and unstable response formats",
        "High throughput requirements",
        "Cost sensitivity at scale",
      ],
    },
    problem: {
      description:
        "Manual metadata generation became infeasible as content volume increased.",
      painPoints: [
        "High manual effort and long processing time",
        "Inconsistent metadata quality across editors",
        "Synchronous API-based approaches failing under scale and rate limits",
      ],
    },
    architecture: {
      pattern:
        "Asynchronous batch processing with message-driven orchestration",
      highLevelFlow: [
        "Scheduled job queries videos requiring metadata generation",
        "Video data is published to Kafka topics",
        "Batch workers consume messages every 3 minutes to control throughput",
        "Metadata is generated via LLM providers and persisted",
        "Downstream services retrieve metadata and track usage state",
      ],
      components: [
        "Spring Boot batch workers",
        "Kafka topics for main processing and failure handling",
        "LLM provider abstraction layer",
        "PostgreSQL for metadata storage",
        "Redis for temporary processing state (if applicable)",
      ],
      failureHandling: [
        "Retry with controlled backoff",
        "Automatic fallback to alternate LLM providers",
        "Isolation of failed messages via dedicated Kafka topics",
      ],
    },
    llmStrategy: {
      providers: ["Gemini", "OpenAI", "Qwen", "DeepSeek"],
      design:
        "Unified abstraction layer to decouple business logic from specific LLM providers.",
      features: [
        "Provider prioritization via configuration",
        "API key rotation to mitigate rate limits",
        "Automatic fallback on timeout or invalid responses",
        "Strict response format validation",
      ],
    },
    backendResponsibilities: [
      "Job orchestration and scheduling",
      "Batch throughput control",
      "Retry and failure isolation",
      "Prompt optimization for cost reduction",
      "Usage and consumption tracking",
    ],
    performance: {
      throughput: {
        bestCase: "≈25,000 metadata records/day",
        worstCase: "≈5,000 metadata records/day",
      },
      processingModel:
        "Batch processing every 3 minutes to balance latency and API stability",
    },
    impact: {
      automation: "Fully automated metadata generation at scale",
      costOptimization: {
        inputTokenReduction: "≈80%",
        outputTokenReduction: "≈20%",
      },
      operationalBenefits: [
        "Significant reduction in manual workload",
        "Consistent metadata quality",
        "Improved system reliability under peak load",
      ],
    },
    role: {
      responsibilities: [
        "Designed overall system architecture",
        "Implemented Kafka-based batch processing workflow",
        "Built LLM abstraction and fallback mechanisms",
        "Optimized prompts and batching strategy",
        "Ensured reliability and observability in production",
      ],
      position: "Backend Developer",
    },
    techStack: {
      backend: ["Java", "Spring Boot"],
      messaging: ["Kafka"],
      database: ["PostgreSQL"],
      externalServices: ["Multiple LLM providers"],
    },
    challengesAndTradeoffs: [
      "Balancing throughput with external API rate limits",
      "Choosing batch processing over synchronous requests for stability",
      "Designing idempotent processing to safely retry failed jobs",
      "Managing cost while maintaining acceptable metadata quality",
    ],
    category: "Internal Backend Platform",
    version: "Production",
    status: "ACTIVE",
  },
  {
    id: "2",
    title: "AI Video Generation Backend Pipeline",
    subtitle:
      "Asynchronous job-based pipeline for automated short-form video production",
    overview: {
      description:
        "An internal backend system responsible for fully automating the generation of short-form videos, from content creation to final video rendering, using AI-driven services.",
      usage:
        "Used by the internal content team to produce videos for multiple short-form platforms.",
      environment:
        "Production system serving as the core video generation pipeline.",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Video production was previously handled through a fragmented manual workflow involving multiple tools and manual coordination.",
      scale:
        "High-volume video production with long-running AI tasks and external service dependencies.",
      constraints: [
        "Long-running and asynchronous video generation tasks",
        "Unreliable external AI services",
        "Need for safe retries and observability",
      ],
    },
    problem: {
      description:
        "Manual video creation became infeasible as content volume increased.",
      painPoints: [
        "Multiple manual steps across content writing, TTS, subtitles, and scene selection",
        "High error rate and lack of observability",
        "Synchronous request-based processing unsuitable for long-running tasks",
      ],
    },
    pipelineDesign: {
      pattern: "Asynchronous, multi-stage job pipeline",
      input: [
        "Video topic",
        "Video configuration options (text length, voice type, subtitle style)",
      ],
      stages: [
        {
          stage: "Content Generation",
          description:
            "Generate structured video content from the input topic.",
        },
        {
          stage: "Voice-over & Subtitles",
          description:
            "Convert generated content into speech and extract subtitles.",
        },
        {
          stage: "Scene Selection",
          description:
            "Extract keywords from content to select appropriate visual scenes.",
        },
        {
          stage: "Video Rendering",
          description:
            "Assemble audio, subtitles, and visuals into a final video.",
        },
      ],
      dataFlow:
        "The output of each stage is persisted and used as the input for the next stage.",
    },
    asyncProcessing: {
      queueSystem: "BullMQ",
      features: [
        "Queue-based orchestration of long-running jobs",
        "Automatic retries with configurable retry count (default: 3)",
        "Job state tracking across pipeline stages",
      ],
      failureHandling: [
        "Persisted pipeline state in database",
        "Safe reprocessing using stored input and intermediate results",
        "Manual retry via web interface after retry exhaustion",
      ],
    },
    backendResponsibilities: [
      "Job orchestration and pipeline state management",
      "Ensuring idempotent execution to prevent duplicate video generation",
      "Providing APIs to trigger, monitor, and retry video pipelines",
      "Maintaining and optimizing backend services for reliability",
    ],
    performance: {
      throughput: "1,000+ short videos per day",
      processingModel:
        "Asynchronous job execution with persistent pipeline state",
    },
    impact: {
      automation: "End-to-end automation of short-form video production",
      operationalBenefits: [
        "Significant reduction in manual effort for the content team",
        "Improved observability and debuggability of video generation failures",
        "Safer recovery from partial pipeline failures",
      ],
    },
    role: {
      responsibilities: [
        "Designed the overall asynchronous pipeline architecture",
        "Implemented BullMQ-based job orchestration",
        "Built idempotent processing logic across pipeline stages",
        "Designed retry and failure recovery mechanisms",
        "Developed APIs for pipeline control and monitoring",
      ],
      position: "Backend Developer",
    },
    techStack: {
      backend: ["Node.js", "NestJS"],
      queue: ["BullMQ"],
      database: ["PostgreSQL"],
      aiServices: [
        "Content generation",
        "Text-to-speech",
        "Subtitle generation",
      ],
    },
    challengesAndTradeoffs: [
      "Managing long-running jobs without blocking request threads",
      "Designing idempotent pipelines to support safe retries",
      "Handling partial failures across multiple asynchronous stages",
      "Balancing system throughput with external AI service stability",
    ],
    category: "Internal Backend Pipeline",
    version: "Production",
    status: "ACTIVE",
  },
  {
    id: "3",
    title: "Video Distribution & Channel Coordination Backend",
    subtitle:
      "Centralized scheduling and coordination service for large-scale video distribution",
    overview: {
      description:
        "An internal backend service responsible for coordinating and scheduling video distribution across a large-scale multi-channel ecosystem.",
      usage:
        "Acts as a central data provider for downstream distribution systems to retrieve videos scheduled for posting.",
      environment: "Production system operating at high daily scale.",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "Video distribution was previously handled manually by operators across multiple platforms and channels.",
      scale:
        "Nearly 20,000 channels coordinated daily with strict distribution and duplication constraints.",
      constraints: [
        "High channel count and daily scheduling requirements",
        "Strict no-duplicate distribution rules",
        "Need for operational visibility and reporting",
      ],
    },
    problem: {
      description:
        "Manual video posting and channel coordination became infeasible as the channel ecosystem scaled.",
      painPoints: [
        "Manual selection and posting of videos per channel",
        "Lack of control over per-channel daily video limits",
        "Duplicate video distribution across posting cycles",
        "Poor visibility into channel states and operational health",
      ],
    },
    systemFlow: {
      pattern: "Scheduled coordination and data provisioning service",
      input: [
        "Daily schedule configurations",
        "Channel states and distribution rules",
      ],
      dailyScheduling: {
        executionTime: "00:00 local time (17:00 UTC)",
        logic: [
          "Calculate daily video allocation per channel",
          "Enforce channel-specific distribution limits",
          "Ensure no duplicate video assignment across cycles",
        ],
      },
      distribution: {
        method: "Pull-based distribution via internal APIs",
        tracking: [
          "Channel identifier",
          "Access timestamp",
          "Retrieval success status",
        ],
        guarantees: ["Each video is distributed at most once per channel"],
        nonGuarantees: [
          "Does not enforce successful posting to external platforms",
        ],
      },
    },
    channelManagement: {
      features: [
        "Channel state management (auto/manual)",
        "Active and inactive channel control",
        "Operational metadata for channel eligibility",
      ],
      apis: "REST APIs for managing channel configuration and states",
    },
    toolingAndAutomation: {
      crawling:
        "Crawler tools for ingesting short-form videos from external platforms into internal storage",
      automation: [
        "Bulk data import workflows",
        "Channel management automation using Airflow",
      ],
      monitoringAndReporting: [
        "Hourly and daily distribution reports",
        "Operational metrics and alerts sent to Lark",
      ],
    },
    role: {
      responsibilities: [
        "Maintained and extended an existing production system",
        "Owned operational reporting and notification modules",
        "Developed automation tools for channel and data management",
        "Improved TikTok crawling reliability by migrating to a more stable library",
      ],
      position: "Backend Developer",
    },
    impact: {
      scale:
        "Coordinated automated video distribution for approximately 20,000 channels per day",
      operationalBenefits: [
        "Improved reliability of daily distribution scheduling",
        "Better operational visibility through reporting and alerts",
        "Significant reduction in manual channel and video management effort",
      ],
    },
    techStack: {
      backend: ["NestJS"],
      database: ["PostgreSQL"],
      automation: ["Airflow"],
      integrations: ["Lark API", "Video crawling libraries"],
    },
    challengesAndTradeoffs: [
      "Designing allocation logic that scales across tens of thousands of channels",
      "Ensuring strict no-duplicate guarantees without blocking downstream systems",
      "Separating coordination responsibility from actual posting execution",
      "Balancing operational flexibility with automation safety",
    ],
    category: "Internal Backend Coordination System",
    version: "Production",
    status: "ACTIVE",
  },
  {
    id: "4",
    title: "Starfish Language Center Website",
    subtitle: "Public-facing website for an English language training center",
    overview: {
      description:
        "A public website developed for an English language center to present course information, schedules, and organizational details with a strong focus on clarity, responsiveness, and performance.",
      usage:
        "Used by prospective students and parents to explore available courses and learn about the language center.",
      environment:
        "Production public website with real users and SEO requirements",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "The language center required a modern and professional website to improve online presence and provide clear information for potential learners.",
      scale:
        "Small to medium traffic public website with a focus on accessibility and fast page load.",
      constraints: [
        "SEO optimization for search visibility",
        "Responsive design across devices",
        "Simple content structure for non-technical maintenance",
      ],
    },
    problem: {
      description:
        "The center lacked a centralized and professional online platform to communicate course offerings and core information.",
      painPoints: [
        "Outdated or unclear presentation of courses",
        "Poor mobile experience on previous solutions",
        "Limited visibility on search engines",
      ],
    },
    architecture: {
      pattern: "Static-first website with client-side enhancements",
      highLevelFlow: [
        "User accesses public pages",
        "Static content rendered with modern frontend framework",
        "Optional data fetched for dynamic sections",
      ],
      components: [
        "Frontend presentation layer",
        "Styling and layout system",
        "Content structure optimized for SEO",
      ],
      failureHandling: [
        "Graceful rendering with static fallback",
        "Minimal runtime dependencies to reduce failure points",
      ],
    },
    backendResponsibilities: [
      "Basic data fetching and integration",
      "Ensuring stable deployment and hosting",
    ],
    performance: {
      throughput: "Optimized for fast page load and smooth navigation",
      processingModel:
        "Static generation combined with lightweight client-side rendering",
    },
    impact: {
      operationalBenefits: [
        "Clear and professional online presence",
        "Improved mobile usability",
        "Better search engine visibility",
      ],
    },
    role: {
      responsibilities: [
        "Designed overall site structure and layout",
        "Implemented responsive UI",
        "Optimized performance and SEO",
        "Handled deployment and production readiness",
      ],
      position: "Frontend / Full-stack Developer",
    },
    techStack: {
      frontend: ["Next.js", "TailwindCSS"],
      backend: ["Supabase"],
    },
    challengesAndTradeoffs: [
      "Balancing clean UI design with SEO requirements",
      "Keeping architecture simple while ensuring scalability",
      "Optimizing performance without over-engineering",
    ],
    category: "Public Website",
    version: "v1.0",
    status: "ACTIVE",
  },
  {
    id: "5",
    title: "Recruitment Platform Web Application",
    subtitle: "Web platform connecting recruiters and job applicants",
    overview: {
      description:
        "A large-scale recruitment web application designed to connect recruiters with applicants, focusing on responsive UI, performance optimization, and cross-browser compatibility.",
      usage:
        "Used by recruiters to post jobs and manage candidates, and by applicants to browse and apply for positions.",
      environment:
        "Production internal web application developed by a large team",
    },
    imageUrl: "/projects/default.png",
    context: {
      background:
        "The platform was developed as part of a larger recruitment ecosystem with multiple stakeholders and complex UI requirements.",
      scale:
        "Large-scale application with many screens, user flows, and frequent UI updates.",
      constraints: [
        "Strict design specifications",
        "Cross-browser and cross-device compatibility",
        "Performance requirements for complex UI",
      ],
    },
    problem: {
      description:
        "Building a consistent and performant user interface across browsers and devices in a large collaborative codebase.",
      painPoints: [
        "UI inconsistencies across browsers",
        "Performance issues on complex pages",
        "Coordination challenges in a large development team",
      ],
    },
    architecture: {
      pattern: "Component-based frontend architecture",
      highLevelFlow: [
        "User interaction through responsive UI",
        "Client-side state management",
        "Data rendered based on API responses",
      ],
      components: [
        "Reusable UI component library",
        "Layout and design system",
        "Page-level UI composition",
      ],
      failureHandling: [
        "Defensive UI rendering",
        "Graceful degradation on unsupported browsers",
      ],
    },
    backendResponsibilities: [
      "UI implementation based on backend contracts",
      "Performance optimization on the client side",
    ],
    performance: {
      throughput: "Optimized for responsive user interactions",
      processingModel:
        "Client-side rendering with performance-focused component design",
    },
    impact: {
      operationalBenefits: [
        "Consistent UI across devices and browsers",
        "Improved user experience on complex workflows",
        "Better maintainability through reusable components",
      ],
    },
    role: {
      responsibilities: [
        "Implemented responsive UI based on design specifications",
        "Optimized frontend performance",
        "Ensured cross-browser compatibility",
        "Collaborated within a large development team",
      ],
      position: "Frontend Developer",
    },
    techStack: {
      frontend: ["Next.js", "TailwindCSS", "Shadcn UI"],
    },
    challengesAndTradeoffs: [
      "Ensuring UI consistency across multiple browsers",
      "Optimizing performance without sacrificing flexibility",
      "Working within a large and evolving codebase",
    ],
    category: "Web Application",
    version: "Internal",
    status: "INACTIVE",
  },
];
