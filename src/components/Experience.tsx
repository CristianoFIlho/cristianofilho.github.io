'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react'
import { Experience as ExperienceType } from '@/types'

const experiences: ExperienceType[] = [
  {
    id: 'enel',
    company: 'Enel Brasil',
    position: 'Desenvolvedor Salesforce - Service Cloud',
    period: 'Mar 2025 - Atual',
    description: 'Projeto de grande escala de sustentação e aprimoramento na Salesforce Service Cloud, setor de energia. Expertise em Apex, Visualforce, LWC, HTML/CSS, JavaScript e SQL. Desenvolvimento funcional com objetos customizados, regras de validação, Process Builder, Flow e componentes Lightning.',
    technologies: ['Apex', 'Visualforce', 'LWC', 'Service Cloud', 'Flow', 'Process Builder', 'Git', 'VSCode'],
    website: 'https://www.enel.com.br/pt.html'
  },
  {
    id: 'bradesco-banking',
    company: 'Bradesco Banking',
    position: 'Desenvolvedor Salesforce - Sales Cloud',
    period: 'Jun 2024 - Fev 2025',
    description: 'Especialização em Sales Cloud combinando desenvolvimento e administração. Desenvolvimento de interfaces modernas com LWC, automações com Apex Triggers, Flow Triggers e Procedures. Soluções personalizadas com OmniStudio. Gerenciamento de código com Git e Bitbucket.',
    technologies: ['Apex Trigger', 'Procedures', 'Flow Triggers', 'OmniStudio', 'Sales Cloud', 'Git', 'Bamboo', 'Bitbucket', 'LWC'],
    website: 'https://banco.bradesco/'
  },
  {
    id: 'volkswagen',
    company: 'Volkswagen',
    position: 'Desenvolvedor Salesforce - Sales Cloud',
    period: 'Jun 2024 - Fev 2025',
    description: 'Especializado em Sales Cloud com foco em LWC e Apex. Desenvolvimento de componentes Lightning Web Components para interfaces modernas, códigos Apex para lógica de negócios, automações de processos de vendas e integrações via APIs REST e SOAP.',
    technologies: ['Flow', 'SOQL', 'SOSL', 'LWC', 'Apex', 'Salesforce CLI', 'VSCode', 'REST API', 'SOAP'],
    website: 'https://ofertas.vw.com.br/'
  },
  {
    id: 'bradesco-seguros',
    company: 'Bradesco Seguros',
    position: 'Desenvolvedor MuleSoft',
    period: 'Fev 2024 - Jun 2024',
    description: 'Trabalho com MuleSoft Anypoint Platform, Scrum e criação de APIs e integrações. Colaboração remota essencial para o sucesso dos projetos, entregando cases de sucesso ao cliente.',
    technologies: ['MuleSoft', 'Anypoint Studio', 'DataWeave', 'Anypoint Exchange', 'Postman', 'Mule Runtime Engine', 'Scrum'],
    website: 'https://bradescoseguros.com'
  },
  {
    id: 'veste',
    company: 'Veste',
    position: 'Administrador Salesforce',
    period: 'Jun 2023 - Jan 2024',
    description: 'Administrador Salesforce responsável por gerenciar e otimizar a plataforma de atendimento ao cliente. Configurações técnicas como automações, regras de workflow, layouts personalizados e integrações multicanal. Gerenciamento de usuários, relatórios e dashboards.',
    technologies: ['Service Cloud', 'Azure Boards', 'Workflow', 'Reports', 'Dashboards', 'User Management'],
    website: 'https://veste.com/'
  },
  {
    id: 'irmaos-goncalves',
    company: 'Irmãos Gonçalves e Jaú Serve',
    position: 'Desenvolvedor Salesforce - Service Cloud',
    period: 'Jun 2022 - Oct 2022',
    description: 'Ênfase na nuvem Service Cloud da Salesforce. Desenvolvimento de habilidades em Apex Programming, Visual Pages, Microsoft Visual Studio Code e outras áreas relevantes.',
    technologies: ['Service Cloud', 'Apex', 'Visualforce', 'VSCode', 'Flow', 'Jira'],
    website: 'https://irmaosgoncalves.com.br/'
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
                        {experience.website && (
                          <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
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
