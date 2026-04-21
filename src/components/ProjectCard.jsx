import './ProjectCard.css'

export default function ProjectCard({ title, tags, description, links, image, onHover, previewDescription }) {
  return (
    <div 
      className="project-card"
      onMouseEnter={() => onHover({ title, tags, description, links, image, previewDescription })}
    >
      <img src={image} alt={title} className="project-image" />
      <div className="project-header">
        <h3>{title}</h3>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p>{description}</p>
      <div className="project-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="project-link">
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  )
}
