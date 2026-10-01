# Siddharth Fit

## Master Product, UX, Architecture & Engineering Plan

Version: 1.0
Status: Production-ready implementation blueprint
Primary stack: Next.js + TypeScript + React + Tailwind CSS
Rendering strategy: SSR-first / Server Components by default
Business model: Personal trainer / fitness coaching lead-generation website
Payments: NOT supported on website
Primary conversion: Direct contact with Siddharth

---

# 1. Product Definition

Siddharth Fit is a premium personal-trainer portfolio and fitness-coaching website for Siddharth.

The website is not an e-commerce platform.

Its purpose is to:

1. Establish Siddharth's professional identity.
2. Display his training philosophy and expertise.
3. Present verified achievements and certifications.
4. Show genuine client feedback.
5. Explain available coaching plans.
6. Give users enough pricing information to understand the service.
7. Convert interested visitors into direct conversations with Siddharth.
8. Provide multiple contact mechanisms.
9. Build trust before the user makes contact.
10. Provide a premium, calm and technically polished experience.

The website must never create the impression that users can purchase a plan directly through the website.

The primary CTA throughout the website is:

"Talk to Siddharth"

Secondary CTAs:

"View Plans"
"See Certifications"
"Read Client Stories"
"Ask About Custom Coaching"

---

# 2. Business Model

The website operates as a lead-generation system.

User flow:

Visitor
→ understands Siddharth
→ sees proof
→ evaluates coaching
→ checks approximate pricing
→ chooses a suitable plan
→ contacts Siddharth
→ Siddharth discusses requirements
→ payment/onboarding happens externally

No:

- Stripe
- Razorpay
- PayPal
- checkout
- cart
- payment gateway
- subscription billing
- payment credentials
- online purchase confirmation

The website only communicates approximate/general pricing.

Example:

Monthly Coaching
Starting from ₹X,XXX/month

Yearly Coaching
Starting from ₹XX,XXX/year

Personal Guidance
Starting from ₹X,XXX

Custom Coaching
Pricing after consultation

Actual prices must be configurable from the content layer.

---

# 3. Target Users

Primary audience:

- Students
- Young professionals
- Beginners
- Intermediate gym users
- People seeking structured training
- People wanting accountability
- People wanting personalized guidance

Secondary audience:

- Existing clients
- People referred by existing clients
- Social-media visitors
- Gym/community contacts

The interface must therefore avoid an aggressive bodybuilding aesthetic.

The visual direction should communicate:

- discipline
- calm
- trust
- energy
- professionalism
- physical strength
- mental clarity
- consistency

---

# 4. Brand Psychology

The visual identity should combine fitness energy with psychological calm.

Avoid:

- excessive red
- aggressive black/red bodybuilding aesthetics
- neon colors
- excessive gradients
- visual noise
- excessive animations
- fake luxury styling

Preferred palette:

Primary:
Deep forest / muted emerald

Secondary:
Sage

Surface:
Warm off-white / soft cream

Accent:
Muted teal

Dark:
Deep charcoal / near-black green

Optional highlight:
Soft amber used sparingly

The psychological reasoning:

Green:
Health, growth, balance, recovery.

Teal:
Calmness, trust, modernity.

Cream:
Human warmth and reduced visual fatigue.

Dark charcoal:
Strength and seriousness without aggressive visual messaging.

Sage:
Recovery, natural movement and mental calm.

The site should feel closer to:

"premium wellness studio"

than:

"hardcore bodybuilding advertisement."

---

# 5. Design Language

Primary design language:

Claymorphism + soft glass + controlled depth.

Claymorphism should be subtle.

Do not make every element look like inflated plastic.

Use:

- large soft-radius cards
- layered surfaces
- low-contrast shadows
- inset shadows
- subtle borders
- soft gradients
- controlled elevation

Cards should feel physical but remain professional.

Radius system:

sm:
10px

md:
16px

lg:
24px

xl:
32px

Hero elements may use larger radii.

---

# 6. Typography

Typography should be modern and highly readable.

Recommended:

Primary:
Inter / Geist / Manrope

