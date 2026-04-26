import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles['about-section']}>
      <div className={styles['about-container']}>
        <div className={styles['about-left']}>
          <h2>O mnie</h2>
        </div>
        <div className={styles['about-right']}>
          <p>
            Specjalizuję się w automatyzacji przemysłowej. Moje spojrzenie na automatykę w oparciu o logistykę oraz UX/UI daje przedsiębiorcom sprawne systemy, które są wygodne w użyciu.
          </p>
          <p>
            Posiadam doświadczenie w tworzeniu stron internetowych, systemów backendowych oraz programów komputerowych.
          </p>
          <p>
            W wolnym czasie kocham słuchać muzyki oraz grać na gitarze. Interesuję się również produkcją audio i wideo.
          </p>
        </div>
      </div>
    </section>
  )
}
