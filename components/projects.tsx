'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('todos')
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

  const projects = [
    {
      title: 'Clasificador de Imágenes',
      category: 'ia',
      description:
        'Red neuronal convolucional entrenada para clasificar imágenes en múltiples categorías con más de 85% de precisión.',
      image: '/neural-network-image-classification.jpg',
      tags: ['Python', 'TensorFlow', 'CNN', 'Keras'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Análisis de Sentimientos',
      category: 'ia',
      description:
        'Modelo de NLP para analizar sentimientos en textos usando redes LSTM y procesamiento de lenguaje natural.',
      image: '/sentiment-analysis-nlp.jpg',
      tags: ['Python', 'PyTorch', 'LSTM', 'NLP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Dashboard de Visualización',
      category: 'web',
      description:
        'Aplicación web interactiva para visualizar métricas de modelos de ML y resultados de entrenamiento en tiempo real.',
      image: '/data-visualization-dashboard.png',
      tags: ['React', 'Next.js', 'D3.js', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Predictor de Series',
      category: 'ia',
      description:
        'Modelo de deep learning para predicción de series temporales usando arquitecturas RNN y LSTM avanzadas.',
      image: '/time-series-prediction.jpg',
      tags: ['Python', 'TensorFlow', 'RNN', 'Time Series'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Portafolio Personal',
      category: 'web',
      description:
        'Sitio web personal desarrollado con Next.js y Tailwind CSS, con animaciones interactivas y modo oscuro.',
      image: '/modern-portfolio-website.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Preprocesador de Datos',
      category: 'data',
      description:
        'Pipeline automatizado para limpieza, transformación y preparación de datasets para entrenamiento de modelos.',
      image: '/data-preprocessing-pipeline.jpg',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'ia', label: 'IA & ML' },
    { id: 'web', label: 'Web' },
    { id: 'data', label: 'Data Science' },
  ]

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Proyectos</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explorando IA, machine learning y desarrollo web a través de proyectos prácticos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              className="transition-all duration-300 hover:scale-105"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-3 pb-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
