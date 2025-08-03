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
    experience: {
      title: "Expérience",
      miacorp: {
        title: "Stage – Développeuse Web Full Stack",
        company: "MiaCorp",
        location: "Tanger - Avril 2025 à Juin 2025",
        description: "Projet de Fin d'Études : Développement d'une application web de gestion automatisée de documents juridiques pour les PME. Conception de l'interface utilisateur avec ReactJS, intégration de l'API Google Docs pour la génération dynamique de documents, et mise en place d'un backend sécurisé avec FastAPI. Le projet met l'accent sur l'automatisation des tâches répétitives et la fiabilité du traitement documentaire.",
        technologies: ["ReactJS", "FastAPI", "CouchDB", "API Google Docs"]
      },
    },
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez une sélection de mes projets développés avec passion",
      viewMore: "Voir Plus",
      viewGithub: "Voir sur GitHub",
      items: {
        moneymind: {
           title: "MoneyMind",
           description: "Application Laravel de gestion financière : suivi des revenus et dépenses, objectifs d'épargne, alertes budgétaires, notifications et conseils IA.",
        },
        scorematch: {
          title: "ScoreMatch",
          description: "Une application de gestion et de suivi des matchs de football, permettant aux administrateurs de gérer les utilisateurs, les matchs, les équipes, et plus encore.",
        },
        festify: {
          title: "Festify", 
          description: "Application web Django/React de gestion d'événements complète. Planification, sélection de services, gestion budgétaire, réservations et suivi.",
        },
        flaskProfile: {
          title: "MonEspace",
          description: "Application Flask de gestion de profil utilisateur. Fonctionnalités : inscription/connexion, modification profil et mot de passe, upload photo, historique connexions.",
        },
        techHorizons: {
          title: "Tech Horizons",
          description: "Application Laravel de gestion d'un magazine en ligne : abonnements par thème, historique, recommandations, publication d'articles, rôles multiples.",
        },
        mazeProject: {
          title: "Maze ",
          description: "Jeu de labyrinthe en C++ avec Raylib. Labyrinthes générés aléatoirement avec trois niveaux de difficulté. Le joueur doit atteindre la sortie en un temps minimum.",
        }
      }
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Travaillons ensemble sur votre prochain projet !",
      info: {
        title: "Mes Informations",
        email: {
          label: "Email",
        },
        phone: {
          label: "Téléphone",
        },
        location: {
          label: "Localisation",
        },
        linkedin: {
          label: "LinkedIn",
        }
      },
      form: {
        title: "Envoyez un message",
        firstName: {
          label: "Prénom",
          placeholder: "Votre prénom"
        },
        name: {
          label: "Nom",
          placeholder: "Votre nom"
        },
        email: {
          label: "Email",
          placeholder: "votre.email@example.com"
        },
        subject: {
          label: "Sujet",
          placeholder: "Sujet de votre message"
        },
        message: {
          label: "Message",
          placeholder: "Écrivez votre message ici..."
        },
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Votre message a été envoyé avec succès ! Je vous répondrai bientôt.",
        error: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
      }
    },
    footer: {
 
  rights: "Tous droits réservés"
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
    experience: {
      title: "Experience",
      miacorp: {
        title: "Internship – Full Stack Web Developer",
        company: "MiaCorp",
        location: "Tangier - April 2025 to June 2025",
        description: "Final Year Project: Development of a web application for automated legal document management for SMEs. User interface design with ReactJS, integration of Google Docs API for dynamic document generation, and implementation of a secure backend with FastAPI. The project focuses on automating repetitive tasks and ensuring reliable document processing.",
        technologies: ["ReactJS", "FastAPI", "CouchDB", "Google Docs API"]
      },
    },
    projects: {
      title: "My Projects",
      subtitle: "Discover a selection of my projects developed with passion",
      viewMore: "View More",
      viewGithub: "View on GitHub",
      items: {
        moneymind: {
           title: "MoneyMind",
           description: "Laravel financial management application: income and expense tracking, savings goals, budget alerts, notifications and AI advice.",
        },
        scorematch: {
          title: "ScoreMatch",
          description: "A football match management and tracking application, allowing administrators to manage users, matches, teams, and more.",
        },
        festify: {
          title: "Festify", 
          description: "Complete Django/React event management web application. Planning, service selection, budget management, reservations and tracking.",
        },
        flaskProfile: {
          title: "MonEspace",
          description: "Flask user profile management application. Features: registration/login, profile and password modification, photo upload, connection history.",
        },
        techHorizons: {
          title: "Tech Horizons",
          description: "Laravel application for managing an online magazine: theme subscriptions, history, recommendations, article publishing, multiple roles.",
        },
        mazeProject: {
          title: "Maze ",
          description: "C++ maze game with Raylib. Randomly generated mazes with three difficulty levels. The player must reach the exit in minimum time.",
        }
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's make something awesome together!",
      info: {
        title: "My Information",
        email: {
          label: "Email",
        },
        phone: {
          label: "Phone",
        },
        location: {
          label: "Location",
        },
        linkedin: {
          label: "LinkedIn",
        }
      },
      form: {
        title: "Send a Message",
        firstName: {
          label: "First Name",
          placeholder: "Your first name"
        },
        name: {
          label: "Last Name",
          placeholder: "Your last name"
        },
        email: {
          label: "Email",
          placeholder: "your.email@example.com"
        },
        subject: {
          label: "Subject",
          placeholder: "Message subject"
        },
        message: {
          label: "Message",
          placeholder: "Write your message here..."
        },
        submit: "Send Message",
        sending: "Sending...",
        success: "Your message has been sent successfully! I will reply to you soon.",
        error: "An error occurred while sending. Please try again."
      }
    },
    footer: {

  rights: "All Rights Reserved"
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