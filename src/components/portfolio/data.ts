import type { Project, SkillGroup, StackGroup, TimelineItem } from "./types";

export function projectSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const projects: Project[] = [
  {
    title: 'Hermes Virtual Office',
    description:
      'A live 3D mission-control office for a crew of Hermes AI agents. Each agent is a character whose status follows the Kanban board in real time; clickable boards, TVs, and server racks open review, dashboard, and config panels with guarded actions. Agents can drive the office themselves over MCP.',
    tags: ['Next.js', 'Three.js', 'TypeScript', 'MCP'],
    image: '/assets/images/hermes-office.jpg',
    link: 'http://43.173.6.214:3000/#/office',
    year: '2026',
    categories: ['AI / ML', 'Full Stack', 'Web App'],
  },
  {
    title: "3-Node DGX Spark GB10 Cluster",
    year: "2026",
    tags: ["Infrastructure", "LLM Inference"],
    blurb:
      "Deployed and tuned a 3-node Blackwell GB10 cluster with ConnectX-7 200GbE for VLM inference. Ran comparative tradeoff analysis across DP=3, TP, and PP configurations for 30–70B models, and debugged early-driver CUDA/NCCL issues on aarch64.",
    image: "/assets/images/DGX-spark-cluster.png",
  },
  {
    title: "Advanced Generative Intelligent System (AGIS)",
    year: "2025",
    tags: ["Generative AI", "LLM Orchestration"],
    blurb:
      "Built an AI knowledge platform for banking & insurance that ingests BRDs, FSDs, and regulatory docs into an agentic RAG repository — powering context-aware chat, automated test-case generation, and impact analysis. Cut manual QA/documentation effort and shortened SDLC time-to-market while tightening compliance.",
    overview:
      "AGIS (Advanced Generative Intelligent System) is a knowledge-management platform for banking & insurance built on ML, NLP, Agentic AI, and multi-modal capabilities. It centralizes fragmented enterprise knowledge — BRDs, FSDs, policies, regulatory guidelines — into a dynamic, continually-refined repository integrated with JIRA, Confluence, ALM QC, and internal data systems.\n\n" +
        "Core capabilities: \n\n" +
        "\n(1) Intelligent chat — context-aware chatbot retrieves information from the knowledge base via NLP. \n" +
        "\n(2) Automated test generation — AI-led test cases improve QA coverage and defect detection while cutting time-to-market.\n" +
        "\n(3) Impact analysis — automated risk assessment for core-banking, payment, and regulatory updates enables safer deployments. \n" +
        "\n(4) Multi-dimensional analytics — actionable insights per organization/domain/program/project. \n" +
        "\n(5) Role-based access + governance — enterprise-grade security across all data flows." +
        "\n\nOutcome: \n" +
        "faster requirements-to-deployment cycles, reduced redundant effort, stronger regulatory compliance, and real-time operational monitoring that supports fraud detection and continuous improvement.",
    stack: [
      "Agentic AI",
      "RAG",
      "NLP",
      "Vision Language Models",
      "JIRA",
      "Confluence",
      "ALM QC",
      "PostgreSQL",
      "ChromaDB",
    ],
    links: {
      demo: "https://fuxion.ai",
    },
    image: "/assets/images/AGIS-MAIN.png",
  },
  {
    title: "Call Center Intelligence",
    year: "2025",
    tags: ["NLP", "Speech Analytics"],
    blurb:
      "Transforming customer service from resolving issues into driving new sales while fixing messy request categories. Using a smart framework that combines customer data and artificial intelligence in three steps, call processing, request grouping, and staff scoring are now fully automated in just 5 seconds, neatly organizing 80% of all customer interactions.",
    overview: "This project aims to modernize Customer Care Management (CCM) by leveraging cloud infrastructure and Generative AI to automate call processing, analyze customer interactions, and turn support operations into a sales-driving channel\n\n" +
        "Problem & Strategic Goal\n\n" +
        "\nTransform Customer Care Management (CCM) from a traditional post-sales support line into an active sales channel, while resolving complex KIP structures and managing Auto-KIP classification challenges.\n" +
        "\nApproach: Implement an AI & Analytics framework integrating SCV data, network signals, and GenAI across three implementation phases (Phase 1: CX Dashboard & Chatbot, Phase 2: Auto-KIP & Summarization, Phase 3: Live Call Analysis & Smart IVR)." +
        "\nSolutions & Technical Tools: \n" +
        "\n - Audio Transcription: Process customer-agent conversation audio using AWS Lambda, Amazon SNS, and OpenAI Whisper (Post Voice2Text).  \n" +
        "\n - Sentiment Analysis & Summarization: Leverage GenAI and NLP to calculate customer satisfaction, analyze sentiment, and automatically summarize interactions.  \n" +
        "\n - Classification & Evaluation: Execute multi-level predictive Auto-KIP classification and evaluate agent performance scores. \n" +
        "\n\n Outcomes: Completed the entire end-to-end process (transcription, summarization, sentiment analysis, KIP classification, and agent evaluation) in ~5.2 seconds, covering 80% of total customer interactions",
    stack: [
      "Dify",
      "AWS Lambda",
      "AWS Step function",
      "OpenAI Whisper",
      "AWS S3",
      "AWS Transcribe",
    ],
    image: "/assets/images/CCM.png",
    links: {
      code: "https://github.com/MuharramSyah/lambda-openai-transcribe"
    }
  },
  {
    title: "SQL Intelligence",
    year: "2025",
    tags: ["NLP", "Text-to-SQL"],
    blurb:
      "SQL Intelligence is an open-source Python framework that translates natural language into accurate SQL using RAG. By pairing your database schemas, documentation, and reference queries with custom LLMs, SQL Intelligence lets non-technical users query complex databases effortlessly while keeping sensitive data secure. Boost data accuracy, slash analyst ticket backlogs, and automate insights seamlessly.",
    image: "/assets/images/Text-to-SQL.png",
    overview: "SQL Intelligence is an open-source, AI-driven framework that leverages Retrieval-Augmented Generation (RAG) to convert plain-text questions into syntactically precise SQL queries. It bridges the gap between natural human language and complex relational database schemas.\n\n" +
        "Core Capabilities\n\n" +
        "\n - RAG-Driven Text-to-SQL Generation: Combines database DDL (schemas), business documentation, and golden SQL example pairs in a vector database. It feeds relevant metadata into the LLM context to construct accurate queries.  \n" +
        "\n - Self-Learning Capability: Automatically trains on successful user queries and corrected edge cases, progressively improving accuracy for complex, company-specific dataset queries over time.  \n" +
        "\n - Pluggable Architecture (BYO Model & DB): Decouples the reasoning engine from specific platforms. Works natively with various database engines (PostgreSQL, MySQL, Snowflake, BigQuery, SQLite) and LLM backends (OpenAI, Anthropic, Gemini, Ollama).  \n" +
        "\n - Dual-Output & Automatic Visualization: Executes generated SQL queries and presents outputs as both raw tabular data and interactive Plotly visual charts optimized for non-technical consumption.  \n" +
        "\n - Enterprise Security & Privacy: Keeps actual database content isolated from the external LLM—only schema metadata and reference prompts are passed, enabling safe local or cloud deployment.  \n" +
        "\nKey Outcomes: \n\n" +
        "\n - 80%+ Reduction in Data Team Backlogs: Eliminates repetitive `pull this data` support tickets, allowing data engineers and analysts to focus on high-impact strategic projects.  \n" +
        "\n - Self-Service Business Intelligence: Enables non-technical domain experts (marketing, sales, finance) to query complex transactional and analytical databases in real time using everyday language.\n" +
        "\n - Higher Query Precision: Achieves significantly higher accuracy than standard zero-shot LLMs on enterprise-grade, multi-table database architectures.\n" +
        "\n - Lower Token Usage & Cost: Dual-output filtering prevents dumping massive database payloads into the LLM context, reducing token overhead while maintaining rapid query execution times.",
    stack: [
      "Dify",
      "Vanna.ai",
      "Chroma DB",
      "OpenAI GPT 4.0",
        "Gemini Text Embedding"
    ],
    links: {
      code: "https://github.com/MuharramSyah/text2sql-vanna.ai"
    }
  },
  {
    title: "LLM Distillation",
    year: "2025",
    tags: ["Model Optimization", "LLM"],
    blurb:
      "This project transfers the high-level reasoning of massive Teacher Models into compact, cost-efficient models like `Qwen 2.5 14B Instruct`. Using Group Relative Policy Optimization (GRPO) via HF Transformers, the Student Model learns autonomous `chain-of-thought` (<think>) processing via reward functions. This matches teacher accuracy on complex logic while cutting training VRAM by 50% and slashing latency.",
    image: "/assets/images/llm-distillation.png",
    overview: "This project bridges the gap between massive proprietary models and compact open-weight models. By migrating advanced reasoning capabilities from a large Teacher Model to a highly efficient Student Model (e.g., Qwen2.5 14B), we deliver deep-thinking AI capabilities at a fraction of the operational cost. \n\n Core Capabilities \n" +
        "\nAutonomous Chain-of-Thought: Empowers the small model to generate structural, step-by-step logical reasoning inside <think> tags before rendering final answers. \n" +
        "\nCritic-Free Reinforcement Learning: Employs Group Relative Policy Optimization (GRPO) via HF Transformers to evaluate group outputs relatively, eliminating the memory-heavy Critic model.\n" +
        "\nRule-Based Reward Alignment: Uses strict programmatic functions (format checking and deterministic code/math verification) to steer the model’s logical behavior. \n\n" +
        "\nExpected Outcomes\n" +
        "\nHigh-Accuracy Sub-Model: Achieves reasoning proficiency on domain-specific logic tasks that closely matches the performance of the giant Teacher Model.50% \n" +
        "\nVRAM Savings: Lowers training hardware barriers, enabling efficient multi-turn reinforcement learning on standard enterprise or mid-tier consumer GPUs via LoRA/QLoRA.\n" +
        "\nProduction-Ready Latency: Drastically slashes time-to-first-token and overall inference latency, providing the speed required for real-time applications.",
    stack: [
      "Unsloth",
      "Deepseek R1",
      "Qwen2.5 3B",
      "Distillation",
      "AWS",
      "GRPO",
      "Transformers",
      "Reasoning Model"
    ],
    links:{
      code: "https://colab.research.google.com/drive/16m7HeP8I3ZHFJ3qvBwx8XLs8heqGVFX_?usp=sharing",
      paper: "https://arxiv.org/abs/2605.08873"
    }
  },
  {
    title: "Composite Repair Integrity Management System (CoRIMS)",
    year: "2024",
    tags: ["Data Systems", "Computer Vision"],
    blurb: "Developed a digital pipeline integrity solution that integrates machine learning and advanced image analytics into a specialized risk assessment framework — automating non-metallic defect evaluation and structural health monitoring. Reduced human error in corrosion analysis and optimized asset lifecycles while tightening groupwide safety compliance.",
    overview:"CoRIMS (Composite Repair Integrity Management System) is an enterprise asset-integrity platform for subsea and offshore pipelines built on Machine Learning, Computer Vision (YOLOv8), IoT, and cloud-based predictive analytics. It centralizes groupwide structural data, inspection logs, and pipeline history into a dynamic, continually-refined digital repository (CoRIMS-DS) integrated with field sensors, ROV footage, and material tracking systems.\n\n" +
        "Core capabilities:\n" +
        "\n(1) Intelligent Vision Analytics: Context-aware computer vision automatically detects, categorizes, and tracks non-metallic or composite repair defects (such as voids and delamination) from visual and ultrasonic inspection logs.\n" +
        "\n(2) Risk-Based Inspection (RBI-C): Proprietary assessment methodology specifically engineered for composite overwraps that replaces standard manual checks with dynamic, real-time risk grading.\n" +
        "\n(3) Prognostic Lifetime Tracker: AI-driven predictive health-scoring models simulate material degradation to calculate precise remaining life, enabling proactive scheduling of preventative maintenance.\n" +
        "\n(4) Cloud Architecture Optimization: Built on an AWS SageMaker backend configured for ultra-efficient real-time inference, cutting compute overheads while scaling groupwide.\n" +
        "\n(5) Governance & Vendor Gateway: Enterprise-grade security protocols combined with a unified portal to systematically test, audit, and authorize new composite repair products against rigid industrial compliance standards.\n\n" +
        "\nOutcome: Accelerated pipeline inspection cycles, elimination of human error in defect detection, 81.6% reduction in cloud operational costs, and the mitigation of costly unplanned shutdowns through high-accuracy (94%–99%) structural failure predictions.",
    image: "/assets/images/corism.jpg",
    stack: [
      "Object Detection",
      "YOLOv8",
      "LabelImg",
      "DJI",
      "AWS",
      "AWS SageMaker",
    ],
    links:{
      demo: "https://corimsds.petronas.com"
    }
  },
  {
    title: "Traffic Anomaly Detection",
    year: "2022",
    tags: ["Computer Vision", "Anomaly Detection"],
    blurb:
      "[Problem] → [Approach] → [Result — describe the detection pipeline and deployment context.]",
    image: "/assets/images/anomaly-detection.png",
  },
  {
    title: "Forest Fire Detection",
    year: "2021",
    tags: ["Computer Vision", "Early Warning"],
    blurb:
      "[Problem] → [Approach] → [Result — describe the detection system and its real-world use.]",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Sep 2025 – Present",
    role: "Senior Machine Learning Engineer",
    company: "AppFuxion Consulting Indonesia",
    location: "Jakarta, Indonesia",
    summary:
      "Developed a high-performance Document Extraction engine powered by Vision Language Models (VLM) to transform unstructured visual data into a structured Knowledge Base for the AGIS Platform.",
  },
  {
    period: "Aug 2024 – Jan 2025",
    role: "Machine Learning Engineer",
    company: "Petronas Digital Sdn Bhd",
    location: "Kuala Lumpur, Malaysia",
    summary:
      "Spearheaded the optimization of AWS SageMaker systems for real-time inference, achieving an 81.6% reduction in operational and cloud costs.",
  },
  {
    period: "Feb 2023 – May 2024",
    role: "Engineering Lead",
    company: "Esri Indonesia",
    location: "Jakarta, Indonesia",
    summary:
      "Directed a team of 6 engineers, resolving technical challenges and improving team efficiency; architected microservices integrated with secure, high-performance internal API gateways.",
  },
  {
    period: "May 2020 – Feb 2023",
    role: "Data Scientist",
    company: "Esri Indonesia",
    location: "Jakarta, Indonesia",
    summary:
      "Built a real-time traffic anomaly detection system using YOLOv4 and NVIDIA DeepStream, enabling faster incident response and improved public safety outcomes.",
  },
  {
    period: "Mar 2018 – Mar 2019",
    role: "AI Scientist (Intern)",
    company: "Telkom Indonesia",
    location: "Jakarta, Indonesia",
    summary:
      "Deployed object detection with YOLO across 16 CCTV systems in Rest Area Management to improve traffic flow on highways in Indonesia.",
  },
];

