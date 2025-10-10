'use client'

import { motion } from 'framer-motion'
import { Globe, Award, CheckCircle } from 'lucide-react'

const Languages = () => {
  const languages = [
    {
      name: "Português",
      level: "Nativo",
      proficiency: 100,
      description: "Língua materna - fluência completa em comunicação oral e escrita",
      flag: "🇧🇷",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Inglês", 
      level: "C2 Proficient",
      proficiency: 74,
      description: "EF SET Certificate 74/100 - Nível mais alto de proficiência. Capacidade de compreender e se expressar com precisão e fluência",
      flag: "🇺🇸",
      color: "from-blue-500 to-blue-600",
      certificate: "EF SET English Certificate"
    },
    {
      name: "Espanhol",
      level: "Proficiente", 
      proficiency: 80,
      description: "Fluência em comunicação oral e escrita para contextos profissionais e pessoais",
      flag: "🇪🇸",
      color: "from-yellow-500 to-yellow-600"
    }
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
          <h2 className="section-title text-gradient">Idiomas</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Competências linguísticas que facilitam a comunicação global e colaboração internacional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{language.flag}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{language.name}</h3>
                  <p className="text-blue-400 font-medium">{language.level}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiência</span>
                  <span className="text-sm font-medium text-white">{language.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${language.color}`}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4">
                {language.description}
              </p>

              {/* Certificate */}
              {language.certificate && (
                <div className="flex items-center gap-2 p-3 bg-gray-700 rounded-lg">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-300">{language.certificate}</span>
                </div>
              )}

              {/* Native indicator */}
              {language.level === "Nativo" && (
                <div className="flex items-center gap-2 p-3 bg-green-900/30 border border-green-500/30 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Língua Nativa</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Comunicação Global</h3>
            </div>
            <p className="text-gray-400">
              Com proficiência em múltiplos idiomas, posso colaborar efetivamente em projetos internacionais, 
              participar de reuniões globais e contribuir para equipes distribuídas em diferentes países.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Languages
