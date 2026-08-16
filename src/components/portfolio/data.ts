import type { Project, SkillGroup, StackGroup, TimelineItem } from "./types";

export function projectSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const projects: Project[] = [
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
      "[Problem] → [Approach] → [Result — one line each describing what this project solved, how, and the outcome.]",
    image: "/assets/images/AGIS-MAIN.png",
  },
  {
    title: "Call Center Intelligence",
    year: "2025",
    tags: ["NLP", "Speech Analytics"],
    blurb:
      "[Problem] → [Approach] → [Result — describe the call center use case, the ML approach, and measurable outcome.]",
  },
  {
    title: "SQL Intelligence",
    year: "2025",
    tags: ["NLP", "Text-to-SQL"],
    blurb:
      "[Problem] → [Approach] → [Result — describe the natural-language-to-SQL system and its impact.]",
    image: "/assets/images/Text-to-SQL.png",
  },
  {
    title: "LLM Distillation",
    year: "2025",
    tags: ["Model Optimization", "LLM"],
    blurb:
      "[Problem] → [Approach] → [Result — describe the distillation technique and efficiency gains.]",
    image: "/assets/images/llm-distillation.png",
  },
  {
    title: "CORIMS",
    year: "2024",
    tags: ["Data Systems"],
    blurb: "[Problem] → [Approach] → [Result — describe what CORIMS does and who it serves.]",
    image: "/assets/images/corism.jpg",
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
