export interface ProjectJson {
  id: string | null
  name: string
  slug: string
  description: string
  tagline: string
  tags: string[]

  owner: {
    id: string | null
    email: string | null
  }

  status: 'active' | 'building' | 'archived' | 'graduated'
  visibility: 'private' | 'unlisted' | 'public'

  brand: {
    themeColor: string
    theme: string
    logo: string | null
    favicon: string | null
    openGraph: {
      title: string | null
      description: string | null
      image: string | null
    }
  }

  deploy: {
    rootMode: 'none' | 'placeholder' | 'prototype' | 'portal' | 'app'
    prototypeEnabled: boolean
    vercelDomain: string | null
    customDomain: string | null
  }

  github: {
    repoOwner: string | null
    repoName: string | null
    branch: string
    url: string | null
  }

  vercel: {
    projectId: string | null
    productionUrl: string | null
  }

  techStack: Record<string, string>

  settings: {
    defaultFocusMode: boolean
    autoSave: boolean
    aiModel: string
  }

  createdAt: string
  updatedAt: string
}
