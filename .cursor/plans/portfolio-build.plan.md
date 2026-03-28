---
name: Next.js MDX Portfolio
overview: Build a minimal, SEO-friendly portfolio site using Next.js App Router with MDX-based case studies, server-side rendering, and clean typography.
todos:
  - id: setup-nextjs
    content: Initialize Next.js with TypeScript, create package.json, next.config.mjs, tsconfig.json
    status: completed
  - id: mdx-infrastructure
    content: Create lib/mdx.ts with getCaseStudies and getCaseStudy functions, define TypeScript types
    status: completed
  - id: components
    content: Build Figure.tsx and CaseStudyLayout.tsx components
    status: completed
  - id: pages
    content: Create app/layout.tsx, app/page.tsx, app/about/page.tsx, app/case-studies/[slug]/page.tsx
    status: completed
  - id: styles
    content: Create styles/globals.css with minimal, clean typography and spacing
    status: completed
  - id: example-content
    content: Create all 6 MDX case studies matching gaetanmasson.me (campaigns-app, single-source-of-truth, suppliers-search-tool, product-checkout, settings-configurations, tiers-up-down)
    status: completed
  - id: assets
    content: Create public/images directory structure and update .gitignore
    status: completed
  - id: linting-formatting-modern
    content: Setup modern ESLint 9 Flat Config, Prettier, and project rules
    status: completed
  - id: contact-page
    content: Add Contact page with bot-protected email links
    status: completed
  - id: design-system-setup
    content: Setup Design Component Library with Storybook, Chromatic, and npm publishing
    status: pending
  - id: design-system-components
    content: Implement core components (Button, Typography, Card, etc.) in the library
    status: pending
  - id: design-system-integration
    content: Integrate the component library back into the portfolio site
    status: pending
  - id: fix-eslint-corruption
    content: Fix corrupted ESLint config file (import statements broken)
    status: completed
  - id: email-client-component
    content: Replace inline email obfuscation script with proper client component
    status: completed
  - id: husky-lint-staged
    content: Add Husky + lint-staged for pre-commit hooks (auto-format, linting)
    status: completed
  - id: next-sitemap
    content: Add next-sitemap package for automatic sitemap.xml and robots.txt generation
    status: pending
  - id: next-image-optimization
    content: Replace img tags with Next.js Image component in Figure.tsx, add blur placeholders
    status: pending
  - id: env-configuration
    content: Add .env.example file and environment-specific configs
    status: completed
  - id: typescript-strictness
    content: Enhance TypeScript config (noUncheckedIndexedAccess, strictNullChecks)
    status: pending
  - id: zod-validation
    content: Add Zod for MDX frontmatter runtime validation
    status: pending
  - id: mdx-enhancements
    content: Add remark/rehype plugins (syntax highlighting, GFM support)
    status: pending
  - id: reading-time
    content: Add reading time calculation for case studies
    status: pending
  - id: content-validation-script
    content: Create script to validate MDX files (frontmatter, broken links, unique slugs)
    status: pending
  - id: dev-scripts
    content: Add npm scripts for type-check, lint:fix, and validate
    status: completed
  - id: build-validation
    content: Add bundle analyzer and type-check to build process
    status: pending
  - id: github-actions
    content: Setup GitHub Actions for CI (lint, type-check, tests on PR)
    status: pending
  - id: skip-to-content
    content: Add skip-to-content link for keyboard navigation
    status: pending
  - id: focus-indicators
    content: Improve focus styles for keyboard users
    status: pending
  - id: dark-mode
    content: Add dark mode support with prefers-color-scheme and localStorage toggle
    status: pending
  - id: security-headers
    content: Add security headers in next.config.mjs (CSP, X-Frame-Options, etc.)
    status: pending
  - id: metadata-centralization
    content: Centralize site metadata management in lib/metadata.ts
    status: pending
  - id: rss-feed
    content: Add RSS feed generation for case studies
    status: pending
  - id: unit-tests
    content: Add Vitest and React Testing Library, write tests for lib/mdx.ts
    status: pending
  - id: lighthouse-ci
    content: Setup Lighthouse CI for automated performance testing
    status: pending
  - id: editorconfig
    content: Add .editorconfig file for consistent formatting across editors
    status: completed
  - id: dependabot
    content: Enable Dependabot for dependency security scanning
    status: pending
isProject: false
---

# Next.js MDX Portfolio Implementation Plan

## Project Structure

