import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabián Martínez - Desarrollador & Entusiasta de IA',
  description:
    'Portafolio personal de Fabián Martínez. Apasionado por la inteligencia artificial, desarrollo web y tecnología.',
  keywords: [
    'desarrollador',
    'inteligencia artificial',
    'machine learning',
    'redes neuronales',
    'desarrollo web',
    'portafolio',
  ],
  authors: [{ name: 'Fabián Martínez' }],
  creator: 'Fabián Martínez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'Fabián Martínez - Desarrollador & Entusiasta de IA',
    description: 'Portafolio personal - Desarrollo web e inteligencia artificial',
    siteName: 'Fabián Martínez Portfolio',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
