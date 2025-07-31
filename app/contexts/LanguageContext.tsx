"use client"
import { createContext, useContext, useState, type ReactNode } from "react"

type LanguageContextType = {
  language: "fr" | "en"
  setLanguage: (lang: "fr" | "en") => void
  t: (key: string) => string
  content: any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Système de traduction avec clés imbriquées
const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      education: "Formation",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      name: "Fatima Zahra Boukab",
      title: "Développeuse Web & Logiciels",
      subtitle:
        "Passionnée par la création d'applications web modernes et de solutions logicielles innovantes.",
      downloadCV: "Télécharger le CV",
      social: {
        linkedin: "Profil LinkedIn",
        github: "Profil GitHub",
        gmail: "Envoyer un email",
      },
    },
    about: {
      title: "À propos de moi",
      description:
        "Développeuse Web & Logiciels passionnée, je conçois des applications modernes, performantes et centrées sur l'utilisateur. Curieuse et motivée, je m'efforce d'intégrer des solutions innovantes pour répondre à des besoins concrets. Mon objectif est de combiner technologie et créativité pour livrer des projets à fort impact.",
      stats: {
        projects: "Projets professionnels complétés",
        experience: "Année d'expérience en développement Web & Logiciels",
      },
    },
    education: {
      title: "Formation",
      visitWebsite: "Visiter le site",
      items: {
        license: {
          degree: "Licence en Ingénierie du Développement d'Applications Informatiques",
          institution: "Faculté des Sciences et Techniques - Tanger",
          period: "2024 - 2025",
          location: "Tanger, Maroc",
          description:
            "Formation spécialisée en développement d'applications, avec un focus sur les technologies web modernes, la programmation orientée objet et la gestion de bases de données. Réalisation de projets pratiques en développement web et mobile.",
        },
        deust: {
          degree: "DEUST en Mathématiques, Informatique et Physique",
          institution: "Faculté des Sciences et Techniques - Tanger",
          period: "2022 - 2024",
          location: "Tanger, Maroc",
          description:
            "Formation fondamentale couvrant les mathématiques appliquées, les bases de la programmation, les structures de données et algorithmes, ainsi que les principes de la physique.",
        },
      },
    },
    skills: {
      title: "Mes Compétences",
      categories: {
        frontend: {
          title: "Développement Frontend",
        
        },
        backend: {
          title: "Développement Backend",
        
        },
        programming: {
          title: "Langages de Programmation",
        },
        database: {
          title: "Gestion de Bases de Données",
        
        },
        tools: {
          title: " Git & Github ",
         
        }
      }
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      education: "Education",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "Fatima Zahra Boukab",
      title: "Web & Software Developer",
      subtitle:
        "Passionate about creating modern web applications and innovative software solutions.",
      downloadCV: "Download CV",
      social: {
        linkedin: "LinkedIn Profile",
        github: "GitHub Profile",
        gmail: "Send an Email",
      },
    },
    about: {
      title: "About Me",
      description:
        "I'm a passionate Web & Software Developer who designs modern, high-performance, user-centric applications. Curious and motivated, I strive to integrate innovative solutions to meet real-world needs. My goal is to merge technology with creativity to deliver impactful projects.",
      stats: {
        projects: "Completed Professional Projects",
        experience: "Year of Experience in Web & Software Development",
      },
    },
    education: {
      title: "Education",
      visitWebsite: "Visit Website",
      items: {
        license: {
          degree: "Bachelor's in Computer Application Development Engineering",
          institution: "Faculty of Science and Technology - Tangier",
          period: "2024 - 2025",
          location: "Tangier, Morocco",
          description:
            "Specialized training in application development with a focus on modern web technologies, object-oriented programming, and database management. Hands-on projects in web and mobile development.",
        },
        deust: {
          degree: "DEUST in Mathematics, Computer Science, and Physics",
          institution: "Faculty of Science and Technology - Tangier",
          period: "2022 - 2024",
          location: "Tangier, Morocco",
          description:
            "Core training covering applied mathematics, fundamentals of programming, data structures and algorithms, and physics principles.",
        },
      },
    },
    skills: {
      title: "My Skills",
     
      categories: {
        frontend: {
          title: "Frontend Development",
          
        },
        backend: {
          title: "Backend Development",
          
        },
        programming: {
          title: "Programming Languages",
        
        },
        database: {
          title: "Database Management",
      
        },
        tools: {
          title: " Git & Github",
         
        }
      }
    },
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  // Fonction de traduction avec support des clés imbriquées
  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key // Retourne la clé si la traduction n'est pas trouvée
      }
    }

    return typeof value === "string" ? value : key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        content: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}