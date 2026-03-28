'use client'

import type { MouseEvent } from 'react'

interface EmailProtectedProps {
  user: readonly number[]
  domain: readonly number[]
  label?: string
  className?: string
}

function decodeEmailPart(encodedPart: readonly number[]): string {
  return String.fromCharCode(...encodedPart)
}

export default function EmailProtected({ user, domain, label, className }: EmailProtectedProps) {
  const linkClassName = className ?? undefined

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    const email = `${decodeEmailPart(user)}@${decodeEmailPart(domain)}`
    window.location.href = `mailto:${email}`
  }

  return (
    <a href="#" className={linkClassName} onClick={handleClick}>
      {label || 'Reveal email'}
    </a>
  )
}
