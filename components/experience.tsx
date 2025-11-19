'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { BookOpen, GraduationCap, Award, Lightbulb } from 'lucide-react'

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
      type: 'learning',
      icon: Lightbulb,
      title: 'Proyectos de IA Práctica',
      company: 'Aprendizaje Autodidacta',
      period: '2023 - Presente',
      description:
        'Desarrollando proyectos prácticos de machine learning y deep learning para aplicar conocimientos teóricos en casos reales.',
      achievements: [
        'Implementé CNNs para clasificación de imágenes',
        'Entrenamiento de modelos con TensorFlow y PyTorch',
        'Experimentación con diferentes arquitecturas neuronales',
      ],
    },
    {
      type: 'course',
      icon: BookOpen,
      title: 'Especialización en Deep Learning',
      company: 'Cursos Online & Certificaciones',
      period: '2022 - 2023',
      description:
        'Estudio intensivo de redes neuronales, deep learning y algoritmos de machine learning a través de cursos especializados.',
      achievements: [
        'Completé cursos de Andrew Ng en Coursera',
        'Aprendí arquitecturas CNN, RNN y LSTM',
        'Práctica con datasets reales (MNIST, CIFAR-10)',
      ],
    },
    {
      type: 'learning',
      icon: Award,
      title: 'Desarrollo Web Moderno',
      company: 'Formación Autodidacta',
      period: '2021 - 2022',
      description:
        'Aprendiendo tecnologías web modernas para crear aplicaciones interactivas y visualizar resultados de modelos de IA.',
      achievements: [
        'Dominio de React y Next.js',
        'Creación de dashboards para visualización de datos',
        'Integración de modelos de ML con aplicaciones web',
      ],
    },
  ]

  const education = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Estudiante de Ingeniería',
      company: 'Universidad',
      period: '2020 - Presente',
      description:
        'Formación en fundamentos de programación, matemáticas y ciencias de la computación con enfoque en inteligencia artificial.',
      achievements: [
        'Matemáticas para IA: Álgebra lineal y cálculo',
        'Estructuras de datos y algoritmos',
        'Participación en proyectos de investigación en ML',
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
            Formación continua en inteligencia artificial y desarrollo de software
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
