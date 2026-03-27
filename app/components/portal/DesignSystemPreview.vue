<script setup lang="ts">
import { useProject } from '~/composables/useProject'

const { project } = useProject()
</script>

<template>
  <section class="card">
    <div class="card-body">
      <h2 class="text-lg font-semibold" style="margin-bottom: var(--space-4)">Design System</h2>
      <div class="swatches">
        <div
          class="swatch"
          :style="{ backgroundColor: project.brand.primary || project.themeColor }"
        >
          <span class="swatch-label">Primary</span>
          <span class="swatch-value">{{ project.brand.primary || project.themeColor }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.swatches {
  display: flex;
  gap: var(--space-3);
}

.swatch {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-on-primary);
  font-size: var(--font-size-xs);
  text-align: center;
}

.swatch-label {
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.swatch-value {
  opacity: 0.8;
  margin-top: var(--space-1);
}
</style>
