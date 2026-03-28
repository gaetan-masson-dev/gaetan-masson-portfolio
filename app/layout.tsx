import type { Metadata } from 'next'

import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'

import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Gaetan Masson - Senior / Lead Product Designer',
  description:
    'A designer passionate about technology, sustainable living, and spirituality among other things.',
  openGraph: {
    title: 'Gaetan Masson - Senior / Lead Product Designer',
    description:
      'A designer passionate about technology, sustainable living, and spirituality among other things.',
    type: 'website',
  },
}

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body>
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  )
}
