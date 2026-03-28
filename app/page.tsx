import Image from 'next/image'
import Link from 'next/link'

import { linkTextClass } from '@/lib/link-styles'
import {
  DEFAULT_CASE_STUDY_IMAGE_HEIGHT,
  DEFAULT_CASE_STUDY_IMAGE_WIDTH,
  getCaseStudies,
} from '@/lib/mdx'

export default function HomePage() {
  const caseStudies = getCaseStudies()

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section className="mb-16 border-b border-line pb-16">
        <h1 className="text-[3.5rem] md:text-[4.5rem] leading-tight font-semibold mb-6">
          Hi, I'm Gaetan!
        </h1>
        <p className="text-2xl text-subtle">
          Lead Product Designer specializing in complex SaaS products, systems thinking, and
          cross-functional collaboration.
          <br />
          I'm passionate about technology, sustainable living, and spirituality among other things.
          <br />
          <Link href="/about" className={linkTextClass}>
            Learn more about me
          </Link>
        </p>
      </section>
      <section className="grid gap-16">
        {caseStudies.map((caseStudy, index) => {
          const isEven = index % 2 === 0
          const imagePosition = isEven ? 'right' : 'left'
          const imageW = caseStudy.frontmatter.imageWidth ?? DEFAULT_CASE_STUDY_IMAGE_WIDTH
          const imageH = caseStudy.frontmatter.imageHeight ?? DEFAULT_CASE_STUDY_IMAGE_HEIGHT

          return (
            <article
              key={caseStudy.slug}
              className="pb-12 border-b border-line last:border-b-0 last:pb-0"
            >
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={imagePosition === 'left' ? 'md:order-2' : ''}>
                  <div className="inline-block text-xs uppercase tracking-[0.08em] font-medium text-subtle mb-2">
                    {caseStudy.frontmatter.category}
                  </div>
                  <h2 className="text-[1.75rem] font-semibold mt-0 mb-3">
                    <Link
                      href={`/work/${caseStudy.slug}`}
                      className={`${linkTextClass} font-semibold`}
                    >
                      {caseStudy.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="text-subtle max-w-measure mb-6">
                    {caseStudy.frontmatter.description}
                  </p>
                  <Link
                    href={`/work/${caseStudy.slug}`}
                    className={`${linkTextClass} inline-block font-medium`}
                  >
                    Read case study →
                  </Link>
                </div>

                {/* Image */}
                {caseStudy.frontmatter.image && (
                  <div className={imagePosition === 'left' ? 'md:order-1' : ''}>
                    <Link href={`/work/${caseStudy.slug}`} className="block group">
                      <div
                        className="relative w-full overflow-hidden rounded-lg bg-subtle/10"
                        style={{ aspectRatio: `${imageW} / ${imageH}` }}
                      >
                        <Image
                          src={caseStudy.frontmatter.image}
                          alt={caseStudy.frontmatter.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