```
gaetan-masson-portfolio/
├── .cursor/
│   ├── plans/                  # Project roadmap
│   └── rules/                  # Persistent AI guidance (.mdc)
├── app/
│   ├── layout.tsx              # Root layout with nav/footer
│   ├── page.tsx                # Home page with intro + case studies grid
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page with email protection
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
├── eslint.config.mjs           # Modern ESLint 9 Flat Config
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

**Design Component Library**:

- **Monorepo Structure**: Transitioning to a monorepo using npm workspaces to house the portfolio app and the design-system package.
- **Storybook**: For isolated component development and documentation.
- **Chromatic**: For visual regression testing and hosting the design system.
- **Publishing**: Configured for publishing to npm.

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

## Modern Workflow Improvements & Best Practices

### Phase 1: Critical Fixes (High Priority)

#### Fix ESLint Configuration

The `eslint.config.mjs` file has corrupted import statements that need immediate attention. This blocks proper linting across the project.

#### Replace Inline Email Script

Move the email obfuscation from `dangerouslySetInnerHTML` in `app/layout.tsx` to a proper client component. This enables:

- Content Security Policy (CSP) implementation
- Better Next.js compliance
- Improved security

### Phase 2: Development Experience

#### Pre-commit Automation

- **Husky + lint-staged**: Auto-format code and run linting checks before commits
- **EditorConfig**: Ensure consistent formatting across different editors
- **Enhanced Scripts**: 
  - `npm run type-check` - TypeScript validation without building
  - `npm run lint:fix` - Auto-fix linting issues  
  - `npm run validate` - Run all checks (lint, format, type-check)

### Phase 3: Performance & SEO

#### Image Optimization

- Replace `<img>` in Figure component with Next.js `<Image>`
- Add image dimensions to frontmatter for better CLS scores
- Implement blur placeholders for better UX

#### SEO Enhancements

- **next-sitemap**: Auto-generate sitemap.xml and robots.txt
- **RSS Feed**: Generate feed for case studies to improve discoverability
- **Reading Time**: Calculate and display reading time for case studies

#### Security

- **Security Headers**: Implement CSP, X-Frame-Options, X-Content-Type-Options in `next.config.mjs`
- **Environment Configuration**: Add `.env.example` and document required variables

### Phase 4: Code Quality & Type Safety

#### TypeScript Enhancements

- Enable `noUncheckedIndexedAccess` for safer array/object access
- Ensure `strictNullChecks` is enabled
- Consider `verbatimModuleSyntax` for better imports

#### Runtime Validation

- **Zod Integration**: Validate MDX frontmatter at build time
- Catch content errors early
- Better type inference and safety

#### Testing

- **Vitest**: Fast, modern unit testing
- **React Testing Library**: Component testing
- Focus on utility functions (`lib/mdx.ts`) first
- **Lighthouse CI**: Automated performance regression testing

### Phase 5: Content & MDX

#### MDX Enhancements

- Add remark/rehype plugins for better markdown features
- `remark-gfm` for GitHub-flavored markdown
- Syntax highlighting for code blocks
- Enhanced typography with remark-smartypants

#### Content Validation

- Script to validate all MDX files have required frontmatter
- Check for broken image links  
- Verify slugs are unique
- Run automatically in CI pipeline

#### Component Library

- Create more reusable MDX components (Callout, CodeBlock, Video, etc.)
- Document in a components page or style guide

### Phase 6: Build & CI/CD

#### Build Enhancements

- **Bundle Analyzer**: Monitor bundle size with `@next/bundle-analyzer`
- **Type-check Before Build**: Catch type errors before deployment
- **Build Validation**: Ensure all checks pass

#### GitHub Actions Workflow

- Run lint/type-check/tests on every PR
- Auto-deploy to preview environments (Vercel/Netlify)
- Check for broken links
- Automated accessibility testing

#### Dependency Management

- **Dependabot**: Automated dependency updates
- Regular `npm audit` checks
- Consider Snyk for advanced vulnerability scanning

### Phase 7: Accessibility & UX

#### Keyboard Navigation

- **Skip-to-Content Link**: First focusable element for keyboard users
- **Improved Focus Indicators**: Visible focus styles using `focus-visible`

#### Dark Mode

- Use existing CSS variables foundation
- Respect `prefers-color-scheme`
- Add toggle with localStorage persistence
- Smooth transitions between themes

### Phase 8: Architecture & Organization

#### Code Organization

- Move shared TypeScript types to `types/` directory
- Create `constants/` directory for site configuration
- **Metadata Management**: Centralize in `lib/metadata.ts` with reusable generators

#### Documentation

- **CHANGELOG.md**: Track changes over time
- **CONTRIBUTING.md**: Document standards and processes
- **JSDoc Comments**: Document exported functions and complex logic

### Recommended Package Additions

```json
{
  "devDependencies": {
    "husky": "^9.0.0",
    "lint-staged": "^15.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "vitest": "^1.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "zod": "^3.22.0",
    "next-sitemap": "^4.2.0",
    "@next/bundle-analyzer": "^15.1.4",
    "remark-gfm": "^4.0.0",
    "rehype-pretty-code": "^0.13.0",
    "reading-time": "^1.5.0"
  }
}
```

### Implementation Priority

**Phase 1** (Critical - Do First):

1. Fix ESLint config corruption
2. Replace email inline script
3. Add environment configuration

**Phase 2** (High Value):
4. Husky + lint-staged setup
5. Next-sitemap implementation
6. Image optimization with Next.js Image

**Phase 3** (Quality of Life):
7. Enhanced dev scripts
8. Zod validation
9. Content validation script

**Phase 4** (Long-term):
10. Testing infrastructure
11. GitHub Actions CI/CD
12. Dark mode implementation

## Content Matching Current Site

Using actual content from gaetanmasson.me:

- Personal intro text and tagline
- All 6 case studies with their titles, categories, and descriptions
- About page content mentioning German ed-Tech company and French Pyrenees
- Footer social links (will extract email/LinkedIn from current site if visible)

