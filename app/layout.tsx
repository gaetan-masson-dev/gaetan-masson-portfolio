import type { Metadata } from 'next'

import Link from 'next/link'

import EmailProtected from '@/components/EmailProtected'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Gaetan Masson - Product Designer',
  description:
    'A designer passionate about technology, sustainable living, and spirituality among other things.',
  openGraph: {
    title: 'Gaetan Masson - Product Designer',
    description:
      'A designer passionate about technology, sustainable living, and spirituality among other things.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-content">
            <Link href="/" className="logo">
              Gaetan Masson
            </Link>
            <nav className="nav">
              <Link href="/">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            <p className="footer-tagline">
              I'm currently designing for a German ed-Tech company while living in the French
              Pyrenees
            </p>
            <div className="footer-links">
              <EmailProtected
                user="hello"
                domain="gaetanmasson.me"
                label="Email"
                className="footer-email"
              />
              <a
                href="https://linkedin.com/in/gaetanmasson"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="/cv.pdf">CV</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Gaetan Masson</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
