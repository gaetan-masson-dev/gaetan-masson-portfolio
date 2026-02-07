import type { Metadata } from 'next'

import Link from 'next/link'

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
              <span
                className="email-protected-footer"
                data-user="hello"
                data-domain="gaetanmasson.me"
              >
                Email
              </span>
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.querySelectorAll('[class^="email-protected"]').forEach(el => {
                  const user = el.dataset.user;
                  const domain = el.dataset.domain;
                  if (user && domain) {
                    const email = user + '@' + domain;
                    const text = el.textContent.trim() === 'Email' ? 'Email' : email;
                    el.innerHTML = '<a href="mailto:' + email + '">' + text + '</a>';
                  }
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
