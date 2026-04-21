import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projects.js'
import './Projects.css'

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(projectsData[0])
  const navigate = useNavigate()

  useEffect(() => {
    if (hoveredProject && hoveredProject.image) {
      const img = new Image()
      img.src = hoveredProject.image
    }
  }, [hoveredProject])

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} onClick={() => navigate(`/project/${index}`)}>
              <ProjectCard 
                {...project}
                onHover={setHoveredProject}
              />
            </div>
          ))}
        </div>
        <div className="projects-preview">
          <img 
            src={hoveredProject?.image} 
            alt={hoveredProject?.title}
            className="preview-image"
          />
          <div className="preview-content">
            <h3>{hoveredProject?.title}</h3>
            <p>{hoveredProject?.previewDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
