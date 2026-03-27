import { computed } from 'vue'
import { useProject } from '~/composables/useProject'

export function useFlexOS() {
  const { project } = useProject()

  const status = computed(() => project.value.status)
  const rootMode = computed(() => project.value.deploy.rootMode)
  const themeColor = computed(() => project.value.brand.themeColor)
  const previewUrl = computed(() => '/preview/pages/index')
  const isBuilding = computed(() => project.value.status === 'building')

  return { status, rootMode, themeColor, previewUrl, isBuilding }
}
