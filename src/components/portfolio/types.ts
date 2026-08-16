export type ProjectLinks = {
  code?: string;
  demo?: string;
  paper?: string;
};

export type Project = {
  title: string;
  year: string;
  tags: string[];
  blurb: string;
  overview?: string;
  stack?: string[];
  links?: ProjectLinks;
  image?: string;
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
};

export type StackGroup = { label: string; items: string };
export type SkillGroup = { label: string; items: string[] };

export const SECTION_IDS = ["about", "work", "experience", "skills", "contact"] as const;
export type SectionId = (typeof SECTION_IDS)[number];
