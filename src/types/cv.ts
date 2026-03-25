export interface UserProfile {
  name: string;
  title: string;
  avatarUrl: string;
  summary: string;
  cofounding: {
    label: string;
    url: string;
    description: string;
  };
}

export interface ContactLink {
  href: string;
  icon: string;
  text: string;
  isLa?: boolean;
}

export interface Contact {
  links: ContactLink[];
  phones: string[];
}

export interface SocialLink {
  href: string;
  icon: string;
  text: string;
  isLa?: boolean;
}

export interface Skills {
  languages: string[];
  libraries: string[];
  frameworks: string[];
  testing: string[];
  other: string[];
  ai: string[];
}

/** [name, description, optionalLink?] */
export type ProjectEntry = [string, string, string?];

export interface ExperienceItem {
  role: string;
  date: string;
  company: string;
  tagline: string;
  clientTitle: string;
  clients: ProjectEntry[];
  projectsTitle: string;
  projects: ProjectEntry[];
  highlight?: boolean;
}

export interface Publication {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  years: string;
}

export interface Achievement {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
  details?: string[];
}