Display:
Geist / Manrope

Use large display typography for:

- hero
- section titles
- pricing

Avoid overly decorative fonts.

Typography hierarchy:

Hero:
clamp(3rem, 7vw, 7rem)

Section heading:
clamp(2rem, 4vw, 4rem)

Body:
16–18px

Supporting text:
14–16px

---

# 7. Site Architecture

Main routes:

/
├── /about
├── /achievements
├── /certificates
├── /certificates/[slug]
├── /testimonials
├── /plans
├── /plans/[slug]
├── /contact
├── /search
├── /404
└── /api
└── health

Future routes:

/blog
/blog/[slug]

/programs
/programs/[slug]

/resources
/resources/[slug]

/faq

/admin

The current implementation must not require an admin dashboard.

Content should initially be file/data driven.

---

# 8. Homepage Structure

The homepage should tell a complete story without requiring the user to navigate elsewhere.

Sequence:

1. Navigation
2. Hero
3. Trust indicators
4. Siddharth introduction
5. Training philosophy
6. Services
7. Achievements
8. Certifications
9. Client testimonials
10. Plans
11. Custom coaching
12. Contact CTA
13. Footer

---

# 9. Hero Section

Hero objective:

Immediately answer:

Who is Siddharth?
What does he do?
Why should I care?
What should I do next?

Content structure:

Eyebrow:

PERSONAL TRAINER • FITNESS COACH

Headline:

"Build a stronger body. Build a more disciplined life."

Supporting text:

Short explanation of Siddharth's coaching philosophy.

CTA:

Talk to Siddharth

Secondary:

Explore Coaching

Visual:

Large portrait of Siddharth.

The real photograph must be provided by the client.

Do not generate a fake identity photograph.

---

# 10. Hero Visual Effects

Maximum three primary visual effects.

Effect 1:
Pointer parallax.

The portrait/background shifts subtly according to pointer position.

Effect 2:
Scroll reveal.

Sections enter using small opacity + translate transitions.

Effect 3:
3D tilt.

Selected cards respond subtly to pointer movement.

Do not apply all three effects to every element.

Effects must be:

- GPU-friendly
- transform-based
- low amplitude
- disabled/reduced under prefers-reduced-motion

---

# 11. 3D Strategy

Do not introduce Three.js merely because "3D looks cool."

The preferred initial solution is CSS 3D.

Possible objects:

- abstract dumbbell
- geometric fitness object
- floating rings
- training plate
- monogram/logo object

If real 3D assets are later introduced:

Use:

GLB/GLTF

Load lazily.

Never place a heavy 3D scene in the critical rendering path.

Desktop:
Full visual.

Mobile:
Simplified/static visual.

Reduced motion:
Static visual.

---

# 12. About Section

The About section establishes personality and credibility.

Include:

- portrait
- short biography
- coaching philosophy
- experience
- specialties
- training approach

Possible content categories:

Strength
Mobility
Fat Loss
Conditioning
Beginner Training
Lifestyle Discipline
Personalized Programming

All claims must be factually supplied by Siddharth.

---

# 13. Achievements

Achievements are evidence, not decoration.

Each achievement should contain:

- title
- year
- organization
- category
- short description
- optional image
- optional verification/reference

Example:

Competition Achievement
2025
ABC Fitness Federation

Description.

Do not invent achievements.

If an achievement cannot be verified or supplied by Siddharth, it should remain a placeholder.

---

# 14. Certifications

Certificates deserve a dedicated route.

`/certificates`

Each certificate:

- certificate title
- issuing organization
- credential ID if applicable
- date
- expiry date if applicable
- image
- verification URL if available

Individual certificate route:

`/certificates/[slug]`

The individual page can provide:

- larger certificate preview
- credential details
- issuer
- verification link
- related expertise

Images should use optimized Next.js image handling.

---

# 15. Testimonials

Testimonials must represent real users.

No fabricated reviews.

Data structure:

name
optional profile image
relationship/context
testimonial
date
optional social verification
optional permission flag

Example:

{
name,
role,
quote,
image,
date
}

