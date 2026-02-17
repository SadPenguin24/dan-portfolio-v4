export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  date: string;
  imageUrl: string;
  type: "freelance" | "fulltime";
  category: "freelance" | "fulltime";
  nda: boolean;
  featured: boolean;
  order: number;
  role?: string;
  teamSize?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: "fulltime" | "freelance";
  current: boolean;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
