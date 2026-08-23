export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'branding' | 'advertising' | 'ai_art' | 'social_media' | 'ui_design' | 'retouching';
  categoryLabel: string;
  description: string;
  services: string[];
  tools: string[];
  imageUrl: string;
  accentColor?: string;
  year: string;
  client?: string;
  deliverables?: string[];
  challenge?: string;
  solution?: string;
  isCustom?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  tag: string;
}

export interface ToolItem {
  name: string;
  role: string;
  level: string;
  percentage: number;
  description: string;
  tags: string[];
  highlight: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarLetter: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
