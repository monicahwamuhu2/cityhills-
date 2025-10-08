export interface Program {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface PastProgram {
  title: string;
  category: string;
}

export interface SocialLink {
  name: string;
  icon: any;
  href: string;
}