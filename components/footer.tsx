"use client"

import { Instagram, Mail, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-medieval text-xl font-bold text-secondary-foreground">Colmillo de Lobo</h3>
                <p className="text-sm text-muted-foreground">Medieval Combat Team</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Preservando las tradiciones del combate medieval a través del entrenamiento, la disciplina y la hermandad.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medieval text-lg font-semibold text-secondary-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Nuestra Historia
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("practices")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Prácticas
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("members")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Miembros
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("space")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Espacio de Entrenamiento
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-medieval text-lg font-semibold text-secondary-foreground">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/colmillo.de.lobo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@colmillo.de.lobo</span>
              </a>
              <a
                href="mailto:contacto@colmillodelobo.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contacto@colmillodelobo.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Colmillo de Lobo. Todos los derechos reservados.</p>
          <p className="text-sm text-muted-foreground mt-2">Forjando guerreros con honor, disciplina y hermandad.</p>
        </div>
      </div>
    </footer>
  )
}
