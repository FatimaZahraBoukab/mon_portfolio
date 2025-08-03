"use client"
import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import "./ProjectsSection.css"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  image: string
  featured?: boolean
}

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      id: "festify",
      title: t("projects.items.festify.title"),
      description: t("projects.items.festify.description"),
      technologies: ["Django", "React", "Python", "SQLlite"],
      githubUrl: "https://github.com/FatimaZahraBoukab/Festify",
      image: "/images/festify.jpg",
    },

    {
      id: "moneymind",
      title: t("projects.items.moneymind.title"),
      description: t("projects.items.moneymind.description"),
      technologies: ["Laravel", "MySQL", "TailwindCSS","Gemini AI"],
      githubUrl: "https://github.com/FatimaZahraBoukab/MoneyMind",
      image: "/images/money.png",
    },
    {
      id: "techHorizons",
      title: t("projects.items.techHorizons.title"),
      description: t("projects.items.techHorizons.description"),
      technologies: ["Laravel", "PHP", "Blade", "MySQL"],
      githubUrl: "https://github.com/FatimaZahraBoukab/Tech_Horizons",
      image: "/images/tech.jpg",
    },

    {
      id: "scorematch",
      title: t("projects.items.scorematch.title"),
      description: t("projects.items.scorematch.description"),
      technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/FatimaZahraBoukab/ScoreMatch",
      image: "/images/score.jpg",
    },

    {
      id: "flaskProfile",
      title: t("projects.items.flaskProfile.title"),
      description: t("projects.items.flaskProfile.description"),
      technologies: ["Python", "Flask", "SQLite"],
      githubUrl: "https://github.com/FatimaZahraBoukab/mini-projet-flask",
      image: "/images/flask.jpg",
    },

    {
      id: "mazeProject",
      title: t("projects.items.mazeProject.title"),
      description: t("projects.items.mazeProject.description"),
      technologies: ["C++", "Raylib"],
      githubUrl: "https://github.com/FatimaZahraBoukab/Maze_Project",
      image: "/images/maze.jpg",
    },
  ]

  return (
    <section id="projects" className="projects-main">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <h2 className="projects-title">{t("projects.title")}</h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card ${project.featured ? "project-featured" : ""}`}>
              <div className="project-image">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const placeholder = target.parentElement?.querySelector(".project-image-placeholder") as HTMLElement
                    if (placeholder) {
                      placeholder.style.display = "flex"
                    }
                  }}
                />
                <div className="project-image-placeholder" style={{ display: "none" }}>
                  <div className="project-logo">{project.title.substring(0, 2).toUpperCase()}</div>
                </div>
                <div className="project-overlay">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                    aria-label={`${t("projects.viewGithub")} - ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${t("projects.viewGithub")} - ${project.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies &&
                    project.technologies.map((tech: string, techIndex: number) => (
                      <span key={`${project.id}-tech-${techIndex}`} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="projects-footer">
          <a
            href="https://github.com/FatimaZahraBoukab"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <Github size={20} />
            <span>{t("projects.viewMore")}</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
