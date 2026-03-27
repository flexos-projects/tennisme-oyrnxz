---
id: technical-stack
title: "Stack Decision"
type: technical
subtype: stack
status: active
sequence: 36
relatesTo: ["docs/007-technical.md"]
createdAt: "2026-03-15"
updatedAt: "2026-03-15"
---

<flex_block type="instructions">
Default stack decision. Change this spec to switch frameworks.
A new build against different stack specs will generate the corresponding app code.
</flex_block>

# Stack Decision

## Framework: Nuxt 4

- **Why:** SSR + SPA hybrid, Vue 3 composition API, Nitro server, file-based routing
- **Version:** 4.x (compatibility mode via `future: { compatibilityVersion: 4 }`)
- **Source dir:** `app/` (Nuxt 4 convention)

## State Management: Pinia

- **Why:** Official Vue store, minimal boilerplate, composable-style API
- **Module:** `@pinia/nuxt`

## Styling: Custom Tokens

- **Approach:** CSS custom properties (no Tailwind, no UI library)
- **Files:** `tokens.css` (design tokens) + `components.css` (structural classes)
- **Why:** Full creative control, no framework aesthetic, regenerated from specs

## Deploy: Vercel

- **Build:** `nuxt build`
- **Output:** `.output/public`
- **Trigger:** Push to `main` via GitHub Actions

## Key Config Choices

- **Auto-imports disabled** — explicit imports only (`imports: { autoImport: false }`)
- **Auto-components disabled** — explicit imports only (`components: false`)
- **SSR on** for portal/marketing pages
- **SPA mode** for `/preview/**` routes
