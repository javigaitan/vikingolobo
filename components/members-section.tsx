import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const members = [
  {
    name: 'Rodrigo "El Capitán" Mendoza',
    role: "Fundador y Instructor Principal",
    specialties: ["Espada Larga", "Combate con Armadura", "Tratados Históricos"],
    image: "/placeholder-siti6.png",
    description:
      "Con más de 15 años de experiencia en artes marciales históricas, lidera nuestro equipo con pasión y conocimiento.",
  },
  {
    name: 'Elena "Valkiria" Torres',
    role: "Instructora de Esgrima",
    specialties: ["Espada y Escudo", "Daga", "Técnicas de Precisión"],
    image: "/placeholder-2qytb.png",
    description: "Especialista en técnicas de espada y escudo, aporta elegancia y precisión a cada entrenamiento.",
  },
  {
    name: 'Marco "Forjador" Silva',
    role: "Especialista en Armaduras",
    specialties: ["Combate Pesado", "Mantenimiento de Equipo", "Historia Medieval"],
    image: "/placeholder-53pan.png",
    description:
      "Experto en el uso y mantenimiento de armaduras medievales, garantiza la autenticidad de nuestro equipo.",
  },
  {
    name: 'Ana "Cazadora" Ruiz',
    role: "Instructora de Acondicionamiento",
    specialties: ["Preparación Física", "Agilidad", "Resistencia"],
    image: "/placeholder-e2b9p.png",
    description: "Se encarga de la preparación física del equipo, asegurando que todos estén en óptimas condiciones.",
  },
  {
    name: 'Diego "Escudero" Morales',
    role: "Miembro Veterano",
    specialties: ["Espada Larga", "Combate Grupal", "Mentoría"],
    image: "/placeholder-ti6en.png",
    description: "Veterano del equipo que se dedica a guiar a los nuevos miembros en su camino guerrero.",
  },
  {
    name: 'Carmen "Estratega" López',
    role: "Coordinadora de Eventos",
    specialties: ["Organización", "Logística", "Relaciones Públicas"],
    image: "/placeholder-b8wzu.png",
    description:
      "Organiza nuestras participaciones en eventos y torneos, manteniendo al equipo activo en la comunidad.",
  },
]

export function MembersSection() {
  return (
    <section id="members" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-medieval text-4xl md:text-5xl font-bold text-card-foreground mb-6">Nuestros Guerreros</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conoce a los miembros que forman el corazón de Colmillo de Lobo, cada uno aportando su experiencia y pasión
            al equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="bg-secondary border-border hover:border-accent transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-medieval text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.role}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-secondary-foreground">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-background border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-medieval text-2xl font-bold text-foreground mb-4">Únete a Nuestra Hermandad</h3>
              <p className="text-muted-foreground mb-6">
                Estamos siempre buscando nuevos guerreros que compartan nuestra pasión por las artes marciales
                históricas. Si tienes dedicación y ganas de aprender, hay un lugar para ti en Colmillo de Lobo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
