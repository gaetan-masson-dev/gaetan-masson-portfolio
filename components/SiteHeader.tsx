'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { aboutNavActive, contactNavActive, navLinkClass, workNavActive } from '@/lib/link-styles'

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-line py-8 max-w-7xl mx-auto">
      <div className="max-w-wide mx-auto px-6 flex justify-between items-center flex-col md:flex-row gap-6 md:items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-default no-underline hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm"
        >
          Gaetan Masson
        </Link>
        <nav className="flex gap-8 text-xl" aria-label="Main">
          <Link
            href="/"
            className={navLinkClass(workNavActive(pathname))}
            {...(workNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={navLinkClass(aboutNavActive(pathname))}
            {...(aboutNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={navLinkClass(contactNavActive(pathname))}
            {...(contactNavActive(pathname) ? { 'aria-current': 'page' as const } : {})}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
