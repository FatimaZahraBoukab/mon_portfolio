'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
  content: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Système de traduction avec clés imbriquées
const translations = {
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
   
      name: 'Fatima Zahra Boukab',
      title: 'Développeuse Web & Logicielle',
      subtitle: 'Passionnée par la création d\'applications web modernes et de solutions logicielles innovantes.',
      downloadCV: 'Télécharger CV',
      social: {
        linkedin: 'Profil LinkedIn',
        github: 'Profil GitHub',
        gmail: 'Envoyer un email'
      }
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
      greeting: 'Hello, I am',
      name: 'Fatima Zahra Boukab',
      title: 'Web & Software Developer',
      subtitle: 'Passionate about creating modern web applications and innovative software solutions.',
      downloadCV: 'Download Resume',
      social: {
        linkedin: 'LinkedIn Profile',
        github: 'GitHub Profile',
        gmail: 'Send Email'
      }
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  // Fonction de traduction avec support des clés imbriquées
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Retourne la clé si la traduction n'est pas trouvée
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t,
      content: translations[language] 
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