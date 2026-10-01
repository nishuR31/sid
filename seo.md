# seo.md — Siddharth Fit

## Per-Route Metadata

Every public route must define:

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | Descriptive, includes brand name |
| `description` | Yes | 150-160 chars, compelling summary |
| `canonical` | Yes | Absolute URL, prevents duplicate content |
| `openGraph.title` | Yes | May differ slightly from page title |
| `openGraph.description` | Yes | Optimized for social sharing |
| `openGraph.image` | Yes | 1200x630px recommended |
| `openGraph.url` | Yes | Canonical URL |
| `openGraph.type` | Yes | `website` for homepage, `profile` for about |
| `twitter.card` | Yes | `summary_large_image` |
| `twitter.title` | Yes | |
| `twitter.description` | Yes | |

---

## Title Format

Pattern: `Page Name | Siddharth Fit`

Examples:
- `Siddharth Fit — Personal Trainer & Fitness Coach`
- `Coaching Plans | Siddharth Fit`
- `Certifications | Siddharth Fit`
- `About Siddharth | Siddharth Fit`
- `Contact | Siddharth Fit`

Homepage title should be unique and keyword-rich, not just the brand name.

---

## Heading Structure

- One `<h1>` per page (matches the primary topic)
- `<h2>` for major sections
- `<h3>` for subsections within `<h2>`
- Never skip heading levels (no h1 > h3)
- Headings should be descriptive, not decorative

---

## Structured Data

### Homepage: WebSite
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Siddharth Fit",
  "url": "https://siddharthfit.com"
}
```

### About: Person + ProfessionalService
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Siddharth",
  "jobTitle": "Personal Trainer & Fitness Coach",
  "url": "https://siddharthfit.com/about"
}
```

### Testimonials: Review (only with real, verified reviews)
- Do NOT fabricate ratings or aggregate scores
- Only include if testimonials have explicit star ratings from Siddharth

---

## Sitemap

File: `app/sitemap.ts`

Generates `/sitemap.xml` including:
- `/`
- `/about`
- `/achievements`
- `/certificates`
- `/certificates/[slug]` (all individual certificates)
- `/testimonials`
- `/plans`
- `/plans/[slug]` (all individual plans)
- `/contact`

Dynamic routes generated from content data.

---

## Robots

File: `app/robots.ts`

Generates `/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://siddharthfit.com/sitemap.xml
```

---

## Technical SEO

- Server-rendered HTML (crawlers see full content without JS)
- Semantic HTML elements (`<article>`, `<section>`, `<nav>`, `<main>`)
- Fast page load (LCP < 2.5s)
- No layout shifts (CLS < 0.1)
- Mobile-friendly responsive design
- Self-hosted fonts (no render-blocking external requests)
- Optimized images with `alt` text
- Internal linking between related pages (achievements > certificates > plans)
- Clean URL structure (no query parameters for navigation)

---

## Social Sharing

When someone shares a link to Siddharth Fit:
- Open Graph image should show the brand logo or a professional photo
- Description should be compelling and action-oriented
- URL should be clean (canonical)

Test with:
- Facebook Sharing Debugger
- Twitter Card Validator
- LinkedIn Post Inspector

---

## Local SEO (Future)

If Siddharth operates in a specific geographic area:
- Add `LocalBusiness` structured data
- Include city, state, service area
- Google Business Profile integration
