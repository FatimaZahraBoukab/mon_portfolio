
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  content: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const content = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      education: 'Formation',
      skills: 'Compétences',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      title: 'Graphic Designer & Web Developer',
      subtitle: 'Transformer les idées en visuels époustouflants et sites web fonctionnels. Créons quelque chose d\'incroyable ensemble.',
      downloadCV: 'Télécharger CV'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Me',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact Me'
    },
    hero: {
      title: 'Graphic Designer & Web Developer',
      subtitle: 'Transforming ideas into stunning visuals and functional websites. Let\'s create something amazing together.',
      downloadCV: 'Download Resume'
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      content: content[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}