If the client does not have permission to publish a person's name/photo:

Use:

"Verified Client"

or another legally appropriate anonymized identity.

Do not manufacture testimonials.

---

# 16. Plans

Plans are informational.

Route:

`/plans`

Individual plans:

`/plans/[slug]`

Initial categories:

Monthly Coaching

Yearly Coaching

Guidance Session

Custom Coaching

Each plan should show:

- name
- short description
- starting price
- billing period
- suitable-for
- included features
- CTA

CTA:

"Discuss This Plan"

Not:

"Buy Now"

Not:

"Subscribe"

Not:

"Checkout"

---

# 17. Pricing Presentation

Pricing should be deliberately non-transactional.

Example:

Starting at

₹X,XXX / month

Then:

"Final pricing depends on your goals, training requirements and level of personalization."

CTA:

"Talk to Siddharth"

This prevents the website from becoming an accidental payment platform.

---

# 18. Custom Coaching

Custom coaching gets a dedicated section.

User sees:

"Your goals aren't necessarily standard. Your plan doesn't have to be either."

Explain:

- goals
- schedule
- training experience
- constraints
- preferences
- desired outcomes

CTA:

"Discuss a Custom Plan"

This should lead to `/contact`.

---

# 19. Contact System

The contact system must be intentionally simple.

Fields:

Name
Email
Subject
Message

Optional:

Phone
Preferred contact method
Interested plan

But the basic implementation must remain lightweight.

Submission mechanism:

`mailto:`

Example:

mailto:siddharth@example.com

with:

subject

body

The website does not send email through its own backend.

The browser opens the user's configured email application/service.

---

# 20. Contact UX

After clicking:

"Send via Email"

the browser should open the configured email client.

Provide fallback text:

"If your email app did not open, contact Siddharth directly."

Also display:

- email
- Instagram
- WhatsApp if supplied
- other verified social profiles

Only actual links supplied by Siddharth should be used.

---

# 21. Social Links

Social links should exist in:

- navbar/footer where appropriate
- About
- Contact
- Hero if useful

Potential platforms:

Instagram
YouTube
LinkedIn
Facebook

Do not display empty social icons.

If Siddharth has no account on a platform, do not show it.

---

# 22. Search

The website should support lightweight route/content search.

Search should index:

- pages
- plans
- achievements
- certificates
- testimonials
- services

Initial implementation:

Static client-side index.

No database required.

Future:

Search backend if content volume grows.

Search UX:

`Ctrl + K`

or

`Cmd + K`

Mobile:

Dedicated search button.

---

# 23. Error Experience

The 404 page should not be generic.

Concept:

"Looks like this set got interrupted."

Example messaging:

"Looks like this set isn't here anymore."

Provide:

- search
- homepage
- plans
- contact

Search can help users recover from incorrect routes.

---

# 24. Runtime Error Boundary

Use route-level:

`error.tsx`

and global:

`global-error.tsx`

Error UI should:

- explain that something went wrong
- provide retry
- provide homepage navigation
- avoid exposing stack traces
- log details only in controlled production telemetry

---

# 25. Stale Build Recovery

A common deployment issue is:

Old browser bundle

- # New deployment

missing JavaScript chunk

The client recovery mechanism should detect chunk-loading failures.

Strategy:

1. Detect dynamic import/chunk failure.
2. Check whether recovery has already occurred.
3. Clear stale runtime state where appropriate.
4. Perform one controlled reload.
5. Prevent reload loops.

Use sessionStorage/localStorage guard.

Never continuously reload.

---

# 26. Rendering Architecture

Default:

Server Components.

Client Components only when required.

Client components are appropriate for:

- theme switcher
- pointer parallax
- 3D interaction
- search dialog
- contact interaction
- animated navigation state

Do not convert entire pages into Client Components.

---

# 27. SSR Strategy

Every content page should render meaningful HTML on the server.

Benefits:

- SEO
- faster first content
- better crawler visibility
- better resilience
- less client JavaScript

The page should remain useful even if JavaScript fails.

Progressive enhancement is preferred.

