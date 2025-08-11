import { NextRequest, NextResponse } from 'next/server'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'

// Initialize database
async function initDB() {
  const dbPath = path.join(process.cwd(), 'database.sqlite')
  
  console.log('📁 Chemin de la base de données:', dbPath)
  
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  })

  console.log('🔗 Connexion à la base établie')

  // Create contacts table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      read_status BOOLEAN DEFAULT FALSE
    )
  `)

  console.log('📋 Table contacts créée/vérifiée')

  return db
}

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 API Contact appelée')
    
    const body = await request.json()
    const { name, email, subject, message } = body
    
    console.log('📝 Données reçues:', { name, email, subject, message })

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email invalide' },
        { status: 400 }
      )
    }

    console.log('✅ Validation OK, initialisation DB...')

    // Initialize database and insert contact
    const db = await initDB()
    
    console.log('📊 Base de données initialisée')
    
    const result = await db.run(
      'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    )
    
    console.log('💾 Insertion réussie, ID:', result.lastID)

    await db.close()
    
    console.log('🔒 Connexion fermée')

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        id: result.lastID 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi du message:', error)
    
    // Gestion sécurisée des erreurs TypeScript
    if (error instanceof Error) {
      console.error('Stack trace:', error.stack)
      console.error('Message d\'erreur:', error.message)
    } else {
      console.error('Erreur inconnue:', String(error))
    }
    
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    )
  }
}

