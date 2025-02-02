<script setup>
defineOptions({
  name: 'ScrollDownButton',
})

import { useRouter } from 'vue-router'

const router = useRouter()
const goToHome = () => {
  router.push({ path: '/menu' })
}
</script>

<template>
  <button
    @click="goToHome"
    type="button"
    class="justify-center h-15 text-white bg-[#f6a7af] focus:ring-4 focus:outline-none focus:ring-blue-300 w-full max-w-sm font-medium rounded-full text-lg pl-5 p-2.5 text-center inline-flex items-center me-2 mb-4"
  >
    Próximo
    <svg
      class="w-6 h-6 text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m9 5 7 7-7 7"
      />
    </svg>

    <span class="sr-only">Icon description</span>
  </button>
</template>