---

# 28. Component Architecture

Recommended:

components/
├── layout/
├── navigation/
├── hero/
├── about/
├── achievements/
├── certificates/
├── testimonials/
├── plans/
├── contact/
├── effects/
├── search/
├── theme/
├── ui/
└── seo/

Each component should have one clear responsibility.

Avoid a 1,000-line homepage component.

---

# 29. Data Architecture

Content should be separated from UI.

Recommended:

content/
├── site.ts
├── plans.ts
├── achievements.ts
├── certificates.ts
├── testimonials.ts
└── social.ts

This allows Siddharth's content to change without modifying component logic.

Later migration:

Static content
→ JSON/MDX
→ CMS
→ database/API

without rebuilding the entire frontend architecture.

---

# 30. Type System

Every content entity should have an explicit TypeScript type.

Examples:

Plan

Achievement

Certificate

Testimonial

SocialLink

TrainerProfile

Avoid:

`any`

Avoid untyped content objects.

Use discriminated unions where appropriate.

---

# 31. Memoization Strategy

Do not blindly use:

`useMemo`

`useCallback`

`memo`

everywhere.

Use them where they solve an actual problem.

Use `React.memo` for:

- repeated expensive cards
- components receiving stable props
- components rendered frequently

Use `useCallback` when:

- a callback is passed to memoized children
- callback identity affects rendering

Use `useMemo` when:

- derived computation is genuinely non-trivial
- expensive filtering/sorting occurs
- stable object identity matters

Do not memoize primitive calculations.

Server Components reduce the need for client-side memoization.

---

# 32. Performance Architecture

Performance priorities:

1. Server-rendered HTML
2. Minimal JavaScript
3. Optimized images
4. No unnecessary dependencies
5. Lazy loading
6. GPU-friendly animation
7. Font optimization
8. Proper caching
9. Responsive images
10. Avoiding layout shifts

Target:

Excellent Core Web Vitals.

---

# 33. Image Optimization

All real images should use:

`next/image`

Use:

- AVIF where practical
- WebP fallback
- responsive sizes
- explicit width/height
- priority only for hero image
- lazy loading elsewhere

Never load a 4K image when a 700px mobile image is sufficient.

Recommended image categories:

Hero:
high priority

Certificate gallery:
lazy

Testimonials:
lazy

Decorative assets:
lazy or CSS

---

# 34. SVG Strategy

Use SVG for:

- logo
- icons
- simple illustrations
- decorative geometry

SVGs must not contain unnecessary metadata.

Avoid huge inline SVG blobs.

Use accessible labels when SVG is meaningful content.

Decorative SVGs should use:

`aria-hidden="true"`

---

# 35. PNG Strategy

PNG should be used only when it provides an actual advantage.

Prefer:

SVG for vectors.

WebP/AVIF for photographs.

PNG for:

- transparent raster assets
- specific legacy graphics
- screenshots where lossless output matters

---

# 36. CSS Architecture

Use Tailwind for layout and design tokens.

Keep complex effects in dedicated CSS where that produces clearer code.

Avoid:

- excessive arbitrary Tailwind values
- duplicated styles
- inline style everywhere
- giant global stylesheet

Design tokens should define:

colors
spacing
radius
shadow
typography
motion

---

# 37. Animation Architecture

Animation principles:

Motion should explain hierarchy.

Do not animate everything.

Use:

opacity
transform
scale
translate
rotate

Avoid animating:

width
height
top
left
box-shadow continuously

because these can trigger expensive layout/paint work.

---

# 38. Accessibility

Required:

WCAG-oriented implementation.

Must include:

- keyboard navigation
- visible focus
- semantic headings
- semantic landmarks
- alt text
- form labels
- sufficient contrast
- reduced motion
- accessible buttons
- accessible dialog
- screen-reader-friendly navigation

Never make a UI element accessible only through pointer interaction.

---

# 39. Responsive Strategy

Breakpoints should be based on layout requirements rather than devices.

Mobile first.

Test:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Hero must remain usable on small screens.

3D/parallax effects should be reduced or disabled where necessary.

