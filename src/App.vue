<script setup>
import { RouterView, useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
import { initFlowbite } from 'flowbite'

const route = useRoute()

onMounted(() => {
  initFlowbite()

  // Initial check on mount
  toggleOverflowClass(route.path)
})

// Watch for route changes
watch(
  () => route.path,
  (newPath) => {
    toggleOverflowClass(newPath)
  },
)

function toggleOverflowClass(path) {
  if (path === '/') {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
</script>

<template>
  <RouterView />
</template>
