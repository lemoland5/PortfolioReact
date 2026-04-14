import ProjectCard from './ProjectCard'

const projectsData = [
  {
    title: 'Modern Portfolio',
    tags: ['React', 'Vite'],
    description: 'A clean and sleek portfolio website showcasing projects and skills with modern design principles.',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'Web Application',
    tags: ['React', 'API'],
    description: 'Full-stack application with real-time data synchronization and intuitive user interface.',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'Design System',
    tags: ['CSS', 'Components'],
    description: 'Comprehensive component library with consistent design patterns and accessibility best practices.',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    title: 'E-commerce Platform',
    tags: ['React', 'Node.js'],
    description: 'Scalable e-commerce solution with payment integration and inventory management system.',
    links: [
      { label: 'View', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