---

# 40. Mobile Navigation

Desktop:

Full navigation.

Mobile:

Compact header.

Menu:

Home
About
Achievements
Certificates
Testimonials
Plans
Contact

Primary mobile CTA:

"Contact"

Menu should close after navigation.

Keyboard and screen-reader support required.

---

# 41. Theme System

Three modes:

Light
Dark
System

Theme preference must persist.

Initial theme:

System.

Avoid flash of incorrect theme.

Use appropriate server/client theme initialization.

Theme icon should communicate state:

Sun
Moon
Monitor/System

---

# 42. SEO

Every major route needs:

- title
- description
- canonical URL
- Open Graph metadata
- Twitter metadata
- appropriate robots configuration

Structured data where appropriate:

Person
ProfessionalService
Review/Testimonial where legally and technically appropriate
WebSite

Do not fabricate ratings.

---

# 43. Sitemap

Generate:

`/sitemap.xml`

Include:

home
about
achievements
certificates
testimonials
plans
contact

Dynamic certificate and plan routes should be included automatically.

---

# 44. Robots

Provide:

`/robots.txt`

Allow normal public crawling.

Prevent crawling of internal/future admin areas.

---

# 45. Security

No authentication is initially required.

Security headers:

Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Frame restrictions

Do not expose:

- secrets
- private email credentials
- API keys
- internal stack traces
- environment variables

---

# 46. Content Security

User-controlled text should never be rendered as raw HTML unless sanitized.

Avoid:

`dangerouslySetInnerHTML`

unless there is a specific controlled content pipeline.

If future CMS content requires HTML:

sanitize at ingestion and rendering boundaries.

---

# 47. Contact Security

Because contact uses `mailto:`:

There is no server-side message storage.

This reduces:

- database attack surface
- spam storage
- credential requirements
- backend complexity

Potential downside:

The browser/email client controls delivery.

This is acceptable for version one.

---

# 48. Future Contact Backend

If lead tracking becomes necessary:

Website
→ API
→ validation
→ rate limiting
→ email provider
→ optional CRM

Possible stack:

Fastify/API route

- Resend/Postmark/etc.
- database

This should be a future feature, not part of the initial scope.

---

# 49. Analytics

Analytics should be privacy-conscious.

Track only useful events.

Potential events:

hero_cta_click
plan_view
plan_contact_click
certificate_view
testimonial_section_view
contact_click
social_click

Do not collect unnecessary personal information.

---

# 50. Micro-SaaS Direction

The architecture should leave room for future conversion into a small trainer platform.

Possible future capabilities:

Trainer profile management
Client leads
Plan management
Certificate management
Testimonial management
Content management
Lead dashboard
Contact analytics
Appointment requests
Workout resources

Potential architecture:

Public website

- Admin dashboard
- Content API
- database

But these should not complicate the initial static portfolio.

---

# 51. Future Admin Architecture

Future:

`/admin`

Authentication:

OAuth or secure credentials.

Admin can manage:

- plans
- achievements
- certificates
- testimonials
- social links
- profile
- pricing
- SEO

Public site consumes published content only.

Draft/published states should be supported.

---

# 52. Content Publishing Model

Future content lifecycle:

Draft
→ Review
→ Published
→ Archived

Testimonials should have:

pending
approved
rejected

This prevents accidental publication of unverified testimonials.

---

# 53. Data Validation

Use runtime validation when external data enters the system.

Recommended:

Zod

Validate:

- contact data
- future API payloads
- CMS data
- plan data
- certificate data

TypeScript protects development-time correctness.

Runtime validation protects actual boundaries.

---

# 54. Error Logging

Production errors should be observable.

Possible future integration:

Sentry

Capture:

- runtime errors
- chunk errors
- route failures
- critical client exceptions

Do not send:

passwords
private messages
unnecessary PII

---

# 55. Dependency Strategy

Keep dependencies minimal.

Avoid installing a package for something that can be solved with:

- CSS
- native browser APIs
- React
- Next.js

Every dependency increases:

- bundle size
- security surface
- maintenance
- upgrade complexity

