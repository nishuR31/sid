# styles.md — Siddharth Fit Design System

## Color Palette

### Light Theme

| Token              | Value                                 | Usage                         |
| ------------------ | ------------------------------------- | ----------------------------- |
| `--primary`        | Deep forest / muted emerald (#2D5A3D) | Buttons, links, active states |
| `--primary-light`  | Lighter emerald (#3A7A52)             | Hover states, highlights      |
| `--secondary`      | Sage (#8CAA8F)                        | Supporting elements, badges   |
| `--surface`        | Warm off-white (#FAF8F5)              | Page background               |
| `--surface-raised` | Soft cream (#FFFFFF)                  | Card backgrounds              |
| `--accent`         | Muted teal (#4A9B8E)                  | Accent elements, links        |
| `--dark`           | Deep charcoal (#1A2E22)               | Headings, primary text        |
| `--text`           | Near-black (#2A3B30)                  | Body text                     |
| `--text-muted`     | Medium gray-green (#6B7E72)           | Supporting text, captions     |
| `--highlight`      | Soft amber (#D4A574)                  | Sparingly, special accents    |
| `--border`         | Light gray-green (#D8E0DA)            | Card borders, dividers        |

### Dark Theme

| Token              | Value                      | Usage                  |
| ------------------ | -------------------------- | ---------------------- |
| `--primary`        | Lighter emerald (#5BAF7A)  | Buttons, links         |
| `--surface`        | Deep charcoal (#0F1A14)    | Page background        |
| `--surface-raised` | Elevated dark (#1A2E22)    | Card backgrounds       |
| `--text`           | Off-white (#E8EDE9)        | Body text              |
| `--text-muted`     | Muted green-gray (#8FA698) | Supporting text        |
| `--border`         | Dark border (#2A3B30)      | Card borders, dividers |

---

## Spacing Scale

Use Tailwind's default spacing scale. Key values:

| Token | Value | Usage                    |
| ----- | ----- | ------------------------ |
| `1`   | 4px   | Tight internal padding   |
| `2`   | 8px   | Small gaps               |
| `3`   | 12px  | Icon-to-text gaps        |
| `4`   | 16px  | Standard padding         |
| `6`   | 24px  | Card padding             |
| `8`   | 32px  | Section internal spacing |
| `12`  | 48px  | Between sections         |
| `16`  | 64px  | Large section margins    |
| `20`  | 80px  | Hero spacing             |
| `24`  | 96px  | Major section gaps       |

---

## Border Radius

| Token  | Value  | Usage                         |
| ------ | ------ | ----------------------------- |
| `sm`   | 10px   | Small elements, badges        |
| `md`   | 16px   | Standard cards, buttons       |
| `lg`   | 24px   | Feature cards, containers     |
| `xl`   | 32px   | Hero elements, large surfaces |
| `full` | 9999px | Circular avatars, pills       |

---

## Shadow System (Claymorphism)

### Card Shadow (Light)

```css
box-shadow:
  8px 8px 20px rgba(0, 0, 0, 0.06),
  -4px -4px 12px rgba(255, 255, 255, 0.8),
  inset 1px 1px 2px rgba(255, 255, 255, 0.6);
```

### Card Shadow (Dark)

```css
box-shadow:
  8px 8px 20px rgba(0, 0, 0, 0.3),
  -4px -4px 12px rgba(255, 255, 255, 0.03),
  inset 1px 1px 2px rgba(255, 255, 255, 0.05);
```

### Elevated Shadow (Hover)

```css
box-shadow:
  12px 12px 28px rgba(0, 0, 0, 0.08),
  -6px -6px 16px rgba(255, 255, 255, 0.9),
  inset 1px 1px 3px rgba(255, 255, 255, 0.7);
```

Shadows should feel physical but professional. Not inflated plastic.

---

## Typography

### Font Stack

- Primary: `Inter`, `system-ui`, `-apple-system`, `sans-serif`
- Display: `Geist` or `Manrope` (for hero and section headings)

### Type Scale

| Role            | Size                          | Weight | Line Height |
| --------------- | ----------------------------- | ------ | ----------- |
| Hero headline   | `clamp(3rem, 7vw, 7rem)`      | 800    | 1.05        |
| Section heading | `clamp(2rem, 4vw, 4rem)`      | 700    | 1.15        |
| Card title      | `1.25rem` - `1.5rem`          | 600    | 1.3         |
| Body            | `1rem` - `1.125rem` (16-18px) | 400    | 1.6         |
| Supporting text | `0.875rem` - `1rem` (14-16px) | 400    | 1.5         |
| Caption / label | `0.75rem` (12px)              | 500    | 1.4         |

### Letter Spacing

- Hero: `-0.02em` (tight)
- Section headings: `-0.01em`
- Body: `0` (default)
- Labels/badges: `0.05em` (slightly loose)

---

## Button Styles

### Primary Button

- Background: `--primary`
- Text: white
- Radius: `md` (16px)
- Padding: `12px 28px`
- Font weight: 600
- Transition: `background-color 200ms, transform 150ms`
- Hover: slightly lighter background, `scale(1.02)`
- Active: `scale(0.98)`
- Focus: visible ring (2px offset, primary color)

### Secondary Button

- Background: transparent
- Border: 1px solid `--primary`
- Text: `--primary`
- Same radius, padding, transitions
- Hover: light primary background fill

### Ghost Button

- Background: transparent
- No border
- Text: `--text-muted`
- Hover: light surface background

---

## Card Styles

### Base Card

- Background: `--surface-raised`
- Border: 1px solid `--border`
- Radius: `lg` (24px)
- Padding: `24px`
- Shadow: card shadow (claymorphism)
- Transition: `box-shadow 300ms, transform 300ms`
- Hover: elevated shadow, `translateY(-2px)`

### Feature Card (Plans, Certifications)

- Same as base with larger padding (`32px`)
- Optional soft gradient overlay
- More prominent heading

---

## Animation Tokens

| Token               | Value                           | Usage                |
| ------------------- | ------------------------------- | -------------------- |
| `--duration-fast`   | `150ms`                         | Micro-interactions   |
| `--duration-normal` | `300ms`                         | Card hovers, reveals |
| `--duration-slow`   | `500ms`                         | Page transitions     |
| `--ease-out`        | `cubic-bezier(0.16, 1, 0.3, 1)` | Exit animations      |
| `--ease-in-out`     | `cubic-bezier(0.4, 0, 0.2, 1)`  | Standard motion      |

### Scroll Reveal

- Initial: `opacity: 0; transform: translateY(20px)`
- Final: `opacity: 1; transform: translateY(0)`
- Duration: `--duration-normal`
- Easing: `--ease-out`
- Trigger: Intersection Observer at 10% visibility

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Breakpoints

| Name  | Width  | Usage               |
| ----- | ------ | ------------------- |
| `sm`  | 640px  | Small tablets       |
| `md`  | 768px  | Tablets, nav switch |
| `lg`  | 1024px | Small desktops      |
| `xl`  | 1280px | Standard desktops   |
| `2xl` | 1440px | Large desktops      |

Mobile-first: base styles target 320px+.

Test critical widths: 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920.

---

## Avoid

- Excessive red or neon colors
- Aggressive black/red bodybuilding aesthetics
- Excessive gradients
- Visual noise
- Excessive animations
- Fake luxury styling (gold foil, marble textures)
- Decorative fonts for body text
- More than 3 simultaneous visual effects on screen
