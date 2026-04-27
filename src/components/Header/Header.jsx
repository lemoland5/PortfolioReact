import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [apiData, setApiData] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error('Error fetching API:', err))
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <div className={styles['header-left']}>
          <h1 className={styles.logo}><a href="/">Portfolio</a></h1>
          {apiData ? (
            <p className={styles['api-info']}>{apiData.login} • {apiData.public_repos} repos</p>
          ) : (
            <p className={styles['api-info']}>Loading...</p>
          )}
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles['nav-open'] : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>O mnie</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projekty</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Doświadczenie</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Umiejętności</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
        </nav>
        <button 
          className={styles['menu-toggle']} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles['menu-bar']}></span>
          <span className={styles['menu-bar']}></span>
          <span className={styles['menu-bar']}></span>
        </button>
      </div>
    </header>
  )
}