---

# 56. Build Optimization

Production build should:

- tree shake unused code
- optimize images
- minimize CSS
- split client bundles
- statically render static pages where possible
- cache immutable assets

Use Server Components to reduce client bundle size.

---

# 57. Caching

Static content should be cached aggressively.

Images should use long-lived immutable caching where possible.

Future dynamic content should use:

- revalidation
- tag-based invalidation
- CDN caching

Do not disable caching globally.

---

# 58. Route Organization

Use route groups where useful.

Potential:

app/
├── (marketing)/
│ ├── page.tsx
│ ├── about/
│ ├── plans/
│ ├── certificates/
│ └── contact/
├── search/
├── not-found.tsx
├── error.tsx
└── global-error.tsx

This keeps the public site organized without affecting URL structure.

---

# 59. Metadata Architecture

Centralize brand metadata.

Example:

siteConfig = {
name,
description,
url,
email,
socials,
trainerName
}

Individual routes override only what they need.

---

# 60. Content Placeholder Policy

The following MUST NOT be fabricated:

- Siddharth's achievements
- certificate names
- credential IDs
- years
- competition results
- client names
- testimonials
- social URLs
- phone numbers
- email addresses
- pricing
- professional claims

Use clearly marked placeholders.

---

# 61. Real Assets Required From Siddharth

Before production launch, collect:

1. Primary portrait.
2. 2–5 training photographs.
3. Logo if available.
4. Certificates.
5. Achievement list.
6. Social links.
7. Email.
8. Phone/WhatsApp if desired.
9. Actual plan names.
10. General pricing.
11. Services.
12. Training specialties.
13. Biography.
14. 3–10 genuine testimonials.
15. Permission to publish testimonials/images.
16. Verification URLs for certificates if available.

---

# 62. Content Quality Rules

Every public claim should answer:

"Can Siddharth substantiate this?"

Avoid generic claims such as:

"World's best trainer."

Prefer factual claims:

"Certified in X."

"X years of coaching experience."

"Specializes in X."

"Completed X competition."

Only if supplied and verifiable.

---

# 63. User Journey

Primary journey:

Instagram/social
→ homepage
→ Siddharth credibility
→ achievements/certifications
→ testimonials
→ plans
→ contact

Secondary:

Google
→ specific certificate/plan
→ profile
→ contact

Third:

Direct referral
→ testimonials
→ plans
→ contact

---

# 64. Conversion Strategy

Every page should have a logical next action.

About:
→ View Credentials

Achievements:
→ View Certificates

Certificates:
→ View Coaching

Testimonials:
→ Explore Plans

Plans:
→ Talk to Siddharth

Contact:
→ Email Siddharth

Do not put five competing CTAs everywhere.

---

# 65. Footer

Footer should contain:

Siddharth Fit logo

Short description

Navigation

Social links

Email

Contact CTA

Copyright

Privacy/terms pages when implemented

---

# 66. Privacy

Because the initial site does not store contact submissions, privacy requirements remain relatively small.

If analytics or forms are introduced later:

Add:

Privacy Policy
Cookie disclosure where legally required
Data retention policy
Third-party processor disclosure

---

# 67. Legal Content

Future pages:

`/privacy`
`/terms`
`/disclaimer`

Fitness disclaimer should clarify that coaching information does not replace professional medical advice where applicable.

Do not make medical claims.

---

# 68. Fitness Claims

Avoid guarantees.

Do not write:

"Guaranteed six-pack."

"Guaranteed weight loss."

"Guaranteed transformation."

Prefer:

"Structured coaching designed around your goals."

"Progress depends on individual factors."

This protects both credibility and legal risk.

---

# 69. Development Workflow

Development flow:

1. Define content.
2. Define types.
3. Build data layer.
4. Build design tokens.
5. Build primitive UI.
6. Build layout.
7. Build page sections.
8. Add responsive behavior.
9. Add interactions.
10. Add SEO.
11. Add accessibility.
12. Add security.
13. Run static checks.
14. Run production build.
15. Run Lighthouse.
16. Test mobile.
17. Test keyboard navigation.
18. Review content.
19. Deploy.

