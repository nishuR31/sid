# accessibility.md — Siddharth Fit

## Standard

Target: WCAG 2.1 AA compliance.

Accessibility is a requirement, not an afterthought. Every interactive element must be usable without a pointer device.

---

## Keyboard Navigation

- All interactive elements reachable via Tab / Shift+Tab
- Logical tab order follows visual reading order
- Enter/Space activates buttons and links
- Escape closes dialogs, menus, search
- Arrow keys navigate within grouped controls (mobile menu items, theme options)
- No keyboard traps (user can always Tab out of any component)

---

## Focus Management

- Visible focus indicators on all interactive elements
- Focus ring: 2px solid, offset 2px, primary color
- Never remove `:focus-visible` styles
- When modal/dialog opens, focus moves to the dialog
- When modal/dialog closes, focus returns to the trigger element
- Skip-to-content link as first focusable element

---

## Semantic HTML

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` used appropriately
- Single `<h1>` per page
- Heading hierarchy: h1 > h2 > h3 (no skipping levels)
- Lists for navigation items (`<ul>`, `<li>`)
- `<button>` for actions, `<a>` for navigation
- Never use `<div>` with `onClick` as a button substitute

---

## Images

- Meaningful images: descriptive `alt` text
- Decorative images: `alt=""` or `aria-hidden="true"`
- SVG icons with meaning: `role="img"` and `aria-label`
- Decorative SVGs: `aria-hidden="true"`
- Certificate images: alt text describes the certificate name and issuer

---

## Forms

- Every input has a visible `<label>` (or `aria-label` if visually hidden)
- Error messages associated with inputs via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Form submission feedback announced to screen readers

---

## Color and Contrast

- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Both light and dark themes must meet contrast requirements
- Color must never be the only indicator of state (use text, icons, or patterns as well)
- Test with color blindness simulation tools

---

## Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- All parallax effects disabled
- All scroll-reveal animations disabled
- All 3D tilt effects disabled
- Static fallback visuals shown instead

---

## Screen Readers

- Navigation landmarks clearly labeled (`aria-label` on `<nav>`)
- Current page indicated in navigation (`aria-current="page"`)
- Theme toggle announces current state
- Search dialog announced when opened
- Loading states announced via `aria-live="polite"`
- Error boundaries announce error state

---

## Mobile Accessibility

- Touch targets minimum 44x44px
- Sufficient spacing between interactive elements
- Mobile menu fully keyboard-accessible
- No hover-only interactions (all hover states have tap equivalents)

---

## Testing Checklist

- [ ] Navigate entire site using only keyboard
- [ ] Navigate entire site using VoiceOver (macOS/iOS)
- [ ] Navigate entire site using NVDA or JAWS (Windows)
- [ ] Verify all images have appropriate alt text
- [ ] Verify heading hierarchy on every page
- [ ] Verify color contrast in both themes
- [ ] Verify reduced motion mode
- [ ] Verify skip-to-content link works
- [ ] Verify search dialog keyboard interaction
- [ ] Verify mobile menu keyboard interaction
- [ ] Verify form labels and error associations
- [ ] Run axe-core or Lighthouse accessibility audit
