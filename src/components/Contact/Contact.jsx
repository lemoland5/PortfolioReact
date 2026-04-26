import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className={`${styles['contact-section']} section`}>
      <h2>Kontakt</h2>
      <div className={styles['contact-container']}>
        
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Imię i nazwisko"
            />
          </div>
          
          <div className={styles['form-group']}>
            <label htmlFor="email">Adres email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          
          <div className={styles['form-group']}>
            <label htmlFor="message">Wiadomość</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Wiadomość"
              rows="5"
            />
          </div>
          
          <button type="submit" className={styles['submit-btn']}>Wyślij wiadomość</button>
        </form>
        
        <div className={styles['contact-links']}>
          <a href="mailto:przemyslaw.smyczyk@proton.me" target="_blank"  className={styles['contact-link']}>
            Email
          </a>
          <a href="https://www.youtube.com/@NiepKiep" target="_blank"  className={styles['contact-link']}>
            Youtube
          </a>
          <a href="https://github.com/lemoland5" target="_blank" className={styles['contact-link']}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
