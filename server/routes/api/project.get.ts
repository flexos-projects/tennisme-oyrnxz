import { defineEventHandler } from 'h3'
import { readFile } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineEventHandler(async () => {
  // Try multiple possible locations for .flexos/project.json
  const candidates = [
    join(process.cwd(), '.flexos', 'project.json'),
    join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '.flexos', 'project.json'),
  ]

  for (const candidate of candidates) {
    try {
      const raw = await readFile(candidate, 'utf-8')
      return JSON.parse(raw)
    } catch {
      // try next
    }
  }

  // Return defaults if file not found anywhere
  return {
    name: 'My Project',
    slug: 'my-project',
    tagline: '',
    level: 1,
    status: 'provisioning',
    themeColor: '#6366f1',
    deploy: { prototypeEnabled: true, rootMode: 'placeholder' },
    brand: { primary: '#6366f1', logo: null },
    links: { preview: '/preview/pages/index', app: null, github: null },
    job: { id: null, type: null, label: null, progress: 0 },
    createdAt: new Date().toISOString(),
  }
})
