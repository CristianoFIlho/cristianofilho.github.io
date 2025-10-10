'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, Star, Target } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Data Cloud Specialist",
      issuer: "Salesforce",
      year: "2025",
      description: "Certificação especializada em Salesforce Data Cloud para gerenciamento e análise de dados unificados",
      badge: "☁️",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      year: "2025",
      description: "Certificação em desenvolvimento de aplicações na plataforma Salesforce usando Apex e Lightning Web Components",
      badge: "🏆",
      color: "from-blue-500 to-blue-600"
    }
  ]

  const trailheadBadges = [
    { name: "Apex Basics & Database", points: 500, badge: "🥇" },
    { name: "Lightning Web Components", points: 400, badge: "⚡" },
    { name: "MuleSoft Integration", points: 600, badge: "🔗" },
    { name: "Salesforce Security", points: 350, badge: "🔒" },
    { name: "Data Modeling", points: 450, badge: "📊" },
    { name: "Process Automation", points: 300, badge: "🤖" }
  ]

  const achievements = [
    { title: "Pair Extraordinaire", description: "GitHub Achievement", icon: "👥" },
    { title: "Pull Shark x2", description: "GitHub Achievement", icon: "🦈" },
    { title: "YOLO", description: "GitHub Achievement", icon: "🚀" },
    { title: "Quickdraw", description: "GitHub Achievement", icon: "⚡" },
    { title: "Public Sponsor", description: "GitHub Achievement", icon: "💝" },
    { title: "Arctic Code Vault Contributor", description: "GitHub Achievement", icon: "❄️" }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-gradient">Certificações & Conquistas</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Credenciais profissionais e reconhecimentos que demonstram minha expertise em Salesforce e MuleSoft
          </p>
        </motion.div>

        {/* Certificações Principais */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-blue-400" />
            Certificações Profissionais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.badge}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </div>
                </div>
                <div className={`mt-4 h-1 bg-gradient-to-r ${cert.color} rounded-full`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trailhead Badges */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200 flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Trailhead Badges
            <a 
              href="https://www.salesforce.com/trailblazer/cristiano-filho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trailheadBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors group"
              >
                <div className="text-2xl mb-2">{badge.badge}</div>
                <h4 className="text-sm font-medium text-white mb-1">{badge.name}</h4>
                <p className="text-xs text-gray-400">{badge.points} pontos</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Achievements */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-center text-gray-200 flex items-center justify-center gap-2">
            <Target className="w-6 h-6 text-green-400" />
            GitHub Achievements
            <a 
              href="https://github.com/CristianoFIlho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors group"
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <h4 className="text-sm font-medium text-white mb-1">{achievement.title}</h4>
                <p className="text-xs text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links para Perfis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Acesse meus perfis profissionais:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.salesforce.com/trailblazer/cristiano-filho"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Trailhead Profile
            </a>
            <a
              href="https://github.com/CristianoFIlho"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/cristiano-filho/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
