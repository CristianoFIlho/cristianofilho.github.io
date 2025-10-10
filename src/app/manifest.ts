import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cristiano Filho - Consultor de Soluções Digitais',
    short_name: 'Cristiano Filho',
    description: 'Bacharel em Engenharia de Software especializado em desenvolvimento Salesforce e integrações MuleSoft',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
