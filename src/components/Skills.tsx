'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Skill } from '@/types'

const skills: Skill[] = [
  {
    name: 'React',
    icon: '⚛️',
    color: 'hover:text-cyan-400',
    url: 'https://react.dev/'
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    color: 'hover:text-blue-400',
    url: 'https://www.typescriptlang.org/'
  },
  {
    name: 'JavaScript',
    icon: '🟨',
    color: 'hover:text-yellow-400',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: 'hover:text-green-400',
    url: 'https://nodejs.org/'
  },
  {
    name: 'Salesforce',
    icon: '☁️',
    color: 'hover:text-blue-300',
    url: 'https://www.salesforce.com/'
  },
  {
    name: 'MuleSoft',
    icon: '🔗',
    color: 'hover:text-purple-400',
    url: 'https://www.mulesoft.com/'
  },
  {
    name: 'CSS',
    icon: '🎨',
    color: 'hover:text-pink-400',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
  {
    name: 'HTML',
    icon: '🌐',
    color: 'hover:text-orange-400',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
  },
  {
    name: 'GitHub',
    icon: '🐙',
    color: 'hover:text-gray-300',
    url: 'https://github.com/'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    color: 'hover:text-green-300',
    url: 'https://www.mongodb.com/'
  },
  {
    name: 'Apex',
    icon: '⚡',
    color: 'hover:text-blue-500',
    url: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/'
  },
  {
    name: 'SOQL',
    icon: '🔍',
    color: 'hover:text-indigo-400',
    url: 'https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/'
  }
]

export default function Skills() {
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
          <h2 className="section-title text-gradient">Minhas Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções digitais inovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group"
            >
              <div className="card text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className={`font-semibold text-white group-hover:${skill.color} transition-colors duration-300`}>
                  {skill.name}
                </h3>
                <ExternalLink className="w-4 h-4 mx-auto mt-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
            <div className="space-y-2">
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">TypeScript</span>
              </div>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">HTML</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
            <div className="space-y-2">
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">REST API</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">SOQL</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Salesforce</h3>
            <div className="space-y-2">
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Apex</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Lightning</span>
              </div>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">MuleSoft</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Sales Cloud</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
