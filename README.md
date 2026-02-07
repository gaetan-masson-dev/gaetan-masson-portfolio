# Gaetan Masson Portfolio

A minimal, production-ready portfolio site built with Next.js 15 and MDX, showcasing design case studies with a focus on performance, SEO, and accessibility.

## Features

- ⚡ **Server-side rendering** for optimal performance and SEO
- 📝 **MDX-based case studies** with frontmatter support
- 🎨 **Clean, minimal design** with focus on typography and readability
- 📱 **Fully responsive** design optimized for all devices
- 🔍 **SEO-friendly** with proper meta tags and semantic HTML
- ♿ **Accessible** markup following best practices
- 🛠️ **TypeScript** for type safety
- 💅 **ESLint + Prettier** for code quality

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [MDX](https://mdxjs.com/) for content
- [TypeScript](https://www.typescriptlang.org/)
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   └── case-studies/[slug]/ # Dynamic case study pages
├── components/              # React components
│   ├── Figure.tsx          # Image component for MDX
│   └── CaseStudyLayout.tsx # Case study template
├── content/                 # MDX content
│   └── case-studies/       # Case study MDX files
├── lib/                     # Utilities
│   └── mdx.ts              # MDX parsing functions
├── public/                  # Static assets
│   └── images/             # Case study images
└── styles/                  # CSS
    └── globals.css         # Global styles
```

## Adding New Case Studies

1. Create a new `.mdx` file in `content/case-studies/`
2. Add frontmatter with required fields:

```mdx
---
title: Your Case Study Title
category: UX Strategy
description: One-line description for the home page
role: Your role
duration: Project duration
team: Team composition
scope: Project scope
focus: Key focus areas (optional)
---

Your case study content here...
```

3. Add images to `public/images/your-case-study-slug/`
4. Reference images in MDX using the Figure component:

```mdx
<Figure 
  src="/images/your-case-study-slug/image.png" 
  alt="Description" 
  caption="Optional caption" 
/>
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/gaetan-masson-portfolio)

### Other Platforms

Build the static site:

```bash
npm run build
```

The built site will be in the `.next` folder. Deploy to any static hosting provider that supports Next.js.

## Customization

### Styling

Edit `styles/globals.css` to customize:
- Color scheme (CSS variables in `:root`)
- Typography (font families, sizes)
- Spacing scale
- Layout widths

### Content

- **Home page intro**: Edit `app/page.tsx`
- **About page**: Edit `app/about/page.tsx`
- **Footer tagline**: Edit `app/layout.tsx`
- **Social links**: Update links in `app/layout.tsx`

### Metadata

Update SEO metadata in:
- `app/layout.tsx` - Site-wide defaults
- `app/about/page.tsx` - About page metadata
- `app/case-studies/[slug]/page.tsx` - Case study metadata

## License

MIT License - see LICENSE file for details

## Author

**Gaetan Masson**
- Website: [gaetanmasson.me](https://gaetanmasson.me)
- Email: hello@gaetanmasson.me
- LinkedIn: [linkedin.com/in/gaetanmasson](https://linkedin.com/in/gaetanmasson)
