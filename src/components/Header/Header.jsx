import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error('Error fetching API:', err))
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <h1 className={styles.logo}><a href="/">Portfolio</a></h1>
        <div className={styles['header-middle']}>
          {apiData ? (
            <p className={styles['api-info']}>{apiData.login} • {apiData.public_repos} repos</p>
          ) : (
            <p className={styles['api-info']}>Loading...</p>
          )}
        </div>
        <nav className={styles.nav}>
          <a href="#about">O mnie</a>
          <a href="#projects">Projekty</a>
          <a href="#experience">Doświadczenie</a>
          <a href="#skills">Umiejętności</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
