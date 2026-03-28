import type { Metadata } from 'next'

import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import Link from 'next/link'

import EmailProtected from '@/components/EmailProtected'

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
        <header className="border-b border-line py-8 mb-12 max-w-7xl mx-auto">
          <div className="max-w-wide mx-auto px-6 flex justify-between items-center flex-col md:flex-row gap-6 md:items-center">
            <Link
              href="/"
              className="text-lg font-semibold text-default no-underline hover:no-underline"
            >
              Gaetan Masson
            </Link>
            <nav className="flex gap-8">
              <Link href="/" className="text-default font-medium no-underline hover:underline">
                Work
              </Link>
              <Link href="/about" className="text-default font-medium no-underline hover:underline">
                About
              </Link>
              <Link
                href="/contact"
                className="text-default font-medium no-underline hover:underline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-16 py-12 border-t border-line text-subtle text-sm">
          <div className="max-w-wide mx-auto px-6">
            <p className="mb-6">
              I'm currently designing for a German ed-Tech company while living in the French
              Pyrenees
            </p>
            <div className="flex gap-6 mb-4">
              <EmailProtected
                user="hello"
                domain="gaetanmasson.me"
                label="Email"
                className="text-subtle hover:text-accent"
              />
              <a
                href="https://linkedin.com/in/gaetanmasson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-subtle hover:text-accent"
              >
                LinkedIn
              </a>
              <a href="/cv.pdf" className="text-subtle hover:text-accent">
                CV
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Gaetan Masson</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
