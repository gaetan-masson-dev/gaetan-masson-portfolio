import type { Metadata } from 'next'

import EmailProtected from '@/components/EmailProtected'

export const metadata: Metadata = {
  title: 'Contact - Gaetan Masson',
  description: 'Get in touch with Gaetan Masson, product designer.',
}

export default function ContactPage() {
  return (
    <div className="max-w-content mx-auto px-6">
      <div>
        <h1>Contact</h1>

        <p>
          I'm always interested in discussing new projects, design opportunities, or just chatting
          about technology and sustainable living.
        </p>

        <p>The best way to reach me is via email. I usually respond within 24-48 hours.</p>

        <div className="grid gap-8 mt-12">
          <div>
            <strong className="block text-lg mb-2">Email</strong>
            <p>
              <EmailProtected user="hello" domain="gaetanmasson.me" />
            </p>
          </div>

          <div>
            <strong className="block text-lg mb-2">Social</strong>
            <p>
              <a
                href="https://linkedin.com/in/gaetanmasson"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
