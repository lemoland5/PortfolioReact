import './Experience.css'

const experienceData = [
    {
    title: 'Automatyzacja procesów',
    company: 'NBPrint',
    duration: 'Sierpień - Listopad 2025',
    description: '',
    highlights: [
      'Stworzenie narzędzia SELER do automatyzacji dodawania produktów do baz danych GS1 i Baselinker',
    ],
  },
  {
    title: 'Data Entry / DB Admin / Adobe Scripting',
    company: 'NBPrint',
    duration: 'Lipiec - Sierpień 2025',
    description: '',
    highlights: [
      'Administrowanie bazą danch produktów Baselinker dla sklepu odzieżowego',
      'Tworzenie skryptów automatyzujących tworzenie mockupów ubrań w Photoshopie'
    ],
  },
    {
    title: 'Fullstack web developer',
    company: 'B2 Software',
    duration: 'Styczeń - Czerwiec 2025',
    description: 'Praca nad projektami aplikacji dla przedsiębiorstw',
    highlights: [
      'Praktyki zawodowe - Praca nad projektem aplikacji do wersjonowania faktur',
      'Płatne zlecenie - Praca nad aplikacją MESA do planowania projektów budowlanych',
    ],
  },
  {
    title: 'Frontend / Wordpress Developer',
    company: 'BPGame',
    duration: 'Wrzesień - Październik 2024',
    description: 'Praca nad projektami stron internetowych w ramach praktyk zawodowych Erasmus+ w Portugalii',
    highlights: [
      'Stworzenie aplikacji sklepu fotograficznego',
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
            <h3>Certyfikaty</h3>
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
