'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { BookOpen, GraduationCap, Award, Lightbulb, Briefcase } from 'lucide-react'

export function Experience() {
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

  const experiences = [
    {
      type: 'internship',
      icon: Briefcase,
      title: 'Prácticas Profesionales',
      company: 'Azure Technologies',
      period: '2024',
      description:
        'Prácticas profesionales donde desarrollé experiencia práctica en desarrollo web, gestión de bases de datos, administración de servidores y tecnologías de inteligencia artificial.',
      achievements: [
        'Desarrollo de sitios web con tecnologías modernas',
        'Trabajo con bases de datos SQL y NoSQL',
        'Administración y configuración de servidores',
        'Implementación de soluciones con IA',
      ],
    },
  ]

  const education = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Estudiante de Ingeniería de Software',
      company: 'Universidad Uniempresarial',
      period: '2025 - Presente',
      description:
        'Formación en desarrollo de software, programación y tecnologías modernas.',
      achievements: [
        'Fundamentos de programación',
        'Desarrollo web y aplicaciones',
        'Aprendizaje continuo en nuevas tecnologías',
      ],
    },
  ]

  const allItems = [...experiences, ...education]

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mi Camino de Aprendizaje
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiencia práctica en desarrollo y tecnología
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {allItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:flex md:items-center">
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center hover:scale-110 hover:border-primary/80 transition-all duration-300 cursor-pointer group">
                      <item.icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <Card className="p-6 ml-24 md:ml-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-primary font-medium">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 font-medium">{item.period}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <span className="text-primary mt-1 font-bold">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
