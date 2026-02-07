---
name: Next.js MDX Portfolio
overview: Build a minimal, SEO-friendly portfolio site using Next.js App Router with MDX-based case studies, server-side rendering, and clean typography.
todos:
  - id: setup-nextjs
    content: Initialize Next.js with TypeScript, create package.json, next.config.mjs, tsconfig.json
    status: pending
  - id: mdx-infrastructure
    content: Create lib/mdx.ts with getCaseStudies and getCaseStudy functions, define TypeScript types
    status: pending
  - id: components
    content: Build Figure.tsx and CaseStudyLayout.tsx components
    status: pending
  - id: pages
    content: Create app/layout.tsx, app/page.tsx, app/about/page.tsx, app/case-studies/[slug]/page.tsx
    status: pending
  - id: styles
    content: Create styles/globals.css with minimal, clean typography and spacing
    status: pending
  - id: example-content
    content: Create all 6 MDX case studies matching gaetanmasson.me (campaigns-app, single-source-of-truth, suppliers-search-tool, product-checkout, settings-configurations, tiers-up-down)
    status: pending
  - id: assets
    content: Create public/images directory structure and update .gitignore
    status: pending
isProject: false
---

# Next.js MDX Portfolio Implementation Plan

## Project Structure

```
gaetan-masson-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with nav/footer
│   ├── page.tsx                # Home page with intro + case studies grid
│   ├── about/
│   │   └── page.tsx            # About page
│   └── case-studies/
│       └── [slug]/
│           └── page.tsx        # Dynamic case study page
├── components/
│   ├── Figure.tsx              # Image component for MDX
│   └── CaseStudyLayout.tsx     # Case study template
├── content/
│   └── case-studies/
│       ├── campaigns-app.mdx
│       ├── single-source-of-truth.mdx
│       ├── suppliers-search-tool.mdx
│       ├── product-checkout.mdx
│       ├── settings-configurations.mdx
│       └── tiers-up-down.mdx
├── lib/
│   └── mdx.ts                  # MDX utilities (getCaseStudies, etc.)
├── public/
│   └── images/
│       └── (case-study-slug)/  # One folder per case study
├── styles/
│   └── globals.css             # Minimal global styles
├── next.config.mjs
├── package.json
├── tsconfig.json
└── .gitignore (update)
```

## Implementation Steps

### 1. Next.js Setup

Initialize Next.js project with TypeScript and configure:

- `[package.json](package.json)` with dependencies:
  - next (latest)
  - react, react-dom
  - @next/mdx
  - @mdx-js/loader, @mdx-js/react
  - @types/mdx
  - gray-matter (for frontmatter parsing)
  - TypeScript types
- `[next.config.mjs](next.config.mjs)` to enable MDX support
- `[tsconfig.json](tsconfig.json)` with strict mode and path aliases

### 2. MDX Infrastructure

Create `[lib/mdx.ts](lib/mdx.ts)`:

- `getCaseStudies()` - reads all MDX files from `/content/case-studies`
- `getCaseStudy(slug)` - reads single case study with frontmatter
- TypeScript types for frontmatter fields:
  - title: string
  - category: string (e.g., "UX Strategy", "Design Ops", "Interaction design")
  - description: string (one-line for home page)
  - role: string
  - duration: string
  - team: string
  - scope: string
  - focus?: string

### 3. Core Pages

**Home** (`[app/page.tsx](app/page.tsx)`):

- Hero section: "Hi, I'm Gaetan!" with tagline from current site
- Server component that calls `getCaseStudies()`
- Grid of case studies with:
  - Category badge (UX Strategy, Design Ops, etc.)
  - Title
  - One-line description
  - "Read case study" link
- Clean, scannable layout matching gaetanmasson.me aesthetic

**Case Study** (`[app/case-studies/[slug]/page.tsx](app/case-studies/[slug]/page.tsx)`):

