<script setup lang="ts">
import { ref } from 'vue'

const screens = ref<Array<{ slug: string; title: string }>>([])
</script>

<template>
  <section class="card">
    <div class="card-body">
      <h2 class="text-lg font-semibold" style="margin-bottom: var(--space-4)">Prototype Screens</h2>
      <div v-if="screens.length === 0" class="empty-state" style="padding: var(--space-8) 0">
        <p class="empty-desc">No prototype screens yet. They'll appear here once generated.</p>
      </div>
      <nav v-else class="nav">
        <a
          v-for="screen in screens"
          :key="screen.slug"
          :href="`/preview/${screen.slug}`"
          class="nav-item"
        >
          {{ screen.title }}
        </a>
      </nav>
    </div>
  </section>
</template>
