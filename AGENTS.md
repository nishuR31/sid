# AGENTS.md — Siddharth Fit

## Identity

Siddharth Fit is a premium personal-trainer portfolio and lead-generation website.
It is NOT an e-commerce platform, SaaS product, or payment-enabled application.

## Stack

- Next.js (App Router)
- TypeScript (strict)
- React (Server Components by default)
- Tailwind CSS
- SSR-first rendering

## Hard Rules

### Content Integrity

- NEVER fabricate achievements, certifications, testimonials, or credentials
- NEVER invent client names, social URLs, phone numbers, or email addresses
- NEVER generate fake identity photographs of Siddharth
- Use clearly marked `[PLACEHOLDER]` for all content awaiting real data
- Every public claim must be substantiable by Siddharth

### No Payments

- NEVER add Stripe, Razorpay, PayPal, or any payment gateway
- NEVER create checkout flows, carts, or subscription billing
- NEVER use "Buy Now", "Subscribe", or "Checkout" as CTA text
- Pricing is informational only: "Starting from..."
- Primary CTA is always: "Talk to Siddharth"

### Architecture

- Server Components by default; Client Components only when interaction requires it
- Do NOT convert entire pages into Client Components
- Content lives in `/content/*.ts` files, separated from UI components
- Every content entity has an explicit TypeScript type
- No `any` types
- No `dangerouslySetInnerHTML` without explicit sanitization pipeline

### Dependencies

- Before adding any dependency, ask: Can Next.js / React / CSS / the browser solve this?
- If yes, do not add the dependency
- No heavy 3D libraries in the critical rendering path
- No unnecessary animation libraries

### Accessibility

- Keyboard navigation on all interactive elements
- Visible focus indicators
- Semantic HTML and heading hierarchy
- `alt` text on meaningful images
- `aria-hidden="true"` on decorative elements
- Respect `prefers-reduced-motion`

### Performance

- No layout-triggering animations (width, height, top, left)
- Use `transform` and `opacity` for all motion
- `next/image` for all raster images
- Lazy loading everywhere except hero
- Target excellent Core Web Vitals

### SEO

- Every route needs: title, description, canonical, Open Graph, Twitter metadata
- Structured data where appropriate (Person, ProfessionalService)
- `/sitemap.xml` and `/robots.txt` generated
- Single `<h1>` per page

### Security

- No secrets in source code
- No exposed API keys, credentials, or environment variables
- No internal stack traces in production UI
- Security headers: CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

### Medical/Legal

- No fitness guarantees ("Guaranteed six-pack", "Guaranteed weight loss")
- No medical claims or advice
- Use: "Progress depends on individual factors"

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