- Dynamic route using `generateStaticParams()`
- Fetches MDX content server-side
- Renders with CaseStudyLayout component
- Generates metadata for SEO

**About** (`[app/about/page.tsx](app/about/page.tsx)`):

- Simple static page with text from current site about living in French Pyrenees and working with German ed-Tech company

### 4. Components

**CaseStudyLayout** (`[components/CaseStudyLayout.tsx](components/CaseStudyLayout.tsx)`):

- H1 title
- Context block displaying frontmatter (role, duration, team, scope, focus)
- MDX content wrapper
- Semantic HTML structure

**Figure** (`[components/Figure.tsx](components/Figure.tsx)`):

- Props: `src`, `alt`, `caption`
- Renders Next.js Image component with proper sizing
- Optional caption below image
- Accessible markup

### 5. Styling

`[styles/globals.css](styles/globals.css)`:

- CSS reset/normalize
- Clean typography (system font stack)
- Comfortable line-height and measure
- Consistent spacing scale
- Responsive base styles
- No animations or complex effects

`[app/layout.tsx](app/layout.tsx)`:

- Import global styles
- Set HTML lang attribute
- Configure default metadata
- Header with navigation: "Gaetan Masson" logo, "Work" / "About" links
- Footer with: "I'm currently designing for a German ed-Tech company while living in the French Pyrenees" + social links (Email, LinkedIn, CV) + copyright

### 6. Case Study Content

Create 6 MDX files matching gaetanmasson.me:

1. **campaigns-app.mdx**: "Design and integrate a brand new marketing product with an already well established CRM platform" (UX Strategy)
2. **single-source-of-truth.mdx**: "Scaling a design file structure to function with an ever growing design organisation" (Design Ops)
3. **suppliers-search-tool.mdx**: "Redesigning a supplier search flow so that it incorporates multiple verticals and matches users' mental model" (UX Strategy)
4. **product-checkout.mdx**: "Building a checkout flow allowing users to book accommodation and marine activities in a few clicks" (Interaction design)
5. **settings-configurations.mdx**: "Remodelling a settings information architecture so that users can easily configure an app to fit their needs" (Information architecture)
6. **tiers-up-down.mdx**: "Improving features discovery and creating account upgrade flows to increase growth and revenue" (UX Strategy)

Each with:

- Complete frontmatter (title, category, description, role, duration, team, scope)
- Placeholder MDX body content structure
- Figure component references

### 7. Static Assets

Create placeholder image structure:

- `/public/images/campaigns-app/` directory
- Add `.gitkeep` or placeholder images

## Technical Decisions

**MDX Processing**: Using `@next/mdx` with gray-matter for frontmatter parsing instead of contentlayer or other heavy solutions.

**Rendering**: All pages server-rendered (no 'use client') for optimal SEO and performance.

**Styling**: Pure CSS with CSS variables for maintainability, avoiding any CSS-in-JS or UI libraries.

**Images**: Next.js Image component with manual width/height specification for optimal loading.

**Type Safety**: Full TypeScript coverage for frontmatter, MDX utilities, and components.

## Key Features

- Static generation at build time via `generateStaticParams()`
- Proper semantic HTML for accessibility
- Meta tags for SEO (Open Graph, Twitter cards)
- Mobile-responsive typography
- Fast page loads (minimal JS bundle)
- Easy to add new case studies (just drop MDX file in `/content`)

## What's NOT Included

- No CMS integration
- No client-side routing/transitions
- No state management libraries
- No CSS frameworks (Tailwind, etc.)
- No animation libraries
- No form handling
- No analytics
- No actual metrics or real content beyond structural placeholders

## Content Matching Current Site

Using actual content from gaetanmasson.me:

- Personal intro text and tagline
- All 6 case studies with their titles, categories, and descriptions
- About page content mentioning German ed-Tech company and French Pyrenees
- Footer social links (will extract email/LinkedIn from current site if visible)
