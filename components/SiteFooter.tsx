'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import EmailProtected from '@/components/EmailProtected'
import {
  aboutNavActive,
  contactNavActive,
  linkTextClass,
  navLinkClass,
  workNavActive,
} from '@/lib/link-styles'

function FooterSeparator() {
  return <div className="h-8 w-px shrink-0 bg-line mx-6" aria-hidden />
}

export default function SiteFooter() {
  const pathname = usePathname()

  return (
    <footer className="mt-16 border-t border-line pt-12 pb-16 md:pt-[7.5rem] md:pb-[7.5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-wide mx-auto">
          <nav className="flex justify-center mb-12" aria-label="Footer">
            <ul className="flex list-none m-0 p-0 gap-6 text-xl">
              <li>
                <Link
                  href="/"
                  className={navLinkClass(workNavActive(pathname))}
                  {...(workNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={navLinkClass(aboutNavActive(pathname))}
                  {...(aboutNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={navLinkClass(contactNavActive(pathname))}
                  {...(contactNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
                >
                  Contact
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
              className={linkTextClass}
            />
            <FooterSeparator />
            <a
              href="https://www.linkedin.com/in/gaetan-masson-design"
              target="_blank"
              rel="noopener noreferrer"
              className={linkTextClass}
            >
              LinkedIn
            </a>
            <FooterSeparator />
            <a
              href="/resume_gaetan_masson2026.pdf"
              download="resume_gaetan_masson2026.pdf"
              className={linkTextClass}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
