---
id: build-001-agent
title: "First Deploy — Agent Instructions"
type: build
subtype: agent
status: active
sequence: 31
relatesTo: ["builds/001-first-deploy/config.md"]
createdAt: "2026-03-15"
updatedAt: "2026-03-15"
---

# First Deploy — Agent

## Objective

Get the template Nuxt app running on Vercel with the portal page serving project state.

## Steps

1. Verify nuxt.config.ts is correct
2. Verify project.json is in both .flexos/ and public/
3. Run `npm run build` — confirm zero errors
4. Deploy to Vercel
5. Confirm portal page loads at root URL
