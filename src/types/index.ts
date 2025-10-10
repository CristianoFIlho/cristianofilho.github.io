export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export interface Achievement {
  id: string;
  company: string;
  title: string;
  description: string;
  url: string;
  logo: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
