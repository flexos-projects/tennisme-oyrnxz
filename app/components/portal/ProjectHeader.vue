<script setup lang="ts">
import { useProject } from '~/composables/useProject'

const { project } = useProject()
</script>

<template>
  <header class="project-header">
    <h1>{{ project.name }}</h1>
    <p v-if="project.tagline" class="tagline">{{ project.tagline }}</p>
    <span class="badge badge-primary">
      {{ project.status }}
    </span>
  </header>
</template>

<style scoped>
.project-header {
  text-align: center;
  padding: var(--space-8) 0;
}

.project-header h1 {
  font-family: var(--font-display);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin: 0;
}

.tagline {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  margin: var(--space-2) 0;
}
</style>
