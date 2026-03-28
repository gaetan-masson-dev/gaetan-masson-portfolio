'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import EmailProtected from '@/components/EmailProtected'

function FooterSeparator() {
  return <div className="h-8 w-px shrink-0 bg-[#e6e6e6] mx-6" aria-hidden />
}

function footerNavLinkClass(active: boolean) {
  if (active) {
    return 'text-default no-underline font-medium text-xl'
  }
  return 'text-[#0077be] underline font-medium text-xl decoration-[#0077be] underline-offset-[0.18em] hover:text-[#00578b] hover:decoration-[#00578b]'
}

export default function SiteFooter() {
  const pathname = usePathname()
  const workActive = pathname === '/' || pathname.startsWith('/case-studies')
  const aboutActive = pathname === '/about' || pathname.startsWith('/about/')

  const footerLinkClass =
    'text-[#0077be] underline decoration-[#0077be] underline-offset-[0.18em] hover:text-[#00578b] hover:decoration-[#00578b]'

  return (
    <footer className="mt-16 border-t border-[#e6e6e6] pt-12 pb-16 md:pt-[7.5rem] md:pb-[7.5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-wide mx-auto">
          <nav className="flex justify-center mb-12" aria-label="Footer">
            <ul className="flex list-none m-0 p-0 gap-6 text-xl">
              <li>
                <Link href="/" className={footerNavLinkClass(workActive)}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerNavLinkClass(aboutActive)}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-center text-2xl m-0 mb-12 text-default font-sans leading-normal">
            I&apos;m currently designing for a German ed-Tech company while living in the French
            Pyrenees
          </p>

          <div className="flex h-8 flex-row items-center justify-center">
            <EmailProtected
              user="hello"
              domain="gaetanmasson.me"
              label="Email"
              className={footerLinkClass}
            />
            <FooterSeparator />
            <a
              href="https://www.linkedin.com/in/gaetan-masson-design"
              target="_blank"
              rel="noopener noreferrer"
              className={footerLinkClass}
            >
              LinkedIn
            </a>
            <FooterSeparator />
            <a
              href="/resume_gaetan_masson2026.pdf"
              download="resume_gaetan_masson2026.pdf"
              className={footerLinkClass}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
