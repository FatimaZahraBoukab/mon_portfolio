"use client"
import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./AboutSection.css"

const AboutSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="about-main">
      {/* Background decorations - Continuation du Hero avec plus de cercles */}
      <div className="about-bg-decoration">
        <div className="circle about-circle-1"></div>
        <div className="circle about-circle-2"></div>
        <div className="circle about-circle-3"></div>
        <div className="circle about-circle-4"></div>
        <div className="circle about-circle-5"></div>
      </div>

      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2 className="about-title">{t('about.title')}</h2>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* About Description */}
          <p className="about-description">
            {t('about.description')}
          </p>

          {/* Stats - Nouvelle disposition horizontale avec couleurs améliorées */}
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">+1</div>
              <div className="stat-description">{t('about.stats.experience')}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">+10</div>
              <div className="stat-description">{t('about.stats.projects')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection