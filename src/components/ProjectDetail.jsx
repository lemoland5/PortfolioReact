import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects.js'
import Header from './Header'
import Footer from './Footer'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <Header />
      <section className="project-detail-section">
        <div className="project-detail-container">
          <Link to="/#projects" className="back-button">← Wróć do projektów</Link>
          
          <h1>{project.title}</h1>
          
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>

          <img src={project.image} alt={project.title} className="project-detail-image" />

          <div className="project-content">
            <p className="project-description">{project.fullDescription}</p>

            <div className="project-meta">
              <div className="meta-item">
                <h4>Czas trwania</h4>
                <p>{project.duration}</p>
              </div>
              <div className="meta-item">
                <h4>Rola</h4>
                <p>{project.role}</p>
              </div>
            </div>

            <div className="project-section">
              <h3>Najważniejsze funkcjonalności</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h3>Użyte technologie</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h3>Perspektywa</h3>
              <p>{project.challenge}</p>
            </div>

          </div>

          <div className="project-links">
            {project.links.map((link, index) => (
              <a key={index} href={link.url} className="project-link">
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
