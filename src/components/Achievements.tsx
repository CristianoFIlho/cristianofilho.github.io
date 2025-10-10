'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { Achievement } from '@/types'

const achievements: Achievement[] = [
  {
    id: 'salesforce',
    company: 'Salesforce',
    title: 'Salesforce Certified',
    description: 'Certificado em desenvolvimento e implementação de soluções Salesforce',
    url: 'https://www.salesforce.com/trailblazer/cristiano-filho',
    logo: '☁️'
  },
  {
    id: 'github',
    company: 'GitHub',
    title: 'Contribuidor Ativo',
    description: 'Desenvolvedor ativo com projetos open source e contribuições na comunidade',
    url: 'https://github.com/CristianoFIlho',
    logo: '🐙'
  },
  {
    id: 'mulesoft',
    company: 'MuleSoft',
    title: 'Especialista em Integrações',
    description: 'Especialista em integrações MuleSoft para soluções B2B',
    url: 'https://www.mulesoft.com/',
    logo: '🔗'
  },
  {
    id: 'react',
    company: 'React',
    title: 'Desenvolvedor React',
    description: 'Experiência em desenvolvimento de aplicações React modernas',
    url: 'https://react.dev/',
    logo: '⚛️'
  },
  {
    id: 'nodejs',
    company: 'Node.js',
    title: 'Backend Developer',
    description: 'Desenvolvimento de APIs e aplicações backend com Node.js',
    url: 'https://nodejs.org/',
    logo: '🟢'
  },
  {
    id: 'typescript',
    company: 'TypeScript',
    title: 'TypeScript Expert',
    description: 'Desenvolvimento de aplicações type-safe com TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: '🔷'
  }
]

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">Conquistas e Certificações</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reconhecimentos e especializações que demonstram minha expertise em tecnologia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{achievement.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {achievement.company}
                    </h3>
                    <Award className="w-5 h-5 text-yellow-500" />
                  </div>
                  
                  <h4 className="text-blue-400 font-medium mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {achievement.description}
                  </p>
                  
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Verificar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
