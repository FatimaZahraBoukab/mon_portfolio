"use client"
import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./ExperienceSection.css"

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="experience" className="experience-main">
      {/* Background decorations */}
      <div className="experience-bg-decoration">
        <div className="circle experience-circle-1"></div>
        <div className="circle experience-circle-2"></div>
        
      </div>

      <div className="experience-container">
        {/* Section Header */}
        <div className="experience-header">
          <h2 className="experience-title">{t('experience.title')}</h2>
        </div>

        {/* Simple Experience Card */}
        <div className="simple-experience-container">
          <div className="simple-experience-card">
           
            
            {/* Content */}
            <div className="simple-card-content">
              {/* Header with logo and company info */}
              <div className="simple-card-header">
                {/* Company info with logo */}
                <div className="company-header-with-logo">
                  <div className="company-logo">
                    <img 
                      src="/images/MiaCorplogo.jpeg" 
                      alt="MiaCorp Logo" 
                      className="company-logo-img"
                      onError={(e) => {
                        // Fallback si l'image n'existe pas
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="company-details">
                    <h3 className="simple-job-title">{t('experience.miacorp.title')}</h3>
                    <div className="simple-company-location">
                      <span className="simple-company">{t('experience.miacorp.company')}</span>
                      <span className="simple-location">Tanger - Avril 2025 à Juin 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="simple-description">
                {t('experience.miacorp.description')}
              </p>

              {/* Technologies */}
              <div className="simple-technologies">
                {['ReactJS', 'FastAPI', 'CouchDB', 'API Google Docs'].map((tech: string, index: number) => (
                  <span key={index} className="simple-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection