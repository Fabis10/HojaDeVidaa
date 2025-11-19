'use client'

import { useEffect, useRef, useState } from 'react'
import { Brain, Code, Palette, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: 'IA & ML',
      description: 'Redes neuronales y modelos',
    },
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Creando aplicaciones',
    },
    {
      icon: Palette,
      title: 'Diseño',
      description: 'Interfaces atractivas',
    },
    {
      icon: Lightbulb,
      title: 'Aprendizaje',
      description: 'Siempre explorando',
    },
  ]

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un apasionado de la tecnología en todas sus formas. Me fascina tanto el 
              desarrollo web y el diseño de interfaces como el emocionante mundo de la 
              inteligencia artificial y el entrenamiento de redes neuronales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actualmente estoy en un proceso de aprendizaje continuo, explorando diferentes 
              áreas de la tecnología. Desde crear páginas web modernas y responsivas hasta 
              experimentar con modelos de machine learning, cada proyecto es una nueva 
              oportunidad para aprender algo nuevo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi objetivo es combinar creatividad y tecnología para construir soluciones 
              innovadoras. Disfruto tanto diseñando una interfaz atractiva como optimizando 
              un modelo de IA. La diversidad de conocimientos me permite abordar proyectos 
              desde múltiples perspectivas.
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
