# .other — Siddharth Fit

## Future Ideas

### Blog

- Route: `/blog` and `/blog/[slug]`
- MDX-based content with code highlighting
- Categories: training tips, nutrition, mindset, client spotlights
- Requires content pipeline (MDX loader or CMS)

### Programs

- Route: `/programs` and `/programs/[slug]`
- Structured workout programs with duration, difficulty, target
- Separate from plans (programs = content, plans = services)

### Resources

- Route: `/resources` and `/resources/[slug]`
- Downloadable workout templates, meal guidelines
- PDF or structured web content

### FAQ

- Route: `/faq`
- Common questions about coaching, pricing, scheduling
- Expandable accordion interface

### Appointment Requests

- Integration with Cal.com or similar
- Embedded scheduling widget
- Requires API key management

### Client Dashboard

- Protected area for enrolled clients
- Workout plans, progress tracking, messaging
- Requires authentication, database, and significant scope expansion

---

## Known Limitations

### Contact System

- `mailto:` depends on the user having a configured email client
- No server-side message tracking or lead analytics
- No confirmation that the message was sent
- Acceptable for v1; consider server-side form in v2

### Static Content

- Content changes require code deployment
- No draft/preview workflow
- No scheduled publishing
- Migration to CMS eliminates these limitations

### Search

- Client-side index only; may become slow with large content volume
- No fuzzy matching or relevance scoring beyond basic string matching
- Future: server-side search index or Algolia/Meilisearch

### 3D / Visual Effects

- CSS 3D has limited capability compared to Three.js/WebGL
- Mobile performance varies; effects must degrade gracefully
- No real 3D model rendering without adding a heavy library

### No Analytics in v1

- No visibility into user behavior
- No conversion tracking
- Add privacy-conscious analytics post-launch

---

## Design Experiments

### Glassmorphism Variant

- Some cards could use `backdrop-filter: blur()` with semi-transparent backgrounds
- Works well in dark mode over gradient backgrounds
- Performance concern on low-end mobile; use sparingly

### Animated Gradient Borders

- Subtle rotating gradient on featured plan cards
- CSS `@property` based animation for GPU efficiency
- Only on 1-2 elements, not everywhere

### Parallax Hero Layers

- Multiple depth layers (background, midground, foreground)
- Different parallax speeds create depth
- Must be completely disabled for reduced motion

---

## Possible SaaS Evolution

If Siddharth wants to expand into a multi-trainer platform:

### Phase 1: Admin Dashboard

- Trainer manages own content (plans, certificates, testimonials)
- Protected behind authentication
- Public site consumes published content via API

### Phase 2: Client Management

- Lead tracking and status pipeline
- Client profiles with goals and progress
- Contact analytics

### Phase 3: Multi-Trainer

- Multiple trainer profiles on one platform
- Each trainer has their own subdomain or route
- Shared infrastructure, independent content

### Phase 4: Full SaaS

- Subscription billing for trainers (not clients)
- Workout builder
- Progress tracking
- Client-trainer messaging
- Mobile app consideration

None of these phases should influence v1 architecture decisions. The codebase should merely not prevent evolution.

---

## Technical Debt Register

| Item                   | Status | Priority | Notes                                 |
| ---------------------- | ------ | -------- | ------------------------------------- |
| Placeholder content    | Active | High     | Must replace before launch            |
| No analytics           | Active | Medium   | Add post-launch                       |
| No server-side contact | Active | Low      | `mailto:` is sufficient for v1        |
| No automated tests     | Active | Medium   | Add component tests incrementally     |
| No CI pipeline         | Active | Medium   | Set up GitHub Actions                 |
| No error telemetry     | Active | Low      | Add Sentry when traffic grows         |
| Hardcoded search index | Active | Low      | Sufficient until content volume grows |

---

## Future Integrations

| Integration           | Purpose                     | Priority | Dependency                    |
| --------------------- | --------------------------- | -------- | ----------------------------- |
| Resend / Postmark     | Server-side contact emails  | Medium   | API route + env config        |
| Sentry                | Error monitoring            | Low      | SDK + project setup           |
| Vercel Analytics      | Privacy-conscious analytics | Medium   | Vercel deployment             |
| Cal.com               | Appointment scheduling      | Low      | Embed widget + API key        |
| Sanity / Contentlayer | CMS for content management  | Low      | Schema + migration            |
| Zod                   | Runtime data validation     | High     | Install when API routes added |
