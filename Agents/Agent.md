# AGENTS.md

## Astro Architecture & Development Guide

This project is built with Astro.
It follows a feature-based, scalable architecture focused on clarity, performance, and long-term maintainability.

This document defines **how the project is structured and how code should be written**.

All visual and design decisions are defined separately in:
→ `DESIGN.md`

Do NOT redefine visual rules here.

---

## Core Principles

1. Astro is content-first and filesystem-driven
2. Pages define routes
3. Features group domain logic and UI
4. Components are mostly static
5. Interactivity is isolated using Islands
6. Minimal JavaScript by default
7. Design tokens are mandatory (see DESIGN.md)

Astro is NOT React.  
Do not force React patterns unless strictly required.

---

## Mental Model

Think in layers, not frameworks:

- Pages → routing & composition
- Layouts → structure & SEO
- Features → domain sections
- Components → reusable UI
- Islands → client-side interactivity
- Lib → shared logic
- Styles → global theming

If something does not require client-side JavaScript, it must NOT be an Island.

---

## Project Structure

```
src/
├── pages/
├── layouts/
├── components/
├── features/
├── islands/
├── lib/
├── styles/
├── assets/
```

---

## Folder Responsibilities

### `/pages`

- Public routes
- One file = one route
- Must remain thin
- Compose layouts and features
- No complex UI or logic

Examples:

```
pages/index.astro
pages/contacto.astro
```

---

### `/layouts`

- Structural wrappers (header, footer, SEO)
- No business logic
- No feature-specific logic

Examples:

```
layouts/BaseLayout.astro
layouts/PageLayout.astro
```

---

### `/features`

Main architectural unit.

Each feature:

- Represents a domain section (Home, Services, Contact, etc.)
- Owns its UI, local data, and islands if needed
- Is independently composable

Example:

```
features/home/
  Hero.astro
  ServicesGrid.astro
  ClientsLogos.astro
  home.data.ts
```

Rules:

- Features may use components
- Features must NOT depend on other features
- Features may expose a single entry component

---

### `/components`

Reusable, feature-agnostic UI components.

Rules:

- Prefer stateless components
- Driven by design tokens
- No routing or domain logic

Suggested structure:

```
components/ui/           # shadcn primitives
components/navigation/
components/footer/
components/common/
```

---

### `/islands`

Client-side interactive components only.

Rules:

- Must justify their existence
- Written in `.tsx`
- Explicit hydration required
- No global state unless unavoidable

Examples:

```
islands/ContactForm.tsx
islands/NavbarMenu.tsx
```

If it can be implemented using `.astro`, it must NOT be an Island.

---

### `/lib`

Shared utilities and helpers.

Rules:

- Logic only, no UI
- No framework-specific code

Examples:

```
lib/seo.ts
lib/constants.ts
lib/formatters.ts
```

---

### `/styles`

Global styles and theming.

Rules:

- Design tokens only
- No hardcoded colors or spacing
- Must be compatible with shadcn/ui
- Dark-mode ready

Example:

```
styles/globals.css
```

---

### `/assets`

Static assets:

- Images
- Logos
- Icons

Prefer Astro asset handling when possible.

---

## Styling Rules

- All styling must follow `DESIGN.md`
- Use semantic Tailwind tokens
- No inline HEX, RGB, or arbitrary values

Correct:

```
bg-primary text-primary-foreground
```

Incorrect:

```
bg-[#1F6F5B]
```

---

## File Naming Conventions

- Pages: `kebab-case.astro`
- Layouts: `PascalCase.astro`
- Components: `PascalCase.astro`
- Features: `kebab-case/`
- Islands: `PascalCase.tsx`

---

## Interactivity Rules

- Default to static HTML
- Use Islands only when interaction is required
- Hydrate as late and as little as possible
- Avoid shared global state

---

## Anti-Patterns (Do NOT)

- Treat Astro as React
- Add JavaScript “just in case”
- Create God components
- Mix features together
- Hardcode visual styles
- Duplicate layouts inside pages

---

## Scalability Goals

This architecture must:

- Scale to multiple sections without refactors
- Allow CMS integration later
- Keep JavaScript payload minimal
- Be readable by non-React developers
- Encourage composition over complexity

---

## Final Rule

When in doubt:

## Anti-Patterns (Do NOT)

- Treat Astro as React
- Add JavaScript “just in case”
- Create God components
- Mix features together
- Hardcode visual styles
- Duplicate layouts inside pages

---

## Scalability Goals

This architecture must:

- Scale to multiple sections without refactors
- Allow CMS integration later
- Keep JavaScript payload minimal
- Be readable by non-React developers
- Encourage composition over complexity

---

## Final Rule

When in doubt:

- Prefer `.astro`
- Prefer simplicity
- Prefer clarity over cleverness
