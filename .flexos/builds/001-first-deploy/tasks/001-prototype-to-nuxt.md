---
id: task-001-prototype-to-nuxt
title: "Prototype to Nuxt"
type: build
subtype: task
status: active
sequence: 33
relatesTo: ["builds/001-first-deploy/config.md", "technical/001-stack.md"]
createdAt: "2026-03-15"
updatedAt: "2026-03-15"
---

# Prototype to Nuxt

## Status: Complete (pre-built)

This task was completed at template creation time. The Nuxt app ships ready to run.

## What Was Done

1. Initialised Nuxt 4 via `npx nuxi@latest init` (minimal template)
2. Installed Pinia (`@pinia/nuxt`, `pinia`)
3. Configured `nuxt.config.ts`:
   - Nuxt 4 compatibility mode
   - Auto-imports disabled (explicit only)
   - Auto-components disabled (explicit only)
   - Global CSS via `~/assets/css/main.css`
   - SSR on for `/`, SPA for `/preview/**`
4. Created portal page (`app/pages/index.vue`):
   - Reads project.json via useProject composable
   - Shows ProjectHeader, DesignSystemPreview, PrototypeNavigator, BuildProgress
   - Level-aware: redirects to /app at level 4
5. Created layouts:
   - `default.vue` — bare slot
   - `app.vue` — sidebar + topbar + slot (CSS only, populated by future builds)
6. Created composables:
   - `useProject.ts` — fetches /project.json, polls every 5s during active jobs
   - `useFlexOS.ts` — computed wrappers for level, status, rootMode, isBuilding
7. Created Pinia store:
   - `stores/ui.ts` — sidebar, modal, toast state management
8. Created type definitions:
   - `types/project.ts` — ProjectJson interface
   - `types/flexos.ts` — FlexDoc, FlexBlockType, SpecType
9. Created server route:
   - `server/routes/preview/[...path].get.ts` — serves prototype HTML/CSS/JS files
10. Created design system CSS:
    - `tokens.css` — CSS custom properties (colours, typography, spacing, radii)
    - `components.css` — structural classes (container, stack, row, grid, card, btn)
    - `main.css` — imports both

## Acceptance Criteria (all met)

- [x] Portal page renders project name, tagline, and status from project.json
- [x] Design system preview shows primary colour swatch
- [x] Build progress component shows pipeline steps
- [x] Prototype navigator present (empty until screens exist)
- [x] App shell layout ready for future builds
- [x] `npm run build` completes with zero errors
- [x] Preview route serves .flexos/prototype/* files
