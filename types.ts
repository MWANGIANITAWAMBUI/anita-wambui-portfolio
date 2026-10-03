export type Category = 'professional' | 'client' | 'personal';
export type VisualKind = 'phone' | 'browser' | 'dashboard' | 'game' | 'platform';
export type StatusTone = 'live' | 'prep' | 'public';

export interface ProjectStatus {
  label: string;
  tone: StatusTone;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  impact: string;
  /** Optional ordered stages, e.g. a release journey */
  timeline?: string[];
}

export interface Project {
  id: string;
  title: string;
  /** One-line summary shown on the card */
  tagline: string;
  category: Category;
  /** e.g. "Mobile application · Mobility" */
  kindLabel: string;
  description: string;
  /** How you were involved. Keep collaborative wording for team projects. */
  role: string;
  contributions: string[];
  technologies: string[];
  status: ProjectStatus;
  liveUrl?: string;
  liveLabel?: string;
  /** Only set when a real public repository exists */
  repoUrl?: string;
  repoLabel?: string;
  /** Shown instead of a GitHub button when the code is private */
  sourceNote: string;
  featured?: boolean;
  /** Drawn in CSS when no screenshot is provided */
  visual: VisualKind;
  /** Optional screenshot in /public/projects/. Only use images you are allowed to show. */
  image?: string;
  imageAlt?: string;
  caseStudy: CaseStudy;
}

export interface ProjectGroup {
  id: Category;
  filterLabel: string;
  title: string;
  intro: string;
  note?: string;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  address: string;
  phoneNo: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export interface TechCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}
