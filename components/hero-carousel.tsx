"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/medieval-warriors-training-with-swords-in-armor.jpg",
    alt: "Entrenamiento medieval con espadas",
    title: "Colmillo de Lobo",
    subtitle: "Equipo de Combate Medieval",
  },
  {
    src: "/medieval-combat-demonstration-with-shields-and-wea.jpg",
    alt: "Demostración de combate medieval",
    title: "Tradición Guerrera",
    subtitle: "Preservando las artes marciales históricas",
  },
  {
    src: "/medieval-knights-in-full-armor-sparring.jpg",
    alt: "Caballeros medievales en combate",
    title: "Honor y Disciplina",
    subtitle: "Forjando guerreros modernos con técnicas ancestrales",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-4xl px-4">
          <h1 className="font-medieval text-5xl md:text-7xl font-bold text-white mb-4 text-balance">
            {carouselImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">{carouselImages[currentSlide].subtitle}</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
            onClick={() => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conoce Nuestra Historia
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-accent" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