---

# 70. Quality Gates

Before deployment:

TypeScript:
PASS

ESLint:
PASS

Build:
PASS

No broken routes:
PASS

No console errors:
PASS

Lighthouse:
Target high scores

Accessibility:
No critical violations

Mobile:
PASS

Desktop:
PASS

Reduced motion:
PASS

Dark mode:
PASS

Search:
PASS

404:
PASS

Error boundary:
PASS

Contact mailto:
PASS

---

# 71. Testing Matrix

Test:

Chrome
Firefox
Safari
Edge

Android Chrome
iOS Safari

Keyboard only

Reduced motion

Dark mode

Slow network

JavaScript disabled where practical

Invalid route

Invalid certificate route

Invalid plan route

Chunk loading failure

Image loading failure

Missing optional content

Long testimonial

Long plan name

Very narrow viewport

Very wide viewport

---

# 72. Performance Budget

Initial target:

HTML:
small and server-rendered

Initial JS:
as little as reasonably possible

Hero image:
optimized and responsive

No large client-side framework beyond required React/Next runtime.

No heavy 3D library in initial bundle.

No unnecessary animation library.

---

# 73. Bundle Discipline

Before adding a dependency ask:

Can Next.js solve this?

Can React solve this?

Can CSS solve this?

Can the browser solve this?

If yes, do not add the dependency.

---

# 74. Production Deployment

Recommended:

Vercel

Alternative:

Node.js server/container.

Deployment pipeline:

Git push
→ CI
→ typecheck
→ lint
→ build
→ deployment
→ smoke test

Environment variables should be stored only in deployment configuration.

---

# 75. CI/CD

Future GitHub Actions:

Pull request:

typecheck
lint
test
build

Main branch:

build
deploy

Dependency/security scanning can run periodically.

---

# 76. Git Strategy

Branches:

main
develop
feature/_
fix/_
chore/\*

Commit style:

feat:
fix:
refactor:
perf:
docs:
chore:

Keep commits focused.

---

# 77. Code Review Rules

Review for:

correctness
accessibility
performance
security
SEO
maintainability
responsive behavior
unnecessary client-side code

Reject:

unnecessary state
unnecessary effects
unnecessary dependencies
duplicated components
fake content
hardcoded secrets

---

# 78. `/coderabbit`

CodeRabbit review configuration should focus on:

- TypeScript correctness
- React rendering
- unnecessary re-renders
- accessibility
- security
- Next.js Server/Client Component boundaries
- SEO
- image optimization
- error handling
- maintainability

Do not optimize purely for stylistic comments.

---

# 79. `/uiuxpromax`

UI review should inspect:

- hierarchy
- spacing
- contrast
- CTA placement
- mobile usability
- visual consistency
- typography
- motion
- cognitive load
- empty states
- error states
- loading states

The UI should remain calm rather than visually overloaded.

---

# 80. `/claude`

Claude-oriented implementation prompt should enforce:

- SSR-first
- Server Components
- typed content
- reusable components
- accessible interaction
- minimal dependencies
- production-quality TypeScript
- no fabricated content
- no unnecessary abstractions

---

# 81. `/thing`

The `/thing` workflow should be used as a project checklist for:

- feature requirements
- content requirements
- asset requirements
- implementation status
- testing status
- deployment readiness

It should not become another runtime dependency.

---

# 82. Documentation

Repository documentation must include:

README.md
implementation.md
architecture.md
security.md
performance.md
accessibility.md
seo.md
deployment.md
other-things.md
AGENTS.md

Planning files:

.plan
.context
.architecture
.error
.other

---

# 83. `.context`

`.context` should contain:

project purpose
brand direction
technical constraints
business constraints
content rules
non-goals
future direction

This prevents future AI/code contributors from misunderstanding the project.

---

# 84. `.architecture`

`.architecture` should describe:

App Router
Server Components
Client Components
content layer
component layer
routing
SEO
security
error architecture
future API architecture

---

# 85. `.error`

