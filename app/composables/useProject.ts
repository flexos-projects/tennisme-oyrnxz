import { ref, onMounted } from 'vue'
import type { ProjectJson } from '~/types/project'

const defaultProject: ProjectJson = {
  id: null,
  name: 'My Project',
  slug: 'my-project',
  description: '',
  tagline: '',
  tags: [],
  owner: { id: null, email: null },
  status: 'active',
  visibility: 'private',
  brand: {
    themeColor: '#6366f1',
    theme: 'default',
    logo: null,
    favicon: null,
    openGraph: { title: null, description: null, image: null },
  },
  deploy: {
    rootMode: 'portal',
    prototypeEnabled: true,
    vercelDomain: null,
    customDomain: null,
  },
  github: {
    repoOwner: null,
    repoName: null,
    branch: 'main',
    url: null,
  },
  vercel: {
    projectId: null,
    productionUrl: null,
  },
  techStack: {
    framework: 'nuxt4',
    hosting: 'vercel',
    database: 'convex',
    auth: 'better-auth',
    css: 'open-props',
  },
  settings: {
    defaultFocusMode: true,
    autoSave: true,
    aiModel: 'gemini-flash',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

const project = ref<ProjectJson>({ ...defaultProject })

function deepMerge(target: any, source: any): any {
  const result = { ...target }
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && target[key]) {
      result[key] = deepMerge(target[key], source[key])
    } else if (source[key] !== undefined && source[key] !== null) {
      result[key] = source[key]
    }
  }
  return result
}

async function fetchProject() {
  try {
    const res = await fetch('/api/project')
    if (!res.ok) return
    const data = await res.json()
    project.value = deepMerge(defaultProject, data)
  } catch {
    // project.json not available yet — use defaults
  }
}

export function useProject() {
  onMounted(() => { fetchProject() })
  return { project }
}
