'use client'

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Brain, Code2, Database, Cpu, BarChart3, Layers } from 'lucide-react'

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
      icon: Brain,
      title: 'Machine Learning',
      skills: [
        { name: 'Redes Neuronales', level: 70 },
        { name: 'Deep Learning', level: 65 },
        { name: 'TensorFlow', level: 60 },
        { name: 'PyTorch', level: 55 },
      ],
    },
    {
      icon: Code2,
      title: 'Programación',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'React', level: 60 },
      ],
    },
    {
      icon: Database,
      title: 'Data Science',
      skills: [
        { name: 'NumPy & Pandas', level: 75 },
        { name: 'Data Processing', level: 70 },
        { name: 'SQL', level: 65 },
        { name: 'Jupyter Notebooks', level: 80 },
      ],
    },
    {
      icon: Cpu,
      title: 'IA & Modelos',
      skills: [
        { name: 'CNNs', level: 60 },
        { name: 'RNNs & LSTM', level: 55 },
        { name: 'Transfer Learning', level: 50 },
        { name: 'Model Training', level: 65 },
      ],
    },
    {
      icon: BarChart3,
      title: 'Análisis & Visual.',
      skills: [
        { name: 'Matplotlib', level: 75 },
        { name: 'Seaborn', level: 70 },
        { name: 'Data Visualization', level: 72 },
        { name: 'Statistical Analysis', level: 65 },
      ],
    },
    {
      icon: Layers,
      title: 'Web Dev',
      skills: [
        { name: 'Next.js', level: 65 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'HTML & CSS', level: 75 },
        { name: 'Git & GitHub', level: 80 },
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
            Tecnologías y herramientas que estoy dominando en mi camino hacia la IA
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
