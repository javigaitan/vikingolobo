"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("¡Mensaje enviado! Te contactaremos pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl md:text-5xl font-bold text-card-foreground mb-6">Contacto</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            ¿Listo para comenzar tu camino como guerrero medieval? Contáctanos y únete a nuestra hermandad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-secondary border-border">
            <CardHeader>
              <CardTitle className="font-medieval text-2xl text-secondary-foreground">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border text-foreground min-h-[120px]"
                    placeholder="Cuéntanos sobre tu interés en el combate medieval..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">Síguenos para ver nuestros entrenamientos</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <a href="https://www.instagram.com/colmillo.de.lobo/" target="_blank" rel="noopener noreferrer">
                    @colmillo.de.lobo
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">Para consultas generales</p>
                  </div>
                </div>
                <p className="text-accent font-mono">contacto@colmillodelobo.com</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">Para información inmediata</p>
                  </div>
                </div>
                <p className="text-accent font-mono">+34 XXX XXX XXX</p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-medieval text-xl font-bold text-foreground mb-2">¿Primera Vez?</h3>
                <p className="text-muted-foreground mb-4">
                  Ven a conocernos cualquier sábado a las 14:00 para una clase de prueba gratuita.
                </p>
                <p className="text-sm text-accent font-semibold">No necesitas experiencia previa ni equipo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
