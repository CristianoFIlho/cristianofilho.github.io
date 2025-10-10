'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl">
                <Image
                  src="/images/cristiano-filho.jpg"
                  alt="Cristiano Filho"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">CF</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-gradient">Cristiano Filho</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-blue-400 mb-6"
            >
              Consultor de Soluções Digitais II
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl"
            >
              Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações 
              MuleSoft, com 3 anos de experiência em implementações B2B. Atuo na criação de soluções 
              personalizadas nas plataformas Sales Cloud e Service Cloud.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5571983973644&text=Oi%20tudo%20bem,%20vim%20pelo%20seu%20site.%20Gostaria%20de%20fazer%20um%20orçamento!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Fale comigo agora!
              </a>
              
              <a
                href="mailto:cristianoliveira01.co@gmail.com"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Enviar Email
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 space-y-2 text-gray-400"
            >
              <p>📧 cristianoliveira01.co@gmail.com</p>
              <p>📱 +55 71 98397-3644</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
