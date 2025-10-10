'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Cloud, Mail, Phone } from 'lucide-react'
import { SocialLink } from '@/types'

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/CristianoFIlho',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/cristiano-filho/',
    icon: 'linkedin'
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/crisfilho98',
    icon: 'twitter'
  },
  {
    name: 'Salesforce Trailblazer',
    url: 'https://www.salesforce.com/trailblazer/cristiano-filho',
    icon: 'cloud'
  }
]

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return <Github className="w-6 h-6" />
    case 'linkedin':
      return <Linkedin className="w-6 h-6" />
    case 'twitter':
      return <Twitter className="w-6 h-6" />
    case 'cloud':
      return <Cloud className="w-6 h-6" />
    default:
      return <Github className="w-6 h-6" />
  }
}

export default function Contact() {
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
          <h2 className="section-title text-gradient">Entre em Contato</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar sua empresa a crescer digitalmente!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Vamos Conversar!</h3>
              <p className="text-gray-400 mb-8">
                Estou sempre aberto para discutir novos projetos e oportunidades. 
                Conecte-se comigo através das redes sociais profissionais.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/cristiano-filho/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <p className="text-gray-400 text-sm">Conectar profissionalmente</p>
                </div>
              </a>

              <a
                href="tel:+5571983973644"
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="p-2 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefone</p>
                  <p className="text-gray-400 text-sm">+55 71 98397-3644</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {getIcon(social.icon)}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Pronto para Começar?</h3>
            <p className="text-gray-400 mb-8">
              Conecte-se comigo através do LinkedIn para discussões profissionais sobre projetos e oportunidades.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/cristiano-filho/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
              >
                <Linkedin className="w-5 h-5" />
                Fale comigo no LinkedIn
              </a>

              <a
                href="https://x.com/crisfilho98"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-secondary flex items-center justify-center gap-2 text-lg py-4"
              >
                <Twitter className="w-5 h-5" />
                Seguir no X
              </a>
            </div>

            <div className="mt-8 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">Resposta Profissional</h4>
              <p className="text-gray-300 text-sm">
                Respondo mensagens profissionais no LinkedIn em até 24 horas. 
                Para discussões técnicas, use o GitHub ou Trailhead.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400">
            © 2024 Cristiano Filho. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com ❤️ usando Next.js e Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
