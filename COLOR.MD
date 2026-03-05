# IWD Innovation Summit Color System

This document defines the color palette for the International Women's Day Innovation Summit website.

The palette is inspired by the Women Techmakers brand and implemented as semantic Tailwind tokens under the `iwd` namespace. The site ships two switchable themes controlled via CSS custom properties and a `data-theme` attribute on `<html>`.

---

## Themes

### Blue (Default)

Ocean-forward palette. Cool, professional, and aligned with Google/Women Techmakers blue.

| Token         | Hex       | RGB        |
| ------------- | --------- | ---------- |
| iwd-gold-400  | `#60a5fa` | 96 165 250 |
| iwd-gold-700  | `#1d4ed8` | 29 78 216  |
| iwd-black-950 | `#090e18` | 9 14 24    |
| focus-ring    | `#1e3a8a` | 30 58 138  |

### Purple

Violet-forward palette. Bold, empowering, and aligned with IWD purple tradition.

| Token         | Hex       | RGB         |
| ------------- | --------- | ----------- |
| iwd-gold-400  | `#c084fc` | 192 132 252 |
| iwd-gold-700  | `#7e22ce` | 126 34 206  |
| iwd-black-950 | `#0d0a16` | 13 10 22    |
| focus-ring    | `#581c87` | 88 28 135   |

---

## Symbolism

| Color  | Meaning                       |
| ------ | ----------------------------- |
| Blue   | trust, technology & community |
| Purple | empowerment & leadership      |
| Teal   | innovation & growth           |
| Coral  | warmth & community            |

---

## How Theming Works

1. CSS variables defined in `src/index.css` under `:root` / `[data-theme='blue']` and `[data-theme='purple']`
2. Tailwind tokens `iwd.gold.*` and `iwd.black.*` reference these via `rgb(var(--iwd-accent-*) / <alpha-value>)`
3. React context (`ThemeContext`) sets `data-theme` on `<html>` and persists to `localStorage`
4. A floating `ThemeSwitcher` button lets visitors toggle

**Adding a new theme:** duplicate a `[data-theme='...']` block in index.css, add the key to the toggle cycle in ThemeContext, done.

---

## Static Colors (shared across themes)

### Teal (secondary accent)

| Token         | Hex       |
| ------------- | --------- |
| iwd-green-400 | `#2dd4bf` |
| iwd-green-700 | `#0f766e` |
| iwd-green-950 | `#042f2e` |

### Coral (warm accent)

| Token       | Hex       |
| ----------- | --------- |
| iwd-red-400 | `#ff7a6b` |
| iwd-red-600 | `#e13d2f` |
| iwd-red-950 | `#46120d` |

### Neutrals

| Token           | Hex       |
| --------------- | --------- |
| iwd-neutral-50  | `#f8fafc` |
| iwd-neutral-200 | `#e2e8f0` |
| iwd-neutral-700 | `#334155` |
| iwd-neutral-950 | `#020617` |

---

## Design Goals

- Align with Women Techmakers / Google IWD visual identity
- Ship multiple themes so the team can A/B test and decide
- Maintain WCAG 2.1 AA accessibility contrast
- Scale as a reusable design system across Compass events

---

## Prior Event Palettes

For historical reference, these are the palettes used by prior Compass Detroit events:

### BHM Innovation Summit (Pan-African)

| Role    | Token     | Hex       |
| ------- | --------- | --------- |
| Accent  | bhm-gold  | `#efb403` |
| Dark    | bhm-black | `#0b0b0b` |
| Success | bhm-green | `#006b3f` |
| Warm    | bhm-red   | `#ce1126` |

### Michigan DevFest

| Role    | Token       | Hex       |
| ------- | ----------- | --------- |
| Primary | primary-400 | `#cfae70` |
| Neutral | gray-900    | `#0f172a` |

---

## Tailwind Implementation

The themeable tokens are defined in `tailwind.config.js` using the `rgb(var(...) / <alpha-value>)` pattern for full opacity support. Static colors (teal, coral, neutrals) use fixed hex values.