export const stackGroups: StackGroup[] = [
  {
    label: "Modeling & Research",
    items:
      "PyTorch · Hugging Face Transformers · Qwen3-VL / Qwen3.6 · Deformable-DETR · all-MiniLM-l6-v2 · Qwen-AgentWorld · Fine-tuning, quantization (FP8/NVFP4), Distillation",
  },
  {
    label: "Serving & Orchestration",
    items: "vLLM · FastAPI · Celery · Redis · Dify / Graphon workflow engines",
  },
  {
    label: "Data & Retrieval",
    items: "PostgreSQL · ChromaDB · Memgraph · MinIO / RustFS · Kafka · PyMuPDF",
  },
  {
    label: "Infrastructure",
    items:
      "NVIDIA GB10 / DGX Spark (Blackwell, aarch64) · Multi-GPU H200 / A40 · Docker / Podman · CDI GPU passthrough · ConnectX-7 200GbE · NCCL / distributed inference",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Machine Learning",
    items: ["Deep Learning", "LLMs & Generative AI", "Model Distillation", "MLOps"],
  },
  { label: "NLP & Data", items: ["NLP", "Text-to-SQL", "Data Pipelines", "SQL"] },
  { label: "Computer Vision", items: ["Object Detection", "Anomaly Detection", "Video Analytics"] },
  { label: "Tools", items: ["Python", "PyTorch / TensorFlow", "Cloud Deployment", "Docker"] },
];

export function findProjectBySlug(slug: string): Project | null {
  return projects.find((p) => projectSlug(p.title) === slug) ?? null;
}

export const MARQUEE_KEYWORDS = [
  "Generative AI",
  "Vision Language Models",
  "vLLM",
  "PyTorch",
  "Qwen3-VL",
  "DGX Spark",
  "Distillation",
  "Text-to-SQL",
  "NCCL",
  "Kafka",
  "Object Detection",
];
