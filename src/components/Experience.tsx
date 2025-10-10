'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { Experience as ExperienceType } from '@/types'

const experiences: ExperienceType[] = [
  {
    id: 'current',
    company: 'Empresa Atual',
    position: 'Consultor de Soluções Digitais II',
    period: '2022 - Atual',
    description: 'Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações MuleSoft, com 3 anos de experiência em implementações B2B. Atuo na criação de soluções personalizadas nas plataformas Sales Cloud e Service Cloud.',
    technologies: ['Salesforce', 'MuleSoft', 'Apex', 'Lightning', 'SOQL', 'REST API']
  },
  {
    id: 'previous',
    company: 'Projetos Freelance',
    position: 'Desenvolvedor Full Stack',
    period: '2021 - 2022',
    description: 'Desenvolvimento de sites personalizados, otimizações de SEO, criação de ChatBots personalizados e suporte técnico para pequenas e médias empresas.',
    technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'MongoDB']
  },
  {
    id: 'education',
    company: 'Universidade',
    position: 'Bacharel em Engenharia de Software',
    period: '2018 - 2022',
    description: 'Formação completa em Engenharia de Software com foco em desenvolvimento de sistemas, arquitetura de software e metodologias ágeis.',
    technologies: ['Java', 'Python', 'SQL', 'Algoritmos', 'Estrutura de Dados', 'Engenharia de Software']
  }
]

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">Experiência Profissional</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minha jornada profissional em desenvolvimento de software e soluções digitais
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {experience.position}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1 text-blue-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
