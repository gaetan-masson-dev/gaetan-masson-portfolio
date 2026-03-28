import type { Metadata } from 'next'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import remarkGfm from 'remark-gfm'

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Figure from '@/components/Figure'
import MDXAnchor from '@/components/MDXAnchor'
import { getCaseStudy, getCaseStudies } from '@/lib/mdx'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = getCaseStudies()
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    return {}
  }

  return {
    title: `${caseStudy.frontmatter.title} - Gaetan Masson`,
    description: caseStudy.frontmatter.description,
    openGraph: {
      title: `${caseStudy.frontmatter.title} - Gaetan Masson`,
      description: caseStudy.frontmatter.description,
      type: 'article',
    },
  }
}

const components = {
  Figure,
  a: MDXAnchor,
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <CaseStudyLayout frontmatter={caseStudy.frontmatter}>
        <MDXRemote
          source={caseStudy.content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </CaseStudyLayout>
    </div>
  )
}
