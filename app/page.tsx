import Link from 'next/link'

import { getCaseStudies } from '@/lib/mdx'

export default function HomePage() {
  const caseStudies = getCaseStudies()

  return (
    <div className="container-wide">
      <section className="hero">
        <h1>Hi, I'm Gaetan!</h1>
        <p className="hero-tagline">
          A designer passionate about technology, sustainable living, and spirituality among other things.{' '}
          <Link href="/about">Learn more about me</Link>
        </p>
      </section>

      <section className="case-studies-grid">
        {caseStudies.map((caseStudy) => (
          <article key={caseStudy.slug} className="case-study-card">
            <div className="case-study-category">{caseStudy.frontmatter.category}</div>
            <h2>
              <Link href={`/case-studies/${caseStudy.slug}`}>
                {caseStudy.frontmatter.title}
              </Link>
            </h2>
            <p className="case-study-description">
              {caseStudy.frontmatter.description}
            </p>
            <Link href={`/case-studies/${caseStudy.slug}`} className="case-study-link">
              Read case study →
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
