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
      icon: <MdDeveloperMode size={32} color="#3B82F6" />,
      technologies: [
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
      ]
    },
    backend: {
      icon: <FaServer size={32} color="#10B981" />,
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
      icon: <FaCode size={32} color="#8B5CF6" />,
      technologies: [
        { name: "Java", icon: <FaJava color="#ED8B00" /> },
        { name: "C", icon: <SiC color="#A8B9CC" /> },
        { name: "C++", icon: <SiCplusplus color="#00599C" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      ]
    },
    database: {
      icon: <FaDatabase size={32} color="#F59E0B" />,
      technologies: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "CouchDB", icon: <SiCouchbase color="#EA2328" /> },
      ]
    },
    tools: {
      icon: <FaTools size={32} color="#EF4444" />,
      technologies: [
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "GitHub", icon: <SiGithub color="#181717" /> },
      ]
    }
  }

  return (
    <section className="skills-main">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">{t("skills.title")}</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className={`skill-category ${key}`}>
              <div className="category-header">
                <div className={`category-icon ${key}`}>{category.icon}</div>
                <h3 className="category-title">{t(`skills.categories.${key}.title`)}</h3>
              </div>
              <div className="skills-icons">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="skill-icon" title={tech.name}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection