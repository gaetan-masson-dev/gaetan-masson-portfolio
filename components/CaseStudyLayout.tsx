import type { CaseStudyFrontmatter } from '@/lib/mdx'

import { ReactNode } from 'react'

interface CaseStudyLayoutProps {
  frontmatter: CaseStudyFrontmatter
  children: ReactNode
}

export default function CaseStudyLayout({ frontmatter, children }: CaseStudyLayoutProps) {
  return (
    <article className="mb-16">
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-semibold">{frontmatter.title}</h1>

        <div className="grid gap-4 p-8 bg-gray-50 rounded-lg mb-12 mt-8">
          <div className="text-[0.9375rem]">
            <strong className="font-semibold mr-2">Role:</strong> {frontmatter.role}
          </div>
          <div className="text-[0.9375rem]">
            <strong className="font-semibold mr-2">Duration:</strong> {frontmatter.duration}
          </div>
          <div className="text-[0.9375rem]">
            <strong className="font-semibold mr-2">Team:</strong> {frontmatter.team}
          </div>
          <div className="text-[0.9375rem]">
            <strong className="font-semibold mr-2">Scope:</strong> {frontmatter.scope}
          </div>
          {frontmatter.focus && (
            <div className="text-[0.9375rem]">
              <strong className="font-semibold mr-2">Focus:</strong> {frontmatter.focus}
            </div>
          )}
        </div>
      </header>

      <div className="max-w-content">{children}</div>
    </article>
  )
}
