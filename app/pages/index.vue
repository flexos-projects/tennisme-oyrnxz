<script setup lang="ts">
import { useProject } from '~/composables/useProject'
import { useFlexOS } from '~/composables/useFlexOS'
import ProjectHeader from '~/components/portal/ProjectHeader.vue'
import DesignSystemPreview from '~/components/portal/DesignSystemPreview.vue'
import PrototypeNavigator from '~/components/portal/PrototypeNavigator.vue'
import BuildProgress from '~/components/portal/BuildProgress.vue'

const { project } = useProject()
const { rootMode, isBuilding } = useFlexOS()
</script>

<template>
  <div class="portal container">
    <ProjectHeader />

    <div class="portal-grid grid gap-6">
      <BuildProgress v-if="isBuilding" />
      <DesignSystemPreview />
      <PrototypeNavigator />
    </div>
  </div>
</template>

<style scoped>
.portal {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
  max-width: 960px;
}
</style>
