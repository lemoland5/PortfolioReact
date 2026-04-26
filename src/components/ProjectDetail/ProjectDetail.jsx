import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../../data/projects.js'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
      <Header />
      <section className={styles['project-detail-section']}>
        <div className={styles['project-detail-container']}>
          <Link to="/#projects" className={styles['back-button']}>← Wróć do projektów</Link>
          
          <h1>{project.title}</h1>
          
          <div className={styles['project-tags']}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <img src={project.image} alt={project.title} className={styles['project-detail-image']} />

          <div className={styles['project-content']}>
            <p className={styles['project-description']}>{project.fullDescription}</p>

            <div className={styles['project-meta']}>
              <div className={styles['meta-item']}>
                <h4>Czas trwania</h4>
                <p>{project.duration}</p>
              </div>
              <div className={styles['meta-item']}>
                <h4>Rola</h4>
                <p>{project.role}</p>
              </div>
            </div>

            <div className={styles['project-section']}>
              <h3>Najważniejsze funkcjonalności</h3>
              <ul className={styles['features-list']}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className={styles['project-section']}>
              <h3>Użyte technologie</h3>
              <div className={styles['tech-list']}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles['tech-badge']}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles['project-section']}>
              <h3>Perspektywa</h3>
              <p>{project.challenge}</p>
            </div>

          </div>

          <div className={styles['project-links']}>
            {project.links.map((link, index) => (
              <a key={index} href={link.url} className={styles['project-link']}>
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
