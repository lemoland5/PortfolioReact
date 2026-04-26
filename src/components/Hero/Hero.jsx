import styles from './Hero.module.css'

export default function Hero() {
  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-panel']}>
        <h1>Przemysław Smyczyk, webdev</h1>
        <p className={styles['hero-subtitle']}>Webdev i automatyzacja, która po prostu działa</p>
        <button className={styles['cta-button']} onClick={handleContactClick}>Skontaktuj się</button>
      </div>
    </section>
  )
}
