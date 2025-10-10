'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Code } from 'lucide-react'
import { Project as ProjectType } from '@/types'

const projects: ProjectType[] = [
  {
    id: 'simulados-salesforce',
    title: 'Simulados Salesforce',
    description: 'Plataforma completa de preparação para certificações Salesforce e MuleSoft. Sistema moderno com Next.js, API REST, autenticação JWT, analytics integrado e mais de 1000 questões validadas.',
    image: '/images/simulados-project.png',
    url: 'https://projeto-simulados-salesforce.vercel.app/',
    githubUrl: 'https://github.com/CristianoFIlho/projeto-simulados-salesforce.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Vercel'],
    features: ['1000+ Questões', 'Analytics', 'Dark Mode', 'PWA', 'API REST']
  },
  {
    id: 'lokvan',
    title: 'Lokvan - Sistema de Turismo',
    description: 'Sistema completo de gestão de turismo desenvolvido com Next.js. Plataforma moderna para agências de viagem com funcionalidades de reservas, pagamentos e gestão de clientes.',
    image: '/images/lokvan-project.png',
    url: 'https://lokvan.net.br/',
    githubUrl: 'https://github.com/CristianoFIlho/lokvan.net.br',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: ['Reservas Online', 'Pagamentos', 'Dashboard', 'Multi-idioma', 'Responsivo']
  },
  {
    id: 'of-projetos',
    title: 'OF Projetos - Portfolio Empresarial',
    description: 'Site institucional moderno para empresa de desenvolvimento. Portfolio corporativo com design profissional, seções de serviços, projetos e contato integrado.',
    image: '/images/OFprojeto-project.png',
    url: 'https://ofprojetos.com.br/',
    githubUrl: 'https://github.com/OF-Projetos/ofprojetos.com.br',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    features: ['Design Moderno', 'Animações', 'SEO Otimizado', 'Performance', 'Responsivo']
  },
  {
    id: 'sf-seattracker',
    title: 'SF SeatTracker - Cinema',
    description: 'Sistema de gestão de assentos para cinemas desenvolvido em Salesforce. Aplicação nativa com Apex, Lightning Web Components e integração com sistemas de pagamento.',
    image: '/images/sfseattracker-project.png',
    url: 'https://github.com/CristianoFIlho/SF-SeatTracker',
    githubUrl: 'https://github.com/CristianoFIlho/SF-SeatTracker',
    technologies: ['Salesforce', 'Apex', 'LWC', 'SOQL', 'Lightning', 'JavaScript'],
    features: ['Gestão de Assentos', 'Reservas', 'Relatórios', 'Integração', 'Mobile']
  },
  {
    id: 'math-pow',
    title: 'Math.Pow - Calculadora Científica',
    description: 'Calculadora científica avançada com interface moderna. Aplicação educacional para matemática com funcionalidades completas de cálculos complexos e histórico de operações.',
    image: '/images/math-pow-project.png',
    url: 'https://mathpow.vercel.app/',
    githubUrl: 'https://github.com/CristianoFIlho/mathpow.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Math.js', 'Vercel'],
    features: ['Cálculos Complexos', 'Histórico', 'Interface Moderna', 'Educacional', 'PWA']
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full">
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
                      title="Ver Projeto"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        title="Ver Código"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  {project.features && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs border border-blue-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
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
                  <div className="flex gap-4 pt-4 mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 flex-1 justify-center"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
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
          <h3 className="text-2xl font-bold text-center mb-12 text-gradient">Especialidades Técnicas</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☁️', title: 'Salesforce Development', description: 'Apex, LWC, Flow, Triggers' },
              { icon: '🔗', title: 'MuleSoft Integration', description: 'APIs, DataWeave, Anypoint' },
              { icon: '💻', title: 'Full Stack Development', description: 'Next.js, TypeScript, Node.js' },
              { icon: '🎨', title: 'UI/UX Design', description: 'Modern interfaces, responsive design' }
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
