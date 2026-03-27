---
id: build-001-config
title: "First Deploy — Config"
type: build
subtype: config
status: active
sequence: 30
relatesTo: ["technical/001-stack.md", "docs/007-technical.md"]
createdAt: "2026-03-15"
updatedAt: "2026-03-15"
---

# First Deploy — Configuration

## Build Target

Portal app. A working Nuxt 4 app that displays project state, design system preview,
prototype navigation, and build progress. Ships pre-built with the template.

## Stack

- **Framework:** Nuxt 4 (`future: { compatibilityVersion: 4 }`)
- **State:** Pinia (`@pinia/nuxt`)
- **Styling:** tokens.css + components.css (CSS custom properties)
- **Deploy:** Vercel (auto-deploy via GitHub Actions)
- **No auto-imports:** all imports explicit

## What This Build Produced

```
app/
  app.vue                              ← <NuxtLayout><NuxtPage /></NuxtLayout>
  pages/index.vue                      ← level-aware portal (reads project.json)
  layouts/default.vue                  ← bare <slot />
  layouts/app.vue                      ← app shell stub (sidebar + topbar + slot)
  components/portal/ProjectHeader.vue  ← name, tagline, status badge
  components/portal/DesignSystemPreview.vue ← colour swatches from tokens
  components/portal/PrototypeNavigator.vue  ← lists screens from sitemap
  components/portal/BuildProgress.vue  ← pipeline step tracker
  components/ui/.gitkeep               ← populated by future builds
  composables/useProject.ts            ← reactive project.json reader + polling
  composables/useFlexOS.ts             ← level, status, rootMode computed helpers
  stores/ui.ts                         ← Pinia store: modal, toast, sidebar state
  types/project.ts                     ← ProjectJson interface
  types/flexos.ts                      ← FlexDoc, FlexBlockType, SpecType interfaces
  assets/css/tokens.css                ← design tokens (CSS custom properties)
  assets/css/components.css            ← structural utility classes
  assets/css/main.css                  ← imports tokens + components

server/
  routes/preview/[...path].get.ts      ← serves .flexos/prototype/* at /preview/*

public/
  project.json                         ← copy of .flexos/project.json (kept in sync)
  favicon.svg                          ← FlexOS default, replaced at provision

nuxt.config.ts                         ← Nuxt 4 config (see technical/001-stack.md)
vercel.json                            ← minimal Vercel config
.env.example                           ← env var slots
.github/workflows/deploy.yml           ← Vercel deploy on push to main
```
