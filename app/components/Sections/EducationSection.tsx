"use client"
import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import "./EducationSection.css"

const EducationSection: React.FC = () => {
  const { t } = useLanguage()

  const educationData = [
    {
      id: 1,
      degree: t("education.items.license.degree"),
      institution: t("education.items.license.institution"),
      period: t("education.items.license.period"),
      location: t("education.items.license.location"),
      description: t("education.items.license.description"),
      logo: "/placeholder.svg?height=80&width=80",
      website: "https://fstt.ac.ma/",
      color: "primary",
    },
    {
      id: 2,
      degree: t("education.items.deust.degree"),
      institution: t("education.items.deust.institution"),
      period: t("education.items.deust.period"),
      location: t("education.items.deust.location"),
      description: t("education.items.deust.description"),
      logo: "/placeholder.svg?height=80&width=80",
      website: "https://fstt.ac.ma/",
      color: "secondary",
    },
    
  ]

  const handleWebsiteClick = (website: string) => {
    if (website !== "#") {
      window.open(website, "_blank")
    }
  }

  return (
    <section id="education" className="education-main">
      
      <div className="education-container">
        {/* Section Header */}
        <div className="education-header">
          <h2 className="education-title">{t("education.title")}</h2>
         
        </div>

        {/* Education Cards */}
        <div className="education-content">
          {educationData.map((item) => (
            <div key={item.id} className={`education-card ${item.color}`}>
              {/* Logo Section */}
              <div className="education-logo">
                <img src={"/images/logo-fstt.png"} alt={`${item.institution} logo`} className="logo-image" />
              </div>

              {/* Content Section */}
              <div className="education-info">
                <div className="education-header-info">
                  <h3 className="education-degree">{item.degree}</h3>
                  <div className="education-meta">
                    <div className="education-institution">
                      <MapPin size={16} />
                      <span>{item.institution}</span>
                    </div>
                    <div className="education-period">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                <p className="education-description">{item.description}</p>

                {item.website !== "#" && (
                  <button className="education-website-btn" onClick={() => handleWebsiteClick(item.website)}>
                    <ExternalLink size={16} />
                    <span>{t("education.visitWebsite")}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
