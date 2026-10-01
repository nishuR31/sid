# performance.md — Siddharth Fit

## Priority Order

1. Server-rendered HTML (meaningful content before JS loads)
2. Minimal client JavaScript (Server Components by default)
3. Optimized images (responsive, modern formats, lazy loaded)
4. No unnecessary dependencies
5. Lazy loading (code splitting, dynamic imports)
6. GPU-friendly animation (transform + opacity only)
7. Font optimization (self-hosted via `next/font`)
8. Proper caching (immutable assets, revalidation)
9. Responsive images (appropriate sizes for viewport)
10. Avoiding layout shifts (explicit dimensions on images/media)

---

## Core Web Vitals Targets

| Metric                          | Target  | Strategy                             |
| ------------------------------- | ------- | ------------------------------------ |
| LCP (Largest Contentful Paint)  | < 2.5s  | Hero image with `priority`, SSR HTML |
| INP (Interaction to Next Paint) | < 200ms | Minimal JS, no blocking handlers     |
| CLS (Cumulative Layout Shift)   | < 0.1   | Explicit image sizes, font `swap`    |

---

## Image Strategy

- All raster images through `next/image`
- Format priority: AVIF > WebP > JPEG
- `sizes` attribute on every image (viewport-aware)
- `priority` only on hero image
- Everything else: `loading="lazy"`
- Explicit `width` and `height` on all images
- Never serve a 4K image when a 700px mobile image is sufficient

---

## JavaScript Budget

- Client Components only where interaction requires it
- No heavy 3D libraries in initial bundle
- No unnecessary animation libraries (Framer Motion only if justified)
- Dynamic imports for search dialog, theme toggle, and effects
- Tree shaking via Next.js production build

---

## Font Loading

- Self-hosted via `next/font` (no runtime requests to Google)
- `display: swap` for text visibility during load
- Subset fonts to Latin characters unless internationalization needed
- Preload primary font weight (400) and display weight (700/800)

---

## Caching

- Static assets: long-lived immutable caching (`Cache-Control: public, max-age=31536000, immutable`)
- HTML pages: short cache with revalidation
- Images via `next/image`: automatic optimization and caching
- Future dynamic content: ISR with tag-based invalidation

---

## Build Optimization

- Tree shake unused code (automatic in Next.js production)
- Minimize CSS (Tailwind purges unused classes)
- Split client bundles (automatic code splitting per route)
- Static render static pages where possible
- No barrel exports that prevent tree shaking

---

## Animation Performance

Allowed (composited, GPU-friendly):

- `opacity`
- `transform` (translate, scale, rotate)

Forbidden (triggers layout/paint):

- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `box-shadow` continuously animated
- `border-radius` animated

All animations use `will-change` sparingly (only on elements currently animating).

---

## Monitoring

Pre-launch:

- Lighthouse CI on every build
- Manual testing on slow network (Chrome DevTools throttling)
- Mobile device testing (real devices preferred)

Post-launch:

- Vercel Analytics or equivalent for real-user metrics
- Core Web Vitals monitoring
- Bundle size tracking
