import { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: 'Modern Portfolio',
    tags: ['React', 'Vite'],
    description: 'A clean and sleek portfolio website showcasing projects and skills with modern design principles.',
    previewDescription: 'This modern portfolio website was built using React and Vite for optimal performance. It features a responsive design that works seamlessly across all devices, showcasing projects and skills with interactive animations. The design emphasizes clean aesthetics and smooth user experience with attention to typography and spacing.',
    image: 'https://picsum.photos/600/400?random=10',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'Web Application',
    tags: ['React', 'API'],
    description: 'Full-stack application with real-time data synchronization and intuitive user interface.',
    previewDescription: 'A comprehensive full-stack web application built with React and Node.js, featuring real-time data synchronization and an intuitive user interface. The application integrates with RESTful APIs to provide seamless data flow between frontend and backend. It includes advanced state management and real-time updates for a dynamic user experience.',
    image: 'https://picsum.photos/600/400?random=20',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'Design System',
    tags: ['CSS', 'Components'],
    description: 'Comprehensive component library with consistent design patterns and accessibility best practices.',
    previewDescription: 'A comprehensive component library and design system that provides a foundation for building consistent user interfaces. It includes a wide range of reusable components, design patterns, and accessibility features. The system is thoroughly documented and designed to scale across multiple projects while maintaining design consistency.',
    image: 'https://picsum.photos/600/400?random=30',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'E-commerce Platform',
    tags: ['React', 'Node.js'],
    description: 'Scalable e-commerce solution with payment integration and inventory management system.',
    previewDescription: 'A fully functional e-commerce platform designed for scalability and performance. It includes secure payment integration, real-time inventory management, and an intuitive admin dashboard. The platform supports multiple payment methods, product filtering, and a seamless checkout experience with comprehensive order tracking and management.',
    image: 'https://picsum.photos/600/400?random=40',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(projectsData[0])

  useEffect(() => {
    if (hoveredProject && hoveredProject.image) {
      const img = new Image()
      img.src = hoveredProject.image
    }
  }, [hoveredProject])

  const handleHover = (project) => {
    setHoveredProject(project)
  }

  return (
    <section id="projects" className="section projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-container">
        <div className="projects-right">
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project}
                onHover={handleHover}
              />
            ))}
          </div>
        </div>
        <div className="projects-left">
          <div className="projects-preview-container">
            {hoveredProject && (
              <div key={hoveredProject.title} className="project-preview">
                <img key={hoveredProject.title} src={hoveredProject.image} alt={hoveredProject.title} className="preview-image" loading="eager" />
                <p className="preview-description">{hoveredProject.previewDescription}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
