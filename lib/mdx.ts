import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies')

export interface CaseStudyFrontmatter {
  title: string
  category: string
  description: string
  role: string
  duration: string
  team: string
  scope: string
  focus?: string
}

export interface CaseStudy {
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}

export function getCaseStudies(): CaseStudy[] {
  const fileNames = fs.readdirSync(caseStudiesDirectory)

  const caseStudies = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(caseStudiesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontmatter: data as CaseStudyFrontmatter,
        content,
      }
    })

  return caseStudies
}

export function getCaseStudy(slug: string): CaseStudy | null {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as CaseStudyFrontmatter,
      content,
    }
  } catch {
    return null
  }
}
