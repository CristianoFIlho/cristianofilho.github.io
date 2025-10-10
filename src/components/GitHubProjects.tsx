'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react'

const GitHubProjects = () => {
  const featuredProjects = [
    {
      name: "Math.Pow",
      description: "Contando e aprendendo com você! 🦑 - Plataforma educacional para matemática",
      url: "https://mathpow.vercel.app",
      githubUrl: "https://github.com/CristianoFIlho/mathpow.vercel.app",
      tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      stars: 15,
      forks: 8,
      language: "TypeScript",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Projeto Simulados Salesforce",
      description: "Tests - Certification Salesforce and Mulesoft - Plataforma de simulados para certificações",
      url: "https://projeto-simulados-salesforce.vercel.app",
      githubUrl: "https://github.com/CristianoFIlho/projeto-simulados-salesforce.vercel.app",
      tech: ["TypeScript", "Next.js", "Salesforce", "MuleSoft"],
      stars: 23,
      forks: 12,
      language: "TypeScript",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "OF Projetos Portfolio",
      description: "Portfolio da empresa OF Projetos - Site institucional moderno",
      url: "https://ofprojetos.com.br",
      githubUrl: "https://github.com/OF-Projetos/ofprojetos.com.br",
      tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      stars: 8,
      forks: 3,
      language: "TypeScript",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Lokvan",
      description: "Lockvan-tur - Sistema de gestão de turismo",
      url: "https://lokvan.net.br",
      githubUrl: "https://github.com/CristianoFIlho/lokvan.net.br",
      tech: ["TypeScript", "Next.js", "React", "Node.js"],
      stars: 12,
      forks: 5,
      language: "TypeScript",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "SF SeatTracker",
      description: "SF SeatTracker - Sistema de gestão de assentos no cinema",
      url: "https://github.com/CristianoFIlho/SF-SeatTracker",
      githubUrl: "https://github.com/CristianoFIlho/SF-SeatTracker",
      tech: ["Apex", "Salesforce", "Lightning Web Components", "SOQL"],
      stars: 18,
      forks: 7,
      language: "Apex",
      color: "from-cyan-500 to-cyan-600"
    }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.url !== project.githubUrl && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
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
