"use client"
import type React from "react"
import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import "./Header.css"

const Header: React.FC = () => {
  const { language, setLanguage, content } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const handleNavClick = (sectionKey: string) => {
    setActiveSection(sectionKey)
  }

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

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo/Name avec nouveau style moderne */}
          <div className="logo">
            <div className="logo-text">
              <div className="name-container">
                <span className="name-first">Fatima</span>
                <span className="name-middle">Zahra</span>
                <span className="name-middle">Boukab</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-links">
              {navigationItems.map((item) => (
                <a 
                  key={item.key} 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.key)}
                >
                  {content.nav[item.key as keyof typeof content.nav]}
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle avec vrais drapeaux */}
          <div className="language-toggle">
            <div className="language-selector">
              <button
                onClick={() => handleLanguageChange("fr")}
                className={`language-option ${language === "fr" ? "active" : ""}`}
                title="Français"
              >
                <div className="flag-container">
                  <div className="flag france-flag">
                    <div className="flag-stripe blue"></div>
                    <div className="flag-stripe white"></div>
                    <div className="flag-stripe red"></div>
                  </div>
                </div>
                <span className="lang-text">FR</span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`language-option ${language === "en" ? "active" : ""}`}
                title="English"
              >
                <div className="flag-container">
                  <div className="flag usa-flag">
                    <div className="flag-stars"></div>
                    <div className="flag-stripes">
                      <div className="stripe red"></div>
                      <div className="stripe white"></div>
                      <div className="stripe red"></div>
                      <div className="stripe white"></div>
                      <div className="stripe red"></div>
                      <div className="stripe white"></div>
                      <div className="stripe red"></div>
                    </div>
                  </div>
                </div>
                <span className="lang-text">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="menu-toggle">
              <svg className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => {
                  handleNavClick(item.key)
                  setIsMobileMenuOpen(false)
                }}
              >
                {content.nav[item.key as keyof typeof content.nav]}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="mobile-language-selector">
              <div className="language-selector">
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className={`language-option ${language === "fr" ? "active" : ""}`}
                >
                  <div className="flag-container">
                    <div className="flag france-flag">
                      <div className="flag-stripe blue"></div>
                      <div className="flag-stripe white"></div>
                      <div className="flag-stripe red"></div>
                    </div>
                  </div>
                  <span className="lang-text">FR</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`language-option ${language === "en" ? "active" : ""}`}
                >
                  <div className="flag-container">
                    <div className="flag usa-flag">
                      <div className="flag-stars"></div>
                      <div className="flag-stripes">
                        <div className="stripe red"></div>
                        <div className="stripe white"></div>
                        <div className="stripe red"></div>
                        <div className="stripe white"></div>
                        <div className="stripe red"></div>
                        <div className="stripe white"></div>
                        <div className="stripe red"></div>
                      </div>
                    </div>
                  </div>
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