'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'

const GitHubProjects = () => {
  const featuredProjects = [
    {
      name: "SuperBadge LWC",
      description: "Lightning Web Components Specialist Superbadge - Projeto completo com Apex, JavaScript e HTML para certificação Salesforce",
      url: "https://github.com/CristianoFIlho/SuperBadge-LWC",
      githubUrl: "https://github.com/CristianoFIlho/SuperBadge-LWC",
      tech: ["Apex", "JavaScript", "HTML", "Lightning Web Components", "Salesforce"],
      stars: 7,
      forks: 24,
      language: "Apex",
      color: "from-blue-500 to-blue-600",
      featured: true
    },
    {
      name: "Recursos Gratuitos",
      description: "Coleção de recursos gratuitos para desenvolvedores - Ferramentas, cursos e materiais de estudo",
      url: "https://github.com/CristianoFIlho/recursos-gratuitos",
      githubUrl: "https://github.com/CristianoFIlho/recursos-gratuitos",
      tech: ["Markdown", "Documentation", "Resources", "Learning"],
      stars: 5,
      forks: 0,
      language: "Markdown",
      color: "from-green-500 to-green-600",
      featured: true
    },
    {
      name: "Portfolio GitHub Pages",
      description: "Portfolio pessoal hospedado no GitHub Pages - Site estático moderno e responsivo",
      url: "https://github.com/CristianoFIlho/cristianofilho.github.io1",
      githubUrl: "https://github.com/CristianoFIlho/cristianofilho.github.io1",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      stars: 3,
      forks: 0,
      language: "HTML",
      color: "from-purple-500 to-purple-600",
      featured: true
    },
    {
      name: "DataWeave Series",
      description: "Série de práticas e entrevistas com DataWeave - Exercícios para certificação MuleSoft",
      url: "https://github.com/CristianoFIlho/Dataweave-Series-for-Practice-Interview",
      githubUrl: "https://github.com/CristianoFIlho/Dataweave-Series-for-Practice-Interview",
      tech: ["DataWeave", "MuleSoft", "JSON", "XML", "Practice"],
      stars: 2,
      forks: 0,
      language: "DataWeave",
      color: "from-cyan-500 to-cyan-600",
      featured: true
    },
  ]

  const stats = {
    totalRepos: 143,
    totalStars: 568,
    totalFollowers: 295,
    totalFollowing: 54
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">Projetos GitHub</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meus principais projetos open source e contribuições para a comunidade de desenvolvedores
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{stats.totalRepos}</div>
            <div className="text-gray-400">Repositórios</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.totalStars}</div>
            <div className="text-gray-400">Stars</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.totalFollowers}</div>
            <div className="text-gray-400">Seguidores</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{stats.totalFollowing}</div>
            <div className="text-gray-400">Seguindo</div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {/* Top Starred Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Projetos Mais Populares
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-6 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                    ⭐ {project.stars} stars
                  </div>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 pr-16">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="font-medium">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span>{project.language}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 flex-1 justify-center text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Ver Código
                    </a>
                    {project.url !== project.githubUrl && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2 flex-1 justify-center text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </a>
                    )}
                  </div>

                  {/* Gradient Border */}
                  <div className={`mt-4 h-1 bg-gradient-to-r ${project.color} rounded-full`}></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span>{project.language}</span>
                    </div>
                  </div>

                  {/* Gradient Border */}
                  <div className={`mt-4 h-1 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Quer ver mais projetos? Explore meu perfil completo no GitHub
          </p>
          <a
            href="https://github.com/CristianoFIlho"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Ver Todos os Projetos
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubProjects
