
export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  isClientProject?: boolean;
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

// Added WritingPost interface to support the Writing component
export interface WritingPost {
  id: number;
  date: string;
  title: string;
  category: string;
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