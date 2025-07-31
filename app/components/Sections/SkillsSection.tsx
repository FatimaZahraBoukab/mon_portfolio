"use client"
import React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiNextdotjs, SiDjango, SiFastapi, SiLaravel, SiFlask,
  SiC, SiCplusplus, SiPython, SiPhp,
  SiMysql, SiMongodb, SiCouchbase,
  SiGit, SiGithub
} from "react-icons/si"
import { FaJava, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa"
import { MdDeveloperMode } from "react-icons/md"
import "./SkillsSection.css"

const SkillsSection: React.FC = () => {
  const { t } = useLanguage()

  const skills = {
    frontend: {
      icon: <MdDeveloperMode size={28} />,
      technologies: [
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      ]
    },
    backend: {
      icon: <FaServer size={28} />,
      technologies: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
        { name: "Django", icon: <SiDjango color="#092E20" /> },
        { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
        { name: "Laravel", icon: <SiLaravel color="#FF2D20" /> },
        { name: "Flask", icon: <SiFlask color="#000000" /> },
      ]
    },
    programming: {
      icon: <FaCode size={28} />,
      technologies: [
        { name: "Java", icon: <FaJava color="#ED8B00" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      ]
    },
    database: {
      icon: <FaDatabase size={28} />,
      technologies: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "CouchDB", icon: <SiCouchbase color="#EA2328" /> },
      ]
    },
    tools: {
      icon: <FaTools size={28} />,
      technologies: [
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
      ]
    }
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">{t("skills.title")}</h2>
        
        <div className="skills-grid">
          {/* Première ligne - 3 cartes */}
          <div className="skill-card frontend">
            <div className="card-icon-wrapper">
              <div className="card-icon blue">{skills.frontend.icon}</div>
            </div>
            <h3 className="card-title">{t("skills.categories.frontend.title")}</h3>
            <div className="tech-icons">
              {skills.frontend.technologies.map((tech) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card backend">
            <div className="card-icon-wrapper">
              <div className="card-icon green">{skills.backend.icon}</div>
            </div>
            <h3 className="card-title">{t("skills.categories.backend.title")}</h3>
            <div className="tech-icons">
              {skills.backend.technologies.map((tech) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card programming">
            <div className="card-icon-wrapper">
              <div className="card-icon purple">{skills.programming.icon}</div>
            </div>
            <h3 className="card-title">{t("skills.categories.programming.title")}</h3>
            <div className="tech-icons">
              {skills.programming.technologies.map((tech) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Deuxième ligne - 2 cartes centrées */}
          <div className="skill-card database">
            <div className="card-icon-wrapper">
              <div className="card-icon yellow">{skills.database.icon}</div>
            </div>
            <h3 className="card-title">{t("skills.categories.database.title")}</h3>
            <div className="tech-icons">
              {skills.database.technologies.map((tech) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-card tools">
            <div className="card-icon-wrapper">
              <div className="card-icon red">{skills.tools.icon}</div>
            </div>
            <h3 className="card-title">{t("skills.categories.tools.title")}</h3>
            <div className="tech-icons">
              {skills.tools.technologies.map((tech) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection