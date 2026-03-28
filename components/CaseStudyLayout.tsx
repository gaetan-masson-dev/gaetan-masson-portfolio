import type { CaseStudyFrontmatter } from '@/lib/mdx'

import Image from 'next/image'
import { ReactNode } from 'react'

interface CaseStudyLayoutProps {
  frontmatter: CaseStudyFrontmatter
  children: ReactNode
}

export default function CaseStudyLayout({ frontmatter, children }: CaseStudyLayoutProps) {
  const metadata = [
    ...(frontmatter.contribution
      ? [{ label: 'Contribution', value: frontmatter.contribution }]
      : []),
    ...(frontmatter.scope ? [{ label: 'Scope', value: frontmatter.scope }] : []),
    ...(frontmatter.context ? [{ label: 'Context', value: frontmatter.context }] : []),
    ...(frontmatter.impact ? [{ label: 'Impact', value: frontmatter.impact }] : []),
  ]

  return (
    <article className="mb-16">
      <header className="mx-auto max-w-5xl border-b border-line pb-10 pt-12 md:pb-14 md:pt-20">
        {frontmatter.logo && (
          <div className="mb-8 flex justify-center">
            <div className="relative h-10 w-[min(100%,12.5rem)] md:h-12">
              <Image
                src={frontmatter.logo}
                alt=""
                aria-hidden="true"
                className="object-contain object-center"
                fill
                sizes="200px"
              />
            </div>
          </div>
        )}
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.14em] text-subtle">
          {frontmatter.category}
        </p>
        <h1 className="mx-auto max-w-4xl text-center text-2xl md:text-7xl">{frontmatter.title}</h1>
        <p className="mx-auto mt-8 max-w-reading text-center text-xl md:text-2xl text-subtle">
          {frontmatter.description}
        </p>

        <dl className="mt-12 grid grid-cols-1 gap-[32px] border-t border-line pt-8 text-left sm:grid-cols-2">
          {metadata.map((item) => (
            <div key={item.label}>
              <dt className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-subtle">
                {item.label}
              </dt>
              <dd className="leading-[1.5] text-default">{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="case-study-content mx-auto max-w-reading pt-12 md:pt-16">{children}</div>
    </article>
  )
}
