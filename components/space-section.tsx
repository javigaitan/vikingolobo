import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, ExternalLink } from "lucide-react"

export function SpaceSection() {
  return (
    <section id="space" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestro Espacio de Entrenamiento
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder-6kicq.png"
              alt="Espacio Valhalla - Sala de entrenamiento"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medieval text-3xl font-bold text-foreground mb-4">Espacio Valhalla</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nuestro hogar de entrenamiento es <strong className="text-accent">Espacio Valhalla</strong>, un lugar
                especialmente diseñado para la práctica de artes marciales históricas. Equipado con todo lo necesario
                para un entrenamiento seguro y efectivo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-card-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-lg">Ubicación</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Centro de la ciudad, fácil acceso en transporte público</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-card-foreground">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-lg">Horarios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lunes a Sábado
                    <br />
                    14:00 - 22:00
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-card-foreground">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-lg">Capacidad</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hasta 20 personas simultáneamente</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-card-foreground">
                    <ExternalLink className="w-5 h-5 text-accent" />
                    <span className="text-lg">Más Info</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full bg-transparent"
                  >
                    <a href="https://www.instagram.com/p/DNju8qwJGHB/" target="_blank" rel="noopener noreferrer">
                      Ver en Instagram
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-lg p-6">
              <h4 className="font-medieval text-xl font-semibold text-secondary-foreground mb-3">
                Instalaciones Disponibles
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Área de combate con suelo acolchado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Armería completa con armas de entrenamiento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Vestuarios y duchas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Área de descanso y hidratación</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Equipo de protección disponible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
