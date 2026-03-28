import type { Metadata } from 'next'

import EmailProtected from '@/components/EmailProtected'
import { protectedEmail } from '@/lib/protected-email'

export const metadata: Metadata = {
  title: 'About - Gaetan Masson',
  description: 'Learn more about Gaetan Masson, product designer.',
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mx-auto max-w-reading">
        <h1 className="text-[3.5rem] md:text-[4.5rem] leading-tight">About</h1>

        <p>
          Hi, I'm Gaetan Masson, a product designer passionate about creating thoughtful digital
          experiences that balance user needs with business goals.
        </p>

        <p>
          I'm currently designing for a German ed-Tech company while living in the French Pyrenees.
          My work focuses on UX strategy, interaction design, and design operations.
        </p>

        <p>
          When I'm not designing, I'm passionate about technology, sustainable living, and
          spirituality. I believe in creating products that not only solve problems but also
          contribute positively to people's lives.
        </p>

        <h2>Experience</h2>

        <p>
          I've worked across various domains including CRM platforms, e-commerce, and educational
          technology. My approach combines strategic thinking with attention to detail, ensuring
          that design decisions are both user-centered and aligned with business objectives.
        </p>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in discussing design, technology, or collaborating on meaningful
          projects. Feel free to reach out via{' '}
          <EmailProtected user={protectedEmail.user} domain={protectedEmail.domain} label="email" />{' '}
          or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/gaetan-masson-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  )
}
