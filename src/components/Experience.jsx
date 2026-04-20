import './Experience.css'

const experienceData = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Present',
    description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices for UI/UX.',
    highlights: [
      'Architected component library used across 10+ projects',
      'Improved application performance by 45%',
      'Mentored 3 junior developers',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    duration: 'Jun 2020 - Dec 2021',
    description: 'Developed full-stack web applications for various clients, from concept to deployment.',
    highlights: [
      'Built 15+ client projects using React and Node.js',
      'Implemented real-time features using WebSockets',
      'Optimized database queries reducing response time by 60%',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Studio',
    duration: 'Jan 2019 - May 2020',
    description: 'Started career developing web applications and learning modern web technologies.',
    highlights: [
      'Developed features for mobile-first web applications',
      'Collaborated with design team on UI implementations',
      'Contributed to 5 successful product launches',
    ],
  },
]

const certificationsData = [
  {
    title: 'Certyfikacja technika programisty INF.03',
    issuer: 'Egzamin państwowy',
    date: 'Sierpień 2025',
  },
  {
    title: 'Certyfikacja technika programisty INF.04',
    issuer: 'Egzamin państwowy',
    date: '2026',
  },
  {
    title: 'CAE Advanced English Certificate poziom C2',
    issuer: 'Cambridge University',
    date: 'Listopad 2023',
  },

]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="experience-container">
        <h2>Doświadczenie i certyfikaty</h2>
        
        <div className="experience-content">
          <div className="experience-column">
            <h3>Doświadczenie</h3>
            <div className="timeline">
              {experienceData.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{job.title}</h4>
                    <p className="company">{job.company}</p>
                    <p className="duration">{job.duration}</p>
                    <p className="description">{job.description}</p>
                    <ul className="highlights">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-column">
            <h3>Certifications</h3>
            <div className="certifications-grid">
              {certificationsData.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h4>{cert.title}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
