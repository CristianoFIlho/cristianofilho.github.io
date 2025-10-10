'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Code } from 'lucide-react'
import { Project as ProjectType } from '@/types'

const projects: ProjectType[] = [
  {
    id: 'math-pow',
    title: 'Math.Pow',
    description: 'Calculadora científica avançada com interface moderna e funcionalidades completas para cálculos matemáticos complexos.',
    image: '/images/math-pow-project.png',
    url: 'https://mathpow.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Site pessoal moderno e responsivo desenvolvido com Next.js e Tailwind CSS, seguindo as melhores práticas de SEO e performance.',
    image: '/images/cristiano-filho.jpg',
    url: 'https://cristianofilho.github.io',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  }
]

export default function Projects() {
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
          <h2 className="section-title text-gradient">Projetos em Destaque</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e criatividade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="https://github.com/CristianoFIlho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                    <a
                      href="https://github.com/CristianoFIlho"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gradient">Serviços Oferecidos</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💻', title: 'Criação de Sites', description: 'Sites modernos e responsivos' },
              { icon: '🔍', title: 'Otimizações SEO', description: 'Melhore seu ranking no Google' },
              { icon: '🤖', title: 'ChatBots Personalizados', description: 'Automatize o atendimento' },
              { icon: '🛠️', title: 'Suporte e Manutenção', description: 'Manutenção contínua dos sistemas' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
