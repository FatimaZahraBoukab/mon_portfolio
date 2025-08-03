"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./Header.css"

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolling, setIsScrolling] = useState(false) // État pour désactiver la détection pendant le scroll programmatique

  const handleLanguageChange = (lang: "fr" | "en") => {
    setLanguage(lang)
  }

  const navigationItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "education", href: "#education" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ]

  // Fonction pour détecter la section active lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si on est en train de scroller programmatiquement, on ignore la détection
      if (isScrolling) return

      const sections = navigationItems.map(item => document.getElementById(item.key.replace(/([A-Z])/g, '-$1').toLowerCase()))
      const scrollPosition = window.scrollY + 100 // Offset pour une meilleure détection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(navigationItems[i].key)
            break
          }
        }
      }
    }

    // Écouter l'événement de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Appeler une fois au montage pour définir la section initiale
    handleScroll()

    // Nettoyer l'événement lors du démontage
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolling]) // Ajouter isScrolling comme dépendance

  // Fonction pour le scroll fluide vers une section
  const handleNavClick = (sectionKey: string, href: string) => {
    // Définir immédiatement la section active pour éviter les transitions
    setActiveSection(sectionKey)
    setIsMobileMenuOpen(false)
    
    // Désactiver la détection de scroll pendant le défilement programmatique
    setIsScrolling(true)
    
    // Scroll fluide vers la section
    const element = document.getElementById(sectionKey)
    if (element) {
      const headerHeight = 64 // Hauteur du header fixe
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })

      // Réactiver la détection après la fin du scroll (délai approximatif)
      setTimeout(() => {
        setIsScrolling(false)
      }, 800) // Délai pour laisser le temps au scroll de se terminer
    } else {
      // Si l'élément n'existe pas, réactiver immédiatement
      setIsScrolling(false)
    }
  }

  // Composant pour le drapeau français
  const FranceFlag = () => (
    <div className="flag-container">
      <img 
        src="/images/FR.jpg" 
        alt="FR" 
        className="flag-image"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '🇫🇷';
        }}
      />
    </div>
  )

  // Composant pour le drapeau américain
  const USAFlag = () => (
    <div className="flag-container">
      <img 
        src="/images/EN.jpg" 
        alt="EN" 
        className="flag-image"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '🇺🇸';
        }}
      />
    </div>
  )

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo harmonisé avec Hero Section */}
          <div className="logo">
            <span className="name-full">Fatima Zahra Boukab</span>
          </div>

          {/* Desktop Navigation avec détection automatique */}
          <div className="desktop-nav">
            <div className="nav-links">
              {navigationItems.map((item) => (
                <button
                  key={item.key} 
                  onClick={() => handleNavClick(item.key, item.href)}
                  className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle harmonisé */}
          <div className="language-toggle">
            <div className="language-selector">
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`language-option ${language === "fr" ? "active" : ""}`}
                aria-label="Français"
              >
                <FranceFlag />
                <span className="lang-text">FR</span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`language-option ${language === "en" ? "active" : ""}`}
                aria-label="English"
              >
                <USAFlag />
                <span className="lang-text">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="menu-toggle"
              aria-label="Menu"
            >
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu avec détection automatique */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key, item.href)}
                className={`mobile-nav-link ${activeSection === item.key ? 'active' : ''}`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}

            {/* Mobile Language Selector */}
            <div className="mobile-language-selector">
              <div className="language-selector">
                <button
                  onClick={() => {
                    handleLanguageChange("fr")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`language-option ${language === "fr" ? "active" : ""}`}
                  aria-label="Français"
                >
                  <FranceFlag />
                  <span className="lang-text">FR</span>
                </button>
                <button
                  onClick={() => {
                    handleLanguageChange("en")
                    setIsMobileMenuOpen(false)
                  }}
                  className={`language-option ${language === "en" ? "active" : ""}`}
                  aria-label="English"
                >
                  <USAFlag />
                  <span className="lang-text">EN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header