'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Desarrollador & Entusiasta de IA y Diseño Web'

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full flex items-center gap-2 w-fit">
                <Sparkles className="h-4 w-4 animate-pulse" />
                ¡Hola! Soy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Fabián Martínez
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium h-16 flex items-center">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Apasionado por la tecnología, el desarrollo web y la inteligencia artificial. 
              Me encanta crear proyectos innovadores, diseñar interfaces atractivas y explorar 
              el fascinante mundo del machine learning y las redes neuronales.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection('proyectos')} size="lg" className="group">
                Ver Proyectos
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button onClick={() => scrollToSection('contacto')} variant="outline" size="lg">
                Contactar
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:Fabismartinez867@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoenfoto-jlu6gRorCtaoR77BjCUSMlg2ecYCFn.jpg"
                  alt="Fabián Martínez"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
