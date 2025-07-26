// src/app/api/contact/route.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  const body = await request.json()
  const { name, email, message } = body

  const newMessage = await prisma.contact.create({
    data: { name, email, message }
  })

  return Response.json(newMessage)
}
