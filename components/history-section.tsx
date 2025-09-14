import { Card, CardContent } from "@/components/ui/card"
import { Shield, Swords, Users } from "lucide-react"

export function HistorySection() {
  return (
    <section id="history" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl md:text-5xl font-bold text-card-foreground mb-6">Nuestra Historia</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder-rsg78.png"
              alt="Estandarte de Colmillo de Lobo"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-card-foreground leading-relaxed">
              <strong className="text-accent">Colmillo de Lobo</strong> nació de la pasión por preservar y practicar las
              artes marciales históricas europeas. Nuestro equipo se dedica al estudio y la práctica del combate
              medieval, honrando las tradiciones guerreras de nuestros ancestros.
            </p>

            <p className="text-lg text-card-foreground leading-relaxed">
              Fundado por un grupo de entusiastas de la historia medieval, hemos crecido hasta convertirnos en una
              comunidad unida por el respeto, la disciplina y la búsqueda constante de la excelencia en el arte del
              combate histórico.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-secondary border-border">
                <CardContent className="p-6 text-center">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-medieval font-semibold text-secondary-foreground">Honor</h3>
                </CardContent>
              </Card>

              <Card className="bg-secondary border-border">
                <CardContent className="p-6 text-center">
                  <Swords className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-medieval font-semibold text-secondary-foreground">Disciplina</h3>
                </CardContent>
              </Card>

              <Card className="bg-secondary border-border">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-medieval font-semibold text-secondary-foreground">Hermandad</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
