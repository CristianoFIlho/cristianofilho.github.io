import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cristiano Filho - Consultor de Soluções Digitais',
  description: 'Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações MuleSoft, com 3 anos de experiência em implementações B2B.',
  keywords: 'Salesforce, MuleSoft, Engenharia de Software, Desenvolvimento, Consultoria, B2B',
  authors: [{ name: 'Cristiano Filho' }],
  creator: 'Cristiano Filho',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cristianofilho.github.io',
    title: 'Cristiano Filho - Consultor de Soluções Digitais',
    description: 'Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações MuleSoft',
    siteName: 'Cristiano Filho Portfolio',
    images: [
      {
        url: '/images/cristiano-filho.jpg',
        width: 1200,
        height: 630,
        alt: 'Cristiano Filho',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristiano Filho - Consultor de Soluções Digitais',
    description: 'Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações MuleSoft',
    images: ['/images/cristiano-filho.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="bg-gray-900 text-gray-100 font-sans">
        <Navigation />
        {children}
      </body>
    </html>
  )
}