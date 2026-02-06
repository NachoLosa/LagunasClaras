# AGENTS.md

## Astro Architecture & Development Guide

This project is built with Astro.
It follows a feature-based, scalable architecture focused on clarity, performance, and long-term maintainability.

This document defines **how the project is structured and how code should be written**.

All visual and design decisions are defined separately in:
→ `.agents/skills/design/SKILL.md`

Do NOT redefine visual rules here.

---

## Core Principles

1. Astro is content-first and filesystem-driven
2. Pages define routes
3. Features group domain logic and UI
4. Components are mostly static
5. Interactivity is isolated using Islands
6. Minimal JavaScript by default
7. Design tokens are mandatory (see .agents/skills/design/SKILL.md)
8. Use semantic Tailwind tokens
9. Always first check global.css for styles

Astro is NOT React.  
Do not force React patterns unless strictly required.

---

## Mental Model

Think in layers, not frameworks:

- Pages → routing & orquestation (thin wrappers)
- Layouts → structure & SEO
- Sections → domain features (Home, Services, etc.)
- Components → reusable UI
- Islands → client-side interactivity
- Lib → shared logic
- Styles → global theming

---

## Project Structure

```
src/
├── pages/       # Next.js-like routing
├── layouts/     # Base wrappers
├── components/  # Atomic/Shared UI
├── sections/    # Feature-based domain logic (previously /features)
├── islands/     # Interactive components (React/Preact)
├── lib/         # Helpers
├── styles/      # CSS
├── assets/      # Media
```

---

## Folder Responsibilities

### `/pages`

- Public routes.
- One file = one route.
- **Rules**: Must remain extremely thin. Import a "Section Page" directly.
- No UI logic here.

Example:

```astro
---
import Layout from '@/layouts/Layout.astro';
import HomePage from '@sections/home/HomePage.astro';
---

<Layout>
  <HomePage />
</Layout>
```

---

### `/sections` (Feature-based)

Main architectural unit. Represents a domain section (Home, Services, Contact, etc.).

Each section:

- Owns its UI, local data, and types.
- Is independently composable.

Example:

```
sections/home/
  HomePage.astro       # Entry point
  components/          # Local components
    Hero.astro
  types/               # Local types
    Hero.types.ts
  data/                # Local mock data or constants
```

---

### `/components`

Reusable, feature-agnostic UI components.

- **Styling Pattern**: Use `clsx` for dynamic classes.
- **Variants**: Define styles in objects/mappings (see `Button.astro`).

Example:

```typescript
const variantStyles = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-primary',
};
```

---

### `/assets`

- **Images**: Use `<picture>` with `webp` formats for LCP optimization.
- **Logos**: Centralized exports in `@assets/Logos` components.

---

## Technical Standards

### Strict Typing

- Every component must have a `Props` interface defined in a `.types.ts` file within its folder or parent feature folder.
- Use `@/` and `@sections/` aliases.

### Interactivity Rules

- Default to static HTML.
- Use Islands only when strictly necessary.
- Written in `.tsx`.

---

## Styling Rules

- **Source of truth**: `.agents/skills/design/SKILL.md`.
- **Global Utilities**: Use custom utilities defined in `global.css` (e.g., `.service-card`, `.nav-link`).
- **Semantic Tokens**: No hardcoded HEX.

---

## Anti-Patterns (Do NOT)

- Treat Astro as React.
- Mix sections (Cross-section imports of local components).
- Add JavaScript "blindly".
- Duplicate logic in `/pages`.

---

## Final Rule

- Prefer `.astro`.
- Prefer simplicity.
- If it can be done with CSS/HTML/Tailwind, don't use JS.
