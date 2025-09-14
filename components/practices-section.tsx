import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sword, Shield, Target, Clock } from "lucide-react"

const practices = [
  {
    icon: Sword,
    title: "Esgrima Histórica",
    description: "Técnicas de espada larga, espada y escudo, y otras armas medievales basadas en tratados históricos.",
    schedule: "Martes y Jueves 19:00-21:00",
  },
  {
    icon: Shield,
    title: "Combate con Armadura",
    description:
      "Entrenamiento en combate completo con armadura medieval, incluyendo técnicas de lucha cuerpo a cuerpo.",
    schedule: "Sábados 16:00-18:00",
  },
  {
    icon: Target,
    title: "Precisión y Técnica",
    description: "Desarrollo de habilidades específicas, trabajo de precisión y perfeccionamiento de movimientos.",
    schedule: "Lunes y Miércoles 18:00-20:00",
  },
  {
    icon: Clock,
    title: "Acondicionamiento",
    description: "Preparación física específica para el combate medieval, fortalecimiento y resistencia.",
    schedule: "Viernes 19:00-20:30",
  },
]

export function PracticesSection() {
  return (
    <section id="practices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestras Prácticas</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ofrecemos entrenamientos especializados en diferentes aspectos del combate medieval, desde técnicas básicas
            hasta combate avanzado con armadura completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practices.map((practice, index) => {
            const IconComponent = practice.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-accent transition-colors group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="font-medieval text-xl text-card-foreground">{practice.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{practice.description}</p>
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-sm font-semibold text-accent">{practice.schedule}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-secondary border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-medieval text-2xl font-bold text-secondary-foreground mb-4">
                ¿Interesado en Unirte?
              </h3>
              <p className="text-muted-foreground mb-6">
                Ofrecemos clases de introducción para principiantes. No se requiere experiencia previa, solo ganas de
                aprender y dedicación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-semibold text-accent">Clase de Prueba Gratuita</p>
                  <p className="text-sm text-muted-foreground">Todos los sábados 14:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
