"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="Colmillo de Lobo" width={50} height={50} className="rounded-full" />
            <div>
              <h1 className="font-medieval text-xl font-bold text-foreground">Colmillo de Lobo</h1>
              <p className="text-sm text-muted-foreground">Medieval Combat Team</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Historia
            </button>
            <button
              onClick={() => scrollToSection("practices")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Prácticas
            </button>
            <button
              onClick={() => scrollToSection("members")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Miembros
            </button>
            <button
              onClick={() => scrollToSection("space")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Espacio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <a
                href="https://www.instagram.com/colmillo.de.lobo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("history")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Historia
              </button>
              <button
                onClick={() => scrollToSection("practices")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Prácticas
              </button>
              <button
                onClick={() => scrollToSection("members")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Miembros
              </button>
              <button
                onClick={() => scrollToSection("space")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Espacio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Contacto
              </button>
              <a
                href="https://www.instagram.com/colmillo.de.lobo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
