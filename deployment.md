# deployment.md — Siddharth Fit

## Recommended Platform

Primary: **Vercel** (native Next.js support, edge network, automatic optimizations)

Alternative: Node.js server or container (Docker) on any cloud provider.

---

## Deployment Pipeline

```
Git push to main
  --> CI (GitHub Actions)
    --> TypeScript typecheck (tsc --noEmit)
    --> ESLint
    --> Production build (next build)
    --> Deploy to Vercel
    --> Smoke test (verify critical routes return 200)
```

---

## Environment Variables

### Rules

- NEVER commit `.env` files to git
- Store secrets only in the deployment platform's environment configuration
- Server-only variables: no `NEXT_PUBLIC_` prefix
- Client-safe variables (if ever needed): use `NEXT_PUBLIC_` prefix, ensure non-sensitive

### Current Variables (v1)

None required. The site is fully static/SSR with no external API dependencies.

### Future Variables

| Variable               | Purpose                   | Visibility  |
| ---------------------- | ------------------------- | ----------- |
| `CONTACT_EMAIL`        | Server-side email sending | Server only |
| `RESEND_API_KEY`       | Transactional email       | Server only |
| `SENTRY_DSN`           | Error monitoring          | Server only |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL generation  | Client safe |

---

## Git Strategy

### Branches

- `main` — production-ready, auto-deploys
- `develop` — integration branch
- `feature/*` — individual features
- `fix/*` — bug fixes
- `chore/*` — tooling, config, docs

### Commit Convention

```
feat: add certificate detail page
fix: correct mobile nav keyboard trap
refactor: extract plan card component
perf: lazy load certificate images
docs: add deployment instructions
chore: update eslint config
```

---

## Pre-Deployment Checklist

- [ ] `tsc --noEmit` passes (zero TypeScript errors)
- [ ] `eslint .` passes (zero lint errors)
- [ ] `next build` succeeds
- [ ] No console errors in browser
- [ ] All routes return appropriate status codes
- [ ] 404 page renders correctly
- [ ] Error boundary renders correctly
- [ ] Light theme renders correctly
- [ ] Dark theme renders correctly
- [ ] Mobile navigation works
- [ ] Contact mailto: opens email client
- [ ] Social links point to correct URLs
- [ ] No placeholder content remains in production
- [ ] No secrets in source code
- [ ] Security headers configured
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots accessible at /robots.txt
- [ ] Lighthouse score reviewed
- [ ] Mobile device tested (real device preferred)

---

## Domain Configuration

1. Purchase domain (e.g., siddharthfit.com)
2. Point DNS to Vercel (or hosting provider)
3. Configure HTTPS (automatic on Vercel)
4. Set canonical URL in site config
5. Update sitemap and OG metadata with production URL
6. Verify with Google Search Console
7. Submit sitemap

---

## CI/CD (GitHub Actions)

### Pull Request Workflow

```yaml
on: pull_request
jobs:
  quality:
    steps:
      - Checkout
      - Install dependencies
      - Run: tsc --noEmit
      - Run: eslint .
      - Run: next build
```

### Main Branch Workflow

```yaml
on:
  push:
    branches: [main]
jobs:
  deploy:
    steps:
      - Checkout
      - Install dependencies
      - Build
      - Deploy to Vercel (via Vercel GitHub integration or CLI)
```

---

## Rollback

If a deployment introduces a critical issue:

1. Vercel: instant rollback to previous deployment via dashboard
2. Git: revert commit and push to main
3. Verify rollback deployment is stable
