'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Code2, Users, Heart } from 'lucide-react'

export function Skills() {
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programación',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'HTML & CSS', level: 80 },
        { name: 'Git & GitHub', level: 75 },
      ],
    },
    {
      icon: Users,
      title: 'Liderazgo',
      skills: [
        { name: 'Gestión de Equipos', level: 80 },
        { name: 'Comunicación', level: 85 },
        { name: 'Toma de Decisiones', level: 75 },
        { name: 'Resolución de Problemas', level: 82 },
      ],
    },
    {
      icon: Heart,
      title: 'Compañerismo',
      skills: [
        { name: 'Trabajo en Equipo', level: 90 },
        { name: 'Empatía', level: 85 },
        { name: 'Colaboración', level: 88 },
        { name: 'Apoyo Mutuo', level: 87 },
      ],
    },
  ]

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Habilidades</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Habilidades técnicas y personales que aplico en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-accent rounded-full overflow-hidden group-hover/skill:h-3 transition-all duration-200">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover/skill:bg-gradient-to-r group-hover/skill:from-primary group-hover/skill:to-primary/60"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
