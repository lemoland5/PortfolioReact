import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, tags, description, links, image, onHover, previewDescription }) {
  return (
    <div 
      className={styles['project-card']}
      onMouseEnter={() => onHover({ title, tags, description, links, image, previewDescription })}
    >
      <img src={image} alt={title} className={styles['project-image']} />
      <div className={styles['project-header']}>
        <h3>{title}</h3>
        <div className={styles['project-tags']}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p>{description}</p>
      <div className={styles['project-links']}>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank"  className={styles['project-link']}>
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  )
}
