'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'

const Education = () => {
  const education = {
    degree: "Bacharelado em Engenharia de Software",
    institution: "Universidade Católica de Salvador",
    period: "Jan 2017 – Dec 2024",
    gpa: "7/10 (Matriz curricular)",
    location: "Salvador, Bahia, Brasil",
    coursework: [
      "Fundamentos de Programação",
      "Engenharia de Requisitos", 
      "Metodologias de Desenvolvimento",
      "Testes de Software",
      "Inteligência Artificial e Aprendizado de Máquina",
      "Gestão de Projetos de Software",
      "Desenvolvimento de Aplicações Web e Móveis",
      "Interação Humano-Computador (IHC)",
      "Manutenção de Software",
      "Segurança de Software"
    ]
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
          <h2 className="section-title text-gradient">Formação Acadêmica</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Base sólida em Engenharia de Software com foco em desenvolvimento de sistemas e metodologias ágeis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-xl text-blue-400 mb-3">
                  {education.institution}
                </h4>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>GPA: {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Disciplinas Principais
              </h5>
              <div className="grid md:grid-cols-2 gap-3">
                {education.coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Developed */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h5 className="text-lg font-semibold text-white mb-4">
                Competências Desenvolvidas
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "Análise de Requisitos",
                  "Arquitetura de Software", 
                  "Metodologias Ágeis",
                  "Testes Automatizados",
                  "Desenvolvimento Web",
                  "Segurança de Software",
                  "Gestão de Projetos",
                  "Inteligência Artificial"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
