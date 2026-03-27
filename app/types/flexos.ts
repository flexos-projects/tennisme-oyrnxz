export type SpecType =
  | 'vision'
  | 'feature'
  | 'page'
  | 'flow'
  | 'database'
  | 'design'
  | 'technical'
  | 'content'
  | 'doc'
  | 'build'
  | 'space'
  | 'commit'

export type FlexBlockType =
  | 'instructions'
  | 'schema'
  | 'flow'
  | 'tokens'
  | 'config'
  | 'prototype'
  | 'acceptance'
  | 'migration'

export interface FlexDoc {
  id: string
  title: string
  type: SpecType
  subtype?: string
  status: 'active' | 'roadmap' | 'archived'
  sequence: number
  relatesTo: string[]
  createdAt: string
  updatedAt: string
}
