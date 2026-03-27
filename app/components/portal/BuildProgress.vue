<script setup lang="ts">
import { useProject } from '~/composables/useProject'

const { project } = useProject()

const steps = [
  { key: 'interpret', label: 'Brief interpreted' },
  { key: 'holy-docs', label: 'Generating specifications' },
  { key: 'assets', label: 'Building design system' },
  { key: 'page-specs', label: 'Creating page specs' },
  { key: 'prototypes', label: 'Building prototype screens' },
  { key: 'ready', label: 'Ready for review' },
]

function stepStatus(index: number): 'done' | 'active' | 'pending' {
  const progress = project.value.job.progress || 0
  const stepProgress = index / steps.length
  if (progress > stepProgress + 1 / steps.length) return 'done'
  if (progress > stepProgress) return 'active'
  return 'pending'
}
</script>

<template>
  <section class="card">
    <div class="card-body">
      <h2 class="text-lg font-semibold" style="margin-bottom: var(--space-4)">Build Progress</h2>
      <ol class="steps">
        <li
          v-for="(step, i) in steps"
          :key="step.key"
          :data-status="stepStatus(i)"
          class="step"
        >
          <span class="step-indicator">
            <template v-if="stepStatus(i) === 'done'">&#10003;</template>
            <template v-else-if="stepStatus(i) === 'active'">&#9673;</template>
            <template v-else>&#9675;</template>
          </span>
          <span class="step-label">{{ step.label }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.step {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
}

.step[data-status='done'] {
  color: var(--color-success);
}

.step[data-status='active'] {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.step[data-status='pending'] {
  color: var(--color-text-muted);
}

.step-indicator {
  width: 1.25rem;
  text-align: center;
}
</style>
