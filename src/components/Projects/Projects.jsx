import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import { projectsData } from '../../data/projects.js'
import styles from './Projects.module.css'

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
    <section id="projects" className={`${styles['projects-section']} section`}>
      <h2>Projekty</h2>
      <div className={styles['projects-container']}>
        <div className={styles['projects-grid']}>
          {projectsData.map((project, index) => (
            <div key={index} onClick={() => navigate(`/project/${index}`)}>
              <ProjectCard 
                {...project}
                onHover={setHoveredProject}
              />
            </div>
          ))}
        </div>
        <div className={styles['projects-preview']}>
          <img 
            src={hoveredProject?.image} 
            alt={hoveredProject?.title}
            className={styles['preview-image']}
          />
          <div className={styles['preview-content']}>
            <h3>{hoveredProject?.title}</h3>
            <p>{hoveredProject?.previewDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