`.error` should document:

404 strategy
route errors
global errors
chunk failures
stale build recovery
logging
retry behavior
reload guard
user-facing error language

---

# 86. `.other`

`.other` should contain:

future ideas
known limitations
design experiments
possible SaaS evolution
technical debt
future integrations

---

# 87. Non-Goals

Version 1 does NOT include:

- online payments
- user accounts
- client dashboard
- workout tracking
- subscription billing
- database
- CMS
- appointment booking
- automated email backend
- AI fitness recommendations
- medical advice
- social feed

These can be added later without compromising the initial architecture.

---

# 88. Future SaaS Evolution

If Siddharth later wants to turn this into a trainer platform:

Public Website
↓
Content API
↓
Trainer Dashboard
↓
Database

Possible entities:

Trainer
Client
Plan
Achievement
Certificate
Testimonial
Lead
Appointment
Workout
Exercise
ProgressRecord

The initial architecture should not prematurely implement these.

---

# 89. Final UX Principle

The website should make the visitor feel:

"I understand who Siddharth is."

"I can see evidence of his expertise."

"I understand what he offers."

"I know roughly what it costs."

"I can contact him directly."

That is the complete product loop.

The website should not feel like a SaaS dashboard.

It should feel like a premium personal coaching brand powered by a technically strong web platform.

---

# 90. Final Technical Principle

The architecture should optimize for:

Correctness
→ accessibility
→ performance
→ maintainability
→ SEO
→ visual quality
→ extensibility

Not:

maximum dependencies
maximum animations
maximum abstraction
maximum memoization
maximum client-side JavaScript

The system should be simple underneath and premium on the surface.

---

# 91. Definition of Done

The project is considered production-ready only when:

[ ] Siddharth's real profile information is inserted.

[ ] Real photograph is inserted.

[ ] Real certificates are inserted.

[ ] Real achievements are inserted.

[ ] Real testimonials are inserted with permission.

[ ] Real social links are inserted.

[ ] Real email address is configured.

[ ] Real pricing is configured.

[ ] All placeholder content is removed.

[ ] All routes work.

[ ] Dynamic routes work.

[ ] Search works.

[ ] 404 works.

[ ] Error boundaries work.

[ ] Stale-build recovery works.

[ ] Light theme works.

[ ] Dark theme works.

[ ] System theme works.

[ ] Mobile navigation works.

[ ] Keyboard navigation works.

[ ] Reduced-motion mode works.

[ ] Images are optimized.

[ ] SEO metadata is complete.

[ ] Sitemap works.

[ ] Robots works.

[ ] Security headers are active.

[ ] No secrets are committed.

[ ] TypeScript passes.

[ ] ESLint passes.

[ ] Production build passes.

[ ] Lighthouse is reviewed.

[ ] Mobile devices are tested.

[ ] Contact `mailto:` flow is tested.

[ ] Social links are tested.

[ ] Final content is proofread.

[ ] Production domain is configured.

[ ] Deployment smoke test passes.

---

# 92. Final Architecture

The intended final system is:

```
            ┌─────────────────────┐
            │     Visitor         │
            └──────────┬──────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │     Next.js SSR     │
            │   App Router       │
            └──────────┬──────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Content Layer   UI Components   SEO Layer
        │              │              │
        ▼              ▼              ▼
   Plans/Certs     Interactive      Metadata
   Achievements    Effects          Sitemap
   Testimonials    Theme            Robots
        │              │
        └──────┬───────┘
               ▼
         Public Website
               │
      ┌────────┼────────┐
      ▼        ▼        ▼
   Search    Social   Contact
                     │
                     ▼
                mailto:
                     │
                     ▼
                Siddharth
```

Future:

```
                Public Site
                     │
                     ▼
                  API/CMS
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
    Trainer Admin          Database
          │                     │
          └──────────┬──────────┘
                     ▼
               Micro-SaaS Layer
```

The initial release remains static/content-driven and lightweight. The architecture preserves a clean migration path toward a trainer-management SaaS without forcing database, authentication, payments, or CMS complexity into version one.
