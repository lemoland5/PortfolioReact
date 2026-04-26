import styles from './Experience.module.css'

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
    date: '2027 :)',
  },
  {
    title: 'CAE Advanced English Certificate poziom C2',
    issuer: 'Cambridge University',
    date: 'Listopad 2023',
  },

]

export default function Experience() {
  return (
    <section id="experience" className={`${styles['experience-section']} section`}>
      <div className={styles['experience-container']}>
        <h2>Doświadczenie zawodowe</h2>
        <div className={styles['experience-content']}>
          <div>
            <h3 className={styles['experience-column']}>Historia zawodowa</h3>
            <div className={styles.timeline}>
              {experienceData.map((item, index) => (
                <div key={index} className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}></div>
                  <div className={styles['timeline-content']}>
                    <h4>{item.title}</h4>
                    <p className={styles.company}>{item.company}</p>
                    <p className={styles.duration}>{item.duration}</p>
                    {item.description && <p className={styles.description}>{item.description}</p>}
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles['certifications-column']}>Certyfikacje</h3>
            <div className={styles['certifications-grid']}>
              {certificationsData.map((cert, index) => (
                <div key={index} className={styles['certification-card']}>
                  <h4>{cert.title}</h4>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <p className={styles.date}>{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
