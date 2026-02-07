import type { Metadata } from 'next'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

import CaseStudyLayout from '@/components/CaseStudyLayout'
import Figure from '@/components/Figure'
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
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="container">
      <CaseStudyLayout frontmatter={caseStudy.frontmatter}>
        <MDXRemote source={caseStudy.content} components={components} />
      </CaseStudyLayout>
    </div>
  )
}
