export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
  type: 'frontend' | 'backend';
  technologies: string[];
}

export interface NavItem {
  label: string;
  path: string;
}