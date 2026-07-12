# Nisha Engineering Website

A production-ready Next.js website for [Nisha Engineering](https://nishaengg.com) — manufacturer and exporter of pharmaceutical, chemical, and cosmetics machinery.

Built from the Figma design reference with SEO optimization, semantic HTML, and performance best practices.

## Tech Stack

- Next.js 16 (App Router, Static Generation)
- React 19 + TypeScript
- Tailwind CSS 4
- JSON-LD structured data (Organization, LocalBusiness, Product, Breadcrumb)

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home — Hero, About, Products, Stats, Mission, Contact |
| `/about` | Company history and milestones |
| `/products` | Product catalog |
| `/products/[slug]` | Individual product detail pages (SSG) |
| `/contact` | Contact form and business info |

## SEO Features

- Per-page metadata with Open Graph and Twitter cards
- Auto-generated `sitemap.xml` and `robots.txt`
- Dynamic Open Graph image (`/opengraph-image`)
- JSON-LD structured data for search engines
- Semantic HTML with proper heading hierarchy
- Canonical URLs and keyword metadata

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your production domain for correct canonical URLs and sitemap.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

- **Site content**: `src/config/site.ts`
- **Products**: `src/config/products.ts`
- **SEO utilities**: `src/lib/seo.ts`
- **Home sections**: `src/components/home/`

## Note on Design Assets

Replace placeholder product visuals with exported Figma assets in `public/images/` and update components to use `next/image` for optimized loading.
