import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    // Fetch from a sample API
    fetch('https://api.github.com/users/github')
      .then(res => res.json())
      .then(data => setApiData(data))
      .catch(err => console.error('Error fetching API:', err))
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo"><a href="/">Portfolio</a></h1>
        <div className="header-middle">
          {apiData ? (
            <p className="api-info">{apiData.login} • {apiData.public_repos} repos</p>
          ) : (
            <p className="api-info">Loading...</p>
          )}
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

