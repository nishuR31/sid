# security.md — Siddharth Fit

## Threat Model

Siddharth Fit is a public-facing static/SSR website with no authentication, no database, and no server-side data storage in version 1. The attack surface is minimal but must still be hardened.

### What is NOT present (reduces surface):
- No user accounts or authentication
- No database (no SQL injection, no data breach)
- No server-side form storage (no stored XSS, no data exfiltration)
- No payment credentials
- No API keys exposed to the client
- No admin panel

### What IS present (must be protected):
- Public HTML/JS served to all visitors
- Client-side rendering for interactive components
- External links to social platforms
- `mailto:` contact mechanism
- Future potential for API routes and CMS

---

## Security Headers

The following headers must be configured in `next.config.ts` or middleware:

### Content-Security-Policy
- Restrict script sources to `'self'` and trusted CDNs (Google Fonts)
- Restrict style sources to `'self'` and `'unsafe-inline'` (Tailwind)
- Restrict image sources to `'self'`, `data:`, and trusted image domains
- Restrict frame-ancestors to `'none'` (prevent clickjacking)

### X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```

### Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```

### Permissions-Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
```

### X-Frame-Options
```
X-Frame-Options: DENY
```

### Strict-Transport-Security
```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

---

## Content Security

### No Raw HTML Injection
- Do NOT use `dangerouslySetInnerHTML` unless content passes through a controlled sanitization pipeline
- All user-visible text should be rendered through React's default escaping
- If future CMS content requires HTML rendering, sanitize at both ingestion and rendering boundaries (use `DOMPurify` or equivalent)

### No Fabricated Content
- Content integrity is a security concern: false credentials or fake testimonials damage trust and may have legal consequences
- All public claims must be substantiable

---

## Secret Management

### Source Code
- No API keys, tokens, passwords, or credentials in source code
- No `.env` files committed to git
- `.env.local` and `.env.production` in `.gitignore`

### Environment Variables
- Stored only in deployment platform configuration (Vercel, etc.)
- Never exposed to the client bundle
- Server-side only: prefix with nothing (not `NEXT_PUBLIC_`)
- Client-side (if ever needed): use `NEXT_PUBLIC_` prefix and ensure the value is non-sensitive

### Git
- `.gitignore` must exclude: `.env*`, `node_modules/`, `.next/`, `out/`
- Pre-commit hooks (future) should scan for accidental secret commits

---

## Contact Security

### mailto: Approach
The contact form uses `mailto:` links. The browser's email client handles delivery.

Benefits:
- No server-side message storage (no database to breach)
- No spam storage or injection vector
- No credential requirements for email sending
- No backend complexity

Limitations:
- Delivery depends on the user's email client
- No server-side validation or rate limiting
- Acceptable for version 1

### Future Contact Backend
If server-side contact handling is added later:
- API route with input validation (Zod)
- Rate limiting (IP-based, sliding window)
- CSRF protection
- Email sent via transactional provider (Resend, Postmark)
- No raw user input stored unsanitized
- Honeypot field for bot detection

---

## Error Information Leakage

### Production UI
- Never display: stack traces, file paths, line numbers, internal error codes
- Display only: branded, human-readable error messages
- Example: "Something went wrong. Let's get you back on track."

### Logging
- Server-side: log full error details for debugging
- Client-side: send to controlled telemetry (future Sentry)
- Never log: passwords, email message bodies, PII beyond what's needed for debugging

---

## Dependency Security

- Keep dependencies minimal (fewer packages = smaller attack surface)
- Run `npm audit` periodically
- Future CI: add dependency scanning (GitHub Dependabot or equivalent)
- Review new dependencies before installation: check maintainer reputation, download counts, last update date

---

## Third-Party Services

### Analytics (if added)
- Use privacy-conscious analytics
- Track only useful events (CTA clicks, plan views, contact clicks)
- Do not collect unnecessary personal information
- Comply with applicable privacy regulations

### Fonts
- Google Fonts loaded via `next/font` (self-hosted, no external requests at runtime)
- No tracking cookies from font loading

---

## Future Security Additions

When the project evolves beyond static content:

- Authentication: OAuth or secure credential system for admin
- RBAC: Role-based access for trainer vs. public content
- API security: Input validation, rate limiting, CORS configuration
- Database security: Parameterized queries, encrypted connections
- Admin panel: Protected behind authentication, separate from public routes
