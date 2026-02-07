'use client'

import { useEffect, useState } from 'react'

interface EmailProtectedProps {
  user: string
  domain: string
  label?: string
  className?: string
}

export default function EmailProtected({ user, domain, label, className }: EmailProtectedProps) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(`${user}@${domain}`)
  }, [user, domain])

  if (!email) {
    return <span className={className}>{label || `${user} [at] ${domain}`}</span>
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {label || email}
    </a>
  )
}
