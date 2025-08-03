"use client"
import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import "./ContactSection.css"

interface FormData {
  firstName: string
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: t('contact.form.success')
        })
        // Reset form
        setFormData({
          firstName: '',
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: t('contact.form.error')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      {/* Effets de fond */}
      <div className="contact-background">
        {/* Particules animées */}
        <div className="particle particle-1 pulse-animation"></div>
        <div className="particle particle-2 ping-animation"></div>
        <div className="particle particle-3 pulse-animation"></div>
        <div className="particle particle-4 ping-animation"></div>
        <div className="particle particle-5 pulse-animation"></div>
        
        {/* Orbes de fond */}
        <div className="background-orb orb-1"></div>
        <div className="background-orb orb-2"></div>
        <div className="background-orb orb-3"></div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-main-title">
            <span className="title-gradient">
              {language === 'en' ? 'Get in Touch' : 'Contactez -moi'}
            </span>
          </h2>
        
        </div>

        {/* Layout principal */}
        <div className="contact-layout">
          {/* Section gauche - Informations de contact */}
          <div className="contact-info-section">
            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-icon email">
                  <Mail size={24} />
                </div>
                <div className="contact-info-details">
                  <h3>Email</h3>
                  <a href="mailto:fatimazahraboukab(@example.com">
                    fatimazahraboukab9@example.com
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="contact-info-item">
                <div className="contact-icon phone">
                  <Phone size={24} />
                </div>
                <div className="contact-info-details">
                  <h3>Phone</h3>
                  <a href="tel:+212123456789">
                    +212 611955823
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="contact-info-item">
                <div className="contact-icon location">
                  <MapPin size={24} />
                </div>
                <div className="contact-info-details">
                  <h3>Location</h3>
                  <p>Tanger, Maroc</p>
                </div>
              </div>
            </div>

            {/* Liens sociaux */}
            <div className="social-links">
              <a
                href="https://github.com/FatimaZahraBoukab"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href=" https://www.linkedin.com/in/fatima-zahra-boukab-b11210286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Section droite - Formulaire de contact */}
          <div className="contact-form-section">
            
            
            {submitMessage && (
              <div className={`form-message ${submitMessage.type}`}>
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Première ligne - Prénom et Nom */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    {t('contact.form.firstName.label')}
                  </label>
                  <div className="form-input-wrapper">
                    <User className="form-input-icon" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={t('contact.form.firstName.placeholder')}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {t('contact.form.name.label')}
                  </label>
                  <div className="form-input-wrapper">
                    <User className="form-input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder={t('contact.form.name.placeholder')}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t('contact.form.email.label')}
                </label>
                <div className="form-input-wrapper">
                  <Mail className="form-input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t('contact.form.email.placeholder')}
                    required
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {t('contact.form.subject.label')}
                </label>
                <div className="form-input-wrapper">
                  <MessageSquare className="form-input-icon" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t('contact.form.subject.placeholder')}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t('contact.form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder={t('contact.form.message.placeholder')}
                  required
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                <Send size={20} />
                <span>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection