import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // Sidebar
  const sidebarOpen = ref(false)

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  // Modal
  const modalOpen = ref(false)
  const modalComponent = ref<string | null>(null)
  const modalProps = ref<Record<string, unknown>>({})

  function openModal(component: string, props: Record<string, unknown> = {}) {
    modalComponent.value = component
    modalProps.value = props
    modalOpen.value = true
  }

  function closeModal() {
    modalOpen.value = false
    modalComponent.value = null
    modalProps.value = {}
  }

  // Toast
  const toasts = ref<Array<{ id: string; message: string; type: 'info' | 'success' | 'error' }>>([])

  function addToast(message: string, type: 'info' | 'success' | 'error' = 'info') {
    const id = Date.now().toString()
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, 5000)
  }

  return {
    sidebarOpen,
    toggleSidebar,
    modalOpen,
    modalComponent,
    modalProps,
    openModal,
    closeModal,
    toasts,
    addToast,
  }
})
