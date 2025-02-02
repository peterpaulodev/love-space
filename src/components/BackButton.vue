<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToMenu = () => {
  router.push({ path: '/menu' })
}
</script>

<template>
  <button
    @click="goToMenu"
    type="button"
    class="w-13 mt-4 text-gray-900 bg-gray-200/80 focus:ring-4 font-medium rounded-full text-lg p-2.5 text-center inline-flex items-center me-2"
  >
    <svg
      class="w-[34px] h-[34px] text-gray-800"
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
        stroke-width="3"
        d="m15 19-7-7 7-7"
      />
    </svg>
  </button>
</template>
