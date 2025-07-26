// types/index.ts
export interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}

export interface NavigationItem {
  key: string;
  href: string;
  label: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    downloadCV: string;
  };
}