"use client"
import type React from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Download, Linkedin, Github, Mail } from "lucide-react"
import "./HeroSection.css"

const HeroSection: React.FC = () => {
  const { t } = useLanguage()

  // Configuration des liens de réseaux sociaux
  const socialLinks = {
    linkedin: " https://www.linkedin.com/in/fatima-zahra-boukab-b11210286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/FatimaZahraBOUKAB",
    gmail: "mailto:fatimazahraboukab9@gmail.com"
  }

  const handleDownloadCV = () => {
    // Créer un lien de téléchargement pour forcer le téléchargement
    const link = document.createElement('a')
    link.href = "/documents/CV-FatimaZahraBOUKAB.pdf"
    link.download = "CV-FatimaZahraBOUKAB.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSocialClick = (platform: keyof typeof socialLinks) => {
    window.open(socialLinks[platform], "_blank")
  }

  return (
    <main id="home" className="hero-main">
      <div className="hero-container">
        {/* Background with gradient */}
        <div className="hero-background"></div>

        {/* Decorative circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>

        <div className="hero-content">
          <div className="hero-grid">
            {/* Content */}
            <div className="hero-text">
              <div className="text-content">
                {/* Nom et prénom seulement */}
                <div className="hero-greeting">
                  <h1 className="hero-name">{t('hero.name')}</h1>
                </div>
                <h2 className="hero-title">{t('hero.title')}</h2>
                <p className="hero-subtitle">{t('hero.subtitle')}</p>
                
                {/* Description additionnelle pour augmenter le contenu */}
                
              </div>

              {/* CTA Container avec CV et réseaux sociaux */}
              <div className="cta-container">
                <button className="cta-button" onClick={handleDownloadCV}>
                  <Download className="download-icon" size={20} />
                  <span>{t('hero.downloadCV')}</span>
                </button>

                {/* Icônes de réseaux sociaux avec Lucide React */}
                <div className="social-icons">
                  <button 
                    className="social-icon linkedin" 
                    onClick={() => handleSocialClick('linkedin')}
                    title="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </button>
                  <button 
                    className="social-icon github" 
                    onClick={() => handleSocialClick('github')}
                    title="GitHub"
                  >
                    <Github size={24} />
                  </button>
                  <button 
                    className="social-icon gmail" 
                    onClick={() => handleSocialClick('gmail')}
                    title="Email"
                  >
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="hero-visual">
              <div className="profile-container">
                {/* Profile image */}
                <div className="profile-image">
                  <img 
                    src="/images/profile1.png" 
                    alt="Fatima Zahra Boukab" 
                    onError={(e) => {
                      // Fallback si l'image ne charge pas
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'profile-fallback';
                      fallback.innerHTML = `
                        <svg className="profile-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      `;
                      e.currentTarget.parentElement?.appendChild(fallback);
                    }}
                  />
                </div>

                {/* Decorative elements around profile */}
                <div className="decoration decoration-1"></div>
                <div className="decoration decoration-2"></div>
                <div className="decoration decoration-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection