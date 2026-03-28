import type { ComponentProps } from 'react'

import Link from 'next/link'

import { linkTextClass } from '@/lib/link-styles'

type AnchorProps = ComponentProps<'a'>

function isInternalHref(href: string | undefined): boolean {
  if (!href) return false
  return href.startsWith('/') && !href.startsWith('//')
}

function isHttpUrl(href: string | undefined): boolean {
  if (!href) return false
  return href.startsWith('http://') || href.startsWith('https://')
}

export default function MDXAnchor({ href, children, className, download, ...rest }: AnchorProps) {
  const combined = [linkTextClass, className].filter(Boolean).join(' ')

  if (href && isInternalHref(href) && download == null) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    )
  }

  const external = href && isHttpUrl(href)

  return (
    <a
      href={href}
      className={combined}
      {...rest}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      download={download}
    >
      {children}
    </a>
  )
}
