import type { CaseStudyFrontmatter } from '@/lib/mdx'

import { ReactNode } from 'react'

interface CaseStudyLayoutProps {
  frontmatter: CaseStudyFrontmatter
  children: ReactNode
}

export default function CaseStudyLayout({ frontmatter, children }: CaseStudyLayoutProps) {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <h1 className="case-study-title">{frontmatter.title}</h1>
        
        <div className="case-study-context">
          <div className="context-item">
            <strong>Role:</strong> {frontmatter.role}
          </div>
          <div className="context-item">
            <strong>Duration:</strong> {frontmatter.duration}
          </div>
          <div className="context-item">
            <strong>Team:</strong> {frontmatter.team}
          </div>
          <div className="context-item">
            <strong>Scope:</strong> {frontmatter.scope}
          </div>
          {frontmatter.focus && (
            <div className="context-item">
              <strong>Focus:</strong> {frontmatter.focus}
            </div>
          )}
        </div>
      </header>

      <div className="case-study-content">
        {children}
      </div>
    </article>
  )
}
