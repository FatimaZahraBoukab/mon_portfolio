// src/app/contact/page.js
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    if (res.ok) {
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <div>
      <h1>Contactez-moi</h1>
      {success && <p>Message envoyé avec succès !</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nom" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}
