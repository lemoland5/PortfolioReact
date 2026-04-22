import { useState } from 'react'
import './Contact.css'

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
    <section id="contact" className="section contact-section">
      <h2>Kontakt</h2>
      <div className="contact-container">
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          
          <div className="form-group">
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
          
          <div className="form-group">
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
          
          <button type="submit" className="submit-btn">Wyślij wiadomość</button>
        </form>
        
        <div className="contact-links">
          <a href="mailto:przemyslaw.smyczyk@proton.me" className="contact-link">
            Email
          </a>
          <a href="#" className="contact-link">
            Youtube
          </a>
          <a href="#" className="contact-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
