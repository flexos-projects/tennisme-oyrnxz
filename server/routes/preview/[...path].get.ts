import { defineEventHandler, createError } from 'h3'
import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const path = event.context.params?.path
  if (!path) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' })
  }

  // Resolve the requested path to a prototype file
  const flexosRoot = join(process.cwd(), '.flexos')
  const prototypePath = join(flexosRoot, 'prototype', path)

  // Try exact path first, then with .html extension
  const candidates = [
    prototypePath,
    `${prototypePath}.html`,
    join(prototypePath, 'index.html'),
  ]

  for (const candidate of candidates) {
    try {
      const content = await readFile(candidate, 'utf-8')
      const ext = candidate.split('.').pop()

      const mimeTypes: Record<string, string> = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        json: 'application/json',
        svg: 'image/svg+xml',
      }

      event.node.res.setHeader(
        'Content-Type',
        mimeTypes[ext || ''] || 'text/plain',
      )

      return content
    } catch {
      // Try next candidate
    }
  }

  throw createError({ statusCode: 404, statusMessage: 'Prototype file not found' })
})
